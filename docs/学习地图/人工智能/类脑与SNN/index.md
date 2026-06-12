# 类脑计算与脉冲神经网络（SNN）

脉冲神经网络（Spiking Neural Networks，SNN）用时序离散的电脉冲替代连续激活值，在功耗极低的神经形态芯片（Intel Loihi、IBM TrueNorth）上天然高效。这是与生物神经科学距离最近的 AI 方向，也是复旦、清华、浙大等国内团队在国际上有布局的方向之一。

**目前没有成体系的公开视频课。** 这是符合现实的——SNN 仍处于基础研究阶段，系统性的教材级内容正在形成中。本页收录目前可用的最佳次优资源，同时向有该方向经验的同学开放征集。

## 可用资源

### 理论基础

**EPFL Gerstner：Neuronal Dynamics（神经元动力学）**

- 定位：SNN 的生物物理基础——Hodgkin-Huxley 模型、LIF 神经元、STDP 学习规则的数学推导
- 形式：免费在线教材（42 章，带图示）+ 配套视频讲座
- 链接：[neuronaldynamics.epfl.ch](https://neuronaldynamics.epfl.ch/)
- 说明：这是理论背景课，不讲工程实现；但做 SNN 研究的人几乎都读过它

### 工程入门

**snnTorch：PyTorch-based SNN 教程**

- 定位：用 PyTorch 写 SNN 并训练，有替代 BPTT 的 surrogate gradient 实现
- 链接：[snnTorch 官方教程](https://snntorch.readthedocs.io/en/latest/tutorials/index.html)
- 说明：最快上手 SNN 代码的路径，适合有 PyTorch 基础的同学

### 社区资源

**Open Neuromorphic**

- 定位：神经形态计算社区，整理了 Loihi / TrueNorth / SpiNNaker 的论文、教程和 workshop 录像
- 链接：[open-neuromorphic.org](https://open-neuromorphic.org/)

## 待补充

如果你正在做 SNN 或神经形态芯片方向，有推荐的系统性课程或学习路径，欢迎通过[参与建设](../../../参与建设.md)补充。目前最缺的是：

- 覆盖 SNN 训练（surrogate gradient / ANN-to-SNN 转换）的完整视频课
- 神经形态硬件（Loihi / BrainScaleS）的系统性入门材料

## 对应的科研方向

- [类脑芯片](../../../科研方向/类脑芯片.md) — SNN 是类脑芯片的核心计算范式
- [AI 算法与系统](../../../科研方向/AI算法与系统.md) — SNN 与 ANN 的效率对比是交叉研究热点
