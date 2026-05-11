# ModelSim / QuestaSim HDL 仿真

## 是什么

ModelSim（现更名为 **QuestaSim**，由 Siemens EDA / Mentor Graphics 出品）是业界最广泛使用的 HDL 功能仿真工具，支持 Verilog、SystemVerilog、VHDL 和混合语言仿真。

对于数字 IC、FPGA 设计和芯片验证工程师来说，HDL 仿真是必备技能。ModelSim 是高校教学和入门练习的主要选择，Questa 是企业级验证标准工具。

## 常见版本

| 版本 | 适用场景 | 获取方式 |
|---|---|---|
| ModelSim PE Student Edition | 学生/个人学习 | Intel/Quartus 内置或单独免费下载 |
| ModelSim Intel Starter | FPGA 学习（与 Quartus 集成） | 随 Intel Quartus Prime 免费安装 |
| Questa SIM | 企业/科研芯片验证 | 授权购买（学校服务器通常有） |
| Vivado Simulator (XSim) | Xilinx FPGA 仿真 | Vivado 内置，无需额外安装 |

!!! tip "FPGA 学生建议"
    如果你使用 Xilinx FPGA（Vivado），直接用内置的 **XSim** 即可，不需要额外安装 ModelSim。
    如果用 Intel FPGA（Quartus），使用 **ModelSim Intel Starter Edition**。

## 核心工作流

```
1. 编写 DUT (Design Under Test) — Verilog/SV 文件
2. 编写 testbench — 提供激励，验证输出
3. 编译 (vlog / vcom)
4. 启动仿真 (vsim)
5. 用 wave 窗口观察波形
6. 用 $display / assertion 检查结果
```

## 快速上手

### 命令行仿真（不依赖 GUI）

```bash
vlog design.v testbench.v      # 编译 Verilog
vsim -c tb_top -do "run -all; quit"  # 命令行跑仿真
```

### GUI 仿真（推荐入门）

1. 打开 ModelSim → File → New → Project
2. 添加源文件 → Compile → Compile All
3. Simulate → Start Simulation → 选择 testbench 顶层
4. 在 Wave 窗口拖入需要观察的信号 → Run All

## 学习资源

- **Verification Guide**（免费电子书，系统介绍 SystemVerilog + UVM）：[verificationguide.com](https://www.verificationguide.com/)
- **Doulos Verilog/SystemVerilog 教程**：工业界质量的免费教程
- **HDLBits**：在浏览器里练习 Verilog，无需安装工具：[hdlbits.01xz.net](https://hdlbits.01xz.net/wiki/Main_Page)
- 复旦课程：《数字集成电路设计原理》实验中会使用 VCS / ModelSim

## 进阶：芯片验证（SV + UVM）

```
Verilog → SystemVerilog → UVM 方法学
                                  ↓
                     Constrained Random Verification
                     Functional Coverage
                     Formal Verification
```

芯片验证工程师（Verification Engineer）是 IC 行业需求量最大的岗位之一，核心技能就是 SystemVerilog + UVM + 仿真工具（Questa/VCS）。
