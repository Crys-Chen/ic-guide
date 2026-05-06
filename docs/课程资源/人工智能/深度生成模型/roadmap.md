# 深度生成模型学习路线

近几年大语言模型成为热门方向，也和笔者博士期间课题密切相关。本路线图分享笔者学习深度生成模型过程中参考的课程资源，方便感兴趣的同学按阶段选取。

## 生成模型基础

覆盖 VAE、GAN、Flow、Diffusion 等主流架构，推荐按顺序选择：

- [MIT 6.S184](MIT6.S184.md) — 以微分方程视角讲解 Flow Matching 与 Diffusion，数学严谨，有配套小实验
- [MIT 6.S978: Deep Generative Models](MIT6.S978.md) — 何恺明主讲，全面覆盖各类生成模型基础理论（2024 新课）
- [UCB CS294-158: Deep Unsupervised Learning](CS294-158.md) — Pieter Abbeel 主讲，内容最全面，作业需从头实现模型，极为硬核

CMU 10423 内容与上述课程重叠较多，可作为调研性补充，见 [CMU 10423](CMU10423.md)。

## 大语言模型

- [Stanford CS336: Language Modeling from Scratch](大语言模型/CS336.md) — 从零构建 LLM 全链路，最硬核，推荐有系统能力追求的同学
- [CMU 11-868: Large Language Model Systems](大语言模型/CMU11-868.md) — 侧重底层系统优化（GPU 加速、分布式训练与推理）
- [CMU 11-667: LLM Methods and Applications](大语言模型/CMU11-667.md) — 上层算法与应用综述
- [CMU 11-711: Advanced NLP](大语言模型/CMU11-711.md) — 各子方向广泛覆盖，适合建立宏观认知

## 延伸阅读

- [Awesome-LLM](https://github.com/Hannibal046/Awesome-LLM) — 大语言模型相关资料汇总
- [LLMSys-PaperList](https://github.com/AmberLJC/LLMSys-PaperList) — LLM 系统方向论文汇总
- [MLsys-Guide](https://github.com/PKU-DAIR/Starter-Guide/blob/main/docs/systems/Readme.md) — 深度学习系统入门指南
