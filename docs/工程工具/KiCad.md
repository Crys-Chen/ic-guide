# KiCad PCB 设计

## 是什么

KiCad 是**免费开源**的电子设计自动化（EDA）工具，提供从原理图到 PCB 布局的完整流程。它是 Altium Designer 的主流免费替代品，被 CERN 等机构采用并持续维护，稳定性和功能已足够应对大多数科研和课程项目。

## 工具链组成

| 模块 | 功能 |
|---|---|
| KiCad Schematic (Eeschema) | 原理图绘制 |
| PCB Editor (Pcbnew) | PCB 布局与布线 |
| Symbol/Footprint Editor | 自定义器件库 |
| 3D Viewer | 查看 PCB 三维效果 |
| Gerber Viewer | 检查送厂文件 |

## 下载

官网：[kicad.org](https://www.kicad.org/download/)，支持 Windows / macOS / Linux，免费。

## 适合什么项目

- **课程实验**：MCU 最小系统板、传感器采集板
- **科研硬件**：自制测量电路、植入式设备原型
- **竞赛项目**：FPGA 开发板、电赛硬件平台
- **毕业设计**：包含 PCB 的硬件系统

!!! note "打样推荐"
    设计完成后，可在嘉立创（JLC）打样，2 层板 10 片约 ¥5，通常 3 天到货。KiCad 可直接导出嘉立创所需的 Gerber 文件。

## 课程资源

- **官方文档**：[docs.kicad.org](https://docs.kicad.org/)（英文）
- **Phil's Lab**（YouTube）：高质量 KiCad 入门系列，从原理图到打样全流程
- **嘉立创 EDA**：若更熟悉中文界面，嘉立创提供的在线 EDA 工具（基于 KiCad 技术栈）也是不错的起点

## 设计流程概述

```
原理图 (Eeschema)
   ↓  网表导出
PCB 布局 (Pcbnew)
   ↓  DRC 检查
Gerber 导出
   ↓
PCB 打样 (嘉立创/华秋)
```

## 与商业工具对比

| 工具 | 价格 | 优点 | 场景 |
|---|---|---|---|
| KiCad | 免费 | 功能完整，社区活跃 | 学生/科研项目 |
| Altium Designer | 昂贵 | 功能最强，业界标准 | 工业产品 |
| Cadence Allegro | 昂贵 | 高速 PCB、信号完整性 | 企业高端板卡 |
| 嘉立创 EDA | 免费 | 在线协作，与打样无缝对接 | 国内轻量项目 |
