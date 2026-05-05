"""
MkDocs 钩子：构建完成后，向 search_index.json 注入中文字符 n-gram，
实现无词典的精确中文短语搜索。

原理：
  文档含"光计算" → 提取 n-gram：光计、计算、光计算 → 追加进 docs[].text
  用户搜"光计算" → 浏览器端分词器把它作为整体 token → 精确命中 → 找到文章
  无需词典，任意中文词组均适用。
"""

import json
import os
import re

# 连续中文字符序列（≥2字）
_CJK = re.compile(r'[一-鿿㐀-䶿]{2,}')


def _extract_ngrams(text: str, min_n: int = 2, max_n: int = 4) -> set[str]:
    """提取文本中所有 CJK 序列的 n-gram（n ∈ [min_n, max_n]）。"""
    grams: set[str] = set()
    for m in _CJK.finditer(text):
        s = m.group()
        for n in range(min_n, min(max_n + 1, len(s) + 1)):
            for i in range(len(s) - n + 1):
                grams.add(s[i : i + n])
    return grams


def on_post_build(config, **kwargs):
    """在生成的 search_index.json 里为每个 doc 追加 CJK n-gram。"""
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
            # 用 ​（已在 separator 中）分隔，确保每个 n-gram 被当作独立 token
            doc["text"] = doc.get("text", "") + "​" + "​".join(sorted(grams))

    with open(idx_path, "w", encoding="utf-8") as f:
        json.dump(data, f, ensure_ascii=False, separators=(",", ":"))
