# 量子计算与量子芯片基础

- 能力 ID：`NEW-03`
- 类型：专业能力
- 修读要求：路线推荐
- 建议窗口：方向探索与深化（可按兴趣提前或延后）
- 所属领域：新型计算
- 参考投入：28 小时（不是学期配额）
- 先修能力：[线性代数](./C-MATH-02.md)、[概率统计](./C-MATH-03.md)、[量子与固体物理基础](./C-PHY-02.md)

## 学习成果

- 使用态矢、张量积、量子门和测量描述小规模量子电路
- 实现基础算法并解释噪声、退相干、读出和纠错需求
- 比较超导、离子阱、光子与自旋量子比特及控制电子学

## 验收

### 产物

一组 Qiskit/模拟器实验及一种量子硬件路线的控制与误差预算

### 合格标准

结果含统计置信度与噪声模型，能区分算法优势、硬件限制和营销性表述

## 视频资源

`视频时长` 是本能力点建议观看章节的合计，不是整门公开课的总时长。

### 主资源：Quantum Computing

- 教师/机构：Debabrata Goswami · IIT Kanpur
- 平台与入口：NPTEL · [打开资源](https://nptel.ac.in/courses/104104082)
- 来源类型：`official_university_course`
- 建议章节：第 23–28 讲离子阱与商业量子比特；第 31–33 讲实现问题与超导量子比特；第 34–36 讲密度矩阵/测量
- 语言/字幕：English / English（NPTEL 字幕/转写）
- 建议观看时长：约 7 小时
- 编辑评分：<span class="resource-score">90/100</span>
- 评分分项：匹配 29/30 · 来源 20/20 · 深度 18/20 · 实践 9/15 · 可访问 9/10 · 呈现 5/5
- 推荐理由：相比只讲算法的课程，它系统比较量子硬件实现，直接贴合“量子芯片”能力点。
- 配套材料：课程讲义、问题集和多种硬件路线案例
- 建议练习：为一种量子比特建立控制、读出、退相干和误差来源预算
- 核验日期：2026-08-10

### 备选资源：Introduction to Quantum Computing: Quantum Algorithms and Qiskit

- 教师/机构：Prabha Mandayam、Anupama Ray、Sheshashayee Raghunathan · IIT Madras / IBM
- 平台与入口：NPTEL · [打开资源](https://nptel.ac.in/courses/106106232)
- 来源类型：`official_university_course`
- 建议章节：第 1–2 周量子态、测量、门/电路与 Qiskit；第 4 周 NISQ、变分算法和量子纠错
- 语言/字幕：English / English（NPTEL 字幕/转写）
- 建议观看时长：约 8 小时
- 编辑评分：<span class="resource-score">88/100</span>
- 评分分项：匹配 28/30 · 来源 20/20 · 深度 16/20 · 实践 12/15 · 可访问 8/10 · 呈现 4/5
- 推荐理由：实操和 NISQ 内容突出，能补足硬件主资源中的编程与误差实验。
- 配套材料：Qiskit hands-on、讲义、作业和 IBM Quantum Experience
- 建议练习：在 Qiskit 噪声模型上实现小电路并比较理想、含噪和误差缓解结果
- 核验日期：2026-08-10
