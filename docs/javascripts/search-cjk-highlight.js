/*
 * 中文搜索高亮补丁。
 *
 * 站点中文检索靠 hooks.py 注入的隐藏 n-gram <span style="display:none">
 * 实现：查询 "高鸣宇" 命中的是隐藏 span 里的 token，Material 自带的高亮
 * 于是落在了不可见元素上，可见正文里的 "高鸣宇" 反而不被标红。
 *
 * 这里在结果渲染后，把可见 teaser/title 文本里出现的中文查询词包进
 * <mark>（沿用 Material 的 mark 样式）。每次结果刷新都重新应用。
 */
(function () {
  function escapeReg(s) {
    return s.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
  }

  // 从搜索框取出长度 ≥2 的中文连续片段作为高亮词，长的排前面
  function getTerms() {
    var input = document.querySelector('.md-search__input');
    if (!input || !input.value) return [];
    var runs = input.value.match(/[一-鿿㐀-䶿]{2,}/g) || [];
    var uniq = Array.from(new Set(runs));
    uniq.sort(function (a, b) { return b.length - a.length; });
    return uniq;
  }

  function highlightIn(root, re) {
    var walker = document.createTreeWalker(root, NodeFilter.SHOW_TEXT, {
      acceptNode: function (n) {
        if (!n.nodeValue || !n.nodeValue.trim()) return NodeFilter.FILTER_REJECT;
        if (n.parentNode && n.parentNode.nodeName === 'MARK') return NodeFilter.FILTER_REJECT;
        return NodeFilter.FILTER_ACCEPT;
      }
    });
    var nodes = [];
    while (walker.nextNode()) nodes.push(walker.currentNode);

    nodes.forEach(function (node) {
      var text = node.nodeValue;
      re.lastIndex = 0;
      if (!re.test(text)) return;
      re.lastIndex = 0;
      var frag = document.createDocumentFragment();
      var last = 0, m;
      while ((m = re.exec(text))) {
        if (m.index > last) frag.appendChild(document.createTextNode(text.slice(last, m.index)));
        var mark = document.createElement('mark');
        mark.textContent = m[0];
        frag.appendChild(mark);
        last = m.index + m[0].length;
        if (m.index === re.lastIndex) re.lastIndex++;
      }
      if (last < text.length) frag.appendChild(document.createTextNode(text.slice(last)));
      node.parentNode.replaceChild(frag, node);
    });
  }

  function run() {
    var terms = getTerms();
    if (!terms.length) return;
    var re = new RegExp(terms.map(escapeReg).join('|'), 'g');
    document
      .querySelectorAll('.md-search-result__title, .md-search-result__teaser')
      .forEach(function (el) { highlightIn(el, re); });
  }

  var scheduled = false;
  function schedule() {
    if (scheduled) return;
    scheduled = true;
    requestAnimationFrame(function () { scheduled = false; run(); });
  }

  function init() {
    var list = document.querySelector('.md-search-result__list')
            || document.querySelector('.md-search-result');
    if (!list) return;
    // 结果列表每次输入都会被 Material 重渲染，监听后重新高亮
    var obs = new MutationObserver(schedule);
    obs.observe(list, { childList: true, subtree: true });
    var input = document.querySelector('.md-search__input');
    if (input) input.addEventListener('input', schedule);
    schedule();
  }

  if (typeof document$ !== 'undefined') {
    document$.subscribe(init);
  } else {
    document.addEventListener('DOMContentLoaded', init);
  }
})();
