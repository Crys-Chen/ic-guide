# 数字验证与形式化基础

- 能力 ID：`DIG-02`
- 类型：专业能力
- 修读要求：路线推荐
- 建议窗口：方向探索与深化（可按兴趣提前或延后）
- 所属领域：数字与可重构计算
- 参考投入：24 小时（不是学期配额）
- 先修能力：[RTL 设计与 FPGA 实现](./DIG-01.md)、[操作系统](./C-SYS-04.md)

## 学习成果

- 建立参考模型、约束随机激励、断言和覆盖率闭环
- 区分仿真、等价检查与有界/符号模型检查的适用边界
- 对协议、流水线和跨时钟域缺陷进行定位与最小化复现

## 验收

### 产物

针对 DIG-01 设计的验证计划、断言集、覆盖率报告与缺陷日志

### 合格标准

证明关键安全/活性性质，达到声明的功能覆盖并注入至少五类可检测缺陷

## 视频资源

`视频时长` 是本能力点建议观看章节的合计，不是整门公开课的总时长。

### 主资源：VLSI Design Flow: RTL to GDS

- 教师/机构：Sneh Saurabh · IIIT Delhi
- 平台与入口：NPTEL · [打开资源](https://nptel.ac.in/courses/108106191)
- 来源类型：`official_university_course`
- 建议章节：第 3–6 周 functional verification、Icarus、formal verification I–IV、Yosys 与等价检查
- 语言/字幕：English / English（NPTEL 字幕/转写）
- 建议观看时长：约 8 小时
- 编辑评分：<span class="resource-score">91/100</span>
- 评分分项：匹配 29/30 · 来源 20/20 · 深度 17/20 · 实践 12/15 · 可访问 9/10 · 呈现 4/5
- 推荐理由：同一开源工具链内并列仿真与形式化验证，便于学生真正动手建立验证流程。
- 配套材料：Icarus/Yosys 实操、讲义、教程和周作业
- 建议练习：为一个 RTL 模块建立仿真、覆盖、形式化性质和等价检查闭环
- 核验日期：2026-08-10

### 备选资源：Advanced VLSI Design

- 教师/机构：D. K. Sharma、Sachin Patkar、Virendra Singh、A. N. Chandorkar · IIT Bombay
- 平台与入口：NPTEL · [打开资源](https://nptel.ac.in/courses/117101004)
- 来源类型：`official_university_course`
- 建议章节：L39–L42：VLSI Design Verification、Equivalence Checking 与 Model Checking
- 语言/字幕：English / English（NPTEL 字幕/转写）
- 建议观看时长：约 3 小时
- 编辑评分：<span class="resource-score">82/100</span>
- 评分分项：匹配 27/30 · 来源 20/20 · 深度 16/20 · 实践 7/15 · 可访问 8/10 · 呈现 4/5
- 推荐理由：四讲集中解释验证方法边界，适合在实践主课后形成清晰概念框架。
- 配套材料：逐讲视频与课程讲义
- 建议练习：为 FSM 编写性质并比较等价检查和模型检查输出
- 核验日期：2026-08-10
