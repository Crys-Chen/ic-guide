# 类脑芯片与脉冲神经网络

- 能力 ID：`NEW-02`
- 类型：专业能力
- 修读要求：路线推荐
- 建议窗口：方向探索与深化（可按兴趣提前或延后）
- 所属领域：新型计算
- 参考投入：28 小时（不是学期配额）
- 先修能力：[概率统计](./C-MATH-03.md)、[量子与固体物理基础](./C-PHY-02.md)、[模拟集成电路](./C-CIR-05.md)、[存算一体与近存计算](./NEW-01.md)

## 学习成果

- 从膜电位与突触可塑性建立 LIF/脉冲神经元模型
- 训练或转换 SNN 并分析事件驱动、稀疏与时序编码
- 比较数字、模拟和新型存储神经形态硬件的优势与限制

## 验收

### 产物

一个 SNN 任务复现、神经元/突触硬件映射和能耗估算

### 合格标准

与 ANN 或非事件驱动基线比较精度、延迟和事件数，并做消融实验

## 视频资源

`视频时长` 是本能力点建议观看章节的合计，不是整门公开课的总时长。

### 主资源：Memory Device Technology for AI/ML Computing

- 教师/机构：Shubhadeep Bhattacharjee · IIT Hyderabad
- 平台与入口：NPTEL · [打开资源](https://nptel.ac.in/courses/108106868)
- 来源类型：`official_university_course`
- 建议章节：第 10.4–10.5、11.1–11.4、12.1–12.2 讲神经形态、硬件神经元/突触、SNN 操作/训练/实现
- 语言/字幕：English / English（NPTEL 字幕/转写）
- 建议观看时长：约 5 小时
- 编辑评分：<span class="resource-score">91/100</span>
- 评分分项：匹配 30/30 · 来源 20/20 · 深度 18/20 · 实践 10/15 · 可访问 9/10 · 呈现 4/5
- 推荐理由：课程将生物启发、神经元/突触电路和 SNN 训练合在同一硬件语境中。
- 配套材料：课程讲义、器件模型、SNN 案例与周测
- 建议练习：实现 LIF/SNN 并估算映射到数字或新型存储突触阵列的事件与能耗
- 核验日期：2026-08-10

### 备选资源：Neuro-Inspired Computing Video Series

- 教师/机构：Kaushik Roy · Purdue University
- 平台与入口：Purdue Nanoelectronics Research Laboratory · [打开资源](https://engineering.purdue.edu/NRL/Presentations)
- 来源类型：`official_university_course`
- 建议章节：Neuron and Synaptic Models；ANN and SNNs and Learning Algorithms；Hardware Fabrics/Compute-in-Memory 三个视频
- 语言/字幕：English / English auto captions
- 建议观看时长：约 3 小时
- 编辑评分：<span class="resource-score">85/100</span>
- 评分分项：匹配 29/30 · 来源 20/20 · 深度 17/20 · 实践 7/15 · 可访问 8/10 · 呈现 4/5
- 推荐理由：从神经元模型到硬件织构的短系列适合快速建立类脑芯片跨层全景。
- 配套材料：Purdue 官方视频与 slides
- 建议练习：比较 rate/temporal coding 与 ANN-to-SNN，画出事件驱动硬件的数据流
- 核验日期：2026-08-10
