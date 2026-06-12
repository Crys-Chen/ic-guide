#!/usr/bin/env python3
"""
Annotate inherited course pages with a CS自学指南 source notice.

For each course .md file whose basename matches a basename in the
original PKU CS自学指南 fork, insert an italic notice line right after
the H1 heading, linking to the corresponding csdiy.wiki page.

Idempotent: skips files that already contain the notice.
"""
import json
import os
import re
import sys
import urllib.parse

ROOT = '/Users/cosmos/Desktop/WorkStation/ic-guide'
DOCS = os.path.join(ROOT, 'docs', '课程资源')

# Load mapping basename → csdiy URL
with open('/tmp/to_annotate.json') as f:
    pairs = json.load(f)
csdiy_by_basename = dict(pairs)

NOTICE_RE = re.compile(r'继承自\s*\[CS自学指南\]')


def annotate_file(path: str, csdiy_url: str) -> str:
    with open(path, encoding='utf-8') as f:
        content = f.read()
    if NOTICE_RE.search(content):
        return 'skip-already'

    # Find first H1 line (^# ...).
    lines = content.split('\n')
    h1_idx = None
    for i, line in enumerate(lines):
        if line.startswith('# ') and not line.startswith('# #'):
            h1_idx = i
            break
    if h1_idx is None:
        # No H1 found — prepend notice at very top
        notice = f'*注：本课程页继承自 [CS自学指南]({csdiy_url})。*\n\n'
        new = notice + content
    else:
        # Insert blank line + notice + blank line right after H1
        notice_lines = [
            '',
            f'*注：本课程页继承自 [CS自学指南]({csdiy_url})。*',
        ]
        # Keep an empty line after the notice if the next line is non-empty
        if h1_idx + 1 < len(lines) and lines[h1_idx + 1].strip():
            notice_lines.append('')
        new_lines = lines[:h1_idx + 1] + notice_lines + lines[h1_idx + 1:]
        new = '\n'.join(new_lines)

    with open(path, 'w', encoding='utf-8') as f:
        f.write(new)
    return 'annotated'


def main():
    annotated = skipped = missing = 0
    for root, _, files in os.walk(DOCS):
        for fn in files:
            if not fn.endswith('.md') or fn.endswith('.en.md') or fn == 'index.md':
                continue
            if fn not in csdiy_by_basename:
                continue
            path = os.path.join(root, fn)
            url = csdiy_by_basename[fn]
            try:
                result = annotate_file(path, url)
                if result == 'annotated':
                    annotated += 1
                elif result == 'skip-already':
                    skipped += 1
            except Exception as e:
                print(f'[error] {path}: {e}', file=sys.stderr)
    print(f'annotated: {annotated}, skipped (already): {skipped}')


if __name__ == '__main__':
    main()
