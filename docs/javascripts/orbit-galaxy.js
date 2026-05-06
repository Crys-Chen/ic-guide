/**
 * orbit-galaxy.js — 微电子科研版图 sector visualization + direction-page nav
 * Concentric elliptical orbits divided into 4 knowledge sectors by radial lines.
 */

(function () {
  'use strict';

  /* ── Direction data (for random nav) ────────────────────────── */
  var DIRS = [
    { name: '先进制程与异构集成',    slug: '先进制程与异构集成' },
    { name: '功率半导体与宽禁带器件', slug: '功率半导体与宽禁带器件' },
    { name: '硅光子与光电集成',      slug: '硅光子与光电集成' },
    { name: '射频与毫米波',          slug: '射频与毫米波' },
    { name: '存储器与存算一体',      slug: '存储器与存算一体' },
    { name: '神经形态计算',          slug: '神经形态计算' },
    { name: '生物电子与脑机接口',    slug: '生物电子与脑机接口' },
    { name: '模拟与混合信号集成电路', slug: '模拟与混合信号集成电路' },
    { name: '计算芯片与处理器架构',  slug: '计算芯片与处理器架构' },
    { name: 'EDA与设计自动化',       slug: 'EDA与设计自动化' },
    { name: '硬件安全',              slug: '硬件安全' },
    { name: '可重构计算与FPGA',      slug: '可重构计算与FPGA' },
    { name: '具身智能',              slug: '具身智能' },
    { name: '量子计算与量子芯片',    slug: '量子计算与量子芯片' },
    { name: 'AI算法与系统',          slug: 'AI算法与系统' },
  ];

  /* ── Sector definitions ─────────────────────────────────────── */
  /* Angular widths proportional to card count:
     器件3 → 72°  |  模拟3 → 72°  |  数字5 → 120°  |  智能4 → 96°
     Boundaries (sector start angles, in radians, 0=right, CW):
     -36° | 36° | 108° | 228° | (back to -36°/324°) */
  var DEG = Math.PI / 180;
  var SECTORS = [
    { name: '器件与工艺',      start: -36 * DEG, end:  36 * DEG, rgb: '0,63,136' },
    { name: '模拟·射频·生物', start:  36 * DEG, end: 108 * DEG, rgb: '0,63,136' },
    { name: '数字系统与设计',  start: 108 * DEG, end: 228 * DEG, rgb: '0,63,136' },
    { name: '智能与前沿计算',  start: 228 * DEG, end: 324 * DEG, rgb: '0,63,136' },
  ];

  /* ── Ring radii ─────────────────────────────────────────────── */
  var RING_RADII = [240, 310, 395, 465];

  /* ── Card definitions with pre-calculated sector angles ─────── */
  /* sa(si, pos, n): angle for card at position `pos` of `n` cards in sector `si` */
  var ALL_CARDS = (function () {
    function sa(si, pos, n) {
      var s = SECTORS[si];
      return s.start + (pos + 0.5) * (s.end - s.start) / n;
    }
    return [
      /* 器件与工艺 — rings 0,1,2 */
      { name: '先进制程与异构集成',    tag: 'FinFET · GAA · Chiplet',  url: '先进制程与异构集成',    ring: 0, angle: sa(0,0,3) },
      { name: '功率半导体与宽禁带器件', tag: 'SiC · GaN · 逆变器',      url: '功率半导体与宽禁带器件', ring: 1, angle: sa(0,1,3) },
      { name: '硅光子与光电集成',      tag: '光调制器 · 片上波导',     url: '硅光子与光电集成',      ring: 2, angle: sa(0,2,3) },
      /* 模拟·射频·生物 — rings 0,1,2 */
      { name: '射频与毫米波',          tag: 'LNA · PA · 毫米波雷达',  url: '射频与毫米波',          ring: 0, angle: sa(1,0,3) },
      { name: '模拟与混合信号集成电路', tag: 'ADC · DAC · PLL',        url: '模拟与混合信号集成电路', ring: 1, angle: sa(1,1,3) },
      { name: '生物电子与脑机接口',    tag: '神经信号 · 植入式ASIC',  url: '生物电子与脑机接口',    ring: 2, angle: sa(1,2,3) },
      /* 数字系统与设计 — rings 0,1,2,3,3 (5 cards, ring3 gets 2) */
      { name: '计算芯片与处理器架构', tag: 'GPU · TPU · RISC-V',       url: '计算芯片与处理器架构',  ring: 0, angle: sa(2,0,5) },
      { name: '存储器与存算一体',     tag: 'SRAM · DRAM · PIM',        url: '存储器与存算一体',      ring: 1, angle: sa(2,1,5) },
      { name: 'EDA与设计自动化',      tag: '布局布线 · ML for EDA',    url: 'EDA与设计自动化',       ring: 2, angle: sa(2,2,5) },
      { name: '硬件安全',             tag: '侧信道 · 木马 · PUF',      url: '硬件安全',              ring: 3, angle: sa(2,3,5) },
      { name: '可重构计算与FPGA',     tag: '灵活性 × 专用性能',       url: '可重构计算与FPGA',      ring: 3, angle: sa(2,4,5) },
      /* 智能与前沿计算 — rings 0,1,2,3 */
      { name: 'AI算法与系统',         tag: 'LLM · TinyML · AI Agent', url: 'AI算法与系统',          ring: 0, angle: sa(3,0,4) },
      { name: '神经形态计算',         tag: '忆阻器 · 脉冲神经网络',   url: '神经形态计算',          ring: 1, angle: sa(3,1,4) },
      { name: '具身智能',             tag: '机器人 · 感知 · 规划',     url: '具身智能',              ring: 2, angle: sa(3,2,4) },
      { name: '量子计算与量子芯片',   tag: '量子比特 · 纠错 · 低温',  url: '量子计算与量子芯片',    ring: 3, angle: sa(3,3,4) },
    ];
  })();

  /* ── Galaxy state ───────────────────────────────────────────── */
  var stage, ringsEl, cardsLayer;
  var stageW = 1000, stageH = 700;
  var cardEls = [];
  var rafId = null;
  var lastTs = null;
  var paused = false;
  var resizeTimer = null;
  var globalAngle = 0;
  var SPEED = 0.006;
  var reducedMotion = false;

  /* Sector overlay element refs (updated each tick) */
  var sectorLineEls = [];
  var sectorLabelEls = [];
  var sectorSvgEl = null;

  /* ── Scale helpers ─────────────────────────────────────────── */
  function getScaleY() {
    var maxFit = (stageH - 56) / (2 * 465);
    return Math.min(stageH / 1000, maxFit, 0.80);
  }
  function getScaleX() { return Math.min(stageW / 1000, getScaleY() * 1.6, 1.13); }

  function isDark() {
    return document.body.getAttribute('data-md-color-scheme') === 'slate';
  }

  function cardVars() {
    var dark = isDark();
    return {
      '--rg-color':  'rgb(0,63,136)',
      '--rg-bg':     dark ? '#1e2330' : '#ffffff',
      '--rg-border': dark ? 'rgba(255,255,255,0.10)' : 'rgba(0,0,0,0.09)',
      '--rg-glow':   'rgba(0,63,136,0.30)',
    };
  }

  /* ── Draw orbit rings + create sector overlay elements ──────── */
  function drawRings() {
    if (!ringsEl) return;
    ringsEl.innerHTML = '';
    sectorLineEls = [];
    sectorLabelEls = [];
    sectorSvgEl = null;

    var sx = getScaleX(), sy = getScaleY();

    /* Concentric elliptical orbit rings */
    RING_RADII.forEach(function (r) {
      var el = document.createElement('div');
      el.style.cssText = [
        'position:absolute', 'left:50%', 'top:50%',
        'width:' + (r * sx * 2) + 'px', 'height:' + (r * sy * 2) + 'px',
        'transform:translate(-50%,-50%)', 'border-radius:50%',
        'border:1.5px solid rgba(0,63,136,' + (isDark() ? '0.25' : '0.18') + ')',
        'pointer-events:none', 'box-sizing:border-box',
      ].join(';');
      ringsEl.appendChild(el);
    });

    /* SVG layer for sector divider lines */
    sectorSvgEl = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
    sectorSvgEl.setAttribute('width', stageW);
    sectorSvgEl.setAttribute('height', stageH);
    sectorSvgEl.style.cssText = 'position:absolute;left:0;top:0;pointer-events:none;overflow:visible;';
    var lineColor = isDark() ? 'rgba(180,200,255,0.18)' : 'rgba(0,63,136,0.14)';
    SECTORS.forEach(function () {
      var line = document.createElementNS('http://www.w3.org/2000/svg', 'line');
      line.setAttribute('stroke', lineColor);
      line.setAttribute('stroke-width', '1');
      line.setAttribute('stroke-dasharray', '5 4');
      sectorSvgEl.appendChild(line);
      sectorLineEls.push(line);
    });
    ringsEl.appendChild(sectorSvgEl);

    /* Sector label divs (positions updated each tick) */
    SECTORS.forEach(function (sec) {
      var lbl = document.createElement('div');
      lbl.className = 'rg-ring-label';
      lbl.textContent = sec.name;
      lbl.style.color = 'rgb(' + sec.rgb + ')';
      lbl.style.fontSize = '.68rem';
      lbl.style.fontWeight = '700';
      lbl.style.opacity = '0.72';
      lbl.style.textAlign = 'center';
      ringsEl.appendChild(lbl);
      sectorLabelEls.push(lbl);
    });

    updateSectorOverlay();
  }

  /* ── Update sector lines + labels each tick ─────────────────── */
  function updateSectorOverlay() {
    if (!sectorSvgEl || sectorLineEls.length === 0) return;
    var sx = getScaleX(), sy = getScaleY();
    var cx = stageW * 0.5, cy = stageH * 0.5;
    var outerRx = RING_RADII[3] * sx * 1.05;
    var outerRy = RING_RADII[3] * sy * 1.05;
    var labelRx  = RING_RADII[3] * sx * 1.14;
    var labelRy  = RING_RADII[3] * sy * 1.14;

    SECTORS.forEach(function (sec, i) {
      /* divider line at sector START angle */
      var lineAngle = sec.start + globalAngle;
      sectorLineEls[i].setAttribute('x1', cx);
      sectorLineEls[i].setAttribute('y1', cy);
      sectorLineEls[i].setAttribute('x2', cx + outerRx * Math.cos(lineAngle));
      sectorLineEls[i].setAttribute('y2', cy + outerRy * Math.sin(lineAngle));

      /* label at sector MID angle, outside outermost ring */
      var midAngle = (sec.start + sec.end) / 2 + globalAngle;
      sectorLabelEls[i].style.left = (cx + labelRx * Math.cos(midAngle)) + 'px';
      sectorLabelEls[i].style.top  = (cy + labelRy * Math.sin(midAngle)) + 'px';
      sectorLabelEls[i].style.transform = 'translate(-50%,-50%)';
    });
  }

  /* ── Card position (elliptical) ─────────────────────────────── */
  function cardPos(card) {
    var r = RING_RADII[card.ring];
    var theta = card.angle + globalAngle;
    return {
      x: stageW * 0.5 + r * getScaleX() * Math.cos(theta),
      y: stageH * 0.5 + r * getScaleY() * Math.sin(theta),
    };
  }

  /* ── Build card DOM ─────────────────────────────────────────── */
  function buildCards() {
    if (!cardsLayer) return;
    cardsLayer.innerHTML = '';
    cardEls = [];

    ALL_CARDS.forEach(function (card) {
      var a = document.createElement('a');
      a.className = 'rg-card';
      a.style.zIndex = String(3 + card.ring);
      var base = window.location.pathname.replace(/\/[^/]*$/, '/');
      a.href = base + encodeURIComponent(card.url) + '/';

      var vars = cardVars();
      Object.keys(vars).forEach(function (k) { a.style.setProperty(k, vars[k]); });

      var inner = document.createElement('div');
      inner.className = 'rg-card-inner';
      inner.innerHTML =
        '<span class="rg-card-name">' + card.name + '</span>' +
        '<span class="rg-card-tag">' + card.tag + '</span>';

      a.appendChild(inner);
      cardsLayer.appendChild(a);

      a.addEventListener('mouseenter', function () {
        if (reducedMotion) return;
        paused = true;
        cardEls.forEach(function (el) { el.classList.add('rg-dim'); el.classList.remove('rg-active'); });
        a.classList.remove('rg-dim');
        a.classList.add('rg-active');
      });
      a.addEventListener('mouseleave', function () {
        if (reducedMotion) return;
        paused = false;
        lastTs = null;
        cardEls.forEach(function (el) { el.classList.remove('rg-dim', 'rg-active'); });
      });

      cardEls.push(a);
    });
  }

  /* ── Position all cards ─────────────────────────────────────── */
  function positionCards() {
    ALL_CARDS.forEach(function (card, i) {
      var pos = cardPos(card);
      cardEls[i].style.left = pos.x + 'px';
      cardEls[i].style.top  = pos.y + 'px';
    });
  }

  /* ── rAF loop ───────────────────────────────────────────────── */
  function tick(ts) {
    rafId = requestAnimationFrame(tick);
    if (!paused && !reducedMotion) {
      var dt = lastTs !== null ? Math.min((ts - lastTs) / 1000, 0.1) : 0;
      lastTs = ts;
      globalAngle += SPEED * dt;
    }
    positionCards();
    updateSectorOverlay();
  }

  /* ── Measure + resize ───────────────────────────────────────── */
  function measure() {
    var rect = stage.getBoundingClientRect();
    stageW = rect.width  || 1000;
    stageH = rect.height || 700;
  }

  function onResize() {
    clearTimeout(resizeTimer);
    resizeTimer = setTimeout(function () {
      measure(); drawRings(); positionCards();
    }, 100);
  }

  function refreshCardVars() {
    var vars = cardVars();
    cardEls.forEach(function (el) {
      Object.keys(vars).forEach(function (k) { el.style.setProperty(k, vars[k]); });
    });
    drawRings();
  }

  /* ── Galaxy setup ───────────────────────────────────────────── */
  function setupGalaxy() {
    var root = document.getElementById('rg-root');
    if (!root) return;

    stage      = document.getElementById('rg-stage');
    ringsEl    = document.getElementById('rg-rings');
    cardsLayer = document.getElementById('rg-cards-layer');
    if (!stage || !ringsEl || !cardsLayer) return;

    /* dynamic fullscreen height */
    if (root.classList.contains('rg-fullscreen')) {
      var hdr  = document.querySelector('.md-header');
      var tabs = document.querySelector('.md-tabs');
      var off  = (hdr ? hdr.offsetHeight : 0) + (tabs ? tabs.offsetHeight : 0);
      stage.style.height = (window.innerHeight - off) + 'px';
    }

    reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    globalAngle = 0;

    measure();
    drawRings();
    buildCards();
    positionCards();

    var backToTop = document.querySelector('.md-top');
    if (backToTop) backToTop.style.display = 'none';

    if (rafId) { cancelAnimationFrame(rafId); rafId = null; }
    lastTs = null;
    rafId = requestAnimationFrame(tick);

    new MutationObserver(function (muts) {
      muts.forEach(function (m) {
        if (m.attributeName === 'data-md-color-scheme') refreshCardVars();
      });
    }).observe(document.body, { attributes: true });

    window.removeEventListener('resize', onResize);
    window.addEventListener('resize', onResize);
  }

  /* ════════════════════════════════════════════════════════════
     Direction-page floating nav
     ════════════════════════════════════════════════════════════ */
  function isDirectionPage() {
    try {
      var decoded = decodeURIComponent(window.location.pathname);
      return /\/科研方向\//.test(decoded) && !/\/科研方向\/?$/.test(decoded);
    } catch (e) { return false; }
  }

  function galaxyUrl() {
    return window.location.pathname.replace(/\/[^/]+\/?$/, '/');
  }

  function randomDirUrl() {
    try {
      var decoded = decodeURIComponent(window.location.pathname);
      var m = decoded.match(/\/科研方向\/([^/]+)\/?$/);
      var current = m ? m[1] : '';
      var pool = DIRS.filter(function (d) { return d.slug !== current; });
      var pick = pool[Math.floor(Math.random() * pool.length)];
      return galaxyUrl() + encodeURIComponent(pick.slug) + '/';
    } catch (e) { return galaxyUrl(); }
  }

  function setupDirNav() {
    if (!isDirectionPage()) return;
    if (document.getElementById('rg-dir-nav')) return;

    var nav = document.createElement('div');
    nav.id = 'rg-dir-nav';
    nav.className = 'rg-dir-nav';

    var btnBack = document.createElement('a');
    btnBack.className = 'rg-dir-btn rg-dir-back';
    btnBack.href = galaxyUrl();
    btnBack.title = '返回科研版图';
    btnBack.innerHTML = '<span class="rg-dir-icon">⊙</span><span class="rg-dir-label">版图</span>';

    var btnRandom = document.createElement('button');
    btnRandom.className = 'rg-dir-btn rg-dir-random';
    btnRandom.title = '随机探索一个方向';
    btnRandom.innerHTML = '<span class="rg-dir-icon">⇌</span><span class="rg-dir-label">随机</span>';
    btnRandom.addEventListener('click', function () {
      window.location.href = randomDirUrl();
    });

    nav.appendChild(btnBack);
    nav.appendChild(btnRandom);
    document.body.appendChild(nav);
  }

  /* ── Bootstrap ──────────────────────────────────────────────── */
  function init() {
    setupGalaxy();
    setupDirNav();
  }

  if (typeof document$ !== 'undefined') {
    document$.subscribe(function () {
      if (rafId) { cancelAnimationFrame(rafId); rafId = null; }
      var old = document.getElementById('rg-dir-nav');
      if (old) old.remove();
      setTimeout(init, 80);
    });
  }

  document.addEventListener('DOMContentLoaded', function () {
    setTimeout(init, 80);
  });

})();
