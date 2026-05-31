/* stock-quote.js —— 给方向页「代表性机构 > 企业」里的 <span class="sq" data-stock="市场:代码">
 * 注入实时股价数字（红涨绿跌）。数据源：东方财富 push2 JSONP（浏览器端跨域取数）。
 * 覆盖 A股(sh/sz/bj)、港股(hk)、美股(us，105/106/107 依次回退)。
 * 取不到（如个别非美海外股）时回退成一个「行情↗」小链接。
 * 与站内其它脚本一致，用 document$.subscribe + DOMContentLoaded 双绑定以适配 Material 的 SPA 路由。
 */
(function () {
  "use strict";

  var PUSH2 = "https://push2.eastmoney.com/api/qt/stock/get";
  var cbSeq = 0;

  // 市场 -> 候选 secid 前缀（美股交易所未知，依次试 NASDAQ/NYSE/AMEX）
  function secids(market, code) {
    switch (market) {
      case "sh": return ["1." + code];
      case "sz": return ["0." + code];
      case "bj": return ["0." + code];
      case "hk": return ["116." + code];
      case "us": return ["105." + code, "106." + code, "107." + code];
      default:   return [];
    }
  }

  function symbol(market) {
    if (market === "hk") return "HK$";
    if (market === "us") return "$";
    return "¥"; // sh/sz/bj
  }

  // 东方财富个股行情页（回退链接）
  function quoteUrl(market, code) {
    if (market === "hk") return "https://quote.eastmoney.com/hk/" + code + ".html";
    if (market === "us") return "https://quote.eastmoney.com/us/" + code + ".html";
    return "https://quote.eastmoney.com/" + market + code + ".html";
  }

  function jsonp(secid, onData, onFail) {
    var name = "__sq_cb_" + (cbSeq++);
    var script = document.createElement("script");
    var timer = setTimeout(function () { cleanup(); onFail(); }, 9000);
    function cleanup() {
      clearTimeout(timer);
      try { delete window[name]; } catch (e) { window[name] = undefined; }
      if (script.parentNode) script.parentNode.removeChild(script);
    }
    window[name] = function (resp) {
      cleanup();
      if (resp && resp.data) onData(resp.data); else onFail();
    };
    script.onerror = function () { cleanup(); onFail(); };
    script.src = PUSH2 + "?secid=" + encodeURIComponent(secid) +
      "&fields=f43,f57,f58,f59,f60,f169,f170&cb=" + name;
    document.head.appendChild(script);
  }

  function render(el, market, data) {
    var dec = (typeof data.f59 === "number") ? data.f59 : 2;
    var price = data.f43 / Math.pow(10, dec);
    var pct = data.f170 / 100;            // 涨跌幅(%)
    if (!isFinite(price) || data.f43 === "-" || data.f43 == null) { fallback(el, market); return; }
    var up = pct > 0, down = pct < 0;
    var arrow = up ? "▲" : (down ? "▼" : "–");
    el.classList.remove("sq-loading");
    el.classList.add("sq-ready");
    el.classList.toggle("sq-up", up);     // 红涨
    el.classList.toggle("sq-down", down); // 绿跌
    el.textContent = symbol(market) + price.toFixed(2) + " " + arrow + Math.abs(pct).toFixed(2) + "%";
    el.title = (data.f58 || "") + "  现价 " + symbol(market) + price.toFixed(2) +
               "  涨跌 " + (pct >= 0 ? "+" : "") + pct.toFixed(2) + "%（数据：东方财富，点击看详情）";
    el.style.cursor = "pointer";
  }

  function fallback(el, market) {
    var code = el.getAttribute("data-stock").split(":")[1] || "";
    var url = el.getAttribute("data-href") || quoteUrl(market, code);
    el.classList.remove("sq-loading");
    el.classList.add("sq-na");
    el.textContent = "行情↗";
    el.setAttribute("data-href", url);
  }

  function load(el) {
    if (el.dataset.sqDone) return;
    el.dataset.sqDone = "1";
    var raw = (el.getAttribute("data-stock") || "").trim();
    var parts = raw.split(":");
    var market = parts[0], code = parts[1];
    if (!market || !code) { el.classList.add("sq-na"); el.textContent = ""; return; }
    el.classList.add("sq-loading");
    if (!el.textContent) el.textContent = "···";

    var cands = secids(market, code), i = 0;
    (function next() {
      if (i >= cands.length) { fallback(el, market); return; }
      jsonp(cands[i++], function (data) { render(el, market, data); }, next);
    })();

    // 点击跳转个股详情页
    el.addEventListener("click", function () {
      var url = el.getAttribute("data-href") || quoteUrl(market, code);
      window.open(url, "_blank", "noopener");
    });
  }

  function init() {
    var nodes = document.querySelectorAll("span.sq[data-stock]");
    for (var i = 0; i < nodes.length; i++) load(nodes[i]);
    // 非美海外股用 <a class="sq-na-link"> 直接给出，无需 JS
  }

  if (window.document$ && typeof window.document$.subscribe === "function") {
    window.document$.subscribe(init);
  }
  document.addEventListener("DOMContentLoaded", init);
})();
