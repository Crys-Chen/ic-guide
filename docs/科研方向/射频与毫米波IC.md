---
hide:
  - navigation
---

设计让无线信号在空气中高速传播的模拟芯片——从手机基带到毫米波雷达，从 5G 基站到卫星互联网。

## 这个方向在研究什么

二十年前，一部手机能做的不过是打电话、发短信；今天，你在时速三百公里的高铁上还能刷直播、开视频会议。这中间隔着的不只是几代手机，而是无线能搬运的数据量翻了不知多少倍。每一次跃迁背后都是同一件事，那就是可用的带宽变宽了。而带宽不会凭空冒出来，它藏在频谱里更高的地方——低频这块地段好用又抢手，早被广播、电视、4G、WiFi 占得满满当当，新的数据洪流挤不进去，只能往更高的频率上走。无线通信这几十年的主线，就是不断往高处走。可越往高处，物理越不配合。射频与毫米波集成电路研究的，正是这场拉锯：一边是对带宽永不满足的胃口把战线往高频推，一边是越来越难对付的物理在每一截设卡收税。

往高处走，第一道关卡出现在电路内部。在低频世界里，工程师可以把一根导线看成理想的连接：电流从这头到那头，不损耗、不延迟、不辐射。可当信号频率爬进 GHz 量级，这个假设彻底失效。一根几毫米长的走线，其电感就足以改变信号的相位；电路板上两根挨着的走线，寄生的耦合电容能把一路信号悄悄漏给另一路；晶体管自身的增益还会随频率升高一路下滑，到几十 GHz 已所剩无几。射频工程师不得不换一套语言来描述电路：用 S 参数代替增益，用噪声系数衡量灵敏度，用史密斯圆图判断阻抗匹配得好不好。这套语言是模拟电路在高频下的延伸，物理图像却已面目全非。这，就是往高处走要先交的入场费。

<div><svg viewBox="0 0 860 220" xmlns="http://www.w3.org/2000/svg" style="width:100%;max-width:860px;display:block;margin:1.5rem auto;">
  <defs>
    <marker id="arrowBlue" markerWidth="8" markerHeight="8" refX="6" refY="3" orient="auto">
      <path d="M0,0 L0,6 L8,3 z" fill="#3B82F6"/>
    </marker>
    <marker id="arrowRed" markerWidth="8" markerHeight="8" refX="6" refY="3" orient="auto">
      <path d="M0,0 L0,6 L8,3 z" fill="#DC2626"/>
    </marker>
    <marker id="arrowGreen" markerWidth="8" markerHeight="8" refX="6" refY="3" orient="auto">
      <path d="M0,0 L0,6 L8,3 z" fill="#16A34A"/>
    </marker>
  </defs>
  <!-- Background -->
  <rect width="860" height="220" rx="10" fill="#F8FAFC" stroke="#CBD5E1" stroke-width="1.5"/>
  <!-- Title labels -->
  <text x="430" y="18" text-anchor="middle" font-size="11" fill="#64748B">收发机（Transceiver）框图</text>
  <!-- Antenna symbol (left) -->
  <line x1="48" y1="110" x2="48" y2="150" stroke="#475569" stroke-width="2"/>
  <line x1="28" y1="90" x2="48" y2="110" stroke="#475569" stroke-width="2"/>
  <line x1="68" y1="90" x2="48" y2="110" stroke="#475569" stroke-width="2"/>
  <line x1="18" y1="78" x2="48" y2="98" stroke="#475569" stroke-width="1.5"/>
  <line x1="78" y1="78" x2="48" y2="98" stroke="#475569" stroke-width="1.5"/>
  <text x="48" y="168" text-anchor="middle" font-size="10" fill="#475569">天线</text>
  <!-- Splitter line from antenna -->
  <line x1="48" y1="130" x2="95" y2="130" stroke="#475569" stroke-width="1.5"/>
  <line x1="95" y1="70" x2="95" y2="175" stroke="#475569" stroke-width="1.5"/>
  <!-- RX Path (top, blue) -->
  <line x1="95" y1="70" x2="130" y2="70" stroke="#3B82F6" stroke-width="2" marker-end="url(#arrowBlue)"/>
  <!-- LNA box -->
  <rect x="132" y="52" width="95" height="36" rx="5" fill="#DBEAFE" stroke="#3B82F6" stroke-width="1.5"/>
  <text x="180" y="68" text-anchor="middle" font-size="11" font-weight="bold" fill="#1E40AF">LNA</text>
  <text x="180" y="81" text-anchor="middle" font-size="9" fill="#1D4ED8">低噪声放大器</text>
  <!-- LNA → Mixer -->
  <line x1="227" y1="70" x2="262" y2="70" stroke="#3B82F6" stroke-width="2" marker-end="url(#arrowBlue)"/>
  <!-- Mixer RX box -->
  <rect x="264" y="52" width="95" height="36" rx="5" fill="#DBEAFE" stroke="#3B82F6" stroke-width="1.5"/>
  <text x="311" y="68" text-anchor="middle" font-size="11" font-weight="bold" fill="#1E40AF">Mixer</text>
  <text x="311" y="81" text-anchor="middle" font-size="9" fill="#1D4ED8">混频器（下变频）</text>
  <!-- Mixer → ADC -->
  <line x1="359" y1="70" x2="394" y2="70" stroke="#3B82F6" stroke-width="2" marker-end="url(#arrowBlue)"/>
  <!-- ADC box -->
  <rect x="396" y="52" width="80" height="36" rx="5" fill="#DBEAFE" stroke="#3B82F6" stroke-width="1.5"/>
  <text x="436" y="68" text-anchor="middle" font-size="11" font-weight="bold" fill="#1E40AF">ADC</text>
  <text x="436" y="81" text-anchor="middle" font-size="9" fill="#1D4ED8">模数转换</text>
  <!-- ADC → Baseband -->
  <line x1="476" y1="70" x2="511" y2="70" stroke="#3B82F6" stroke-width="2" marker-end="url(#arrowBlue)"/>
  <!-- Baseband box -->
  <rect x="513" y="45" width="120" height="50" rx="5" fill="#EDE9FE" stroke="#7C3AED" stroke-width="1.5"/>
  <text x="573" y="65" text-anchor="middle" font-size="11" font-weight="bold" fill="#6D28D9">基带数字</text>
  <text x="573" y="80" text-anchor="middle" font-size="9" fill="#5B21B6">Modem / DSP</text>
  <text x="573" y="92" text-anchor="middle" font-size="9" fill="#5B21B6">RX ↑ / TX ↓</text>
  <!-- TX Path (bottom, red) -->
  <!-- Baseband → DAC -->
  <line x1="513" y1="175" x2="478" y2="175" stroke="#DC2626" stroke-width="2" marker-end="url(#arrowRed)"/>
  <!-- DAC box -->
  <rect x="396" y="157" width="80" height="36" rx="5" fill="#FEE2E2" stroke="#DC2626" stroke-width="1.5"/>
  <text x="436" y="173" text-anchor="middle" font-size="11" font-weight="bold" fill="#B91C1C">DAC</text>
  <text x="436" y="186" text-anchor="middle" font-size="9" fill="#991B1B">数模转换</text>
  <!-- DAC → PA -->
  <line x1="396" y1="175" x2="361" y2="175" stroke="#DC2626" stroke-width="2" marker-end="url(#arrowRed)"/>
  <!-- PA box -->
  <rect x="264" y="157" width="95" height="36" rx="5" fill="#FEE2E2" stroke="#DC2626" stroke-width="1.5"/>
  <text x="311" y="173" text-anchor="middle" font-size="11" font-weight="bold" fill="#B91C1C">PA</text>
  <text x="311" y="186" text-anchor="middle" font-size="9" fill="#991B1B">功率放大器</text>
  <!-- PA → Antenna -->
  <line x1="264" y1="175" x2="129" y2="175" stroke="#DC2626" stroke-width="2" marker-end="url(#arrowRed)"/>
  <!-- Mixer TX box -->
  <rect x="132" y="157" width="95" height="36" rx="5" fill="#FEE2E2" stroke="#DC2626" stroke-width="1.5"/>
  <text x="180" y="173" text-anchor="middle" font-size="11" font-weight="bold" fill="#B91C1C">Mixer</text>
  <text x="180" y="186" text-anchor="middle" font-size="9" fill="#991B1B">混频器（上变频）</text>
  <!-- PA ← Mixer TX -->
  <!-- already covered by the line above; add mixer→antenna segment -->
  <line x1="132" y1="175" x2="97" y2="175" stroke="#DC2626" stroke-width="2" marker-end="url(#arrowRed)"/>
  <!-- PLL/VCO (center, green) -->
  <rect x="640" y="85" width="130" height="50" rx="8" fill="#DCFCE7" stroke="#16A34A" stroke-width="1.5"/>
  <text x="705" y="106" text-anchor="middle" font-size="12" font-weight="bold" fill="#15803D">PLL / VCO</text>
  <text x="705" y="122" text-anchor="middle" font-size="9.5" fill="#166534">本振（LO）信号源</text>
  <!-- PLL → RX Mixer (dashed green) -->
  <line x1="640" y1="100" x2="360" y2="80" stroke="#16A34A" stroke-width="1.5" stroke-dasharray="5,3" marker-end="url(#arrowGreen)"/>
  <!-- PLL → TX Mixer (dashed green) -->
  <line x1="640" y1="120" x2="360" y2="165" stroke="#16A34A" stroke-width="1.5" stroke-dasharray="5,3" marker-end="url(#arrowGreen)"/>
  <!-- Labels -->
  <text x="180" y="38" text-anchor="middle" font-size="10" fill="#3B82F6">RX 接收链路</text>
  <text x="311" y="210" text-anchor="middle" font-size="10" fill="#DC2626">TX 发射链路</text>
  <text x="705" y="150" text-anchor="middle" font-size="9" fill="#166534">为 RX/TX 提供载波频率</text>
</svg></div>

交完入场费，真正的硬仗才开始，而它的根子是一个悬殊到离谱的对比。无线通信说到底是一场长途运输：信号从发射机出发，穿过空旷的空间，抵达接收机。发射端的功率放大器（PA）能把信号吼到几瓦，可这点能量一撒进空间就衰减得飞快，等传到对面接收机时，往往只剩 -100 dBm，也就是 0.1 皮瓦。一头是瓦，一头是飞瓦，中间差了十几个数量级。射频电路里几乎所有精巧的设计，都是在为填平这道鸿沟服务。工程师把这本从发射到接收、一分贝一分贝记下来的账，叫作链路预算。

鸿沟的两端，各站着一个绕不开的物理矛盾。接收端的低噪声放大器（LNA）要从一片噪声的地板里，把那个微弱到 0.1 皮瓦的信号捞起来，还不能让自己的噪声把它淹掉。可它越想压低噪声，就越需要更大的偏置电流。这条底线是热噪声划下的物理下限，再巧妙的电路拓扑也绕不过去，能做的只是在噪声和功耗之间找一个能接受的折中。发射端的 PA 戴着另一副镣铐：想输出大功率，就得把晶体管推进非线性区，可非线性会冒出谐波，污染相邻的信道；想保持干净的线性，就得把工作点往回压，效率随之塌下来。一个 4G 基站的 PA，效率常年只有三四成，剩下的电全白白变成了热。这两对矛盾都不是设计技巧不到位，而是物理划死的硬底线；频率再往上爬，它们只会被逼得更紧。

信号频率每往上爬一截，链路预算这本账就更难平，因为空间对高频信号收的过路费更重。路径损耗大致与频率的平方成正比，28 GHz 的信号比 2.4 GHz 的在同样距离上要多衰减约 20 dB，功率一下子弱到百分之一。进了毫米波频段（30 GHz 以上），这道窟窿大得几乎没法靠单根天线硬扛。补救的办法叫相控阵：与其用一根天线朝四面八方广播，不如把几十上百个微小的天线单元排成阵列，精确控制每个单元发射信号的相位，让这些电磁波在目标方向上彼此叠加、在别的方向上相互抵消，把原本散开的能量拧成探照灯似的一束波束，硬生生从空间手里把链路预算抢回来。一部 5G 毫米波终端，会在指甲盖大小的地方塞下上百个天线单元和配套的移相器、放大器，毫秒之间就能把波束对准基站。这种集成度十年前还难以想象，如今是这个方向最热的战场之一。

相控阵把这件事推到极致，就有了这两年很火的手机直连卫星。平时手机连的基站，说到底是架在几百米外铁塔上的一个中继；卫星不过是把这个中继搬到了几百公里高的轨道上。难处全压在链路预算上：手机功率小、天线小，信号要够到天上的卫星，这道账比连地面基站难得多。早期只能勉强发几条求救短信，如今靠卫星上那面巨大的相控阵把波束死死锁在地面的手机上，才慢慢做到打电话和低速上网。把同一套毫米波收发机换个用法，它又成了汽车前脸里的 77 GHz 雷达——发一段频率随时间变化的信号，靠回波的频率偏移算出前车的距离和速度，雨雪雾天里看得比摄像头清楚。

再往上，就到了这条路眼下能望见的尽头：太赫兹频段（300 GHz 以上）。这里路径损耗更凶，更棘手的是连晶体管都快不够用——频率高到这个地步，普通晶体管的增益已经枯竭，这段频谱长期因为找不到趁手的有源器件而几乎空白。这几年情况才开始松动，ISSCC 上不断有人用标准 CMOS 工艺做出能在太赫兹工作的收发机，把电路设计的边界又往上顶了一截。这条往高处要带宽的路到底还能走多远，眼下没人知道答案，而这恰恰是这个方向最前沿的问题。

### 核心研究问题

- **高频下的"理想导线"失效**：进入 GHz 后，一根几毫米走线的电感、平行线间的耦合电容都不能再忽略，晶体管本征增益随频率快速跌落。怎样用 S 参数、传输线模型重建一套在高频仍站得住的设计直觉？
- **LNA 的噪声-功耗对立**：更低的噪声系数要求更大的偏置电流，而这条底线是热噪声的量子极限，无法靠巧妙拓扑绕过。在 -100 dBm 的微弱信号面前，噪声与功耗究竟能压到哪个折中点？
- **PA 的线性-效率两难**：要高输出就得把晶体管推进非线性区，可非线性带来谐波失真、干扰邻道；要线性就得回退工作点，效率随之崩塌（基站 PA 常年只有 30-40%）。能不能既线性又高效，而不是二选一？
- **毫米波路径损耗与相控阵**：28 GHz 比 2.4 GHz 同距离多衰减约 20 dB（功率弱 100 倍），只能靠把上百个天线单元、移相器、放大器塞进指甲盖大小的模组、用波束赋形把能量"探照灯式"聚向目标。这种集成度的极限在哪？
- **毫米波/太赫兹 SoC 的边界**：77 GHz FMCW 雷达要把发射、接收、ADC 做成一块毫米波 SoC；300 GHz 以上此前因缺有源器件几近空白。标准 CMOS 到底能把收发机推到多高的频率？

### 知识路径

```mermaid
graph LR
    A["工程数学\n复变·积分变换"] --> B["信号与系统"]
    B --> C["模拟电子线路"]
    C --> D["模拟IC设计原理\n差分对·运放·噪声"]
    D --> E["高频电子线路\nS参数·传输线·匹配"]
    E --> F["射频集成电路\nLNA·混频器·VCO·PA·PLL"]

    classDef core fill:#E6FFEC,stroke:#276749,stroke-width:2px
    class A,B,C,D,E,F core
```

图中节点对应以下知识板块（按需选修）：

- [电路（模拟方向）](../学习地图/电路/index.md)
- [器件与工艺](../学习地图/器件与工艺/index.md)
- [系统架构（信号与系统）](../学习地图/系统架构/index.md)

## 这个方向适合谁

这个方向适合对"高频物理"有天然兴趣、并且乐意把电磁场当成第一性约束的人。你得习惯用 S 参数和噪声系数而不是电压增益来描述一个放大器，能从史密斯圆图上一眼看出阻抗匹配的状态，也能接受"几十微米的走线在毫米波频段会变成一根天线"这种在低频里根本不存在的事实。这个方向最迷人也最折磨人的地方，是它逼你直面那些绕不过去的物理权衡——LNA 的噪声和功耗、PA 的线性和效率——这些不是设计技巧问题，而是物理底线，你能做的是在底线之上找最优折中，而不是消灭矛盾。

日常节奏大致是：在 Cadence Virtuoso 里搭晶体管级电路 → 跑 SpectreRF 做 S 参数、噪声、非线性仿真 → 用 HFSS 或 Momentum 做电磁仿真，把片上传输线、天线和封装版图一寸寸优化 → 流片 → 在探针台上用矢量网络分析仪、频谱仪、噪声系数仪去测真实芯片。流片周期常常半年起步，测试窗口却很短，一次掩膜错误就要再等一轮，所以这个方向格外吃耐心、吃测试方案的设计能力，也吃那种"仿真和实测对不上时还能沉住气找原因"的韧性。

如果你更喜欢纯数学建模、写算法、和软件而非射频仪器打交道，或者受不了流片这种以月计的反馈延迟，这个方向可能不适合你。但如果你想把信号从天线一路打通到基带、把电磁场和电路设计真正连成一个连续的物理图像，它会很对胃口——而且与雷达、卫星通信、国防、车载毫米波的产业绑定很深，就业面宽，代价是学习曲线陡。

## 学术界

### 课题组

**境内**

<div class="grid cards prof-collapse" markdown>

-   **[王志华](https://www.sic.tsinghua.edu.cn/info/1014/1791.htm)** <span class="badge-tsinghua">清华</span>

    射频/混合信号 IC · RFID 芯片 · 高速高精度 ADC

-   **[李宇根（Woogeun Rhee）](https://www.x-mol.com/university/faculty/243668)** <span class="badge-tsinghua">清华</span>

    PLL/频率综合器 · 射频混合信号 IC · 毫米波时钟系统

-   **[陈文华](https://web.ee.tsinghua.edu.cn/chenwenhua/zh_CN/index.htm)** <span class="badge-tsinghua">清华</span>

    射频功率放大器效率优化 · 5G/6G 线性化技术 · Doherty PA

-   **[邓伟](https://www.sic.tsinghua.edu.cn/info/1014/1823.htm)** <span class="badge-tsinghua">清华</span>

    高效率毫米波 PA 设计

-   **[池保勇](https://www.sic.tsinghua.edu.cn/info/1014/1825.htm)** <span class="badge-tsinghua">清华</span>

    CMOS 毫米波收发机 · 5G 射频前端

-   **[贾海昆](https://www.sic.tsinghua.edu.cn/info/1014/1815.htm)** <span class="badge-tsinghua">清华</span>

    太赫兹 CMOS 收发机 · 毫米波雷达 IC

-   **[姜汉钧](https://www.sic.tsinghua.edu.cn/info/1014/1814.htm)** <span class="badge-tsinghua">清华</span>

    低功耗无线神经记录芯片 · 高精度 ADC · IoT 混合信号 IC

-   **[叶乐](https://ic.pku.edu.cn/szdw/zzjs/jcdlsjx1/yl/index.htm)** <span class="badge-pku">北大</span>

    混合信号与射频 IC · 存算一体 AI 芯片

-   **[王茂俊](https://ic.pku.edu.cn/szdw/zzjs/jcwndzx1/wmj/index.htm)** <span class="badge-pku">北大</span>

    GaN 功率与射频器件 · 高功率密度毫米波前端

-   **[闫娜](https://sme.fudan.edu.cn/60/61/c31157a352353/page.htm)** <span class="badge-fudan">复旦</span> <span class="prof-w"></span>

    高能效射频芯片 · 6G 可重构 RF · 毫米波雷达

-   **[徐鸿涛](https://sme.fudan.edu.cn/60/92/c31155a352402/page.htm)** <span class="badge-fudan">复旦</span>

    毫米波 IC 与系统 · 5G/6G · 可穿戴 IoT 无线 SoC

-   **[洪志良](http://icmne.fudan.edu.cn)** <span class="badge-fudan">复旦</span>

    高性能模拟/混合信号 IC · 射频收发机 · 高速接口芯片

-   **[唐长文](http://rfic.fudan.edu.cn)** <span class="badge-fudan">复旦</span>

    毫米波 CMOS 收发机 · 相控阵芯片 · 5G/6G 射频前端

-   **[闵昊](http://rficae.fudan.edu.cn)** <span class="badge-fudan">复旦</span>

    射频与天线协同设计 · 毫米波封装天线（AiP） · 相控阵系统

-   **[王志功](http://iroi.seu.edu.cn)** <span class="badge-other">东南大学</span>

    微波光子集成电路 · 太赫兹器件 · 高速无线通信芯片

-   **[马顺利](https://sme.fudan.edu.cn/60/13/c31134a352275/page.htm)** <span class="badge-fudan">复旦</span>

    毫米波/太赫兹相控阵雷达芯片 · 5G/6G 毫米波收发机 · FMCW/ADPLL

-   **[洪伟](https://mmw.seu.edu.cn/2020/0928/c30531a348210/page.htm)** <span class="badge-other">东南大学</span>

    毫米波集成天线与系统 · 大规模相控阵 · 毫米波/太赫兹理论与器件

-   **[周健军](https://icisee.sjtu.edu.cn/jiaoshiml/zhoujianjun.html)** <span class="badge-other">交大</span>

    CMOS 射频收发机 · 毫米波通信与雷达 IC · 高速有线收发前端

-   **[金晶](https://icisee.sjtu.edu.cn/jiaoshiml/jinjing.html)** <span class="badge-other">交大</span> <span class="prof-w"></span>

    射频/混合信号 IC · 频率综合器（PLL） · 低功耗收发机与射频前端

-   **[高翔](https://person.zju.edu.cn/xianggao)** <span class="badge-other">浙大</span>

    射频与模数混合信号 IC · 亚采样锁相环（Sub-Sampling PLL） · 无线通信芯片

-   **[崔强](https://person.zju.edu.cn/qiangcui)** <span class="badge-other">浙大</span>

    射频/毫米波/太赫兹器件电路与系统 · 高速接口与芯粒封装 · ML 辅助 IC 设计

-   **[赵博](https://person.zju.edu.cn/zhaobo)** <span class="badge-other">浙大</span>

    超低功耗 CMOS 无线收发芯片 · 片上天线微型 Radio（ISSCC 最小芯片） · 物联网/生物医疗 RF SoC

-   **[胡诣哲](https://sme.ustc.edu.cn/2022/1012/c30996a575413/page.htm)** <span class="badge-other">中科大</span>

    数字化射频 IC（Digital-RF） · 新型相控阵芯片 · 毫米波数字雷达 · ADPLL/数字 PA

-   **[林福江](https://sme.ustc.edu.cn/2022/0601/c30996a556921/page.htm)** <span class="badge-other">中科大</span>

    超低噪声毫米波射频前端 · GaN 第三代器件 MMIC · 射频器件建模

-   **[楼立恒](https://sme.ustc.edu.cn/2024/0225/c31014a630510/page.htm)** <span class="badge-other">中科大</span>

    RF/毫米波收发电路与系统 · 全数字锁相环与频率综合 · 相控阵/MIMO IC 架构数字化

</div>
<button class="prof-show-all">显示全部 ↓</button>

**境外**

<div class="grid cards prof-collapse" markdown>

-   **[C. Patrick Yue（俞捷）](https://ece.hkust.edu.hk/eepatrick)** <span class="badge-hk">港科大</span>

    毫米波通信与感知电路 · 光无线物理层 · 高速有线 SoC

-   **[Yansong Yang（杨岩松）](https://www.yansongyang.com/)** <span class="badge-hk">港科大</span>

    压电 MEMS 谐振器与滤波器 · 5G/mmWave 射频前端

-   **[Ali Niknejad](https://rfic.eecs.berkeley.edu)** <span class="badge-intl">UC Berkeley</span>

    毫米波 CMOS 电路 · 5G/6G 收发机

-   **[Behzad Razavi](https://www.seas.ucla.edu/brweb/)** <span class="badge-intl">UCLA</span>

    射频/混合信号 IC · VCO/PLL/LNA 设计

-   **[Thomas Lee](https://profiles.stanford.edu/thomas-lee)** <span class="badge-intl">Stanford</span>

    射频集成电路 · 超宽带/毫米波 CMOS

-   **[Gabriel Rebeiz](https://jacobsschool.ucsd.edu/faculty/profile?id=238)** <span class="badge-intl">UCSD</span>

    相控阵与波束赋形 · 毫米波 RFIC · MEMS 开关

-   **[Harish Krishnaswamy](https://cosmiccolumbia.com)** <span class="badge-intl">Columbia</span>

    毫米波全双工 · 太赫兹 CMOS 收发机 · 频谱共享射频系统

</div>
<button class="prof-show-all">显示全部 ↓</button>

### 学术会议与期刊

<div class="dm-wrap chip-block">
  <div class="dm-row dm-device"><span class="dm-lbl">会议</span><span class="dm-chips">
    <span class="dm-chip dm-chip--static" title="IEEE 国际固态电路会议">ISSCC</span>
    <span class="dm-chip dm-chip--static" title="IEEE 射频集成电路研讨会">RFIC Symposium</span>
    <span class="dm-chip dm-chip--static" title="IEEE MTT-S Int&#x27;l Microwave Symposium">IMS</span>
    <span class="dm-chip dm-chip--static" title="欧洲固态电子电路会议（原 ESSCIRC）">ESSERC</span>
    <span class="dm-chip dm-chip--static" title="欧洲微波周（European Microwave Week）">EuMW</span>
  </span></div>
  <div class="dm-row dm-arch"><span class="dm-lbl">期刊</span><span class="dm-chips">
    <span class="dm-chip dm-chip--static" title="IEEE Journal of Solid-State Circuits">JSSC</span>
    <span class="dm-chip dm-chip--static" title="IEEE Trans. Microwave Theory and Techniques">T-MTT</span>
    <span class="dm-chip dm-chip--static" title="IEEE Trans. Circuits and Systems">TCAS-I/II</span>
    <span class="dm-chip dm-chip--static" title="IEEE Microwave and Wireless Components Letters">MWCL</span>
  </span></div>
</div>

## 毕业去向

### 企业

<div class="dm-wrap chip-block">
  <div class="dm-row dm-device"><span class="dm-lbl">国内</span><span class="dm-chips">
    <span class="dm-chip dm-chip--stock"><a href="https://www.maxscend.com/">卓胜微</a><span class="sq" data-stock="sz:300782"></span></span>
    <span class="dm-chip dm-chip--stock"><a href="https://www.vanchip.com/">唯捷创芯</a><span class="sq" data-stock="sh:688153"></span></span>
    <span class="dm-chip dm-chip--stock"><a href="https://www.asrmicro.com/">翱捷科技（ASR）</a><span class="sq" data-stock="sh:688220"></span></span>
    <span class="dm-chip dm-chip--stock"><a href="https://www.sanan-e.com/">三安光电（三安集成 GaN/GaAs 射频）</a><span class="sq" data-stock="sh:600703"></span></span>
    <a class="dm-chip" href="https://www.calterah.com/">加特兰微电子（Calterah）</a>
    <a class="dm-chip" href="https://www.unisoc.com/">紫光展锐（UNISOC）</a>
    <a class="dm-chip" href="https://www.hisilicon.com/">华为海思（HiSilicon）</a>
  </span></div>
  <div class="dm-row dm-arch"><span class="dm-lbl">国外</span><span class="dm-chips">
    <span class="dm-chip dm-chip--stock"><a href="https://www.qualcomm.com/">Qualcomm（高通）</a><span class="sq" data-stock="us:QCOM"></span></span>
    <span class="dm-chip dm-chip--stock"><a href="https://www.broadcom.com/">Broadcom（无线连接 / 射频前端）</a><span class="sq" data-stock="us:AVGO"></span></span>
    <span class="dm-chip dm-chip--stock"><a href="https://www.skyworksinc.com/">Skyworks Solutions</a><span class="sq" data-stock="us:SWKS"></span></span>
    <span class="dm-chip dm-chip--stock"><a href="https://www.qorvo.com/">Qorvo</a><span class="sq" data-stock="us:QRVO"></span></span>
    <span class="dm-chip dm-chip--stock"><a href="https://www.mediatek.com/">MediaTek（联发科）</a><span class="sq" data-stock="yf:2454.TW"></span></span>
    <span class="dm-chip dm-chip--stock"><a href="https://www.macom.com/">MACOM（GaN MMIC · 相控阵雷达 · 卫星通信）</a><span class="sq" data-stock="us:MTSI"></span></span>
    <span class="dm-chip dm-chip--stock"><a href="https://www.nxp.com/">NXP（77 GHz 车载雷达收发机）</a><span class="sq" data-stock="us:NXPI"></span></span>
    <span class="dm-chip dm-chip--stock"><a href="https://www.infineon.com/">Infineon（77/79 GHz 毫米波雷达 MMIC）</a><span class="sq" data-stock="us:IFNNY"></span></span>
  </span></div>
</div>

### 科研院所

<div class="dm-wrap chip-block">
  <div class="dm-row dm-device"><span class="dm-lbl">国内</span><span class="dm-chips">
    <a class="dm-chip" href="https://mmw.seu.edu.cn/" title="毫米波/亚毫米波核心器件与芯片、信息超材料、相控阵系统">东南大学毫米波全国重点实验室</a>
    <a class="dm-chip" href="https://www.ime.cas.cn/" title="毫米波/射频 CMOS 收发机与前端集成">中科院微电子所</a>
    <a class="dm-chip" href="https://www.pcl.ac.cn/" title="宽带无线通信与高速射频系统">鹏城实验室</a>
  </span></div>
  <div class="dm-row dm-arch"><span class="dm-lbl">国外</span><span class="dm-chips">
    <a class="dm-chip" href="https://bwrc.berkeley.edu/" title="毫米波 CMOS 收发机、5G/6G 无线系统">UC Berkeley 无线研究中心（BWRC）</a>
    <a class="dm-chip" href="https://www.imec-int.com/en" title="毫米波相控阵、5G/6G 射频前端">imec（比利时微电子研究中心）</a>
    <a class="dm-chip" href="https://www.iaf.fraunhofer.de/en.html" title="III-V/GaN 毫米波与太赫兹 MMIC">Fraunhofer IAF（德国应用固体物理研究所）</a>
  </span></div>
</div>
