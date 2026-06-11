# 并行与分布式系统

并行与分布式系统研究**如何让多个计算单元协同工作**:GPU 并行编程、分布式一致性、消息传递、容错。这是现代 AI 训练(数千 GPU 集群)、大规模数据处理(Spark/Flink)、区块链(分布式共识)的共同基础。

对硬件研究者来说,并行 + 分布式是**理解 AI 系统、大规模计算的必备背景**。GPU 内核、互联网络、HBM 内存协议——这些硬件细节最终都要为分布式负载服务。

## 推荐课程

- **[CMU 15-418 / Stanford CS149](CS149.md)** — 并行计算经典课,**讲 GPU、向量化、cache coherence、共享内存** ★
- **[NPTEL: GPU Architectures and Programming (IIT KGP)](NPTEL_GPU.md)** — GPU 入门，CUDA 编程模型 + warp 执行 + 并行算法 ★
- **[ETH HetSys: Heterogeneous Systems（Mutlu）](ETH_HetSys.md)** — GPU 深度课，warp 调度 / 访存合并 / HBM 微架构 ★
- **[ZOMI 酱：GPU 架构原理系列](ZOMI_GPU.md)** — 中文，Fermi→Hopper 代际演进，含 Tensor Core 专题 ★

## 学习路径建议

**做 AI / GPU 方向:CS149 优先**(并行编程模型、GPU、cache coherence)→ NPTEL GPU 入门微架构 → ETH HetSys 深挖 warp 调度与 HBM → 配合 Gem5/GPGPU-Sim 实操


## 对应的科研方向

- [AI 算法与系统](../../../科研方向/AI算法与系统.md) — Megatron / vLLM / DeepSpeed 都是分布式训练系统
- [处理器架构与编译系统](../../../科研方向/处理器架构与编译系统.md) — GPU 架构、互联网络是研究重点
- [可重构计算与FPGA](../../../科研方向/可重构计算与FPGA.md) — FPGA 集群与异构并行
