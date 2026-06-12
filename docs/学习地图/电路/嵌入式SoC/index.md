# 嵌入式 SoC

嵌入式 SoC(Embedded System on a Chip)指**把 CPU、内存、外设、加速器集成到单一芯片上,嵌入到特定设备执行专门任务**。智能手机的主处理器、路由器的控制芯片、汽车 ECU、IoT 设备都依赖嵌入式 SoC。

这是连接“芯片设计”与“系统应用”的桥梁——仅会写 RTL 不够,还需要懂操作系统、外设驱动、实时性、低功耗设计,才能设计真正能用的 SoC。

```mermaid
graph LR
    A[数字逻辑基础] --> B["Cornell ECE 4760 微控制器系统设计"]
    A --> C["复旦 嵌入式处理器与SoC设计 ICSE20008"]
    D[C 语言] --> B
    D --> C
    B --> E[实时系统与底层驱动开发]
    C --> F[处理器架构与芯片系统集成]
    classDef prereq fill:#EFF6FF,stroke:#3B82F6,color:#1E40AF
    classDef course fill:#F0FDF4,stroke:#16A34A,color:#14532D
    classDef advanced fill:#F8FAFC,stroke:#64748B,color:#1E293B
    class A,D prereq
    class B,C course
    class E,F advanced
```

## 相关科研方向

[处理器架构与编译系统](../../../科研方向/处理器架构与编译系统.md) · [硬件安全与可信计算](../../../科研方向/硬件安全与可信计算.md)

