(function () {
  var FADE = 0.25; // hero 在前 25% 高度内完成淡变

  function init() {
    var light = document.querySelector('.df-light');
    var dark  = document.querySelector('.df-dark');
    var rg    = document.querySelector('.rg-root');
    var hero  = null;
    var isRg  = false;

    if (light && getComputedStyle(light).display !== 'none') hero = light;
    else if (dark && getComputedStyle(dark).display !== 'none') hero = dark;
    else if (rg && getComputedStyle(rg).display !== 'none') { hero = rg; isRg = true; }

    var below = document.querySelector('.df-below') || document.querySelector('.rg-essay');
    if (!below) return;

    // 找不到 hero（星图未渲染等），直接显示正文
    if (!hero) {
      below.style.opacity       = '1';
      below.style.pointerEvents = '';
      return;
    }

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

    var heroH = hero.offsetHeight || (window.innerHeight - topOff);

    // hero 固定全屏（首页和星图页完全一致）
    // setProperty + important 覆盖 .rg-fullscreen 里的 margin !important CSS
    Object.assign(hero.style, {
      position:   'fixed',
      top:        topOff + 'px',
      left:       '0',
      right:      '0',
      zIndex:     '1',
      transition: 'opacity 0.15s ease',
    });
    hero.style.setProperty('margin',  '0', 'important');
    hero.style.setProperty('width',   '100%', 'important');

    var fadeScrollDist = Math.round(heroH * FADE);
    below.style.paddingTop    = (fadeScrollDist + 32) + 'px';
    below.style.opacity       = '0';
    below.style.pointerEvents = 'none';
    below.style.transition    = 'opacity 0.15s ease';

    // 星图页：目录随文章一起淡入
    var toc = isRg ? document.querySelector('.md-sidebar--secondary') : null;
    if (toc) {
      toc.style.opacity    = '0';
      toc.style.transition = 'opacity 0.15s ease';
    }

    function tick() {
      var s = window.scrollY;
      var t = Math.min(1, Math.max(0, s / fadeScrollDist));
      hero.style.opacity        = String(1 - t);
      hero.style.pointerEvents  = t > 0.9 ? 'none' : '';
      below.style.opacity       = String(t);
      below.style.pointerEvents = t > 0.1 ? '' : 'none';
      if (toc) toc.style.opacity = String(t);
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
