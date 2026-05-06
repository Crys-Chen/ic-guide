/**
 * orbit-galaxy.js — 微电子科研版图 orbit visualization + direction-page nav
 * Vanilla JS, MkDocs Material SPA compatible
 */

(function () {
  'use strict';

  /* ── Direction data (shared by galaxy + dir-nav) ────────────── */
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

  /* ── Ring + card data ──────────────────────────────────────── */
  var RINGS = [
    {
      r: 120, speed: 0.028, color: '#F97316', rgb: '249,115,22', label: '器件层',
      cards: [
        { name: '先进制程\n与异构集成',    tag: 'FinFET · GAA · Chiplet',    url: '先进制程与异构集成',    emoji: '⚛️' },
        { name: '功率半导体\n与宽禁带器件', tag: 'SiC · GaN · 逆变器',        url: '功率半导体与宽禁带器件', emoji: '⚡' },
        { name: '硅光子与\n光电集成',      tag: '光调制器 · 片上波导',       url: '硅光子与光电集成',      emoji: '💡' },
      ]
    },
    {
      r: 235, speed: 0.016, color: '#16A34A', rgb: '22,163,74', label: '电路层',
      cards: [
        { name: '射频与\n毫米波',         tag: 'LNA · PA · 毫米波雷达',    url: '射频与毫米波',          emoji: '📡' },
        { name: '存储器与\n存算一体',     tag: 'SRAM · DRAM · PIM',        url: '存储器与存算一体',      emoji: '💾' },
        { name: '神经形态\n计算',         tag: '忆阻器 · 脉冲神经网络',    url: '神经形态计算',          emoji: '🧠' },
        { name: '生物电子与\n脑机接口',   tag: '神经信号 · 植入式ASIC',    url: '生物电子与脑机接口',    emoji: '🫀' },
        { name: '模拟与混合\n信号集成',   tag: 'ADC · DAC · PLL',          url: '模拟与混合信号集成电路', emoji: '〰️' },
      ]
    },
    {
      r: 340, speed: 0.010, color: '#D97706', rgb: '217,119,6', label: '架构层',
      cards: [
        { name: '计算芯片与\n处理器架构', tag: 'GPU · TPU · RISC-V',        url: '计算芯片与处理器架构',  emoji: '💻' },
        { name: 'EDA与\n设计自动化',      tag: '布局布线 · ML for EDA',     url: 'EDA与设计自动化',       emoji: '⚙️' },
        { name: '硬件安全',               tag: '侧信道 · 木马 · PUF',       url: '硬件安全',              emoji: '🔒' },
        { name: '可重构计算\n与FPGA',     tag: '灵活性 × 专用性能',         url: '可重构计算与FPGA',      emoji: '🧩' },
      ]
    },
    {
      r: 435, speed: 0.006, color: '#3B82F6', rgb: '59,130,246', label: '交叉层',
      cards: [
        { name: '具身智能',               tag: '机器人 · 感知 · 规划',      url: '具身智能',              emoji: '🤖' },
        { name: '量子计算与\n量子芯片',   tag: '量子比特 · 纠错 · 低温',    url: '量子计算与量子芯片',    emoji: '🔬' },
        { name: 'AI算法\n与系统',         tag: 'LLM · TinyML · AI Agent',   url: 'AI算法与系统',          emoji: '✨' },
      ]
    }
  ];

  /* ── Galaxy state ───────────────────────────────────────────── */
  var stage, ringsEl, cardsLayer;
  var stageW = 1000, stageH = 1000;
  var cardEls = [];
  var rafId = null;
  var lastTs = null;
  var paused = false;
  var resizeTimer = null;
  var ringAngles = RINGS.map(function () { return 0; });
  var reducedMotion = false;

  /* ── Scale helpers ─────────────────────────────────────────── */
  function getScaleX() { return stageW / 1000; }
  function getScaleY() { return stageH / 1000; }
  /* card-size scale: vertical axis, floored so text stays readable */
  function getScale() { return Math.max(getScaleY(), 0.88); }

  function isDark() {
    return document.body.getAttribute('data-md-color-scheme') === 'slate';
  }

  function ringVars(rgb) {
    var dark = isDark();
    return {
      '--rg-color':    'rgb(' + rgb + ')',
      '--rg-bg':       dark ? 'rgba(12,16,34,0.80)' : 'rgba(248,250,253,0.92)',
      '--rg-bg-hover': 'rgba(' + rgb + ',0.88)',
      '--rg-border':   dark ? 'rgba(255,255,255,0.09)' : 'rgba(20,30,60,0.10)',
      '--rg-glow':     'rgba(' + rgb + ',0.40)',
    };
  }

  /* ── Draw decorative orbit rings (elliptical) ──────────────── */
  function drawRings() {
    if (!ringsEl) return;
    ringsEl.innerHTML = '';
    var sx = getScaleX();
    var sy = getScaleY();
    RINGS.forEach(function (ring) {
      var rw = ring.r * sx * 2;
      var rh = ring.r * sy * 2;
      var el = document.createElement('div');
      el.style.cssText = [
        'position:absolute', 'left:50%', 'top:50%',
        'width:' + rw + 'px', 'height:' + rh + 'px',
        'transform:translate(-50%,-50%)',
        'border-radius:50%',
        'border:1px solid rgba(' + ring.rgb + ',' + (isDark() ? '0.18' : '0.12') + ')',
        'pointer-events:none', 'box-sizing:border-box',
      ].join(';');
      ringsEl.appendChild(el);

      var lbl = document.createElement('div');
      lbl.className = 'rg-ring-label';
      lbl.textContent = ring.label;
      lbl.style.cssText = [
        'left:' + (stageW * 0.5) + 'px',
        'top:' + (stageH * 0.5 - ring.r * sy - 12) + 'px',
        'transform:translateX(-50%)',
        'color:rgb(' + ring.rgb + ')',
      ].join(';');
      ringsEl.appendChild(lbl);
    });

    /* propagate card size scale */
    if (stage) stage.style.setProperty('--rg-card-sc', getScale().toFixed(3));
  }

  /* ── Card position (elliptical: separate x/y radii) ────────── */
  function cardPos(ri, ci, n) {
    var rx = RINGS[ri].r * getScaleX();
    var ry = RINGS[ri].r * getScaleY();
    var theta = ringAngles[ri] + (2 * Math.PI * ci / n) + ri * 1.1;
    return {
      x: stageW * 0.5 + rx * Math.cos(theta),
      y: stageH * 0.5 + ry * Math.sin(theta),
    };
  }

  /* ── Build card DOM ─────────────────────────────────────────── */
  function buildCards() {
    if (!cardsLayer) return;
    cardsLayer.innerHTML = '';
    cardEls = [];

    RINGS.forEach(function (ring, ri) {
      ring.cards.forEach(function (card, ci) {
        var a = document.createElement('a');
        a.className = 'rg-card';
        /* resolve URL relative to the index page */
        var base = window.location.pathname.replace(/\/[^/]*$/, '/');
        a.href = base + encodeURIComponent(card.url) + '/';

        var vars = ringVars(ring.rgb);
        Object.keys(vars).forEach(function (k) { a.style.setProperty(k, vars[k]); });

        var inner = document.createElement('div');
        inner.className = 'rg-card-inner';
        inner.innerHTML =
          '<span class="rg-card-name">' + card.name.replace(/\n/g, '') + '</span>' +
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
    RINGS.forEach(function (ring, ri) {
      ring.cards.forEach(function (_, ci) {
        var pos = cardPos(ri, ci, ring.cards.length);
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
      RINGS.forEach(function (ring, ri) { ringAngles[ri] += ring.speed * dt; });
    }
    positionCards();
  }

  /* ── Measure + resize ───────────────────────────────────────── */
  function measure() {
    var rect = stage.getBoundingClientRect();
    stageW = rect.width  || 1000;
    stageH = rect.height || stageW;
  }

  function onResize() {
    clearTimeout(resizeTimer);
    resizeTimer = setTimeout(function () {
      measure(); drawRings(); positionCards();
    }, 100);
  }

  function refreshCardVars() {
    var flat = 0;
    RINGS.forEach(function (ring) {
      ring.cards.forEach(function () {
        if (cardEls[flat]) {
          var vars = ringVars(ring.rgb);
          Object.keys(vars).forEach(function (k) { cardEls[flat].style.setProperty(k, vars[k]); });
        }
        flat++;
      });
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

    reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    ringAngles = RINGS.map(function () { return 0; });

    measure();
    drawRings();
    buildCards();
    positionCards();

    new MutationObserver(function (muts) {
      muts.forEach(function (m) {
        if (m.attributeName === 'data-md-color-scheme') refreshCardVars();
      });
    }).observe(document.body, { attributes: true });

    if (rafId) cancelAnimationFrame(rafId);
    lastTs = null;
    rafId = requestAnimationFrame(tick);

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
    /* go up one level from current direction page */
    var path = window.location.pathname;
    return path.replace(/\/[^/]+\/?$/, '/');
  }

  function randomDirUrl() {
    try {
      var decoded = decodeURIComponent(window.location.pathname);
      /* extract current slug from path segment */
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
    if (document.getElementById('rg-dir-nav')) return; /* already injected */

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
      /* clean up old nav */
      var old = document.getElementById('rg-dir-nav');
      if (old) old.remove();
      setTimeout(init, 80);
    });
  }

  document.addEventListener('DOMContentLoaded', function () {
    setTimeout(init, 80);
  });

})();
