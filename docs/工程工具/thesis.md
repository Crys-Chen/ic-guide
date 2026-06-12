# 毕业论文排版

本页推荐本站作者开发的工具 **md2thesis**：用 Markdown 写论文正文，一条命令生成符合复旦大学集成电路与微纳电子创新学院格式要求的 `.docx` 文件。其他学校/专业同样可用，格式参数集中在 `format.yaml` 中，对照学院规范修改即可。

> **仓库**：[github.com/Crys-Chen/Markdown2Docx](https://github.com/Crys-Chen/Markdown2Docx)

---

## 它帮你做了什么

Word 手工排版最烦人的几件事，脚本自动处理：

- 每章另起一页
- 三线表（顶线/表头线/底线，清除内部边框）
- 表题自动置于表格上方
- 带 `\tag{}` 的公式编号右对齐
- 可选合并封面、致谢页、附录（提供对应 `.docx` 文件即可）

---

## 快速上手

**依赖**：Pandoc ≥ 3.0（系统级安装）+ Python ≥ 3.9

```bash
git clone https://github.com/Crys-Chen/Markdown2Docx.git
cd Markdown2Docx
pip install -r requirements.txt
```

把论文正文写成 `project/thesis_merged.md`，图片放 `project/figures/`，然后：

```bash
python3 md2thesis.py
```

输出 `project/thesis_draft.docx`；若同时放了封面和致谢，输出 `thesis_final.docx`。

---

## 格式定制

字体、字号、行距、缩进等全部在 `format.yaml` 中集中配置，不需要动主脚本。换一所学校只需对照格式规范改这一个文件。
