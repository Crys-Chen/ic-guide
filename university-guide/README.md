# 大学 IC 培养指南

这是一个独立、数据驱动的 Markdown 站点包，面向全国 IC / 微电子本科生。它以自由探索、项目反馈和先修导航为主线，包含 56 个能力点、六条专业路线、每个能力点的主/备选视频，以及对现有 IC 自学指南的审计和可合并改进建议。

## 快速使用

```bash
python3 -m venv .venv
. .venv/bin/activate
python -m pip install -r requirements.txt
python scripts/validate.py
python scripts/render.py
mkdocs serve
```

严格验收：

```bash
python scripts/validate.py --strict
python scripts/render.py --check
mkdocs build --strict
python scripts/check_site.py
python scripts/check_links.py --strict --report reports/link-check.json
```

本包不预设公开域名，`mkdocs.yml` 因此不设 `site_url`。本次验收环境为 Python 3.9.6、MkDocs 1.6.1、Material for MkDocs 9.7.7 与 PyYAML 6.0.3；`requirements.txt` 已锁定这些版本。

## 数据边界

- `data/common_competencies.yml`：32 个公共能力点。
- `data/track_competencies.yml`：六条路线共 24 个专业能力点。
- `data/common_videos.yml` 与 `data/track_videos.yml`：每个能力点一项主资源和一项备选资源。
- `data/tracks.yml`：六条路线与 17 个科研方向的映射。
- 能力点的 `suggested_window` 是非学期的建议进入窗口，不构成修读顺序。
- `data/course_mappings.yml`：复旦 2025 课程—能力—路线的示例映射，包括明确缺口。

`docs/能力点/`、`docs/专业路线/` 和 `docs/视频资源/` 由 `scripts/render.py` 生成，不应手工维护。

完成验收后，优先查看 `docs/验收报告.md`、`reports/link-check.json` 和
`reports/content-spot-check.md`；它们分别记录整体质量门槛、112 条外链状态和六路线内容抽查证据。

## 资源原则

只收录公开可访问的课程或讲座链接，不下载、镜像或重新分发受版权保护的内容。资源评分是本指南的编辑判断，不代表课程提供方。

当前入选资源以英文课程为主，但每条都记录了语言和字幕；这是“来源与内容质量优先”的结果，不是对中文资源的否定。
