#!/usr/bin/env python3
"""Check video URLs and write a machine-readable report."""

from __future__ import annotations

import argparse
from concurrent.futures import ThreadPoolExecutor
import json
import socket
import ssl
import sys
from pathlib import Path
from urllib.error import HTTPError, URLError
from urllib.parse import urljoin
from urllib.request import Request, urlopen

import yaml


ROOT = Path(__file__).resolve().parents[1]
DATA = ROOT / "data"
USER_AGENT = "Mozilla/5.0 (compatible; IC-University-Guide-LinkCheck/1.0)"
REDIRECT_CODES = {301, 302, 303, 307, 308}
MAX_REDIRECTS = 8


def load_videos() -> list[dict]:
    rows: list[dict] = []
    for name in ("common_videos.yml", "track_videos.yml"):
        rows.extend(yaml.safe_load((DATA / name).read_text(encoding="utf-8")))
    return rows


def probe(
    url: str,
    timeout: float,
    redirects_left: int = MAX_REDIRECTS,
    seen: frozenset[str] = frozenset(),
) -> dict:
    if url in seen:
        return {
            "status": None,
            "final_url": url,
            "result": "browser_review",
            "error": "检测到重定向循环",
        }
    seen = seen | {url}
    request = Request(url, method="HEAD", headers={"User-Agent": USER_AGENT})
    try:
        with urlopen(request, timeout=timeout, context=ssl.create_default_context()) as response:
            return {"status": response.status, "final_url": response.geturl(), "result": "ok"}
    except HTTPError as exc:
        if exc.code in REDIRECT_CODES:
            location = exc.headers.get("Location")
            if not location:
                return {
                    "status": exc.code,
                    "final_url": url,
                    "result": "browser_review",
                    "error": "重定向响应缺少 Location",
                }
            if redirects_left <= 0:
                return {
                    "status": exc.code,
                    "final_url": url,
                    "result": "failed",
                    "error": "重定向次数超过上限",
                }
            redirected = urljoin(url, location)
            result = probe(redirected, timeout, redirects_left - 1, seen)
            result.setdefault("redirected_from", url)
            return result
        if exc.code == 405:
            get_request = Request(
                url,
                method="GET",
                headers={"User-Agent": USER_AGENT, "Range": "bytes=0-1023"},
            )
            try:
                with urlopen(get_request, timeout=timeout, context=ssl.create_default_context()) as response:
                    return {"status": response.status, "final_url": response.geturl(), "result": "ok"}
            except HTTPError as get_exc:
                if get_exc.code in {401, 403, 429}:
                    return {"status": get_exc.code, "final_url": url, "result": "browser_review"}
                return {"status": get_exc.code, "final_url": url, "result": "failed"}
            except (URLError, socket.timeout, TimeoutError) as get_exc:
                return {"status": None, "final_url": url, "result": "failed", "error": str(get_exc)}
        if exc.code in {401, 403, 429}:
            return {"status": exc.code, "final_url": url, "result": "browser_review"}
        return {"status": exc.code, "final_url": url, "result": "failed"}
    except (URLError, socket.timeout, TimeoutError) as exc:
        return {"status": None, "final_url": url, "result": "failed", "error": str(exc)}


def main() -> int:
    parser = argparse.ArgumentParser()
    parser.add_argument("--report", default="reports/link-check.json")
    parser.add_argument("--timeout", type=float, default=12.0)
    parser.add_argument("--workers", type=int, default=8)
    parser.add_argument("--strict", action="store_true")
    args = parser.parse_args()
    videos = load_videos()

    def check(video: dict) -> dict:
        result = probe(video["url"], args.timeout)
        return {
            "competency_id": video["competency_id"],
            "role": video["role"],
            "title": video["title"],
            "url": video["url"],
            **result,
        }

    with ThreadPoolExecutor(max_workers=max(1, args.workers)) as executor:
        report = list(executor.map(check, videos))
    for item in report:
        print(f"{item['result']:14} {item.get('status')} {item['competency_id']} {item['url']}")
    path = ROOT / args.report
    path.parent.mkdir(parents=True, exist_ok=True)
    path.write_text(json.dumps(report, ensure_ascii=False, indent=2) + "\n", encoding="utf-8")
    failed = [item for item in report if item["result"] == "failed"]
    review = [item for item in report if item["result"] == "browser_review"]
    print(f"完成：{len(report)} 项，失败 {len(failed)}，需浏览器复核 {len(review)}。")
    return 1 if failed or (args.strict and review) else 0


if __name__ == "__main__":
    sys.exit(main())
