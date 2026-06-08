---
hide:
  - navigation
---
用半导体微加工工艺制造出与力学、热、声、化学等多物理场交互的微纳尺度器件——从手机里的加速度计到超声医学成像探头，MEMS 正是 IC 工艺与传感感知世界的交汇点。

## 这个方向在研究什么

汽车以 60 公里时速撞上护栏，车身开始形变的那一刻，气囊必须在 20 毫秒内充气。再晚一点，驾驶员的头就撞上方向盘了。触发这整个过程的，是一块芯片上一根几十微米的硅弹簧。碰撞产生的减速度让弹簧末端的质量块偏移，两侧梳齿间电容变化，信号送出，点火。这根弹簧不是机床加工的，是用光刻胶和刻蚀液从硅晶圆上直接雕出来的，和做处理器用的是同一套工艺。今天每部 iPhone 里至少有五个这样的器件：加速度计感知方向让画面随握持旋转，陀螺仪让 AR 防抖成为可能，气压传感器辅助室内定位，好几颗 MEMS 麦克风把声波转成电信号、协同降噪。它们物理原理各不相同，却都建立在同一套半导体工艺平台上，单颗几分钱，一片晶圆同时出几千颗。MEMS 的本质只有一件事：用 IC 工艺把某种物理现象翻译成电信号，翻译的物理量不同，但平台是同一套。

<div><svg viewBox="0 0 880 220" style="width:100%;max-width:860px;display:block;margin:1.5em auto;font-family:system-ui,-apple-system,sans-serif">
  <defs>
    <marker id="arr3" markerWidth="8" markerHeight="8" refX="6" refY="3" orient="auto">
      <path d="M0,0 L0,6 L8,3 z" fill="#1E40AF"/>
    </marker>
  </defs>
  <!-- Panel 1: MEMS 加速度计 弹簧-质量系统 -->
  <rect x="10" y="10" width="420" height="200" rx="8" fill="#F8FAFC" stroke="#CBD5E1" stroke-width="1.5"/>
  <text x="220" y="30" text-anchor="middle" font-size="13" font-weight="700" fill="#1E293B">MEMS 加速度计（弹簧-质量系统）</text>
  <!-- Left anchor -->
  <rect x="30" y="88" width="30" height="44" rx="3" fill="#94A3B8" stroke="#64748B" stroke-width="1.5"/>
  <text x="45" y="114" text-anchor="middle" font-size="9" fill="#F8FAFC">锚</text>
  <!-- Left spring (zigzag) -->
  <polyline points="60,110 70,96 80,124 90,96 100,124 110,96 120,110" fill="none" stroke="#D97706" stroke-width="2.5" stroke-linejoin="round"/>
  <!-- Central mass -->
  <rect x="120" y="72" width="160" height="76" rx="5" fill="#BFDBFE" stroke="#3B82F6" stroke-width="2"/>
  <text x="200" y="110" text-anchor="middle" font-size="12" font-weight="600" fill="#1E40AF">质量块</text>
  <text x="200" y="126" text-anchor="middle" font-size="10" fill="#3B82F6">mass</text>
  <!-- Right spring (zigzag) -->
  <polyline points="280,110 290,96 300,124 310,96 320,124 330,96 340,110" fill="none" stroke="#D97706" stroke-width="2.5" stroke-linejoin="round"/>
  <!-- Right anchor -->
  <rect x="340" y="88" width="30" height="44" rx="3" fill="#94A3B8" stroke="#64748B" stroke-width="1.5"/>
  <text x="355" y="114" text-anchor="middle" font-size="9" fill="#F8FAFC">锚</text>
  <!-- Top sense electrode -->
  <rect x="148" y="52" width="104" height="16" rx="3" fill="#DCFCE7" stroke="#16A34A" stroke-width="1.5"/>
  <text x="200" y="63" text-anchor="middle" font-size="9" fill="#166534">固定感应极板</text>
  <!-- Bottom sense electrode -->
  <rect x="148" y="152" width="104" height="16" rx="3" fill="#DCFCE7" stroke="#16A34A" stroke-width="1.5"/>
  <text x="200" y="163" text-anchor="middle" font-size="9" fill="#166534">固定感应极板</text>
  <!-- External force arrow -->
  <line x1="15" y1="110" x2="55" y2="110" stroke="#1E40AF" stroke-width="2" marker-end="url(#arr3)"/>
  <text x="12" y="103" font-size="10" fill="#1E40AF">外力 a</text>
  <!-- Caption -->
  <text x="220" y="184" text-anchor="middle" font-size="10" fill="#475569">质量块在外力下位移 → 改变电容 → 测量加速度</text>
  <text x="220" y="198" text-anchor="middle" font-size="10" fill="#94A3B8">手机 IMU · 汽车 ABS · 无人机飞控</text>
  <!-- Panel 2: CMUT 超声换能器 -->
  <rect x="450" y="10" width="420" height="200" rx="8" fill="#F8FAFC" stroke="#CBD5E1" stroke-width="1.5"/>
  <text x="660" y="30" text-anchor="middle" font-size="13" font-weight="700" fill="#1E293B">CMUT 超声换能器</text>
  <!-- Bottom electrode (substrate) -->
  <rect x="510" y="140" width="300" height="22" rx="3" fill="#E2E8F0" stroke="#94A3B8" stroke-width="1.5"/>
  <text x="660" y="154" text-anchor="middle" font-size="10" fill="#475569">底部电极（衬底）</text>
  <!-- Gap cavity -->
  <rect x="510" y="118" width="300" height="22" rx="2" fill="#EFF6FF" stroke="#BFDBFE" stroke-width="1" stroke-dasharray="4,2"/>
  <text x="660" y="132" text-anchor="middle" font-size="9" fill="#93C5FD">气隙（gap）</text>
  <!-- Membrane (deflected) -->
  <path d="M510,118 Q570,100 660,96 Q750,100 810,118" fill="none" stroke="#D97706" stroke-width="3"/>
  <text x="660" y="92" text-anchor="middle" font-size="10" fill="#92400E">振动薄膜（deflected）</text>
  <!-- Voltage label -->
  <text x="480" y="130" text-anchor="middle" font-size="12" font-weight="700" fill="#7C3AED">V</text>
  <line x1="488" y1="118" x2="510" y2="118" stroke="#7C3AED" stroke-width="1.5"/>
  <line x1="488" y1="140" x2="510" y2="140" stroke="#7C3AED" stroke-width="1.5"/>
  <!-- Ultrasound waves -->
  <path d="M620,70 Q640,55 660,50 Q680,55 700,70" fill="none" stroke="#16A34A" stroke-width="1.5"/>
  <path d="M610,58 Q635,38 660,32 Q685,38 710,58" fill="none" stroke="#16A34A" stroke-width="1.5" opacity="0.7"/>
  <path d="M600,46 Q630,22 660,15 Q690,22 720,46" fill="none" stroke="#16A34A" stroke-width="1.5" opacity="0.4"/>
  <text x="660" y="80" text-anchor="middle" font-size="9" fill="#166534">超声波辐射</text>
  <!-- Caption -->
  <text x="660" y="178" text-anchor="middle" font-size="10" fill="#475569">施加交流电压 → 薄膜振动 → 发射/接收超声</text>
  <text x="660" y="195" text-anchor="middle" font-size="10" fill="#94A3B8">超声指纹识别 · 便携医疗成像</text>
</svg></div>

加速度计翻译的是惯性力。一块几十微米的硅质量块通过折叠弹簧悬在衬底上，两侧排着梳状电极；受到加速度时质量块偏移，可动梳齿和固定梳齿之间的电容差变化，读出电路把这个差值换算成加速度。这个翻译需要同时满足力学、电学和热噪声三方面约束，质量块面积、弹簧刚度、梳齿间距、气膜阻尼每个参数都不能孤立设计，是典型的多物理场协同问题。超声 MEMS 翻译的是声压：CMUT 在振膜和底部电极之间悬空一道气隙，施加交流电压时振膜振动发出超声，接收时声压使振膜形变、电容变化。更新的 PMUT 在振膜上沉积压电材料，灵敏度更高，高通的屏下超声指纹走的就是这条路线。这两类翻译机制都已经量产。把结构继续往下做小，量子力学就进场了。

把结构从微米压到纳米，力学发生质变。在微米尺度，热涨落是背景噪声；到了纳米尺度，热涨落的量级和器件本身的运动相当，成为测量的极限。SiN 纳米谐振鼓的 Q 从微米器件的 10⁵ 做到了 10⁸，谐振器能感知的最小质量精细到单个分子。一个蛋白质落在薄膜上，频率偏移就能被读出，每次只测一个分子，是经典方法根本做不到的分辨率。再往极限走，量子 NEMS 把振子冷却到量子基态，与光场耦合，振子的运动态本身进入量子叠加，开出量子传感和引力波探测的空间。**芯片级原子钟**走的是另一条极致化的路。传统铷钟是机柜级设备，GPS 拒止的场景下用不了。MEMS 工艺把原子蒸气封进微米尺度的玻璃气室，VCSEL 激光锁定原子跃迁频率，微加热线圈和磁补偿线圈全部集成，整颗钟缩到米粒大小，频率稳定度达到 10⁻¹¹，在 GPS 信号到达不了的地方自主计时。

另一道边界来自材料本身。硅不兼容生命体，也不会弯曲，这两个限制把 MEMS 挡在人体和曲面之外。BioMEMS 绕过第一道墙，把结构材料换成 PDMS、水凝胶和可降解聚合物，这些材料柔软，能和组织长期共存，最终被人体吸收。植入式闭环神经接口读取脊髓信号、驱动肌肉电刺激，让截瘫患者重新控制肢体；organ-on-chip 在微流控芯片上重建肺、肝、肠的微环境，让药物毒性测试不再完全依赖动物实验。柔性 MEMS 绕过第二道墙。石墨烯（约 0.34 nm）和 MoS₂（约 0.65 nm）制成的 NEMS 薄膜只有原子级厚度，能感知单个原子吸附引起的质量变化，也能共形贴附在曲面上；可拉伸版本贴在皮肤上持续监测电生理信号；可降解版本在体内完成诊断任务后被吸收，不需要二次手术取出。材料的边界，决定了 MEMS 能进的环境。

### 核心研究问题

- **惯性与物理量传感器**：加速度计、陀螺、压力、声矢量都要在同一张仿真图里把质量块面积、弹簧刚度、梳齿间距、气膜阻尼一次算清，力学、电学、热噪声约束改一个就崩一片。
- **超声与射频声学换能器**：CMUT 靠气隙电容收发超声，PMUT 沉积压电材料、灵敏度更高、撑起了屏下指纹，FBAR/SAW/AlN 谐振器又把这套压电平台搬进射频滤波，换一种机制就换一套设计逻辑。
- **生物 MEMS 与柔性可穿戴**：硅不兼容生命体也不会弯曲，得换成 PDMS、水凝胶或可降解聚合物，让植入式神经接口、器官芯片和贴皮电子皮肤能与组织长期共存。
- **气体传感与谐振探测**：氧化物半导体气敏薄膜要在低功耗下识别痕量气体，微纳谐振器又要把 Q 从 10⁵ 推到 10⁸ 才能在频率偏移里数清落上来的痕量质量。
- **微纳能量采集与自供能微系统**：压电、摩擦纳米发电机和振动能量采集要从环境里抠出微瓦级电力，再和无源无线读出凑成不靠电池自己运转的微系统。
- **微纳加工工艺与微执行器**：硅基与非硅工艺、光刻刻蚀释放每一步的应力和兼容性都左右成品率，MEMS 继电器、微执行器、微机器人这些会动的结构更要工艺扛得住反复驱动。
- **CMOS-MEMS 集成与读出电路（IC 切口）**：微弱的电容差被寄生和热噪声淹没，要把读出 ASIC 和 MEMS 结构单片或近距集成，封装、应力、工艺兼容每一处都决定器件能不能量产。

### 知识路径

```mermaid
graph LR
    A["固体力学\n梁·薄膜·振动·热涨落"] --> B["MEMS器件原理\n换能机制·等效电路"]
    C["半导体物理\n材料·掺杂"] --> D["微加工工艺\n光刻·刻蚀·薄膜沉积·释放"]
    D --> B
    M["结构材料\nPDMS·水凝胶·二维薄膜"] --> D
    E["接口电路\n放大器·ADC·读出电路"] --> F["MEMS系统集成\nCMOS-MEMS·封装"]
    B --> F
    A --> F

    classDef core fill:#FDE8D8,stroke:#C0530A,stroke-width:2px
    class A,B,C,D,E,F,M core
```

图中节点对应以下知识板块（按需选修）：

- [物理基础](../学习地图/物理/index.md)（固体物理·半导体物理——梁与薄膜的力学、热涨落、材料与掺杂）
- [器件与工艺](../学习地图/器件与工艺/index.md)（器件原理·IC工艺原理——换能机制与光刻/刻蚀/沉积/释放工艺）
- [电路](../学习地图/电路/index.md)（模拟电路·接口电路方向——电容差读出、热噪声与 CMOS-MEMS 集成）

## 这个方向适合谁

这个方向适合喜欢亲手把物理现象翻译成电信号、还想自己设计翻译机制的人，惯性力变成梳齿电容差，一个分子的质量变成谐振频率偏移。微电子本科最顺的硬件切口在读出电路与 CMOS-MEMS 集成，电容差怎么读、热噪声把灵敏度卡在哪正是你的主场，再把梁与薄膜的力学补上就能起步，做惯性、声学或气体传感的读出芯片，对得上歌尔、敏芯这类 MEMS 公司。诚实说门槛在那条很长的闭环，设计、流片、工艺验证到测试常几个月走一圈，舞台是 Transducers，硬通货是真器件跑出的曲线。

## 学术界

### 课题组

**境内**

<div class="grid cards prof-collapse" markdown>

-   **[金晓冬](https://sme.fudan.edu.cn/83/6c/c31146a689004/page.htm)** <span class="badge-fudan">复旦</span>

    新型 MEMS 器件设计 · MEMS 专用 ASIC 芯片 · MEMS 可靠性

-   **[卢红亮](https://sme.fudan.edu.cn/60/ba/c31133a352442/page.htm)** <span class="badge-fudan">复旦</span>

    MEMS 气体传感器 · 新型氧化物半导体材料 · ALD 纳米功能薄膜

-   **[任天令](https://www.sic.tsinghua.edu.cn/info/1033/1545.htm)** <span class="badge-tsinghua">清华</span>

    石墨烯/二维材料微纳器件 · 柔性可穿戴传感器 · 声学 MEMS · IEEE Fellow

-   **[阮勇](https://faculty.dpi.tsinghua.edu.cn/ruanyong/zh_CN/index/13066/list/index.htm)** <span class="badge-tsinghua">清华</span>

    硅基 MEMS 加工技术 · MEMS 继电器 · 恶劣环境传感器与执行器

-   **[张大成](https://ic.pku.edu.cn/szdw/zzjs/Z1/zdc/index.htm)** <span class="badge-pku">北大</span>

    硅 MEMS 微加工工艺 · CMOS-MEMS 单片集成 · 多物理量传感器

-   **[杨振川](https://ic.pku.edu.cn/szdw/zzjs/jcwnxtx1/yzc/index.htm)** <span class="badge-pku">北大</span>

    物理量 MEMS 传感器（声矢量传感器、流量、压力） · 惯性传感器

-   **[张海霞](https://ic.pku.edu.cn/szdw/zzjs/Z1/zhx/index.htm)** <span class="badge-pku">北大</span> <span class="prof-w"></span>

    微纳系统 · MEMS 微能源（压电/摩擦纳米发电机） · 微纳制造

-   **[李志宏](https://ic.pku.edu.cn/szdw/zzjs/L1/lzh/index.htm)** <span class="badge-pku">北大</span>

    生物 MEMS（BioMEMS） · 微纳流控系统 · 植入式神经探针

-   **[卢奕鹏](https://ic.pku.edu.cn/szdw/zzjs/jcwnxtx1/lyp/index.htm)** <span class="badge-pku">北大</span>

    压电 MEMS（PMUT）超声传感器 · CMOS-MEMS 集成 · 超声指纹识别

-   **[刘景全](https://icisee.sjtu.edu.cn/jiaoshiml/782.html)** <span class="badge-other">交大</span>

    MEMS 脑机接口器件与微系统 · 极端环境 MEMS 智能传感器 · 微纳加工与集成

-   **[丁桂甫](https://gpmems.sjtu.edu.cn/Web/Show/1014)** <span class="badge-other">交大</span>

    非硅 MEMS 微纳加工 · MEMS 微执行器/微继电器 · 高密度 3D 集成制造

-   **[杨卓青](https://faculty.sjtu.edu.cn/yangzhuoqing)** <span class="badge-other">交大</span>

    MEMS 微纳传感器与执行器 · MEMS 惯性开关 · 柔性纤维传感器与电子皮肤

-   **[张文明](https://me.sjtu.edu.cn/teacher_directory1/zhangwenming)** <span class="badge-other">交大</span>

    微纳机电系统（M/NEMS）动力学 · 微机械谐振器 · 振动能量采集

-   **[王晓林](https://imr.sjtu.edu.cn/sz_teachers/3303.html)** <span class="badge-other">交大</span>

    生物 MEMS（BioMEMS） · 微流控器官芯片/类器官 · 微纳机器人与生物医学应用

-   **[谢金](https://person.zju.edu.cn/xiejin)** <span class="badge-other">浙大</span>

    MEMS 设计与加工 · 微传感器与执行器 · 振动与声学测量

-   **[罗吉魁（Jikui Luo）](https://person.zju.edu.cn/en/LuoJikui)** <span class="badge-other">浙大</span>

    声表面波（SAW）/薄膜体声波（FBAR）谐振器 · 物理化学传感器 · 自供能无线微系统

-   **[骆季奎](https://sensor.zju.edu.cn/zh/author/骆季奎/)** <span class="badge-other">浙大</span>

    生物 MEMS · 微纳能量收集 · 无线无源与自供能传感系统

-   **[车录锋](https://person.zju.edu.cn/mems)** <span class="badge-other">浙大</span>

    高性能 MEMS 振动/惯性传感器 · 集成微系统 · 可穿戴触觉传感

-   **[董树荣](https://person.zju.edu.cn/sean)** <span class="badge-other">浙大</span>

    RF MEMS · MEMS 智能传感器 · 柔性电子/电子皮肤 · 微纳系统集成

-   **[左成杰](https://sme.ustc.edu.cn/2022/0601/c30996a556916/page.htm)** <span class="badge-other">中科大</span>

    RF-MEMS · 压电（AlN）谐振器 · FBAR/SAW 滤波器 · MEMS-IC 协同集成

-   **[许磊](http://leinao.ustc.edu.cn/2021/0430/c25925a483537/page.htm)** <span class="badge-other">中科大</span>

    低功耗 MEMS 气体传感器 · MEMS 流量传感器 · 嗅觉芯片

-   **[潘挺睿](https://faculty.ustc.edu.cn/pantingrui/zh_CN/)** <span class="badge-other">中科大</span>

    柔性离电触觉传感（FITS） · 可穿戴/植入式生物 MEMS · 微流控与微纳加工

</div>
<button class="prof-show-all">显示全部 ↓</button>

**境外**

<div class="grid cards prof-collapse" markdown>

-   **[Yi-Kuen Lee（李貽昆）](https://seng.hkust.edu.hk/about/people/faculty/yi-kuen-lee)** <span class="badge-hk">港科大</span>

    CMOS MEMS 传感器（AIoT 应用） · 微纳流控生物医疗 MEMS

-   **[Norman Tien（田之楠）](https://www.eee.hku.hk/people/nctien/)** <span class="badge-hk">港大</span>

    MEMS 微纳制造（通信/医疗/环境监测）· Taikoo Chair Professor of Microsystems Technology

-   **[Butrus Khuri-Yakub](https://kyg.stanford.edu/)** <span class="badge-intl">Stanford</span>

    电容式微加工超声换能器（CMUT） · 医学超声成像 · 化学/生物传感器

-   **[Clark T.-C. Nguyen](https://people.eecs.berkeley.edu/~ctnguyen/index.html)** <span class="badge-intl">UC Berkeley</span>

    MEMS 谐振器/滤波器/振荡器 · RF MEMS 信号处理 · BSAC 执行主任

-   **[Kristofer Pister](https://www2.eecs.berkeley.edu/Faculty/Homepages/pister.html)** <span class="badge-intl">UC Berkeley</span>

    自主微系统（Smart Dust 概念发明者） · 硅微机器人 · MEMS 传感节点

-   **[Khalil Najafi](https://eecs.engin.umich.edu/people/najafi-khalil/)** <span class="badge-intl">U Michigan</span>

    MEMS 惯性传感器（微机械振动环陀螺先驱） · 晶圆级气密封装 · 神经接口微系统

-   **[Yogesh Gianchandani](https://gianchandani.engin.umich.edu/)** <span class="badge-intl">U Michigan</span>

    微传感器/微执行器（惯性/环境/生物医疗） · 微流控 · WIMS² Institute 主任

-   **[Gary Fedder](https://www.ece.cmu.edu/directory/bios/fedder-gary.html)** <span class="badge-intl">CMU</span>

    CMOS-MEMS 单片集成工艺与设计方法学 · 微加速度计与陀螺 · IEEE Fellow

-   **[Yansong Yang（杨岩松）](https://www.yansongyang.com/)** <span class="badge-hk">港科大</span>

    压电 MEMS 谐振器与滤波器 · RF MEMS 微系统 · 铌酸锂薄膜异质集成

</div>
<button class="prof-show-all">显示全部 ↓</button>

### 学术会议与期刊

<div class="dm-wrap chip-block">
  <div class="dm-row dm-device"><span class="dm-lbl">会议</span><span class="dm-chips">
    <span class="dm-chip dm-chip--static" title="国际固态传感器、执行器与微系统大会">Transducers</span>
    <span class="dm-chip dm-chip--static" title="IEEE 国际微机电系统大会">IEEE MEMS</span>
    <span class="dm-chip dm-chip--static" title="IEEE 国际传感器大会">IEEE Sensors</span>
    <span class="dm-chip dm-chip--static" title="希尔顿黑德固态传感器、执行器与微系统研讨会">Hilton Head Workshop</span>
    <span class="dm-chip dm-chip--static" title="国际电子器件大会（器件级）">IEDM</span>
  </span></div>
  <div class="dm-row dm-arch"><span class="dm-lbl">期刊</span><span class="dm-chips">
    <span class="dm-chip dm-chip--static" title="IEEE/ASME Journal of Microelectromechanical Systems（微机电系统汇刊）">JMEMS</span>
    <span class="dm-chip dm-chip--static" title="IEEE 传感器期刊">IEEE Sensors Journal</span>
    <span class="dm-chip dm-chip--static" title="传感器与执行器期刊 A/B 辑">Sensors and Actuators A/B</span>
    <span class="dm-chip dm-chip--static" title="微系统与纳米工程">Microsystems & Nanoengineering</span>
    <span class="dm-chip dm-chip--static" title="IEEE Transactions on Electron Devices（电子器件汇刊）">IEEE TED</span>
  </span></div>
</div>

## 毕业去向

### 企业

<div class="dm-wrap chip-block">
  <div class="dm-row dm-device"><span class="dm-lbl">国内</span><span class="dm-chips">
    <span class="dm-chip dm-chip--stock"><a href="https://www.goertek.com/">歌尔股份</a><span class="sq" data-stock="sz:002241"></span></span>
    <span class="dm-chip dm-chip--stock"><a href="https://www.aactechnologies.com/">瑞声科技（AAC）</a><span class="sq" data-stock="hk:02018"></span></span>
    <span class="dm-chip dm-chip--stock"><a href="https://www.smeiic.com/">赛微电子（Silex/赛莱克斯）</a><span class="sq" data-stock="sz:300456"></span></span>
    <span class="dm-chip dm-chip--stock"><a href="https://www.memsensing.com/">敏芯股份（MEMSensing）</a><span class="sq" data-stock="sh:688286"></span></span>
    <a class="dm-chip" href="https://www.qstcorp.com/">矽睿科技（QST）</a>
    <span class="dm-chip dm-chip--stock"><a href="http://www.miramems.com/">明皜传感（MiraMEMS）</a><span class="sq" data-stock="sz:002079"></span></span>
  </span></div>
  <div class="dm-row dm-arch"><span class="dm-lbl">国外</span><span class="dm-chips">
    <a class="dm-chip" href="https://www.bosch-sensortec.com/">Bosch Sensortec</a>
    <span class="dm-chip dm-chip--stock"><a href="https://www.st.com/">STMicroelectronics</a><span class="sq" data-stock="us:STM"></span></span>
    <span class="dm-chip dm-chip--stock"><a href="https://invensense.tdk.com/">TDK InvenSense</a><span class="sq" data-stock="yf:6762.T"></span></span>
    <span class="dm-chip dm-chip--stock"><a href="https://www.qualcomm.com/products/features/fingerprint-sensors">Qualcomm</a><span class="sq" data-stock="us:QCOM"></span></span>
    <span class="dm-chip dm-chip--stock"><a href="https://www.butterflynetwork.com/">Butterfly Network</a><span class="sq" data-stock="us:BFLY"></span></span>
    <span class="dm-chip dm-chip--stock"><a href="https://www.qorvo.com/">Qorvo</a><span class="sq" data-stock="us:QRVO"></span></span>
    <span class="dm-chip dm-chip--stock"><a href="https://www.microchip.com/en-us/products/clock-and-timing/components/atomic-clocks">Microchip</a><span class="sq" data-stock="us:MCHP"></span></span>
    <span class="dm-chip dm-chip--stock"><a href="https://www.honeywell.com/">Honeywell</a><span class="sq" data-stock="us:HON"></span></span>
  </span></div>
</div>

### 科研院所

<div class="dm-wrap chip-block">
  <div class="dm-row dm-device"><span class="dm-lbl">国内</span><span class="dm-chips">
    <a class="dm-chip" href="https://www.sim.cas.cn/" title="传感技术全国重点实验室，硅微机械加工与微系统">中科院上海微系统与信息技术研究所</a>
    <a class="dm-chip" href="http://sinano.cas.cn/" title="MEMS 中试/代工平台与微纳加工">中科院苏州纳米技术与纳米仿生研究所</a>
    <a class="dm-chip" href="https://www.ime.ac.cn/" title="MEMS 工艺平台与传感器集成">中科院微电子研究所</a>
  </span></div>
  <div class="dm-row dm-arch"><span class="dm-lbl">国外</span><span class="dm-chips">
    <a class="dm-chip" href="https://bsac.berkeley.edu/" title="全球顶尖高校 MEMS 研究中心">Berkeley Sensor & Actuator Center (BSAC)</a>
    <a class="dm-chip" href="https://lnf.umich.edu/" title="惯性传感器、晶圆级封装、神经接口">Michigan 集成传感器中心（WIMS²/Lurie Nanofab）</a>
    <a class="dm-chip" href="https://www.imec-int.com/en" title="硅基传感器与超声 MEMS 工艺">imec</a>
    <a class="dm-chip" href="https://www.nist.gov/pml/time-and-frequency-division" title="芯片级原子钟发源地、NEMS 精密测量">NIST 时间频率部</a>
    <a class="dm-chip" href="https://www.isit.fraunhofer.de/" title="MEMS 工艺与微系统量产化（欧洲）">Fraunhofer ISIT</a>
  </span></div>
</div>
