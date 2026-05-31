/* stock-quote.js —— 给方向页「代表性机构 > 企业」里的 <span class="sq" data-stock="市场:代码">
 * 注入实时股价数字（红涨绿跌）。数据源：腾讯财经 qt.gtimg.cn（返回 CORS: *，浏览器端直接 fetch）。
 * 覆盖 A股(sh/sz/bj)、港股(hk)、美股(us，自动含 NASDAQ/NYSE)。一次批量取本页所有股票。
 * 取不到（个别非美海外股，或接口异常）时回退成「行情↗」小链接。
 * 与站内其它脚本一致：document$.subscribe + DOMContentLoaded 双绑定以适配 Material 的 SPA 路由。
 */
(function () {
  "use strict";

  var API = "https://qt.gtimg.cn/q=";
  var CHUNK = 50;

  function tcCode(market, code) {
    // 腾讯代码：sh/sz/bj/hk + 代码；美股 us + 大写 ticker（不分交易所）
    if (market === "us") return "us" + code.toUpperCase();
    return market + code; // sh688256 / sz300782 / hk00700 / bj...
  }
  function symbol(market) {
    if (market === "hk") return "HK$";
    if (market === "us") return "$";
    return "¥";
  }
  function quoteUrl(market, code) {
    if (market === "hk") return "https://quote.eastmoney.com/hk/" + code + ".html";
    if (market === "us") return "https://quote.eastmoney.com/us/" + code.toUpperCase() + ".html";
    return "https://quote.eastmoney.com/" + market + code + ".html";
  }

  // 解析腾讯返回的一条 v_xxx="a~b~c~..." → {price, pct}
  function parseBody(body) {
    var p = body.split("~");
    if (p.length < 5) return null;
    var price = parseFloat(p[3]);
    if (!isFinite(price)) return null;
    var dt = -1;
    for (var i = 0; i < p.length; i++) {
      if (/^\d{4}[-/]\d{2}[-/]\d{2}/.test(p[i]) || /^\d{14}$/.test(p[i])) dt = i;
    }
    var pct = (dt >= 0 && dt + 2 < p.length) ? parseFloat(p[dt + 2]) : NaN;
    return { price: price, pct: isFinite(pct) ? pct : 0 };
  }

  function renderSpan(el, market, q) {
    var up = q.pct > 0, down = q.pct < 0;
    el.classList.remove("sq-loading");
    el.classList.add("sq-ready");
    el.classList.toggle("sq-up", up);
    el.classList.toggle("sq-down", down);
    el.textContent = symbol(market) + q.price.toFixed(2) + " " +
      (up ? "▲" : (down ? "▼" : "–")) + Math.abs(q.pct).toFixed(2) + "%";
    el.title = "现价 " + symbol(market) + q.price.toFixed(2) +
      "  涨跌 " + (q.pct >= 0 ? "+" : "") + q.pct.toFixed(2) + "%（数据：腾讯财经，点击看详情）";
    el.style.cursor = "pointer";
  }

  function fallbackSpan(el) {
    var info = el._sq || {};
    var url = info.url || "#";
    el.classList.remove("sq-loading");
    el.classList.add("sq-na");
    el.textContent = "行情↗";
    el.setAttribute("data-href", url);
  }

  function fetchChunk(codes, byCode) {
    return fetch(API + codes.join(","), { credentials: "omit", referrerPolicy: "no-referrer" })
      .then(function (r) { return r.arrayBuffer(); })
      .then(function (buf) {
        var text;
        try { text = new TextDecoder("gbk").decode(buf); }
        catch (e) { text = new TextDecoder().decode(buf); }
        var re = /v_([A-Za-z0-9.]+)="([^"]*)"/g, m;
        while ((m = re.exec(text))) {
          var key = m[1].toLowerCase();
          var arr = byCode[key];
          if (!arr) continue;
          var q = parseBody(m[2]);
          for (var i = 0; i < arr.length; i++) {
            if (q) renderSpan(arr[i].el, arr[i].market, q);
            else fallbackSpan(arr[i].el);
            arr[i].done = true;
          }
        }
      });
  }

  function init() {
    var nodes = document.querySelectorAll("span.sq[data-stock]");
    if (!nodes.length) return;
    var byCode = {};   // 腾讯代码(小写) -> [{el, market, code, done}]
    var items = [];
    for (var i = 0; i < nodes.length; i++) {
      var el = nodes[i];
      if (el.dataset.sqDone) continue;
      el.dataset.sqDone = "1";
      var parts = (el.getAttribute("data-stock") || "").trim().split(":");
      var market = parts[0], code = parts[1];
      if (!market || !code) { el.textContent = ""; continue; }
      var tc = tcCode(market, code);
      el._sq = { market: market, code: code, url: quoteUrl(market, code) };
      el.classList.add("sq-loading");
      if (!el.textContent) el.textContent = "···";
      el.addEventListener("click", function () {
        window.open(this._sq.url, "_blank", "noopener");
      });
      var rec = { el: el, market: market, code: code, done: false };
      (byCode[tc.toLowerCase()] = byCode[tc.toLowerCase()] || []).push(rec);
      items.push({ tc: tc, rec: rec });
    }
    if (!items.length) return;

    // 批量、分块请求
    var codes = Object.keys(byCode).map(function (k) {
      // 还原成腾讯查询用大小写：us 段需大写 ticker
      var any = byCode[k][0];
      return tcCode(any.market, any.code);
    });
    var chain = Promise.resolve();
    for (var s = 0; s < codes.length; s += CHUNK) {
      (function (slice) {
        chain = chain.then(function () { return fetchChunk(slice, byCode); })
          .catch(function () {/* 单块失败不影响其它块 */});
      })(codes.slice(s, s + CHUNK));
    }
    // 所有请求结束后，未被填充的（接口没数据/异常）一律回退成链接
    chain.then(function () {
      for (var k in byCode) {
        var arr = byCode[k];
        for (var j = 0; j < arr.length; j++) if (!arr[j].done) fallbackSpan(arr[j].el);
      }
    });
  }

  if (window.document$ && typeof window.document$.subscribe === "function") {
    window.document$.subscribe(init);
  }
  document.addEventListener("DOMContentLoaded", init);
})();
