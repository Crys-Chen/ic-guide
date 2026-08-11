# EDA 基础

- 能力 ID：`C-SYS-07`
- 类型：公共能力
- 修读要求：公共推荐
- 建议窗口：综合创作与迁移（可按兴趣提前或延后）
- 所属领域：软件与系统
- 参考投入：26 小时（不是学期配额）
- 先修能力：[模拟集成电路](./C-CIR-05.md)、[数字集成电路](./C-CIR-06.md)、[集成电路工艺](./C-PHY-05.md)

## 学习成果

- 能解释从规格、RTL/原理图到 GDS、验证和签核的设计流程
- 能使用至少一条开源 EDA 流程完成综合、时序、布局布线或版图检查
- 能阅读工具报告、约束和日志并定位基础失败原因

## 验收

### 产物

一个含源码、约束、脚本、工具版本和关键报告的开源 RTL-to-GDS 或模拟版图流程包

### 合格标准

干净环境可一条命令完成综合、STA 和布局布线或等价模拟流程；零未约束时序路径、关键检查零错误；日志记录工具版本，产物哈希在重复运行中一致或差异有解释。

## 视频资源

`视频时长` 是本能力点建议观看章节的合计，不是整门公开课的总时长。

### 主资源：VLSI Design Flow — RTL to GDS

- 教师/机构：Sneh Saurabh · Indraprastha Institute of Information Technology Delhi
- 平台与入口：NPTEL · [打开资源](https://nptel.ac.in/courses/108106191)
- 来源类型：`official_national_course`
- 建议章节：Weeks 1–8: RTL-to-GDS overview, Verilog, simulation, Yosys synthesis, formal verification, OpenSTA and constraints
- 语言/字幕：English / English
- 建议观看时长：约 16.0 小时
- 编辑评分：<span class="resource-score">94/100</span>
- 评分分项：匹配 30/30 · 来源 20/20 · 深度 19/20 · 实践 15/15 · 可访问 6/10 · 呈现 4/5
- 推荐理由：每个 EDA 阶段都有开源工具演示，从 RTL 到 GDS 的输入、约束、报告和失败点可以实际复现。
- 配套材料：分周视频、Yosys/OpenSTA/OpenROAD 教程、作业和课程大纲。
- 建议练习：用固定版本工具跑通一个小 RTL 到 GDS 流程，并保存脚本、约束、日志和签核摘要。
- 核验日期：2026-08-10

### 备选资源：VLSI Physical Design

- 教师/机构：Indranil Sengupta · Indian Institute of Technology Kharagpur
- 平台与入口：NPTEL · [打开资源](https://nptel.ac.in/courses/106105161)
- 来源类型：`official_national_course`
- 建议章节：Lectures 1–47: representation, partitioning, floorplanning, placement, routing, clock, timing and DRC
- 语言/字幕：English / English
- 建议观看时长：约 23.5 小时
- 编辑评分：<span class="resource-score">86/100</span>
- 评分分项：匹配 28/30 · 来源 20/20 · 深度 19/20 · 实践 7/15 · 可访问 8/10 · 呈现 4/5
- 推荐理由：对物理设计算法和数据结构推导更深，适合完成工具流后理解布局布线为何给出当前结果。
- 配套材料：逐讲视频、课程大纲与作业信息。
- 建议练习：手工实现一个简化划分或放置算法，并与 OpenROAD 报告中的拥塞和时序现象对照。
- 核验日期：2026-08-10
