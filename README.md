# IC Guide — 集成电路与微电子自学指南

**[https://crys-chen.github.io/ic-guide/](https://crys-chen.github.io/ic-guide/)**

面向 EE / ME 本科生和研究生的集成电路自学路径。站内有 17 个科研方向导览、分学科的课程地图和工程工具教程。内容由有实际经历的人写，持续更新。

---

## 如何成为贡献者

详细说明见站内 [参与建设](https://crys-chen.github.io/ic-guide/参与建设/) 页。下面是硬性的操作指南。

### 仓库结构

```
ic-guide/
├── mkdocs.yml              # 站点配置 + nav + i18n nav_translations
├── template.md             # 新课程页的模板（必读）
├── docs/
│   ├── index.md            # 首页
│   ├── 参与建设.md
│   ├── 科研方向/            # 17 个方向页 + index.md（星图入口）
│   ├── 学习地图/            # 按学科分组的课程页
│   │   ├── 数学/
│   │   ├── 物理/
│   │   ├── 器件与工艺/
│   │   ├── 电路/
│   │   ├── 算法编程/
│   │   ├── 系统架构/
│   │   └── 人工智能/
│   ├── 工程工具/
│   └── stylesheets/extra.css
└── overrides/              # MkDocs Material 主题覆盖
```

**两条铁律**：
1. 新增任何 `.md` 文件，必须同步在 `mkdocs.yml` 的 `nav:` 段加链接——否则页面不出现在导航里。
2. 若该 `.md` 需要英文版，按 `*.en.md` 命名，并在 `mkdocs.yml` 的 `plugins.i18n.languages[en].nav_translations` 加中→英菜单映射。

### 改/补一门课程

1. **找位置**：课程页路径模式是 `docs/学习地图/<学科>/<子分类>/<课程文件>.md`
2. **新增课程页**：复制 [`template.md`](./template.md) 到目标位置，按模板填写
3. **更新 nav**：在 `mkdocs.yml` 对应学科段加一行：
   ```yaml
   - "课程名": "学习地图/<学科>/.../<文件>.md"
   ```
4. **本地验证**：`pip install -r requirements.txt && mkdocs serve`，打开 `http://127.0.0.1:8000` 检查渲染和导航

**文件命名规则**：有课号用 `校名缩写_课号.md`（如 `FDU_MICR130008.md`）；无课号用 `校名缩写_教师拼音.md` 或 `校名缩写_主题.md`；个人创作者用 `作者_主题.md`（如 `karpathy_zero2hero.md`）。分隔符只用下划线。

### 改/补一个科研方向

1. **改已有方向**：编辑 `docs/科研方向/<方向名>.md`。方向页有固定骨架：这个方向在研究什么 / 适合什么样的人 / 核心研究问题 / 代表性机构 / 知识路径 / 入门三步走 / 相关课题组。
2. **新增方向**：
   - 新建 `docs/科研方向/<方向名>.md`，参考现有方向页改
   - 在 `mkdocs.yml` 科研方向段加一行
   - 同步改 `docs/javascripts/orbit-galaxy.js` 里的 `ALL_CARDS` 和 `DIRS`
   - 同步改 `docs/科研方向/index.md` 的 `.rg-fallback` 列表

### 改/补教授

教授条目在 `docs/科研方向/<方向>.md` 的"相关课题组"段，格式如下（严格遵守，否则样式不生效）：

```markdown
-   **[姓名](URL)** <span class="badge-XXX">学校</span>

    子方向1 · 子方向2 · 子方向3
```

- **badge**：`badge-tsinghua` / `badge-pku` / `badge-fudan` / `badge-other`（其他国内）/ `badge-hk` / `badge-intl`
- **URL 必须能打开，且确实是本人主页**，不接受学院/课题组主页
- **子方向描述**必须来自主页 / Google Scholar / 课题组页可见内容，不能自行概括

### 标准 PR 流程

```bash
# Fork & clone
git clone https://github.com/<你的用户名>/ic-guide.git
cd ic-guide

# 装依赖、本地预览
pip install -r requirements.txt
mkdocs serve

# 新建分支、改、提交
git checkout -b feat/add-csapp-page
git add docs/学习地图/系统架构/.../CSAPP.md mkdocs.yml
git commit -m "feat: 补充 CMU 15213 CSAPP 课程页"

# push 到 fork，发 PR
git push origin feat/add-csapp-page
```

PR 标题用一句话讲清楚改了什么（`feat:` / `fix:` / `docs:` 前缀）。PR 描述附上改了哪些文件，以及本地预览截图（如果是新页面）。

> [!CAUTION]
> 上传课程资料前务必对个人信息脱敏：姓名、学号、邮箱、聊天截图都要打码。

发现错误但不想发 PR，[开一个 Issue](https://github.com/Crys-Chen/ic-guide/issues/new) 报告即可——一句话也行。

---

## Star History

[![Star History Chart](https://api.star-history.com/svg?repos=Crys-Chen/ic-guide&type=Timeline)](https://star-history.com/#Crys-Chen/ic-guide&Timeline)

## 鸣谢

<a href="https://github.com/Crys-Chen/ic-guide/graphs/contributors">
  <img src="https://contrib.rocks/image?repo=Crys-Chen/ic-guide"/>
</a>

## 许可

项目贡献者编写的部分依照 [MIT LICENSE](https://www.tawesoft.co.uk/kb/article/mit-license-faq)。

其余部分（包括但不限于站内提到的课程资源、开源书籍及视频内容）遵循原作者规定的许可。
