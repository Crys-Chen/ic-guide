# 科研方向指引

这个板块写给大一大二的同学。

你还不需要现在就做决定，但早一点知道"这个领域在研究什么、需要什么基础"，能让你在选课、读论文、找实验室时少走很多弯路。

每个词条不是课程表，而是一张地图——告诉你这个方向在解决什么真实问题、哪些人在做、你现在应该学什么来靠近它。

---

## 十三个方向

按照知识依赖的层次，这些方向大致分布在四个层面：

```mermaid
graph TB
    subgraph L1["器件 / 材料层"]
        direction LR
        A1["先进制程与异构集成"]
        A2["功率半导体与宽禁带器件"]
        A3["硅光子与光电集成"]
    end

    subgraph L2["电路层"]
        direction LR
        B1["射频与毫米波"]
        B2["存储器与存算一体"]
        B3["神经形态计算"]
        B4["生物电子与脑机接口"]
        B5["模拟与混合信号IC"]
    end

    subgraph L3["架构 / 系统层"]
        direction LR
        C1["计算芯片与处理器架构"]
        C2["EDA 与设计自动化"]
        C3["硬件安全"]
    end

    subgraph L4["交叉应用层"]
        D1["具身智能"]
    end

    L1 --> L2 --> L3
    L3 -.-> L4

    classDef device  fill:#FDE8D8,stroke:#C0530A
    classDef circuit fill:#E6FFEC,stroke:#276749
    classDef arch    fill:#FFFBEB,stroke:#B7791F
    classDef cross   fill:#EBF4FF,stroke:#2C5282

    class A1,A2,A3 device
    class B1,B2,B3,B4,B5 circuit
    class C1,C2,C3 arch
    class D1 cross
```

---

## 如何选择

与其按热度排名，不如问自己几个问题：

**你更喜欢物理直觉还是数学推导？**
偏物理直觉 → 器件/工艺层（先进制程、功率半导体）  
偏数学推导 → 信号/电路层（射频、存算一体、模拟与混合信号）

**你喜欢靠近硬件还是靠近软件？**
靠近硬件 → 器件层、电路层  
靠近软件 → 计算芯片架构、EDA、具身智能

**你对什么应用场景最感兴趣？**
AI / 大模型 → 计算芯片架构、存算一体、EDA  
新能源 / 汽车 → 功率半导体  
通信 / 5G / 卫星 → 射频与毫米波  
生命健康 → 生物电子与脑机接口  
机器人 → 具身智能  

---

## 方向一览

### 器件 / 材料层

<div class="grid cards" markdown>

-   :material-layers-triple:{ .lg .middle } **[先进制程与异构集成](先进制程与异构集成.md)**

    ---

    把更多晶体管塞进更小空间：FinFET、GAA、EUV、Chiplet 封装

    **基础课：** IC工艺原理、先进工艺技术

-   :material-lightning-bolt:{ .lg .middle } **[功率半导体与宽禁带器件](功率半导体与宽禁带器件.md)**

    ---

    控制高压大电流的"电力开关"：SiC、GaN、碳化硅逆变器

    **基础课：** 固体物理、半导体器件原理

-   :material-lightbulb-on:{ .lg .middle } **[硅光子与光电集成](硅光子与光电集成.md)**

    ---

    用光传输和处理信息：光调制器、光探测器、片上波导

    **基础课：** 固体物理、模拟电路

</div>

### 电路层

<div class="grid cards" markdown>

-   :material-radio-tower:{ .lg .middle } **[射频与毫米波](射频与毫米波.md)**

    ---

    设计让无线信号穿越空气的芯片：LNA、PA、PLL、毫米波雷达

    **基础课：** 模拟IC设计、高频电子线路

-   :material-memory:{ .lg .middle } **[存储器与存算一体](存储器与存算一体.md)**

    ---

    打破"存"与"算"分离的冯·诺依曼瓶颈：SRAM、DRAM、PIM

    **基础课：** 半导体器件原理、模拟IC设计

-   :material-brain:{ .lg .middle } **[神经形态计算](神经形态计算.md)**

    ---

    模仿大脑结构与工作方式的芯片：忆阻器、脉冲神经网络

    **基础课：** 半导体器件原理、模拟IC设计

-   :material-heart-pulse:{ .lg .middle } **[生物电子与脑机接口](生物电子与脑机接口.md)**

    ---

    芯片与神经系统的接口：神经信号采集、植入式 ASIC

    **基础课：** 模拟IC设计、ADC/DAC

-   :material-sine-wave:{ .lg .middle } **[模拟与混合信号集成电路](模拟与混合信号集成电路.md)**

    ---

    设计 ADC、DAC、PLL、SerDes 等模数接口芯片

    **基础课：** 模拟IC设计、信号与系统

</div>

### 架构 / 系统层

<div class="grid cards" markdown>

-   :material-cpu-64-bit:{ .lg .middle } **[计算芯片与处理器架构](计算芯片与处理器架构.md)**

    ---

    设计让计算机"想得更快"的核心硬件：GPU、TPU、RISC-V

    **基础课：** 数字IC设计原理、计算机组成原理

-   :material-auto-fix:{ .lg .middle } **[EDA 与设计自动化](EDA与设计自动化.md)**

    ---

    用算法让芯片设计本身自动化：布局布线、ML for EDA

    **基础课：** 数字IC设计、ASIC设计、数据结构

-   :material-shield-lock:{ .lg .middle } **[硬件安全](硬件安全.md)**

    ---

    从硬件层面攻击和防御计算系统：侧信道、硬件木马、PUF

    **基础课：** 数字IC设计、计算机组成原理

-   :material-puzzle:{ .lg .middle } **[可重构计算与FPGA](可重构计算与FPGA.md)**

    ---

    软件的灵活性与专用硬件的性能之间的最优平衡

    **基础课：** 数字IC设计、HDL、HLS

</div>

### 交叉应用层

<div class="grid cards" markdown>

-   :material-robot:{ .lg .middle } **[具身智能](具身智能.md)**

    ---

    让机器在物理世界中像人一样行动：机器人感知、规划、控制

    **基础课：** 机器学习、嵌入式SoC设计

</div>
