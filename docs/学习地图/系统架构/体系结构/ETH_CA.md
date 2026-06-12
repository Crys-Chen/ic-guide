# ETH: Computer Architecture

*注：本课程页继承自 [CS自学指南](https://csdiy.wiki/%E4%BD%93%E7%B3%BB%E7%BB%93%E6%9E%84/CA/)。*

## 课程简介

- 所属大学：ETH Zurich
- 先修要求：[DDCA](https://csdiy.wiki/%E4%BD%93%E7%B3%BB%E7%BB%93%E6%9E%84/DDCA/)
- 编程语言：C/C++，verilog
- 课程难度：🌟🌟🌟🌟
- 预计学时：70 小时 +

讲解计算机体系结构，授课教师是 Onur Mutlu 教授。本课程根据课程描述应该是[DDCA](https://csdiy.wiki/%E4%BD%93%E7%B3%BB%E7%BB%93%E6%9E%84/DDCA/)的进阶课程，课程目标是学习如何为类MIPS处理器设计控制和数据通路硬件，如何通过流水线和简单的超标量执行使机器指令同时执行，以及如何设计快速的内存和存储系统。根据同学反馈，从课程本身的难度上说，至少高于 CS61C ，课程的部分内容十分前沿，B站搬运UP主建议大家作为卡内基梅隆大学18-447的补充。所提供的阅读材料十分丰富，相当于听了一学期讲座。

以下是官网的介绍：
>We will learn the fundamental concepts of the different parts of modern computing systems, as well as the latest major research topics in Industry and Academia. We will extensively cover memory systems (including DRAM and new Non-Volatile Memory technologies, memory controllers, flash memory), new paradigms like processing-in-memory, parallel computing systems (including multicore processors, coherence and consistency, GPUs), heterogeneous computing, interconnection networks, specialized systems for major data-intensive workloads (e.g. graph analytics, bioinformatics, machine learning), etc. We will focus on fundamentals as well as cutting-edge research. Significant attention will be given to real-life examples and tradeoffs, as well as critical analysis of modern computing systems.

编程实践采取 Verilog 设计和模拟类 MIPS 流水线处理器的寄存器传输（RT）实现，以此加强对理论课程的理解。因此前几个实验会有 verilog 的 CPU 流水线编程。同时还将使用C语言开发一个周期精确的处理器模拟器，并使用该模拟器探索处理器设计选项。

## 课程资源

- 课程网站：[2020 Fall](https://safari.ethz.ch/architecture/fall2022/doku.php?id=start), [2022 Fall](https://safari.ethz.ch/architecture/fall2022/doku.php?id=start)
- 课程视频：官方视频详见课程网站。B站有个[2020年版本搬运](https://www.bilibili.com/video/BV1Vf4y1i7YG/?vd_source=77d47fcb2bac41ab4ad02f265b3273cf)。
- 课程教材：无指定教材，每个 lecture 都有大量文献可供阅读
- 课程作业：5 个 Project ，大多与内存和cache相关，具体内容见[课程网站的lab界面](https://safari.ethz.ch/architecture/fall2022/doku.php?id=labs)
