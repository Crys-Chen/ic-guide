# LTspice 电路仿真

## 是什么

LTspice 是 Analog Devices（原 Linear Technology）发布的**免费 SPICE 仿真器**，业界最广泛使用的模拟电路仿真工具之一。支持 Windows 和 macOS，无需授权，启动即用。

对 IC/EE 学生来说，LTspice 几乎是“必装软件”——不管做模拟电路、电源管理还是射频前端，都少不了它。

## 能做什么

| 分析类型 | 典型用途 |
|---|---|
| DC 工作点 | 验证偏置电路 |
| AC 扫频 | 画 Bode 图、查增益裕度 |
| 瞬态 (TRAN) | 看波形、测建立时间 |
| 噪声分析 | 设计低噪声放大器 |
| 参数扫描 (.step) | 器件参数灵敏度分析 |
| 蒙特卡洛 | 工艺偏差影响评估 |

## 快速上手

1. **下载**：[analog.com/LTspice](https://www.analog.com/en/resources/design-tools-and-calculators/ltspice-simulator.html)（免费，无需注册）
2. **器件库**：软件自带 ADI/LT 全系列模型；其他厂商（TI、Infineon 等）提供 `.lib` / `.sub` 文件，手动导入即可
3. **学习资源**
    - LTspice 官方教程：Help → LTspice Help
    - [Aaronson's LTspice Tutorial](https://www.analog.com/en/resources/media-center/videos/series/ltspice.html)（ADI 官方视频系列）
    - B站搜索“LTspice 入门”有大量中文教程

## 常用快捷键

| 操作 | 快捷键 |
|---|---|
| 放置器件 | `P` |
| 导线 | `W` |
| 运行仿真 | `Ctrl+R` (或点击运行按钮) |
| 查看波形 | 点击节点/器件引脚 |
| 放大/缩小 | 鼠标滚轮 |

## 典型实验示例

```spice
* 共源放大器 DC 工作点
.model NMOS NMOS level=1 Vto=1 Kp=120u
M1 drain gate 0 0 NMOS W=10u L=1u
Vdd drain 0 DC 3.3
Vgs gate 0 DC 1.5
.op
.end
```

## 进阶：与 MATLAB/Python 联动

仿真结果可导出为 `.txt`（列格式），用 MATLAB 或 Python（matplotlib）进一步绘图分析，尤其适合写实验报告。
