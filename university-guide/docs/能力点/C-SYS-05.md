# 计算机体系结构

- 能力 ID：`C-SYS-05`
- 类型：公共能力
- 修读要求：公共推荐
- 建议窗口：IC 公共核心（可按兴趣提前或延后）
- 所属领域：软件与系统
- 参考投入：24 小时（不是学期配额）
- 先修能力：[计算机组成](./C-SYS-03.md)、[操作系统](./C-SYS-04.md)

## 学习成果

- 能量化流水线、缓存、分支预测、乱序与并行对性能的影响
- 能使用 CPI、加速比、带宽和能效比较体系结构方案
- 能从工作负载和测量数据提出可验证的微体系结构改进

## 验收

### 产物

一份基于模拟器或性能计数器的缓存与流水线设计空间探索报告

### 合格标准

至少使用 5 个工作负载并扫描 3 个以上体系结构参数；每个配置重复不少于 3 次并报告离散度；所有性能结论可由 CPI、命中率、带宽或能效数据直接追溯。

## 视频资源

`视频时长` 是本能力点建议观看章节的合计，不是整门公开课的总时长。

### 主资源：Advanced Computer Architecture

- 教师/机构：Smruti R. Sarangi · Indian Institute of Technology Delhi
- 平台与入口：NPTEL · [打开资源](https://nptel.ac.in/courses/106102229)
- 来源类型：`official_national_course`
- 建议章节：Weeks 1–4: pipeline review, out-of-order fetch/decode, issue, execute and commit
- 语言/字幕：English / English
- 建议观看时长：约 8.0 小时
- 编辑评分：<span class="resource-score">92/100</span>
- 评分分项：匹配 30/30 · 来源 20/20 · 深度 20/20 · 实践 10/15 · 可访问 8/10 · 呈现 4/5
- 推荐理由：从现代处理器前端到存储、一致性和能效覆盖完整，持续用性能模型解释微体系结构选择。
- 配套材料：分周视频、课程计划和平台作业信息。
- 建议练习：用模拟器改变分支预测与缓存参数，报告 CPI、命中率、能耗代理量和敏感性。
- 核验日期：2026-08-10

### 备选资源：Computer Organization and Architecture

- 教师/机构：V. Kamakoti · Indian Institute of Technology Madras
- 平台与入口：NPTEL · [打开资源](https://nptel.ac.in/courses/106106166)
- 来源类型：`official_national_course`
- 建议章节：Weeks 6–12: pipelines, hazards, branch prediction, virtual memory, caches and coherence
- 语言/字幕：English / English
- 建议观看时长：约 14.0 小时
- 编辑评分：<span class="resource-score">85/100</span>
- 评分分项：匹配 28/30 · 来源 20/20 · 深度 17/20 · 实践 8/15 · 可访问 8/10 · 呈现 4/5
- 推荐理由：以较慢节奏重访流水线、虚拟内存、缓存和一致性，并含静态/动态调度与实验讲次。
- 配套材料：分周视频、实验讲次、课程大纲和作业信息。
- 建议练习：分析一组流水线 hazard 和缓存 trace，并比较两种分支预测与缓存组织。
- 核验日期：2026-08-10
