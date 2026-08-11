# AI 加速器与软硬件协同

- 能力 ID：`ARCH-04`
- 类型：专业能力
- 修读要求：路线推荐
- 建议窗口：方向探索与深化（可按兴趣提前或延后）
- 所属领域：体系结构与系统
- 参考投入：28 小时（不是学期配额）
- 先修能力：[数值方法与凸优化](./C-MATH-05.md)、[计算机体系结构](./C-SYS-05.md)、[处理器微架构与存储层次](./ARCH-01.md)、[编译优化与硬件映射](./ARCH-02.md)

## 学习成果

- 分析卷积、矩阵乘和注意力算子的计算/访存强度
- 设计数据流、PE 阵列、片上存储、互连和低精度计算方案
- 联合使用量化、稀疏、算子融合与编译调度优化端到端性能

## 验收

### 产物

一个张量加速器模型或 FPGA 原型及 roofline/PPA/精度报告

### 合格标准

与 CPU/GPU 或朴素基线公平比较，报告吞吐、延迟、能效和精度损失

## 视频资源

`视频时长` 是本能力点建议观看章节的合计，不是整门公开课的总时长。

### 主资源：TinyML and Efficient Deep Learning Computing (MIT 6.S965/6.5940)

- 教师/机构：Song Han · Massachusetts Institute of Technology
- 平台与入口：MIT AI Hardware Program / YouTube · [打开资源](https://www.aihardware.mit.edu/tinyml-and-efficient-deep-learning-course-6-s965/)
- 来源类型：`official_university_course`
- 建议章节：Efficient Inference 中 Pruning、Quantization、Neural Architecture Search、Hardware-aware Optimization 四个具名单元，以及 TinyML Deployment 实验单元
- 语言/字幕：English / English auto captions
- 建议观看时长：约 8 小时
- 编辑评分：<span class="resource-score">94/100</span>
- 评分分项：匹配 29/30 · 来源 20/20 · 深度 19/20 · 实践 13/15 · 可访问 9/10 · 呈现 4/5
- 推荐理由：由高效 AI 硬件一线研究团队公开，算法—系统—硬件协同与实践资源都很强。
- 配套材料：课程录像、slides、Colab labs 与开放项目
- 建议练习：完成量化/剪枝实验并在 MCU、移动端或模拟加速器上测延迟与能耗
- 核验日期：2026-08-10

### 备选资源：Re-Engineering Computing with Neuro-Inspired Learning: Algorithms, Architecture, Devices

- 教师/机构：Kaushik Roy · Purdue University
- 平台与入口：Purdue Nanoelectronics Research Laboratory · [打开资源](https://engineering.purdue.edu/NRL/Presentations)
- 来源类型：`official_university_course`
- 建议章节：视频 Re-Engineering Computing with Neuro-Inspired Learning: Algorithms, Architecture, Devices
- 语言/字幕：English / English auto captions
- 建议观看时长：约 1 小时
- 编辑评分：<span class="resource-score">80/100</span>
- 评分分项：匹配 26/30 · 来源 20/20 · 深度 16/20 · 实践 5/15 · 可访问 9/10 · 呈现 4/5
- 推荐理由：一小时内给出算法、架构、器件的跨层视角，适合在完整主课后快速扩展研究视野。
- 配套材料：Purdue 官方视频与配套 slides
- 建议练习：依据讲座的数据流和存储瓶颈，为一个 CNN/SNN 算子画出加速器与访存预算
- 核验日期：2026-08-10
