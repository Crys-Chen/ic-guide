/* stock-quote.js —— 给方向页「代表性机构 > 企业」里的 <span class="sq" data-stock="市场:代码">
 * 注入股价数字（红涨绿跌），点击跳转个股详情页。
 *
 * 两条取数路径：
 *  1) A股(sh/sz/bj)、港股(hk)、美股(us) —— 腾讯财经 qt.gtimg.cn（CORS:*，浏览器端实时批量取数）。
 *  2) 非美海外股(yf:，韩/台/日/澳/欧) —— 腾讯/东方财富不覆盖、Yahoo 无 CORS，
 *     故由 CI 定时在服务端用 Yahoo 拉好写成同源的 quotes.json，这里读它填入（准实时，约 1 小时刷新）。
 * 取不到时回退成「行情↗」小链接。
 * 与站内其它脚本一致：document$.subscribe + DOMContentLoaded 双绑定以适配 Material 的 SPA 路由。
 */
(function () {
  "use strict";

  var API = "https://qt.gtimg.cn/q=";
  var CHUNK = 50;
  var foreignCache = null; // quotes.json 的 Promise（每次加载只拉一次）

  function tcCode(market, code) {
    if (market === "us") return "us" + code.toUpperCase();
    return market + code;
  }
  function symbol(market) {
    if (market === "hk") return "HK$";
    if (market === "us") return "$";
    return "¥";
  }
  function curSymbol(cur) {
    return { KRW: "₩", JPY: "¥", TWD: "NT$", AUD: "A$", EUR: "€",
             GBP: "£", USD: "$", HKD: "HK$", CNY: "¥" }[cur] || "";
  }
  function quoteUrl(market, code) {
    if (market === "yf") return "https://finance.yahoo.com/quote/" + code;
    if (market === "hk") return "https://quote.eastmoney.com/hk/" + code + ".html";
    if (market === "us") return "https://quote.eastmoney.com/us/" + code.toUpperCase() + ".html";
    return "https://quote.eastmoney.com/" + market + code + ".html";
  }

  function colorize(el, pct) {
    var up = pct > 0, down = pct < 0;
    el.classList.remove("sq-loading");
    el.classList.add("sq-ready");
    el.classList.toggle("sq-up", up);
    el.classList.toggle("sq-down", down);
    return up ? "▲" : (down ? "▼" : "–");
  }
  function fmt(price, dec) {
    return price.toLocaleString("en-US", { minimumFractionDigits: dec, maximumFractionDigits: dec });
  }

  function renderSpan(el, market, q) {
    var arrow = colorize(el, q.pct);
    el.textContent = symbol(market) + fmt(q.price, 2) + " " + arrow + Math.abs(q.pct).toFixed(2) + "%";
    el.title = "现价 " + symbol(market) + fmt(q.price, 2) +
      "  涨跌 " + (q.pct >= 0 ? "+" : "") + q.pct.toFixed(2) + "%（数据：腾讯财经，点击看详情）";
    el.style.cursor = "pointer";
  }
  function renderForeign(el, q) {
    var pct = (typeof q.pct === "number") ? q.pct : 0;
    var arrow = colorize(el, pct);
    var dec = (q.cur === "KRW" || q.cur === "JPY" || q.cur === "TWD") ? 0 : 2;
    el.textContent = curSymbol(q.cur) + fmt(q.price, dec) + " " + arrow + Math.abs(pct).toFixed(2) + "%";
    el.title = "现价 " + curSymbol(q.cur) + fmt(q.price, dec) +
      "  涨跌 " + (pct >= 0 ? "+" : "") + pct.toFixed(2) + "%（数据：Yahoo，约 1 小时刷新，点击看详情）";
    el.style.cursor = "pointer";
  }

  function fallbackSpan(el) {
    el.classList.remove("sq-loading");
    el.classList.add("sq-na");
    el.textContent = "行情↗";
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
          var arr = byCode[m[1].toLowerCase()];
          if (!arr) continue;
          var q = parseBody(m[2]);
          for (var i = 0; i < arr.length; i++) {
            if (q) renderSpan(arr[i].el, arr[i].market, q); else fallbackSpan(arr[i].el);
            arr[i].done = true;
          }
        }
      });
  }
  function parseBody(body) {
    var p = body.split("~");
    if (p.length < 5) return null;
    var price = parseFloat(p[3]);
    if (!isFinite(price)) return null;
    var dt = -1;
    for (var i = 0; i < p.length; i++)
      if (/^\d{4}[-/]\d{2}[-/]\d{2}/.test(p[i]) || /^\d{14}$/.test(p[i])) dt = i;
    var pct = (dt >= 0 && dt + 2 < p.length) ? parseFloat(p[dt + 2]) : NaN;
    return { price: price, pct: isFinite(pct) ? pct : 0 };
  }

  // quotes.json 的同源地址：从本脚本自己的 src 推出站点根
  function quotesUrl() {
    var s = document.querySelector('script[src*="stock-quote.js"]');
    var base = s ? s.src.replace(/javascripts\/stock-quote\.js.*$/, "") : "/";
    return base + "quotes.json";
  }
  function loadForeign(spans) {
    if (!spans.length) return;
    if (!foreignCache) {
      foreignCache = fetch(quotesUrl(), { credentials: "omit" })
        .then(function (r) { return r.ok ? r.json() : null; })
        .catch(function () { return null; });
    }
    foreignCache.then(function (data) {
      var q = data && data.quotes ? data.quotes : {};
      for (var i = 0; i < spans.length; i++) {
        var el = spans[i].el, code = spans[i].code;
        if (q[code] && typeof q[code].price === "number") renderForeign(el, q[code]);
        else fallbackSpan(el);
      }
    });
  }

  function init() {
    var nodes = document.querySelectorAll("span.sq[data-stock]");
    if (!nodes.length) return;
    var byCode = {}, codes = [], foreign = [];
    for (var i = 0; i < nodes.length; i++) {
      var el = nodes[i];
      if (el.dataset.sqDone) continue;
      el.dataset.sqDone = "1";
      var parts = (el.getAttribute("data-stock") || "").trim().split(":");
      var market = parts[0], code = parts.slice(1).join(":");
      if (!market || !code) { el.textContent = ""; continue; }
      el._sq = { url: quoteUrl(market, code) };
      el.classList.add("sq-loading");
      if (!el.textContent) el.textContent = "···";
      el.addEventListener("click", function () { window.open(this._sq.url, "_blank", "noopener"); });

      if (market === "yf") {
        foreign.push({ el: el, code: code });
      } else {
        var tc = tcCode(market, code), key = tc.toLowerCase();
        var rec = { el: el, market: market, done: false };
        if (!byCode[key]) { byCode[key] = []; codes.push(tc); }
        byCode[key].push(rec);
      }
    }

    // 1) A/港/美：腾讯批量
    var chain = Promise.resolve();
    for (var s = 0; s < codes.length; s += CHUNK) {
      (function (slice) {
        chain = chain.then(function () { return fetchChunk(slice, byCode); }).catch(function () {});
      })(codes.slice(s, s + CHUNK));
    }
    chain.then(function () {
      for (var k in byCode) { var a = byCode[k]; for (var j = 0; j < a.length; j++) if (!a[j].done) fallbackSpan(a[j].el); }
    });

    // 2) 非美海外股：读同源 quotes.json
    loadForeign(foreign);
  }

  if (window.document$ && typeof window.document$.subscribe === "function") {
    window.document$.subscribe(init);
  }
  document.addEventListener("DOMContentLoaded", init);
})();
