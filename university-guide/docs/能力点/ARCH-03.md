# EDA 图算法与物理设计

- 能力 ID：`ARCH-03`
- 类型：专业能力
- 修读要求：路线推荐
- 建议窗口：方向探索与深化（可按兴趣提前或延后）
- 所属领域：体系结构与系统
- 参考投入：28 小时（不是学期配额）
- 先修能力：[数值方法与凸优化](./C-MATH-05.md)、[计算机组成](./C-SYS-03.md)、[编译优化与硬件映射](./ARCH-02.md)

## 学习成果

- 将划分、布局、布线、时钟树和时序优化形式化为图/优化问题
- 实现并比较启发式、动态规划、最短路或数值优化算法
- 使用开源设计与工具评估线长、拥塞、时序和运行时间

## 验收

### 产物

一个小型布局或全局布线器、基准集和与开源工具的对照实验

### 合格标准

算法结果可复现，覆盖正常与极端案例，并报告质量-运行时间权衡

## 视频资源

`视频时长` 是本能力点建议观看章节的合计，不是整门公开课的总时长。

### 主资源：VLSI Physical Design

- 教师/机构：Indranil Sengupta · IIT Kharagpur
- 平台与入口：NPTEL · [打开资源](https://nptel.ac.in/courses/106105161)
- 来源类型：`official_university_course`
- 建议章节：第 7–14 讲 partitioning、floorplanning 与 placement；第 15–22 讲 grid/global/detailed routing；第 32–35 讲 timing closure；共 20 讲
- 语言/字幕：English / English（NPTEL 字幕/转写）
- 建议观看时长：约 10 小时
- 编辑评分：<span class="resource-score">92/100</span>
- 评分分项：匹配 30/30 · 来源 20/20 · 深度 19/20 · 实践 10/15 · 可访问 9/10 · 呈现 4/5
- 推荐理由：算法覆盖完整且讲到性能驱动设计，能够支撑独立实现 EDA 小工具。
- 配套材料：课程讲义、算法推导、周作业与基准示例
- 建议练习：实现一个划分/布局或网格路由算法，并在公开小基准上比较质量和时间
- 核验日期：2026-08-10

### 备选资源：VLSI Design Verification and Test

- 教师/机构：Jatindra Kumar Deka、Santosh Biswas · IIT Guwahati
- 平台与入口：NPTEL · [打开资源](https://nptel.ac.in/courses/106103016)
- 来源类型：`official_university_course`
- 建议章节：HLS Scheduling/Allocation/Binding；Logic Optimization；BDD；Temporal Logic 与 Symbolic Model Checking 章节
- 语言/字幕：English / English（NPTEL 字幕/转写）
- 建议观看时长：约 9 小时
- 编辑评分：<span class="resource-score">84/100</span>
- 评分分项：匹配 27/30 · 来源 20/20 · 深度 18/20 · 实践 8/15 · 可访问 7/10 · 呈现 4/5
- 推荐理由：从逻辑综合与形式化侧补充物理设计主线，帮助理解 EDA 不止是版图算法。
- 配套材料：逐讲视频、算法讲义与测试案例
- 建议练习：实现列表调度、BDD 操作或符号模型检查中的一项核心算法
- 核验日期：2026-08-10
