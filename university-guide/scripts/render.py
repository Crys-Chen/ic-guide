#!/usr/bin/env python3
"""Render the Markdown site and searchable resource data from YAML."""

from __future__ import annotations

import argparse
from collections import Counter
import html
import json
from pathlib import Path
import sys

import yaml


ROOT = Path(__file__).resolve().parents[1]
DATA = ROOT / "data"
DOCS = ROOT / "docs"
GENERATED_DIRS = [DOCS / "能力点", DOCS / "专业路线", DOCS / "视频资源"]
WINDOW_LABELS = {
    "start": "入门与试做",
    "foundation": "基础工具箱",
    "core": "IC 公共核心",
    "specialization": "方向探索与深化",
    "integration": "综合创作与迁移",
}


def load_list(name: str) -> list[dict]:
    return yaml.safe_load((DATA / name).read_text(encoding="utf-8"))


def safe_name(value: str) -> str:
    return value.replace("/", "-").replace(" ", "-")


def link(url: str, label: str) -> str:
    return f"[{label}]({url})"


def md_cell(value: object) -> str:
    return str(value).replace("|", "\\|").replace("\n", "<br>")


def competency_page(item: dict, videos: list[dict], by_id: dict[str, dict]) -> str:
    prerequisites = item["prerequisites"]
    prereq_text = "、".join(
        f"[{by_id[cid]['name']}](./{safe_name(cid)}.md)" for cid in prerequisites
    ) if prerequisites else "无"
    kind = "公共能力" if item["type"] == "common" else "专业能力"
    requirement = "公共推荐" if item["requirement"] == "recommended" else "路线推荐"
    lines = [
        f"# {item['name']}", "",
        f"- 能力 ID：`{item['id']}`",
        f"- 类型：{kind}",
        f"- 修读要求：{requirement}",
        f"- 建议窗口：{WINDOW_LABELS[item['suggested_window']]}（可按兴趣提前或延后）",
        f"- 所属领域：{item['domain']}",
        f"- 参考投入：{item['estimated_hours']} 小时（不是学期配额）",
        f"- 先修能力：{prereq_text}", "",
        "## 学习成果", "",
    ]
    lines.extend(f"- {outcome}" for outcome in item["outcomes"])
    lines.extend([
        "", "## 验收", "",
        "### 产物", "", item["deliverable"], "",
        "### 合格标准", "", item["assessment"], "",
        "## 视频资源", "",
        "`视频时长` 是本能力点建议观看章节的合计，不是整门公开课的总时长。", "",
    ])
    role_order = {"primary": 0, "backup": 1}
    for video in sorted(videos, key=lambda row: role_order[row["role"]]):
        role = "主资源" if video["role"] == "primary" else "备选资源"
        lines.extend([
            f"### {role}：{video['title']}", "",
            f"- 教师/机构：{video['instructor']} · {video['institution']}",
            f"- 平台与入口：{video['platform']} · {link(video['url'], '打开资源')}",
            f"- 来源类型：`{video['source_kind']}`",
            f"- 建议章节：{video['section']}",
            f"- 语言/字幕：{video['language']} / {video['subtitles']}",
            f"- 建议观看时长：约 {video['duration_hours']} 小时",
            f"- 编辑评分：<span class=\"resource-score\">{video['score']}/100</span>",
            "- 评分分项：匹配 {fit}/30 · 来源 {authority}/20 · 深度 {depth}/20 · "
            "实践 {practice}/15 · 可访问 {access}/10 · 呈现 {presentation}/5".format(
                **video["score_breakdown"]
            ),
            f"- 推荐理由：{video['reason']}",
            f"- 配套材料：{video['materials']}",
            f"- 建议练习：{video['exercises']}",
            f"- 核验日期：{video['checked_at']}", "",
        ])
    return "\n".join(lines).rstrip() + "\n"


def track_page(track: dict, by_id: dict[str, dict]) -> str:
    ability_hours = sum(by_id[cid]["estimated_hours"] for cid in track["competencies"])
    project_note = (
        "专项项目由四个能力点的产物整合而成，学时已经计入能力点，不重复增加。"
        if track["project_included"] else
        f"专项项目另计 {track['project_hours']} 小时。"
    )
    lines = [
        f"# {track['name']}", "",
        "## 覆盖方向", "", "、".join(track["directions"]), "",
        "## 建议先修", "",
    ]
    lines.extend(
        f"- [{by_id[cid]['name']}](../能力点/{safe_name(cid)}.md)"
        for cid in track["prerequisites"]
    )
    lines.extend(["", "## 四个专业能力点", ""])
    lines.extend(
        f"{index}. [{by_id[cid]['name']}](../能力点/{safe_name(cid)}.md)"
        for index, cid in enumerate(track["competencies"], 1)
    )
    lines.extend([
        "", f"四项能力的完整参考投入合计 **{ability_hours} 小时**；可只选与项目相关的部分。", "",
        "## 专项项目", "", track["project"], "", project_note, "",
        "## 升学衔接", "",
    ])
    lines.extend(f"- {value}" for value in track["further_study"])
    lines.extend(["", "## 就业衔接", ""])
    lines.extend(f"- {value}" for value in track["careers"])
    return "\n".join(lines).rstrip() + "\n"


def resource_page(
    videos: list[dict],
    by_id: dict[str, dict],
    tracks: list[dict],
) -> tuple[str, list[dict]]:
    track_by_competency = {
        cid: track for track in tracks for cid in track["competencies"]
    }
    directions = ["公共"] + [value for track in tracks for value in track["directions"]]
    languages = sorted({video["language"] for video in videos})
    source_kinds = sorted({video["source_kind"] for video in videos})
    source_labels = {
        "official_international_organization": "国际组织官方课程",
        "official_national_course": "国家级公开课程",
        "official_university_center": "大学研究/伦理中心",
        "official_university_course": "大学官方课程",
        "official_university_library": "大学图书馆",
        "official_university_training": "大学技能培训",
        "official_university_video": "大学官方视频",
        "official_vendor_training": "厂商官方培训",
    }

    lines = [
        "# 视频资源库", "",
        "每个能力点配置一项主资源和一项备选资源。评分是本指南的编辑判断；核验日期表示链接、课程身份与建议章节最后一次复核。可组合筛选，表格在窄屏上可横向滚动。", "",
        '<div class="resource-filters" data-resource-filters>',
        '  <label>关键词<input id="filter-query" type="search" placeholder="标题、机构、能力点或章节"></label>',
        '  <label>建议窗口<select id="filter-window"><option value="">全部</option>',
    ]
    lines.extend(
        f'    <option value="{value}">{label}</option>'
        for value, label in WINDOW_LABELS.items()
    )
    lines.extend([
        "  </select></label>",
        '  <label>方向<select id="filter-direction"><option value="">全部</option>',
    ])
    lines.extend(
        f'    <option value="{html.escape(value, quote=True)}">{html.escape(value)}</option>'
        for value in directions
    )
    lines.extend([
        "  </select></label>",
        '  <label>资源角色<select id="filter-role"><option value="">全部</option><option value="primary">主资源</option><option value="backup">备选资源</option></select></label>',
        '  <label>语言<select id="filter-language"><option value="">全部</option>',
    ])
    lines.extend(
        f'    <option value="{html.escape(value, quote=True)}">{html.escape(value)}</option>'
        for value in languages
    )
    lines.extend([
        "  </select></label>",
        '  <label>建议时长<select id="filter-duration"><option value="">全部</option><option value="le1">≤ 1h</option><option value="1to5">1–5h</option><option value="5to10">5–10h</option><option value="gt10">&gt; 10h</option></select></label>',
        '  <label>来源类型<select id="filter-source"><option value="">全部</option>',
    ])
    lines.extend(
        f'    <option value="{html.escape(value, quote=True)}">{html.escape(source_labels.get(value, value))}</option>'
        for value in source_kinds
    )
    lines.extend([
        "  </select></label>",
        '  <button id="filter-reset" type="button">重置</button>',
        f'  <p class="resource-count" aria-live="polite">显示 <strong id="resource-count">{len(videos)}</strong> / {len(videos)} 项</p>',
        "</div>", "",
        '<p id="resource-empty" class="resource-empty" role="status" hidden>暂无匹配资源，请调整或重置筛选。</p>', "",
        '<div class="table-scroll"><table id="resource-table"><thead><tr>',
        "<th>能力点</th><th>角色</th><th>资源</th><th>机构</th><th>章节</th><th>语言/字幕</th><th>时长</th><th>分数</th><th>核验</th>",
        "</tr></thead><tbody>",
    ])

    resource_rows: list[dict] = []
    role_order = {"primary": 0, "backup": 1}
    for video in sorted(videos, key=lambda row: (row["competency_id"], role_order[row["role"]])):
        competency = by_id[video["competency_id"]]
        track = track_by_competency.get(video["competency_id"])
        row_directions = track["directions"] if track else ["公共"]
        role_label = "主" if video["role"] == "primary" else "备"
        search_text = " ".join([
            competency["name"], video["title"], video["instructor"], video["institution"],
            video["platform"], video["section"], " ".join(row_directions),
        ]).casefold()
        attrs = {
            "window": competency["suggested_window"],
            "directions": "||".join(row_directions),
            "role": video["role"],
            "language": video["language"],
            "duration": str(video["duration_hours"]),
            "source": video["source_kind"],
            "search": search_text,
        }
        attr_text = " ".join(
            f'data-{key}="{html.escape(value, quote=True)}"' for key, value in attrs.items()
        )
        lines.extend([
            f"<tr {attr_text}>",
            f'<td><a href="../能力点/{safe_name(video["competency_id"])}/">{html.escape(competency["name"])}</a></td>',
            f"<td>{role_label}</td>",
            f'<td><a href="{html.escape(video["url"], quote=True)}">{html.escape(video["title"])}</a><br><small>{html.escape(video["platform"])}</small></td>',
            f"<td>{html.escape(video['institution'])}</td>",
            f"<td>{html.escape(video['section'])}</td>",
            f"<td>{html.escape(video['language'])}<br><small>{html.escape(video['subtitles'])}</small></td>",
            f"<td>{video['duration_hours']}h</td><td>{video['score']}</td><td>{video['checked_at']}</td>",
            "</tr>",
        ])
        resource_rows.append({
            **video,
            "competency_name": competency["name"],
            "suggested_window": competency["suggested_window"],
            "directions": row_directions,
            "track_id": track["id"] if track else None,
        })
    lines.extend(["</tbody></table></div>", ""])
    return "\n".join(lines), resource_rows


def course_mapping_page(
    mappings: list[dict],
    by_id: dict[str, dict],
    tracks: list[dict],
) -> str:
    track_by_id = {track["id"]: track for track in tracks}
    coverage_labels = {"full": "完整", "partial": "部分", "gap": "缺口"}
    counts = Counter(mapping["coverage"] for mapping in mappings)
    lines = [
        "# 复旦 2025 培养方案示例映射", "",
        "本页示范如何把一所学校的课程映射到通用能力，再追到六条专业路线。它不是选课承诺：课程实际开设、课号和选课限制以复旦当学期教务系统为准。", "",
        f"当前保守判定为：完整覆盖 **{counts['full']}** 点、部分覆盖 **{counts['partial']}** 点、明确缺口 **{counts['gap']}** 点。即使标为完整，能力页的工程验收产物仍需完成。", "",
        "## 证据边界", "",
        "- [复旦本科及本研融通教学培养方案查询](https://fdjwgl.fudan.edu.cn/manager/bizType/2/page-center/major-program-search-view?skipAuth=1)：正式选课前的最终查询入口。",
        "- [集成电路与微纳电子创新学院本科生培养](https://icmne.fudan.edu.cn/bkspy/list.htm)：学院培养定位与专业边界。",
        "- [复旦 2025 集成电路人才培养官方介绍](https://www.fudan.edu.cn/2025/0603/c24a145666/page.htm)：五大核心教学团队等公开背景。",
        f"- [原 IC 指南收录的 2025 课程表]({mappings[0]['source_url']})：本数据包逐课名称与课号的整理起点；核验日期 {mappings[0]['verified_at']}。", "",
        "!!! note \"关于 FDUROP 与星陈计划\"", "    复旦官方把 FDUROP 的中文简称写作“复芏计划”；这不是“复旦”的错别字，也不是 2025 年集成电路领军人才班“星陈计划”的旧称。两者是不同项目。参见[复旦 FDUROP 官方说明](https://www.fudan.edu.cn/2019/0423/c515a95967/page.htm)与[2025 年教务处用名](https://news.fudan.edu.cn/2025/0401/c3262a144774/page.htm)。", "",
        "## 课程—能力—路线三向映射", "",
        "| 能力 ID | 通用能力 | 复旦 2025 课程（代码） | 模块 | 覆盖 | 直接支撑路线 | 边界说明 |",
        "|---|---|---|---|---|---|---|",
    ]
    for mapping in mappings:
        cid = mapping["competency_id"]
        courses = mapping["courses"]
        course_text = "<br>".join(
            f"{md_cell(course['course_name'])}（`{course['course_code']}`）" for course in courses
        ) or "—"
        modules = "<br>".join(dict.fromkeys(md_cell(course["module"]) for course in courses)) or "—"
        route_text = "<br>".join(
            f"[{track_by_id[tid]['name']}](专业路线/{safe_name(tid)}.md)"
            for tid in mapping["track_ids"]
        ) or "—"
        lines.append(
            f"| `{cid}` | [{md_cell(by_id[cid]['name'])}](能力点/{safe_name(cid)}.md) | "
            f"{course_text} | {modules} | {coverage_labels[mapping['coverage']]} | "
            f"{route_text} | {md_cell(mapping['note'])} |"
        )
    lines.extend([
        "", "## 替代判定", "",
        "一门校内课只有同时覆盖能力页学习成果、完成验收产物并补齐先修缺口，才可替代视频主线。`partial` 表示只选看缺口章节；`gap` 表示该能力仍需另行安排。", "",
    ])
    return "\n".join(lines)


def render_all() -> dict[Path, str]:
    competencies = load_list("common_competencies.yml") + load_list("track_competencies.yml")
    videos = load_list("common_videos.yml") + load_list("track_videos.yml")
    tracks = load_list("tracks.yml")
    mappings = load_list("course_mappings.yml")
    by_id = {item["id"]: item for item in competencies}
    videos_by_id: dict[str, list[dict]] = {cid: [] for cid in by_id}
    for video in videos:
        videos_by_id[video["competency_id"]].append(video)

    outputs: dict[Path, str] = {}
    for item in competencies:
        outputs[DOCS / "能力点" / f"{safe_name(item['id'])}.md"] = competency_page(
            item, videos_by_id[item["id"]], by_id
        )

    ability_index = [
        "# 56 个能力点", "",
        "公共能力点是可按需取用的工具箱，不要求先全部完成；专业能力点按六条路线分组，可围绕项目自由组合。", "",
        "| ID | 能力点 | 类型 | 建议性质 | 建议窗口 | 领域 | 参考投入 |",
        "|---|---|---|---|---|---|---:|",
    ]
    for item in competencies:
        kind = "公共" if item["type"] == "common" else "专业"
        requirement = "公共推荐" if item["requirement"] == "recommended" else "路线推荐"
        ability_index.append(
            f"| `{item['id']}` | [{item['name']}]({safe_name(item['id'])}.md) | {kind} | "
            f"{requirement} | {WINDOW_LABELS[item['suggested_window']]} | {item['domain']} | {item['estimated_hours']}h |"
        )
    outputs[DOCS / "能力点" / "index.md"] = "\n".join(ability_index) + "\n"

    track_index = [
        "# 六条专业路线", "",
        "六条路线是方向地图，不是按年级锁定的课表。可先尝试任意路线项目，再按缺口补建议先修；也可跨路线组合能力。", "",
    ]
    for track in tracks:
        filename = safe_name(track["id"]) + ".md"
        track_index.append(f"- [{track['name']}]({filename})：{'、'.join(track['directions'])}")
        outputs[DOCS / "专业路线" / filename] = track_page(track, by_id)
    outputs[DOCS / "专业路线" / "index.md"] = "\n".join(track_index) + "\n"

    resource_markdown, resource_rows = resource_page(videos, by_id, tracks)
    outputs[DOCS / "视频资源" / "index.md"] = resource_markdown
    outputs[DOCS / "assets" / "resources.json"] = json.dumps(
        resource_rows, ensure_ascii=False, indent=2
    ) + "\n"

    outputs[DOCS / "复旦培养方案映射.md"] = course_mapping_page(mappings, by_id, tracks)
    return outputs


def generated_orphans(expected: set[Path]) -> list[Path]:
    orphans: list[Path] = []
    for directory in GENERATED_DIRS:
        if directory.exists():
            orphans.extend(path for path in directory.glob("*.md") if path not in expected)
    return sorted(orphans)


def main() -> int:
    parser = argparse.ArgumentParser()
    parser.add_argument("--check", action="store_true", help="检查生成文件是否最新，不写文件")
    args = parser.parse_args()
    outputs = render_all()
    expected = set(outputs)
    stale: list[str] = []
    for path, content in outputs.items():
        if args.check:
            if not path.exists() or path.read_text(encoding="utf-8") != content:
                stale.append(str(path.relative_to(ROOT)))
        else:
            path.parent.mkdir(parents=True, exist_ok=True)
            path.write_text(content, encoding="utf-8")
    orphans = generated_orphans(expected)
    if args.check:
        stale.extend(f"{path.relative_to(ROOT)}（孤儿生成页）" for path in orphans)
    else:
        for path in orphans:
            path.unlink()
    if stale:
        print("以下生成文件不是最新：")
        print("\n".join(f"- {item}" for item in stale))
        return 1
    action = "检查" if args.check else "生成"
    print(f"OK: {action} {len(outputs)} 个数据驱动文件；孤儿页检查通过。")
    return 0


if __name__ == "__main__":
    sys.exit(main())
