# 并行与分布式系统

并行与分布式系统研究**如何让多个计算单元协同工作**:GPU 并行编程、分布式一致性、消息传递、容错。这是现代 AI 训练(数千 GPU 集群)、大规模数据处理(Spark/Flink)、区块链(分布式共识)的共同基础。

对硬件研究者来说,并行 + 分布式是**理解 AI 系统、大规模计算的必备背景**。GPU 内核、互联网络、HBM 内存协议——这些硬件细节最终都要为分布式负载服务。

```mermaid
graph LR
    classDef beginner fill:#EFF6FF,stroke:#3B82F6,color:#1E40AF
    classDef intermediate fill:#F0FDF4,stroke:#16A34A,color:#15803D
    classDef advanced fill:#F8FAFC,stroke:#64748B,color:#334155
    USTC["中科大 并行计算"]:::beginner
    P101["parallel101 高性能并行编程"]:::intermediate
    CS149["CMU 15-418 / Stanford CS149"]:::advanced
    USTC --> P101
    USTC --> CS149
    P101 --> CS149
```

## 相关科研方向

[AI 算法与系统](../../../科研方向/AI算法与系统.md) · [处理器架构与编译系统](../../../科研方向/处理器架构与编译系统.md) · [可重构计算与FPGA](../../../科研方向/可重构计算与FPGA.md)

