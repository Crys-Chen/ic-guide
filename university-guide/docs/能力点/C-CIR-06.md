# 数字集成电路

- 能力 ID：`C-CIR-06`
- 类型：公共能力
- 修读要求：公共推荐
- 建议窗口：IC 公共核心（可按兴趣提前或延后）
- 所属领域：电路与信号
- 参考投入：26 小时（不是学期配额）
- 先修能力：[数字逻辑](./C-CIR-03.md)、[半导体器件](./C-PHY-04.md)

## 学习成果

- 能分析 CMOS 反相器与组合、时序、存储单元的延迟、功耗和噪声裕量
- 能使用逻辑努力、尺寸设计和互连模型进行基础优化
- 能从 RTL、门级到版图后结果解释实现差异

## 验收

### 产物

一个标准单元小库的晶体管级设计与表征报告，含延迟、功耗和版图检查

### 合格标准

至少含反相器和 3 个不同逻辑单元；每个单元在不少于 3 个负载和 3 个 PVT 角下完成延迟/功耗表征；DRC 与 LVS 零错误，表征脚本重复运行差异不超过 1%。

## 视频资源

`视频时长` 是本能力点建议观看章节的合计，不是整门公开课的总时长。

### 主资源：VLSI Design

- 教师/机构：A. N. Chandorkar · Indian Institute of Technology Bombay
- 平台与入口：NPTEL · [打开资源](https://nptel.ac.in/courses/117101058)
- 来源类型：`official_national_course`
- 建议章节：Lectures 1–12: MOS review, CMOS inverter, static characteristics, delay and basic combinational gates
- 语言/字幕：English / English
- 建议观看时长：约 6.0 小时
- 编辑评分：<span class="resource-score">91/100</span>
- 评分分项：匹配 30/30 · 来源 20/20 · 深度 19/20 · 实践 10/15 · 可访问 8/10 · 呈现 4/5
- 推荐理由：从 CMOS 器件到逻辑、时序和版图的路径完整，能把数字功能与晶体管级代价联系起来。
- 配套材料：逐讲视频、课程目录和参考资料。
- 建议练习：表征反相器与一个组合门的延迟、功耗和噪声裕量，并完成版图检查。
- 核验日期：2026-08-10

### 备选资源：Low Power VLSI Circuits and Systems

- 教师/机构：Ajit Pal · Indian Institute of Technology Kharagpur
- 平台与入口：NPTEL · [打开资源](https://nptel.ac.in/courses/106105034)
- 来源类型：`official_national_course`
- 建议章节：Lectures 2–21 and 27–35: MOS/CMOS logic, memories, dynamic/leakage power and low-power techniques
- 语言/字幕：English / English
- 建议观看时长：约 14.5 小时
- 编辑评分：<span class="resource-score">84/100</span>
- 评分分项：匹配 27/30 · 来源 20/20 · 深度 17/20 · 实践 8/15 · 可访问 8/10 · 呈现 4/5
- 推荐理由：以功耗为主轴重访数字 IC 单元，适合完成基础设计后建立能效优化视角。
- 配套材料：逐讲视频、课程大纲及教程讲次。
- 建议练习：对一个 CMOS 数据通路估算动态与泄漏功耗，并验证两种降低功耗策略的代价。
- 核验日期：2026-08-10
