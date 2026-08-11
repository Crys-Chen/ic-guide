# DFT、ATPG 与量产测试

- 能力 ID：`PKG-04`
- 类型：专业能力
- 修读要求：路线推荐
- 建议窗口：方向探索与深化（可按兴趣提前或延后）
- 所属领域：先进集成与测试
- 参考投入：24 小时（不是学期配额）
- 先修能力：[数字逻辑](./C-CIR-03.md)、[数字集成电路](./C-CIR-06.md)、[先进封装、Chiplet 与异构集成](./PKG-01.md)

## 学习成果

- 使用 stuck-at、transition 与存储器故障模型估计覆盖率
- 设计 scan、ATPG、LBIST/MBIST、边界扫描与测试压缩结构
- 把覆盖率、测试时间、功耗、良率和成本连接到量产策略

## 验收

### 产物

一个小型数字核的 scan/ATPG 或 BIST 实验与量产测试流程图

### 合格标准

报告可复现故障覆盖率和 pattern 数，并解释未检出故障与测试功耗风险

## 视频资源

`视频时长` 是本能力点建议观看章节的合计，不是整门公开课的总时长。

### 主资源：Digital VLSI Testing

- 教师/机构：Santanu Chattopadhyay · IIT Kharagpur
- 平台与入口：NPTEL · [打开资源](https://nptel.ac.in/courses/117105137)
- 来源类型：`official_university_course`
- 建议章节：第 1–4 讲 DFT/故障模型；第 13–18 讲 fault simulation/ATPG；第 25–28 讲 logic BIST/测试压缩；第 57–58 讲 memory testing；共 16 讲
- 语言/字幕：English / English（NPTEL 字幕/转写）
- 建议观看时长：约 8 小时
- 编辑评分：<span class="resource-score">92/100</span>
- 评分分项：匹配 30/30 · 来源 20/20 · 深度 19/20 · 实践 10/15 · 可访问 9/10 · 呈现 4/5
- 推荐理由：覆盖从故障模型到测试压缩和存储器测试的完整量产测试知识链。
- 配套材料：讲义、周作业、故障/测试算法例题
- 建议练习：对小型核插入 scan，生成 pattern 并实现 LFSR/MISR 或 memory BIST
- 核验日期：2026-08-10

### 备选资源：VLSI Design Verification and Test

- 教师/机构：Jatindra Kumar Deka、Santosh Biswas · IIT Guwahati
- 平台与入口：NPTEL · [打开资源](https://nptel.ac.in/courses/106103016)
- 来源类型：`official_university_course`
- 建议章节：Digital Testing、Fault Simulation/SCOAP、ATPG/D-Algorithm、Scan Chains、BIST 与 Memory Testing 章节
- 语言/字幕：English / English（NPTEL 字幕/转写）
- 建议观看时长：约 10 小时
- 编辑评分：<span class="resource-score">85/100</span>
- 评分分项：匹配 29/30 · 来源 20/20 · 深度 17/20 · 实践 8/15 · 可访问 7/10 · 呈现 4/5
- 推荐理由：对 ATPG 算法和 scan 结构讲解集中，可作为完整测试课程的算法型备选。
- 配套材料：逐讲视频、算法讲义和测试案例
- 建议练习：手算 D 算法/SCOAP 并在 RTL/门级网表上比较 scan 前后覆盖率
- 核验日期：2026-08-10
