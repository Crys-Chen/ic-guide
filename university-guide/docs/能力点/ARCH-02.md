# 编译优化与硬件映射

- 能力 ID：`ARCH-02`
- 类型：专业能力
- 修读要求：路线推荐
- 建议窗口：方向探索与深化（可按兴趣提前或延后）
- 所属领域：体系结构与系统
- 参考投入：28 小时（不是学期配额）
- 先修能力：[数值方法与凸优化](./C-MATH-05.md)、[计算机体系结构](./C-SYS-05.md)、[处理器微架构与存储层次](./ARCH-01.md)

## 学习成果

- 构建 IR、控制/数据流图并执行数据流分析
- 实现局部/全局优化、指令选择、调度和寄存器分配
- 将算子映射到 SIMD、GPU、FPGA 或领域专用加速器并解释代价

## 验收

### 产物

一个 LLVM/MLIR 或自定义 IR 优化 pass 与硬件性能对比

### 合格标准

通过语义等价测试，并在至少三组输入上量化运行时间、访存或面积改进

## 视频资源

`视频时长` 是本能力点建议观看章节的合计，不是整门公开课的总时长。

### 主资源：Compiler Design

- 教师/机构：Y. N. Srikant · Indian Institute of Science
- 平台与入口：NPTEL · [打开资源](https://nptel.ac.in/courses/106108052)
- 来源类型：`official_university_course`
- 建议章节：第 4–11 讲：局部优化、机器码生成、全局寄存器分配、机器无关优化与数据流分析；共 8 讲
- 语言/字幕：English / English（NPTEL 字幕/转写）
- 建议观看时长：约 8 小时
- 编辑评分：<span class="resource-score">91/100</span>
- 评分分项：匹配 29/30 · 来源 20/20 · 深度 19/20 · 实践 10/15 · 可访问 9/10 · 呈现 4/5
- 推荐理由：直接覆盖后端优化与机器映射，能把编译原理连接到处理器和加速器约束。
- 配套材料：视频、讲义与 mini-project 建议
- 建议练习：实现 liveness/data-flow、图着色寄存器分配和一个局部优化 pass
- 核验日期：2026-08-10

### 备选资源：ACM Summer School on Compiler Design and Construction

- 教师/机构：IIT Madras / ACM India 邀请教师 · IIT Madras
- 平台与入口：NPTEL · [打开资源](https://nptel.ac.in/courses/128106009)
- 来源类型：`official_university_course`
- 建议章节：Machine Dependent Optimizations Parts 1–10；High Level Optimizations Parts 1–6
- 语言/字幕：English / English（NPTEL 字幕/转写）
- 建议观看时长：约 12 小时
- 编辑评分：<span class="resource-score">85/100</span>
- 评分分项：匹配 28/30 · 来源 20/20 · 深度 18/20 · 实践 7/15 · 可访问 8/10 · 呈现 4/5
- 推荐理由：专题式讲授比完整编译器课程更深入，适合围绕后端和高层优化查缺补漏。
- 配套材料：暑期学校视频、讲义与专题案例
- 建议练习：选择一个优化在 LLVM/自定义 IR 中复现，并用微基准检验语义和性能
- 核验日期：2026-08-10
