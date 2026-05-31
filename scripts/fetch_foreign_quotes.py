#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""抓取「非美海外股」实时行情，写成 quotes.json 供前端同源读取。

腾讯/东方财富的浏览器行情口只覆盖 A股/港股/美股，不含韩/台/日/澳/欧个股；
Yahoo 覆盖全，但无 CORS、且按 IP 限流，浏览器端调不了。所以放在 CI（服务端、
低频）里用 Yahoo 拉这几只，落地成静态 JSON，前端 stock-quote.js 读它来填
`<span class="sq" data-stock="yf:代码">`。

用法：python3 scripts/fetch_foreign_quotes.py [输出路径=site/quotes.json]
代码清单从 docs/科研方向/*.md 里的 data-stock="yf:XXX" 自动扫描，无需手维护。
"""
import sys, os, re, json, time, glob, urllib.request, datetime

ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
OUT = sys.argv[1] if len(sys.argv) > 1 else os.path.join(ROOT, "site", "quotes.json")
UA = ("Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 "
      "(KHTML, like Gecko) Chrome/124.0 Safari/537.36")
HOSTS = ["https://query1.finance.yahoo.com", "https://query2.finance.yahoo.com"]


def scan_symbols():
    syms = set()
    for f in glob.glob(os.path.join(ROOT, "docs", "科研方向", "*.md")):
        with open(f, encoding="utf-8") as fh:
            for m in re.finditer(r'data-stock="yf:([A-Za-z0-9.\-]+)"', fh.read()):
                syms.add(m.group(1))
    return sorted(syms)


def fetch_one(sym):
    for host in HOSTS:
        url = "%s/v8/finance/chart/%s?interval=1d&range=2d" % (host, sym)
        for attempt in range(3):
            try:
                req = urllib.request.Request(url, headers={"User-Agent": UA})
                data = json.loads(urllib.request.urlopen(req, timeout=20).read())
                meta = (((data.get("chart") or {}).get("result") or [{}])[0] or {}).get("meta") or {}
                price = meta.get("regularMarketPrice")
                prev = meta.get("chartPreviousClose") or meta.get("previousClose")
                if price is None:
                    return None
                pct = None
                if prev:
                    pct = round((price - prev) / prev * 100, 2)
                return {"price": price, "pct": pct, "cur": meta.get("currency") or ""}
            except Exception as e:
                time.sleep(2 + attempt * 2)
    return None


def main():
    syms = scan_symbols()
    quotes = {}
    for s in syms:
        q = fetch_one(s)
        if q:
            quotes[s] = q
            print("OK   %-12s %s %s (%s%%)" % (s, q["cur"], q["price"], q["pct"]))
        else:
            print("MISS %s" % s)
        time.sleep(1.5)  # 低频，避免 Yahoo 限流
    out = {
        "updated": datetime.datetime.now(datetime.timezone.utc).strftime("%Y-%m-%dT%H:%M:%SZ"),
        "quotes": quotes,
    }
    os.makedirs(os.path.dirname(OUT), exist_ok=True)
    with open(OUT, "w", encoding="utf-8") as f:
        json.dump(out, f, ensure_ascii=False, separators=(",", ":"))
    print("\n写入 %s ：%d/%d 只" % (OUT, len(quotes), len(syms)))


if __name__ == "__main__":
    main()
