# GPGPU-Sim GPU 仿真

## 是什么

[GPGPU-Sim](https://github.com/gpgpu-sim/gpgpu-sim_distribution) 是 UBC Tor Aamodt 教授组维护的**学术界最主流的 GPU 周期级仿真器**,精确建模 NVIDIA Fermi/Kepler/Pascal/Volta 等多代 GPU 微架构,支持 CUDA 和 OpenCL 工作负载,集成 GPUWattch 能耗模型。

GPU 架构论文(ISCA、MICRO、HPCA、ASPLOS 上的 GPU section)很大一部分实验是用 GPGPU-Sim 跑的——它和 gem5 一起构成了"CPU + GPU 异构架构研究"的两件标配工具。

## 适合谁

- **做 GPU 架构研究的同学**:warp scheduler、register file、L1/L2 cache、互联网络的设计点都可以改
- **做 AI 加速器/张量计算的同学**:可以在 GPGPU-Sim 基础上加 tensor core 模型或自定义计算单元
- **做 GPU 内存系统的同学**:HBM 控制器、L2 cache 替换策略、prefetching 都是常见研究点
- **做 GPU 编程/CUDA 优化的同学**:用 visualizer 看 occupancy、stall 原因,反过来指导 kernel 调优

## 课程资源

### 官方入口

- **GitHub**: <https://github.com/gpgpu-sim/gpgpu-sim_distribution>
- **官方手册**(架构 + 配置参数详解): <http://gpgpu-sim.org/manual/index.php/Main_Page>
- **MICRO 2012 教程幻灯片**: <http://gpgpu-sim.org/micro12-tutorial/> ── 入门必读
- **预配置 VM**(免编译跑通): <http://ece.ubc.ca/~taylerh/files/gpgpu-sim/gpgpu-sim.vm.tar.gz>
- **Google Group(社区问答)**: <https://groups.google.com/g/gpgpu-sim>

### Accel-Sim:GPGPU-Sim 的下一代

- **Accel-Sim**: <https://accel-sim.github.io/> ── UBC 团队的新一代仿真框架,支持 NVIDIA Volta/Turing/Ampere,SASS-driven 精度更高,**新研究优先选 Accel-Sim**

### 教程与课程

- **Tor Aamodt 的 ECE 4750/CS 4810 课程**(UBC,在线公开): GPU 架构课,作业用 GPGPU-Sim
- **CS 7810 GPU Architecture(Utah)**: 配套 GPGPU-Sim 实验
- **MICRO/ISCA 历年 GPU 论文** 大多以 GPGPU-Sim 作为基线

### 中文资料

- 中科院计算所、北大集成电路学院、上海交大、清华相关组都有内部教程
- B 站搜"GPGPU-Sim 教程",有几个完整的环境搭建到 cycle-level 分析的录播

## 入门三步走

1. **环境**: 用官方 VM(免编译,几小时上手)或本地编译(需 CUDA Toolkit 4.x-11.x,Ubuntu 16/18 较稳)。新手强烈建议先 VM
2. **跑通 GPU benchmark**: `cd gpgpu-sim_distribution && source setup_environment` 后 `make`,然后跑 NVIDIA SDK 自带的 vectorAdd 等示例,看 cycle 报告
3. **修改一个组件**: 例如改 warp scheduler(`src/gpgpu-sim/scheduler_unit.cc`)的轮询策略,对比 IPC 变化——这是大多数论文的"最小可发表实验"模板

## 注意事项

- GPGPU-Sim 维护放缓,**新课题优先考虑 Accel-Sim**(GPGPU-Sim 同一团队的继任,支持新 GPU 架构 + 真实 SASS 仿真)
- GPGPU-Sim 仿真速度慢(每秒约 1 万-10 万 instructions),大 benchmark 需要采样或 fast-forward
- GPUWattch 能耗模型的精度只对 Fermi/Kepler 验证过,新架构能耗结果仅供趋势参考
- 不要用它分析 tensor core/MIG/multi-GPU 等新特性——这些没建模(Accel-Sim 部分支持)
