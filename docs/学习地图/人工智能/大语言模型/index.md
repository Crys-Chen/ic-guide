# 大语言模型

LLM 是当前 AI 系统研究的主要工作负载,训练和推理的算力规律直接决定加速器设计,因此从深度生成模型目录独立成组。

```mermaid
graph LR
    classDef beginner fill:#EFF6FF,stroke:#3B82F6,color:#1E40AF
    classDef intermediate fill:#F0FDF4,stroke:#16A34A,color:#15803D
    classDef advanced fill:#F8FAFC,stroke:#64748B,color:#334155
    FDU["复旦 自然语言处理与大模型"]:::beginner
    OpenBMB["清华/OpenBMB 大模型公开课"]:::intermediate
    CMU["CMU 11-711 Advanced NLP"]:::intermediate
    Limu["李沐 论文精读"]:::intermediate
    CS336["Stanford CS336 从零实现 LLM"]:::advanced
    FDU --> OpenBMB
    FDU --> CMU
    OpenBMB --> Limu
    OpenBMB --> CS336
    CMU --> Limu
    CMU --> CS336
```

## 相关科研方向

[AI 算法与系统](../../../科研方向/AI算法与系统.md) · [处理器架构与编译系统](../../../科研方向/处理器架构与编译系统.md) · [存算一体与近存计算](../../../科研方向/存算一体与近存计算.md)

