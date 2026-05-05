# 先进集成电路工艺技术：公开学习资源汇编

## 课程简介

- 所属大学：多机构（无单一完整公开课，以资源组合替代）
- 先修要求：集成电路工艺原理（如复旦 MICR130007 或等效课程）
- 编程语言：无
- 课程难度：🌟🌟🌟🌟🌟
- 预计学时：因资源组合而异（建议 60–120 小时）

先进集成电路工艺技术（10nm 节点以下）是目前全球最前沿、最受行业封锁的知识领域：EUV 光刻、FinFET/GAA 晶体管、3D NAND 堆叠、先进封装（CoWoS、SoIC）以及设计-工艺协同优化（DTCO）等核心内容，绝大多数属于台积电、三星、英特尔的商业机密，尚无任何一门公开 MOOC 能够系统覆盖。因此，本页面汇编了目前**可公开获取的最优质资源组合**，帮助同学从学术文献、行业报告与会议演讲中系统构建先进工艺知识体系。

学习先进工艺技术需要具备良好的"阅读工程论文"的能力：核心资料来源包括 IEDM（IEEE 电子器件年会）、VLSI Technology Symposium（VLSI 工艺与电路研讨会）、SPIE Advanced Lithography 等顶级行业/学术会议论文。建议将下列资源按模块分阶段学习，而非线性刷完。

## 资源一：学术会议与标准文献

### IEEE IEDM & VLSI Technology Symposium

- 资源主页：<https://www.ieee.org/conferences/iedm> / <https://vlsisymposium.org/>
- 获取方式：IEEE Xplore（复旦图书馆提供访问权限）；部分论文作者在个人主页/ResearchGate 上传免费版
- 覆盖内容：FinFET/GAA 器件结构、EUV 光刻工艺窗口、3D 集成、新型存储器（MRAM、PCM）
- 建议：优先阅读台积电、三星、英特尔在 IEDM 上的工艺集成论文（如 N3/N2 节点路线图相关文章）

### SPIE Advanced Lithography & Patterning

- 资源主页：<https://spie.org/conferences-and-exhibitions/advanced-lithography-and-patterning>
- 覆盖内容：EUV 光刻（光源、掩模、抗蚀剂）、多重图形化（SAQP/SADP）、计算光刻（OPC/SMO）

## 资源二：斯坦福大学纳米加工设施教程

### Stanford SNF 工艺教程

- 资源主页：<https://snf.stanford.edu/>
- 覆盖内容：斯坦福纳米加工实验室公开的标准工艺模块操作说明（ALD、ICP 刻蚀、EBL 等），适合了解前沿工艺的实际参数范围与设备约束

### Stanford EE311 Advanced Integrated Circuit Design

- 课程主页：<https://web.stanford.edu/class/ee311/>
- 覆盖内容：互连延迟、功耗密度极限、FinFET 工艺约束对电路设计的影响，是 DTCO 概念的最佳入门

## 资源三：IEEE 学会教育资源

### IEEE SSCS / EDS 教育视频

- 平台：IEEE.tv 及 IEEE SSCS 官网（<https://sscs.ieee.org/>）
- 覆盖内容：IEEE 固态电路学会（SSCS）和电子器件学会（EDS）定期发布面向学生的讲座视频，包括先进节点器件物理、3D 集成技术、先进封装等专题
- 获取方式：IEEE SSCS Resource Center（<https://resourcecenter.sscs.ieee.org/>）提供大量免费学生资源

## 资源四：产业界公开技术资料

### ASML EUV 光刻教育视频

- 平台：YouTube（ASML 官方频道）
- 搜索方式：YouTube 搜索"ASML EUV lithography explained"或"ASML how EUV works"
- 覆盖内容：EUV 光源（13.5nm 等离子体）、反射式光学系统、掩模防护膜（pellicle）原理的权威科普

### 台积电 / 英特尔 / 三星 技术白皮书与年报

- 台积电技术：<https://www.tsmc.com/english/dedicatedFoundry/technology>
- 英特尔工艺路线图（IDM 2.0）：Intel 官网新闻室搜索"Intel Process Technology"
- 覆盖内容：各公司公开的制程节点命名、晶体管密度提升策略、封装技术（如 Intel EMIB、台积电 CoWoS）

## 资源五：imec 公开资料

### imec 技术期刊与公开演讲

- 资源主页：<https://www.imec-int.com/en/articles>
- 覆盖内容：imec（比利时微电子研究中心）是全球最重要的半导体研究机构之一，定期公开 EUV、GAA、3D NAND、先进封装方向的技术文章与演讲 PDF，内容介于学术与产业之间，是理解前沿工艺的重要窗口
- 建议：关注 imec 的年度技术活动"imec Technology Forum"（ITF）的公开演讲材料

## B 站配套资源

- 台积电先进制程技术分析（含 N3/N2 节点解读）：B 站搜索"台积电 先进制程 分析"
- FinFET/GAA 结构原理中文讲解：B 站搜索"FinFET GAA 讲解"或"环栅晶体管原理"
- EUV 光刻原理科普：B 站搜索"EUV 光刻 原理"或"极紫外光刻"
- 先进封装技术（CoWoS/HBM）：B 站搜索"先进封装 CoWoS"或"chiplet 封装"
- IEDM 论文解读视频：B 站搜索"IEDM 2023 解读"或"芯片工艺 IEDM"

## 前置学习建议

1. 必须先完成复旦 MICR130007《集成电路工艺原理》或等效课程（MIT 6.152J），掌握标准 CMOS 工艺模块
2. 了解 MOSFET 短沟道效应、SCE/DIBL 等器件物理概念（参见 MIT 6.012 或复旦 MICR130006）
3. 熟悉光刻基本原理（瑞利分辨率公式、NA/λ 关系）再进入 EUV 专题
4. 建议以"工艺节点演进路线图"为主线（180nm → 90nm → 28nm → 7nm → 3nm → 2nm），逐节点对应学习各模块的工艺创新

## 学习路径建议

| 主题 | 推荐资源 | 预计时间 |
|------|----------|----------|
| EUV 光刻原理 | ASML YouTube + SPIE 论文入门 | 10–15 小时 |
| FinFET/GAA 器件结构 | IEDM 综述论文 + B 站解读视频 | 15–20 小时 |
| 多重图形化（SAQP） | Stanford EE311 讲义 + SPIE 论文 | 10 小时 |
| 先进封装（CoWoS/SoIC） | 台积电白皮书 + IEEE SSCS 视频 | 10 小时 |
| DTCO 概念 | imec ITF 演讲 + Stanford EE311 | 10–15 小时 |
| 3D NAND 工艺 | IEDM 存储器专题论文 | 10 小时 |
