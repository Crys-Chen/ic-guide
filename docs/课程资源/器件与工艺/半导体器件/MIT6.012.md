# MIT 6.012：微电子器件与电路

## 课程简介

- 所属大学：麻省理工学院（MIT）
- 先修要求：半导体物理、大学物理电磁学
- 编程语言：无（部分习题可用 SPICE 辅助验证）
- 课程难度：🌟🌟🌟🌟
- 预计学时：100 小时

MIT 6.012《Microelectronic Devices and Circuits》是 MIT 电气工程系经典的器件与电路联合课程，被誉为该领域最严谨的本科教学范本之一。课程前半段聚焦器件物理：从半导体能带理论、载流子统计与输运出发，严格推导 p-n 结的整流特性、双极型晶体管（BJT）的注入模型，以及 MOS 电容、长沟道与短沟道 MOSFET 的完整电流-电压特性。对各类器件的物理图像描述极为清晰，避免了国内部分教材"结论先行、物理后补"的叙述方式。

课程后半段将器件特性与小信号模型相结合，讲授 MOSFET/BJT 放大器的共源/共射/共栅/共基/共集配置，最终过渡到 CMOS 数字逻辑门的静态与动态特性分析。这种"器件—模型—电路"的一体化叙事，使本课成为联结半导体器件原理与模拟/数字电路设计的最佳桥梁课程，对复旦 MICR130006《半导体器件原理》的学习有极强的互补与拓展价值。

OCW 提供了完整的讲义（Lecture Notes）、问题集（Problem Sets）及历年考题，部分版本（Spring 2009）还配有视频讲座录像，建议优先阅读讲义并独立完成习题，以检验对器件物理的掌握深度。

## 课程资源

- 课程网站：<https://ocw.mit.edu/courses/6-012-microelectronic-devices-and-circuits-fall-2005/>
- 课程视频：<https://ocw.mit.edu/courses/6-012-microelectronic-devices-and-circuits-spring-2009/>（Spring 2009 版含视频）
- 课程教材：Sedra & Smith《Microelectronic Circuits》（7th ed.）；Neamen《半导体物理与器件》（中文版）
- 课程作业：MIT OCW 课程页面 Assignments 及 Exams 栏目

## 其他推荐公开资源

### Purdue ECE606：固态器件（Mark Lundstrom）

- 平台：nanoHUB（免费注册，含视频与讲义）
- 课程主页：<https://nanohub.org/>（搜索"ECE606"）
- 主讲：Mark Lundstrom 教授（Purdue，固态物理器件领域权威）
- 简介：从量子力学与统计力学基础出发推导器件特性，比 MIT 6.012 更侧重纳米器件与近平衡/非平衡输运，适合对器件物理有更深层次追求的同学，亦是理解 FinFET/GAA 纳米器件特性的重要理论跳板。

### NPTEL：IIT 电子器件与电路

- 平台：NPTEL（免费，含视频）
- 搜索方式：<https://nptel.ac.in/> 搜索"Electronic Devices and Circuits"
- 简介：多所 IIT 均开设有电子器件相关 NPTEL 课程，内容扎实、节奏适中，配合 Sedra/Smith 或 Neamen 教材使用效果良好，适合作为中等难度的器件电路入门视频资源。

### 中国大学 MOOC：国内高校半导体器件课程

- 平台：中国大学 MOOC（<https://www.icourse163.org/>）
- 推荐院校：东南大学、西安电子科技大学（搜索"半导体器件"或"电子器件"）
- 简介：上述高校在 MOOC 平台上线了完整的中文半导体器件课程，与国内主流教材（刘恩科《半导体物理学》体系）配套，适合作为中文入门参考，尤其推荐不熟悉英文物理教材风格的同学从这里建立基础概念再切换至 MIT OCW。

## B 站配套资源

- 半导体器件原理中文视频：B 站搜索"半导体器件原理 MOOC"或"半导体器件物理 大学"
- MOSFET/BJT 器件物理讲解：B 站搜索"MOSFET BJT 器件物理"
- MIT 6.012 讲义精读/解析：B 站搜索"MIT 6.012 器件"或"MIT OCW 微电子"

## 前置学习建议

1. 确保掌握半导体物理基础：能带结构、费米-狄拉克分布、载流子浓度与输运（漂移+扩散）
2. 熟悉大学物理电磁学（静电场、电容、磁场）
3. 了解基本电路分析（KVL/KCL、戴维南等效）
4. 建议先完成复旦 MICR130006 前几章再切换至 MIT 6.012 OCW 讲义对照学习
