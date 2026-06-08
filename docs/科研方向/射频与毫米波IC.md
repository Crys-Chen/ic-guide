---
hide:
  - navigation
---

设计让无线信号穿越空间的模拟芯片，把信息多快好省地传出去，手机基带到毫米波雷达，从 5G 基站到卫星互联网，都有射频芯片的身影。

## 这个方向在研究什么

二十多年前的 2G 时代，一部手机能做的不过是打电话、发短信，在诺基亚的小屏幕上玩玩贪吃蛇；到了 3G，手机第一次能上网，刷网页、聊 QQ；4G 让移动互联网井喷，地铁上刷短视频、扫码付钱、动动手指就叫来出租车和外卖；如今的 5G，在时速三百公里的高铁上开视频会议、看 4K 直播都不卡顿。每往前一代，能搬运的数据都翻上好几番。换个场景，手腕上的运动手环、植入体内的起搏器，靠一颗小电池就能安静工作十年。这两类无线需求几乎相反，归根到底却是同一件事：多快好省地传输信息。然而一颗芯片不可能既要又要。要又多又快，就得占用更宽的频段、推向更高的频率，可频率越高越费电、越脆弱；要传得准，就得多花功率和带宽。于是这门学问分成两路，一路往高频走、争带宽，一路往低功耗压、保续航。

<div><svg viewBox="0 0 910 330" xmlns="http://www.w3.org/2000/svg" style="width:100%;max-width:910px;display:block;margin:1.5rem auto;">
  <defs>
    <marker id="spAxis" markerWidth="8" markerHeight="8" refX="6" refY="3" orient="auto"><path d="M0,0 L0,6 L8,3 z" fill="#475569"/></marker>
  </defs>
  <rect width="910" height="330" rx="10" fill="#F8FAFC" stroke="#CBD5E1" stroke-width="1.5"/>
  <text x="455" y="24" text-anchor="middle" font-size="13" font-weight="bold" fill="#1E293B">无线频谱的频段分配与典型用途</text>
  <!-- legend -->
  <rect x="296" y="39" width="14" height="10" rx="2" fill="#D6DEE8" stroke="#64748B" stroke-width="1"/>
  <text x="314" y="48" font-size="9.5" fill="#334155">通用通信</text>
  <rect x="384" y="39" width="14" height="10" rx="2" fill="#BFD3EC" stroke="#1E40AF" stroke-width="1"/>
  <text x="402" y="48" font-size="9.5" fill="#1E40AF">低功耗短距</text>
  <rect x="498" y="39" width="14" height="10" rx="2" fill="#FBD5AE" stroke="#C2410C" stroke-width="1"/>
  <text x="516" y="48" font-size="9.5" fill="#9A3412">大带宽高速</text>
  <!-- zones -->
  <rect x="64" y="58" width="554" height="234" fill="#EAF1F9"/>
  <rect x="618" y="58" width="258" height="234" fill="#FBF1E6"/>
  <text x="341" y="74" text-anchor="middle" font-size="10.5" fill="#1E40AF">低频：频段拥挤、传播损耗小</text>
  <text x="747" y="74" text-anchor="middle" font-size="10.5" fill="#9A3412">高频：频谱充裕、可用带宽大</text>
  <!-- R1 -->
  <rect x="537" y="110" width="15" height="16" rx="3" fill="#D6DEE8" stroke="#64748B" stroke-width="1"/>
  <text x="545" y="104" text-anchor="middle" font-size="8.5" fill="#334155">北斗/GPS</text>
  <rect x="688" y="110" width="25" height="16" rx="3" fill="#FBD5AE" stroke="#C2410C" stroke-width="1"/>
  <text x="700" y="104" text-anchor="middle" font-size="8.5" fill="#9A3412">5G 毫米波</text>
  <rect x="760" y="110" width="55" height="16" rx="3" fill="#FBD5AE" stroke="#C2410C" stroke-width="1"/>
  <text x="787" y="104" text-anchor="middle" font-size="8.5" fill="#9A3412">6G · 回传</text>
  <!-- R2 -->
  <rect x="510" y="140" width="81" height="16" rx="3" fill="#D6DEE8" stroke="#64748B" stroke-width="1"/>
  <text x="550" y="134" text-anchor="middle" font-size="8.5" fill="#334155">蜂窝 2G–5G</text>
  <rect x="653" y="140" width="61" height="16" rx="3" fill="#FBD5AE" stroke="#C2410C" stroke-width="1"/>
  <text x="683" y="134" text-anchor="middle" font-size="8.5" fill="#9A3412">卫星 Ku/Ka</text>
  <rect x="815" y="140" width="61" height="16" rx="3" fill="#FBD5AE" stroke="#C2410C" stroke-width="1"/>
  <text x="845" y="134" text-anchor="middle" font-size="8.5" fill="#9A3412">太赫兹</text>
  <!-- R3 -->
  <rect x="145" y="170" width="372" height="16" rx="3" fill="#D6DEE8" stroke="#64748B" stroke-width="1"/>
  <text x="331" y="182" text-anchor="middle" font-size="9" fill="#334155">广播 · 电视（0.5 MHz – 0.8 GHz）</text>
  <rect x="609" y="170" width="20" height="16" rx="3" fill="#D6DEE8" stroke="#64748B" stroke-width="1"/>
  <text x="619" y="198" text-anchor="middle" font-size="8.5" fill="#334155">WiFi 5/6/6E</text>
  <rect x="745" y="170" width="12" height="16" rx="3" fill="#FBD5AE" stroke="#C2410C" stroke-width="1"/>
  <text x="751" y="198" text-anchor="middle" font-size="8.5" fill="#9A3412">雷达 77G</text>
  <!-- 省 cluster -->
  <text x="300" y="206" text-anchor="middle" font-size="9" fill="#1E40AF">低功耗短距系统（集中于低频段）</text>
  <rect x="305" y="222" width="14" height="16" rx="3" fill="#BFD3EC" stroke="#1E40AF" stroke-width="1"/>
  <text x="311" y="252" text-anchor="middle" font-size="8.5" fill="#1E3A8A">RFID 13.56M</text>
  <rect x="490" y="222" width="34" height="16" rx="3" fill="#BFD3EC" stroke="#1E40AF" stroke-width="1"/>
  <text x="507" y="218" text-anchor="middle" font-size="8.5" fill="#1E3A8A">LoRa/NB-IoT</text>
  <rect x="566" y="222" width="14" height="16" rx="3" fill="#BFD3EC" stroke="#1E40AF" stroke-width="1"/>
  <text x="573" y="252" text-anchor="middle" font-size="8.5" fill="#1E3A8A">蓝牙/Zigbee</text>
  <!-- axis -->
  <line x1="64" y1="292" x2="888" y2="292" stroke="#475569" stroke-width="1.5" marker-end="url(#spAxis)"/>
  <text x="882" y="284" text-anchor="end" font-size="10" fill="#475569">频率</text>
  <line x1="180" y1="292" x2="180" y2="298" stroke="#475569" stroke-width="1"/>
  <text x="180" y="309" text-anchor="middle" font-size="9" fill="#475569">1 MHz</text>
  <line x1="296" y1="292" x2="296" y2="298" stroke="#475569" stroke-width="1"/>
  <text x="296" y="309" text-anchor="middle" font-size="9" fill="#475569">10 MHz</text>
  <line x1="412" y1="292" x2="412" y2="298" stroke="#475569" stroke-width="1"/>
  <text x="412" y="309" text-anchor="middle" font-size="9" fill="#475569">100 MHz</text>
  <line x1="528" y1="292" x2="528" y2="298" stroke="#475569" stroke-width="1"/>
  <text x="528" y="309" text-anchor="middle" font-size="9" fill="#475569">1 GHz</text>
  <line x1="644" y1="292" x2="644" y2="298" stroke="#475569" stroke-width="1"/>
  <text x="644" y="309" text-anchor="middle" font-size="9" fill="#475569">10 GHz</text>
  <line x1="760" y1="292" x2="760" y2="298" stroke="#475569" stroke-width="1"/>
  <text x="760" y="309" text-anchor="middle" font-size="9" fill="#475569">100 GHz</text>
  <line x1="876" y1="292" x2="876" y2="298" stroke="#475569" stroke-width="1"/>
  <text x="876" y="309" text-anchor="middle" font-size="9" fill="#475569">1 THz</text>
</svg></div>

以上所述的向外传输信息的电路就是射频电路，它跟低频电路大不相同。高中物理的电学部分曾经简要提到过，交流电路的频率低时，导线的电阻可以视为0，电流从这头流到那头，不损耗、不延迟，也不往外辐射。但当电路的工作频率不断升高到 GHz级别，电容、电感、电阻乃至一根导线，它的物理特性都会发生变化。一段导线就算只有几毫米长，也不能近似为0电阻，必须将其视为一段电感，它会改变信号的相位；紧挨着的两根导线会互相串扰；信号还会像电磁波一样从导线上辐射出去。也正是靠这份能辐射的本事，信号才能由天线送上天空，所以这段能做无线的高频就叫射频（RF）。

<div><svg viewBox="0 0 880 320" xmlns="http://www.w3.org/2000/svg" style="width:100%;max-width:880px;display:block;margin:1.5rem auto;">
  <defs>
    <marker id="rfRad" markerWidth="8" markerHeight="8" refX="4" refY="4" orient="auto"><path d="M0,0 L8,4 L0,8 z" fill="#C2410C"/></marker>
  </defs>
  <rect width="880" height="320" rx="10" fill="#F8FAFC" stroke="#CBD5E1" stroke-width="1.5"/>
  <text x="440" y="26" text-anchor="middle" font-size="13" font-weight="bold" fill="#1E293B">低频电路 vs 射频电路：同一根导线的两种面貌</text>
  <line x1="440" y1="48" x2="440" y2="298" stroke="#CBD5E1" stroke-width="1.2" stroke-dasharray="4,4"/>
  <!-- ===== LEFT: low frequency ===== -->
  <text x="220" y="66" text-anchor="middle" font-size="11.5" font-weight="bold" fill="#475569">低频：导线 ≈ 理想连接</text>
  <path d="M40,150 q11,-22 22,0 q11,22 22,0" fill="none" stroke="#475569" stroke-width="2"/>
  <circle cx="110" cy="150" r="4" fill="#475569"/>
  <text x="110" y="138" text-anchor="middle" font-size="10" fill="#475569">A</text>
  <line x1="110" y1="150" x2="330" y2="150" stroke="#475569" stroke-width="2.5"/>
  <text x="220" y="142" text-anchor="middle" font-size="10" fill="#64748B">R ≈ 0</text>
  <circle cx="330" cy="150" r="4" fill="#475569"/>
  <text x="330" y="138" text-anchor="middle" font-size="10" fill="#475569">B</text>
  <path d="M356,150 q11,-22 22,0 q11,22 22,0" fill="none" stroke="#475569" stroke-width="2"/>
  <text x="220" y="196" text-anchor="middle" font-size="10" fill="#16A34A">信号原样通过</text>
  <text x="220" y="230" text-anchor="middle" font-size="10" fill="#475569">不损耗 · 不延迟 · 不辐射</text>
  <!-- ===== RIGHT: radio frequency ===== -->
  <text x="660" y="66" text-anchor="middle" font-size="11.5" font-weight="bold" fill="#1E40AF">射频（GHz）：导线 = 分布的 L、C + 寄生</text>
  <line x1="560" y1="104" x2="760" y2="104" stroke="#94A3B8" stroke-width="2"/>
  <text x="560" y="98" text-anchor="start" font-size="9" fill="#64748B">相邻导线</text>
  <path d="M468,170 q10,-20 20,0 q10,20 20,0" fill="none" stroke="#2563EB" stroke-width="2"/>
  <circle cx="512" cy="170" r="4" fill="#1E40AF"/>
  <text x="512" y="158" text-anchor="middle" font-size="10" fill="#1E40AF">A</text>
  <path d="M518,170 a7,7 0 0,1 14,0 a7,7 0 0,1 14,0 a7,7 0 0,1 14,0" fill="none" stroke="#2563EB" stroke-width="2"/>
  <line x1="560" y1="170" x2="582" y2="170" stroke="#2563EB" stroke-width="2"/>
  <path d="M582,170 a7,7 0 0,1 14,0 a7,7 0 0,1 14,0 a7,7 0 0,1 14,0" fill="none" stroke="#2563EB" stroke-width="2"/>
  <line x1="624" y1="170" x2="648" y2="170" stroke="#2563EB" stroke-width="2"/>
  <line x1="636" y1="170" x2="636" y2="146" stroke="#C2410C" stroke-width="1.8"/>
  <line x1="627" y1="146" x2="645" y2="146" stroke="#C2410C" stroke-width="1.8"/>
  <line x1="627" y1="139" x2="645" y2="139" stroke="#C2410C" stroke-width="1.8"/>
  <line x1="636" y1="139" x2="636" y2="104" stroke="#C2410C" stroke-width="1.8"/>
  <text x="702" y="120" text-anchor="middle" font-size="9" fill="#C2410C">互耦电容 → 串扰</text>
  <path d="M648,170 a7,7 0 0,1 14,0 a7,7 0 0,1 14,0 a7,7 0 0,1 14,0" fill="none" stroke="#2563EB" stroke-width="2"/>
  <line x1="690" y1="170" x2="788" y2="170" stroke="#2563EB" stroke-width="2"/>
  <circle cx="788" cy="170" r="4" fill="#1E40AF"/>
  <text x="788" y="158" text-anchor="middle" font-size="10" fill="#1E40AF">B</text>
  <line x1="562" y1="170" x2="562" y2="206" stroke="#2563EB" stroke-width="1.8"/>
  <line x1="553" y1="206" x2="571" y2="206" stroke="#2563EB" stroke-width="1.8"/>
  <line x1="553" y1="213" x2="571" y2="213" stroke="#2563EB" stroke-width="1.8"/>
  <line x1="562" y1="213" x2="562" y2="240" stroke="#2563EB" stroke-width="1.8"/>
  <line x1="690" y1="170" x2="690" y2="206" stroke="#2563EB" stroke-width="1.8"/>
  <line x1="681" y1="206" x2="699" y2="206" stroke="#2563EB" stroke-width="1.8"/>
  <line x1="681" y1="213" x2="699" y2="213" stroke="#2563EB" stroke-width="1.8"/>
  <line x1="690" y1="213" x2="690" y2="240" stroke="#2563EB" stroke-width="1.8"/>
  <line x1="540" y1="240" x2="712" y2="240" stroke="#475569" stroke-width="1.5"/>
  <line x1="619" y1="240" x2="619" y2="246" stroke="#475569" stroke-width="1.5"/>
  <line x1="610" y1="246" x2="628" y2="246" stroke="#475569" stroke-width="1.3"/>
  <line x1="613" y1="250" x2="625" y2="250" stroke="#475569" stroke-width="1.3"/>
  <line x1="616" y1="254" x2="622" y2="254" stroke="#475569" stroke-width="1.3"/>
  <text x="545" y="149" text-anchor="middle" font-size="9" fill="#1E40AF">串联电感 L → 相移</text>
  <text x="626" y="232" text-anchor="middle" font-size="9" fill="#1E40AF">对地电容 C</text>
  <path d="M724,162 a16,16 0 0,1 13,20" fill="none" stroke="#C2410C" stroke-width="1.6"/>
  <path d="M732,156 a26,26 0 0,1 18,30" fill="none" stroke="#C2410C" stroke-width="1.6" marker-end="url(#rfRad)"/>
  <text x="756" y="148" text-anchor="middle" font-size="9" fill="#C2410C">辐射</text>
  <path d="M806,170 q8,-12 16,0 q8,12 16,0" fill="none" stroke="#2563EB" stroke-width="2" stroke-dasharray="3,2"/>
  <text x="836" y="156" text-anchor="middle" font-size="9" fill="#64748B">衰减·相移</text>
  <text x="660" y="284" text-anchor="middle" font-size="10" fill="#1E40AF">几毫米导线也成了电感（改相位），还有对地/互耦电容与辐射</text>
</svg></div>

这个方向的研究对象，是天线和数字芯片之间那一整套模拟电路，合称收发机。接收时，微弱的信号先经低噪声放大器（LNA）放大，再混频、送进 ADC 变成数字；发射时反过来，功率放大器（PA）把信号推上天线；收发都靠本振（锁相环 PLL）提供准确的载波，到了毫米波再加一片相控阵前端。研究者要做的，就是把这些模块用晶体管搭出来、不断发明新结构，把噪声、效率、频率这些指标逼向物理极限。做出来的芯片，装进 5G/6G 基站和手机、汽车的毫米波雷达、卫星互联网终端，以及电池供电的物联网和可穿戴医疗设备——凡是要无线传信息的地方都少不了它，也是眼下国产替代最吃力的一环。

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

两路当中，先看往高频、争带宽的这一路。要装下更多数据，就得占用更宽的频段，而空着的频段只在高处，信号于是被推向越来越高的频率。可它一旦爬上高频，麻烦立刻找上门：信号离开天线就开始损耗，电磁波在空间里扩散，能量衰减很快，频率越高衰减越狠。路径损耗大致与频率的平方成正比，28 GHz 的信号比 2.4 GHz 的在相同距离上多损耗约 20 dB，功率只剩百分之一。从发射到接收，这一路的功率得失都要一笔笔算清，工程师把它叫作链路预算，而路径损耗正是这本账上最难平的一笔。

补这道窟窿，办法是相控阵。与其用一根天线向四周辐射，不如把几十上百个微小的天线单元排成阵列，分别控制每个单元的相位，让电磁波在目标方向上叠加、在其他方向上抵消，汇聚成一束波束，把损失的能量补回来。一部 5G 毫米波终端，会在指甲盖大小的面积里集成上百个天线单元和相应的移相器、放大器，毫秒内就能把波束对准基站，这种集成度十年前还难以想象。手机直连卫星是它的极端例子：卫星相当于把基站搬到几百公里高的轨道上，靠星上一面很大的相控阵，对准地面那部功率和天线都很小的手机。

<div><svg viewBox="0 0 860 300" xmlns="http://www.w3.org/2000/svg" style="width:100%;max-width:860px;display:block;margin:1.5rem auto;">
  <defs>
    <marker id="lbUp" markerWidth="9" markerHeight="9" refX="4" refY="2" orient="auto"><path d="M0,8 L4,0 L8,8 z" fill="#16A34A"/></marker>
    <marker id="lbGap" markerWidth="8" markerHeight="8" refX="4" refY="3" orient="auto"><path d="M0,0 L8,0 L4,6 z" fill="#475569"/></marker>
  </defs>
  <rect width="860" height="300" rx="10" fill="#F8FAFC" stroke="#CBD5E1" stroke-width="1.5"/>
  <text x="430" y="23" text-anchor="middle" font-size="13" font-weight="bold" fill="#1E293B">无线链路的功率预算示意</text>
  <!-- y axis -->
  <line x1="95" y1="45" x2="95" y2="272" stroke="#475569" stroke-width="1.2"/>
  <text x="95" y="40" text-anchor="middle" font-size="9" fill="#475569">功率/dBm</text>
  <text x="88" y="67" text-anchor="end" font-size="9" fill="#475569">+30</text>
  <text x="88" y="108" text-anchor="end" font-size="9" fill="#475569">0</text>
  <text x="88" y="177" text-anchor="end" font-size="9" fill="#475569">-50</text>
  <text x="88" y="245" text-anchor="end" font-size="9" fill="#475569">-100</text>
  <!-- PA output -->
  <circle cx="150" cy="64" r="4" fill="#003F88"/>
  <text x="150" y="54" text-anchor="middle" font-size="9.5" fill="#1E3A8A">PA 输出 +30 dBm（≈1 W）</text>
  <!-- path loss lines -->
  <line x1="150" y1="64" x2="620" y2="201" stroke="#2563EB" stroke-width="2.2"/>
  <text x="455" y="150" text-anchor="middle" font-size="9" fill="#2563EB">2.4 GHz</text>
  <line x1="150" y1="64" x2="620" y2="242" stroke="#C2410C" stroke-width="2.2"/>
  <text x="455" y="212" text-anchor="middle" font-size="9" fill="#C2410C">28 GHz（多损耗约 20 dB）</text>
  <circle cx="620" cy="201" r="3.5" fill="#2563EB"/>
  <circle cx="620" cy="242" r="3.5" fill="#C2410C"/>
  <!-- noise floor -->
  <line x1="150" y1="256" x2="730" y2="256" stroke="#DC2626" stroke-width="1.2" stroke-dasharray="5,3"/>
  <text x="734" y="259" text-anchor="start" font-size="9" fill="#B91C1C">噪声地板 ≈ -110 dBm</text>
  <text x="430" y="270" text-anchor="middle" font-size="9" fill="#9A3412">接收 -100 dBm（0.1 pW）</text>
  <!-- gap arrow -->
  <line x1="700" y1="68" x2="700" y2="238" stroke="#475569" stroke-width="1.1" stroke-dasharray="4,3" marker-start="url(#lbGap)" marker-end="url(#lbGap)"/>
  <text x="708" y="150" text-anchor="start" font-size="9" fill="#475569">动态范围</text>
  <text x="708" y="164" text-anchor="start" font-size="9" fill="#475569">≈ 130 dB（13 个数量级）</text>
  <!-- phased array lift -->
  <line x1="620" y1="240" x2="620" y2="200" stroke="#16A34A" stroke-width="2" marker-end="url(#lbUp)"/>
  <text x="628" y="214" text-anchor="start" font-size="9" fill="#15803D">相控阵阵列增益</text>
  <text x="628" y="226" text-anchor="start" font-size="9" fill="#15803D">（补偿路径损耗）</text>
  <!-- stage labels -->
  <text x="150" y="288" text-anchor="middle" font-size="9" fill="#475569">PA 输出</text>
  <text x="385" y="288" text-anchor="middle" font-size="9" fill="#475569">自由空间传播</text>
  <text x="620" y="288" text-anchor="middle" font-size="9" fill="#475569">接收 / LNA</text>
</svg></div>

相控阵补回的是空间里损失的能量，可链路两端的器件本身，也被高频逼到了极限。信号穿过空间到达接收端，往往只剩 -100 dBm，也就是 0.1 皮瓦，跟发射时的几瓦差了十几个数量级。把这个快被噪声盖住的微弱信号重新拎出来，靠的就是低噪声放大器（LNA）。可它能做得多干净，头上始终压着一条死线，那就是热噪声。想把噪声压低，就得给晶体管喂更大的电流；可热噪声划定的底线就摆在那儿，再巧的电路也搬不动它。频率再爬到几十 GHz，把噪声摁住就更费劲了。

换到发射端，功率放大器（PA）是另一道坎。信号要送得远，它就得把功率放足，可功率一旦推上去，晶体管就进了非线性区，凭空生出谐波，搅扰旁边的信道；想让它规规矩矩保持线性，又只能把功率压回来，效率跟着往下掉。一个 4G 基站的 PA，七成的电都烧成了热，真正变成信号送出去的还不到三成。

收发机还少不了一个又准又稳的载波。把载波频率做准、做稳，本身就自成一门学问，叫频率综合，挑大梁的是锁相环（PLL）。频率上到几十 GHz，要让这个载波既不偏也不抖，同样是块难啃的骨头。

这条路的尽头是太赫兹。频率高到 300 GHz 以上，晶体管的增益已近枯竭，长期找不到趁手的有源器件，已经算是极限了。

另外有一批射频芯片，如手腕上的手环、植入体内的起搏器、铺在田里的传感器等，它们所追求的方向完全相反。它们并不缺带宽，要连的也不过是几十米外的网关，传得远不远从来不是问题，真正的考验是续航。一颗纽扣电池要撑上十年。这一路算的不再是链路预算，而是能量预算——每发一个比特耗多少电，都要锱铢必较。

省电的办法分两招。第一招是干脆少发：靠电池过活的收发机大部分时间都在休眠，功耗压到几微瓦，只在该发送时醒来，数毫秒内把数据发完立即睡回去，平均功耗约等于占空比乘以峰值功耗，睡得越久就越省。

<div><svg viewBox="0 0 820 240" xmlns="http://www.w3.org/2000/svg" style="width:100%;max-width:820px;display:block;margin:1.5rem auto;">
  <defs>
    <marker id="dcAxis" markerWidth="8" markerHeight="8" refX="6" refY="3" orient="auto"><path d="M0,0 L0,6 L8,3 z" fill="#475569"/></marker>
  </defs>
  <rect width="820" height="240" rx="10" fill="#F8FAFC" stroke="#CBD5E1" stroke-width="1.5"/>
  <text x="410" y="23" text-anchor="middle" font-size="13" font-weight="bold" fill="#1E293B">超低功耗收发机的占空比工作方式</text>
  <!-- axes -->
  <line x1="70" y1="45" x2="70" y2="200" stroke="#475569" stroke-width="1.2"/>
  <text x="64" y="40" text-anchor="end" font-size="9" fill="#475569">功耗</text>
  <line x1="70" y1="200" x2="788" y2="200" stroke="#475569" stroke-width="1.2" marker-end="url(#dcAxis)"/>
  <text x="792" y="204" text-anchor="start" font-size="10" fill="#475569">时间</text>
  <!-- power waveform: mostly asleep, brief spikes -->
  <path d="M70,185 L185,185 L185,70 L199,70 L199,185 L355,185 L355,70 L369,70 L369,185 L525,185 L525,70 L539,70 L539,185 L695,185 L695,70 L709,70 L709,185 L780,185" fill="none" stroke="#003F88" stroke-width="2"/>
  <!-- average power -->
  <line x1="70" y1="177" x2="780" y2="177" stroke="#DC2626" stroke-width="1.2" stroke-dasharray="5,3"/>
  <text x="78" y="172" text-anchor="start" font-size="9" fill="#B91C1C">平均功耗</text>
  <!-- annotations -->
  <text x="235" y="76" text-anchor="start" font-size="9" fill="#1E3A8A">唤醒发送（数十 mW，数毫秒）</text>
  <text x="437" y="197" text-anchor="middle" font-size="9" fill="#475569">休眠（数 µW）</text>
  <text x="410" y="225" text-anchor="middle" font-size="10" fill="#334155">平均功耗 ≈ 占空比 × 峰值功耗</text>
</svg></div>

第二招是把电路本身做到最简、最小，能省一级就省一级，而不是像毫米波那样堆上百个天线单元。

有意思的是，这一路用的还是同一批模块，目标却整个掉了头。同样的 LNA，这里要在纳安级的电流下保住灵敏度；同样的 PA，这里在意的不是功率多大，而是能不能彻底关断、醒来又进入状态够快；就连本振，也从稳住几十 GHz 变成在几乎不耗电时还保持纯净。逼着它们的不再是频率，而是功耗。

这条路的尽头同样是一道没有定论的题：一个比特究竟还能省到多低的能耗，至今没有答案。同一门射频，一边被推向更高的频率，一边被压向更低的功耗，就长成了今天这么宽的一个方向。

### 核心研究问题

- **高频下"理想导线"假设的崩塌**：信号爬进 GHz 后，几毫米走线的电感足以改变相位、平行走线的寄生耦合电容会把信号悄悄漏走、晶体管增益一路下滑——低频那套电压增益语言彻底失效。如何改用 S 参数、噪声系数、史密斯圆图重建一套在高频仍站得住的设计直觉？
- **链路预算这道十几个数量级的鸿沟**：发射端 PA 吼出几瓦，传到接收端只剩 -100 dBm（0.1 皮瓦），一瓦对一飞瓦。射频里几乎所有精巧设计都在为填平这道账服务——每一分贝的损耗与增益要怎样一笔笔记清、攒够？
- **LNA 的噪声-功耗硬底线**：要从噪声地板里把 0.1 皮瓦的信号捞起来又不淹掉它，就得压低噪声系数，而这要求更大偏置电流；热噪声划下的下限再巧的拓扑也绕不过。噪声与功耗能折中到哪一点？
- **PA 的线性-效率两难**：想要大功率就得把晶体管推进非线性区，可非线性冒出谐波、污染邻道；想保持干净线性就得回退工作点，效率随之塌掉（4G 基站 PA 常年只有三四成）。能否既线性又高效，而非二选一？
- **毫米波路径损耗与相控阵**：路径损耗约与频率平方成正比，28 GHz 比 2.4 GHz 同距离多衰减约 20 dB（功率弱百倍）；只能把上百个天线单元、移相器、放大器塞进指甲盖大小的模组，用相位控制把能量"探照灯式"拧成一束波束抢回链路预算。这套集成度的极限在哪？手机直连卫星又把它推到了什么边界？
- **毫米波/太赫兹收发机的频率天花板**：同一套毫米波收发机既是 5G 前端，也是 77 GHz FMCW 车载雷达；再往上的太赫兹（300 GHz 以上）长期因晶体管增益枯竭、找不到趁手的有源器件而几近空白。标准 CMOS 工艺到底能把收发机推到多高的频率？

### 知识路径

```mermaid
graph LR
    A["工程数学\n复变·积分变换"] --> B["信号与系统"]
    M["电磁场\n传输线·路径损耗·天线"] --> E
    B --> C["模拟IC设计\n差分对·噪声·LNA·PA"]
    C --> E["高频/射频电路\nS参数·阻抗匹配·混频·VCO·PLL"]
    D["半导体器件\n晶体管高频增益极限"] --> E
    E --> F["毫米波收发机\n相控阵·FMCW雷达·太赫兹SoC"]

    classDef core fill:#E6FFEC,stroke:#276749,stroke-width:2px
    class A,B,C,D,E,F,M core
```

图中节点对应以下知识板块（按需选修）：

- [数学（复变与积分变换）](../学习地图/数学/index.md)
- [物理（电磁场）](../学习地图/物理/大学物理/index.md)
- [器件与工艺（晶体管高频特性）](../学习地图/器件与工艺/index.md)
- [电路 · 模拟方向（差分对/噪声/LNA/PA）](../学习地图/电路/模拟/index.md)
- [电路 · 信号处理（信号与系统/ADC·DAC/FMCW）](../学习地图/电路/信号处理/index.md)

## 这个方向适合谁

这个方向适合那种愿意把电磁场当成第一性约束、对"高频物理"有天然兴趣的人。你得能接受一根几毫米的走线在毫米波频段会变成一根天线、两根挨着的走线会偷偷漏电这种在低频世界根本不存在的事实，习惯用 S 参数和噪声系数而不是电压增益去描述一个放大器，能从史密斯圆图上一眼读出阻抗匹配的状态。换句话说，你需要一种分布参数的直觉——电流不再是从这头瞬间到那头，而是一路上有相位、有延迟、有辐射的波。这个方向最迷人也最折磨人的地方，是它逼你直面那些绕不过去的物理权衡：LNA 的噪声与功耗、PA 的线性与效率，往高频走它们只会被逼得更紧。这些不是设计技巧问题，而是物理划死的硬底线，你能做的是在底线之上找最优折中，而不是消灭矛盾。

本科最对口的底子是电磁场、模拟电路与信号处理这条线：把电磁场学扎实，往上的路径损耗、相控阵、片上传输线才有物理图像；把模拟 IC 的噪声、差分对、偏置吃透，LNA 和 PA 那两对矛盾才谈得上拿捏；信号与系统、ADC/DAC 则是把天线一路打通到基带的另一半。如果你大学物理里最喜欢的恰好是场与波那几章，而不是写算法、搭软件，那这个方向大概率会很对你的胃口。

发表阵地相当集中也相当硬核：电路这一侧看 ISSCC、RFIC Symposium 和 JSSC，微波/天线这一侧看 IMS（IEEE MTT-S 国际微波会议）、欧洲的 EuMW/EuMIC 与 T-MTT（Trans. MTT），相控阵和波束赋形的活儿常在两边都露脸。这些会议门槛高，往往要拿实测芯片的硬数据说话，光仿真漂亮是过不了关的。也正因如此，这个方向的节奏被流片死死拽住：在 Cadence 里搭晶体管级电路、跑 SpectreRF 看 S 参数和噪声、用 HFSS 或 Momentum 把版图一寸寸优化，然后流片——一轮常常半年起步，回来还要在探针台上用矢量网络分析仪、噪声系数仪一点点测，测试窗口很短，一次掩膜错误就再等一轮。

所以这个方向格外吃耐心，也吃"仿真和实测对不上时还能沉住气找原因"的那种韧性。如果你受不了以月计的反馈延迟，或者更想和数学模型、软件而不是射频仪器打交道，它可能不适合你。但如果你想把信号从天线一路打通到基带、把电磁场与电路设计真正连成一幅连续的物理图像，它的回报很实在——与雷达、卫星通信、车载毫米波、国防的产业绑定极深，就业面宽，代价是学习曲线陡、入门那段尤其难熬。

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
