(function () {
  function init() {
    var light = document.querySelector('.df-light');
    var dark  = document.querySelector('.df-dark');
    var hero  = null;
    if (light && getComputedStyle(light).display !== 'none') hero = light;
    else if (dark && getComputedStyle(dark).display !== 'none') hero = dark;

    var below = document.querySelector('.df-below');
    if (!hero || !below) return;

    // 测量 header + tabs 的高度，hero 从它们下方开始
    var header = document.querySelector('.md-header');
    var tabs   = document.querySelector('.md-tabs');
    var topOff = (header ? header.offsetHeight : 0)
               + (tabs   ? tabs.offsetHeight   : 0);

    var heroH = hero.offsetHeight;

    // 将 hero 变为固定覆盖层，不随页面滚动
    Object.assign(hero.style, {
      position:   'fixed',
      top:        topOff + 'px',
      left:       '0',
      right:      '0',
      width:      '100%',
      marginLeft: '0',
      marginTop:  '0',
      zIndex:     '9',
      transition: 'opacity 0.2s ease',
    });

    // 正文初始隐藏，藏在 hero 后面
    below.style.opacity       = '0';
    below.style.pointerEvents = 'none';
    below.style.transition    = 'opacity 0.2s ease';

    function tick() {
      var s = window.scrollY;
      // 在前 40% 的 hero 高度内完成交叉淡变
      var t = Math.min(1, Math.max(0, s / (heroH * 0.4)));
      hero.style.opacity        = String(1 - t);
      below.style.opacity       = String(t);
      below.style.pointerEvents = t > 0.1 ? '' : 'none';
      hero.style.pointerEvents  = t > 0.9 ? 'none' : '';
    }

    window.addEventListener('scroll', tick, { passive: true });
    tick();
  }

  // MkDocs Material SPA 导航兼容
  if (typeof document$ !== 'undefined') {
    document$.subscribe(init);
  } else {
    document.addEventListener('DOMContentLoaded', init);
  }
})();
