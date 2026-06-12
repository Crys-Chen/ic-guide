# 深度学习

深度学习是**当前 AI 的主流范式**——用大规模神经网络(CNN、RNN、Transformer)从海量数据中学习,在视觉、语言、语音、推荐等几乎所有 AI 任务上达到 SOTA。

对硬件研究者来说,理解 CNN 的卷积、Transformer 的 attention 是**设计 AI 加速器的前提**——需要先知道工作负载长什么样,才能设计对应的硬件。

```mermaid
graph LR
    classDef beginner fill:#EFF6FF,stroke:#3B82F6,color:#1E40AF
    classDef intermediate fill:#F0FDF4,stroke:#16A34A,color:#15803D
    classDef advanced fill:#F8FAFC,stroke:#64748B,color:#374151
    DL["吴恩达 DL (Coursera)"]:::beginner
    D2L["李沐 d2l (动手学DL)"]:::beginner
    LHY["李宏毅 ML (NTU)"]:::intermediate
    CS231["CS231n (Stanford)"]:::intermediate
    EECS["EECS 498 (UMich)"]:::intermediate
    CS224N["CS224n (Stanford)"]:::intermediate
    CS224W["CS224w (Stanford)"]:::advanced
    CS285["CS285 (深度强化学习)"]:::advanced
    DL --> LHY
    D2L --> LHY
    LHY --> CS231
    LHY --> EECS
    LHY --> CS224N
    LHY --> CS285
    CS224N --> CS224W
    CS231 --> CS224W
```

## 相关科研方向

[AI 算法与系统](../../../科研方向/AI算法与系统.md) · [类脑芯片](../../../科研方向/类脑芯片.md) · [具身智能](../../../科研方向/具身智能.md)

