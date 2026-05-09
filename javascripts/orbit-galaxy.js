/**
 * orbit-galaxy.js — 微电子科研版图 sector visualization + direction-page nav
 * Concentric elliptical orbits divided into 5 knowledge sectors by radial lines.
 */

(function () {
  'use strict';

  /* ── Direction data (for random nav) ────────────────────────── */
  var DIRS = [
    { name: '半导体器件与先进工艺',    slug: '半导体器件与先进工艺' },
    { name: '功率半导体与宽禁带器件',  slug: '功率半导体与宽禁带器件' },
    { name: '光电子与硅光集成',        slug: '光电子与硅光集成' },
    { name: 'MEMS与微纳传感器',        slug: 'MEMS与微纳传感器' },
    { name: '先进封装与异构集成',      slug: '先进封装与异构集成' },
    { name: '模拟与混合信号IC',        slug: '模拟与混合信号IC' },
    { name: '射频与毫米波IC',          slug: '射频与毫米波IC' },
    { name: '生物电子与脑机接口',      slug: '生物电子与脑机接口' },
    { name: '处理器架构与编译系统',    slug: '处理器架构与编译系统' },
    { name: '可重构计算与FPGA',        slug: '可重构计算与FPGA' },
    { name: '存算一体与近存计算',      slug: '存算一体与近存计算' },
    { name: 'EDA与设计自动化',         slug: 'EDA与设计自动化' },
    { name: '硬件安全与可信计算',      slug: '硬件安全与可信计算' },
    { name: 'AI算法与系统',            slug: 'AI算法与系统' },
    { name: '具身智能',                slug: '具身智能' },
    { name: '量子计算与量子芯片',      slug: '量子计算与量子芯片' },
    { name: '类脑芯片',                slug: '类脑芯片' },
  ];

  /* ── Sector definitions ─────────────────────────────────────── */
  /* Angular widths proportional to card count:
     器件5→108° | 电路3→64° | 计算3→64° | 设计基础2→44° | 交叉4→80°
     Boundaries (sector start angles):
     -54° | 54° | 118° | 182° | 226° | 306°(=-54°) */
  var DEG = Math.PI / 180;
  var SECTORS = [
    { name: '器件与制造',   start: -54 * DEG, end:  54 * DEG, rgb: '0,63,136' },
    { name: '电路设计',     start:  54 * DEG, end: 118 * DEG, rgb: '0,63,136' },
    { name: '计算',         start: 118 * DEG, end: 182 * DEG, rgb: '0,63,136' },
    { name: '设计基础设施', start: 182 * DEG, end: 226 * DEG, rgb: '0,63,136' },
    { name: '交叉延伸方向', start: 226 * DEG, end: 306 * DEG, rgb: '0,63,136' },
  ];

  /* ── Ring radii ─────────────────────────────────────────────── */
  /* Wider outer ring + larger inter-ring gaps to prevent vertical
     overlap when cards rotate to top/bottom of the ellipse. */
  var RING_RADII = [220, 305, 395, 485];

  /* ── Card definitions with explicit (ring, angle) ───────────── */
  /* Layout solved via constraint search at 1400×800 reference:
       - Each card box ≥12px clear of every radial divider line
       - Inter-card gap ≥22px at any rotation (visual breathing room)
       - Card-label gap ≥8px considering full label box (~80×20)
       - Ring distribution 3/3/5/6 — all rings populated */
  var ALL_CARDS = (function () {
    function deg(d) { return d * DEG; }
    return [
      /* ── 器件与制造 — sector 0, 5 cards (-54°..54°) ── */
      { name: '半导体器件与先进工艺',  tag: 'EUV · FinFET · GAA · 2D材料', url: '半导体器件与先进工艺',  ring: 0, angle: deg(  0) },
      { name: '功率半导体与宽禁带器件', tag: 'SiC · GaN · 逆变器',          url: '功率半导体与宽禁带器件', ring: 1, angle: deg(-34) },
      { name: '光电子与硅光集成',      tag: '硅光调制器 · 光子神经网络',    url: '光电子与硅光集成',      ring: 2, angle: deg(  0) },
      { name: 'MEMS与微纳传感器',      tag: '惯性传感 · CMUT · 气体传感',   url: 'MEMS与微纳传感器',      ring: 3, angle: deg(-19) },
      { name: '先进封装与异构集成',    tag: 'Chiplet · TSV · CoWoS',        url: '先进封装与异构集成',    ring: 2, angle: deg( 25) },
      /* ── 电路设计 — sector 1, 3 cards (54°..118°) ── */
      { name: '射频与毫米波IC',        tag: 'LNA · PA · 毫米波雷达',        url: '射频与毫米波IC',        ring: 2, angle: deg( 81) },
      { name: '模拟与混合信号IC',      tag: 'ADC · DAC · PLL',              url: '模拟与混合信号IC',      ring: 3, angle: deg(100) },
      { name: '生物电子与脑机接口',    tag: '神经信号 · 植入式ASIC',        url: '生物电子与脑机接口',    ring: 0, angle: deg( 87) },
      /* ── 计算 — sector 2, 3 cards (118°..182°) ── */
      { name: '处理器架构与编译系统',  tag: 'GPU · TPU · LLVM · MLIR',      url: '处理器架构与编译系统',  ring: 3, angle: deg(143) },
      { name: '存算一体与近存计算',    tag: 'SRAM-CIM · PIM · HBM',         url: '存算一体与近存计算',    ring: 1, angle: deg(146) },
      { name: '可重构计算与FPGA',      tag: '灵活性 × 专用性能',            url: '可重构计算与FPGA',      ring: 2, angle: deg(170) },
      /* ── 设计基础设施 — sector 3, 2 cards (182°..226°) ── */
      { name: 'EDA与设计自动化',       tag: '布局布线 · ML for EDA',        url: 'EDA与设计自动化',       ring: 1, angle: deg(208) },
      { name: '硬件安全与可信计算',    tag: '侧信道 · 木马 · PUF',          url: '硬件安全与可信计算',    ring: 3, angle: deg(210) },
      /* ── 交叉延伸方向 — sector 4, 4 cards (226°..306°) ── */
      { name: 'AI算法与系统',          tag: 'LLM · TinyML · AI Agent',      url: 'AI算法与系统',          ring: 0, angle: deg(267) },
      { name: '类脑芯片',              tag: '忆阻器 · SNN · 脉冲神经网络',  url: '类脑芯片',              ring: 2, angle: deg(267) },
      { name: '具身智能',              tag: '机器人 · 感知 · 规划',         url: '具身智能',              ring: 3, angle: deg(248) },
      { name: '量子计算与量子芯片',    tag: '量子比特 · 纠错 · 低温',       url: '量子计算与量子芯片',    ring: 3, angle: deg(286) },
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
  /* maxFit denominator must match 2 × outermost ring radius (RING_RADII[3])
     so the outer ring never grows past the stage edge — leaves vertical
     room for sector labels to render outside the cards. */
  function getScaleY() {
    var maxFit = (stageH - 56) / (2 * 485);
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
    var lineColor = isDark() ? 'rgba(180,200,255,0.45)' : 'rgba(0,63,136,0.38)';
    SECTORS.forEach(function () {
      var line = document.createElementNS('http://www.w3.org/2000/svg', 'line');
      line.setAttribute('stroke', lineColor);
      line.setAttribute('stroke-width', '1.5');
      line.setAttribute('stroke-dasharray', '6 3');
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
      lbl.style.fontSize = '.76rem';
      lbl.style.fontWeight = '700';
      lbl.style.opacity = '0.88';
      lbl.style.textAlign = 'center';
      lbl.style.letterSpacing = '.02em';
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
    /* Full-length radial dividers from center to ring 3 outer.
       Cards have been placed (in ALL_CARDS) so their bounding boxes
       maintain ≥12px clearance from any divider line at all rotations. */
    var outerRx = RING_RADII[3] * sx * 1.06;
    var outerRy = RING_RADII[3] * sy * 1.06;
    /* Labels sit outside the dividers, with z-index above cards.
       Floor: labels must be at least 30px outside ring 3 (vs card half-height
       plus label half-height plus buffer) so they never overlap ring-3 cards.
       Ceiling: stay on screen (or close to it) — but the floor wins on
       narrow viewports, even if labels slightly overflow the stage edge. */
    var labelRx = Math.max(RING_RADII[3] * sx + 60,
                           Math.min(RING_RADII[3] * sx * 1.20, stageW * 0.5 - 50));
    var labelRy = Math.max(RING_RADII[3] * sy + 30,
                           Math.min(RING_RADII[3] * sy * 1.20, stageH * 0.5 - 4));

    SECTORS.forEach(function (sec, i) {
      /* divider line at sector START angle, radial from center */
      var lineAngle = sec.start + globalAngle;
      var ca = Math.cos(lineAngle), sn = Math.sin(lineAngle);
      sectorLineEls[i].setAttribute('x1', cx);
      sectorLineEls[i].setAttribute('y1', cy);
      sectorLineEls[i].setAttribute('x2', cx + outerRx * ca);
      sectorLineEls[i].setAttribute('y2', cy + outerRy * sn);

      /* label at sector MID angle */
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

  /* ── Mobile back button (bottom-left, all pages) ───────────── */
  function parentUrl() {
    // Strip trailing slash, remove last path segment, restore trailing slash
    var path = window.location.pathname.replace(/\/$/, '');
    return path.substring(0, path.lastIndexOf('/') + 1) || '/';
  }

  function setupMobileBack() {
    var old = document.getElementById('rg-mobile-back');
    if (old) old.remove();
    if (window.innerWidth >= 768) return;

    // Hide on root/homepage (only one depth segment, no meaningful parent)
    var segments = window.location.pathname.replace(/^\/|\/$/g, '').split('/').filter(Boolean);
    if (segments.length <= 1) return;

    var btn = document.createElement('a');
    btn.id = 'rg-mobile-back';
    btn.className = 'rg-mobile-back';
    btn.href = parentUrl();
    btn.setAttribute('aria-label', '返回上一级');
    btn.innerHTML = '&#8592;'; // ←
    document.body.appendChild(btn);
  }

  /* ── Bootstrap ──────────────────────────────────────────────── */
  function init() {
    setupGalaxy();
    setupDirNav();
    setupMobileBack();
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
