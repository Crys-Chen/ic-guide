# 模拟集成电路

- 能力 ID：`C-CIR-05`
- 类型：公共能力
- 修读要求：公共推荐
- 建议窗口：IC 公共核心（可按兴趣提前或延后）
- 所属领域：电路与信号
- 参考投入：26 小时（不是学期配额）
- 先修能力：[模拟电子技术](./C-CIR-02.md)、[半导体器件](./C-PHY-04.md)、[信号与系统](./C-CIR-04.md)

## 学习成果

- 能设计电流镜、差分对、有源负载和基础运算放大器
- 能从增益、带宽、相位裕度、噪声、失真、功耗与面积进行权衡
- 能用 PVT 与 Monte Carlo 仿真验证规格鲁棒性

## 验收

### 产物

一个带规格表、手算、原理图、PVT/Monte Carlo 结果的 CMOS 运放设计报告

### 合格标准

标称与所有指定 PVT 角均满足规格表；最差相位裕度不少于 60 度；至少 200 次 Monte Carlo 的规格良率不低于 95%；网表、模型角和随机种子可复现。

## 视频资源

`视频时长` 是本能力点建议观看章节的合计，不是整门公开课的总时长。

### 主资源：Analog IC Design

- 教师/机构：S. Aniruddhan and Nagendra Krishnapura · Indian Institute of Technology Madras
- 平台与入口：NPTEL · [打开资源](https://nptel.ac.in/courses/108106105)
- 来源类型：`official_national_course`
- 建议章节：Weeks 7–10: MOS small-signal design, current mirrors, differential amplifiers and op-amp building blocks
- 语言/字幕：English / English
- 建议观看时长：约 8.0 小时
- 编辑评分：<span class="resource-score">92/100</span>
- 评分分项：匹配 30/30 · 来源 20/20 · 深度 19/20 · 实践 11/15 · 可访问 8/10 · 呈现 4/5
- 推荐理由：围绕晶体管级设计推导关键单元，并持续量化增益、噪声、速度和功耗权衡。
- 配套材料：分周视频、大纲、作业与参考资料。
- 建议练习：设计两级 CMOS 运放并完成 DC、AC、瞬态、噪声、PVT 与 Monte Carlo 验证。
- 核验日期：2026-08-10

### 备选资源：Analog VLSI Design

- 教师/机构：Imon Mondal · Indian Institute of Technology Kanpur
- 平台与入口：NPTEL · [打开资源](https://nptel.ac.in/courses/108104193)
- 来源类型：`official_national_course`
- 建议章节：Lectures 1–38: bias circuits, amplifiers, frequency response, feedback, stability and noise
- 语言/字幕：English / English
- 建议观看时长：约 19.0 小时
- 编辑评分：<span class="resource-score">86/100</span>
- 评分分项：匹配 28/30 · 来源 20/20 · 深度 18/20 · 实践 8/15 · 可访问 8/10 · 呈现 4/5
- 推荐理由：讲次更细且完整复述从偏置到稳定性，适合按薄弱单元精准补课。
- 配套材料：逐讲视频、课程大纲与平台材料。
- 建议练习：选一个主线设计，用本课程的另一套方法重算补偿与噪声并比较差异。
- 核验日期：2026-08-10
