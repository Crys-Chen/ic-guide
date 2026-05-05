# 课程补充记录 / Additions Log

> 生成时间：2026-05-04
> 本文件记录本次自动补充的所有课程页面，供人工审阅。请逐条核实链接有效性及内容准确性，确认后可删除对应条目或打上 ✅ 标记。

---

## 硬件描述语言（HDL）

### 1. HDLBits: Verilog Practice

- **文件路径**：`docs/课程资源/电路/硬件描述语言(HDL)/Verilog/HDLBits.md`
- **难度**：🌟🌟🌟
- **定位**：Verilog 刷题平台（类比 LeetCode），在线即时评测，无需本地工具
- **核心链接**
  - 平台主页：https://hdlbits.01xz.net/wiki/Main_Page
- **内容摘要**：覆盖组合逻辑、时序逻辑、状态机、模块化设计等 Verilog 核心语法，是国内外高校数字设计入门的标准练习平台。
- **审阅注意**：平台本身质量公认极高；链接域名为 `01xz.net`，请确认当前可正常访问。

---

### 2. Nandland: Learn FPGA, Verilog & VHDL

- **文件路径**：`docs/课程资源/电路/硬件描述语言(HDL)/Verilog/nandland.md`
- **难度**：🌟🌟
- **定位**：面向初学者的 FPGA/Verilog/VHDL 入门网站，配套开发板教程
- **核心链接**
  - 网站主页：https://nandland.com/
  - Verilog 教程：https://nandland.com/learn-verilog/
  - VHDL 教程：https://nandland.com/learn-vhdl/
  - FPGA 基础：https://nandland.com/fpga-101/
- **内容摘要**：Go Board（低价 FPGA 开发板）配套资源，适合零基础快速建立 FPGA 操作感。
- **审阅注意**：网站质量较好，适合推荐给完全零基础学生；Go Board 硬件非必须，大部分内容可在 Vivado 仿真器中完成。

---

### 3. UCB EECS151/251A: FPGA & ASIC Design

- **文件路径**：`docs/课程资源/电路/硬件描述语言(HDL)/Verilog/EECS151.md`
- **难度**：🌟🌟🌟🌟
- **定位**：UCB 本科/研究生数字设计课，Verilog → FPGA → RISC-V 处理器 Project 完整链路
- **核心链接**
  - 课程主页：https://inst.eecs.berkeley.edu/~eecs151/
  - 课程材料 GitHub（2022 秋）：https://github.com/EECS150/fa22_fpga_labs
  - 往年 FPGA Lab GitHub：https://github.com/EECS150
- **内容摘要**：Lab 1–8 涵盖组合/时序逻辑、FSM、Memory、I/O；最终 Project 为完整 RISC-V 流水线处理器，是国内外最具含金量的数字设计开放课程之一。
- **审阅注意**：课程主页 URL 历年有变动，建议通过 GitHub 组织（EECS150）查找最新资料；251A 为研究生版本，项目要求更高。

---

### 4. Chisel Bootcamp

- **文件路径**：`docs/课程资源/电路/硬件描述语言(HDL)/Chisel/chisel-bootcamp.md`
- **难度**：🌟🌟🌟🌟
- **定位**：Chisel HDL 官方入门教程，Jupyter Notebook 交互式学习
- **核心链接**
  - GitHub 仓库：https://github.com/freechipsproject/chisel-bootcamp
  - 在线运行（mybinder）：https://mybinder.org/v2/gh/freechipsproject/chisel-bootcamp/master
  - Chisel 官网：https://www.chisel-lang.org/
  - Chisel Cheatsheet：https://github.com/freechipsproject/chisel-cheatsheet/releases/latest/download/chisel_cheatsheet.pdf
- **内容摘要**：4 章：Scala 基础 → Chisel 基础模块 → 参数化/函数式设计 → RISC-V TileLink 内存系统实例。是学习 Chisel/FIRRTL/RISC-V chipyard 生态的必经之路。
- **审阅注意**：mybinder 在线运行偶尔较慢，建议本地安装 Jupyter + sbt；仓库已停止主动更新（维护性存档），但内容仍有效。

---

## 信号处理 / 信号与系统

### 5. MIT 6.003: Signals and Systems

- **文件路径**：`docs/课程资源/电路/信号处理/信号与系统/MIT6.003.md`
- **难度**：🌟🌟🌟🌟
- **定位**：Alan Oppenheim 主讲的 MIT 经典信号与系统课，教材《Signals and Systems》标准参考
- **核心链接**
  - MIT OCW 课程页：https://ocw.mit.edu/courses/6-003-signals-and-systems-fall-2011/
  - B 站原版视频（Alan Oppenheim，24 讲）：https://www.bilibili.com/video/BV1CZ4y1j7hs/
  - B 站中英字幕版：https://www.bilibili.com/video/BV1tf4y1m7Wf/
- **内容摘要**：连续/离散时间系统、卷积、Z 变换/拉普拉斯变换/傅里叶变换、滤波器设计，是 IC 方向学生进入信号处理/通信方向的基石课程。
- **审阅注意**：2011 年版 OCW 与教材完全对应；B 站两个链接请确认是否仍可访问，BV1tf4y1m7Wf 含中英字幕更易入手。

---

### 6. UCB EE120: Signals and Systems

- **文件路径**：`docs/课程资源/电路/信号处理/信号与系统/EE120.md`
- **难度**：🌟🌟🌟🌟
- **定位**：UCB 信号与系统本科课，讲义公开、作业覆盖面广
- **核心链接**
  - 课程官网：https://ee120-course-staff.github.io/
  - UCB 课程目录：https://www.eecs.berkeley.edu/Courses/EE/120.html
- **内容摘要**：与 MIT 6.003 内容相近但风格更 Berkeley，强调 Python 数值计算辅助理解；讲义质量高，是 EE142/RFIC 的直接前置课程。
- **审阅注意**：课程网站域名历年有变动，`ee120-course-staff.github.io` 为最新，请确认可访问；若失效可通过 Berkeley EECS 课程目录查找。

---

## 模拟电路 / 高频与射频

### 7. EE613: High-Frequency Analog Circuit Design

- **文件路径**：`docs/课程资源/电路/模拟/高频电子线路/EE613.md`
- **难度**：🌟🌟🌟🌟
- **定位**：高频模拟电路 YouTube 系列课，覆盖 RF/高速电路核心模块
- **核心链接**
  - YouTube 播放列表（2024 版）：https://www.youtube.com/playlist?list=PLP-rjhz_nIi7-tPSbazEZVstOa_CJCMWS
  - YouTube 播放列表（2025 版）：https://www.youtube.com/playlist?list=PLP-rjhz_nIi7UHSFzysn7LRLh1jSRj9SP
- **内容摘要**：覆盖高频小信号模型、S 参数、阻抗匹配、LNA 设计、混频器、振荡器。2024/2025 两版可互补使用，讲解清晰，B 站目前无转载。
- **审阅注意**：这门课的主讲老师及所属高校信息在研究时未能完全确认（YouTube 搜索结果），**建议人工复核 YouTube 链接及课程主讲身份**，确认是正规学术课程而非培训机构内容后再保留。

---

### 8. MIT 6.776: High Speed Communication Circuits

- **文件路径**：`docs/课程资源/电路/模拟/高频电子线路/MIT6.776.md`
- **难度**：🌟🌟🌟🌟🌟
- **定位**：MIT 研究生高速通信电路课，25 讲讲义开放，无视频
- **核心链接**
  - MIT OCW 课程页：https://ocw.mit.edu/courses/6-776-high-speed-communication-circuits-spring-2005/
  - 讲义列表（25 讲 PDF）：https://ocw.mit.edu/courses/6-776-high-speed-communication-circuits-spring-2005/pages/lecture-notes/
- **内容摘要**：S 参数与传输线、分布式放大器、锁相环、高速串行链路、抖动分析，适合有一定 RFIC 基础后进阶阅读。无视频，以讲义精读为主。
- **审阅注意**：2005 年版内容较老，部分工艺参数与现代工艺脱节，但理论体系完整；建议定位为"拔高参考资料"而非主力学习资源。

---

### 9. Razavi RF Microelectronics (UCLA EE164)

- **文件路径**：`docs/课程资源/电路/模拟/射频集成电路/razavi_rf.md`
- **难度**：🌟🌟🌟🌟🌟
- **定位**：Razavi 在 UCLA 讲授 EE164 的完整视频，与《RF Microelectronics》第 2 版一一对应
- **核心链接**
  - YouTube 播放列表：https://www.youtube.com/playlist?list=PLv6HHIgiTCb67V-Leh2Wk0v2fCgRCEj-r
  - Razavi YouTube 频道：https://www.youtube.com/@b_razavi
  - UCLA 课程主页：http://www.seas.ucla.edu/brweb/teaching.html
  - B 站 NPTEL RF IC 系列（40 讲）：https://www.bilibili.com/video/BV1vV411z7hK/
  - B 站 UCB EE142（26 讲）：https://www.bilibili.com/video/BV1324y187zq/
  - B 站 Razavi Electronics 1（45 讲）：https://www.bilibili.com/video/BV1it411f7wQ/
  - B 站 Razavi Electronics 2（46 讲）：https://www.bilibili.com/video/BV1A54y1d7wA/
- **内容摘要**：超外差/零中频收发机架构 → NF/IIP3 → LNA → 混频器 → VCO → PA → PLL，是全球公认质量最高的射频 IC 公开课程资源。
- **审阅注意**：YouTube 链接为 Razavi 本人频道，质量可靠；B 站链接建议逐一验证可访问性。

---

### 10. UCB EE142: Integrated Circuits for Communications

- **文件路径**：`docs/课程资源/电路/模拟/射频集成电路/EE142.md`
- **难度**：🌟🌟🌟🌟🌟
- **定位**：UCB Ali Niknejad 主讲的 RFIC 旗舰课，实验涉及 900 MHz 前端实测
- **核心链接**
  - 课程主页：https://www2.eecs.berkeley.edu/Courses/EE142/
  - 参考资料页：https://rfic.eecs.berkeley.edu/courses/ee142/refs.html
  - B 站 2005 年版（26 讲）：https://www.bilibili.com/video/BV1324y187zq/
- **内容摘要**：内容与 Razavi EE164 互补，Niknejad 风格更偏数学严格性，B 站视频为 2005 年版（画质一般但内容扎实）。
- **审阅注意**：B 站视频与 razavi_rf.md 中重复引用同一个 BV1324y187zq，这是因为 EE142 的 B 站资源恰好就是这个视频；两个页面共享此链接属于正常现象。

---

## EDA 工具

### 11. Vivado 数字 EDA 入门

- **文件路径**：`docs/课程资源/电路/EDA/vivado.md`
- **难度**：🌟🌟🌟
- **定位**：AMD（原 Xilinx）官方 FPGA EDA 工具，免费版可支持主流型号
- **核心链接**
  - 官方入门指南 UG910：https://docs.amd.com/r/en-US/ug910-vivado-getting-started
  - Digilent 教程：https://digilent.com/reference/vivado/getting_started/start
  - YouTube FPGA 零基础系列（VHDL 为主）：https://www.youtube.com/playlist?list=PL_Nji0JOuXg0_N0ba-pGABeabXdcfQYtJ
  - 下载页：https://www.xilinx.com/support/download.html
- **内容摘要**：覆盖 RTL 设计输入 → 综合 → 实现 → 时序分析 → ILA 调试 → 比特流烧录完整流程；ML Standard 版免费，适合复旦 MICR130024 实验课配套使用。
- **审阅注意**：YouTube 播放列表以 VHDL 为主，工具操作流程与 Verilog 通用，学生若以 Verilog 为主语言仍可参考工具流部分。

---

### 12. Cadence Virtuoso 模拟 EDA 入门

- **文件路径**：`docs/课程资源/电路/EDA/cadence.md`
- **难度**：🌟🌟🌟🌟
- **定位**：模拟 IC 设计工业标准工具，通过复旦校园授权或 Cadence 大学计划获取
- **核心链接**
  - B 站 于争博士 60 集教程（约 30 万播放）：https://www.bilibili.com/video/BV1ft411s74Q/
  - B 站 Cadence IC 公开课 8 讲：https://www.bilibili.com/video/BV1pU4y1b7dA/
  - B 站 CMOS Inverter 版图实战（37 min）：https://www.bilibili.com/video/BV1vPvPeJEDH/
  - B 站 集创赛实战 12 讲：https://www.bilibili.com/video/BV1T2RgY9E1x/
  - Cadence 官方课程库：https://www.cadence.com/en_US/home/training/all-courses.html
- **内容摘要**：工作流程：原理图 → Spectre 仿真（DC/AC/Transient）→ Layout → DRC/LVS → 后仿真。于争博士系列是国内公认最完整的中文入门资源。
- **审阅注意**：所有 B 站 BV 号请逐一确认视频仍存在且未被下架；Cadence 官方培训需校园授权才能完整访问。

---

## 待处理事项（中优先级）

以下内容本次未补充，供参考：

| 缺口 | 优先级 | 说明 |
|------|--------|------|
| ASIC 设计流程（综合/STA/APR）| 高 | 缺乏 Synopsys DC / Cadence Innovus 的系统介绍页 |
| 芯片验证（UVM/SystemVerilog）| 高 | 验证工程师方向完全空白 |
| 前端栏目重定向 | 中 | 现有"前端"含 Web/图形学等 IC 无关内容，建议讨论是否拆分或隐藏 |
| 复旦课程专属页 | 低 | MICR130004、INFO130010 等空文件，需熟悉课程内容的同学填写 |
