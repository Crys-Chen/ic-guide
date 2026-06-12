# 数据结构与算法

数据结构与算法是**所有计算机科学和工程的通用工具**。从图算法、动态规划、复杂度分析,到具体的树/堆/哈希实现——这些是 EDA 算法研究、系统类研究、AI 系统优化的共同语言。

对 IC 学生来说,这门课比“刷题面试”重要得多:做 EDA 时会遇到 NP-hard 问题(布局布线、逻辑综合)需要近似算法;做体系结构时会用图算法分析数据流图;做 AI 系统时需要理解算子调度的图算法。

```mermaid
graph LR
    FDU["复旦 数据结构与算法"]
    CS61B["UCB CS61B"]
    Coursera["Coursera Algorithms I & II"]
    MIT6006["MIT 6.006"]
    CS170["UCB CS170"]
    MIT6046["MIT 6.046"]
    FDU --> MIT6006
    CS61B --> MIT6006
    Coursera --> MIT6006
    MIT6006 --> CS170
    MIT6006 --> MIT6046
    classDef beginner fill:#EFF6FF,stroke:#3B82F6,color:#1E40AF
    classDef intermediate fill:#F0FDF4,stroke:#16A34A,color:#15803D
    classDef advanced fill:#F8FAFC,stroke:#64748B,color:#334155
    class FDU,CS61B,Coursera beginner
    class MIT6006 intermediate
    class CS170,MIT6046 advanced
```

## 相关科研方向

[EDA 与设计自动化](../../../科研方向/EDA与设计自动化.md) · [处理器架构与编译系统](../../../科研方向/处理器架构与编译系统.md) · [AI 算法与系统](../../../科研方向/AI算法与系统.md)

