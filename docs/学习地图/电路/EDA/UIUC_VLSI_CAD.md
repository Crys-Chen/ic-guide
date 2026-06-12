# UIUC VLSI CAD: Logic to Layout（Coursera）

## 课程简介

- 所属大学：伊利诺伊大学香槟分校（UIUC）
- 先修要求：数字逻辑基础、硬件描述语言（Verilog）
- 编程语言：Verilog、EDA 工具（Synopsys / Cadence 或开源工具链）
- 课程难度：🌟🌟🌟🌟🌟
- 预计学时：80 小时

UIUC VLSI CAD 系列由 Rob A. Rutenbar 教授主讲，是 Coursera 上少数完整覆盖数字 ASIC 设计全流程的公开课程之一。Part I（Logic to Layout）聚焦于从 RTL 逻辑描述到物理版图的 EDA 工具链核心：布尔函数的高效表示（BDD——二元决策图）、逻辑综合（Yosys 风格的工艺映射）、技术映射（standard cell library mapping）、布局（placement）与布线（routing）。Part II（Verification）则覆盖形式化验证方法——模型检验（model checking）与等价性检验（equivalence checking），填补了国内 ASIC 课程普遍忽视验证环节的空白。

课程以算法与数学原理为核心，不只教工具操作，而是深入解释每个 EDA 步骤背后的计算复杂性与工程权衡。学完本课程后，学生将真正理解 Synopsys Design Compiler、Cadence Innovus 等商业工具在做什么，而不仅仅是“会用”。结合开源 ASIC 流程（OpenLane + SKY130 PDK），可在无商业工具授权的环境下完成从 RTL 到 GDSII 的完整流片练习。对于志在数字后端、综合与签核方向的同学，本课是最重要的理论基础之一。

国内在 ASIC 设计方向的培训资源日益丰富，中国大学 MOOC 有“超大规模集成电路设计”相关课程，B 站也有来自清华、浙大、中科大等高校的数字 IC 设计流程录像。复旦本校的相关课程（如 INFO130094）可与本课程内容互相印证、加深理解。

## 课程资源

- 课程主页（Part I · Logic）：<https://www.coursera.org/learn/vlsi-cad-logic>
- 课程说明（Part I）：Rob A. Rutenbar 主讲，共 6 模块，审计模式免费；4.6/5 评分（557 条评价）
- 课程教材（推荐）：《Electronic Design Automation: Synthesis, Verification, and Test》Laung-Terng Wang 等（Morgan Kaufmann）
- 课程教材（布局布线）：《VLSI Physical Design: From Graph Partitioning to Timing Closure》Andrew B. Kahng 等（Springer）
