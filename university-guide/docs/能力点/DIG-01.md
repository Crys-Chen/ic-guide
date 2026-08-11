# RTL 设计与 FPGA 实现

- 能力 ID：`DIG-01`
- 类型：专业能力
- 修读要求：路线推荐
- 建议窗口：方向探索与深化（可按兴趣提前或延后）
- 所属领域：数字与可重构计算
- 参考投入：24 小时（不是学期配额）
- 先修能力：[数字逻辑](./C-CIR-03.md)、[数字集成电路](./C-CIR-06.md)、[C 与 Python 编程](./C-SYS-01.md)

## 学习成果

- 用可综合 SystemVerilog 描述组合、时序、FSM 与流水数据通路
- 理解阻塞/非阻塞赋值、时钟域、复位和亚稳态约束
- 在 FPGA 上完成综合、时序约束、资源分析和板级验证

## 验收

### 产物

带自检 testbench 的流水算术单元或总线外设及 FPGA 实测记录

### 合格标准

lint、仿真和时序检查通过，功能覆盖目标达到 90% 且无未解释警告

## 视频资源

`视频时长` 是本能力点建议观看章节的合计，不是整门公开课的总时长。

### 主资源：Hardware Modeling using Verilog

- 教师/机构：Indranil Sengupta · IIT Kharagpur
- 平台与入口：NPTEL · [打开资源](https://nptel.ac.in/courses/106105165)
- 来源类型：`official_university_course`
- 建议章节：第 12–20 讲描述风格、过程赋值与阻塞/非阻塞；第 21–24 讲 testbench 与 FSM；第 25 讲 datapath/controller；共 14 讲
- 语言/字幕：English / English（NPTEL 字幕/转写）
- 建议观看时长：约 7 小时
- 编辑评分：<span class="resource-score">91/100</span>
- 评分分项：匹配 29/30 · 来源 20/20 · 深度 18/20 · 实践 11/15 · 可访问 9/10 · 呈现 4/5
- 推荐理由：不止讲语法，还覆盖可综合风格、流水线和处理器案例，适合形成工程级 RTL 能力。
- 配套材料：课程代码示例、讲义与作业
- 建议练习：实现 FSM+datapath、流水模块和简化处理器并建立自检 testbench
- 核验日期：2026-08-10

### 备选资源：FPGA Based Signal Processing Systems

- 教师/机构：P. Sumathi · IIT Roorkee
- 平台与入口：NPTEL · [打开资源](https://nptel.ac.in/courses/108107870)
- 来源类型：`official_university_course`
- 建议章节：第 1–5 周 FPGA 架构、Verilog、testbench、组合/时序逻辑与 FSM
- 语言/字幕：English / English（NPTEL 字幕/转写）
- 建议观看时长：约 10 小时
- 编辑评分：<span class="resource-score">85/100</span>
- 评分分项：匹配 28/30 · 来源 20/20 · 深度 16/20 · 实践 9/15 · 可访问 8/10 · 呈现 4/5
- 推荐理由：FPGA 和工具链实践更强，能补足主资源偏语言/模型的部分。
- 配套材料：工具演示、讲义、代码与测验
- 建议练习：综合并在 FPGA 工具中验证计数器、FSM 和串流数据通路
- 核验日期：2026-08-10
