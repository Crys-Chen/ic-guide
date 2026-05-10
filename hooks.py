"""
MkDocs hook: inject CJK n-grams into search_index.json so short Chinese
phrase queries (e.g. "光计算") match exactly.

NOTE: when mkdocs-static-i18n runs multi-pass build (zh + en),
the final search_index.json gets rewritten AFTER on_post_build fires,
which strips our injection. The authoritative injection happens via
scripts/inject_ngrams.py invoked after `mkdocs build` in CI/local.

This hook is kept as a fallback for plain `mkdocs serve` workflows
(no i18n second pass), where it does still take effect.
"""

import json
import os
import re

_CJK = re.compile(r'[一-鿿㐀-䶿]{2,}')
_ZWSP = '​'


def _extract_ngrams(text: str, min_n: int = 2, max_n: int = 4) -> set[str]:
    """Strip ZWSP (jieba word boundaries), then extract every CJK n-gram."""
    text = text.replace(_ZWSP, '')
    grams: set[str] = set()
    for m in _CJK.finditer(text):
        s = m.group()
        for n in range(min_n, min(max_n + 1, len(s) + 1)):
            for i in range(len(s) - n + 1):
                grams.add(s[i:i + n])
    return grams


def on_post_build(config, **kwargs):
    idx_path = os.path.join(config["site_dir"], "search", "search_index.json")
    if not os.path.exists(idx_path):
        return
    with open(idx_path, encoding="utf-8") as f:
        data = json.load(f)
    for doc in data.get("docs", []):
        grams = set()
        for field in ("text", "title"):
            grams |= _extract_ngrams(doc.get(field, ""))
        if grams:
            doc["text"] = doc.get("text", "") + _ZWSP + _ZWSP.join(sorted(grams))
    with open(idx_path, "w", encoding="utf-8") as f:
        json.dump(data, f, ensure_ascii=False, separators=(",", ":"))
