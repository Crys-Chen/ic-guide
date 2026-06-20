/*
 * PageFind 搜索 overlay。
 *
 * 触发方式：
 *   - 点击 header 里的 #pf-search-btn 放大镜按钮
 *   - 键盘 /（非 input/textarea 焦点时）
 *   - Ctrl/Cmd + K
 *   - Escape 关闭
 */
(function () {
  'use strict';

  /* ── 计算 pagefind/ 的绝对根路径 ──────────────────────────────
     优先用 window.__mkdocs_site（由 overrides/main.html 注入），
     但如果它的 origin 和当前页面不同（本地 dev 服务器），则
     回退到从 extra.css 的 <link> href 推算站点根路径。          */
  function getSiteRoot() {
    var site = window.__mkdocs_site || '';
    if (site && location.origin && site.startsWith(location.origin)) {
      return site.replace(/\/?$/, '/');
    }
    // 本地 dev 回退：找 extra.css link 推根路径
    var css = document.querySelector('link[href*="stylesheets/extra.css"]');
    if (css && css.href) {
      return css.href.replace(/stylesheets\/extra\.css.*$/, '');
    }
    return location.origin + '/';
  }

  var SITE = getSiteRoot();
  var PF_CSS = SITE + 'pagefind/pagefind-ui.css';
  var PF_JS  = SITE + 'pagefind/pagefind-ui.js';

  var overlay = null;

  /* ── 一次性加载 PageFind CSS ── */
  function loadCSS() {
    if (document.querySelector('link[href^="' + SITE + 'pagefind/"]')) return;
    var link = document.createElement('link');
    link.rel  = 'stylesheet';
    link.href = PF_CSS;
    document.head.appendChild(link);
  }

  /* ── 构建 overlay DOM（只做一次） ── */
  function buildOverlay() {
    loadCSS();
    overlay = document.createElement('div');
    overlay.id = 'pf-overlay';
    overlay.setAttribute('role', 'dialog');
    overlay.setAttribute('aria-modal', 'true');
    overlay.setAttribute('aria-label', '搜索');
    overlay.innerHTML =
      '<div id="pf-bg"></div>' +
      '<div id="pf-box"><div id="pf-ui"></div></div>';
    document.body.appendChild(overlay);

    /* 点击背景关闭 */
    overlay.addEventListener('click', function (e) {
      if (e.target === overlay || e.target.id === 'pf-bg') closeOverlay();
    });

    /* 加载 pagefind-ui.js 并初始化搜索 UI */
    var script = document.createElement('script');
    script.src = PF_JS;
    script.onerror = function () {
      var ui = document.getElementById('pf-ui');
      if (ui) ui.innerHTML = '<p style="padding:12px;color:#555">搜索服务暂不可用（需先部署到 GitHub Pages）</p>';
    };
    script.onload = function () {
      new PagefindUI({
        element: '#pf-ui',
        showImages: false,
        showEmptyFilters: false,
        resetStyles: false,
        translations: {
          placeholder: '搜索…',
          zero_results: '未找到相关内容'
        }
      });
    };
    document.head.appendChild(script);
  }

  /* ── 定位 #pf-box 到 header 标题右边缘 → 搜索按钮右边缘之间 ── */
  function positionBox() {
    var box  = document.getElementById('pf-box');
    if (!box) return;

    /* 移动端：居中固定宽度，不跟着 header 元素走 */
    if (window.innerWidth < 960) {
      var mw = Math.min(window.innerWidth * 0.88, 480);
      var ml = (window.innerWidth - mw) / 2;
      box.style.left  = ml + 'px';
      box.style.right = ml + 'px';
      return;
    }

    var title = document.querySelector('.md-header__title');
    var btn  = document.getElementById('pf-search-btn');
    if (title && btn) {
      var GAP = 16;
      var titleSpan = document.querySelector('.md-header__topic .md-ellipsis');
      var leftEdge  = titleSpan
        ? titleSpan.getBoundingClientRect().right + GAP
        : title.getBoundingClientRect().left + GAP;
      var bRect    = btn.getBoundingClientRect();
      var rightEdge = bRect.left - GAP;
      box.style.left  = leftEdge + 'px';
      box.style.right = (window.innerWidth - rightEdge) + 'px';
    } else {
      box.style.left  = '14rem';
      box.style.right = '5rem';
    }
  }

  /* ── 打开 ── */
  function openOverlay() {
    if (!overlay) buildOverlay();
    positionBox();
    overlay.classList.add('pf-open');
    document.body.classList.add('pf-noscroll');
    setTimeout(function () {
      var inp = document.querySelector('#pf-ui input[type=text]');
      if (inp) inp.focus();
    }, 80);
  }

  /* ── 关闭 ── */
  function closeOverlay() {
    if (overlay) overlay.classList.remove('pf-open');
    document.body.classList.remove('pf-noscroll');
  }

  /* ── 绑定事件（幂等：用 __pf 标记防止重复绑定） ── */
  function init() {
    var btn = document.getElementById('pf-search-btn');
    if (btn && !btn.__pf) {
      btn.addEventListener('click', openOverlay);
      btn.__pf = true;
    }

    if (!document.__pfKeys) {
      document.__pfKeys = true;
      document.addEventListener('keydown', function (e) {
        if (e.key === 'Escape') { closeOverlay(); return; }
        var tag = document.activeElement ? document.activeElement.tagName : '';
        if (e.key === '/' && !e.ctrlKey && !e.metaKey &&
            tag !== 'INPUT' && tag !== 'TEXTAREA' && tag !== 'SELECT') {
          e.preventDefault(); openOverlay(); return;
        }
        if (e.key === 'k' && (e.ctrlKey || e.metaKey)) {
          e.preventDefault(); openOverlay();
        }
      });
    }
  }

  /* ── 窗口 resize 时重新定位（overlay 打开状态下） ── */
  window.addEventListener('resize', function () {
    if (overlay && overlay.classList.contains('pf-open')) positionBox();
  });

  /* ── 启动 ──────────────────────────────────────────────────────
     extra_javascript 脚本在 <body> 底部无 defer 执行，DOM 此时
     已 ready，直接调 init()。同时订阅 document$ 以覆盖 Material
     SPA 跳转后的情形（仅当 navigation.instant 开启时有效）。    */
  init();
  if (typeof document$ !== 'undefined') {
    document$.subscribe(init);
  }
})();
