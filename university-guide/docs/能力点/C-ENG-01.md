# Linux 与 Git 工程环境

- 能力 ID：`C-ENG-01`
- 类型：公共能力
- 修读要求：公共推荐
- 建议窗口：入门与试做（可按兴趣提前或延后）
- 所属领域：工程与科研
- 参考投入：20 小时（不是学期配额）
- 先修能力：无

## 学习成果

- 能在 shell 中导航、组合文本工具、管理进程与编写基础脚本
- 能用 Git 完成提交、分支、合并、冲突处理和远程协作
- 能用环境说明和自动化脚本复现开发环境

## 验收

### 产物

一个带分支历史、合并记录、自动化脚本和可复现环境说明的 Git 仓库

### 合格标准

仓库含至少 2 个功能分支、1 次有记录的冲突解决和 1 次 bisect 定位；shell 脚本启用失败即停并返回正确状态码；新环境按 README 在 15 分钟内可复现实验。

## 视频资源

`视频时长` 是本能力点建议观看章节的合计，不是整门公开课的总时长。

### 主资源：The Missing Semester — The Shell

- 教师/机构：Anish Athalye, Jon Gjengset and Jose Javier Gonzalez Ortiz · Massachusetts Institute of Technology
- 平台与入口：MIT Missing Semester · [打开资源](https://missing.csail.mit.edu/2020/course-shell/)
- 来源类型：`official_university_course`
- 建议章节：Lecture 1: shell navigation, streams, pipes, permissions, processes and shell scripting
- 语言/字幕：English / English transcript
- 建议观看时长：约 1.0 小时
- 编辑评分：<span class="resource-score">90/100</span>
- 评分分项：匹配 29/30 · 来源 20/20 · 深度 16/20 · 实践 14/15 · 可访问 7/10 · 呈现 4/5
- 推荐理由：围绕真实命令行工作流讲解并附可执行练习，学习后即可整理 IC 工具链和批处理脚本。
- 配套材料：视频、文字讲义、命令示例、参考链接和逐项练习。
- 建议练习：完成页面全部 exercises，并写一个批量运行仿真、收集日志和生成摘要的 shell 脚本。
- 核验日期：2026-08-10

### 备选资源：The Missing Semester — Version Control (Git)

- 教师/机构：Anish Athalye, Jon Gjengset and Jose Javier Gonzalez Ortiz · Massachusetts Institute of Technology
- 平台与入口：MIT Missing Semester · [打开资源](https://missing.csail.mit.edu/2020/version-control/)
- 来源类型：`official_university_course`
- 建议章节：Lecture 6: Git data model, staging, branches, remotes, merging, rebasing and recovery
- 语言/字幕：English / English transcript
- 建议观看时长：约 1.0 小时
- 编辑评分：<span class="resource-score">86/100</span>
- 评分分项：匹配 28/30 · 来源 20/20 · 深度 15/20 · 实践 13/15 · 可访问 6/10 · 呈现 4/5
- 推荐理由：从 Git 对象模型解释命令行为，比背命令更容易理解分支、冲突和历史修复。
- 配套材料：视频、文字讲义、图示、命令示例和练习。
- 建议练习：建立功能分支、制造并解决一次冲突，再用 bisect 定位一个刻意加入的错误。
- 核验日期：2026-08-10
