# UIUC VLSI CAD: Logic to Layout（Coursera）

## 课程简介

- 所属大学：伊利诺伊大学香槟分校（UIUC）
- 先修要求：数字逻辑基础、硬件描述语言（Verilog）
- 编程语言：Verilog、EDA 工具（Synopsys / Cadence 或开源工具链）
- 课程难度：🌟🌟🌟🌟🌟
- 预计学时：80 小时

UIUC VLSI CAD 系列由 Rob A. Rutenbar 教授主讲，是 Coursera 上少数完整覆盖数字 ASIC 设计全流程的公开课程之一。Part I（Logic to Layout）聚焦于从 RTL 逻辑描述到物理版图的 EDA 工具链核心：布尔函数的高效表示（BDD——二元决策图）、逻辑综合（Yosys 风格的工艺映射）、技术映射（standard cell library mapping）、布局（placement）与布线（routing）。Part II（Verification）则覆盖形式化验证方法——模型检验（model checking）与等价性检验（equivalence checking），填补了国内 ASIC 课程普遍忽视验证环节的空白。

课程以算法与数学原理为核心，不只教工具操作，而是深入解释每个 EDA 步骤背后的计算复杂性与工程权衡。学完本课程后，学生将真正理解 Synopsys Design Compiler、Cadence Innovus 等商业工具在做什么，而不仅仅是"会用"。结合开源 ASIC 流程（OpenLane + SKY130 PDK），可在无商业工具授权的环境下完成从 RTL 到 GDSII 的完整流片练习。对于志在数字后端、综合与签核方向的同学，本课是最重要的理论基础之一。

国内在 ASIC 设计方向的培训资源日益丰富，中国大学 MOOC 有"超大规模集成电路设计"相关课程，B 站也有来自清华、浙大、中科大等高校的数字 IC 设计流程录像。复旦本校的相关课程（如 INFO130094）可与本课程内容互相印证、加深理解。

## 课程资源

- 课程主页（Part I · Logic）：<https://www.coursera.org/learn/vlsi-cad-logic>
- 课程说明（Part I）：Rob A. Rutenbar 主讲，共 6 模块，审计模式免费；4.6/5 评分（557 条评价）
- 中国大学 MOOC（搜索"超大规模集成电路设计"或"ASIC 设计"）：<https://www.icourse163.org/>
- 课程教材（推荐）：《Electronic Design Automation: Synthesis, Verification, and Test》Laung-Terng Wang 等（Morgan Kaufmann）
- 课程教材（布局布线）：《VLSI Physical Design: From Graph Partitioning to Timing Closure》Andrew B. Kahng 等（Springer）

## 开源 ASIC 实践资源

### OpenLane — 开源 RTL-to-GDSII 流程

- 文档主页：<https://openlane.readthedocs.io/>
- 说明：基于 OpenROAD、Yosys、Magic、Netgen 等开源工具的完整 ASIC 流程，支持 SKY130 与 GF180MCU 工艺，可免费复现从 Verilog RTL 到 GDSII 版图的完整流程，是学习 EDA 工具链的最佳实践平台

### SkyWater SKY130 开放工艺 PDK

- 文档主页：<https://skywater-pdk.readthedocs.io/>
- 说明：Google 与 SkyWater 合作开放的 130nm 工艺 PDK，配合 OpenLane 可进行真实 tapeout 练习（Google 定期开放免费 MPW shuttle）

### MIT 6.004 Computation Structures（体系结构前置）

- 课程网站：<https://ocw.mit.edu/courses/6-004-computation-structures-spring-2017/>
- 说明：从逻辑门到完整处理器的设计链路，是理解 ASIC 设计决策如何影响系统性能的重要视角，建议在进入 UIUC VLSI CAD 之前或同期参阅

### Synopsys / Cadence 高校授权

- 说明：复旦微电子学院通常提供 Synopsys Design Compiler、Cadence Genus / Innovus 等工具的校园网授权，建议在学习 UIUC 课程的同时使用校内工具进行实际综合与布局布线练习，形成理论与实践的闭环

## B 站配套资源

- 数字 IC 设计全流程讲解（RTL 到版图）：B 站搜索"ASIC 设计流程 Verilog"或"数字 IC 设计 从 RTL 到版图"
- 国内高校 ASIC/VLSI 课程录像：B 站搜索"超大规模集成电路"或"VLSI 设计 后端"
- OpenLane 实战教程（中文）：B 站搜索"OpenLane SKY130"或"开源 ASIC 流程"

## 前置学习建议

1. 数字逻辑基础（布尔代数、组合逻辑、时序逻辑、有限状态机）——参见 [MIT 6.004](../../数字/数字逻辑基础/MIT6.004.md) 或复旦对应课程
2. Verilog RTL 编程（可综合 Verilog 代码风格、仿真）——参见本站 HDL 目录下 Verilog 相关资源
3. 建议先动手用 Yosys 对一个简单 Verilog 模块做综合，感受工具输出后，再进入 UIUC 课程的逻辑综合章节，理解会深得多
4. NPTEL Digital VLSI Design 或 [NPTEL VLSI Design（IIT）](../../数字/数字集成电路/VLSI_design.md) 可作为 ASIC 电路级知识的补充
