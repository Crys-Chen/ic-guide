# ASIC 实现、时序与低功耗

- 能力 ID：`DIG-03`
- 类型：专业能力
- 修读要求：路线推荐
- 建议窗口：方向探索与深化（可按兴趣提前或延后）
- 所属领域：数字与可重构计算
- 参考投入：28 小时（不是学期配额）
- 先修能力：[RTL 设计与 FPGA 实现](./DIG-01.md)、[数字验证与形式化基础](./DIG-02.md)、[计算机组成](./C-SYS-03.md)

## 学习成果

- 执行综合、静态时序分析、布局布线、CTS 和签核的开源流程
- 解释 setup/hold、时钟偏斜、OCV、拥塞与寄生对收敛的影响
- 进行动态/漏电功耗分析并应用门控、尺寸或结构优化

## 验收

### 产物

一个小型 RTL 模块的可复现 RTL-to-GDS 流程和 PPA 对比报告

### 合格标准

严格约束下无 setup/hold 违例，并量化至少两轮优化对 PPA 的影响

## 视频资源

`视频时长` 是本能力点建议观看章节的合计，不是整门公开课的总时长。

### 主资源：VLSI Design Flow: RTL to GDS

- 教师/机构：Sneh Saurabh · IIIT Delhi
- 平台与入口：NPTEL · [打开资源](https://nptel.ac.in/courses/108106191)
- 来源类型：`official_university_course`
- 建议章节：第 7 周 4 单元 STA/OpenSTA；第 8 周 5 单元 constraints、mapping 与 timing-driven optimization；第 9 周 3 个功耗分析/优化单元；第 11–12 周 8 个 floorplan、placement、CTS、routing 与 signoff 单元
- 语言/字幕：English / English（NPTEL 字幕/转写）
- 建议观看时长：约 10 小时
- 编辑评分：<span class="resource-score">94/100</span>
- 评分分项：匹配 30/30 · 来源 20/20 · 深度 18/20 · 实践 13/15 · 可访问 9/10 · 呈现 4/5
- 推荐理由：覆盖实现全链并提供开源工具实操，能直接产出可复现 RTL-to-GDS 项目。
- 配套材料：开源工具教程、讲义、实验与作业
- 建议练习：用 OpenSTA/OpenROAD 把小型 RTL 推到 GDS 并完成 PPA 优化
- 核验日期：2026-08-10

### 备选资源：VLSI Physical Design with Timing Analysis

- 教师/机构：Bishnu Prasad Das · IIT Roorkee
- 平台与入口：NPTEL · [打开资源](https://nptel.ac.in/courses/108107380)
- 来源类型：`official_university_course`
- 建议章节：第 7–18 讲 STA、skew/jitter/OCV/CRPR；第 59–60 讲 OpenROAD Physical Synthesis Flow
- 语言/字幕：English / English（NPTEL 字幕/转写）
- 建议观看时长：约 7 小时
- 编辑评分：<span class="resource-score">86/100</span>
- 评分分项：匹配 29/30 · 来源 20/20 · 深度 17/20 · 实践 8/15 · 可访问 8/10 · 呈现 4/5
- 推荐理由：对 STA 的覆盖明显更深，是实现主线中时序收敛部分的优质专题补充。
- 配套材料：讲义、OpenSTA/OpenROAD 演示与测验
- 建议练习：用 OpenSTA 分析 setup/hold、OCV 和时钟不确定性
- 核验日期：2026-08-10
