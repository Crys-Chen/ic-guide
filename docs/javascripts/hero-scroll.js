(function () {
  var FADE = 0.2; // df-hero 在前 20% 高度内完成淡变

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
    if (!hero || !below) return;

    // 移动端不做特效，直接显示正文
    if (window.innerWidth < 768) {
      if (!isRg) {
        below.style.opacity       = '1';
        below.style.pointerEvents = '';
      }
      return;
    }

    var header = document.querySelector('.md-header');
    var tabs   = document.querySelector('.md-tabs');
    var topOff = (header ? header.offsetHeight : 0)
               + (tabs   ? tabs.offsetHeight   : 0);

    var heroH = hero.offsetHeight || (window.innerHeight - topOff);
    var fadeScrollDist;
    var toc = null;

    if (isRg) {
      // ── 星图页：sticky 方案 ──────────────────────────────────
      // 星图留在文档流，essay 从下滑入盖住它，星图渐隐；
      // 向上滚动 essay 退回，星图自然复现。
      Object.assign(hero.style, {
        position:   'sticky',
        top:        topOff + 'px',
        zIndex:     '1',
        transition: 'opacity 0.12s ease',
      });

      fadeScrollDist = heroH;

      toc = document.querySelector('.md-sidebar--secondary');
      if (toc) {
        toc.style.opacity    = '0';
        toc.style.transition = 'opacity 0.12s ease';
      }
    } else {
      // ── 首页 hero：fixed 方案 ────────────────────────────────
      Object.assign(hero.style, {
        position:   'fixed',
        top:        topOff + 'px',
        left:       '0',
        right:      '0',
        width:      '100%',
        marginLeft: '0',
        marginTop:  '0',
        zIndex:     '1',
        transition: 'opacity 0.15s ease',
      });

      fadeScrollDist = Math.round(heroH * FADE);
      below.style.paddingTop    = (fadeScrollDist + 32) + 'px';
      below.style.opacity       = '0';
      below.style.pointerEvents = 'none';
      below.style.transition    = 'opacity 0.15s ease';
    }

    function tick() {
      var s = window.scrollY;
      var t = Math.min(1, Math.max(0, s / fadeScrollDist));
      hero.style.opacity       = String(1 - t);
      hero.style.pointerEvents = t > 0.9 ? 'none' : '';
      if (isRg) {
        if (toc) toc.style.opacity = String(t);
      } else {
        below.style.opacity       = String(t);
        below.style.pointerEvents = t > 0.1 ? '' : 'none';
      }
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
