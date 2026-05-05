"""
MkDocs hook：在搜索插件处理内容前，为 jieba 加载 ECE 领域自定义词典。
这样"光计算"、"存算一体"等专业术语会被当成整词索引，避免被拆散。
"""

import os

def on_config(config):
    try:
        import jieba
        dict_path = os.path.join(os.path.dirname(__file__), "docs", "jieba_dict.txt")
        if os.path.exists(dict_path):
            jieba.load_userdict(dict_path)
    except ImportError:
        pass
    return config
