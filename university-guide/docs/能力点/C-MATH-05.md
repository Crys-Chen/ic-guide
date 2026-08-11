# 数值方法与凸优化

- 能力 ID：`C-MATH-05`
- 类型：公共能力
- 修读要求：公共推荐
- 建议窗口：IC 公共核心（可按兴趣提前或延后）
- 所属领域：数学
- 参考投入：22 小时（不是学期配额）
- 先修能力：[微积分与工程建模](./C-MATH-01.md)、[线性代数](./C-MATH-02.md)、[概率统计](./C-MATH-03.md)

## 学习成果

- 能实现线性方程、插值、数值积分和非线性方程的基础算法
- 能识别凸集、凸函数和约束优化问题并使用梯度或 Newton 方法求解
- 能报告收敛条件、停止准则和数值误差而不只给出最优值

## 验收

### 产物

一个带单元测试的 Python 优化小项目，用约束最小二乘完成晶体管模型参数拟合

### 合格标准

至少 3 类数值算法均有正常、边界和失败测试；最终约束违反量不超过 1e-6；目标值与 CVXPY 或另一可信求解器基准的相对差不超过 1e-4。

## 视频资源

`视频时长` 是本能力点建议观看章节的合计，不是整门公开课的总时长。

### 主资源：EE364A Convex Optimization I

- 教师/机构：Stephen Boyd · Stanford University
- 平台与入口：Stanford Engineering Everywhere · [打开资源](https://see.stanford.edu/Course/EE364A)
- 来源类型：`official_university_course`
- 建议章节：Lectures 1, 6 and 15: problem classes, convex functions, gradient and Newton methods
- 语言/字幕：English / English transcript
- 建议观看时长：约 3.9 小时
- 编辑评分：<span class="resource-score">93/100</span>
- 评分分项：匹配 30/30 · 来源 20/20 · 深度 20/20 · 实践 13/15 · 可访问 6/10 · 呈现 4/5
- 推荐理由：权威课程把可证明的凸结构、算法和建模实例连接起来，适合建立优化结果可解释、可验证的习惯。
- 配套材料：完整讲义、视频、阅读材料、作业和解答。
- 建议练习：完成所选讲次对应题目，并用 CVXPY 与手写梯度法求同一约束最小二乘问题。
- 核验日期：2026-08-10

### 备选资源：Optimization

- 教师/机构：A. Goswami and Debjani Chakraborty · Indian Institute of Technology Kharagpur
- 平台与入口：NPTEL · [打开资源](https://nptel.ac.in/courses/111105039)
- 来源类型：`official_national_course`
- 建议章节：Lectures 21–34: classical, numerical and constrained nonlinear optimization
- 语言/字幕：English / English
- 建议观看时长：约 7.0 小时
- 编辑评分：<span class="resource-score">82/100</span>
- 评分分项：匹配 26/30 · 来源 20/20 · 深度 16/20 · 实践 8/15 · 可访问 8/10 · 呈现 4/5
- 推荐理由：同时覆盖经典约束条件、数值搜索与非线性方法，可作为 Boyd 课程之前的计算型过渡。
- 配套材料：NPTEL 课程页逐讲列出视频与课程大纲。
- 建议练习：实现黄金分割、梯度下降和带罚函数的约束优化，并比较收敛曲线。
- 核验日期：2026-08-10
