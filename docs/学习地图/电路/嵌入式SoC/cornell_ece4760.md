# Cornell ECE 4760: Designing with Microcontrollers

## 课程简介

- 所属大学：Cornell University
- 先修要求：数字逻辑基础、C 语言
- 编程语言：C(嵌入式)
- 任课教师：Bruce Land
- 课程难度：🌟🌟🌟🌟
- 预计学时：约 60-80 学时

Cornell ECE 4760 是公认最经典的本科**嵌入式系统设计**课之一,由 Bruce Land 在 Cornell 讲了二十多年。课程围绕 ATmega 系列 / PIC32 / RP2040 等微控制器,教学生如何在小到几 KB 内存的芯片上**手写 C 实现实时系统**——从 GPIO/PWM/ADC 这些基础外设,到串口/I2C/SPI 协议,再到 RTOS 调度、DSP、FFT、视频生成、音频合成等高阶话题。

最有特色的是 **Final Project 文化**:每年学生分组用单片机做奇思妙想的项目——电子乐器、自走小车、心电仪、激光琴、视频游戏机——所有项目报告 + 视频 + 代码都开源在课程网站。Bruce Land 退休前积累了上千个项目,是嵌入式入门最丰富的灵感库。

对 ECE/微电子学生来说,**这门课填补了"数字 IC 设计"和"系统应用"之间的鸿沟**——你学了 Verilog 写处理器,但不会用现成芯片做一个能用的产品;ECE 4760 正是教这部分。

## 学习地图

- 课程网站：<https://people.ece.cornell.edu/land/courses/ece4760/>
- 课程视频：Bruce Land YouTube 频道 <https://www.youtube.com/user/ece4760> 有大部分讲座录像
- 课程教材：无指定教材,讲义自包含
- 课程作业：网站完整公开 9 个 Lab + 历年所有 Final Project 报告/代码/视频
- 硬件：
  - 当前版本(2020 后)使用 **Raspberry Pi Pico (RP2040)**
  - 经典版本使用 ATmega1284 / PIC32MX,讲义保留可参考

## 同领域其他名课

- **CMU 18-349: Embedded Real-Time Systems** — 偏 RTOS 与系统级,概念更理论
- **UT Austin EE445L** (Jonathan Valvano) — TI Tiva/MSP432 微控制器,实验非常工程化
- **MIT 6.S08: Interconnected Embedded Systems** — 偏 IoT 方向,涉及通信协议

## 备注

- ECE 4760 几年前从 ATmega 全面切换到 RP2040(Pi Pico),价格便宜($4)、双核 Cortex-M0+、PIO 状态机非常 hacker-friendly,**是目前嵌入式入门最适合的硬件平台之一**
- 国内学生可在淘宝买 Pi Pico 开发板自学,Lab 1-9 都可以独立完成,不需要校内实验室
- 学完这门课后,推荐再看 [复旦韩军老师嵌入式课程](junhan.md) 了解 RISC-V SoC 集成实战
