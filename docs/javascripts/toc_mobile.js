(function () {
  'use strict';

  function init() {
    if (window.innerWidth > 76.1875 * 16) return;

    var sidebar = document.querySelector('.md-sidebar--secondary');
    if (!sidebar) return;

    var links = sidebar.querySelectorAll('.md-nav--secondary a');
    if (!links.length) return;

    var btn = document.createElement('button');
    btn.className = 'toc-float-btn';
    btn.setAttribute('aria-label', '页面目录');
    btn.setAttribute('aria-expanded', 'false');
    btn.innerHTML =
      '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="18" height="18" fill="currentColor">' +
      '<path d="M3 9h14V7H3v2zm0 4h14v-2H3v2zm0 4h14v-2H3v2zm16 0h2v-2h-2v2zm0-10v2h2V7h-2zm0 6h2v-2h-2v2z"/>' +
      '</svg>';

    var open = false;

    function setOpen(val) {
      open = val;
      sidebar.classList.toggle('toc-open', open);
      btn.setAttribute('aria-expanded', open ? 'true' : 'false');
    }

    btn.addEventListener('click', function (e) {
      e.stopPropagation();
      setOpen(!open);
    });

    sidebar.addEventListener('click', function (e) {
      if (e.target.tagName === 'A') setOpen(false);
    });

    document.addEventListener('click', function (e) {
      if (open && !sidebar.contains(e.target) && e.target !== btn) setOpen(false);
    });

    document.body.appendChild(btn);
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
