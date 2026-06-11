# 高层次综合（HLS）

高层次综合（High-Level Synthesis）把 **C/C++ 代码直接综合成 RTL**——工程师在算法层描述计算，由 HLS 工具自动推断时序、流水线、接口。这是 FPGA 加速器开发和可重构计算研究的核心工具链。

HLS 并不取代 RTL 手写，而是解决了一个具体问题：用 C++ 描述算法比 Verilog 快 10 倍，HLS 让这个速度优势变成硬件。做 FPGA 加速、神经网络硬化（hls4ml）或可重构计算研究都会大量用到它。

## 推荐课程

- **[高亚军：跟 Xilinx SAE 学 HLS](gaoyajun_hls.md)** — 中文入门，pragma 与接口综合实战 ★
- **[HLS Programming with FPGAs（Lehigh）](lehigh_hls.md)** — Vitis HLS 全流程，AWS F1 实战 ★

## 学习路径建议

**先看高亚军**建立中文直觉（pragma 含义、接口综合、pipeline/unroll 对比），再看 Lehigh 课做完整工程（Vitis HLS + AWS F1）。两门合在一起约 3–4 周。

先修：[Verilog](../Verilog/index.md) 基础是硬性要求；读得懂 C++ 即可，不需要 Verilog 熟练。

## 对应的科研方向

- [可重构计算与FPGA](../../../../科研方向/可重构计算与FPGA.md) — HLS 是该方向工程主力工具
- [处理器架构与编译系统](../../../../科研方向/处理器架构与编译系统.md) — HLS 编译器本身是体系结构 + 编译的研究对象（Bambu、LegUp、CIRCT）
