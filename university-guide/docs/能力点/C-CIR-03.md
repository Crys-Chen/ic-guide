# 数字逻辑

- 能力 ID：`C-CIR-03`
- 类型：公共能力
- 修读要求：公共推荐
- 建议窗口：基础工具箱（可按兴趣提前或延后）
- 所属领域：电路与信号
- 参考投入：24 小时（不是学期配额）
- 先修能力：[C 与 Python 编程](./C-SYS-01.md)

## 学习成果

- 能化简组合逻辑并设计算术、译码和多路选择模块
- 能分析锁存器、触发器、时序约束、有限状态机和同步系统
- 能用 HDL 描述、仿真并在 FPGA 上验证一个数字模块

## 验收

### 产物

一个带测试平台、波形和 FPGA 演示的有限状态机或简易运算单元仓库

### 合格标准

组合模块通过不少于 100 组随机向量；状态机覆盖全部状态与合法转移；综合报告无意外锁存器且时序约束通过；FPGA 演示结果与仿真一致。

## 视频资源

`视频时长` 是本能力点建议观看章节的合计，不是整门公开课的总时长。

### 主资源：6.004 Computation Structures — Digital Logic Modules

- 教师/机构：Chris Terman · Massachusetts Institute of Technology
- 平台与入口：MIT OpenCourseWare · [打开资源](https://ocw.mit.edu/courses/6-004-computation-structures-spring-2017/pages/)
- 来源类型：`official_university_course`
- 建议章节：Sections 1–4 topic videos: digital abstraction, CMOS switches, combinational logic and timing
- 语言/字幕：English / English transcript
- 建议观看时长：约 7.0 小时
- 编辑评分：<span class="resource-score">93/100</span>
- 评分分项：匹配 30/30 · 来源 20/20 · 深度 18/20 · 实践 15/15 · 可访问 6/10 · 呈现 4/5
- 推荐理由：短视频与在线问题、实验逐节对应，并自然过渡到处理器，能把布尔逻辑与系统行为连起来。
- 配套材料：Topic Videos、Check Yourself、Labs、讲义和问题集。
- 建议练习：完成组合与时序实验，并提交带自检测试平台的有限状态机 HDL。
- 核验日期：2026-08-10

### 备选资源：Digital Circuits

- 教师/机构：Santanu Chattopadhyay · Indian Institute of Technology Kharagpur
- 平台与入口：NPTEL · [打开资源](https://nptel.ac.in/courses/108105113)
- 来源类型：`official_national_course`
- 建议章节：Lectures 1–45: number systems, Boolean logic, combinational/sequential circuits, FSM, memory and FPGA
- 语言/字幕：English / English
- 建议观看时长：约 22.5 小时
- 编辑评分：<span class="resource-score">86/100</span>
- 评分分项：匹配 28/30 · 来源 20/20 · 深度 17/20 · 实践 9/15 · 可访问 8/10 · 呈现 4/5
- 推荐理由：传统课程覆盖更广、讲次粒度细，适合按国内课程顺序复习或补齐存储器与 FPGA 概念。
- 配套材料：逐讲视频、大纲与 NPTEL 作业信息。
- 建议练习：手工化简一个多输出逻辑并实现一个含计数器和状态机的 FPGA 模块。
- 核验日期：2026-08-10
