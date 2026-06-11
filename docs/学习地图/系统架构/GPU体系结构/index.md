# GPU 体系结构

GPU 是现代 AI 训练、图形渲染、科学计算的核心硬件。GPU 体系结构研究 **warp 调度、访存合并、缓存层次、Tensor Core 微架构、HBM 内存接口** 等问题——这些是 AI 芯片设计、GPU 微架构研究、系统级性能优化的基础。

与并行编程（CS149 等）不同，GPU 体系结构关注的是**硬件内部如何运作**，而非如何写并行程序。

## 推荐课程

- **[NPTEL: GPU Architectures and Programming（IIT KGP）](NPTEL_GPU.md)** — GPU 入门，CUDA 编程模型 + warp 执行 + 并行算法 ★
- **[ETH HetSys: Heterogeneous Systems（Mutlu）](ETH_HetSys.md)** — 深度课，warp 调度 / 访存合并 / HBM 微架构 ★
- **[ZOMI 酱：GPU 架构原理系列](ZOMI_GPU.md)** — 中文，Fermi→Hopper 代际演进，含 Tensor Core 专题 ★

## 学习路径建议

先看 NPTEL 建立 CUDA 编程模型与 warp 执行的基本图像，再用 ETH HetSys 深挖微架构细节，ZOMI 酱系列作为中文补充和代际演进综述。配合 GPGPU-Sim 仿真器实操。

## 对应的科研方向

- [AI 算法与系统](../../../科研方向/AI算法与系统.md) — GPU 是 AI 训练基础设施的核心
- [处理器架构与编译系统](../../../科研方向/处理器架构与编译系统.md) — GPU 微架构、互联网络是研究重点
