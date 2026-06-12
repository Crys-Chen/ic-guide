# 硬件描述语言 (HDL)

硬件描述语言让工程师能**像写代码一样描述数字电路**。设计者写一段 HDL,EDA 工具就能把它综合成实际的硬件——无论是 FPGA bitstream 还是 ASIC 的 GDSII。HDL 是数字 IC 设计的"通用语言",和 C++/Python 在软件领域的地位类似。

## 子目录

- **[Verilog](Verilog/ZJU_digital_system.md)** — 业界事实标准,语法类似 C 语言;**做数字 IC 必学的第一门 HDL**
- **[Chisel](Chisel/chisel-bootcamp.md)** — 基于 Scala 的现代 HDL,参数化能力强,适合大型 SoC(RISC-V Rocket Chip 用此构建)
- **[HLS（高层次综合）](HLS/gaoyajun_hls.md)** — 把 C/C++ 直接综合成 RTL

## 学习路径建议

**Verilog 是绕不开的起点**。[HDLBits](Verilog/HDLBits.md) 在线刷题(像 LeetCode 的 Verilog 版)是最快入门的方式;[Nandland](../FPGA/nandland.md) 的图文教程适合零基础(已归入 FPGA 目录);[UCB EECS151/251A](../数字集成电路/EECS151.md) 是含 RISC-V Project 的完整数字设计课(已归入数字集成电路目录)。

进阶想做学术研究 / 大型项目,可学 Chisel(尤其做 RISC-V Chipyard 生态);HLS(高层次综合)也值得了解,但优先级低于 Verilog/Chisel。

## 对应的科研方向

- [处理器架构与编译系统](../../../../科研方向/处理器架构与编译系统.md) — 几乎所有处理器研究都用 Verilog/Chisel 写
- [可重构计算与FPGA](../../../../科研方向/可重构计算与FPGA.md) — FPGA 设计的入口语言
- [EDA 与设计自动化](../../../../科研方向/EDA与设计自动化.md) — 数字 EDA 工具就是把 HDL 变成 GDSII
