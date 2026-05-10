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


def patch_text(text: str, max_n: int = 4) -> str:
    """Insert hidden n-gram spans at ZWSP boundaries inside the original text.

    Plus a trailing block of all unique CJK n-grams (covers cases where
    original text is too short / disjoint to span boundaries).
    """
    if _ZWSP not in text:
        return text

    # Split on ZWSP; rejoin with hidden cross-boundary n-gram spans.
    parts = text.split(_ZWSP)
    out = [parts[0]]
    all_grams: set[str] = set()
    for i in range(1, len(parts)):
        prev, curr = parts[i - 1], parts[i]
        # Gather contiguous CJK tail of prev and head of curr.
        # Tail of prev: last contiguous CJK chars (up to max_n-1).
        tail = ''
        for ch in reversed(prev):
            if _CJK_CHAR.match(ch):
                tail = ch + tail
                if len(tail) >= max_n - 1:
                    break
            else:
                break
        # Head of curr: first contiguous CJK chars (up to max_n-1).
        head = ''
        for ch in curr:
            if _CJK_CHAR.match(ch):
                head += ch
                if len(head) >= max_n - 1:
                    break
            else:
                break
        # Generate cross-boundary n-grams of length 2..max_n.
        boundary_grams = set()
        if tail and head:
            for L in range(2, max_n + 1):
                for take_left in range(1, L):
                    take_right = L - take_left
                    if take_left <= len(tail) and take_right <= len(head):
                        boundary_grams.add(tail[-take_left:] + head[:take_right])
        # Insert hidden spans at the boundary position (between prev and curr),
        # so lunr's match position lands here — exactly between two visible CJK
        # chars, which is what we want for excerpts.
        for g in sorted(boundary_grams):
            out.append(_hidden(g))
            all_grams.add(g)
        out.append(curr)
    # Fallback: append all unique 2..max_n n-grams of contiguous CJK runs
    # at the very end, in case some n-grams weren't covered by boundaries
    # (e.g., n-grams entirely within one jieba-token are already a single
    # chunk and never span ZWSP — but lunr already indexes those as the
    # whole jieba token, so they're searchable as exact match).
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
