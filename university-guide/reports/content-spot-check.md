# 六条专业路线主视频内容抽查

## 范围与判定口径

- 抽查对象：六条专业路线各取第 1、3 个专业能力点，共 12 项主视频。
- 数据基线：`data/track_videos.yml` 当前记录。
- 证据优先级：NPTEL 当前课程详情页的逐讲/逐单元清单；MIT OCW 当前模块页；仅当 NPTEL 当前详情页只返回课程身份而不返回逐讲树时，才用同一课程的官方 NPTEL 逐讲材料或 `nptelhrd` 官方视频页补证。
- 不采用与当前运行不一致的旧版按周概述来推断讲次。若旧 syllabus 的编号与实际视频序列冲突，以当前实际视频序列为准。
- `PASS`：课程身份、记录的 `section` 与官方逐讲/模块证据相符，且所选内容直接支撑该能力点的核心学习成果；`FAIL`：记录的讲次或主题与实际视频序列存在实质冲突；`人工复核`：只能确认课程身份，无法从官方公开页面确认所记章节。
- 核验日期：2026-08-10。

## 结论汇总

| 路线 | 能力点 | 结论 |
|---|---|---|
| 器件与制造 | DEV-01、DEV-03 | PASS、PASS |
| 模拟、射频与生物电子 | ANA-01、ANA-03 | PASS、PASS |
| 数字、FPGA 与硬件安全 | DIG-01、DIG-03 | PASS、PASS |
| 架构、EDA 与 AI 芯片 | ARCH-01、ARCH-03 | PASS、PASS |
| 先进集成、测试与可靠性 | PKG-01、PKG-03 | PASS、PASS |
| 新型计算 | NEW-01、NEW-03 | PASS、PASS |

**统计：PASS 12 项；人工复核 0 项；FAIL 0 项。** 12 项均取得可定位到逐讲或模块的官方证据。ANA-03 已按实际可播放视频序列改正讲号，并通过主、备资源组合覆盖 RF 前端电路与 S 参数/Smith 图；没有再沿用旧 syllabus 的冲突编号。

## 1. 器件与制造（T-DEV）

### DEV-01 — 先进 MOS 器件与工艺协同

- **资源/机构**：*Introduction to Semiconductor Devices*，Naresh Kumar Emani，IIT Hyderabad / NPTEL。
- **URL**：<https://nptel.ac.in/courses/108106181>
- **目录记录的 section**：第 7–10 周：理想 MOS 电容、C-V 与非理想效应、长沟道 MOSFET、缩放/短沟道效应及 FinFET。
- **当前详情页逐讲证据**：Week 7 的 7.1–7.3 依次为 NMOSCAP accumulation、depletion、inversion，7.4 为 exact 与 delta-depletion，7.5 为 threshold voltage，7.6 为 MOSCAP 演示；Week 8 的 8.1–8.5 为 non-ideal MOS capacitor、C-V characteristics、例题、掺杂/氧化层厚度/温度对 C-V 的影响及演示；Week 9 的 9.1–9.6 为 MOSFET 导论、工作模式、长沟道 I-V、例题、性能指标与 CMOS technology；Week 10 的 10.1–10.5 为 scaling/nodes、缩放极限、短沟道电流与阈值效应、现代 MOSFET。
- **对应学习成果**：直接支撑“从 MOS 电容推导长沟道 MOSFET 工作区”“解释缩放与短沟道权衡”“分析 I-V/C-V 趋势”。Week 7 的官方讲名是 MOSCAP 各工作区而非把每讲都命名为 *Ideal MOS Capacitor*，但内容与目录的主题摘要一致。
- **核验方式**：直接读取 NPTEL 当前课程详情页的 Week 7–10 逐讲树。
- **结论**：**PASS**。周次、主题与所记范围一致。
- **日期**：2026-08-10。

### DEV-03 — 硅光器件与光子集成

- **资源/机构**：*Integrated Photonics Devices and Circuits*，Bijoy Krishna Das，IIT Madras / NPTEL。
- **URL**：<https://nptel.ac.in/courses/108106180>
- **目录记录的 section**：第 3–4 周 8 讲波导模式/色散/二维约束；第 7–9 周 8 讲 MZI、定向耦合器、微环和 DBR；第 11–12 周 6 讲电光调制、集成光源与硅光探测器。
- **当前详情页逐讲证据**：Week 3 有 4 个 optical guiding/slab-waveguide design 单元，Week 4 有 4 个 guided modes、dispersion、power 与 2-D confinement 单元；Week 7 有 3 个 directional coupler/MZI/microring 单元，Week 8 有 2 个 microring/DBR 单元，Week 9 有 3 个 DBR design 与 phase-error interference 单元；Week 11 有 3 个 electro-optic modulator 单元；**Week 12 明列 3 个单元：Integrated Light Sources Part 1、Part 2、Silicon Photodetectors**。对应计数为 8、8、6，与目录记录完全一致。
- **对应学习成果**：直接支撑波导模式与色散计算、MZI/耦合器/微环设计，以及调制、光源、探测链路的器件选择。
- **核验方式**：直接读取 NPTEL 当前课程详情页 Week 3–4、7–9、11–12 的逐单元树；未使用旧 syllabus 周表。
- **结论**：**PASS**。特别确认当前运行的 Week 12 确实包含集成光源与硅光探测器。
- **日期**：2026-08-10。

## 2. 模拟、射频与生物电子（T-ANA）

### ANA-01 — CMOS 模拟单元与偏置

- **资源/机构**：*Analog Electronic Circuit*，Shouribrata Chatterjee，IIT Delhi / NPTEL。
- **URL**：<https://nptel.ac.in/courses/108102112>
- **目录记录的 section**：第 2–7 周：共源/共栅/源退化、电流镜、差分、级联及两级放大器设计。
- **当前详情页逐讲证据**：Week 2 为 DC operating point、amplifier design、common-source/small-signal；Week 3 为 common-gate、common-drain 与 source degeneration；Week 4 为 swing limits 与 multi-transistor amplifiers；Week 5 为 current sources、mirrors 与 biasing；Week 6 为 differential circuits/amplifiers I–II；Week 7 为 differential amplifier III、self-biased active load、cascode 与 two-stage op-amps。
- **对应学习成果**：直接支撑共源/共栅/源跟随/级联/差分小信号设计，以及电流镜、偏置、摆幅和两级放大器核算。
- **核验方式**：直接读取 NPTEL 当前课程详情页 Week 2–7 逐讲树。
- **结论**：**PASS**。记录范围和实际讲次一一对应。
- **日期**：2026-08-10。

### ANA-03 — RF 与毫米波收发前端

- **资源/机构**：*RF Integrated Circuits*，Shouribrata Chatterjee，IIT Delhi / NPTEL。
- **URL**：<https://nptel.ac.in/courses/117102012>
- **目录记录的 section**：第 5–6 讲匹配；第 20–24 讲噪声与 LNA；第 25–27 讲混频器；第 28–30 讲振荡器；第 37–39 讲功放，共 16 讲、约 15 小时。
- **当前实际视频逐讲证据**：L5 为 *Matching*，L6 为 *Other Matching Networks*；L20 为 *Various Noise Sources*，L21 为 *Noise in a MOSFET*，L22–24 为 LNA first-cut design 与 noise/alternative topologies；L25 为 *Multiplier Fundamentals*，L26–27 为 mixer non-idealities；L28 为 tank-based oscillators，L29 为 oscillator phase noise，L30 为 other oscillator topologies；L37、L38、L39 分别为 Class ABC、Class BCD、Class CD/PWM power amplifiers。公开逐集时长相加约 14 小时 54 分，与目录取整的 15 小时一致。
- **备选资源的补证**：同能力点备选 *Basics of Semiconductor Microwave Devices*（IISc Bangalore，<https://nptel.ac.in/courses/108108377>）当前详情页明确：L50 transmission-line theory；L51 waveguides/T-lines 与 2-port networks；L52 S-parameters and basics of Smith Chart；L53 Smith chart and matching；L54 Smith-chart/stub impedance matching；L55–57 microwave passives；L58 on-wafer measurement and S-parameters；L59 de-embedding；L60 measurement/calibration。其目录记录 L50–60、11 讲、约 6 小时与当前逐讲树一致。
- **对应学习成果**：主资源直接支撑匹配、噪声/LNA、混频器、振荡器和功放的拓扑与权衡；备选资源补齐 S 参数、Smith 图、在片测量与去嵌。二者合用可支撑能力点的三个成果：RF 网络指标分析、前端模块选择/设计、接收机噪声与线性度预算。
- **核验方式**：以同一课程实际可播放的 NPTEL/`nptelhrd` 40 讲序列核对主资源，并以 NPTEL 当前 `108108377` 详情页逐讲树核对备选；旧 syllabus 的另一套讲号不参与判定。
- **结论**：**PASS**。主、备资源的当前讲号、主题和取整时长均相符，组合覆盖边界清楚。
- **日期**：2026-08-10。

## 3. 数字、FPGA 与硬件安全（T-DIG）

### DIG-01 — RTL 设计与 FPGA 实现

- **资源/机构**：*Hardware Modeling using Verilog*，Indranil Sengupta，IIT Kharagpur / NPTEL。
- **URL**：<https://nptel.ac.in/courses/106105165>
- **目录记录的 section**：第 12–20 讲描述方式、过程赋值与阻塞/非阻塞；第 21–24 讲 testbench 与 FSM；第 25 讲 datapath/controller，共 14 讲。
- **当前详情页逐讲证据**：L12 为 Verilog description styles；L13–15 为 procedural assignment；L16–19 为 blocking/nonblocking Parts 1–4；L20 为 user-defined primitives；L21–22 为 Verilog testbench；L23–24 为 FSM；L25 为 datapath and controller Part 1。计数为 9 + 4 + 1 = 14 讲。
- **对应学习成果**：直接支撑 RTL 描述、阻塞/非阻塞语义、testbench、FSM 和数据通路/控制器拆分；FPGA 综合与板测仍需目录所列练习完成。
- **核验方式**：直接读取 NPTEL 当前课程详情页 L12–25 逐讲树。
- **结论**：**PASS**。讲次、主题和计数均可复核。
- **日期**：2026-08-10。

### DIG-03 — ASIC 实现、时序与低功耗

- **资源/机构**：*VLSI Design Flow: RTL to GDS*，Sneh Saurabh，IIIT Delhi / NPTEL。
- **URL**：<https://nptel.ac.in/courses/108106191>
- **目录记录的 section**：第 7 周 4 个 STA/OpenSTA 单元；第 8 周 5 个约束、映射与 timing-driven 优化单元；第 9 周 3 个功耗分析/优化单元；第 11–12 周 8 个 floorplan、placement、CTS、routing 与 signoff 单元。
- **当前详情页逐讲证据**：Week 7 明列 STA I、II、III 与 OpenSTA，共 4 个；Week 8 明列 Constraints I、II、Technology Mapping、Timing-driven Optimization、Technology Library & Constraints，共 5 个；Week 9 中与所记选择对应的 3 个功耗单元为 Power Analysis、Power Optimization、Power Analysis using OpenSTA（该周另有 Basic DFT、Scan Design，不计入这 3 个）；Week 11 为 Chip Planning I、II、Placement、Chip Planning & Placement，共 4 个；Week 12 为 CTS、Routing、Post-layout Verification & Signoff、CTS & Routing，共 4 个。
- **对应学习成果**：直接支撑综合后约束、STA、功耗分析优化、floorplan/placement、CTS、routing 和 signoff 的 RTL-to-GDS 主流程。
- **核验方式**：直接读取 NPTEL 当前课程详情页 Week 7–9、11–12 的逐单元树；将 Week 9 的功耗单元与该周 DFT 单元分开计数。
- **结论**：**PASS**。当前页明确形成“STA → 功耗 → 物理设计”的所记路径，单元数也一致。
- **日期**：2026-08-10。

## 4. 架构、EDA 与 AI 芯片（T-ARCH）

### ARCH-01 — 处理器微架构与存储层次

- **资源/机构**：*Computation Structures*，Chris Terman 等，Massachusetts Institute of Technology / MIT OpenCourseWare。
- **URL**：<https://ocw.mit.edu/courses/6-004-computation-structures-spring-2017/>
- **目录记录的 section**：Modules 9、10、13、14、15 的 Topic Videos：ISA、汇编、Beta 处理器、缓存、流水线。
- **当前模块页证据**：Module 9 为 *Designing an Instruction Set*；Module 10 为 *Assembly Language, Models of Computation*；Module 13 为 *Building the Beta*；Module 14 为 *Caches and the Memory Hierarchy*；Module 15 为 *Pipelining the Beta*；各模块均在当前 OCW 课程页提供 Topic Videos。
- **对应学习成果**：直接支撑 ISA 到处理器实现、缓存层次和流水线数据通路/冒险的核心成果。更深入的乱序执行与一致性不应由这五个模块单独声称覆盖，需结合能力点的其他资源与项目。
- **核验方式**：直接读取 MIT OCW 当前课程模块导航与各模块题名。
- **结论**：**PASS**。模块编号、标题和记录主题一致。
- **日期**：2026-08-10。

### ARCH-03 — EDA 图算法与物理设计

- **资源/机构**：*VLSI Physical Design*，Indranil Sengupta，IIT Kharagpur / NPTEL。
- **URL**：<https://nptel.ac.in/courses/106105161>
- **目录记录的 section**：第 7–14 讲划分、floorplan 与 placement；第 15–22 讲 routing；第 32–35 讲 timing closure，共 20 讲。
- **当前详情页逐讲证据**：L7 为 Partitioning；L8–10 为 Floorplanning、Floorplanning Algorithms、Pin Assignment；L11–14 为 Placement Parts 1–4；L15–17 为 Grid Routing Parts 1–3；L18–19 为 Global Routing Parts 1–2；L20–22 为 Detailed Routing Parts 1–3；L32–36 为 Time/Timing Closure Parts 1–5，目录选择其中 L32–35 四讲。所选计数为 8 + 8 + 4 = 20 讲。
- **对应学习成果**：直接支撑划分、布局、布线、时序收敛的形式化和算法比较；配合课程算法与能力项目，可评估线长、拥塞、时序及运行时间。
- **核验方式**：直接读取 NPTEL 当前课程详情页逐讲清单；以当前 L7–22、L32–35 为准。
- **结论**：**PASS**。范围与逐讲题名一致，`106105161` 当前页可逐讲证实。
- **日期**：2026-08-10。

## 5. 先进集成、测试与可靠性（T-PKG）

### PKG-01 — 先进封装、Chiplet 与异构集成

- **资源/机构**：*Electronic Packaging and Manufacturing*，Anandaroop Bhattacharya、Goutam Chakraborty，IIT Kharagpur / NPTEL。
- **URL**：<https://nptel.ac.in/courses/112105267>
- **目录记录的 section**：第 6–15 讲一级互连、面阵列、flip-chip 与 advanced packaging；第 21 讲 system integration。
- **当前逐讲证据**：L6–7 为 1st Level Packaging I–II；L8–10 为 Area Array Packages I–III；L11 为 Flip Chip Technology；L12–14 为 1st Level Interconnections I–III；L15 为 Advanced Packaging；L21 为 System Integration。
- **对应学习成果**：直接支撑 wire-bond/area-array/flip-chip 等封装比较和系统级集成判断。当前所选讲次未显式教授 UCIe 协议，故 UCIe、现代 Chiplet 接口与供应链约束仍需由备选资源/项目材料补齐；这不影响 `section` 本身的真实性。
- **核验方式**：读取 NPTEL 该课程官方逐讲树，逐项核对 L6–15、L21。
- **结论**：**PASS**。记录讲次与官方题名一致；已明确其对现代 Chiplet/UCIe 成果的覆盖边界。
- **日期**：2026-08-10。

### PKG-03 — 热设计、可靠性与失效分析

- **资源/机构**：*Electronic Packaging and Manufacturing*，Anandaroop Bhattacharya、Goutam Chakraborty，IIT Kharagpur / NPTEL。
- **URL**：<https://nptel.ac.in/courses/112105267>
- **目录记录的 section**：第 22–29 讲热阻、散热器与冷却；第 31–36 讲冲击/振动与可靠性，共 14 讲。
- **当前逐讲证据**：L22–29 依次为 Thermal Management Introduction、Concepts、Thermal Resistance、Heat Sink、Heat Sink Characterization、Heat Transfer Correlations、Practice Problems、Thermal Technologies；L31–34 为 Shock and Vibration Parts 1–4；L35–36 为 Electronic Packaging Reliability Parts 1–2。计数为 8 + 6 = 14 讲；L30 Novel Cooling Technologies 不在所选范围，目录没有误计。
- **对应学习成果**：直接支撑热阻网络、散热器/冷却方案、机械冲击振动和封装可靠性分析。更具体的 FMEA、加速因子与电迁移模型需在能力项目中补做。
- **核验方式**：读取 NPTEL 该课程官方逐讲树，逐项核对 L22–29、L31–36。
- **结论**：**PASS**。讲次、主题与 14 讲计数均一致。
- **日期**：2026-08-10。

## 6. 新型计算（T-NEW）

### NEW-01 — 存算一体与近存计算

- **资源/机构**：*Memory Device Technology for AI/ML Computing*，Shubhadeep Bhattacharjee，IIT Hyderabad / NPTEL。
- **URL**：<https://nptel.ac.in/courses/108106868>
- **目录记录的 section**：7.1–7.5、8.1–8.5、9.1–9.4：PCRAM/RRAM/MRAM 与 AI 工作负载；10.3：计算瓶颈；12.3–12.4：数字/模拟 IMC，共 17 单元。
- **当前详情页逐讲证据**：7.1–7.2 为 NAND scaling challenges/recap，7.3 为 memristor basics，7.4–7.5 为 PCRAM fundamentals 与 technology/commercialization；8.1–8.3 为 RRAM，8.4–8.5 为 MRAM；9.1 为 MRAM SOT/commercialization，9.2–9.4 为 AI/ML history、ANN 与 ANN working；10.3 为 AI/ML Computing Bottlenecks；12.3、12.4 分别为 Digital In-Memory Computing、Analog In-Memory Computing。所选计数为 5 + 5 + 4 + 1 + 2 = 17。
- **对应学习成果**：直接支撑非易失存储器路线比较、AI 数据搬移瓶颈，以及数字/模拟 CIM 的区分。7.1–7.2 是 NAND 缩放与回顾而非 PCRAM，但它们是目录已明确选择范围内的器件背景，不改变整体章节映射。
- **核验方式**：直接读取 NPTEL 当前课程详情页 7.1–12.4 的逐单元树并重新计数。
- **结论**：**PASS**。具体单元、主题和 17 单元计数可直接证实。
- **日期**：2026-08-10。

### NEW-03 — 量子计算与量子芯片基础

- **资源/机构**：*Quantum Computing*，Debabrata Goswami，IIT Kanpur / NPTEL。
- **URL**：<https://nptel.ac.in/courses/104104082>
- **目录记录的 section**：第 23–28 讲离子阱与商用量子比特；第 31–33 讲实现问题与超导量子比特；第 34–36 讲密度矩阵与测量。
- **当前详情页逐讲证据**：L23 为 Basics of Ion Traps，L24 为 Applications of Ion Traps，L25–26 为 review/clarifying problems，L27 为 Commercial Qubits，L28 为 Spintronics Quantum Computing；L31–32 为 Implementation Issues，L33 为 Solid-state Superconducting Qubits；L34 为 Density Matrix Concept，L35 为 Ensemble of Qubits from Density Matrix，L36 为 Quantum Measurement and Entanglement using Density Matrix。
- **对应学习成果**：直接支撑离子阱、商用/自旋、超导硬件路线比较，以及密度矩阵、测量和纠缠描述。基础量子门与算法由本课程前段或备选资源承担；所选范围的作用是硬件与测量深化。
- **核验方式**：直接读取 NPTEL 当前课程详情页 L23–36 的逐讲清单；未用旧版 Week 7–8 摘要替代当前讲次。
- **结论**：**PASS**。当前页明确包含 L23 ion trap、L27 commercial qubits、L33 superconducting 以及 L34–36 density/measurement，与目录记录一致。
- **日期**：2026-08-10。

## 维护提示

1. ANA-03 应持续以实际可播放的 40 讲视频序列为准；若 NPTEL 后续替换运行，需同时复核讲号和时长，不能直接套用旧 syllabus 的模块编号。
2. 本报告中的 `PASS` 代表目录讲次真实、主题匹配且能支撑核心成果；能力点的完整掌握仍须结合备选资源、练习与验收项目，不能以“看完视频”替代工程产物。
