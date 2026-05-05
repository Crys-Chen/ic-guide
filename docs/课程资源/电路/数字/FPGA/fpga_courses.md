# FPGA 设计学习资源汇总

## 课程简介

- 所属大学：多平台（无单一大学归属）
- 先修要求：数字逻辑基础、Verilog / VHDL 语法入门
- 编程语言：Verilog / VHDL
- 课程难度：🌟🌟🌟🌟
- 预计学时：因路径而异（入门 30 小时，系统学习 80–120 小时）

FPGA 设计是复旦微电子学院数字方向最核心的工程实践技能，也是数字 IC 前端验证、芯片原型验证的必备工具。与纯理论课不同，FPGA 学习高度依赖动手实验和工具链熟悉程度，因此很难用单一 MOOC 覆盖所有需求。本页汇总了当前网络上质量最高的免费与付费 FPGA 学习资源，按照学习阶段分类排列，方便同学按需选择。

在进入本汇总之前，建议先完成 [HDLBits](../../../硬件描述语言(HDL)/Verilog/HDLBits.md) 的 Verilog 语法练习，并参阅 [UCB EECS151/251A](../../../硬件描述语言(HDL)/Verilog/EECS151.md)（Verilog → FPGA → RISC-V 处理器完整 Project）。

---

## 入门阶段

### Nandland — FPGA 基础教程（强烈推荐）

- 平台：官方网站
- 课程主页：<https://www.nandland.com/>
- 课程难度：🌟🌟🌟
- 简介：Nandland 是目前网络上 Verilog 与 VHDL FPGA 入门质量最高的免费教程网站，由前 Xilinx 工程师编写。内容包括：Verilog/VHDL 语法速查、常见数字模块（FIFO、UART、SPI、I2C）的 FPGA 实现、时序约束入门。每个实例配有完整代码与波形说明，适合零 FPGA 经验的同学快速上手。

### AMD/Xilinx 大学计划（官方资源）

- 课程主页：<https://www.xilinx.com/support/university/vivado/vivado-teaching-material/hdl-design.html>
- 大学计划总页：<https://www.xilinx.com/support/university.html>
- 课程难度：🌟🌟🌟
- 简介：AMD（前 Xilinx）官方大学计划提供完整的 FPGA 系统设计教材，涵盖 Vivado 工具流程、IP 核使用、AXI 总线协议、MicroBlaze 软核 SoC 设计，并与 Basys3、Arty 等主流开发板配套。对于使用 Xilinx 系列板卡（复旦课程常用）的同学来说，这是最权威的官方入门资料。

### FPGA4Fun — 项目驱动学习

- 课程主页：<https://www.fpga4fun.com/>
- 课程难度：🌟🌟🌟
- 简介：FPGA4Fun 以具体外设项目为导向（HDMI 输出、音频合成、RS232 通信等），每个项目从协议原理讲起，直接给出完整的 Verilog 实现，适合入门后扩展实践项目，也适合学习如何将协议规范翻译为可综合的 RTL 代码。

---

## 进阶阶段

### Coursera: FPGA Design for Embedded Systems（科罗拉多大学）

- 平台：Coursera
- 课程主页：<https://www.coursera.org/specializations/fpga-design>
- 课程难度：🌟🌟🌟🌟
- 简介：科罗拉多大学在 Coursera 开设的 FPGA 专项课程，共四门子课程，系统覆盖 HDL 设计、时序分析、嵌入式处理器集成（MicroBlaze/ARM）及 FPGA 系统优化，每门课均有编程作业，适合希望获得系统化 FPGA 嵌入式设计能力的同学。审计模式免费。

### edX / UTAustin 嵌入式系统与 FPGA

- 平台：edX
- 搜索方式：在 <https://www.edx.org/> 搜索"FPGA Embedded Systems UTAustin"
- 课程难度：🌟🌟🌟🌟
- 简介：德克萨斯大学奥斯汀分校在 edX 开设的嵌入式系统课程涵盖 FPGA 在实时嵌入式场景中的应用，强调软硬件协同设计，适合有一定 HDL 基础后进阶学习。

---

## 中文资源

### B 站：正点原子 / 野火 FPGA 开发教程

- 搜索方式：B 站搜索"正点原子 FPGA"或"野火 FPGA 教程"
- 课程难度：🌟🌟🌟
- 简介：国内最主流的 FPGA 开发板配套教程，从 Verilog 语法到 IP 核、DDR、以太网外设，内容详尽，配套实验代码完整，适合以实际开发板（ZYNQ / Artix-7）为中心的工程实践学习。

### B 站：FPGA Vivado 入门 MOOC 系列

- 搜索方式：B 站搜索"FPGA Vivado 入门"或"FPGA 数字系统设计 MOOC"
- 简介：多所国内高校（电子科大、西安交大等）的 FPGA 相关课程在 B 站有完整录像，内容与复旦 MICR130024 高度重叠，适合配合复旦课程同步学习。

---

## 推荐学习路径

1. 先完成 [HDLBits](../../../硬件描述语言(HDL)/Verilog/HDLBits.md)，熟练掌握 Verilog 语法
2. 阅读 Nandland 教程，完成基础 FPGA 外设模块（UART、FIFO）的实现练习
3. 参照 AMD 大学计划教材完成 Vivado 工具流入门，跑通 LED 闪烁、VGA 输出等基础项目
4. 跟随 [UCB EECS151](../../../硬件描述语言(HDL)/Verilog/EECS151.md) 的 FPGA Lab，完成更复杂的数字系统综合实验
5. 按需选择 Coursera 科罗拉多大学专项课程，系统提升 FPGA 嵌入式系统设计能力
6. 结合复旦 MICR130024 课程要求，在 Xilinx 开发板上完成课程 Project
