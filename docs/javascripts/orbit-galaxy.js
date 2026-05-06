/**
 * orbit-galaxy.js — 微电子科研版图 cluster visualization + direction-page nav
 * 4 star zones: 器件与工艺 / 模拟·射频·生物 / 数字系统与设计 / 智能与前沿计算
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

  /* ── 4 cluster zones ──────────────────────────────────────────
     cx/cy: zone center as fraction of stageW/stageH
     r:     orbit radius at getScale()=1 (reference 1100×900 stage)
     Cards count: 器件3 / 模拟3 / 数字5(largest) / 智能4
  ── ──────────────────────────────────────────────────────────── */
  var CLUSTERS = [
    {
      name: '器件与工艺',
      cx: 0.25, cy: 0.26,
      r: 120, speed: 0.008,
      rgb: '0,63,136',
      cards: [
        { name: '先进制程与异构集成',    tag: 'FinFET · GAA · Chiplet',  url: '先进制程与异构集成' },
        { name: '功率半导体与宽禁带器件', tag: 'SiC · GaN · 逆变器',      url: '功率半导体与宽禁带器件' },
        { name: '硅光子与光电集成',      tag: '光调制器 · 片上波导',     url: '硅光子与光电集成' },
      ]
    },
    {
      name: '模拟·射频·生物',
      cx: 0.75, cy: 0.26,
      r: 120, speed: 0.007,
      rgb: '0,63,136',
      cards: [
        { name: '射频与毫米波',          tag: 'LNA · PA · 毫米波雷达',  url: '射频与毫米波' },
        { name: '模拟与混合信号集成电路', tag: 'ADC · DAC · PLL',        url: '模拟与混合信号集成电路' },
        { name: '生物电子与脑机接口',    tag: '神经信号 · 植入式ASIC',  url: '生物电子与脑机接口' },
      ]
    },
    {
      name: '数字系统与设计',
      cx: 0.27, cy: 0.76,
      r: 170, speed: 0.006,
      rgb: '0,63,136',
      cards: [
        { name: '计算芯片与处理器架构', tag: 'GPU · TPU · RISC-V',       url: '计算芯片与处理器架构' },
        { name: '存储器与存算一体',     tag: 'SRAM · DRAM · PIM',        url: '存储器与存算一体' },
        { name: 'EDA与设计自动化',      tag: '布局布线 · ML for EDA',    url: 'EDA与设计自动化' },
        { name: '硬件安全',             tag: '侧信道 · 木马 · PUF',      url: '硬件安全' },
        { name: '可重构计算与FPGA',     tag: '灵活性 × 专用性能',       url: '可重构计算与FPGA' },
      ]
    },
    {
      name: '智能与前沿计算',
      cx: 0.75, cy: 0.75,
      r: 148, speed: 0.005,
      rgb: '0,63,136',
      cards: [
        { name: 'AI算法与系统',         tag: 'LLM · TinyML · AI Agent', url: 'AI算法与系统' },
        { name: '神经形态计算',         tag: '忆阻器 · 脉冲神经网络',   url: '神经形态计算' },
        { name: '具身智能',             tag: '机器人 · 感知 · 规划',     url: '具身智能' },
        { name: '量子计算与量子芯片',   tag: '量子比特 · 纠错 · 低温',  url: '量子计算与量子芯片' },
      ]
    }
  ];

  /* ── Galaxy state ───────────────────────────────────────────── */
  var stage, ringsEl, cardsLayer;
  var stageW = 1100, stageH = 700;
  var cardEls = [];
  var rafId = null;
  var lastTs = null;
  var paused = false;
  var resizeTimer = null;
  /* staggered starting angles for visual variety */
  var clusterAngles = [0, 1.0, 0.5, 1.5];
  var reducedMotion = false;

  /* ── Scale helper ───────────────────────────────────────────── */
  function getScale() {
    return Math.min(stageW / 1100, stageH / 900, 0.85);
  }

  function isDark() {
    return document.body.getAttribute('data-md-color-scheme') === 'slate';
  }

  function cardVars(rgb) {
    var dark = isDark();
    return {
      '--rg-color':  'rgb(' + rgb + ')',
      '--rg-bg':     dark ? '#1e2330' : '#ffffff',
      '--rg-border': dark ? 'rgba(255,255,255,0.10)' : 'rgba(0,0,0,0.09)',
      '--rg-glow':   'rgba(' + rgb + ',0.30)',
    };
  }

  /* ── Draw zone circles + center dots + labels ───────────────── */
  function drawZones() {
    if (!ringsEl) return;
    ringsEl.innerHTML = '';
    var sc = getScale();
    var alpha = isDark() ? 0.07 : 0.04;
    var ringAlpha = isDark() ? 0.28 : 0.18;

    CLUSTERS.forEach(function (cl) {
      var cx = stageW * cl.cx;
      var cy = stageH * cl.cy;
      var r  = cl.r * sc;

      /* faint radial glow behind zone */
      var bg = document.createElement('div');
      bg.style.cssText = [
        'position:absolute', 'left:' + cx + 'px', 'top:' + cy + 'px',
        'width:' + ((r + 50) * 2) + 'px', 'height:' + ((r + 50) * 2) + 'px',
        'transform:translate(-50%,-50%)', 'border-radius:50%',
        'background:radial-gradient(circle,rgba(' + cl.rgb + ',' + alpha + ') 0%,transparent 70%)',
        'pointer-events:none',
      ].join(';');
      ringsEl.appendChild(bg);

      /* orbit ring */
      var ring = document.createElement('div');
      ring.style.cssText = [
        'position:absolute', 'left:' + cx + 'px', 'top:' + cy + 'px',
        'width:' + (r * 2) + 'px', 'height:' + (r * 2) + 'px',
        'transform:translate(-50%,-50%)', 'border-radius:50%',
        'border:1.5px solid rgba(' + cl.rgb + ',' + ringAlpha + ')',
        'pointer-events:none', 'box-sizing:border-box',
      ].join(';');
      ringsEl.appendChild(ring);

      /* zone center dot */
      var dot = document.createElement('div');
      dot.style.cssText = [
        'position:absolute', 'left:' + cx + 'px', 'top:' + cy + 'px',
        'width:7px', 'height:7px',
        'transform:translate(-50%,-50%)', 'border-radius:50%',
        'background:rgb(' + cl.rgb + ')', 'opacity:0.55',
        'pointer-events:none',
      ].join(';');
      ringsEl.appendChild(dot);

      /* zone label — centered above orbit ring */
      var lbl = document.createElement('div');
      lbl.className = 'rg-ring-label';
      lbl.textContent = cl.name;
      lbl.style.cssText = [
        'left:' + cx + 'px',
        'top:' + (cy - r - 22) + 'px',
        'transform:translateX(-50%)',
        'color:rgb(' + cl.rgb + ')',
        'font-size:.68rem',
        'font-weight:700',
        'opacity:0.78',
        'white-space:nowrap',
      ].join(';');
      ringsEl.appendChild(lbl);
    });
  }

  /* ── Card position within cluster ──────────────────────────── */
  function cardPos(idx, n, ci) {
    var cl = CLUSTERS[ci];
    var r  = cl.r * getScale();
    var theta = clusterAngles[ci] + (2 * Math.PI * idx / n);
    return {
      x: stageW * cl.cx + r * Math.cos(theta),
      y: stageH * cl.cy + r * Math.sin(theta),
    };
  }

  /* ── Build card DOM ─────────────────────────────────────────── */
  function buildCards() {
    if (!cardsLayer) return;
    cardsLayer.innerHTML = '';
    cardEls = [];

    CLUSTERS.forEach(function (cl, ci) {
      cl.cards.forEach(function (card) {
        var a = document.createElement('a');
        a.className = 'rg-card';
        a.style.zIndex = String(3 + ci);
        var base = window.location.pathname.replace(/\/[^/]*$/, '/');
        a.href = base + encodeURIComponent(card.url) + '/';

        var vars = cardVars(cl.rgb);
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
    });
  }

  /* ── Position all cards ─────────────────────────────────────── */
  function positionCards() {
    var flat = 0;
    CLUSTERS.forEach(function (cl, ci) {
      cl.cards.forEach(function (_, idx) {
        var pos = cardPos(idx, cl.cards.length, ci);
        cardEls[flat].style.left = pos.x + 'px';
        cardEls[flat].style.top  = pos.y + 'px';
        flat++;
      });
    });
  }

  /* ── rAF loop ───────────────────────────────────────────────── */
  function tick(ts) {
    rafId = requestAnimationFrame(tick);
    if (!paused && !reducedMotion) {
      var dt = lastTs !== null ? Math.min((ts - lastTs) / 1000, 0.1) : 0;
      lastTs = ts;
      CLUSTERS.forEach(function (cl, ci) { clusterAngles[ci] += cl.speed * dt; });
    }
    positionCards();
  }

  /* ── Measure + resize ───────────────────────────────────────── */
  function measure() {
    var rect = stage.getBoundingClientRect();
    stageW = rect.width  || 1100;
    stageH = rect.height || 700;
  }

  function onResize() {
    clearTimeout(resizeTimer);
    resizeTimer = setTimeout(function () {
      measure(); drawZones(); positionCards();
    }, 100);
  }

  function refreshCardVars() {
    var flat = 0;
    CLUSTERS.forEach(function (cl) {
      cl.cards.forEach(function () {
        if (cardEls[flat]) {
          var vars = cardVars(cl.rgb);
          Object.keys(vars).forEach(function (k) { cardEls[flat].style.setProperty(k, vars[k]); });
        }
        flat++;
      });
    });
    drawZones();
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
    clusterAngles = [0, 1.0, 0.5, 1.5];

    measure();
    drawZones();
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
    var path = window.location.pathname;
    return path.replace(/\/[^/]+\/?$/, '/');
  }

  function randomDirUrl() {
    try {
      var decoded = decodeURIComponent(window.location.pathname);
      var m = decoded.match(/\/科研方向\/([^/]+)\/?$/);
      var current = m ? m[1] : '';
      var pool = DIRS.filter(function (d) { return d.slug !== current; });
      var pick = pool[Math.floor(Math.random() * pool.length)];
      var base = galaxyUrl();
      return base + encodeURIComponent(pick.slug) + '/';
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
