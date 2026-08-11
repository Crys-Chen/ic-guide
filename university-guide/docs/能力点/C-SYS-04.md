# 操作系统

- 能力 ID：`C-SYS-04`
- 类型：公共能力
- 修读要求：公共推荐
- 建议窗口：IC 公共核心（可按兴趣提前或延后）
- 所属领域：软件与系统
- 参考投入：24 小时（不是学期配额）
- 先修能力：[数据结构与算法](./C-SYS-02.md)、[计算机组成](./C-SYS-03.md)

## 学习成果

- 能解释进程、线程、系统调用、虚拟内存、文件系统和设备抽象
- 能使用锁、信号量和条件变量分析并发正确性
- 能通过内核实验追踪调度、异常与资源管理路径

## 验收

### 产物

一组 xv6 或教学内核实验，至少实现一个系统调用和一个并发或内存功能

### 合格标准

新系统调用含正常、非法参数和并发测试；并发压力测试连续运行 1000 轮无死锁、竞态或资源泄漏；干净源码树可构建启动且原有回归测试全通过。

## 视频资源

`视频时长` 是本能力点建议观看章节的合计，不是整门公开课的总时长。

### 主资源：Introduction to Operating Systems

- 教师/机构：Chester Rebeiro · Indian Institute of Technology Madras
- 平台与入口：NPTEL · [打开资源](https://nptel.ac.in/courses/106106144)
- 来源类型：`official_national_course`
- 建议章节：Weeks 1–4: OS overview, processes, virtual memory, system calls, interrupts and context switching
- 语言/字幕：English / English
- 建议观看时长：约 8.0 小时
- 编辑评分：<span class="resource-score">91/100</span>
- 评分分项：匹配 30/30 · 来源 20/20 · 深度 18/20 · 实践 11/15 · 可访问 8/10 · 呈现 4/5
- 推荐理由：以 xv6 为共同实现参照，从 PC 启动、异常到资源管理逐层展开，硬件与内核接口尤其适合 IC 学生。
- 配套材料：分周视频、讲次目录、大纲和 NPTEL 作业信息。
- 建议练习：在 xv6 中增加一个系统调用，并完成一个锁或调度实验及并发正确性说明。
- 核验日期：2026-08-10

### 备选资源：Operating System

- 教师/机构：Sorav Bansal · Indian Institute of Technology Delhi
- 平台与入口：NPTEL · [打开资源](https://nptel.ac.in/courses/106102132)
- 来源类型：`official_national_course`
- 建议章节：Core modules: processes/threads, synchronization, memory management, file systems and I/O
- 语言/字幕：English / English
- 建议观看时长：约 20.0 小时
- 编辑评分：<span class="resource-score">84/100</span>
- 评分分项：匹配 27/30 · 来源 20/20 · 深度 17/20 · 实践 8/15 · 可访问 8/10 · 呈现 4/5
- 推荐理由：从设计和实现角度覆盖传统 OS 核心模块，适合作为 xv6 主线之外的第二套系统化讲解。
- 配套材料：NPTEL 视频课程、课程大纲与配套说明。
- 建议练习：写两个线程程序演示竞态与修复，并跟踪一次缺页到页表更新的完整路径。
- 核验日期：2026-08-10
