# 编译原理

- 能力 ID：`C-SYS-06`
- 类型：公共能力
- 修读要求：公共推荐
- 建议窗口：综合创作与迁移（可按兴趣提前或延后）
- 所属领域：软件与系统
- 参考投入：22 小时（不是学期配额）
- 先修能力：[数据结构与算法](./C-SYS-02.md)、[计算机组成](./C-SYS-03.md)

## 学习成果

- 能解释词法、语法、语义分析和中间表示的编译流水线
- 能实现基础数据流分析、局部优化和代码生成
- 能连接高级语言结构、指令集与硬件性能

## 验收

### 产物

一个支持表达式、控制流和简单优化的教学编译器及测试集

### 合格标准

不少于 30 个正向与 15 个错误输入测试全通过；优化前后程序在测试集上的可观察输出完全一致；生成代码可由目标工具链执行，且错误信息含位置和原因。

## 视频资源

`视频时长` 是本能力点建议观看章节的合计，不是整门公开课的总时长。

### 主资源：Compiler Design

- 教师/机构：Sanjeev K. Aggarwal · Indian Institute of Technology Kanpur
- 平台与入口：NPTEL · [打开资源](https://nptel.ac.in/courses/106104123)
- 来源类型：`official_national_course`
- 建议章节：Lectures 1–12: compiler overview, lexical analysis and top-down/bottom-up parsing
- 语言/字幕：English / English
- 建议观看时长：约 6.0 小时
- 编辑评分：<span class="resource-score">90/100</span>
- 评分分项：匹配 29/30 · 来源 20/20 · 深度 18/20 · 实践 11/15 · 可访问 8/10 · 呈现 4/5
- 推荐理由：用 30 讲覆盖经典编译流水线，理论与实现粒度适合作为本科生第一次完整编译器项目的主线。
- 配套材料：逐讲视频、课程大纲与参考材料。
- 建议练习：实现表达式语言的 lexer、parser、IR 与一个局部优化，并建立正反测试集。
- 核验日期：2026-08-10

### 备选资源：Compiler Design

- 教师/机构：Santanu Chattopadhyay · Indian Institute of Technology Kharagpur
- 平台与入口：NPTEL · [打开资源](https://nptel.ac.in/courses/106105190)
- 来源类型：`official_national_course`
- 建议章节：Weeks 1–8: introduction, lexical analysis, parsing, syntax-directed translation, type checking and runtime basics
- 语言/字幕：English / English
- 建议观看时长：约 16.0 小时
- 编辑评分：<span class="resource-score">84/100</span>
- 评分分项：匹配 27/30 · 来源 20/20 · 深度 17/20 · 实践 8/15 · 可访问 8/10 · 呈现 4/5
- 推荐理由：对自动机、语法分析和运行时的讲次更多，适合针对形式基础或某一编译阶段逐项补强。
- 配套材料：分周视频、课程计划与 NPTEL 作业信息。
- 建议练习：为同一小语言构造 LL/LR 分析表并比较错误定位，再扩展函数调用运行时。
- 核验日期：2026-08-10
