# 电路与器件仿真

- 能力 ID：`C-ENG-02`
- 类型：公共能力
- 修读要求：公共推荐
- 建议窗口：综合创作与迁移（可按兴趣提前或延后）
- 所属领域：工程与科研
- 参考投入：20 小时（不是学期配额）
- 先修能力：[C 与 Python 编程](./C-SYS-01.md)、[电路分析](./C-CIR-01.md)、[半导体器件](./C-PHY-04.md)

## 学习成果

- 能建立 SPICE 模型并设置 DC、AC、瞬态、噪声和参数扫描
- 能区分模型、数值设置和电路本身导致的异常结果
- 能保存网表、模型、版本与脚本以支持复现

## 验收

### 产物

一套含网表、模型来源、参数扫描、收敛诊断和结果解释的 SPICE 实验

### 合格标准

DC、AC、瞬态、噪声和参数扫描均可由脚本重跑；关键工作点与手算相差不超过 10%；日志无未解释的收敛警告，模型文件来源、版本和温度完整记录。

## 视频资源

`视频时长` 是本能力点建议观看章节的合计，不是整门公开课的总时长。

### 主资源：Getting Started with LTspice

- 教师/机构：Analog Devices LTspice applications team · Analog Devices
- 平台与入口：Analog Devices Media Center · [打开资源](https://www.analog.com/en/resources/media-center/videos/6344562474112.html)
- 来源类型：`official_vendor_training`
- 建议章节：Full seminar: schematic capture, component libraries, probing, measurements and transient simulation
- 语言/字幕：English / English
- 建议观看时长：约 1.0 小时
- 编辑评分：<span class="resource-score">88/100</span>
- 评分分项：匹配 30/30 · 来源 19/20 · 深度 15/20 · 实践 10/15 · 可访问 9/10 · 呈现 5/5
- 推荐理由：由 LTspice 开发方演示从原理图到波形的完整操作，入口清晰且避免第三方教程的版本和菜单偏差。
- 配套材料：官方视频、示例/参考设计库和 LTspice 帮助资源。
- 建议练习：建立 RC 与晶体管放大器，分别运行 DC、参数扫描和瞬态分析并保存可复现文件。
- 核验日期：2026-08-10

### 备选资源：How to Use LTspice for AC and Noise Analysis

- 教师/机构：Analog Devices LTspice applications team · Analog Devices
- 平台与入口：Analog Devices Media Center · [打开资源](https://www.analog.com/en/resources/media-center/videos/video-series/ltspice-ac-noise-analysis-tutorial.html)
- 来源类型：`official_vendor_training`
- 建议章节：Video series: AC analysis setup, Bode plots, input/output noise and result interpretation
- 语言/字幕：English / English
- 建议观看时长：约 0.6 小时
- 编辑评分：<span class="resource-score">80/100</span>
- 评分分项：匹配 27/30 · 来源 19/20 · 深度 13/20 · 实践 7/15 · 可访问 9/10 · 呈现 5/5
- 推荐理由：聚焦最容易设置错误的 AC 与噪声分析，可在入门后作为精确补充和排错参考。
- 配套材料：官方分集视频与相关 LTspice 技术资源。
- 建议练习：对同一放大器提取增益带宽、相位裕度、输出噪声和输入等效噪声并解释设置。
- 核验日期：2026-08-10
