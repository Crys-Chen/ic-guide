# 高速互连与信号/电源完整性

- 能力 ID：`PKG-02`
- 类型：专业能力
- 修读要求：路线推荐
- 建议窗口：方向探索与深化（可按兴趣提前或延后）
- 所属领域：先进集成与测试
- 参考投入：24 小时（不是学期配额）
- 先修能力：[电磁学](./C-PHY-01.md)、[电路分析](./C-CIR-01.md)、[数字信号处理](./C-CIR-07.md)、[先进封装、Chiplet 与异构集成](./PKG-01.md)

## 学习成果

- 建立封装/PCB 互连的传输线、S 参数和回流路径模型
- 分析反射、串扰、损耗、抖动、同时开关噪声与电源阻抗
- 设计终端、层叠、去耦和通道均衡策略

## 验收

### 产物

一条高速 die-to-die 或存储通道的眼图、阻抗与 PDN 仿真报告

### 合格标准

达到声明的眼高/眼宽和目标阻抗，且解释模型带宽与端口参考面的选择

## 视频资源

`视频时长` 是本能力点建议观看章节的合计，不是整门公开课的总时长。

### 主资源：VLSI Interconnects

- 教师/机构：Sarang Pendharker · IIT Kharagpur
- 平台与入口：NPTEL · [打开资源](https://nptel.ac.in/courses/108105187)
- 来源类型：`official_university_course`
- 建议章节：第 10–17 讲 RLC、传输线与趋肤效应；第 28–35 讲串扰、耦合互连、参数提取与 S 参数；共 16 讲
- 语言/字幕：English / English（NPTEL 字幕/转写）
- 建议观看时长：约 8 小时
- 编辑评分：<span class="resource-score">92/100</span>
- 评分分项：匹配 30/30 · 来源 20/20 · 深度 19/20 · 实践 10/15 · 可访问 9/10 · 呈现 4/5
- 推荐理由：从芯片互连模型到 S 参数和串扰覆盖严密，是 SI 分析的高质量主资源。
- 配套材料：讲义、仿真示例、周作业与 live session
- 建议练习：建立 RLC 互连模型，提取参数并比较时域串扰、抖动和损耗
- 核验日期：2026-08-10

### 备选资源：EMI/EMC and Signal Integrity

- 教师/机构：Amitabha Bhattacharya · IIT Kharagpur
- 平台与入口：NPTEL · [打开资源](https://nptel.ac.in/courses/108105375)
- 来源类型：`official_university_course`
- 建议章节：信号频谱与 transmission-line 单元；Crosstalk、Shielding、Grounding 与 ESD（含第 54–59 讲）
- 语言/字幕：English / English（NPTEL 字幕/转写）
- 建议观看时长：约 9 小时
- 编辑评分：<span class="resource-score">84/100</span>
- 评分分项：匹配 27/30 · 来源 20/20 · 深度 17/20 · 实践 8/15 · 可访问 8/10 · 呈现 4/5
- 推荐理由：将 SI 扩展到系统 EMC、接地与 ESD，补足封装/板级工程边界。
- 配套材料：课程讲义、行业案例和周作业
- 建议练习：对高速通道建立源—路径—受害者 EMC 模型并提出回流/屏蔽/接地方案
- 核验日期：2026-08-10
