---
title: 专题社区
hide:
  - navigation
  - toc
---

# 专题社区

**专题社区**收录那些**面向特定方向、由社区/组织持续维护、带完整"从入门到产出"路径**的综合学习生态——它们不是单一课程,也不是科研方向的"是什么"概述,而是**一套带你动手做出真实产出物的项目体系**。

<div class="grid cards community-cards" markdown>

-   :material-chip: __[一生一芯 (OSCC)](https://ysyx.oscc.cc/){target="_blank"}__

    中科院计算所 → 北京开源芯片研究院发起的 RISC-V 处理器**流片**训练计划。带你从 RTL 设计、流水线实现到 tape-out 完成一颗自己的 CPU。

    - **规模** — 截至 2024.12 累计参与超 1 万人,正式学员 1163 名,流片学员 90 名
    - **门槛** — 数字电路 + C 语言基础,**零基础可报名**
    - **产出** — 一颗实际芯片 + 工业界认可度极高,国内学生**免费流片**
    - **基地** — 北京 / 深圳 / 厦门三地线下基地,有工位、津贴、面对面助教

    > 对应方向: [处理器架构与编译系统](../科研方向/处理器架构与编译系统.md)、[可重构计算与FPGA](../科研方向/可重构计算与FPGA.md)

-   :material-cpu-64-bit: __[香山处理器 (XiangShan)](https://github.com/OpenXiangShan/XiangShan){target="_blank"}__

    中科院计算所 → 北京开源芯片研究院的开源**高性能** RISC-V 处理器,雁栖湖 → 南湖 → 昆明湖三代架构。昆明湖在 SPECint2006 测试 3GHz 标准化分数 45,**性能逼近 ARM Neoverse N2**,目前已知性能最强开源处理器。

    - **维护** — 北京开源芯片研究院 + 国内顶尖高校研究者
    - **门槛** — 数字电路 + 计算机体系结构 + Chisel/Scala
    - **产出** — 高性能 RISC-V 核研究 + 学术发表(HPCA / IEEE Micro Top Picks)
    - **上手** — XSPdb 轻量 Python 调试环境,文档站 docs.xiangshan.cc

    > 对应方向: [处理器架构与编译系统](../科研方向/处理器架构与编译系统.md)

-   :material-tools: __[iEDA / 开源芯片设计](https://ieda.oscc.cc/){target="_blank"}__

    中科院计算所 iEDA 团队的开源 **RTL2GDS 全流程 EDA**(yosys + iEDA + klayout)+ 创芯 55nm 开源 PDK。北京开源芯片研究院 ECOS 支持**社区免费流片申请**——SoC RTL 或处理器核都可提交,后端可自己做也可交给团队。

    - **维护** — iEDA 团队(中科院计算所)+ 北京开源芯片研究院 ECOS
    - **门槛** — 数字 IC 设计基础
    - **产出** — 用开源工具链流片自己的 SoC(55nm),已完成 3 次流片
    - **目标** — 2025 年用开源 EDA 在 28nm 上流片香山,PPA 达商业工具 90%

    > 对应方向: [EDA与设计自动化](../科研方向/EDA与设计自动化.md)、[处理器架构与编译系统](../科研方向/处理器架构与编译系统.md)

-   :material-code-braces: __[PLCT 实验室 + 玄铁 RV 学院](https://github.com/plctlab){target="_blank"}__

    中科院软件所 PLCT 实验室,聚焦 RISC-V **软件生态**(GCC / LLVM / V8 / OpenJDK / QEMU)。与阿里平头哥玄铁联合推出 **RV 学院系列课程**,实际开发板(K230 / Milk-V / LicheePi 4A)。

    - **维护** — 中科院软件所 PLCT 团队 + 阿里平头哥
    - **门槛** — C/C++ + 编译原理 + Linux 基础
    - **产出** — 直接向 GCC / LLVM / QEMU **upstream 提交** RISC-V 贡献
    - **实习** — 远程,不限学校年级专业,产出公开开源

    > 对应方向: [处理器架构与编译系统](../科研方向/处理器架构与编译系统.md)

-   :material-robot: __[Embodied-AI-Guide(具身智能)](https://github.com/tianxingchen/Embodied-AI-Guide){target="_blank"}__

    Tianxing Chen + Lumina Embodied AI Community 维护的**具身智能综合知识库**(GitHub 13.5k stars),覆盖 VLA、SLAM、控制、仿真器、硬件 等 7 大板块。

    - **维护** — Lumina 社区 + 高校研究者持续 PR
    - **内容** — 论文清单 + 课程链接 + 工业 benchmark
    - **特色** — 中文圈具身智能信息密度最高的资源

    > 对应方向: [具身智能](../科研方向/具身智能.md)

-   :material-school: __[Datawhale 开源学习社区](https://www.datawhale.cn/){target="_blank"}__

    国内最大 AI 开源学习社区,**2000+ 院校,年度夏令营 3 万+ 人**。涵盖 LLM / Agent / GPU 编程(CUDA/Triton)/ 分布式训练 / 推理优化 / RLHF 的系统性课程,完全中文。

    - **维护** — Datawhale 社区(双非到顶尖院校 + 企业工程师贡献者)
    - **门槛** — Python + 基础 ML
    - **产出** — 完整 LLM/Agent 项目作品 + 开源贡献
    - **代表项目** — Self-LLM、Happy-LLM(20k+ stars)、Hello-Agents、苹果书(李宏毅深度学习教程)

    > 对应方向: [AI算法与系统](../科研方向/AI算法与系统.md)、[具身智能](../科研方向/具身智能.md)

-   :material-trophy: __[全国大学生集成电路创新创业大赛(集创赛)](http://univ.ciciec.com/){target="_blank"}__

    工信部主办的**国家 A 类**集成电路赛事。8 大赛道覆盖芯片设计、芯片应用、芯创成果全产业链,**250+ 高校 3000+ 队伍**参赛。

    - **主办** — 工信部人才交流中心,北大 / 东南 / 浙大专家委员会
    - **规模** — 七大分赛区 + 全国总决赛,本硕博 + 高职均可参赛
    - **产出** — 团队作品 + 企业杯赛培训 + 一线 IC 公司就业敲门砖
    - **报名** — 1-3 人组队(可跨校),每队 1-2 位指导教师

    > 对应方向: 整个 [科研方向](../科研方向/index.md) 板块

</div>

---

## 与其他板块的区别

|  | 定位 |
|---|---|
| [科研方向](../科研方向/) | "**这个方向在研究什么**"——读完知道选不选 |
| [学习地图](../知识谱系.md) | "**怎么系统学课程**"——学习地图按学科分类 |
| **专题社区** | "**怎么动手做出东西**"——综合项目 + 社区生态 |
| [工程工具](../工程工具/index.md) | "**单件工具怎么用**"——Git / Cadence / Gem5 等 |

## 收录标准

我们不会盲目堆砌,被收录的专题社区需要满足:

1. **持续活跃的社区/组织维护**(非单人 GitHub repo)
2. **带具体产出物的训练路径**(流片、demo、机器人项目、开源贡献等)
3. **足够大体量**——不是一篇博客或一个教程,而是综合学习生态
4. **与 ECE/微电子方向有明确关联**——避免站点定位漂移
5. **中国内地学生可零门槛接入**——GitHub/Gitee 公开,中文文档,无地理/账号限制

未来可能收录的候选: TinyTapeout(国际流片) · OpenROAD / OpenLane(开源 EDA 工具) · SiEPIC(硅光教育)等。
