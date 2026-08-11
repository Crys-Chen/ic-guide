# 计算机组成

- 能力 ID：`C-SYS-03`
- 类型：公共能力
- 修读要求：公共推荐
- 建议窗口：基础工具箱（可按兴趣提前或延后）
- 所属领域：软件与系统
- 参考投入：26 小时（不是学期配额）
- 先修能力：[数字逻辑](./C-CIR-03.md)、[C 与 Python 编程](./C-SYS-01.md)

## 学习成果

- 能解释指令集、数据通路、控制器、存储层次和 I/O 的协同工作
- 能读写基础汇编并追踪 C 程序到机器执行的映射
- 能实现并测试一个简化处理器或其关键部件

## 验收

### 产物

一个可运行测试程序的简化 RISC-V 单周期或多周期处理器仿真项目

### 合格标准

通过不少于 30 个覆盖算术、访存、分支和跳转的 ISA 测试；寄存器和内存终态与参考模型逐项一致；综合无锁存器并给出关键路径与最高频率。

## 视频资源

`视频时长` 是本能力点建议观看章节的合计，不是整门公开课的总时长。

### 主资源：Computer Architecture

- 教师/机构：Smruti Ranjan Sarangi · Indian Institute of Technology Delhi
- 平台与入口：NPTEL · [打开资源](https://nptel.ac.in/courses/106102157)
- 来源类型：`official_national_course`
- 建议章节：Weeks 1–3, 6 and 9–10: bits, assembly/ISA, digital logic, processor design and pipeline
- 语言/字幕：English / English
- 建议观看时长：约 12.0 小时
- 编辑评分：<span class="resource-score">92/100</span>
- 评分分项：匹配 30/30 · 来源 20/20 · 深度 19/20 · 实践 11/15 · 可访问 8/10 · 呈现 4/5
- 推荐理由：从位表示、汇编和 ISA 逐步推到处理器、流水线和存储层次，适合建立软硬件接口的完整本科主线。
- 配套材料：分周视频、课程大纲和 NPTEL 作业信息。
- 建议练习：为一段汇编追踪指令执行，并实现、仿真和测试一个简化单周期处理器。
- 核验日期：2026-08-10

### 备选资源：6.004 Computation Structures — Assembly and Processor Modules

- 教师/机构：Chris Terman · Massachusetts Institute of Technology
- 平台与入口：MIT OpenCourseWare · [打开资源](https://ocw.mit.edu/courses/6-004-computation-structures-spring-2017/pages/c10/c10s2/)
- 来源类型：`official_university_course`
- 建议章节：Sections 10–14 topic videos: assembly, procedures, instruction encoding, processor implementation and memory
- 语言/字幕：English / English transcript
- 建议观看时长：约 8.0 小时
- 编辑评分：<span class="resource-score">86/100</span>
- 评分分项：匹配 28/30 · 来源 20/20 · 深度 17/20 · 实践 10/15 · 可访问 7/10 · 呈现 4/5
- 推荐理由：视频切成单一概念并配即时检查，适合针对指令编码、数据通路或存储器某个薄弱点补课。
- 配套材料：Topic Videos、Check Yourself、讲义、练习和实验。
- 建议练习：完成 Sections 10–14 检查题，并为一段汇编画出逐周期数据通路状态。
- 核验日期：2026-08-10
