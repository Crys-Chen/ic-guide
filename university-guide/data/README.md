# 数据字典

所有 YAML 均为 UTF-8，顶层均是列表。能力点和视频分成公共与专业两份，校验与生成脚本会将它们视为同一目录。页面必须由 `scripts/render.py` 生成，不要在生成页中反向修改数据。

## 文件与主键

| 文件 | 主键 | 数量 | 用途 |
|---|---|---:|---|
| `common_competencies.yml` | `id` | 32 | 可按需选取的公共推荐能力 |
| `track_competencies.yml` | `id` | 24 | 六路线各 4 个专业能力 |
| `common_videos.yml` | `competency_id + role` | 64 | 公共能力主/备选资源 |
| `track_videos.yml` | `competency_id + role` | 48 | 专业能力主/备选资源 |
| `tracks.yml` | `id` | 6 | 路线、17 方向、项目与出口 |
| `course_mappings.yml` | `competency_id` | 56 | 复旦 2025 课程—能力—路线示例映射 |

## 能力字段

必填：`id`、`name`、`suggested_window`、`domain`、`prerequisites`、`outcomes`、
`estimated_hours`、`deliverable`、`assessment`、`evidence`、`requirement`、`type`。

- `suggested_window` 为 `start/foundation/core/specialization/integration` 之一；它是建议窗口，不是学期或年级限制。
- 所有先修必须存在且无环；先修用于项目反向补缺，不强制把全图按顺序修完。
- 公共能力使用 `type: common` 和 `requirement: recommended`。
- 专业能力使用 `type: specialization`、`requirement: route_recommended` 及所属 `route_id`。
- `deliverable` 是要交付的成果；`assessment` 必须给出可判定的验收阈值；`evidence` 是两者的可读摘要。
- `estimated_hours` 是从零到能交付产物的参考投入，不是学期配额。

## 视频字段

必填：`competency_id`、`role`、`title`、`instructor`、`institution`、
`platform`、`url`、`section`、`language`、`subtitles`、`duration_hours`、`score`、
`score_breakdown`、`reason`、`checked_at`、`source_kind`、`materials`、`exercises`。

- 每个能力点必须恰有一条 `primary` 和一条 `backup`。
- `section` 是建议观看的精确讲次/周次，不是平台整个课程的笼统名称。
- `duration_hours` 是所选章节的建议观看总时长，必须不超过该能力的 `estimated_hours`。
- 视频是解决具体缺口的输入，不要以观看时长代替项目和验收产物。
- `score_breakdown` 必须包含 `fit/authority/depth/practice/access/presentation`，上限依次是 30/20/20/15/10/5，分项之和必须等于 `score`。
- 主资源不得低于 80 分，备选不得低于 70 分；`checked_at` 使用 `YYYY-MM-DD`，超过 180 天会使严格校验失败。

## 路线与课程映射

- 每条路线必须恰有 4 个专业能力，六路线对 17 个方向不重不漏。
- `project_included: true` 表示路线项目已分解进四个能力的学时，此时 `project_hours` 必须为 0，避免重复计时。
- 路线中的四个点是完整方向样例；学习者可只选项目所需的点，也可跨路线组合。
- 课程映射对每个能力恰有一条记录；`coverage` 为 `full/partial/gap`。`gap` 不得虚构课程，专业能力必须映射到所属路线。

## 质量门槛

```bash
python scripts/validate.py --strict
python scripts/render.py --check
mkdocs build --strict
python scripts/check_site.py
python scripts/check_links.py --strict --report reports/link-check.json
```

链接脚本中 `ok` 表示 HTTP 可达；`browser_review` 表示平台拦截、限流或重定向需人工复核，严格模式同样不会放行；`failed` 表示确认失败。
