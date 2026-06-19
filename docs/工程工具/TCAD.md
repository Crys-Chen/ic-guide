# TCAD 器件工艺仿真

## 是什么

TCAD（Technology Computer-Aided Design）是**仿真半导体器件物理与制造工艺**的软件。核心功能分两块：

- **工艺仿真**：模拟离子注入、氧化、淀积、刻蚀等制造步骤，预测器件几何结构和掺杂分布
- **器件仿真**：给定结构，求解载流子输运方程，得到 I-V、C-V、漏电、击穿等特性

两者通常配合使用——先用工艺仿真建结构，再用器件仿真跑特性。主流工具：

| 工具 | 厂商 | 说明 |
|---|---|---|
| **Sentaurus TCAD** | Synopsys | 工业界与学界最广泛使用，工艺仿真（SProcess）+ 器件仿真（SDevice）一体 |
| **Silvaco ATLAS / ATHENA** | Silvaco | 另一大主流选项，部分高校有授权 |

## 适合谁用

做**器件物理**方向科研的人。典型场景：

- 设计新型 FinFET、GAA、TFET 等前沿器件结构
- 研究功率器件（SiC MOSFET、GaN HEMT）的击穿与导通特性
- 工艺参数优化（如栅氧厚度、沟道掺杂）而不用每次流片

## 快速上手

Sentaurus 的学习路径：

1. **SDE**（Sentaurus Structure Editor）：画器件几何结构 + 定义掺杂
2. **SProcess**：工艺流程仿真，输出结构文件
3. **SDevice**：器件电学仿真，输出 I-V 等曲线
4. **Inspect / Tecplot**：结果可视化

## 学习资源

- [Synopsys Sentaurus 官方文档](https://www.synopsys.com/silicon/tcad.html)（需授权账号）
- [Silvaco TCAD 官方教程](https://silvaco.com/tcad/)
- 复旦微电：《集成电路制造仿真模拟原理和应用》（ICSE30014）课内会用到

## 相关方向

- [半导体器件与先进工艺](../科研方向/半导体器件与先进工艺.md)
- [功率半导体与宽禁带器件](../科研方向/功率半导体与宽禁带器件.md)
