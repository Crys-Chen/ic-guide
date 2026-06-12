# 深度生成模型

深度生成模型研究**让 AI 能“生成”内容**——文本(LLM)、图像(扩散模型)、3D、音频、视频。这是 2020 年代 AI 革命的核心:ChatGPT、Sora、Stable Diffusion、Midjourney 全部是生成模型。

对硬件研究者来说,生成模型的**算力消耗规律**是设计大规模 AI 系统的关键参考——LLM 训练 / 推理的 memory bandwidth、计算密度、稀疏性都直接决定加速器设计。

```mermaid
graph LR
    A["深度学习基础"]
    B["MIT 6.S184"]
    C["UCB CS294-158 深度无监督学习"]
    D["Stanford CS336 从零实现 LLM"]
    E["CMU 11-711 Advanced NLP"]
    A --> B
    A --> C
    B --> D
    C --> D
    C --> E
    classDef beginner fill:#EFF6FF,stroke:#3B82F6,color:#1e3a5f
    classDef intermediate fill:#F0FDF4,stroke:#16A34A,color:#14532d
    classDef advanced fill:#F8FAFC,stroke:#64748B,color:#1e293b
    class A beginner
    class B,C intermediate
    class D,E advanced
```

## 相关科研方向

[AI 算法与系统](../../../科研方向/AI算法与系统.md) · [处理器架构与编译系统](../../../科研方向/处理器架构与编译系统.md) · [存算一体与近存计算](../../../科研方向/存算一体与近存计算.md)

