# ETH Zürich：Heterogeneous Systems（HetSys）

## 课程简介

- 所属大学：ETH Zürich
- 授课教师：Juan Gómez-Luna、Onur Mutlu
- 先修要求：体系结构基础（流水线、缓存）、C++ / CUDA 基础
- 课程难度：🌟🌟🌟🌟
- 预计学时：约 30 讲（2023 版）

**架构与编程并重的 GPU 深度课。** 课程覆盖 SIMT 执行模型的硬件实现（warp 调度策略、分支分歧代价）、访存合并（coalescing）原理与性能分析、共享内存 bank conflict、L1/L2 缓存与 HBM 的微架构细节、CUDA 内存模型与同步原语。Mutlu 是体系结构顶会 ISCA/MICRO 的高产研究者，课程注重"为什么这样设计"的系统性推导，而非单纯 API 使用。

配合 CS149（并行编程模型）食用：CS149 教怎么写 CUDA，这门课教写的代码在硬件里究竟发生了什么。

## 学习地图

- 课程视频（YouTube 2023）：[HetSys 2023 Playlist](https://www.youtube.com/playlist?list=PL5Q2soXY2Zi-qSKahS4ofaEwYl7_qp9mw)
- 课程主页：[SAFARI P&S Heterogeneous Systems (Spring 2023)](https://safari.ethz.ch/projects_and_seminars/spring2023/doku.php?id=heterogeneous_systems)
