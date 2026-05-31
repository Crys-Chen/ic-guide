---
hide:
  - navigation
---
用算法和软件让芯片设计本身自动化——从逻辑综合、布局布线到用机器学习和大语言模型辅助设计决策。

## 这个方向在研究什么

芯片设计的规模大到一个令人难以直觉化的程度。一块 Apple M4 芯片大约有 280 亿颗晶体管，排列在约 300 平方毫米的硅片上。工程师写 Verilog 代码时描述的是逻辑功能——"这个模块做加法"——但要把这个逻辑意图变成可以送进晶圆厂的物理版图，中间需要经过逻辑综合、布局规划、详细布局、时钟树综合、详细布线、寄生参数提取、静态时序分析等数十个步骤，每一步都在处理亿级节点的图或者复杂的几何优化问题。这整套流程就是 EDA（Electronic Design Automation）要解决的问题，没有它，现代芯片设计根本无从谈起。

EDA 工具本质上是在求解一系列 NP 难甚至更难的优化问题。以布局为例：把几亿个逻辑单元放在芯片的物理平面上，目标是让关键路径的连线尽量短（影响时序）、拥塞尽量低（影响布线可行性）、电源网络压降尽量均匀——这些目标相互竞争，而搜索空间是天文数字级别的。传统方法用模拟退火、力导向等启发式算法在合理时间内找到"足够好"的解，但随着设计规模扩大和工艺要求趋严，这些算法越来越捉襟见肘。时序收敛（timing closure）尤其痛苦：工具布完线后发现某条路径违反了时序约束，需要局部重新布局，改完又可能影响其他路径，工程师有时要在布局-时序-布局的循环里反复迭代数周。

<div><svg viewBox="0 0 860 220" xmlns="http://www.w3.org/2000/svg" style="width:100%;max-width:860px;display:block;margin:1.2em auto;">
  <!-- Background panel -->
  <rect x="6" y="10" width="848" height="200" rx="10" fill="#F8FAFC" stroke="#CBD5E1" stroke-width="1.5"/>
  <!-- Flow boxes (blue) -->
  <!-- Box 1: RTL代码 -->
  <rect x="20" y="50" width="120" height="52" rx="7" fill="#DBEAFE" stroke="#3B82F6" stroke-width="1.8"/>
  <text x="80" y="72" text-anchor="middle" font-size="12" font-weight="bold" fill="#1D4ED8" font-family="sans-serif">RTL 代码</text>
  <text x="80" y="90" text-anchor="middle" font-size="10" fill="#3B82F6" font-family="sans-serif">Verilog / VHDL</text>
  <!-- Arrow 1→2 -->
  <line x1="140" y1="76" x2="164" y2="76" stroke="#64748B" stroke-width="2"/>
  <polygon points="164,72 176,76 164,80" fill="#64748B"/>
  <!-- Box 2: 逻辑综合 -->
  <rect x="176" y="50" width="120" height="52" rx="7" fill="#DBEAFE" stroke="#3B82F6" stroke-width="1.8"/>
  <text x="236" y="72" text-anchor="middle" font-size="12" font-weight="bold" fill="#1D4ED8" font-family="sans-serif">逻辑综合</text>
  <text x="236" y="90" text-anchor="middle" font-size="10" fill="#3B82F6" font-family="sans-serif">门级网表</text>
  <!-- Arrow 2→3 -->
  <line x1="296" y1="76" x2="320" y2="76" stroke="#64748B" stroke-width="2"/>
  <polygon points="320,72 332,76 320,80" fill="#64748B"/>
  <!-- Box 3: 布局布线 -->
  <rect x="332" y="50" width="120" height="52" rx="7" fill="#DBEAFE" stroke="#3B82F6" stroke-width="1.8"/>
  <text x="392" y="72" text-anchor="middle" font-size="12" font-weight="bold" fill="#1D4ED8" font-family="sans-serif">布局布线</text>
  <text x="392" y="90" text-anchor="middle" font-size="10" fill="#3B82F6" font-family="sans-serif">P&amp;R</text>
  <!-- Arrow 3→4 -->
  <line x1="452" y1="76" x2="476" y2="76" stroke="#64748B" stroke-width="2"/>
  <polygon points="476,72 488,76 476,80" fill="#64748B"/>
  <!-- Box 4: 时序验证 -->
  <rect x="488" y="50" width="120" height="52" rx="7" fill="#DBEAFE" stroke="#3B82F6" stroke-width="1.8"/>
  <text x="548" y="72" text-anchor="middle" font-size="12" font-weight="bold" fill="#1D4ED8" font-family="sans-serif">时序验证</text>
  <text x="548" y="90" text-anchor="middle" font-size="10" fill="#3B82F6" font-family="sans-serif">STA</text>
  <!-- Arrow 4→5 -->
  <line x1="608" y1="76" x2="632" y2="76" stroke="#64748B" stroke-width="2"/>
  <polygon points="632,72 644,76 632,80" fill="#64748B"/>
  <!-- Box 5: GDSII -->
  <rect x="644" y="50" width="120" height="52" rx="7" fill="#DBEAFE" stroke="#3B82F6" stroke-width="1.8"/>
  <text x="704" y="72" text-anchor="middle" font-size="12" font-weight="bold" fill="#1D4ED8" font-family="sans-serif">GDSII 版图</text>
  <text x="704" y="90" text-anchor="middle" font-size="10" fill="#3B82F6" font-family="sans-serif">送厂流片</text>
  <!-- Problem annotation under Box 3 -->
  <rect x="308" y="114" width="168" height="38" rx="5" fill="#FEF9C3" stroke="#D97706" stroke-width="1.2"/>
  <text x="392" y="129" text-anchor="middle" font-size="9.5" fill="#92400E" font-family="sans-serif">NP-难 | 数十亿单元</text>
  <text x="392" y="145" text-anchor="middle" font-size="9.5" fill="#92400E" font-family="sans-serif">可能迭代数周</text>
  <line x1="392" y1="102" x2="392" y2="114" stroke="#D97706" stroke-width="1.2" stroke-dasharray="4,3"/>
  <!-- AI/ML acceleration box (amber) -->
  <rect x="174" y="158" width="132" height="40" rx="6" fill="#FEF3C7" stroke="#D97706" stroke-width="1.8"/>
  <text x="240" y="175" text-anchor="middle" font-size="11" font-weight="bold" fill="#92400E" font-family="sans-serif">ML 模型</text>
  <text x="240" y="192" text-anchor="middle" font-size="9.5" fill="#D97706" font-family="sans-serif">AI / ML 加速</text>
  <!-- Arrow from ML box to Box 2 -->
  <line x1="236" y1="158" x2="236" y2="108" stroke="#D97706" stroke-width="1.5" stroke-dasharray="5,3"/>
  <polygon points="232,108 236,96 240,108" fill="#D97706"/>
  <!-- Arrow from ML box to Box 3 -->
  <line x1="280" y1="178" x2="360" y2="110" stroke="#D97706" stroke-width="1.5" stroke-dasharray="5,3"/>
  <polygon points="356,103 364,112 352,113" fill="#D97706"/>
</svg></div>

机器学习在这个背景下进入 EDA 并非偶然。2021 年 Google DeepMind 在 *Nature* 发表 AlphaChip，用强化学习来做芯片布局——把各大功能模块的摆放问题建模成游戏，智能体通过反复试错学习"把什么放在哪里会让整体指标更好"。在 TPU v5 的实际设计上，AlphaChip 在几小时内产出的布局方案优于人类工程师数周的手工优化结果。此后，图神经网络被用来预测布线拥塞和时序违例发生的位置，使工程师能在设计早期就调整，而不是等到最后一步才发现返工。大语言模型则被用来辅助写 RTL 代码和设计验证的 testbench，NVIDIA 专为芯片设计任务微调了 ChipNemo，RTLCoder、VerilogCoder 等开源模型把自然语言需求转成可综合 Verilog；HKUST 谢知遥团队是学术界在 LLM for EDA 上最活跃的组之一，斩获 ASPLOS 2026 最佳论文。开源实验平台方面，DARPA 资助的 OpenROAD 提供完整的数字后端流程，北大林亦波团队发布的 CircuitNet 是国内首个面向 AI for EDA 的大规模开源数据集，是入门这个方向最直接的实验基础。

模拟 EDA 是这个领域里至今最难啃的骨头。数字电路的设计质量可以用"满足时序约束"这一个核心标准来量化，但模拟电路的指标是一张相互牵制的清单——增益、带宽、噪声系数、线性度、输入输出摆幅、功耗、稳定性，没有哪个可以单独优化，改善一个往往以恶化另几个为代价。更麻烦的是，模拟电路极为依赖工艺仿真模型（SPICE model）的准确性，而这些模型在高频下误差显著，仿真结果和流片结果之间的差距让算法很难从历史数据里"学到"有价值的规律。这也解释了为什么数字 EDA 相对成熟、模拟 EDA 研究进展缓慢。

从国家战略的角度看，EDA 是芯片产业链里最典型的卡脖子环节：Synopsys、Cadence、Siemens EDA 三家美国公司占据全球市场 80% 以上的份额，2019 年对华为的禁令直接暴露了这一脆弱点，海思几乎在一夜之间失去了推进先进制程设计的工具。国内华大九天在模拟 EDA 工具上已有量产能力；对于想做 AI for EDA 研究的学者，OpenROAD 和 CircuitNet 是目前最直接的开源实验基础。

## 适合什么样的人

EDA 是一个少见的方向——它的核心问题是**算法**问题，但领域知识来自**芯片设计**，产业影响极为直接。如果你对组合优化、图算法、机器学习有兴趣，同时又希望研究成果能真正被工业界用到，这个方向非常合适。

CS 背景的同学进入这个方向有天然的算法优势。布局、路由、时序优化的本质是图优化和约束求解问题，强化学习和图神经网络在这里不是锦上添花，而是解决实际工程痛点的工具。你不需要成为一个经验丰富的芯片设计师，但需要理解设计流程的每一步在做什么——这个门槛通过跑一遍 OpenROAD 或 Cadence 流程就能迈过。

EE/微电子背景的同学则有另一个优势：你更容易理解为什么某个优化目标重要、为什么时序收敛这么难。这种领域直觉在构建有意义的研究问题时很有价值，纯算法背景的人往往要花很长时间才能获得同样的感受。

从影响力角度来看，EDA 是为数不多的"做出来就能影响整个行业"的方向之一。一个更好的布局算法不只是发一篇论文，它可能真的会被 Synopsys 或国内的华大九天集成进产品，影响未来几年所有用这套工具的芯片设计。如果你对这种"基础设施级"的影响感兴趣，EDA 会让你觉得研究有重量。

## 核心研究问题

- **可扩展性**：2nm 以下工艺下，布局布线的搜索空间指数级爆炸，现有算法如何扩展？
- **ML for EDA**：如何用强化学习、图神经网络替代或加速传统启发式算法？
- **LLM for Chip Design**：大语言模型能否直接生成可综合的 RTL 代码，甚至理解设计意图？
- **模拟 EDA**：模拟电路的自动化设计远比数字难，如何建立可靠的模拟综合流程？

## 代表性机构

> 这个方向毕业后能去的代表性企业与科研院所（国内外）。上市公司附实时股价链接，便于了解产业景气度。

### 企业

**国内**

- [华大九天 Empyrean](https://www.empyrean.com.cn/) · [实时股价](https://quote.eastmoney.com/sz301269.html)——国内 EDA 龙头，模拟全流程/数字后端
- [概伦电子 Primarius](https://www.primarius-tech.com/) · [实时股价](https://quote.eastmoney.com/sh688206.html)——器件建模与制造类 EDA，国内首家 EDA 上市公司
- [广立微 Semitronix](https://www.semitronix.com/) · [实时股价](https://quote.eastmoney.com/sz301095.html)——测试芯片与良率分析 EDA
- [芯华章 X-EPIC](https://www.x-epic.com/)（未上市）——数字验证全流程（仿真/形式验证/原型）
- [芯和半导体 Xpeedic](https://www.xpeedic.com/)（未上市）——Chiplet/先进封装与 SI/PI/电磁多物理仿真 EDA
- [华为海思 HiSilicon](https://www.hisilicon.com/cn)（华为未上市）——自研芯片设计方法学与内部 EDA 流程

**国外**

- [Synopsys](https://www.synopsys.com/) · [实时股价](https://finance.yahoo.com/quote/SNPS)——EDA 全流程龙头
- [Cadence](https://www.cadence.com/) · [实时股价](https://finance.yahoo.com/quote/CDNS)——EDA 全流程龙头，与 Synopsys 形成双寡头
- [Siemens EDA（原 Mentor）](https://www.siemens.com/en-us/company/electronic-design-automation/) · [实时股价](https://finance.yahoo.com/quote/SIEGY)——西门子 EDA 部门，物理验证/仿真
- [NVIDIA](https://www.nvidia.com/)（ChipNemo 等 LLM for EDA 研究） · [实时股价](https://finance.yahoo.com/quote/NVDA)

### 科研院所

**国内**

- [中科院微电子所 EDA 中心](https://www.ime.ac.cn/eda/) — 设计方法学与国产 EDA 工具研发
- [之江实验室](https://www.zhejianglab.org/) — 智能计算与 AI for EDA
- [鹏城实验室](https://www.pcl.ac.cn/) — 大规模算力支撑的 EDA 算法加速

**国外**

- [OpenROAD（UCSD VLSI CAD 实验室主导）](https://theopenroadproject.org/) — 开源 RTL-to-GDS 数字后端流程，AI for EDA 标准实验平台
- [imec](https://www.imec-int.com/en) — DTCO/工艺-设计协同与先进节点设计方法学
- [Google DeepMind](https://deepmind.google/)（AlphaChip RL 布局） — 强化学习芯片布局

## 顶会顶刊

**顶会**：DAC · ICCAD · DATE · ASP-DAC · ISPD

**顶刊**：IEEE TCAD（计算机辅助设计，本领域旗舰）· IEEE TVLSI（超大规模集成系统）· ACM TODAES（设计自动化）· IEEE TC（计算机汇刊）

## 知识路径

```mermaid
graph LR
    A["数字逻辑基础"] --> B["数字IC设计原理"]
    B --> C["ASIC 设计流程\n综合·布局·布线"]
    C --> D["EDA 算法研究"]

    E["数据结构与算法"] --> D
    F["机器学习基础"] --> G["ML for EDA"]
    D --> G

    classDef core fill:#FFFBEB,stroke:#B7791F,stroke-width:2px
    classDef supp fill:#EBF4FF,stroke:#2C5282,stroke-width:1.5px
    class A,B,C,D core
    class E,F,G supp
```

图中节点对应以下知识板块（按需选修）：

- [系统架构（体系结构·编译原理）](../学习地图/系统架构/index.md)
- [电路（数字方向）](../学习地图/电路/index.md)
- [算法编程（数据结构·算法）](../学习地图/算法编程/index.md)
- [人工智能（AI系统）](../学习地图/人工智能/index.md)（EDA AI方向）

## 入门三步走

**典型研究长什么样**

一篇 EDA 方向的 AI for EDA 论文通常是这样的：作者选定流程中一个具体步骤（比如宏单元布局或布线拥塞预测），分析当前工具的局限（时间太长、结果质量不稳定），提出用强化学习或图神经网络替代或辅助该步骤的方法，在 OpenROAD 平台上实现并在多个真实设计（如 RISC-V 核、Ethernet MAC）上验证，最终汇报运行时间缩短比例和 PPA（功耗/性能/面积）改善量化结果。传统 EDA 算法论文则更偏向理论分析，会严格证明算法复杂度的上界，并给出与业界工具的对比。

**第一步：理解工具在做什么**  
亲手跑一遍 Vivado 或 Cadence 的完整设计流程（见本站 EDA 课程页），感受"RTL→综合→布局布线→时序分析"每一步的输入和输出。

**第二步：了解算法原理**  
阅读 Lavagno et al. 主编的 *Electronic Design Automation for IC Implementation, Circuit Design, and Process Technology*（有开放章节），或 UCSD Andrew Kahng 课程的公开讲义（DAC tutorial slides）。

**第三步：跟进 AI for EDA 前沿**  
- Mirhoseini et al., *A graph placement methodology for fast chip design* (Nature, 2021) — AlphaChip 原始论文  
- 关注 OpenROAD 项目：<https://theopenroadproject.org/>，完整开源的数字后端流程，是学术研究的标准平台

## 相关课题组

### 境内

<div class="grid cards prof-collapse" markdown>

-   **[喻文健](http://numbda.cs.tsinghua.edu.cn/~yuwj/)** <span class="badge-tsinghua">清华</span>

    EDA 算法 · 电磁场求解器 · IC 互连参数提取

-   **[叶佐昌](https://www.sic.tsinghua.edu.cn/en/info/1085/1414.htm)** <span class="badge-tsinghua">清华</span>

    VLSI CAD 数值算法 · 电磁仿真 · 模拟/混合信号电路仿真

-   **[王彦](https://www.sic.tsinghua.edu.cn/en/info/1094/1421.htm)** <span class="badge-tsinghua">清华</span> <span class="prof-w"></span>

    器件建模与 EDA · 电路-器件协同仿真 · 宽禁带半导体器件

-   **[梁云（Eric Liang）](https://ericlyun.me/)** <span class="badge-pku">北大</span>

    EDA · FPGA HLS 编译优化 · AI 异构计算加速

-   **[罗国杰](http://ceca.pku.edu.cn/en/people_/faculty_/guojie_luo/)** <span class="badge-pku">北大</span>

    物理设计自动化 · FPGA 布局布线 · 领域专用加速器

-   **[林亦波](https://ic.pku.edu.cn/szdw/zzjs/sjzdhyjsxtx1/lyb_ae03bbb7dd1548659c1ffe83edd4a047/index.htm)** <span class="badge-pku">北大</span>

    AI for EDA · GPU/FPGA 加速 EDA 算法 · CircuitNet 数据集

-   **[李萌（Meng Li）](https://mengli.me/)** <span class="badge-pku">北大</span>

    EDA 与硬件软件协同设计 · 高效安全 AI 加速

-   **[陈建利](https://sme.fudan.edu.cn/5f/c6/c31141a352198/page.htm)** <span class="badge-fudan">复旦</span>

    IC 布局算法 · VLSI 物理设计优化

-   **[曾璇](https://asic-skl.fudan.edu.cn/d2/0c/c29516a315916/page.htm)** <span class="badge-fudan">复旦</span> <span class="prof-w"></span>

    模拟电路 EDA · ML 辅助 IC 设计自动化 · 高速互连分析

-   **[杨帆](https://faculty.fudan.edu.cn/yangfan/zh_CN/index.htm)** <span class="badge-fudan">复旦</span>

    电路级仿真 · 互连仿真 · 热分析 EDA

-   **[郭新飞（Xinfei Guo）](https://sites.gc.sjtu.edu.cn/xinfei-guo/)** <span class="badge-other">交大</span>

    AI 辅助 EDA · 低功耗设计 · FPGA 加速器

-   **[严昌浩](https://icmne.fudan.edu.cn/2d/4e/c48925a732494/page.htm)** <span class="badge-fudan">复旦</span>

    模拟电路设计自动化 · 寄生参数提取 · 可制造性设计（DFM）

-   **[金洲](https://person.zju.edu.cn/person/0025054)** <span class="badge-other">浙大</span> <span class="prof-w"></span>

    EDA 电路仿真 · 稀疏矩阵并行求解 · 面向科学计算的软硬件协同

-   **[纪志罡](https://icisee.sjtu.edu.cn/jiaoshiml/jizhigang.html)** <span class="badge-other">交大</span>

    电路/器件协同可靠性设计 · 新型范式计算 · 硬件安全 EDA

-   **[蒋力](https://www.cs.sjtu.edu.cn/jiaoshiml/jiangli.html)** <span class="badge-other">交大</span>

    芯片设计自动化 · ML 辅助硬件设计 · AI 加速器与存算架构

-   **[卓成](https://person.zju.edu.cn/chengzhuo)** <span class="badge-other">浙大</span>

    设计自动化 · 低功耗芯片设计 · AI 算法与硬件协同

-   **[孙奇（Qi Sun）](https://qisunchn.top/)** <span class="badge-other">浙大</span>

    ML for EDA · LLM 辅助设计与 DTCO · 设计空间探索

-   **[陈松](https://faculty.ustc.edu.cn/chensong/zh_CN/index.htm)** <span class="badge-other">中科大</span>

    高层次综合 · 物理设计自动化 · 片上网络与神经网络加速器

-   **[钱超](http://www.lamda.nju.edu.cn/qianc/)** <span class="badge-other">南大</span>

    演化计算与机器学习 · AI for EDA · 时序驱动芯片布局

-   **[杜力](https://ese.nju.edu.cn/dl/list.htm)** <span class="badge-other">南大</span>

    AI 算法辅助 EDA · 模拟/射频集成电路设计 · AI 芯片架构

-   **[严骏驰（Junchi Yan）](https://thinklab.sjtu.edu.cn/)** <span class="badge-other">交大</span>

    ML for EDA · 组合优化求解器与逻辑综合 · 图学习驱动布局布线/时序预测

-   **[郑飞君](https://person.zju.edu.cn/frank_zheng)** <span class="badge-other">浙大</span>

    数模混合芯片 EDA · 设计制造一体化与零缺陷制造 · AI 辅助 EDA 算法

-   **[王杰（Jie Wang）](https://miralab.ai/publication/)** <span class="badge-other">中科大</span>

    AI for EDA · 芯片宏单元布局（LaMPlace/ChiPBench） · 强化学习与神经逻辑综合

-   **[杜源（Yuan Du）](https://ese.nju.edu.cn/dy/list.htm)** <span class="badge-other">南大</span>

    AI/LLM 辅助模拟电路设计 · 晶体管级电路与版图自动生成 · 高速接口 EDA

</div>
<button class="prof-show-all">显示全部 ↓</button>

### 境外

<div class="grid cards prof-collapse" markdown>

-   **[Zhiyao Xie（谢知遥）](https://zhiyaoxie.com/)** <span class="badge-hk">港科大</span>

    AI 辅助 EDA · LLM for RTL 生成 · 时序分析

-   **[Bei Yu（余备）](https://www.cse.cuhk.edu.hk/~byu/)** <span class="badge-hk">港中大</span>

    ML + EDA · 光刻热点检测 · 布局布线优化

-   **[Tsung-Yi Ho（何宗易）](https://www.cse.cuhk.edu.hk/people/faculty/tsung-yi-ho/)** <span class="badge-hk">港中大</span>

    3D IC/先进封装 EDA · Chiplet 设计自动化

-   **[Qiang Xu（徐强）](https://www.cse.cuhk.edu.hk/~qxu/)** <span class="badge-hk">港中大</span>

    EDA 测试与验证 · 硬件安全 · 近似计算

-   **[Andrew Kahng](https://vlsicad.ucsd.edu/~abk/)** <span class="badge-intl">UCSD</span>

    物理设计 · 布局布线 · OpenROAD 开源 EDA

-   **[Jason Cong（丛京生）](https://vast.cs.ucla.edu/people/faculty/jason-cong)** <span class="badge-intl">UCLA</span>

    FPGA 设计自动化 · HLS · 领域专用计算

-   **[David Z. Pan（潘志刚）](https://users.ece.utexas.edu/~dpan/)** <span class="badge-intl">UT Austin</span>

    EDA · AI/IC 协同优化 · 模拟/RF 设计自动化

-   **[Azalia Mirhoseini](https://profiles.stanford.edu/azalia-mirhoseini)** <span class="badge-intl">Stanford</span> <span class="prof-w"></span>

    ML 驱动芯片布局 · AlphaChip

-   **[Larry Pileggi](https://users.ece.cmu.edu/~pileggi/)** <span class="badge-intl">CMU</span>

    互连建模与时序仿真 · IC 设计方法学 · 电力系统优化

-   **[Diana Marculescu](https://www.ece.utexas.edu/people/faculty/diana-marculescu)** <span class="badge-intl">UT Austin</span> <span class="prof-w"></span>

    能效与可靠性感知计算 · 硬件感知机器学习 · 嵌入式系统

-   **[Deming Chen（陈德铭）](https://ece.illinois.edu/about/directory/faculty/dchen)** <span class="badge-intl">UIUC</span>

    高层次综合（HLS） · FPGA 重构计算 · ML 硬件加速自动化

</div>
<button class="prof-show-all">显示全部 ↓</button>
