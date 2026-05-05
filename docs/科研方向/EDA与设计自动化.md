# EDA 与设计自动化

## 一句话定义

用算法和软件让芯片设计本身自动化——从逻辑综合、布局布线到用机器学习和大语言模型辅助设计决策。

## 你身边的产品

EDA 是这 11 个方向里最隐形的一个——你用过的每一块芯片（手机、电脑、耳机、充电器里的），都是用 EDA 软件设计出来的，但你永远不会直接看到它。一块现代 SoC 有数十亿个晶体管，工程师不可能手工安排它们的位置和连线，EDA 工具负责把用 Verilog 写的设计意图转换成可以送进晶圆厂的物理版图，这个过程涉及逻辑综合、时序分析、布局布线、寄生参数提取等数十个步骤，每一步都有专门的算法在跑。

这个方向的地缘政治意义格外突出。2019 年华为海思被列入实体清单，Synopsys 和 Cadence 停止向其更新 EDA License，海思随即无法使用最新工具做先进制程设计——这是芯片产业链中卡脖子最立竿见影的案例。整个全球 EDA 市场只有三家美国公司（Synopsys、Cadence、Siemens EDA）占据 80% 以上份额，台积电、三星、英特尔都必须向它们缴费购买工具。国内华大九天、概伦电子正在逐步替代部分环节，但距离全流程自研还有相当距离。

## 为什么重要

一块现代 SoC 有数十亿个晶体管，靠人工一个个排布是不可能的。EDA（Electronic Design Automation）工具就是"造芯片的工具"，没有它，芯片设计无从谈起。

这个方向在中国有特殊战略意义：全球 EDA 市场被 Synopsys、Cadence、Siemens（Mentor）三家美国公司垄断，是半导体产业链中最核心的卡脖子环节之一。国内 EDA 公司（华大九天、概伦电子）正在从零追赶，学术界需要大量人才。

近年来，机器学习和大模型正在深度介入 EDA，AlphaChip（Google，2023 年 Nature）用强化学习做芯片布局，打开了"AI for EDA"的新局面。

## 当前最前沿（2024-2025）

2021 年 Google DeepMind 在 *Nature* 发表 AlphaChip，用强化学习在 6 小时内完成了 TPU v5 的芯片布局（floorplan），结果优于人类工程师数周手工优化的方案。这篇论文引发了整个 EDA 领域的震动：一个长期被认为需要高度专家经验的任务，被机器学习以端到端方式直接求解。此后，图神经网络预测时序违例、生成模型辅助版图合规、强化学习优化布线策略等工作在顶会上层出不穷。

大模型对 EDA 的渗透在 2023-2024 年加速。NVIDIA 发布了专为芯片设计场景微调的 ChipNemo，Synopsys 和 Cadence 相继在产品中集成 AI 辅助 RTL 生成和验证功能。更大的野心是让工程师用自然语言描述需求，工具自动生成可综合的 Verilog 代码——这条路目前还只能处理局部模块，离完整芯片还差得很远，但方向已经明确。学术界用来验证这些想法的标准平台是 DARPA 资助的 OpenROAD，一个完全开源的数字后端全流程工具，可以直接在上面跑实验。

## 核心研究问题

- **可扩展性**：2nm 以下工艺下，布局布线的搜索空间指数级爆炸，现有算法如何扩展？
- **ML for EDA**：如何用强化学习、图神经网络替代或加速传统启发式算法？
- **LLM for Chip Design**：大语言模型能否直接生成可综合的 RTL 代码，甚至理解设计意图？
- **模拟 EDA**：模拟电路的自动化设计远比数字难，如何建立可靠的模拟综合流程？

## 代表性机构与企业

| | 国际 | 国内 |
|--|------|------|
| **企业** | Synopsys、Cadence、Siemens EDA | 华大九天、概伦电子、芯华章 |
| **高校** | UCSD（Andrew Kahng）、UT Austin、UCLA | 北大、清华、复旦、东南大学 |
| **顶会** | DAC、ICCAD、DATE、ASP-DAC | — |

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

**本站相关课程：**

- [数字集成电路设计原理（复旦）](../课程资源/电路/数字/数字集成电路/数字集成电路设计原理_FDU/MICR130029.md)
- [ASIC 设计（复旦）](../课程资源/电路/ASIC/INFO130094.md)
- [EDA 工具（复旦）](../课程资源/电路/EDA/MICR130035.md) · [Vivado 入门](../课程资源/电路/EDA/vivado.md) · [Cadence Virtuoso 入门](../课程资源/电路/EDA/cadence.md)
- [数据结构与算法（复旦）](../课程资源/算法编程/数据结构与算法/MICR130009.md)

## 入门三步走

**第一步：理解工具在做什么**  
亲手跑一遍 Vivado 或 Cadence 的完整设计流程（见本站 EDA 课程页），感受"RTL→综合→布局布线→时序分析"每一步的输入和输出。

**第二步：了解算法原理**  
阅读 Lavagno et al. 主编的 *Electronic Design Automation for IC Implementation, Circuit Design, and Process Technology*（有开放章节），或 UCSD Andrew Kahng 课程的公开讲义（DAC tutorial slides）。

**第三步：跟进 AI for EDA 前沿**  
- Mirhoseini et al., *A graph placement methodology for fast chip design* (Nature, 2021) — AlphaChip 原始论文  
- 关注 OpenROAD 项目：<https://theopenroadproject.org/>，完整开源的数字后端流程，是学术研究的标准平台
