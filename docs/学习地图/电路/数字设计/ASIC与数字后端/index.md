# ASIC 与数字后端

ASIC(Application-Specific Integrated Circuit)指**为特定应用量身定制的芯片**。一旦设计制造完成,功能便永久固化,但与通用芯片(如 FPGA、CPU)相比,**性能、功耗、成本三方面都做到了极致优化**——我们日常使用的高性能 SoC(手机处理器、AI 加速器等)绝大部分以 ASIC 形式存在。

ASIC 设计涉及完整的数字 IC 设计流程:RTL 编码 → 综合 → 时序分析 → 布局布线 → 物理验证 → tape-out。这是数字 IC 工程师的"全栈技能"训练。

## 推荐课程

- **[ASIC 设计(复旦)](FDU_INFO130094.md)** — 复旦微电子核心专业课
- **[UIUC VLSI CAD (Coursera)](../../EDA/UIUC_VLSI_CAD.md)** — UIUC 在 Coursera 上开设的 VLSI CAD 课,讲 ASIC 流程的算法本质(已归入 EDA 目录)
- **[NPTEL: VLSI Physical Design (IIT KGP)](NPTEL_physical_design.md)** — 布局布线算法：KL/FM 划分、解析布局、迷宫布线、STA
- **[NPTEL: Synthesis of Digital Systems (IIT Delhi)](NPTEL_synthesis.md)** — 综合算法：调度/分配/绑定、BDD、逻辑优化、工艺映射
- **[数字后端](数字后端.md)** — 工业后端流程(征集中)
- **[补充资源](补充资源.md)** — OpenLane、SkyWater PDK 等开源 ASIC 工具

## 对应的科研方向

- [可重构计算与FPGA](../../../../科研方向/可重构计算与FPGA.md) — ASIC 与 FPGA 是数字硬件实现的两大选择
- [EDA 与设计自动化](../../../../科研方向/EDA与设计自动化.md) — ASIC 流程的每一步都是 EDA 算法的应用
- [处理器架构与编译系统](../../../../科研方向/处理器架构与编译系统.md) — 处理器最终通常以 ASIC 形式实现
