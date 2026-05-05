# 科研方向指引

这个板块写给大一大二的同学。

你还不需要现在就做决定，但早一点知道"这个领域在研究什么、需要什么基础"，能让你在选课、读论文、找实验室时少走很多弯路。

每个词条不是课程表，而是一张地图——告诉你这个方向在解决什么真实问题、哪些人在做、你现在应该学什么来靠近它。

---

## 十四个方向

按照知识依赖的层次，这些方向大致分布在四个层面：

<div class="dm-wrap">
<div class="dm-row dm-cross"><span class="dm-lbl">🌐 交叉应用层</span><span class="dm-chips"><a class="dm-chip" href="具身智能.md">具身智能</a><a class="dm-chip" href="量子计算与量子芯片.md">量子计算与量子芯片</a></span></div>
<div class="dm-conn dm-dotted">⋯ ⋯ &nbsp;跨领域应用&nbsp; ⋯ ⋯</div>
<div class="dm-row dm-arch"><span class="dm-lbl">⚙️ 架构/系统层</span><span class="dm-chips"><a class="dm-chip" href="计算芯片与处理器架构.md">计算芯片与处理器架构</a><a class="dm-chip" href="EDA与设计自动化.md">EDA与设计自动化</a><a class="dm-chip" href="硬件安全.md">硬件安全</a><a class="dm-chip" href="可重构计算与FPGA.md">可重构计算与FPGA</a></span></div>
<div class="dm-conn">↑</div>
<div class="dm-row dm-circuit"><span class="dm-lbl">⚡ 电路层</span><span class="dm-chips"><a class="dm-chip" href="射频与毫米波.md">射频与毫米波</a><a class="dm-chip" href="存储器与存算一体.md">存储器与存算一体</a><a class="dm-chip" href="神经形态计算.md">神经形态计算</a><a class="dm-chip" href="生物电子与脑机接口.md">生物电子与脑机接口</a><a class="dm-chip" href="模拟与混合信号集成电路.md">模拟与混合信号IC</a></span></div>
<div class="dm-conn">↑</div>
<div class="dm-row dm-device"><span class="dm-lbl">🧱 器件/材料层</span><span class="dm-chips"><a class="dm-chip" href="先进制程与异构集成.md">先进制程与异构集成</a><a class="dm-chip" href="功率半导体与宽禁带器件.md">功率半导体与宽禁带器件</a><a class="dm-chip" href="硅光子与光电集成.md">硅光子与光电集成</a></span></div>
</div>

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


-   :material-lightning-bolt:{ .lg .middle } **[功率半导体与宽禁带器件](功率半导体与宽禁带器件.md)**

    ---

    控制高压大电流的"电力开关"：SiC、GaN、碳化硅逆变器


-   :material-lightbulb-on:{ .lg .middle } **[硅光子与光电集成](硅光子与光电集成.md)**

    ---

    用光传输和处理信息：光调制器、光探测器、片上波导


</div>

### 电路层

<div class="grid cards" markdown>

-   :material-radio-tower:{ .lg .middle } **[射频与毫米波](射频与毫米波.md)**

    ---

    设计让无线信号穿越空气的芯片：LNA、PA、PLL、毫米波雷达


-   :material-memory:{ .lg .middle } **[存储器与存算一体](存储器与存算一体.md)**

    ---

    打破"存"与"算"分离的冯·诺依曼瓶颈：SRAM、DRAM、PIM


-   :material-brain:{ .lg .middle } **[神经形态计算](神经形态计算.md)**

    ---

    模仿大脑结构与工作方式的芯片：忆阻器、脉冲神经网络


-   :material-heart-pulse:{ .lg .middle } **[生物电子与脑机接口](生物电子与脑机接口.md)**

    ---

    芯片与神经系统的接口：神经信号采集、植入式 ASIC


-   :material-sine-wave:{ .lg .middle } **[模拟与混合信号集成电路](模拟与混合信号集成电路.md)**

    ---

    设计 ADC、DAC、PLL、SerDes 等模数接口芯片


</div>

### 架构 / 系统层

<div class="grid cards" markdown>

-   :material-cpu-64-bit:{ .lg .middle } **[计算芯片与处理器架构](计算芯片与处理器架构.md)**

    ---

    设计让计算机"想得更快"的核心硬件：GPU、TPU、RISC-V


-   :material-auto-fix:{ .lg .middle } **[EDA 与设计自动化](EDA与设计自动化.md)**

    ---

    用算法让芯片设计本身自动化：布局布线、ML for EDA


-   :material-shield-lock:{ .lg .middle } **[硬件安全](硬件安全.md)**

    ---

    从硬件层面攻击和防御计算系统：侧信道、硬件木马、PUF


-   :material-puzzle:{ .lg .middle } **[可重构计算与FPGA](可重构计算与FPGA.md)**

    ---

    软件的灵活性与专用硬件的性能之间的最优平衡


</div>

### 交叉应用层

<div class="grid cards" markdown>

-   :material-robot:{ .lg .middle } **[具身智能](具身智能.md)**

    ---

    让机器在物理世界中像人一样行动：机器人感知、规划、控制


-   :material-atom:{ .lg .middle } **[量子计算与量子芯片](量子计算与量子芯片.md)**

    ---

    用量子叠加与纠缠超越经典算力极限：超导量子比特、量子纠错、低温控制电路


</div>
