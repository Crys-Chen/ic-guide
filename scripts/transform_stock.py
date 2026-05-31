#!/usr/bin/env python3
# -*- coding: utf-8 -*-
import re, sys, glob, os

DIRS = "/Users/cosmos/Desktop/WorkStation/Fudan-ME/docs/科研方向"
SKIP = {"index.md", "全景叙事.md", "todo.md", "计算.md"}
APPLY = "--apply" in sys.argv

NAME_LINK = re.compile(r'\[[^\]]*\]\([^)]*\)')
EM = re.compile(r'quote\.eastmoney\.com/(sh|sz|bj)(\d+)\.html')
EM_HK = re.compile(r'quote\.eastmoney\.com/hk/(\d+)\.html')
YF = re.compile(r'finance\.yahoo\.com/quote/([A-Za-z0-9.\-]+)')
UNLISTED_HINT = re.compile(r'未上市|未单独上市|未挂牌|尚未挂牌|审核中|递表|辅导中|拟收购|被.*收购|控股')

def widgets_for_line(rest):
    """返回 (widget_html_list, kind)；kind in covered/foreign/unlisted/unknown"""
    w = []
    # 按出现顺序收集东方财富代码（sh/sz/bj 与 hk 可能混合，AH 双重）
    spans = []
    for m in re.finditer(r'quote\.eastmoney\.com/(?:(sh|sz|bj)(\d+)|hk/(\d+))\.html', rest):
        if m.group(1):
            spans.append((m.start(), m.group(1), m.group(2)))
        else:
            spans.append((m.start(), 'hk', m.group(3)))
    for m in YF.finditer(rest):
        spans.append((m.start(), 'yf', m.group(1)))
    spans.sort(key=lambda x: x[0])
    for _, mkt, code in spans:
        if mkt == 'yf':
            if '.' in code:  # 非美海外股（.KS/.T/.TW/.AX/.VI/.TWO 等）→ 行情链接回退
                url = "https://finance.yahoo.com/quote/" + code
                w.append('<a class="sq-na-link" href="%s" target="_blank" rel="noopener">行情↗</a>' % url)
            else:
                w.append('<span class="sq" data-stock="us:%s"></span>' % code)
        else:
            w.append('<span class="sq" data-stock="%s:%s"></span>' % (mkt, code))
    if w:
        return w, 'covered'
    if UNLISTED_HINT.search(rest):
        return ['<span class="sq-none">未上市</span>'], 'unlisted'
    return [], 'unknown'

def process(path):
    with open(path, encoding='utf-8') as f:
        lines = f.readlines()
    out = []
    in_ent = False
    changed = 0
    warns = []
    for ln in lines:
        s = ln.rstrip('\n')
        if re.match(r'^### 企业', s):
            in_ent = True; out.append(ln); continue
        if in_ent and (re.match(r'^### 科研院所', s) or re.match(r'^## ', s)):
            in_ent = False; out.append(ln); continue
        if in_ent and re.match(r'^\s*-\s', s):
            nm = NAME_LINK.search(s)
            if not nm:
                warns.append("NO-NAMELINK: " + s); out.append(ln); continue
            prefix = s[:nm.start()]
            namelink = nm.group(0)
            rest = s[nm.end():]
            w, kind = widgets_for_line(rest)
            if kind == 'unknown':
                warns.append("UNPARSED: " + s); out.append(ln); continue
            newline = prefix + namelink + ' ' + ' '.join(w) + '\n'
            if newline != ln:
                changed += 1
            out.append(newline)
        else:
            out.append(ln)
    return ''.join(out), changed, warns

total = 0
for path in sorted(glob.glob(os.path.join(DIRS, "*.md"))):
    if os.path.basename(path) in SKIP: continue
    newtext, changed, warns = process(path)
    if changed or warns:
        print("=== %s : %d 行改写, %d 警告" % (os.path.basename(path), changed, len(warns)))
        for wln in warns: print("   ! " + wln)
        total += changed
    if APPLY and changed:
        with open(path, 'w', encoding='utf-8') as f:
            f.write(newtext)
print("\n总改写行: %d  (%s)" % (total, "已写入" if APPLY else "DRY-RUN，未写入"))
