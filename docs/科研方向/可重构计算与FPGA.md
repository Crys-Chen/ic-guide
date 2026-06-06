---
hide:
  - navigation
---
在软件的灵活性和专用硬件的性能之间寻找最优平衡——FPGA 既是芯片设计的验证平台，也是数据中心和边缘计算的可编程加速器，而可重构计算研究的是如何让这套机制更高效、更智能。

## 这个方向在研究什么

一支芯片团队设计出一种新的处理器架构，在仿真器里跑了三个月，确信逻辑没错，可要真正验证它在硬件上的表现，按常规就得流片——等上几个月，花掉数百万美元，一旦做错还得全部推倒重来。但他们还有另一条路：把这套设计灌进一块 FPGA，两周之后，新架构就以接近真实芯片的速度在板子上跑了起来。

这块芯片之所以能做到，是因为它出厂时本是一张空白的画布。通用处理器（CPU、GPU）什么代码都能跑，可为了通用，效率注定上不去；专用芯片（ASIC）把电路为某个任务焊死，性能做到极致，代价却是功能再难改动，流片一次又动辄数月、数百万美元。FPGA，也就是现场可编程门阵列，正卡在这两极中间：它是一块出厂后还能反复重画的硬件，重新配置内部的逻辑单元和连线，同一块芯片就能今天跑图像处理、明天跑加密、后天跑神经网络推理。这份"还能改"的自由极其诱人，却从来不是免费的。

<div><svg viewBox="0 0 860 220" xmlns="http://www.w3.org/2000/svg" style="width:100%;max-width:860px;display:block;margin:1.2em auto;">
  <!-- Background panel -->
  <rect x="10" y="10" width="840" height="200" rx="10" fill="#F8FAFC" stroke="#CBD5E1" stroke-width="1.5"/>
  <!-- Triangle vertices (centered around x=430):
       CPU: top-left  (200, 50)
       ASIC: top-right (660, 50)
       FPGA: bottom   (430, 185) -->
  <!-- Triangle edges (dotted) -->
  <line x1="200" y1="55" x2="660" y2="55" stroke="#94A3B8" stroke-width="1.8" stroke-dasharray="8,5"/>
  <line x1="200" y1="55" x2="430" y2="180" stroke="#94A3B8" stroke-width="1.8" stroke-dasharray="8,5"/>
  <line x1="660" y1="55" x2="430" y2="180" stroke="#94A3B8" stroke-width="1.8" stroke-dasharray="8,5"/>
  <!-- CPU corner (blue) -->
  <rect x="100" y="26" width="130" height="56" rx="8" fill="#DBEAFE" stroke="#3B82F6" stroke-width="2"/>
  <text x="165" y="48" text-anchor="middle" font-size="13" font-weight="bold" fill="#1D4ED8" font-family="sans-serif">CPU</text>
  <text x="165" y="64" text-anchor="middle" font-size="10.5" fill="#3B82F6" font-family="sans-serif">最灵活 / 最低效</text>
  <!-- ASIC corner (green) -->
  <rect x="630" y="26" width="130" height="56" rx="8" fill="#DCFCE7" stroke="#16A34A" stroke-width="2"/>
  <text x="695" y="48" text-anchor="middle" font-size="13" font-weight="bold" fill="#166534" font-family="sans-serif">ASIC</text>
  <text x="695" y="64" text-anchor="middle" font-size="10.5" fill="#16A34A" font-family="sans-serif">最高效 / 不可修改</text>
  <!-- FPGA corner (amber) -->
  <rect x="348" y="158" width="164" height="50" rx="8" fill="#FEF3C7" stroke="#D97706" stroke-width="2"/>
  <text x="430" y="178" text-anchor="middle" font-size="13" font-weight="bold" fill="#92400E" font-family="sans-serif">FPGA</text>
  <text x="430" y="196" text-anchor="middle" font-size="10.5" fill="#D97706" font-family="sans-serif">可重构 / 中间地带</text>
  <!-- Center label: FPGA 研究空间 -->
  <text x="430" y="100" text-anchor="middle" font-size="12" fill="#64748B" font-family="sans-serif" font-style="italic">FPGA 研究空间</text>
  <!-- Sub-labels below -->
  <text x="430" y="118" text-anchor="middle" font-size="10.5" fill="#94A3B8" font-family="sans-serif">数据中心加速 · AI推理 · 原型验证</text>
</svg></div>

这份自由的代价，写在 FPGA 的骨子里。要让一块芯片能实现任意逻辑、把任意两点连起来，它就得把大量硅片面积留给"可配置"本身。FPGA 的内部是一张网格，密密麻麻铺着可编程的查找表（LUT，本质是一张能装下任意真值表的小存储器）和可编程的连线。真正干活的逻辑只占一小块，**面积和延迟的一半以上都耗在那些可编程的连线和开关上**——信号从一个逻辑单元走到另一个，要穿过一长串多路选择器和缓冲器。代价有多大？只用查找表去拼，同一个电路在 FPGA 上平均比 ASIC **大三十多倍、慢四倍**；用上后面会讲到的那些专用硬块，差距能收窄到十倍上下，但终究矮一截。可重构计算这个方向要对付的所有难题，根子都在这笔账上，而账的大头，始终是连线。

既然面积的大头花在连线上，怎么把逻辑摆放到位、让信号走最短的路，就成了 FPGA 头一道硬功夫。把设计灌进芯片，要先用 Verilog 描述电路，再经工具综合、布局、布线，生成一份比特流烧进去。其中**布局布线（Place-and-Route，简称 P&R）**最难：哪个逻辑该落在哪个单元、哪根线该走哪条通道，是一个货真价实的 NP 难问题。设计一大，时序就越来越难收敛，一个大型设计的 P&R 跑上几十个小时是常事，跑完还得看随机种子的运气。工业界的 Vivado、Quartus 背后是几十年攒下的启发式算法，学术界则把多伦多大学的开源工具 VTR 当作试验新算法的公共平台。这几年用机器学习替工具做布局决策的 **ML for EDA**，正是想从这块最硬的骨头上啃下时间和方差。

P&R 是替专家省时间，HLS 则想把门槛本身拆掉。写 RTL 是个力气活，得一个时钟周期一个时钟周期地抠；**高层次综合（HLS）**许诺的是另一幅图景：你用 C 或 C++ 把算法写出来，工具自动替你变成电路。听上去像免费的午餐，可惜没那么香。同一段算法，HLS 生成的电路时钟频率常常比手写低 20% 到 50%，面积也更大，因为工具在决定循环怎么展开、流水线怎么插、数据怎么摆进片上存储时，仍要靠工程师手工写一大堆 pragma 去指点，而这些选择的组合空间是指数级的。于是怎么让工具自己做出接近老手的判断，不再靠人堆 pragma，就成了近年最热闹的分支。

代价压下去，FPGA 才能在它真正擅长的地方赢。它从不跟 GPU 比峰值算力，拼的是**低延迟和可改**。最有说服力的例子来自微软：它把 FPGA 插进数据中心的每一台服务器，先用来加速 Bing 搜索的网页排序，后来又接管了网络数据包的处理，让流量绕开 CPU 直接在硬件上转发。边缘侧的 AI 推理是另一个主场，延迟能压到毫秒以下，还能灵活支持 4-bit、2-bit 这类激进量化，于是怎么把神经网络的算子高效铺到 DSP 和 LUT 上，本身就成了一道研究题。

FPGA 一旦进了机架，要同时服务多个租户、应付多变的负载，**部分重构**就成了关键——在不停机的前提下，只把芯片的一块区域换成另一个加速器。这才把"可重构"从一次性的编译能力，变成了运行时随需应变的真本事。

软件再聪明，也只能在既定的硅片上榨，可那一半以上的连线浪费是 fabric 本身定死的。要再往下压，只剩一条路：回头改硬件。FPGA 架构师最核心的问题就一句话——**哪些功能该硬化成专用电路，硬到什么程度，占多少芯片面积？** 这是一场赌博：把一个功能焊进硅里，用得上它的应用立刻更小更快更省电；可一旦某块芯片碰上的应用根本用不到它，这块硅就白占了本该留给通用逻辑的地盘。

FPGA 这三十年的演化，就是一连串赌赢了的硬化。最早的芯片只有查找表和连线，之后才一样样往里加硬块。人们发现几乎每个设计都在做加法，就把进位链硬化进逻辑块；信号处理和 AI 离不开乘累加，于是有了专门的 **DSP 块**；数据总要在片上缓存，**BRAM** 也嵌了进来。到了深度学习时代，DSP 又长出按 int8、int4 拆分的张量模式。连最难啃的连线本身都在被硬化——长线延迟既然不随工艺改善，新一代器件干脆把一张**硬核片上网络（NoC）**做进芯片，比用可编程逻辑搭出来的软 NoC 省 23 倍面积、快 6 倍；单块芯片大到良率扛不住，就用 **interposer** 把好几块裸片拼进一个封装。今天的高端器件（如 AMD Versal）已经是「可编程逻辑 + AI 引擎 + ARM 处理器 + 硬核 NoC」的异构平台，纯查找表只剩其中一小块。

可即便如此，FPGA 还不是可重构的终点。它的灵活来自 **bit 级**的细粒度可配置，每一个查找表、每一段连线都能单独设定，灵活到了极致，连线的代价也大到了极致。再往前一步是**粗粒度**的思路：与其让人摆弄每一根线，不如把可重构的颗粒做大，让一个个完整的运算单元按需连成数据通路，这就是 CGRA 与"**软件定义芯片**"。粒度一粗，配置开销骤降，效率随之向 ASIC 靠拢，代价是不再像 FPGA 那样什么都能配。从 FPGA 到软件定义芯片，争的始终是同一件事：既要流片之后还能改的自由，又要逼近专用芯片的效率，而不必在两者之间二选一。

### 核心研究问题

- **灵活性 vs 效率**：FPGA 卡在 CPU 的可编程性与 ASIC 的极致性能之间，可重构带来的路由开销让面积的 70-80% 都耗在连线上——如何在保留可重构能力的同时把这部分效率损失压到最小？
- **布局布线（Place-and-Route）**：把逻辑摆到哪个单元、信号走哪条线，是一个 NP 难的组合优化问题，大型设计动辄要跑几十小时还受随机种子影响，如何用新启发式或机器学习同时加速时序收敛、降低结果方差？
- **HLS 质量差距**：用 C/C++ 描述算法自动生成 RTL，能大幅缩短开发周期，但生成代码的时钟频率比手写低 20-50%、面积更大——循环展开、流水线插入、存储划分的 pragma 设计空间是指数级的，如何让工具（而非人工堆 pragma）自动逼近手写质量？
- **神经网络映射**：把量化后（4-bit 甚至 2-bit）的 DNN 各层算子高效铺到 FPGA 的 DSP/LUT/BRAM 上，最大化数据局部性、最小化片外内存访问，是低延迟边缘推理能否打过 GPU 的关键。
- **数据中心与运行时可重构**：从 Catapult、Azure SmartNIC 到 AWS F1，FPGA 进了机架就要面对多租户与动态负载——部分重构（Partial Reconfiguration）如何在运行时调度多个加速器，把"可重构"从编译期能力变成真正的运行时灵活性？
- **FPGA 该长什么样（硬化与异构）**：哪些功能该硬化成专用电路（DSP、BRAM、高速 IO，如今还有硬核 NoC、AI 引擎、ARM 子系统）、硬到什么程度、占多大面积？硬化省了效率却赌应用用得上，用不上就是白占地盘——加之长线延迟不随工艺改善，又逼着把片上网络硬化、用 interposer 拼多裸片。这套异构资源怎么切分、怎么协同？
- **粗粒度可重构（CGRA / 软件定义芯片）**：FPGA 的 bit 级灵活到极致，连线代价也大到极致；把可重构的颗粒做粗、让完整运算单元按需连成数据通路，配置开销骤降、效率向 ASIC 靠拢，代价是不再什么都能配。颗粒该粗到哪一档、编译器怎么把算法映射上去，是国内（软件定义芯片）主攻的方向之一。
- **可信与可靠**：比特流是芯片的全部知识产权，不加密就能被原样复制——怎样做比特流加密与防篡改？数据中心里多个租户共用一块 FPGA，又如何隔离、防侧信道？航天等场景还要抗辐射加固。

### 知识路径

```mermaid
graph LR
    A["数字逻辑基础\nLUT·触发器·时序分析"] --> B["HDL / Verilog\n硬件描述与仿真"]
    B --> C["FPGA 开发工具\nVivado·Quartus·比特流"]
    C --> D["数字IC设计原理\n时序收敛·功耗优化"]
    D --> E["FPGA 加速研究\n布局布线·神经网络映射"]

    F["算法 / C·C++\n数据结构·组合优化"] --> G["高层次综合 HLS\nC转RTL·Pragma·流水线"]
    G --> E
    F --> H["布局布线算法\nNP难优化·ML for EDA"]
    H --> E
    I["量化与DNN映射\nDSP/LUT铺算子"] --> E

    classDef core fill:#FFFBEB,stroke:#B7791F,stroke-width:2px
    classDef supp fill:#EBF4FF,stroke:#2C5282,stroke-width:1.5px
    class A,B,C,D,E core
    class F,G,H,I supp
```

图中节点对应以下知识板块（按需选修）：

- [电路 · 数字方向（数字逻辑·数字IC设计·FPGA）](../学习地图/电路/数字/index.md)（节点 A·C·D）
- [硬件描述语言 HDL（Verilog·HLS）](../学习地图/电路/硬件描述语言(HDL)/index.md)（节点 B·G）
- [算法编程 · 数据结构与算法（组合优化）](../学习地图/算法编程/数据结构与算法/index.md)（节点 F·H，布局布线的优化底座）
- [系统架构 · 编译原理](../学习地图/系统架构/编译原理/index.md)（HLS / 比特流生成的编译视角）
- [人工智能](../学习地图/人工智能/index.md)（节点 I：DNN 量化与 FPGA 映射）

## 这个方向适合谁

这个方向最适合那种"写完就想下板"的人——比起停在仿真波形里反复看时序图，你更想把比特流灌进真实硬件、按真实时钟跑端到端系统。FPGA 的魅力正在于此：一块出厂后能反复重配的空白画布，一个架构改动几小时就能在硬件上看到结果，研究成本远低于动辄数月、数百万美元的 ASIC 流片。如果你在数字电路或计组课上做过 FPGA 实验，跑通之后还忍不住想"再抠一抠时序"，那这个方向几乎是为你量身定制的。

本科背景上，数字电路、Verilog/VHDL 是硬性门槛，因为无论做加速器还是改 CAD 流程，你都得读得懂、写得出 RTL。在此之上，方向其实分叉成几条很不一样的路：偏软的人可以从 C/C++ 直接切进 HLS，研究怎么让工具自动逼近手写 RTL 的质量，这一支和编译、机器学习走得很近；喜欢算法的人会爱上布局布线——P&R 是一个工程约束极其明确、又货真价实的 NP 难组合优化问题，组合优化、强化学习、ML for EDA 在这里都有用武之地；而想做系统的人则可以钻数据中心 FPGA 与神经网络映射，把量化后的 DNN 算子高效铺到 DSP/LUT 上。换句话说，这个方向能同时容纳硬件、算法和系统三种口味的人。

发表节奏上，这个方向的现实相当友好。它有自己成建制的社区——FPGA、FCCM、FPL、FPT 是大本营，DAC/ICCAD 也常收 FPGA CAD 与 HLS 的工作。相比体系结构顶会动辄一年磨一篇的节奏，FPGA 系顶会的周期更紧凑，加上有 VTR、Vitis HLS、AWS F1 这些成熟的开源/云上平台兜底，一个想法往往能在一年内走完从原型到投稿的完整循环，对刚入门、需要正反馈的同学非常重要。

还有一点国内学生该认真考虑：FPGA 是少数学术研究与本土产业紧密咬合的方向。复旦微电子、安路科技、高云半导体都在做自主 FPGA 芯片，清华、复旦、上交、浙大的课题组也常与产业直接合作。这意味着你的研究不只是论文，往往有相对清晰的落地出口——无论是想读博深耕，还是想毕业进工业界做芯片或编译工具链，这个方向都给你留了门。

## 学术界

### 课题组

**境内**

<div class="grid cards prof-collapse" markdown>

-   **[尹首一](https://www.sic.tsinghua.edu.cn/info/1040/1567.htm) & [魏少军](https://www.sic.tsinghua.edu.cn/en/info/1083/1444.htm)** <span class="badge-tsinghua">清华</span>

    软件定义芯片 · 可重构计算架构 · 神经网络加速器（Thinker）· VLSI 设计方法学

-   **[刘雷波](https://www.sic.tsinghua.edu.cn/info/1014/1807.htm)** <span class="badge-tsinghua">清华</span>

    软件定义芯片架构 · 密码处理器 · 可重构计算系统

-   **[梁云（Eric Liang）](https://ericlyun.me/)** <span class="badge-pku">北大</span>

    FPGA HLS 编译优化 · 硬件软件协同设计 · 神经网络加速

-   **[王伶俐](https://sme.fudan.edu.cn/60/3c/c31133a352316/page.htm)** <span class="badge-fudan">复旦</span>

    FPGA 结构研究 · 抗辐射 FPGA · 安全可编程计算

-   **[王堃](https://sme.fudan.edu.cn/60/2f/c31155a352303/page.htm)** <span class="badge-fudan">复旦</span>

    FPGA 编译器设计 · 电路 EDA · 硬件-软件协同设计

-   **[曾璇](https://asic-skl.fudan.edu.cn/d2/0c/c29516a315916/page.htm)** <span class="badge-fudan">复旦</span> <span class="prof-w"></span>

    模拟电路 EDA · ML 辅助 IC 设计自动化 · FPGA 流程

-   **[戴国浩](https://nicsefc.ee.tsinghua.edu.cn/people/GuohaoDai)** <span class="badge-other">交大</span>

    稀疏计算软硬件协同 · LLM 推理加速器（FlightLLM） · FPGA/GPU 异构

-   **[张宸](https://chenzhangsjtu.github.io/)** <span class="badge-other">交大</span>

    FPGA 深度学习加速器 · AI 处理器架构 · FPGA 可重构计算名人堂

-   **[赵杰茹](https://zjru.github.io/)** <span class="badge-other">交大</span> <span class="prof-w"></span>

    高层次综合 HLS（COMBA） · 可重构计算与 EDA · 软硬件协同 AI 加速

-   **[王则可（Zeke Wang）](https://wangzeke.github.io/)** <span class="badge-other">浙大</span>

    FPGA 加速器 · FPGA SmartNIC（FpgaNIC） · 超异构计算平台

-   **[卢丽强（Liqiang Lu）](https://person.zju.edu.cn/liqianglu)** <span class="badge-other">浙大</span>

    FPGA 稀疏神经网络加速器（SpWA/Speedy） · 张量加速与软硬件协同 · 体系结构与 EDA

-   **[周学海](https://cs.ustc.edu.cn/2020/0827/c23235a460092/page.htm)** <span class="badge-other">中科大</span>

    可重构系统 · 面向特定应用的硬件加速 · 异构多核体系结构

-   **[王超](https://faculty.ustc.edu.cn/cswang/zh_CN/index.htm)** <span class="badge-other">中科大</span>

    FPGA 可重构计算 · 智能处理器 · 深度学习加速系统

-   **[李丽](https://ese.nju.edu.cn/74/10/c22629a357392/page.psp)** <span class="badge-other">南大</span> <span class="prof-w"></span>

    可重构计算 · 多/众核处理芯片体系结构 · 三维片上网络（3D NoC）

-   **[娄鑫](https://sist.shanghaitech.edu.cn/louxin/main.htm)** <span class="badge-other">上科大</span>

    数字 VLSI 设计 · 可重构滤波器与 DSP · 三维视觉/渲染芯片

</div>
<button class="prof-show-all">显示全部 ↓</button>

**境外**

<div class="grid cards prof-collapse" markdown>

-   **[Wei Zhang（张薇）](https://ece.hkust.edu.hk/eeweiz)** <span class="badge-hk">港科大</span> <span class="prof-w"></span>

    FPGA 敏捷设计 · 硬件-软件协同设计 · DNN FPGA 加速

-   **[Hayden Kwok-Hay So（蘇國曦）](https://www.eee.hku.hk/~hso/)** <span class="badge-hk">港大</span>

    异构可重构计算 · FPGA Overlay · 事件驱动视觉处理

-   **[Vaughn Betz](https://www.eecg.utoronto.ca/~vaughn/)** <span class="badge-intl">U Toronto</span>

    FPGA 架构与 CAD · VPR/VTR 开源工具 · 布局布线算法

-   **[Jason Anderson](https://www.ece.utoronto.ca/people/anderson-j-h/)** <span class="badge-intl">U Toronto</span>

    FPGA 架构设计 · HLS · FPGA 物理设计自动化

-   **[Deming Chen（陈德铭）](https://dchen.ece.illinois.edu/)** <span class="badge-intl">UIUC</span>

    FPGA HLS · ML for EDA · 神经网络 FPGA 加速

-   **[Jason Cong（丛京生）](https://vast.cs.ucla.edu/people/faculty/jason-cong)** <span class="badge-intl">UCLA</span>

    FPGA 设计自动化 · HLS · 领域专用计算

-   **[Zhiru Zhang（张志汝）](https://zhang.ece.cornell.edu/)** <span class="badge-intl">Cornell</span>

    高层次综合 HLS · FPGA 加速器自动生成 · 硬件-算法协同优化

-   **[Mohamed Abdelfattah](https://www.abdelfattah-lab.com/)** <span class="badge-intl">Cornell</span>

    FPGA 架构与 LLM 加速 · 神经网络 FPGA 映射 · HLS 自动化

-   **[Cong Hao（郝聪）](https://haocong.ece.gatech.edu/)** <span class="badge-intl">Georgia Tech</span> <span class="prof-w"></span>

    FPGA 神经网络加速 · ML for EDA · 高效 DNN 硬件映射

-   **[Peipei Zhou（周佩佩）](https://peipeizhou-eecs.github.io/)** <span class="badge-intl">Brown</span> <span class="prof-w"></span>

    定制化体系结构 · HLS 与 FPGA · AMD Versal ACAP 异构加速

-   **[Lana Josipović](https://dynamo.ethz.ch/)** <span class="badge-intl">ETH Zürich</span> <span class="prof-w"></span>

    动态调度 HLS（Dynamatic） · 数据流电路综合 · 编译器-硬件协同

-   **[Andre DeHon](https://www.seas.upenn.edu/faculty-directory/andre-dehon/)** <span class="badge-intl">U Penn</span>

    空间计算与可重构架构 · FPGA 互连 · 硬件安全

</div>
<button class="prof-show-all">显示全部 ↓</button>

### 学术会议与期刊

<div class="dm-wrap chip-block">
  <div class="dm-row dm-device"><span class="dm-lbl">会议</span><span class="dm-chips">
    <span class="dm-chip dm-chip--static" title="ACM/SIGDA 现场可编程门阵列国际研讨会">FPGA</span>
    <span class="dm-chip dm-chip--static" title="IEEE 现场可编程定制计算机国际研讨会">FCCM</span>
    <span class="dm-chip dm-chip--static" title="现场可编程逻辑与应用国际会议">FPL</span>
    <span class="dm-chip dm-chip--static" title="设计自动化大会">DAC</span>
    <span class="dm-chip dm-chip--static" title="国际计算机辅助设计大会">ICCAD</span>
    <span class="dm-chip dm-chip--static" title="IEEE/ACM 国际微体系结构研讨会">MICRO</span>
    <span class="dm-chip dm-chip--static" title="编程语言和操作系统的体系结构支持国际会议">ASPLOS</span>
  </span></div>
  <div class="dm-row dm-arch"><span class="dm-lbl">期刊</span><span class="dm-chips">
    <span class="dm-chip dm-chip--static" title="计算机辅助设计汇刊">IEEE TCAD</span>
    <span class="dm-chip dm-chip--static" title="超大规模集成系统汇刊">IEEE TVLSI</span>
    <span class="dm-chip dm-chip--static" title="可重构技术与系统汇刊">ACM TRETS</span>
    <span class="dm-chip dm-chip--static" title="计算机汇刊">IEEE TC</span>
  </span></div>
</div>

## 毕业去向

### 企业

<div class="dm-wrap chip-block">
  <div class="dm-row dm-device"><span class="dm-lbl">国内</span><span class="dm-chips">
    <span class="dm-chip dm-chip--stock"><a href="https://www.fmsh.com/">复旦微电子（FMSH）</a><span class="sq" data-stock="sh:688385"></span></span>
    <span class="dm-chip dm-chip--stock"><a href="https://www.anlogic.com/">安路科技 Anlogic</a><span class="sq" data-stock="sh:688107"></span></span>
    <a class="dm-chip" href="https://www.gowinsemi.com/">高云半导体 Gowin</a>
    <a class="dm-chip" href="https://hercules-micro.com/">京微齐力 Hercules</a>
    <a class="dm-chip" href="https://www.pangomicro.com/">紫光同创 Pango</a>
  </span></div>
  <div class="dm-row dm-arch"><span class="dm-lbl">国外</span><span class="dm-chips">
    <span class="dm-chip dm-chip--stock"><a href="https://www.amd.com/">AMD（原 Xilinx）</a><span class="sq" data-stock="us:AMD"></span></span>
    <a class="dm-chip" href="https://www.altera.com/">Altera</a>
    <span class="dm-chip dm-chip--stock"><a href="https://www.latticesemi.com/">Lattice Semiconductor</a><span class="sq" data-stock="us:LSCC"></span></span>
    <a class="dm-chip" href="https://www.achronix.com/">Achronix</a>
    <span class="dm-chip dm-chip--stock"><a href="https://www.quicklogic.com/">QuickLogic</a><span class="sq" data-stock="us:QUIK"></span></span>
    <span class="dm-chip dm-chip--stock"><a href="https://www.microsoft.com/">Microsoft</a><span class="sq" data-stock="us:MSFT"></span></span>
    <span class="dm-chip dm-chip--stock"><a href="https://aws.amazon.com/ec2/instance-types/f1/">AWS（Amazon）</a><span class="sq" data-stock="us:AMZN"></span></span>
  </span></div>
</div>

### 科研院所

<div class="dm-wrap chip-block">
  <div class="dm-row dm-device"><span class="dm-lbl">国内</span><span class="dm-chips">
    <a class="dm-chip" href="http://www.ict.ac.cn/" title="可重构计算与领域专用加速器">中科院计算所</a>
    <a class="dm-chip" href="https://www.zhejianglab.org/" title="智能计算与可重构异构加速平台">之江实验室</a>
    <a class="dm-chip" href="https://www.pcl.ac.cn/" title="大规模算力与可重构加速基础设施">鹏城实验室</a>
  </span></div>
  <div class="dm-row dm-arch"><span class="dm-lbl">国外</span><span class="dm-chips">
    <a class="dm-chip" href="https://verilogtorouting.org/" title="开源 FPGA 架构与 CAD 研究平台（VPR 布局布线）">Verilog-to-Routing（VTR，多伦多大学主导）</a>
    <a class="dm-chip" href="https://www.microsoft.com/en-us/research/project/project-catapult/" title="数据中心 FPGA 加速架构">Microsoft Research（Project Catapult）</a>
    <a class="dm-chip" href="https://vast.cs.ucla.edu/" title="HLS 与 FPGA 设计自动化">UCLA VAST 实验室</a>
  </span></div>
</div>
