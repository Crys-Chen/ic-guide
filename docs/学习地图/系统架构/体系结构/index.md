# 计算机体系结构

体系结构(Computer Architecture)研究**处理器及计算系统的设计**:指令集架构(ISA)、流水线、超标量、缓存层次、内存系统、多核、加速器、GPU 等。这是与硬件设计交叉最深的 CS 子方向,也是 IC 研究生最常选择的"软硬交叉"方向之一。

## 推荐课程

- **[Coursera: Nand2Tetris](N2T.md)** — 经典入门:**从与门到操作系统的全栈课程**,亲手实现一个简易 CPU
- **[UCB CS61C](CS61C.md)** — Berkeley 体系结构入门,RISC-V ISA + 实战 Project
- **[ETHz: Digital Design and Computer Architecture (DDCA)](DDCA.md)** — Onur Mutlu 主讲,YouTube 全公开;**逻辑清晰、内容现代,新手最好的本科课** ★
- **[ETHz: Computer Architecture](CA.md)** — Onur Mutlu 的研究生进阶版,讲的是 ISCA/MICRO 级别的话题
- **[清华:计算机组成原理](THU_computer_org.md)** — 中文计组体系课,57 讲完整搬运
- **[国科大胡伟武:计算机体系结构](UCAS_hu_archbase.md)** — 龙芯首席科学家亲授,配套开源教材

## 学习路径建议

**入门:Nand2Tetris(动手) + CS61C(系统化) → 进阶:DDCA → 研究入门:Onur Mutlu CA + 配合 [Gem5](../../../工程工具/Gem5.md) / [GPGPU-Sim](../../../工程工具/GPGPUSIM.md) 仿真器实操**(两个仿真器在工程工具板块有速通页)

想动手从零实现一个 RISC-V 处理器并流片,见[专题社区](../../../专题社区/index.md)的"一生一芯"。

学完 DDCA + CA,你就能读懂大多数 ISCA / MICRO / HPCA 论文了。

## 对应的科研方向

- [处理器架构与编译系统](../../../科研方向/处理器架构与编译系统.md) — 本方向的核心前置
- [可重构计算与FPGA](../../../科研方向/可重构计算与FPGA.md) — FPGA 是软核处理器的实验平台
- [存算一体与近存计算](../../../科研方向/存算一体与近存计算.md) — 近存计算的根问题(memory wall)在体系结构中讲透
