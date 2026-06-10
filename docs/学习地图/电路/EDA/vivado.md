# Vivado 数字 EDA 入门

## 工具简介

- 开发商：AMD（原 Xilinx）
- 适用范围：Xilinx/AMD FPGA 及 SoC（Artix-7、Kintex-7、Virtex、Zynq 系列等）
- 支持语言：Verilog / VHDL / SystemVerilog
- 工具难度：🌟🌟🌟
- 获取方式：[AMD 官网](https://www.xilinx.com/support/download.html) 免费下载 Vivado ML Standard 版（非商业使用免费，支持主流 FPGA 型号）

Vivado 是 AMD（原 Xilinx）为 FPGA/SoC 设计提供的主流 EDA 套件，覆盖数字设计的完整流程：RTL 设计输入 → 逻辑综合（Synthesis）→ 实现（Implementation：布局布线）→ 静态时序分析（Timing Analysis）→ 在线调试（ILA Chipscope）→ 比特流生成与 FPGA 烧录（Bitstream）。学会 Vivado 是数字 IC 工程师的基本技能，也是高校 FPGA 实验课（含复旦 MICR130024）的核心工具。

## 学习资源

### 官方文档（入门必读）

- **Vivado 入门指南 UG910**：<https://docs.amd.com/r/en-US/ug910-vivado-getting-started>
  覆盖 Vivado IDE 概述、安装配置、GUI 与 Tcl 命令行使用、项目管理与 IP 核操作。
- **设计方法论教程集 UG949**：<https://docs.amd.com/r/en-US/ug949-vivado-design-methodology/Vivado-Design-Suite-Tutorials>
  包含设计流程总览（UG888）、逻辑仿真（UG937）等配套教程。

### 视频教程

- **Digilent 官方教程**（与 Basys3/Arty 等主流开发板配套，实践性强）
  - Vivado Getting Started：<https://digilent.com/reference/vivado/getting_started/start>
  - 可编程逻辑教程总目录：<https://digilent.com/reference/learn/programmable-logic/tutorials/start>

- **B 站中文视频教程**（零基础、Vivado 全流程，免费）
  - 正点原子《手把手教你学 FPGA》（基于 Artix-7 达芬奇 Pro 开发板，119 讲，含 Vivado 安装与使用）：<https://www.bilibili.com/video/BV19A411N7L3/>
  - 《Xilinx FPGA/Vivado 开发教程》（中文，34 讲全）：<https://www.bilibili.com/video/BV1r7411j79u/>

### 安装与配置

- Vivado ML Standard 免费版下载：<https://www.xilinx.com/support/download.html>
- 安装 + Digilent 板卡文件配置指南：<https://digilent.com/reference/programmable-logic/guides/installing-vivado-and-sdk>
