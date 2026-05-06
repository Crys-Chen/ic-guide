# 数模/模数转换器设计学习资源汇总

## 课程简介

- 所属大学：多校资源汇总（Stanford、IEEE SSCS、国内高校等）
- 先修要求：模拟集成电路设计、数字信号处理基础、运算放大器原理
- 编程语言：MATLAB / Cadence Virtuoso（仿真验证）
- 课程难度：🌟🌟🌟🌟🌟
- 预计学时：60–100 小时（视深度而定）

数模/模数转换器（DAC/ADC）是连接模拟世界与数字系统的核心接口电路，在无线通信、音频处理、传感器接口与高速信号链中无处不在。与纯数字或纯模拟方向不同，数据转换器设计要求同时掌握模拟电路精度、数字信号处理理论与工艺物理约束，是微电子领域公认难度最高的方向之一。

目前全球尚无一门完整覆盖 ADC/DAC 设计全流程的免费公开课，但斯坦福大学 Boris Murmann 教授、IEEE 固态电路学会（SSCS）以及国际固态电路会议（ISSCC）均发布了大量高质量教学材料，分散于各平台之上。本页汇总了目前可获取的最佳学习路径，建议按照"理论基础 → 架构分析 → 电路实现 → 性能指标"的顺序递进学习。核心架构包括：逐次逼近型（SAR ADC）、流水线型（Pipeline ADC）、Sigma-Delta（ΔΣ 调制器）、Flash ADC，以及电流导向（Current-Steering）与 R-2R 型 DAC。

国内在该方向发表顶会论文的研究组日益增多（ISSCC、VLSI Symposium 均有国内成果），中国大学 MOOC 与 B 站亦出现了来自复旦、浙大、清华等高校的 ADC/DAC 专题讲座，质量逐年提升，可作为入门阶段的中文参考。

## 课程资源

### 斯坦福 Boris Murmann — ADC 性能调查与设计教程

- ADC Performance Survey（能效 Walden FOM 数据库，全球 ADC 论文汇总）：<https://web.stanford.edu/~murmann/adcsurvey.html>
- 说明：Murmann 教授长期维护该数据库，并在各顶会 Tutorial 中发布配套教学幻灯片，深度解析 ADC 性能极限与工艺趋势，搜索"Murmann ADC tutorial slides"可获取公开讲义

### IEEE 固态电路学会（SSCS）教育资源

- SSCS 教育主页（含 ISSCC Short Course、Webinar、eLearning Library）：<https://sscs.ieee.org/education/>
- 说明：IEEE SSCS 提供来自 ISSCC 的 Short Course 材料与历年杰出讲师（Distinguished Lecturer）讲座，涵盖数据转换器、射频电路、存储器设计等方向，部分视频对学生会员免费开放

### YouTube 专题讲座

- 搜索关键词："SAR ADC design tutorial"、"pipeline ADC design"、"delta sigma modulator tutorial"、"successive approximation ADC Stanford"
- 说明：MIT、Stanford、IMEC 等机构教授上传了多个 ADC 架构专题讲座，适合在 ISSCC 材料之前建立直观认识

### Coursera / edX 模拟 IC 课程（含数据转换器模块）

- 中国大学 MOOC（搜索"数模转换器"或"模数转换器"）：<https://www.icourse163.org/>
- 说明：部分模拟集成电路设计课程含专门的 ADC/DAC 设计章节，建议配合 Razavi《模拟 CMOS 集成电路设计》第 12–15 章同步学习

### 核心参考教材

- 课程教材（首选）：《Data Converters》Franco Maloberti（Springer）
- 课程教材（深度）：《Understanding Delta-Sigma Data Converters》Richard Schreier & Gabor C. Temes（IEEE Press / Wiley）
- 课程教材（综合）：《Design of Analog CMOS Integrated Circuits》Behzad Razavi，第 2 版，第 14–15 章（ADC/DAC 专章）
