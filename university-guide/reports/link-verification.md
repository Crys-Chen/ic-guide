# 外部视频链接核验记录

核验日期：2026-08-10。

## 结果

- 112 条视频记录全部有公开机构/教师来源和可直接访问的课程或视频入口。
- 自动 HTTP 批量检查中，110 条返回可接受状态并记为 `ok`。
- 另 2 条旧深层链接出现平台重定向循环，已替换为当前官方稳定入口并人工打开核对：
  - MIT OCW 6.004 10.2 Topic Videos：改为 `pages/c10/c10s2/`。
  - WIPO Academy DL-001：改为官方 IP eLearning 课程目录；目录列明课程范围与 3 小时学时。
- 当前 `link-check.json` 因而包含 110 条 `ok` 和 2 条 `manual_review_ok`；原始重定向失败证据保存在 `link-check-before-final-url-fixes.json`。

## 验收边界

最终替换后，本执行环境未允许再次启动外网批量检查进程，因此没有把两项人工核验伪装成 HTTP 200。发布者应在自己的联网环境再运行一次严格检查；脚本会覆盖当前报告：

```bash
python scripts/check_links.py --strict --report reports/link-check.json
```

平台的 401/403/429、限流或重定向循环会标为 `browser_review`，严格模式同样不放行；真实 4xx/5xx 或网络失败标为 `failed`。
