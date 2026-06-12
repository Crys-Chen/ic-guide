# 人工智能

从机器学习的数学基础到大语言模型的系统实现，这个板块覆盖 AI 算法与系统的完整知识链。对做硬件研究的人来说，机器学习基础和 AI 系统（ML Systems）是与芯片设计交叉最深的两个子方向。

## 课程关系

箭头从前置课程指向后置课程。

```mermaid
graph TB
    A["入门速成<br/>Karpathy · CS50 AI · CS188"] --> B["机器学习<br/>CS229 · CS189 · Data100"]
    B --> C["深度学习<br/>CS231n · CS224n · LHY"]
    C --> D["深度生成模型<br/>扩散模型 · CS294-158"]
    D --> L["大语言模型<br/>CS336 · 11-711"]
    B --> E["机器学习理论<br/>PGM · 统计学习理论"]
    B --> G["强化学习<br/>赵世钰 · Silver"]
    C --> H["类脑与SNN"]
    C --> F["AI 系统<br/>10-414 · TinyML · MLC"]
    L --> F

    classDef intro fill:#EFF6FF,stroke:#3B82F6,stroke-width:2px
    classDef algo fill:#F0FDF4,stroke:#16A34A,stroke-width:2px
    classDef sys fill:#FFFBEB,stroke:#B7791F,stroke-width:2px
    classDef theory fill:#F8FAFC,stroke:#64748B,stroke-width:1.5px,stroke-dasharray:3 3
    class A intro
    class B,C,D,L algo
    class F sys
    class E,G,H theory
```

主链是算法层，入门 → 机器学习 → 深度学习 → 深度生成模型 → 大语言模型。AI 系统在算法层之上，讲怎么把模型高效跑起来，是芯片研究者最该投入的一层。机器学习理论、强化学习、类脑与SNN 是从主链分出的三个专题方向，按研究需要选学。

---

**[入门速成](入门速成/)** — Neural Networks: Zero to Hero、CS50 AI、CS188；几天之内建立 AI 的基本图景，适合从零开始。

**[机器学习](机器学习/)** — CS229、CS189、Data100；监督学习、优化、泛化理论；做 AI 硬件协同设计的数学基础。

**[AI 系统](AI系统/)** — CMU 10-414、TinyML、MLC（mlc.ai）；研究如何把 AI 模型高效部署到各类硬件上，与处理器架构、存算一体方向直接交叉。

**[深度学习](深度学习/)** — CS231n、CS224n、李宏毅机器学习；神经网络的主流模型（CNN、Transformer）及训练技术。

**[深度生成模型](深度生成模型/)** — VAE、GAN、扩散模型；了解 AI 前沿模型的工作原理与计算需求。

**[大语言模型](大语言模型/Stanford_CS336.md)** — CS336 from scratch、CMU 11-711、OpenBMB；LLM 的训练与推理，当前 AI 系统研究的主要工作负载。

**[强化学习](强化学习/Westlake_zhao_RL.md)** — 赵世钰数学原理 + David Silver 经典；ML for EDA / 机器人控制策略的核心算法。

**[类脑与SNN](类脑与SNN/index.md)** — 脉冲神经网络基础资源；目前无完整公开课，收录 EPFL Gerstner / snnTorch 等次优资源。

**[机器学习理论](机器学习理论/)** — 概率图模型、统计学习理论；理论方向的进一步深入。

## 对科研方向的作用

| 对应科研方向 | 推荐子板块 | 为什么 |
|---|---|---|
| [AI 算法与系统](../../科研方向/AI算法与系统.md) | AI 系统 + 深度学习 + 大语言模型 | 这是本方向的本体——量化、推理优化、LLM serving 都来自这里 |
| [处理器架构与编译系统](../../科研方向/处理器架构与编译系统.md) | AI 系统 (TVM/MLC) | AI 编译器是当前体系结构最热的研究分支之一 |
| [存算一体与近存计算](../../科研方向/存算一体与近存计算.md) | 入门速成 + AI 系统 | 至少要看懂 attention、MAC 在做什么,才能设计 PIM 加速器 |
| [类脑芯片](../../科研方向/类脑芯片.md) | 机器学习 + 深度学习 | SNN 与 ANN 共享反向传播框架 |
| [具身智能](../../科研方向/具身智能.md) | 深度学习 (CS285 强化学习) + 深度生成模型 | 机器人控制策略是 RL + LLM Agent 的混合 |
| [EDA 与设计自动化](../../科研方向/EDA与设计自动化.md) | 机器学习 + 深度学习 | ML for EDA 是该方向的子领域,GNN/RL 用于布局布线 |

> **写给硬件方向的同学**: 不必把所有算法原理都吃透,但**至少要能看懂 PyTorch 一段 forward 代码,以及一个 transformer block 的计算量分布**——这是和 AI 同事沟通的最低门槛。AI 系统板块比深度学习板块对你更直接。

## 征集中的槽位

以下子领域已规划进知识框架，但还没有经过验证的课程推荐。欢迎熟悉这些领域的同学通过[参与建设](../../参与建设.md)补全：

- [机器人学（运动学/SLAM/VLA）](机器人学/index.md)（征集中）
- [类脑与SNN](类脑与SNN/index.md)（无完整公开课，收录次优资源，欢迎补充）
