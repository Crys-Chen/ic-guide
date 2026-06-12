# EDA 工具

EDA(Electronic Design Automation)指**用于设计、仿真、验证、流片芯片的软件工具**。从 RTL 综合到布局布线、从模拟仿真到版图设计,所有 IC 设计的"工程产出"都借助 EDA 工具完成。Cadence、Synopsys、Siemens EDA 三家垄断了商业 EDA 市场,合称"EDA 三巨头"。

## 课程与工具

- **[EDA 工具(复旦)](MICR130035.md)** — 复旦微电子综合 EDA 课
- **[Vivado 入门](vivado.md)** — AMD/Xilinx FPGA EDA 工具入口
- **[Cadence Virtuoso 入门](cadence.md)** — 模拟 IC 设计工业标准
- **[UIUC VLSI CAD (Coursera)](UIUC_VLSI_CAD.md)** — 讲 EDA 工具背后的算法:逻辑综合、布局布线、时序分析

## 学习路径建议

EDA 工具的学习**强烈依赖具体方向**:
- 数字 IC / FPGA → Vivado(本科 FPGA 课通用)、Synopsys Design Compiler、Cadence Innovus
- 模拟 IC → Cadence Virtuoso 全家桶(原理图 → 仿真 → 版图 → DRC/LVS)
- 学术开源 → OpenLane / OpenROAD(基于 Yosys 等)

工具是杠杆,不是目标。**先把电路课学好,工具用起来才有意义**。

## 对应的科研方向

- [EDA 与设计自动化](../../../科研方向/EDA与设计自动化.md) — 这个方向本身就是研究 EDA 算法和工具
- 任何 [电路](../) 设计方向 — 工具是"流片"环节的必备,所有方向都用得到
