#!/usr/bin/env python3
"""
Post-process site/search/search_index.json to enable accurate Chinese
phrase search WITH meaningful excerpts.

Strategy:
1. mkdocs-material auto-uses jieba to split CJK words at build time,
   inserting U+200B (ZWSP) at every word boundary. So the original
   '光计算' becomes '光​计算' in doc.text — lunr only sees '光'
   and '计算' as separate tokens, never '光计算'.
2. We inject hidden CJK n-grams (2~4 chars) AT each ZWSP position,
   wrapped in <span style="display:none">. The n-grams span the word
   boundary so lunr now indexes phrases like '光计算'.
3. CRITICAL: by inserting spans IN THE MIDDLE of the original text
   (not at the end), lunr's match position is between original CJK
   chars, so Material's excerpt — which slices around the match —
   captures actual readable Chinese sentences.
4. Spans are hidden, so they don't pollute the visible excerpt.

Also forces config.lang = ['en'] to disable TinySegmenter (a Japanese
tokenizer Material auto-loads for zh, mis-segmenting queries).
"""
import json
import os
import re
import sys

_CJK_CHAR = re.compile(r'[一-鿿㐀-䶿]')
_ZWSP = '​'


def _hidden(text: str) -> str:
    return f'<span style="display:none">{text}</span>'


def _cjk_tail(s: str, k: int) -> str:
    """Trailing contiguous CJK run of s, up to k chars."""
    t = ''
    for ch in reversed(s):
        if _CJK_CHAR.match(ch):
            t = ch + t
            if len(t) >= k:
                break
        else:
            break
    return t


def patch_text(text: str, max_n: int = 4) -> str:
    """Insert hidden cross-boundary n-gram spans at ZWSP positions.

    Left/right context spans MULTIPLE jieba segments (running CJK tail), so
    3- and 4-char names/phrases that jieba over-splits into 单字 (e.g.
    '高鸣宇' → 高/鸣/宇) still get their full n-gram indexed. Without this,
    such names were unsearchable.
    """
    if _ZWSP not in text:
        return text

    parts = text.split(_ZWSP)
    out = [parts[0]]
    acc = _cjk_tail(parts[0], max_n - 1)  # running CJK tail of text joined so far
    for i in range(1, len(parts)):
        curr = parts[i]
        # Right context: leading CJK run from curr, extended across following
        # fully-CJK segments until max_n-1 chars.
        right = ''
        j = i
        while j < len(parts) and len(right) < max_n - 1:
            part = parts[j]
            seg = ''
            for ch in part:
                if _CJK_CHAR.match(ch):
                    seg += ch
                    if len(right) + len(seg) >= max_n - 1:
                        break
                else:
                    break
            right += seg
            if len(seg) < len(part):
                break
            j += 1
        left = acc
        boundary_grams = set()
        if left and right:
            for L in range(2, max_n + 1):
                for take_left in range(1, L):
                    take_right = L - take_left
                    if take_left <= len(left) and take_right <= len(right):
                        boundary_grams.add(left[-take_left:] + right[:take_right])
        for g in sorted(boundary_grams):
            out.append(_hidden(g))
        out.append(curr)
        acc = _cjk_tail(acc + curr, max_n - 1)
    return ''.join(out)


def patch(idx_path: str) -> int:
    if not os.path.exists(idx_path):
        print(f'[inject_ngrams] not found: {idx_path}', file=sys.stderr)
        return 1
    with open(idx_path, encoding='utf-8') as f:
        data = json.load(f)
    cfg = data.setdefault('config', {})
    cfg['lang'] = ['en']  # disable TinySegmenter
    docs = data.get('docs', [])
    patched = 0
    for doc in docs:
        new_text = patch_text(doc.get('text', ''))
        if new_text != doc.get('text', ''):
            doc['text'] = new_text
            patched += 1
    with open(idx_path, 'w', encoding='utf-8') as f:
        json.dump(data, f, ensure_ascii=False, separators=(',', ':'))
    print(f'[inject_ngrams] {idx_path}: patched {patched}/{len(docs)} docs (lang=en)')
    return 0


if __name__ == '__main__':
    site_dir = sys.argv[1] if len(sys.argv) > 1 else 'site'
    rc = 0
    for root, _, files in os.walk(site_dir):
        if 'search_index.json' in files:
            rc |= patch(os.path.join(root, 'search_index.json'))
    sys.exit(rc)
