(function () {
  var FADE = 0.2; // hero 在前 20% 高度内完成淡变（更快）

  function init() {
    var light = document.querySelector('.df-light');
    var dark  = document.querySelector('.df-dark');
    var hero  = null;
    if (light && getComputedStyle(light).display !== 'none') hero = light;
    else if (dark && getComputedStyle(dark).display !== 'none') hero = dark;

    var below = document.querySelector('.df-below');
    if (!hero || !below) return;

    // 移动端不做 fixed 效果，直接显示正文
    if (window.innerWidth < 768) {
      below.style.opacity       = '1';
      below.style.pointerEvents = '';
      return;
    }

    var header = document.querySelector('.md-header');
    var tabs   = document.querySelector('.md-tabs');
    var topOff = (header ? header.offsetHeight : 0)
               + (tabs   ? tabs.offsetHeight   : 0);

    var heroH = hero.offsetHeight;

    // 将 hero 固定在屏幕上，不随页面滚动
    Object.assign(hero.style, {
      position:   'fixed',
      top:        topOff + 'px',
      left:       '0',
      right:      '0',
      width:      '100%',
      marginLeft: '0',
      marginTop:  '0',
      zIndex:     '9',
      transition: 'opacity 0.15s ease',
    });

    // 顶部补偿：淡变完成时正好能看到第一行，再加 2rem 呼吸空间
    var fadeScrollDist = Math.round(heroH * FADE);
    below.style.paddingTop    = (fadeScrollDist + 32) + 'px';
    below.style.opacity       = '0';
    below.style.pointerEvents = 'none';
    below.style.transition    = 'opacity 0.15s ease';

    function tick() {
      var s = window.scrollY;
      var t = Math.min(1, Math.max(0, s / fadeScrollDist));
      hero.style.opacity        = String(1 - t);
      below.style.opacity       = String(t);
      below.style.pointerEvents = t > 0.1 ? '' : 'none';
      hero.style.pointerEvents  = t > 0.9 ? 'none' : '';
    }

    window.addEventListener('scroll', tick, { passive: true });
    tick();
  }

  if (typeof document$ !== 'undefined') {
    document$.subscribe(init);
  } else {
    document.addEventListener('DOMContentLoaded', init);
  }
})();
