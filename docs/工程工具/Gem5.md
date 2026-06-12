# gem5 体系结构仿真

## 是什么

[gem5](https://www.gem5.org/) 是计算机体系结构研究领域**最广泛使用的开源全系统仿真器**,起源于 Michigan/Wisconsin 的 m5 + GEMS 合并项目,现由 ARM、AMD、Google 等多家公司和高校共同维护。

它支持 X86、ARM、RISC-V、SPARC、MIPS、Power 等多种 ISA,可以仿真从单核到多核异构、含完整内存层次结构(L1/L2/L3 + DRAM 控制器)、互联网络(NoC)甚至硬盘/网卡的整个系统——既能跑 micro-benchmark,也能完整启动 Linux。

## 适合谁

- **做处理器架构研究的同学**:ISCA/MICRO/HPCA 论文里超过一半的实验都是 gem5 跑的
- **做存储/Cache 设计的同学**:Ruby 内存子系统模型粒度足够细,可以加新一致性协议或新缓存策略
- **做 AI 加速器的同学**:gem5 集成了 SST、Garnet,可以仿真 chiplet 互联和加速器
- **做软硬件协同的同学**:Full System 模式可以跑真实 Linux + 应用,观测 OS 如何与硬件交互

## 课程资源

### 官方入口

- **官网首页**: <https://www.gem5.org/>
- **代码仓库**: <https://github.com/gem5/gem5>
- **官方文档**: <https://www.gem5.org/documentation/> ── 包含 First Steps、Learning gem5、API 参考
- **Slack 社区**: 官网首页有邀请链接,问问题响应快

### 教程与课程(强烈推荐)

- **gem5 Bootcamp 2024**(UC Davis,Jason Lowe-Power 主讲): <https://gem5bootcamp.github.io/2024/> ── 视频 + Lab,从环境搭建讲到自定义 CPU 模型,**入门首选**
- **Learning gem5**(官方教程): <https://www.gem5.org/documentation/learning_gem5/introduction/> ── 文字版分章节教程,涵盖 SimObject、Cache、Memory、Full System 五个模块
- **MICRO 2017 gem5 Tutorial 录像**: 在 YouTube 搜 “gem5 tutorial MICRO” 即可找到
- **Computer Architecture: A Quantitative Approach (6th ed.)** 配套实验里大量使用 gem5

### 中文资料

- 中科院计算所、清华、浙大等多个组的 gem5 教程博客(B 站搜 “gem5 教程” 有几十个视频)
- 国内常见入门路径: 先跑通 SE 模式(用户态指令仿真) → 再尝试 FS 模式(全系统启动 Linux)

## 入门三步走

1. **安装**: 在 Ubuntu/Mac 上 `apt install scons python3-dev` 后,克隆仓库 `scons build/X86/gem5.opt -j8` 编译,大约 10-30 分钟
2. **跑通官方 hello world**: `./build/X86/gem5.opt configs/learning_gem5/part1/simple.py` ── 仿真一个最简 CPU 跑 hello 程序,验证安装无误
3. **跟着 Bootcamp 做 Lab**: gem5 Bootcamp 的 Lab 1-5 涵盖修改流水线、加 Cache、跑 SPEC benchmark 等核心技能,完成后能独立做小型架构实验

## 注意事项

- gem5 不是 cycle-accurate 的工业级仿真器(那是 Synopsys ZeBu/Cadence Palladium 的事),它是**research-grade timing simulator**——保证趋势正确,具体周期数仅供横向对比
- 修改源码需要 C++ + Python(SimObject 用 Python 描述参数,实现用 C++)
- 全系统(FS)模式磁盘镜像准备较麻烦,建议先用社区现成的 ARM/RISC-V Ubuntu 镜像
- 跑大 benchmark 慢(几亿条指令可能要跑几小时),要预留时间或用 KVM-based fast forward
