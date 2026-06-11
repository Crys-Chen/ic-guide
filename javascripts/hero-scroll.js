(function () {
  var FADE = 0.25; // hero 在前 25% 高度内完成淡变

  function buildRgToc() {
    var essay = document.querySelector('.rg-essay');
    if (!essay) return;
    var sidebar = document.querySelector('.md-sidebar--secondary');
    if (!sidebar) return;
    var nav = sidebar.querySelector('.md-nav--secondary');
    if (!nav) return;
    var headings = Array.from(essay.querySelectorAll('h2[id]'));
    if (!headings.length) return;

    // 补上 Material 标准的"目录"标题
    if (!nav.querySelector('.md-nav__title')) {
      var label = document.createElement('label');
      label.className = 'md-nav__title';
      label.setAttribute('for', '__toc');
      var icon = document.createElement('span');
      icon.className = 'md-nav__icon md-icon';
      label.appendChild(icon);
      label.appendChild(document.createTextNode('目录'));
      nav.insertBefore(label, nav.firstChild);
    }

    var existing = nav.querySelector('ul.md-nav__list');
    if (existing) existing.remove();
    var ul = document.createElement('ul');
    ul.className = 'md-nav__list';

    var links = [];
    headings.forEach(function (h) {
      var li = document.createElement('li');
      li.className = 'md-nav__item';
      var a = document.createElement('a');
      a.href = '#' + h.id;
      a.className = 'md-nav__link';
      // 阻止 Material instant nav 拦截 hash 链接，改用原生滚动
      a.addEventListener('click', function (e) {
        e.preventDefault();
        e.stopPropagation();
        var target = document.getElementById(h.id);
        if (target) target.scrollIntoView({ behavior: 'smooth', block: 'start' });
      });
      var span = document.createElement('span');
      span.className = 'md-ellipsis';
      span.textContent = h.textContent.replace(/¶$/, '').trim();
      a.appendChild(span);
      li.appendChild(a);
      ul.appendChild(li);
      links.push(a);
    });

    nav.appendChild(ul);
    sidebar.removeAttribute('hidden');

    // 自行实现滚动高亮（Material scroll-spy 在注入前已初始化，无法感知这批 link）
    function updateActive() {
      var currentId = null;
      headings.forEach(function (h) {
        if (h.getBoundingClientRect().top <= 120) currentId = h.id;
      });
      links.forEach(function (a) {
        a.classList.toggle('md-nav__link--active', a.getAttribute('href') === '#' + currentId);
      });
    }
    window.addEventListener('scroll', updateActive, { passive: true });
    updateActive();
  }

  function init() {
    var light = document.querySelector('.df-light');
    var dark  = document.querySelector('.df-dark');
    var rg    = document.querySelector('.rg-root');
    var hero  = null;
    var isRg  = false;

    if (light && getComputedStyle(light).display !== 'none') hero = light;
    else if (dark && getComputedStyle(dark).display !== 'none') hero = dark;
    else if (rg && getComputedStyle(rg).display !== 'none') { hero = rg; isRg = true; }

    if (isRg) buildRgToc();

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
      zIndex:     '5',
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
    var toc = document.querySelector('.md-sidebar--secondary');
    if (toc) {
      toc.style.opacity    = '0';
      toc.style.transition = 'opacity 0.15s ease';
    }

    function tick() {
      var s = window.scrollY;
      var t = Math.min(1, Math.max(0, s / fadeScrollDist));
      var alpha = 1 - t;
      hero.style.opacity       = String(alpha);
      hero.style.pointerEvents = t > 0.9 ? 'none' : '';
      // visibility:hidden 彻底阻断后代事件（pointer-events:none 无法覆盖子元素的 !important）
      hero.style.visibility    = alpha < 0.01 ? 'hidden' : '';
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
