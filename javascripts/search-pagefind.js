/*
 * PageFind 搜索 overlay。
 *
 * 替代 Material 内置的 lunr + TinySegmenter 搜索，彻底解决中文
 * 3 字短语（如"高鸣宇"）无法搜索的问题。
 *
 * 触发方式：
 *   - 点击 header 里的 #pf-search-btn 放大镜按钮
 *   - 键盘 /（非 input/textarea 焦点时）
 *   - Ctrl/Cmd + K
 *   - Escape 关闭
 */
(function () {
  'use strict';

  /* window.__mkdocs_site 由 overrides/main.html 注入，形如
     "https://crys-chen.github.io/Fudan-ME/"              */
  var SITE = (window.__mkdocs_site || '').replace(/\/?$/, '/');
  var PF_CSS = SITE + 'pagefind/pagefind-ui.css';
  var PF_JS  = SITE + 'pagefind/pagefind-ui.js';

  var overlay = null;
  var loaded  = false;

  /* ── 一次性加载 PageFind CSS ── */
  function loadCSS() {
    if (document.querySelector('link[href="' + PF_CSS + '"]')) return;
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

    /* 加载 pagefind-ui.js 并初始化 */
    var script = document.createElement('script');
    script.src = PF_JS;
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
      loaded = true;
    };
    document.head.appendChild(script);
  }

  /* ── 打开 ── */
  function openOverlay() {
    if (!overlay) buildOverlay();
    overlay.classList.add('pf-open');
    document.body.classList.add('pf-noscroll');
    /* 等 UI 渲染后聚焦输入框 */
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

  /* ── 绑定事件 ── */
  function init() {
    var btn = document.getElementById('pf-search-btn');
    if (btn) btn.addEventListener('click', openOverlay);

    document.addEventListener('keydown', function (e) {
      /* Escape */
      if (e.key === 'Escape') { closeOverlay(); return; }

      /* / 快捷键（非输入框） */
      var tag = document.activeElement ? document.activeElement.tagName : '';
      if (e.key === '/' && !e.ctrlKey && !e.metaKey &&
          tag !== 'INPUT' && tag !== 'TEXTAREA' && tag !== 'SELECT') {
        e.preventDefault();
        openOverlay();
        return;
      }

      /* Ctrl+K / Cmd+K */
      if (e.key === 'k' && (e.ctrlKey || e.metaKey)) {
        e.preventDefault();
        openOverlay();
      }
    });
  }

  /* Material SPA 模式下等 document$ */
  if (typeof document$ !== 'undefined') {
    document$.subscribe(init);
  } else {
    document.addEventListener('DOMContentLoaded', init);
  }
})();
