# NPTEL VLSI Design（IIT）

## 课程简介

- 所属大学：印度理工学院（IIT Madras / IIT Kharagpur）
- 先修要求：数字逻辑基础、半导体器件物理基础（MOSFET 工作原理）
- 编程语言：无（仿真实验可选 SPICE / Cadence Virtuoso）
- 课程难度：🌟🌟🌟🌟🌟
- 预计学时：100 小时

NPTEL VLSI Design 是印度理工学院在 NPTEL 平台开设的 VLSI 方向旗舰课程，属于全球最早免费开放的 VLSI 教学视频之一。授课教授来自 IIT Madras 或 IIT Kharagpur 的微电子方向，理论推导严谨，内容覆盖完整的数字 CMOS 集成电路设计链路。课程全程英语授课，约 40 讲，适合有一定半导体器件基础的同学系统进阶。

课程核心内容涵盖：CMOS 反相器与静态/动态逻辑门的电路分析 → 晶体管尺寸优化（sizing）与驱动能力设计 → 功耗分析（动态功耗、静态漏电）→ 时钟策略与锁存器/触发器设计 → 数据通路电路（加法器、乘法器、移位寄存器）→ SRAM 与 ROM 存储器单元设计 → 标准单元库设计方法。整体深度与复旦《数字集成电路设计原理》（MICR130029）高度吻合，是该课程最推荐的配套视频资源。

与 Weste & Harris《CMOS VLSI Design》教材（数字集成电路方向全球标准教材）结合使用效果最佳。两者在 CMOS 逻辑家族、时序分析与存储器设计章节几乎一一对应，课程结束后可直接过渡到芯片后端设计与综合工具链学习。

## 课程资源

- 课程网站（NPTEL 官网）：<https://nptel.ac.in/courses/117105088>
- NPTEL 搜索入口：<https://nptel.ac.in/>（搜索"VLSI Design"可找到多个版本）
- 课程视频：NPTEL 官网课程页面内嵌视频 / YouTube 搜索"NPTEL VLSI Design IIT"
- 课程教材：《CMOS VLSI Design: A Circuits and Systems Perspective》Neil Weste & David Harris，第 4 版（Pearson）
- 课程作业：NPTEL 课程页面含课后习题与在线评测（注册账号后可参与）

## 其他推荐资源

### CMOS VLSI Design 教材官网（强烈推荐）

- 网址：<https://www.cmosvlsi.com/>
- 简介：Weste & Harris 教材配套官方网站，开放全部章节 PPT、部分习题解答与 SPICE 仿真文件，与 NPTEL 视频配合使用覆盖面极广，是复旦本课的首选自学辅助材料。

### MIT 6.004 Computation Structures（体系结构视角）

- 课程网站：<https://ocw.mit.edu/courses/6-004-computation-structures-spring-2017/>
- 简介：从逻辑门到处理器的完整设计链路，是 VLSI 电路级知识与计算机体系结构之间的桥梁，建议在完成 NPTEL VLSI 课程后参阅，了解电路设计决策如何影响处理器性能。

### UIUC VLSI CAD: Logic to Layout（Coursera）

- 课程主页：<https://www.coursera.org/learn/vlsi-cad-logic>
- 课程难度：🌟🌟🌟🌟
- 简介：伊利诺伊大学香槟分校在 Coursera 开设的 VLSI CAD 课程，涵盖从 RTL 综合到版图布局布线的 EDA 工具链，与 NPTEL 电路级内容形成互补，适合对芯片实现（后端）流程感兴趣的同学。审计模式免费。

### Stanford EE271 VLSI Design

- 简介：斯坦福大学 EE271 是 VLSI 方向的经典研究生课程，课程讲义可通过搜索在网络上找到部分开放版本，内容侧重 CMOS 电路性能优化与版图约束，适合已完成 NPTEL 入门后进一步提升。

## B 站配套资源

- NPTEL VLSI Design 系列搬运（IIT 原版，含字幕）：B 站搜索"NPTEL VLSI Design"或"CMOS 数字集成电路 NPTEL"可找到多个搬运版本
- 国内高校数字集成电路设计课程录像：B 站搜索"VLSI 设计"或"数字集成电路设计"，可找到交通大学、浙江大学、电子科大等课程录像，内容覆盖逻辑单元设计、时序约束与功耗分析

## 前置学习建议

1. 半导体器件物理基础（MOSFET 工作区间、阈值电压、电流方程）——参见复旦《半导体器件原理》或相关公开课
2. 数字逻辑基础（布尔代数、组合逻辑、时序逻辑）——参见 [MIT 6.004](../数字逻辑基础/MIT6.004.md) 或复旦 MICR130003
3. 建议在阅读 Weste & Harris 第 1–3 章（CMOS 制造工艺与反相器分析）之后再进入 NPTEL 视频，效果更佳
