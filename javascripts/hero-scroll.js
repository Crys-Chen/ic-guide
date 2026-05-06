(function () {
  function init() {
    // 找当前显示的 hero（日间 df-light，夜间 df-dark）
    var light = document.querySelector('.df-light');
    var dark  = document.querySelector('.df-dark');
    var hero  = (light && getComputedStyle(light).display !== 'none') ? light : dark;
    var below = document.querySelector('.df-below');
    if (!hero || !below) return;

    // 重置（SPA 导航回首页时重新初始化）
    hero.style.transition  = 'opacity 0.15s ease';
    below.style.transition = 'opacity 0.15s ease';

    function tick() {
      var s = window.scrollY;
      var h = hero.offsetHeight;
      if (!h) return;
      // 在 hero 高度的 80% 内完成交叉淡变
      var t = Math.min(1, Math.max(0, s / (h * 0.8)));
      hero.style.opacity         = String(1 - t);
      below.style.opacity        = String(t);
      below.style.pointerEvents  = t > 0.05 ? '' : 'none';
    }

    window.addEventListener('scroll', tick, { passive: true });
    tick(); // 处理页面恢复时已有滚动偏移的情况
  }

  // MkDocs Material SPA 导航支持
  if (typeof document$ !== 'undefined') {
    document$.subscribe(init);
  } else {
    document.addEventListener('DOMContentLoaded', init);
  }
})();
