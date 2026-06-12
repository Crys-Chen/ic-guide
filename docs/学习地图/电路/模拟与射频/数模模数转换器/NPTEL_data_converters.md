# NPTEL: VLSI Data Conversion Circuits

## 课程简介

- 所属大学：印度理工学院马德拉斯分校（IIT Madras，NPTEL 官方课程）
- 先修要求：模拟集成电路设计（Razavi 级别）、信号与系统
- 编程语言：MATLAB（行为级建模与频谱分析）
- 授课教师：Shanthi Pavan
- 课程难度：🌟🌟🌟🌟
- 预计学时：120 小时（全 60 讲，视频总长约 54 小时）

ADC 和 DAC 是模拟世界与数字世界之间的桥。传感器输出、射频接收链、音频与图像采集，所有真实信号最终都要经过数据转换器才能进入数字处理。这门课由 IIT Madras 的 Shanthi Pavan 主讲，他是 Delta-Sigma 领域的权威，与 Schreier、Temes 合著了该方向的标准教材，也是 IEEE Fellow。课程从采样定理与采样开关的非理想性讲起，依次覆盖量化噪声、ADC/DAC 静态与动态指标、FFT 测试方法、Flash 与 Pipeline 等 Nyquist 架构，后半程深入 Delta-Sigma 调制器的设计，收尾于校准与动态元件匹配等高级技术。

这门课的特点是推导极其扎实。Pavan 不满足于给出结论，每一个噪声来源、每一项失真都从电路层面算给你看，听完会真正理解数据手册上 SNDR、SFDR、ENOB 这些指标的来历。对微电子学生来说，它是模拟 IC 课程之后向混合信号设计进阶的标准路径，做 ADC 方向科研或求职混合信号岗位都绕不开这套内容。建议配合 MATLAB 把课上的行为级模型亲手搭一遍。

## 课程资源

- 课程网站（NPTEL 官方课程页，含大纲与讲义资料）：<https://nptel.ac.in/courses/117106034>
- 课程视频（YouTube，NPTEL 官方频道，60 讲）：<https://www.youtube.com/playlist?list=PL2135D8A0F7441AE1>
- B 站搬运（60P，中英双语字幕）：<https://www.bilibili.com/video/BV1HV411r7vU/>
- 课程教材：Schreier, Temes & Pavan《Understanding Delta-Sigma Data Converters》（2nd Edition, IEEE Press / Wiley）
- 补充教材：Maloberti《Data Converters》（Springer）
