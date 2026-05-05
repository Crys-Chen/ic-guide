# MIT 6.004: Computation Structures

## 课程简介

- 所属大学：麻省理工学院（MIT）
- 先修要求：无（高中数学水平即可）
- 编程语言：Verilog（实验部分使用 HDL 仿真）
- 课程难度：🌟🌟🌟🌟
- 预计学时：100 小时

MIT 6.004 是麻省理工学院计算机工程本科核心课程，也是公认的数字逻辑与计算机结构入门最佳公开课之一。课程从布尔代数出发，逐步构建出一个完整的 32 位处理器，思路清晰、层次递进，彻底打通"从门电路到 CPU"的完整设计链路，是学习复旦《数字逻辑基础》的理想国际配套资源。

课程内容涵盖：布尔代数与基本逻辑门 → 组合逻辑设计（多路选择器、加法器、ALU）→ 时序逻辑（D 触发器、寄存器、有限状态机 FSM）→ 数据通路与控制器设计 → 流水线技术 → 存储器层次结构（Cache、虚存）→ 简单处理器（Beta 架构）的完整设计与实现。实验部分要求用 Verilog 在仿真环境中实现各模块，动手能力要求较高。

与复旦《数字逻辑基础（H）》（MICR130003）相比，MIT 6.004 在 FSM 与数据通路设计上更强调从原理到 HDL 实现的贯通；Beta 处理器项目可作为理解"数字逻辑如何支撑体系结构"的极佳练习，建议在掌握 Verilog 基础后结合本课 Lab 同步学习。

## 课程资源

- 课程网站：<https://ocw.mit.edu/courses/6-004-computation-structures-spring-2017/>
- 课程视频：<https://www.youtube.com/playlist?list=PLUl4u3cNGP62WVs95MNq3dQBqY2vGOtQ2>
- 课程教材：《Digital Design and Computer Architecture》David Harris & Sarah Harris，第 2 版（MIT 课程自编讲义亦可从 OCW 下载）
- 课程作业：MIT OCW 课程页面（含完整 Lab 材料与习题集）

## B 站配套资源

- Neso Academy Digital Electronics（150+ 讲，YouTube + B 站）：详见独立页面 [Neso Academy: Digital Electronics](neso_digital.md)
- MIT 6.004 2019 年版课程录像搬运：B 站搜索"MIT 6.004 Computation Structures"可找到多个版本

## 其他推荐资源

- **Neso Academy Digital Electronics**（YouTube）：<https://www.youtube.com/playlist?list=PLBlnK6fEyqRjMH3mWf6kwqiTbT798eAOm>，共 150+ 集，从逻辑门到存储器系统，系统性极强，适合零基础补充
- **NPTEL Digital Circuits（IIT Kharagpur，Prof. Goutam Saha）**：NPTEL 官网 <https://nptel.ac.in/> 搜索"Digital Circuits and Systems"，共 40 讲，印度理工学院教学风格严谨，推导详细
- **中国大学 MOOC 数字电路与逻辑设计**：多所国内高校在中国大学 MOOC 平台开设，语言友好，与复旦课程内容高度吻合，适合期末复习

## 前置学习建议

1. 确保掌握基本的布尔代数与二进制运算（高中数学已足够）
2. 建议先完成 [HDLBits](../../../硬件描述语言(HDL)/Verilog/HDLBits.md) 前几章，熟悉 Verilog 基础语法，再上手 6.004 的 Lab
3. 如需中文视频补充，可先看 B 站 Neso Academy 系列的前 30 讲（门电路 → 组合逻辑），再进入 MIT 6.004 的流水线与存储器章节
