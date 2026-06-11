# EDA 算法

EDA 工具（Synopsys DC、Cadence Innovus 等）背后运行的是数十年积累的图算法、整数规划与启发式搜索。**这个目录专门收录讲算法本质的课程**，与 [EDA 工具目录](../../EDA/index.md)（Vivado / Cadence Virtuoso 入门）是不同层次的内容——后者教你用工具，这里教你工具背后在做什么。

## 推荐课程

- **[NPTEL: VLSI Physical Design（IIT KGP）](NPTEL_physical_design.md)** — KL/FM 划分、解析布局、迷宫布线、STA 全流程算法 ★
- **[NPTEL: Synthesis of Digital Systems（IIT Delhi）](NPTEL_synthesis.md)** — 调度/分配/绑定、BDD、布尔优化、工艺映射 ★

## 学习路径建议

两门课互补，覆盖 EDA 算法的两大半壁：

- **先学《VLSI Physical Design》**——布局布线问题更直观，从划分入手建立图算法视角
- **再学《Synthesis of Digital Systems》**——BDD 和逻辑优化数学密度更高，先建立图论直觉更顺

两门都学完，再去看 UIUC VLSI CAD（Coursera）作为工业流程串联，效果最佳。

## 对应的科研方向

- [EDA 与设计自动化](../../../../科研方向/EDA与设计自动化.md) — 这两门课是 DAC/ICCAD 论文的直接前置
- [处理器架构与编译系统](../../../../科研方向/处理器架构与编译系统.md) — 综合本质是编译，工艺映射是目标码生成
