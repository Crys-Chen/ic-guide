#!/usr/bin/env python3
"""
Post-process site/search/search_index.json to inject CJK n-grams.

mkdocs-static-i18n runs multiple build passes and the search plugin
rewrites search_index.json after our on_post_build hook. So we run this
script AFTER `mkdocs build` finishes (in CI and locally) to patch the
final index.

For each doc, strip ZWSP (jieba word boundaries) and emit all 2..4-char
CJK n-grams as ZWSP-separated tokens appended to doc.text. The search
separator in mkdocs.yml splits on ZWSP, so each n-gram becomes its own
lunr token, enabling exact short-phrase Chinese search.
"""
import json
import os
import re
import sys

_CJK = re.compile(r'[一-鿿㐀-䶿]{2,}')
_ZWSP = '​'


def extract_ngrams(text: str, min_n: int = 2, max_n: int = 4) -> set[str]:
    text = text.replace(_ZWSP, '')
    grams: set[str] = set()
    for m in _CJK.finditer(text):
        s = m.group()
        for n in range(min_n, min(max_n + 1, len(s) + 1)):
            for i in range(len(s) - n + 1):
                grams.add(s[i:i + n])
    return grams


def patch(idx_path: str) -> int:
    if not os.path.exists(idx_path):
        print(f'[inject_ngrams] not found: {idx_path}', file=sys.stderr)
        return 1
    with open(idx_path, encoding='utf-8') as f:
        data = json.load(f)
    # Force lunr to use only English tokenizer/stemmer; the default zh
    # path loads TinySegmenter (a Japanese tokenizer that mis-segments
    # Chinese queries like "存算一体" into single chars). With only 'en',
    # query tokenization follows our configured separator and our injected
    # n-grams become the authoritative match path.
    cfg = data.setdefault('config', {})
    cfg['lang'] = ['en']
    total = 0
    docs = data.get('docs', [])
    for doc in docs:
        grams = set()
        for field in ('text', 'title'):
            grams |= extract_ngrams(doc.get(field, ''))
        if grams:
            # Each n-gram in its own hidden <span> so any excerpt slice
            # containing one always has the matching </span> nearby —
            # avoids unclosed spans hiding subsequent excerpt content.
            payload = ''.join(f'<span style="display:none">{g}</span>'
                              for g in sorted(grams))
            doc['text'] = doc.get('text', '') + payload
            total += len(grams)
    with open(idx_path, 'w', encoding='utf-8') as f:
        json.dump(data, f, ensure_ascii=False, separators=(',', ':'))
    print(f'[inject_ngrams] {idx_path}: {total} n-grams across {len(docs)} docs (lang=en only)')
    return 0


if __name__ == '__main__':
    site_dir = sys.argv[1] if len(sys.argv) > 1 else 'site'
    rc = 0
    for root, _, files in os.walk(site_dir):
        if 'search_index.json' in files:
            rc |= patch(os.path.join(root, 'search_index.json'))
    sys.exit(rc)
