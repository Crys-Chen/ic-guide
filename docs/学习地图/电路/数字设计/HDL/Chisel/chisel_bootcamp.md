# Chisel Bootcamp

## 课程简介

- 所属大学：UC Berkeley（开源社区维护）
- 先修要求：Verilog/VHDL 基础 + 至少一门面向对象/函数式编程语言（Python/Java/C++ 均可）
- 编程语言：Chisel（基于 Scala）
- 课程难度：🌟🌟🌟🌟
- 预计学时：40～60 小时

Chisel（Constructing Hardware In a Scala Embedded Language）是由 UC Berkeley 开发的新一代硬件构建语言，已在 RISC-V 生态系统中被大量采用，Rocket Chip、BOOM 乱序处理器、Chipyard SoC 框架等知名项目均以 Chisel 编写。与传统 Verilog 相比，Chisel 提供了更强的参数化与抽象能力——可以将硬件电路的设计提升到“**生成器**（Generator）”层面，通过函数、类和继承来描述可复用的硬件模板，大幅减少重复代码并提升设计复用性。

Chisel Bootcamp 是官方推荐的入门材料，以 **Jupyter Notebook** 形式组织，共 4 个模块：

- **Module 1**：Scala 基础语法（函数式编程 + 面向对象）
- **Module 2**：Chisel 核心概念（组合逻辑、时序逻辑、模块化）
- **Module 3**：硬件生成器设计模式（参数化、函数式硬件描述、类型系统）
- **Module 4**：FIRRTL 中间表示与工具链集成简介

所有 Notebook 均可通过 **Google Colab** 在浏览器中直接运行，无需在本地安装 Scala 或 EDA 工具即可验证代码，极大降低了上手门槛。

## 课程资源

- 课程仓库：<https://github.com/freechipsproject/chisel-bootcamp>
- 在线运行（Google Colab）：点击仓库 README 中的 launch 徽章即可直接运行
- Chisel 官方文档：<https://www.chisel-lang.org/docs>
- 相关实践项目（Rocket Chip）：<https://github.com/chipsalliance/rocket-chip>
- Chipyard SoC 框架：<https://github.com/ucb-bar/chipyard>
- 课程视频：无（以 Notebook 形式自学）
- 课程作业：Notebook 内嵌练习题，即写即验证
