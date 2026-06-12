"""
MkDocs hook: enhance Chinese search in search_index.json.

Strategy:
1. mkdocs-material's built-in search plugin already runs jieba on CJK
   content at build time, inserting U+200B (ZWSP) at every jieba word
   boundary. So '光计算' becomes '光​计算' — lunr indexes '光' and
   '计算' as separate tokens, never the joined phrase '光计算'.
2. We inject hidden <span style="display:none">…</span> blocks of
   cross-boundary n-grams (length 2..4) at each ZWSP position. lunr
   sees these as additional tokens at the original word's position,
   so phrase queries like '光计算' now hit, and Material's excerpt
   snippet (which slices around the match position) still captures
   actual readable Chinese context.
3. Force config.lang = ['en'] in the index — this disables Material's
   default TinySegmenter on the *query* side, which is a Japanese
   tokenizer that mis-segments Chinese input. The ZWSP-based separator
   in mkdocs.yml does the right thing on the index side.
4. Pre-seed jieba with ECE/microelectronics-specific terms so they
   don't get over-split (e.g. '硅光集成' stays whole, not 硅/光/集成).

This replaces the previous naive end-of-text n-gram append, which
generated low-quality fragments like '光计', '做芯', '体能' that
polluted excerpts and didn't improve recall.
"""

import json
import os
import re

# ──────────────────────────────────────────────────────────────────
# Domain dictionary — seed jieba with terms it likes to over-split.
# Add new terms as the site grows; one per line.
# ──────────────────────────────────────────────────────────────────
_DOMAIN_TERMS = [
    # 器件 / 工艺
    "硅光集成", "硅光子", "光子集成", "异质集成", "三维集成", "先进封装",
    "宽禁带", "宽禁带器件", "功率器件", "半导体器件", "薄膜铌酸锂",
    "光电探测器", "光电子集成", "微纳传感器", "MEMS", "压电",
    # 电路
    "模拟集成电路", "数字集成电路", "射频集成电路", "毫米波",
    "高频电子", "电源管理", "数模混合", "混合信号",
    "锁相环", "压控振荡器", "低噪声放大器", "运算放大器",
    # 计算
    "处理器架构", "存算一体", "近存计算", "可重构计算",
    "类脑芯片", "神经形态", "忆阻器", "脉冲神经网络",
    "量子计算", "量子芯片", "超导量子", "离子阱",
    # AI / 系统
    "大语言模型", "深度学习", "强化学习", "生成模型",
    "硬件加速", "硬件加速器", "AI 芯片", "AI芯片",
    "嵌入式系统", "实时系统", "操作系统", "并行计算",
    # EDA / 安全
    "布局布线", "时序分析", "高层次综合", "硬件安全",
    "侧信道", "硬件木马", "可信计算",
    # 通用
    "复旦大学", "清华大学", "北京大学", "上海交通大学",
    "中国科学院", "中科院",
]

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


def _patch_text(text: str, max_n: int = 4) -> str:
    """Insert cross-boundary n-grams as hidden spans at each ZWSP position.

    The left/right context spans MULTIPLE jieba segments, not just the two
    adjacent ones. When jieba over-splits a 3-char name like '高鸣宇' into
    单字 '高'/'鸣'/'宇', a per-boundary tail+head can only reach length 2, so
    the 3-gram '高鸣宇' was never indexed and the name became unsearchable.
    Accumulating the running CJK tail fixes 3- and 4-char phrases/names.
    """
    if _ZWSP not in text:
        return text

    parts = text.split(_ZWSP)
    out = [parts[0]]
    acc = _cjk_tail(parts[0], max_n - 1)  # running CJK tail of text joined so far
    for i in range(1, len(parts)):
        curr = parts[i]
        # Right context: leading CJK run starting at curr, extended across
        # following fully-CJK segments until we have max_n-1 chars.
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
            if len(seg) < len(part):  # run broke inside this segment
                break
            j += 1
        left = acc
        grams = set()
        if left and right:
            for L in range(2, max_n + 1):
                for take_left in range(1, L):
                    take_right = L - take_left
                    if take_left <= len(left) and take_right <= len(right):
                        grams.add(left[-take_left:] + right[:take_right])
        for g in sorted(grams):
            out.append(_hidden(g))
        out.append(curr)
        acc = _cjk_tail(acc + curr, max_n - 1)
    return ''.join(out)


def on_config(config, **kwargs):
    """Seed jieba dictionary with domain terms before search index is built."""
    try:
        import jieba
        for term in _DOMAIN_TERMS:
            jieba.add_word(term)
    except ImportError:
        # jieba not available — skip, hooks.py will still inject n-grams
        pass
    return config


def on_post_build(config, **kwargs):
    idx_path = os.path.join(config["site_dir"], "search", "search_index.json")
    if not os.path.exists(idx_path):
        return
    with open(idx_path, encoding="utf-8") as f:
        data = json.load(f)
    # Disable TinySegmenter on query side (it's Japanese, mangles Chinese).
    data.setdefault("config", {})["lang"] = ["en"]
    patched = 0
    for doc in data.get("docs", []):
        new_text = _patch_text(doc.get("text", ""))
        if new_text != doc.get("text", ""):
            doc["text"] = new_text
            patched += 1
    with open(idx_path, "w", encoding="utf-8") as f:
        json.dump(data, f, ensure_ascii=False, separators=(",", ":"))
