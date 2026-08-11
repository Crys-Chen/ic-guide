#!/usr/bin/env python3
"""Offline checks for built pages, internal links and the resource index."""

from __future__ import annotations

import argparse
from html.parser import HTMLParser
import json
from pathlib import Path
import sys
from urllib.parse import unquote, urljoin, urlparse

import yaml


ROOT = Path(__file__).resolve().parents[1]
EXPECTED_WINDOWS = {"start", "foundation", "core", "specialization", "integration"}
EXPECTED_ROLES = {"primary", "backup"}
EXPECTED_DURATION_BANDS = {"le1", "1to5", "5to10", "gt10"}
REQUIRED_ROW_ATTRIBUTES = {
    "data-window", "data-directions", "data-role", "data-language",
    "data-duration", "data-source", "data-search",
}


def load_list(path: Path) -> list[dict]:
    value = yaml.safe_load(path.read_text(encoding="utf-8"))
    if not isinstance(value, list):
        raise ValueError(f"{path.name} 顶层不是列表")
    return value


class Page(HTMLParser):
    def __init__(self) -> None:
        super().__init__(convert_charrefs=True)
        self.ids: set[str] = set()
        self.links: list[str] = []
        self.viewport = False
        self.rows: list[dict[str, str]] = []
        self.select: str | None = None
        self.options: dict[str, set[str]] = {}

    def handle_starttag(self, tag: str, attrs: list[tuple[str, str | None]]) -> None:
        values = {key: value or "" for key, value in attrs}
        if values.get("id"):
            self.ids.add(values["id"])
        if values.get("name"):
            self.ids.add(values["name"])
        if tag in {"a", "link"} and values.get("href"):
            self.links.append(values["href"])
        if tag == "script" and values.get("src"):
            self.links.append(values["src"])
        if tag == "meta" and values.get("name", "").lower() == "viewport":
            self.viewport = "width=device-width" in values.get("content", "").replace(" ", "")
        if tag == "tr" and any(key.startswith("data-") for key in values):
            self.rows.append(values)
        if tag == "select":
            self.select = values.get("id") or None
            if self.select:
                self.options.setdefault(self.select, set())
        if tag == "option" and self.select and values.get("value"):
            self.options[self.select].add(values["value"])

    def handle_endtag(self, tag: str) -> None:
        if tag == "select":
            self.select = None


def parse_page(path: Path) -> Page:
    parser = Page()
    parser.feed(path.read_text(encoding="utf-8"))
    return parser


def resolve_local(site: Path, current: Path, href: str) -> tuple[Path | None, str]:
    parsed = urlparse(href)
    if parsed.scheme or parsed.netloc or href.startswith(("mailto:", "tel:", "javascript:", "data:")):
        return None, ""
    fragment = unquote(parsed.fragment)
    path_part = unquote(parsed.path)
    if not path_part:
        return current, fragment
    if path_part.startswith("/"):
        target = site / path_part.lstrip("/")
    else:
        base = current.parent.as_uri() + "/"
        target = Path(unquote(urlparse(urljoin(base, path_part)).path))
    if target.is_dir():
        target = target / "index.html"
    elif not target.exists() and not target.suffix:
        target = target / "index.html"
    return target, fragment


def main() -> int:
    parser = argparse.ArgumentParser()
    parser.add_argument("--site", default="site")
    args = parser.parse_args()
    site = (ROOT / args.site).resolve()
    errors: list[str] = []
    if not site.is_dir():
        print(f"ERROR: 站点目录不存在：{site}")
        return 1

    html_files = sorted(site.rglob("*.html"))
    pages = {path: parse_page(path) for path in html_files}
    if not html_files:
        errors.append("没有构建出的 HTML")
    for path, page in pages.items():
        label = path.relative_to(site)
        if not page.viewport:
            errors.append(f"{label}: 缺少移动端 viewport")
        for href in page.links:
            target, fragment = resolve_local(site, path, href)
            if target is None:
                continue
            try:
                target.relative_to(site)
            except ValueError:
                errors.append(f"{label}: 内部链接逃出 site：{href}")
                continue
            if not target.exists():
                errors.append(f"{label}: 内部链接不存在：{href}")
                continue
            if fragment and target.suffix == ".html":
                target_page = pages.get(target) or parse_page(target)
                if fragment not in target_page.ids:
                    errors.append(f"{label}: 锚点不存在：{href}")

    required_pages = [
        site / "index.html",
        site / "视频资源" / "index.html",
        site / "能力点" / "C-MATH-01" / "index.html",
        site / "专业路线" / "T-DEV" / "index.html",
    ]
    for path in required_pages:
        if path not in pages:
            errors.append(f"缺少代表性页面：{path.relative_to(site)}")

    videos = load_list(ROOT / "data" / "common_videos.yml") + load_list(ROOT / "data" / "track_videos.yml")
    tracks = load_list(ROOT / "data" / "tracks.yml")
    asset_rows = json.loads((ROOT / "docs" / "assets" / "resources.json").read_text(encoding="utf-8"))
    if len(videos) != 112 or len(asset_rows) != 112:
        errors.append(f"资源数据/YAML 应为 112，实际 {len(asset_rows)}/{len(videos)}")
    video_pairs = {(row["competency_id"], row["role"], row["url"]) for row in videos}
    asset_pairs = {(row["competency_id"], row["role"], row["url"]) for row in asset_rows}
    if video_pairs != asset_pairs:
        errors.append("resources.json 与视频 YAML 不一致")

    resource_path = site / "视频资源" / "index.html"
    if resource_path in pages:
        resource_page = pages[resource_path]
        if len(resource_page.rows) != 112:
            errors.append(f"资源表应有 112 行，实际 {len(resource_page.rows)}")
        for index, row in enumerate(resource_page.rows, start=1):
            missing = REQUIRED_ROW_ATTRIBUTES - set(row)
            if missing:
                errors.append(f"资源表第 {index} 行缺少 {sorted(missing)}")
            try:
                float(row.get("data-duration", ""))
            except ValueError:
                errors.append(f"资源表第 {index} 行时长不是数值")
        options = resource_page.options
        expected_directions = {"公共"} | {
            direction for track in tracks for direction in track["directions"]
        }
        expected_languages = {row["language"] for row in videos}
        expected_sources = {row["source_kind"] for row in videos}
        expected = {
            "filter-window": EXPECTED_WINDOWS,
            "filter-direction": expected_directions,
            "filter-role": EXPECTED_ROLES,
            "filter-language": expected_languages,
            "filter-duration": EXPECTED_DURATION_BANDS,
            "filter-source": expected_sources,
        }
        for control, values in expected.items():
            if options.get(control) != values:
                errors.append(f"{control} 选项不完整：{sorted(options.get(control, set()) ^ values)}")
        for element_id in ("filter-query", "filter-reset", "resource-count", "resource-empty", "resource-table"):
            if element_id not in resource_page.ids:
                errors.append(f"资源页缺少控件 #{element_id}")

    css = (ROOT / "docs" / "stylesheets" / "extra.css").read_text(encoding="utf-8")
    js = (ROOT / "docs" / "javascripts" / "resource-filter.js").read_text(encoding="utf-8")
    for marker in ("@media (max-width: 44.9rem)", "overflow-x: auto", "-webkit-overflow-scrolling: touch"):
        if marker not in css:
            errors.append(f"移动端 CSS 缺少：{marker}")
    for marker in ("applyFilters", "row.hidden", "filter-reset", "resource-count", "resource-empty", "DOMContentLoaded"):
        if marker not in js:
            errors.append(f"筛选脚本缺少：{marker}")

    for error in errors:
        print(f"ERROR: {error}")
    if errors:
        return 1
    print(
        f"OK: {len(html_files)} 个 HTML、全部内部链接/锚点、移动端 viewport/CSS、"
        f"112 行资源表和 7 类组合筛选静态检查通过。"
    )
    return 0


if __name__ == "__main__":
    sys.exit(main())
