# 数字信号处理

- 能力 ID：`C-CIR-07`
- 类型：公共能力
- 修读要求：公共推荐
- 建议窗口：IC 公共核心（可按兴趣提前或延后）
- 所属领域：电路与信号
- 参考投入：24 小时（不是学期配额）
- 先修能力：[信号与系统](./C-CIR-04.md)、[复变函数与 Fourier 分析](./C-MATH-04.md)、[C 与 Python 编程](./C-SYS-01.md)

## 学习成果

- 能解释采样、混叠、DFT/FFT、频谱泄漏与窗函数
- 能设计和评估基础 FIR/IIR 滤波器
- 能把定点量化误差与硬件资源、吞吐和延迟联系起来

## 验收

### 产物

一个从浮点设计到定点实现的数字滤波器项目，含频响、误差和资源报告

### 合格标准

浮点滤波器满足预设通带纹波和阻带衰减；定点与浮点输出信噪比不低于 40 dB；不少于 10 组测试向量全通过，并报告位宽、溢出、资源和吞吐量。

## 视频资源

`视频时长` 是本能力点建议观看章节的合计，不是整门公开课的总时长。

### 主资源：RES.6-008 Digital Signal Processing

- 教师/机构：Alan V. Oppenheim · Massachusetts Institute of Technology
- 平台与入口：MIT OpenCourseWare · [打开资源](https://www.ocw.mit.edu/courses/res-6-008-digital-signal-processing-spring-2011/resources/lecture-videos/)
- 来源类型：`official_university_course`
- 建议章节：Lectures 1–10: discrete-time systems, convolution, DTFT, discrete Fourier series and DFT
- 语言/字幕：English / English transcript
- 建议观看时长：约 10.0 小时
- 编辑评分：<span class="resource-score">92/100</span>
- 评分分项：匹配 30/30 · 来源 20/20 · 深度 20/20 · 实践 12/15 · 可访问 6/10 · 呈现 4/5
- 推荐理由：经典课程严格推导 DFT、滤波与多率处理，能够建立不依赖软件按钮的 DSP 基础。
- 配套材料：逐讲视频、文字稿与课程配套资料。
- 建议练习：实现 DFT/FFT、FIR 和 IIR，并以频响、稳定性和运算量进行比较。
- 核验日期：2026-08-10

### 备选资源：Digital Signal Processing

- 教师/机构：S. C. Dutta Roy · Indian Institute of Technology Delhi
- 平台与入口：NPTEL · [打开资源](https://nptel.ac.in/courses/117102060)
- 来源类型：`official_national_course`
- 建议章节：Lectures 1–43: discrete systems, DFT/Z-transform, filter structures and FIR/IIR design
- 语言/字幕：English / English
- 建议观看时长：约 21.5 小时
- 编辑评分：<span class="resource-score">86/100</span>
- 评分分项：匹配 28/30 · 来源 20/20 · 深度 18/20 · 实践 8/15 · 可访问 8/10 · 呈现 4/5
- 推荐理由：课程包含多次问题求解课和滤波器设计实例，适合需要更慢板书节奏的学习者。
- 配套材料：逐讲视频、问题求解讲次和课程目录。
- 建议练习：完成一次窗函数 FIR 和一次双线性变换 IIR 设计，并测试定点量化影响。
- 核验日期：2026-08-10
