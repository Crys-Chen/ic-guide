# 存算一体与近存计算

- 能力 ID：`NEW-01`
- 类型：专业能力
- 修读要求：路线推荐
- 建议窗口：方向探索与深化（可按兴趣提前或延后）
- 所属领域：新型计算
- 参考投入：28 小时（不是学期配额）
- 先修能力：[模拟集成电路](./C-CIR-05.md)、[计算机体系结构](./C-SYS-05.md)

## 学习成果

- 量化冯·诺依曼数据搬移瓶颈并区分 near-memory、数字与模拟 CIM
- 分析 SRAM、RRAM、PCM/MRAM 阵列及 ADC/DAC 外围开销
- 将矩阵向量乘映射到交叉阵列并评估精度、漂移和能效

## 验收

### 产物

一个数字或模拟 CIM 阵列模型及与传统加速器的公平比较

### 合格标准

包含器件/电路非理想性，报告 TOPS/W、延迟、面积和任务精度的完整权衡

## 视频资源

`视频时长` 是本能力点建议观看章节的合计，不是整门公开课的总时长。

### 主资源：Memory Device Technology for AI/ML Computing

- 教师/机构：Shubhadeep Bhattacharjee · IIT Hyderabad
- 平台与入口：NPTEL · [打开资源](https://nptel.ac.in/courses/108106868)
- 来源类型：`official_university_course`
- 建议章节：第 7.1–7.5、8.1–8.5、9.1–9.4 讲 PCRAM/RRAM/MRAM 与 AI 工作负载；第 10.3 讲 AI/ML 计算瓶颈；第 12.3–12.4 讲数字/模拟存内计算；共 17 讲
- 语言/字幕：English / English（NPTEL 字幕/转写）
- 建议观看时长：约 8.5 小时
- 编辑评分：<span class="resource-score">93/100</span>
- 评分分项：匹配 30/30 · 来源 20/20 · 深度 19/20 · 实践 11/15 · 可访问 9/10 · 呈现 4/5
- 推荐理由：从新型存储器一路讲到数字/模拟 CIM，最适合建立器件—阵列—AI 工作负载的跨层链条。
- 配套材料：课程讲义、器件比较、周测和体系结构案例
- 建议练习：建立含 ADC/DAC 与器件非理想性的 crossbar MVM 模型并评估 TOPS/W
- 核验日期：2026-08-10

### 备选资源：In-Memory Computing based Machine Learning Accelerators: Opportunities and Challenges

- 教师/机构：Kaushik Roy · Purdue University
- 平台与入口：Purdue Nanoelectronics Research Laboratory · [打开资源](https://engineering.purdue.edu/NRL/Presentations)
- 来源类型：`official_university_course`
- 建议章节：同名专题视频；另看 Hardware Fabrics/Compute-in-Memory: Neuro-Inspired Computing
- 语言/字幕：English / English auto captions
- 建议观看时长：约 2 小时
- 编辑评分：<span class="resource-score">84/100</span>
- 评分分项：匹配 29/30 · 来源 20/20 · 深度 17/20 · 实践 6/15 · 可访问 8/10 · 呈现 4/5
- 推荐理由：一线研究团队的专题讲座聚焦 CIM 真正的系统瓶颈，可纠正只看峰值 TOPS/W 的片面理解。
- 配套材料：Purdue 官方视频与 slides
- 建议练习：归纳模拟/数字 CIM 的转换器、精度、稀疏和映射瓶颈并提出一项协同优化
- 核验日期：2026-08-10
