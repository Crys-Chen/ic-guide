# 处理器微架构与存储层次

- 能力 ID：`ARCH-01`
- 类型：专业能力
- 修读要求：路线推荐
- 建议窗口：方向探索与深化（可按兴趣提前或延后）
- 所属领域：体系结构与系统
- 参考投入：28 小时（不是学期配额）
- 先修能力：[计算机组成](./C-SYS-03.md)、[操作系统](./C-SYS-04.md)、[计算机体系结构](./C-SYS-05.md)

## 学习成果

- 从 ISA 到单周期、多周期和流水线数据通路建立性能模型
- 分析数据/控制冒险、分支预测、乱序执行与指令级并行
- 计算缓存、虚拟内存和一致性机制对 AMAT 与吞吐的影响

## 验收

### 产物

一个流水 RISC-V 核或架构模拟器扩展及基准测试报告

### 合格标准

通过指令一致性测试，并用计数器解释至少三个基准的 CPI 与缓存行为

## 视频资源

`视频时长` 是本能力点建议观看章节的合计，不是整门公开课的总时长。

### 主资源：Computation Structures

- 教师/机构：Chris Terman 等 · Massachusetts Institute of Technology
- 平台与入口：MIT OpenCourseWare · [打开资源](https://ocw.mit.edu/courses/6-004-computation-structures-spring-2017/)
- 来源类型：`official_university_course`
- 建议章节：Modules 9、10、13、14、15 的 Topic Videos：ISA、assembly、Beta processor、cache/memory hierarchy 与 pipelining
- 语言/字幕：English / English transcript
- 建议观看时长：约 9 小时
- 编辑评分：<span class="resource-score">94/100</span>
- 评分分项：匹配 29/30 · 来源 20/20 · 深度 19/20 · 实践 13/15 · 可访问 9/10 · 呈现 4/5
- 推荐理由：视频、工作表与实验高度一体化，从 ISA 到缓存的教学结构非常适合自学。
- 配套材料：注释讲义、topic videos、worksheets、labs 与 exams
- 建议练习：完成 Beta 数据通路、流水/缓存 worksheet 并用基准解释 CPI 与 AMAT
- 核验日期：2026-08-10

### 备选资源：Computer Organisation and Architecture

- 教师/机构：Bhaskaran Raman · IIT Kanpur
- 平台与入口：NPTEL · [打开资源](https://nptel.ac.in/courses/106104073)
- 来源类型：`official_university_course`
- 建议章节：DLX、Data Hazards、Dynamic Scheduling、Branch Prediction、Superscalar/Speculation、Cache Performance 与 Coherence 讲次
- 语言/字幕：English / English（NPTEL 字幕/转写）
- 建议观看时长：约 10 小时
- 编辑评分：<span class="resource-score">85/100</span>
- 评分分项：匹配 28/30 · 来源 20/20 · 深度 17/20 · 实践 8/15 · 可访问 8/10 · 呈现 4/5
- 推荐理由：对动态调度、推测和缓存优化更集中，适合作为 MIT 基础主线后的微架构深化。
- 配套材料：视频、PDF 讲义与体系结构例题
- 建议练习：计算流水冒险、分支预测和缓存优化对 CPI/AMAT 的影响
- 核验日期：2026-08-10
