#!/usr/bin/env python3
"""Validate curriculum, route, course-mapping and video YAML data."""

from __future__ import annotations

import argparse
from collections import Counter, defaultdict
import datetime as dt
import math
from pathlib import Path
import sys
from urllib.parse import urlparse

import yaml


ROOT = Path(__file__).resolve().parents[1]
DATA = ROOT / "data"
COMPETENCY_FILES = [DATA / "common_competencies.yml", DATA / "track_competencies.yml"]
VIDEO_FILES = [DATA / "common_videos.yml", DATA / "track_videos.yml"]

COMPETENCY_FIELDS = {
    "id", "name", "suggested_window", "domain", "prerequisites", "outcomes",
    "estimated_hours", "deliverable", "assessment", "evidence", "requirement", "type",
}
VIDEO_FIELDS = {
    "competency_id", "role", "title", "instructor", "institution", "platform",
    "url", "section", "language", "subtitles", "duration_hours", "score",
    "score_breakdown", "reason", "checked_at", "source_kind", "materials", "exercises",
}
TRACK_FIELDS = {
    "id", "name", "directions", "prerequisites", "competencies", "project",
    "project_included", "project_hours", "further_study", "careers",
}
MAPPING_FIELDS = {
    "competency_id", "institution", "program_year", "courses", "track_ids",
    "coverage", "note", "source_url", "verified_at",
}
COURSE_FIELDS = {"course_code", "course_name", "module"}
SCORE_LIMITS = {
    "fit": 30,
    "authority": 20,
    "depth": 20,
    "practice": 15,
    "access": 10,
    "presentation": 5,
}
EXPECTED_DIRECTIONS = {
    "半导体器件与先进工艺", "功率半导体与宽禁带器件", "光电子与硅光集成",
    "MEMS与微纳传感器", "先进封装与异构集成", "模拟与混合信号IC",
    "射频与毫米波IC", "生物电子与脑机接口", "处理器架构与编译系统",
    "可重构计算与FPGA", "存算一体与近存计算", "EDA与设计自动化",
    "硬件安全与可信计算", "AI算法与系统", "具身智能",
    "量子计算与量子芯片", "类脑芯片",
}
SUGGESTED_WINDOWS = {"start", "foundation", "core", "specialization", "integration"}
FRESHNESS_DAYS = 180


def load_list(path: Path) -> list[dict]:
    if not path.exists():
        raise ValueError(f"缺少数据文件：{path.relative_to(ROOT)}")
    data = yaml.safe_load(path.read_text(encoding="utf-8"))
    if not isinstance(data, list):
        raise ValueError(f"{path.name} 顶层必须是列表")
    if not all(isinstance(row, dict) for row in data):
        raise ValueError(f"{path.name} 的每项必须是映射")
    return data


def is_number(value: object) -> bool:
    return isinstance(value, (int, float)) and not isinstance(value, bool) and math.isfinite(value)


def require_fields(
    kind: str,
    row: dict,
    fields: set[str],
    errors: list[str],
    allow_empty: set[str] | None = None,
) -> None:
    allow_empty = allow_empty or set()
    label = row.get("id") or row.get("competency_id") or "<未知>"
    missing = fields - set(row)
    if missing:
        errors.append(f"{kind} {label}: 缺少 {sorted(missing)}")
    for field in fields & set(row):
        value = row[field]
        if field not in allow_empty and (value is None or value == "" or value == []):
            errors.append(f"{kind} {label}: {field} 为空")


def validate_date(
    value: object,
    label: str,
    errors: list[str],
    warnings: list[str],
) -> None:
    try:
        parsed = dt.date.fromisoformat(str(value))
    except (TypeError, ValueError):
        errors.append(f"{label}: 日期不是 YYYY-MM-DD")
        return
    today = dt.date.today()
    if parsed > today:
        errors.append(f"{label}: 日期 {parsed} 在未来")
    elif (today - parsed).days > FRESHNESS_DAYS:
        warnings.append(f"{label}: 距上次核验已超过 {FRESHNESS_DAYS} 天")


def validate_graph(competencies: list[dict], errors: list[str]) -> None:
    by_id = {item.get("id"): item for item in competencies if isinstance(item.get("id"), str)}
    graph: dict[str, list[str]] = {}
    for cid, item in by_id.items():
        prerequisites = item.get("prerequisites")
        if not isinstance(prerequisites, list):
            continue
        graph[cid] = prerequisites
        for pid in prerequisites:
            if not isinstance(pid, str) or pid not in by_id:
                errors.append(f"能力点 {cid}: 不存在的先修 {pid}")

    visiting: set[str] = set()
    visited: set[str] = set()

    def visit(node: str, chain: list[str]) -> None:
        if node in visiting:
            errors.append("能力依赖成环：" + " -> ".join(chain + [node]))
            return
        if node in visited or node not in graph:
            return
        visiting.add(node)
        for parent in graph[node]:
            if parent in graph:
                visit(parent, chain + [node])
        visiting.remove(node)
        visited.add(node)

    for cid in graph:
        visit(cid, [])


def main() -> int:
    parser = argparse.ArgumentParser()
    parser.add_argument("--strict", action="store_true", help="将警告也作为失败处理")
    args = parser.parse_args()
    errors: list[str] = []
    warnings: list[str] = []

    try:
        competencies = sum((load_list(path) for path in COMPETENCY_FILES), [])
        videos = sum((load_list(path) for path in VIDEO_FILES), [])
        tracks = load_list(DATA / "tracks.yml")
        mappings = load_list(DATA / "course_mappings.yml")
    except (OSError, ValueError, yaml.YAMLError) as exc:
        print(f"ERROR: {exc}")
        return 1

    # Competency schema and identity.
    for item in competencies:
        require_fields("能力点", item, COMPETENCY_FIELDS, errors, allow_empty={"prerequisites"})
        cid = item.get("id", "<未知>")
        if not isinstance(cid, str) or not cid:
            errors.append(f"能力点 {cid}: id 必须是非空字符串")
        if item.get("suggested_window") not in SUGGESTED_WINDOWS:
            errors.append(f"能力点 {cid}: suggested_window 不在五个建议窗口中")
        if not isinstance(item.get("prerequisites"), list):
            errors.append(f"能力点 {cid}: prerequisites 必须是列表")
        if not isinstance(item.get("outcomes"), list) or len(item.get("outcomes", [])) < 2:
            errors.append(f"能力点 {cid}: outcomes 至少需要两项")
        elif not all(isinstance(value, str) and value.strip() for value in item["outcomes"]):
            errors.append(f"能力点 {cid}: outcomes 必须都是非空字符串")
        if not is_number(item.get("estimated_hours")) or item.get("estimated_hours", 0) <= 0:
            errors.append(f"能力点 {cid}: estimated_hours 必须是正数")
        for field in ("deliverable", "assessment", "evidence"):
            if not isinstance(item.get(field), str) or not item.get(field, "").strip():
                errors.append(f"能力点 {cid}: {field} 必须是非空字符串")
        kind = item.get("type")
        requirement = item.get("requirement")
        if kind == "common" and requirement != "recommended":
            errors.append(f"公共能力点 {cid}: requirement 必须为 recommended")
        elif kind == "specialization" and requirement != "route_recommended":
            errors.append(f"专业能力点 {cid}: requirement 必须为 route_recommended")
        elif kind not in {"common", "specialization"}:
            errors.append(f"能力点 {cid}: type 必须为 common 或 specialization")

    competency_ids = [item.get("id") for item in competencies]
    duplicates = [key for key, count in Counter(competency_ids).items() if count > 1]
    if duplicates:
        errors.append(f"重复能力点 ID：{duplicates}")
    if len(competencies) != 56:
        errors.append(f"能力点应为 56 个，实际 {len(competencies)} 个")
    common = [item for item in competencies if item.get("type") == "common"]
    special = [item for item in competencies if item.get("type") == "specialization"]
    if len(common) != 32 or len(special) != 24:
        errors.append(f"公共/专业能力点应为 32/24，实际 {len(common)}/{len(special)}")
    by_id = {item["id"]: item for item in competencies if isinstance(item.get("id"), str)}
    known_ids = set(by_id)
    common_ids = {item["id"] for item in common}
    special_ids = {item["id"] for item in special}
    validate_graph(competencies, errors)

    # Video schema, scoring, pairing, URL and per-ability workload.
    video_roles: dict[str, Counter] = defaultdict(Counter)
    for video in videos:
        require_fields("视频", video, VIDEO_FIELDS, errors)
        cid = video.get("competency_id")
        role = video.get("role")
        label = f"视频 {cid}/{role}"
        if cid not in known_ids:
            errors.append(f"{label}: 引用不存在的能力点")
        if role not in {"primary", "backup"}:
            errors.append(f"{label}: role 必须是 primary 或 backup")
        elif cid in known_ids:
            video_roles[cid][role] += 1
        duration = video.get("duration_hours")
        if not is_number(duration) or duration <= 0:
            errors.append(f"{label}: duration_hours 必须是正数")
        elif cid in by_id and is_number(by_id[cid].get("estimated_hours")):
            if duration > by_id[cid]["estimated_hours"]:
                errors.append(f"{label}: 视频 {duration}h 超过能力总学时 {by_id[cid]['estimated_hours']}h")
        score = video.get("score")
        minimum = 80 if role == "primary" else 70
        if not is_number(score) or not minimum <= score <= 100:
            errors.append(f"{label}: 分数 {score} 不在 {minimum}–100")
        breakdown = video.get("score_breakdown")
        if not isinstance(breakdown, dict) or set(breakdown) != set(SCORE_LIMITS):
            errors.append(f"{label}: score_breakdown 维度不完整")
        else:
            for dimension, limit in SCORE_LIMITS.items():
                value = breakdown[dimension]
                if not is_number(value) or not 0 <= value <= limit:
                    errors.append(f"{label}: {dimension}={value} 超出 0–{limit}")
            if is_number(score) and all(is_number(value) for value in breakdown.values()):
                if not math.isclose(sum(breakdown.values()), score):
                    errors.append(f"{label}: 分项之和不等于总分 {score}")
        url = video.get("url", "")
        parsed = urlparse(url) if isinstance(url, str) else None
        if not parsed or parsed.scheme not in {"http", "https"} or not parsed.netloc:
            errors.append(f"{label}: URL 非法 {url}")
        if not isinstance(video.get("section"), str) or len(video.get("section", "").strip()) < 8:
            errors.append(f"{label}: section 必须给出可辨识的建议章节")
        validate_date(video.get("checked_at"), f"{label} checked_at", errors, warnings)

    if len(videos) != 112:
        errors.append(f"视频应为 112 项，实际 {len(videos)} 项")
    for cid in known_ids:
        if video_roles[cid]["primary"] != 1 or video_roles[cid]["backup"] != 1:
            errors.append(f"能力点 {cid}: 需要且只能有 1 项主资源和 1 项备选资源")

    # Track identity, direction coverage and prerequisite references.
    for track in tracks:
        require_fields("路线", track, TRACK_FIELDS, errors)
    track_ids = [track.get("id") for track in tracks]
    if len(tracks) != 6 or len(set(track_ids)) != 6:
        errors.append(f"路线应为 6 条且 ID 唯一，实际 {len(tracks)} 条/{len(set(track_ids))} 个 ID")
    known_track_ids = {tid for tid in track_ids if isinstance(tid, str)}
    direction_list: list[str] = []
    mapped_special: list[str] = []
    route_for_special: dict[str, str] = {}
    for track in tracks:
        tid = track.get("id", "<未知>")
        directions = track.get("directions")
        if not isinstance(directions, list) or not directions:
            errors.append(f"路线 {tid}: directions 必须是非空列表")
            directions = []
        direction_list.extend(directions)
        prerequisite_ids = track.get("prerequisites")
        if not isinstance(prerequisite_ids, list):
            errors.append(f"路线 {tid}: prerequisites 必须是列表")
            prerequisite_ids = []
        for cid in prerequisite_ids:
            if cid not in known_ids:
                errors.append(f"路线 {tid}: 不存在的先修 {cid}")
            elif cid not in common_ids:
                errors.append(f"路线 {tid}: 路线先修必须是公共能力，实际为 {cid}")
        track_competencies = track.get("competencies")
        if not isinstance(track_competencies, list) or len(track_competencies) != 4:
            errors.append(f"路线 {tid}: 专业能力点不是 4 个")
            track_competencies = track_competencies if isinstance(track_competencies, list) else []
        for cid in track_competencies:
            if cid not in known_ids:
                errors.append(f"路线 {tid}: 不存在的能力点 {cid}")
                continue
            if cid not in special_ids:
                errors.append(f"路线 {tid}: {cid} 不是专业能力点")
            if by_id[cid].get("route_id") != tid:
                errors.append(f"路线 {tid}: {cid}.route_id={by_id[cid].get('route_id')} 不一致")
            route_for_special[cid] = tid
            mapped_special.append(cid)
        included = track.get("project_included")
        project_hours = track.get("project_hours")
        if not isinstance(included, bool):
            errors.append(f"路线 {tid}: project_included 必须是布尔值")
        if not is_number(project_hours) or project_hours < 0:
            errors.append(f"路线 {tid}: project_hours 必须是非负数")
            project_hours = 0
        if included is True and project_hours != 0:
            errors.append(f"路线 {tid}: 项目已计入能力点时，project_hours 必须为 0")

    mapped_directions = set(direction_list)
    duplicate_directions = [name for name, count in Counter(direction_list).items() if count > 1]
    if mapped_directions != EXPECTED_DIRECTIONS or len(direction_list) != 17 or duplicate_directions:
        errors.append(
            "17 方向必须唯一覆盖；缺少 " + str(sorted(EXPECTED_DIRECTIONS - mapped_directions))
            + "；多出 " + str(sorted(mapped_directions - EXPECTED_DIRECTIONS))
            + "；重复 " + str(sorted(duplicate_directions))
        )
    if set(mapped_special) != special_ids or len(mapped_special) != 24:
        errors.append("六条路线没有各自唯一覆盖全部 24 个专业能力点")

    # One conservative, machine-readable Fudan mapping per competency.
    for mapping in mappings:
        require_fields("课程映射", mapping, MAPPING_FIELDS, errors, allow_empty={"courses", "track_ids"})
    mapping_ids = [mapping.get("competency_id") for mapping in mappings]
    if len(mappings) != 56 or set(mapping_ids) != known_ids or len(mapping_ids) != len(set(mapping_ids)):
        errors.append("课程映射必须对 56 个能力点各有且仅有一条记录")
    for mapping in mappings:
        cid = mapping.get("competency_id")
        label = f"课程映射 {cid}"
        coverage = mapping.get("coverage")
        if coverage not in {"full", "partial", "gap"}:
            errors.append(f"{label}: coverage 必须为 full/partial/gap")
        courses = mapping.get("courses")
        if not isinstance(courses, list):
            errors.append(f"{label}: courses 必须是列表")
            courses = []
        if coverage == "gap" and courses:
            errors.append(f"{label}: gap 记录不应列出课程")
        if coverage in {"full", "partial"} and not courses:
            errors.append(f"{label}: {coverage} 记录必须列出课程")
        for course in courses:
            if not isinstance(course, dict) or set(course) != COURSE_FIELDS:
                errors.append(f"{label}: course 必须且只能包含 {sorted(COURSE_FIELDS)}")
                continue
            for field in COURSE_FIELDS:
                if not isinstance(course.get(field), str) or not course[field].strip():
                    errors.append(f"{label}: course.{field} 必须是非空字符串")
        mapping_track_ids = mapping.get("track_ids")
        if not isinstance(mapping_track_ids, list):
            errors.append(f"{label}: track_ids 必须是列表")
            mapping_track_ids = []
        unknown_tracks = set(mapping_track_ids) - known_track_ids
        if unknown_tracks:
            errors.append(f"{label}: 不存在的路线 {sorted(unknown_tracks)}")
        if cid in special_ids and route_for_special.get(cid) not in mapping_track_ids:
            errors.append(f"{label}: 专业能力未映射到所属路线 {route_for_special.get(cid)}")
        source_url = mapping.get("source_url", "")
        parsed = urlparse(source_url) if isinstance(source_url, str) else None
        if not parsed or parsed.scheme not in {"http", "https"} or not parsed.netloc:
            errors.append(f"{label}: source_url 非法")
        validate_date(mapping.get("verified_at"), f"{label} verified_at", errors, warnings)

    for warning in warnings:
        print(f"WARNING: {warning}")
    for error in errors:
        print(f"ERROR: {error}")
    if errors or (args.strict and warnings):
        return 1
    print(
        f"OK: {len(competencies)} 个能力点、{len(videos)} 项视频、{len(tracks)} 条路线、"
        f"{len(mappings)} 条课程映射；依赖无环、资源质量、路线与方向覆盖校验通过。"
    )
    return 0


if __name__ == "__main__":
    sys.exit(main())
