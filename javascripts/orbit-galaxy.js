/**
 * orbit-galaxy.js — 微电子科研版图 orbit visualization
 * Vanilla JS, MkDocs Material SPA compatible
 */

(function () {
  'use strict';

  /* ── Ring + card data ──────────────────────────────────────── */
  var RINGS = [
    {
      r: 95,
      speed: 0.028,
      color: '#F97316',
      rgb: '249,115,22',
      label: '器件层',
      cards: [
        { name: '先进制程\n与异构集成', tag: 'FinFET · GAA · Chiplet',    url: '先进制程与异构集成.md',    emoji: '⚛️' },
        { name: '功率半导体\n与宽禁带器件', tag: 'SiC · GaN · 逆变器',         url: '功率半导体与宽禁带器件.md', emoji: '⚡' },
        { name: '硅光子与\n光电集成',   tag: '光调制器 · 片上波导',        url: '硅光子与光电集成.md',    emoji: '💡' },
      ]
    },
    {
      r: 188,
      speed: 0.016,
      color: '#16A34A',
      rgb: '22,163,74',
      label: '电路层',
      cards: [
        { name: '射频与\n毫米波',       tag: 'LNA · PA · 毫米波雷达',     url: '射频与毫米波.md',        emoji: '📡' },
        { name: '存储器与\n存算一体',   tag: 'SRAM · DRAM · PIM',         url: '存储器与存算一体.md',    emoji: '💾' },
        { name: '神经形态\n计算',       tag: '忆阻器 · 脉冲神经网络',     url: '神经形态计算.md',        emoji: '🧠' },
        { name: '生物电子与\n脑机接口', tag: '神经信号 · 植入式ASIC',     url: '生物电子与脑机接口.md',  emoji: '🫀' },
        { name: '模拟与混合\n信号集成',  tag: 'ADC · DAC · PLL',           url: '模拟与混合信号集成电路.md', emoji: '〰️' },
      ]
    },
    {
      r: 272,
      speed: 0.010,
      color: '#D97706',
      rgb: '217,119,6',
      label: '架构层',
      cards: [
        { name: '计算芯片与\n处理器架构', tag: 'GPU · TPU · RISC-V',        url: '计算芯片与处理器架构.md', emoji: '💻' },
        { name: 'EDA与\n设计自动化',    tag: '布局布线 · ML for EDA',     url: 'EDA与设计自动化.md',     emoji: '⚙️' },
        { name: '硬件安全',             tag: '侧信道 · 木马 · PUF',       url: '硬件安全.md',            emoji: '🔒' },
        { name: '可重构计算\n与FPGA',   tag: '灵活性 × 专用性能',         url: '可重构计算与FPGA.md',    emoji: '🧩' },
      ]
    },
    {
      r: 348,
      speed: 0.006,
      color: '#3B82F6',
      rgb: '59,130,246',
      label: '交叉层',
      cards: [
        { name: '具身智能',             tag: '机器人 · 感知 · 规划',      url: '具身智能.md',            emoji: '🤖' },
        { name: '量子计算与\n量子芯片',  tag: '量子比特 · 纠错 · 低温',   url: '量子计算与量子芯片.md',  emoji: '🔬' },
        { name: 'AI算法\n与系统',       tag: 'LLM · TinyML · AI Agent',   url: 'AI算法与系统.md',        emoji: '✨' },
      ]
    }
  ];

  /* ── State ──────────────────────────────────────────────────── */
  var stage, ringsEl, cardsLayer;
  var stageW = 780, stageH = 780;
  var cardEls = [];        // flat list of card <a> elements
  var rafId = null;
  var lastTs = null;
  var paused = false;
  var resizeTimer = null;
  var ringAngles = [];     // current angle per ring (radians)
  var reducedMotion = false;

  /* ── Helpers ────────────────────────────────────────────────── */
  function getScale() {
    return Math.min(stageW, stageH) / 780;
  }

  function isDark() {
    return document.body.getAttribute('data-md-color-scheme') === 'slate';
  }

  function ringVars(rgb) {
    var dark = isDark();
    return {
      '--rg-color':    'rgb(' + rgb + ')',
      '--rg-bg':       'rgba(' + rgb + ',' + (dark ? '0.16' : '0.10') + ')',
      '--rg-bg-hover': 'rgba(' + rgb + ',' + (dark ? '0.26' : '0.18') + ')',
      '--rg-border':   'rgba(' + rgb + ',' + (dark ? '0.42' : '0.30') + ')',
      '--rg-glow':     'rgba(' + rgb + ',' + (dark ? '0.55' : '0.40') + ')',
    };
  }

  /* ── Draw decorative ring circles ──────────────────────────── */
  function drawRings() {
    ringsEl.innerHTML = '';
    var sc = getScale();
    RINGS.forEach(function (ring) {
      var d = ring.r * 2 * sc;
      var el = document.createElement('div');
      el.style.cssText = [
        'position:absolute',
        'left:50%',
        'top:50%',
        'width:' + d + 'px',
        'height:' + d + 'px',
        'transform:translate(-50%,-50%)',
        'border-radius:50%',
        'border:1px dashed rgba(' + ring.rgb + ',' + (isDark() ? '0.30' : '0.22') + ')',
        'pointer-events:none',
        'box-sizing:border-box',
      ].join(';');
      ringsEl.appendChild(el);

      /* ring label */
      var lbl = document.createElement('div');
      lbl.className = 'rg-ring-label';
      lbl.textContent = ring.label;
      /* position label at top of ring */
      var cx = stageW * 0.5;
      var cy = stageH * 0.5;
      lbl.style.cssText = [
        'left:' + (cx) + 'px',
        'top:' + (cy - ring.r * sc - 10) + 'px',
        'transform:translateX(-50%)',
        'color:rgb(' + ring.rgb + ')',
      ].join(';');
      ringsEl.appendChild(lbl);
    });
  }

  /* ── Compute card x,y from ring angle + index ───────────────── */
  function cardPos(ringIdx, cardIdx, numCards, angle) {
    var ring = RINGS[ringIdx];
    var sc = getScale();
    var r = ring.r * sc;
    var theta = angle + (2 * Math.PI * cardIdx / numCards) + (ringIdx * 1.1);
    var cx = stageW * 0.5;
    var cy = stageH * 0.5;
    return {
      x: cx + r * Math.cos(theta),
      y: cy + r * Math.sin(theta),
    };
  }

  /* ── Build card DOM ─────────────────────────────────────────── */
  function buildCards() {
    cardsLayer.innerHTML = '';
    cardEls = [];

    RINGS.forEach(function (ring, ri) {
      ring.cards.forEach(function (card, ci) {
        var a = document.createElement('a');
        a.className = 'rg-card';
        a.href = card.url;

        /* set CSS custom properties */
        var vars = ringVars(ring.rgb);
        Object.keys(vars).forEach(function (k) { a.style.setProperty(k, vars[k]); });

        var inner = document.createElement('div');
        inner.className = 'rg-card-inner';

        var icon = document.createElement('span');
        icon.className = 'rg-card-icon';
        icon.textContent = card.emoji;

        var name = document.createElement('span');
        name.className = 'rg-card-name';
        /* replace \n with <br> */
        name.innerHTML = card.name.replace(/\n/g, '<br>');

        var tag = document.createElement('span');
        tag.className = 'rg-card-tag';
        tag.textContent = card.tag;

        inner.appendChild(icon);
        inner.appendChild(name);
        inner.appendChild(tag);
        a.appendChild(inner);
        cardsLayer.appendChild(a);

        /* hover handlers */
        a.addEventListener('mouseenter', function () {
          if (reducedMotion) return;
          paused = true;
          cardEls.forEach(function (el) { el.classList.remove('rg-active', 'rg-dim'); });
          a.classList.add('rg-active');
          cardEls.forEach(function (el) { if (el !== a) el.classList.add('rg-dim'); });
        });
        a.addEventListener('mouseleave', function () {
          if (reducedMotion) return;
          paused = false;
          lastTs = null; /* reset dt to avoid jump */
          cardEls.forEach(function (el) { el.classList.remove('rg-active', 'rg-dim'); });
        });

        cardEls.push(a);
      });
    });
  }

  /* ── Position all cards (called every frame or on init) ────── */
  function positionCards() {
    var flat = 0;
    RINGS.forEach(function (ring, ri) {
      ring.cards.forEach(function (card, ci) {
        var pos = cardPos(ri, ci, ring.cards.length, ringAngles[ri]);
        var el = cardEls[flat];
        el.style.left = pos.x + 'px';
        el.style.top  = pos.y + 'px';
        flat++;
      });
    });
  }

  /* ── rAF loop ───────────────────────────────────────────────── */
  function tick(ts) {
    rafId = requestAnimationFrame(tick);
    if (!paused && !reducedMotion) {
      var dt = 0;
      if (lastTs !== null) {
        dt = Math.min((ts - lastTs) / 1000, 0.1); /* cap at 100ms */
      }
      lastTs = ts;
      RINGS.forEach(function (ring, ri) {
        ringAngles[ri] += ring.speed * dt;
      });
    }
    positionCards();
  }

  /* ── Measure stage dimensions ───────────────────────────────── */
  function measure() {
    var rect = stage.getBoundingClientRect();
    stageW = rect.width  || 780;
    stageH = rect.height || stageW; /* aspect-ratio 1:1 enforced by CSS */
  }

  /* ── Resize handler ─────────────────────────────────────────── */
  function onResize() {
    clearTimeout(resizeTimer);
    resizeTimer = setTimeout(function () {
      measure();
      drawRings();
      positionCards();
    }, 100);
  }

  /* ── Update CSS vars on theme change ─────────────────────────── */
  function refreshCardVars() {
    var flat = 0;
    RINGS.forEach(function (ring) {
      ring.cards.forEach(function () {
        var el = cardEls[flat];
        if (el) {
          var vars = ringVars(ring.rgb);
          Object.keys(vars).forEach(function (k) { el.style.setProperty(k, vars[k]); });
        }
        flat++;
      });
    });
    drawRings();
  }

  /* ── Main setup ─────────────────────────────────────────────── */
  function setup() {
    var root = document.getElementById('rg-root');
    if (!root) return;

    stage      = document.getElementById('rg-stage');
    ringsEl    = document.getElementById('rg-rings');
    cardsLayer = document.getElementById('rg-cards-layer');
    if (!stage || !ringsEl || !cardsLayer) return;

    /* reduced motion */
    var mq = window.matchMedia('(prefers-reduced-motion: reduce)');
    reducedMotion = mq.matches;

    /* init ring angles */
    ringAngles = RINGS.map(function () { return 0; });

    measure();
    drawRings();
    buildCards();
    positionCards(); /* initial positions before first rAF — no flash */

    /* watch theme toggle */
    var observer = new MutationObserver(function (muts) {
      muts.forEach(function (m) {
        if (m.attributeName === 'data-md-color-scheme') {
          refreshCardVars();
        }
      });
    });
    observer.observe(document.body, { attributes: true });

    /* start loop */
    if (rafId) cancelAnimationFrame(rafId);
    lastTs = null;
    rafId = requestAnimationFrame(tick);

    window.removeEventListener('resize', onResize);
    window.addEventListener('resize', onResize);
  }

  /* ── MkDocs SPA + DOMContentLoaded bootstrap ─────────────────── */
  if (typeof document$ !== 'undefined') {
    document$.subscribe(function () {
      if (rafId) { cancelAnimationFrame(rafId); rafId = null; }
      setTimeout(setup, 80);
    });
  }

  document.addEventListener('DOMContentLoaded', function () {
    setTimeout(setup, 80);
  });

})();
