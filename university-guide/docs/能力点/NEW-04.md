# 具身智能与边缘 AI 系统

- 能力 ID：`NEW-04`
- 类型：专业能力
- 修读要求：路线推荐
- 建议窗口：方向探索与深化（可按兴趣提前或延后）
- 所属领域：新型计算
- 参考投入：28 小时（不是学期配额）
- 先修能力：[数值方法与凸优化](./C-MATH-05.md)、[计算机体系结构](./C-SYS-05.md)

## 学习成果

- 串联感知、状态估计、规划、控制与学习的机器人闭环
- 分析模型预测控制、模仿/强化学习和视觉运动策略的适用边界
- 在边缘算力、实时性、能耗、安全和隐私约束下部署模型

## 验收

### 产物

仿真或小型平台上的感知-决策-控制闭环与边缘部署报告

### 合格标准

在至少三种扰动下报告成功率、延迟和能耗，并提供失败案例与安全停止机制

## 视频资源

`视频时长` 是本能力点建议观看章节的合计，不是整门公开课的总时长。

### 主资源：Underactuated Robotics

- 教师/机构：Russell Tedrake · Massachusetts Institute of Technology
- 平台与入口：MIT OpenCourseWare · [打开资源](https://ocw.mit.edu/courses/6-832-underactuated-robotics-spring-2009/video_galleries/video-lectures/)
- 来源类型：`official_university_course`
- 建议章节：第 5–10 讲动态规划、策略搜索、轨迹优化与稳定；第 14–18 讲规划、随机控制与强化学习；共 11 讲
- 语言/字幕：English / English transcript
- 建议观看时长：约 14 小时
- 编辑评分：<span class="resource-score">94/100</span>
- 评分分项：匹配 29/30 · 来源 20/20 · 深度 19/20 · 实践 13/15 · 可访问 9/10 · 呈现 4/5
- 推荐理由：具身系统所需动力学、规划、控制和学习在同一项目链中贯通，且实验材料完整。
- 配套材料：视频、讲义、problem sets、solutions、programming assignments 与 projects
- 建议练习：在仿真器中完成 cart-pole/acrobot 的轨迹优化、反馈控制或策略学习
- 核验日期：2026-08-10

### 备选资源：Edge Computing

- 教师/机构：Rajiv Misra · IIT Kanpur
- 平台与入口：NPTEL · [打开资源](https://nptel.ac.in/courses/106104449)
- 来源类型：`official_university_course`
- 建议章节：第 9 讲 Edge AI；实时低时延、容器/消息系统、self-driving 与 deep reinforcement learning for edge 单元
- 语言/字幕：English / English（NPTEL 字幕/转写）
- 建议观看时长：约 8 小时
- 编辑评分：<span class="resource-score">83/100</span>
- 评分分项：匹配 27/30 · 来源 20/20 · 深度 15/20 · 实践 9/15 · 可访问 8/10 · 呈现 4/5
- 推荐理由：从部署侧补足机器人课程对边缘算力、实时性、通信和隐私约束的讨论。
- 配套材料：课程讲义、框架演示、用例与周作业
- 建议练习：把感知模型部署到边缘设备，记录端到端延迟、能耗和离线降级行为
- 核验日期：2026-08-10
