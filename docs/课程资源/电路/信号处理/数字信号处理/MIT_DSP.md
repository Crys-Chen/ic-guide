# MIT 6.341 / RES.6-007: Discrete-Time Signal Processing（Oppenheim）

## 课程简介

- 所属大学：麻省理工学院（MIT）
- 先修要求：信号与系统（傅里叶变换、拉普拉斯变换）、数学分析
- 编程语言：MATLAB（实验与滤波器设计）
- 课程难度：🌟🌟🌟🌟
- 预计学时：80 小时

MIT 数字信号处理课程由 Alan V. Oppenheim 主讲，其配套教材《Discrete-Time Signal Processing》（Oppenheim & Schafer，第 3 版，Prentice Hall）是全球 DSP 领域的事实标准教材，被国内外几乎所有一流高校采用。RES.6-007 是 Oppenheim 本人 1987 年为 MIT 远程教育录制的完整视频系列，画质虽属时代产物，但讲授深度与清晰度至今无可替代；6.341 是研究生层次的进阶版本，OCW 上开放了完整讲义、习题集与历年考试。

课程核心内容覆盖：离散时间信号与 LTI 系统的基础分析 → Z 变换（收敛域、极零点）→ 离散傅里叶变换（DFT）与快速算法（FFT、Radix-2 Cooley-Tukey）→ 频率选择性数字滤波器设计（FIR 窗函数法、最优等波纹 Parks-McClellan 法；IIR Butterworth、Chebyshev、椭圆逼近）→ 多采样率信号处理（抽取与内插、多相滤波器组）→ 谱分析与功率谱估计。内容严密、题目经典，是所有志在微电子信号链方向（ADC/DAC、无线接收机、DSP 芯片架构）同学不可跳过的核心课程。

国内各顶校同样开设数字信号处理课程，复旦、交大、北邮、浙大均有对应讲义。中国大学 MOOC 上有北京邮电大学、东南大学等多个版本，难度覆盖本科到研究生，可与 MIT 版本对照学习。EPFL 的 Coursera DSP 课程（Paolo Prandoni 主讲）英语现代化表述更清晰，适合与 Oppenheim 教材搭配作为入门阶梯。

## 课程资源

- 课程网站（OCW · 6.341，含讲义/习题/考试）：<https://ocw.mit.edu/courses/6-341-discrete-time-signal-processing-fall-2005/>
- 课程视频（OCW · RES.6-007，Oppenheim 原版录像）：<https://ocw.mit.edu/courses/res-6-007-signals-and-systems-spring-2011/>
- Coursera DSP（EPFL · Paolo Prandoni，现代英语授课）：<https://www.coursera.org/learn/dsp>
- NPTEL 数字信号处理（IIT）：<https://nptel.ac.in/>（搜索"Digital Signal Processing"）
- 中国大学 MOOC（搜索"数字信号处理"，推荐北邮、东南大学版本）：<https://www.icourse163.org/>
- 课程教材：《Discrete-Time Signal Processing》Alan V. Oppenheim & Ronald W. Schafer，第 3 版（Prentice Hall）

## B 站配套资源

- Oppenheim DSP 完整讲座（原版搬运，共 26 集）：B 站搜索"Oppenheim 离散时间信号处理"或"DSP Oppenheim MIT"
- 北邮数字信号处理 MOOC 配套视频：B 站搜索"数字信号处理 MOOC 北邮"
- 国内高校数字信号处理录像（浙大、交大等版本）：B 站搜索"数字信号处理 浙大"或"DSP 课程"

## 前置学习建议

1. 信号与系统（连续时间 LTI、傅里叶变换、拉普拉斯变换、采样定理）——参见 [MIT 6.003](../信号与系统/MIT6.003.md) 或复旦对应课程
2. 复变函数基础（留数定理、收敛域分析）——Z 变换章节大量使用
3. 线性代数基础（矩阵视角理解 DFT）——有助于深入理解 FFT 算法结构
4. 建议先阅读 Oppenheim 教材第 2 章（离散时间信号与系统）后再进入 FFT 与滤波器设计章节，循序渐进效果最佳
