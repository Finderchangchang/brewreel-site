# 维护说明

brewreel.com 是纯静态站：GitHub Pages 从 `main` 分支根目录直出，没有框架，发布时无需构建；维护时需生成英文页和发现文件（见下文）。合并到 `main` 就是上线。

## 文件一览

| 文件 | 作用 |
|---|---|
| `index.html` | 页面结构。默认内容是中文，每段文案用 `data-i18n` 键对应字典 |
| `i18n.js` | **全站文案的单一来源**：`zh`、`en` 两个字典 |
| `main.js` | 行为：中英切换、主题、导航、复制、标签页、首屏预览、演示弹窗、进场动效、Star 数和版本号 |
| `style.css` | 样式。设计令牌在文件开头，浅色 / 深色两套 |
| `tools/check-i18n.mjs` | 中英文案检查；`--fix` 把中文从字典写进 `index.html` |
| `assets/` | 图片和视频（见下文「素材」） |
| `CNAME`、`.nojekyll` | 域名 brewreel.com 和关闭 Jekyll，**不要删** |
| `DESIGN.md` | 设计说明：信息架构、视觉语言、为什么这么做 |

## 改文案

1. 只改 `i18n.js`，中英两个字典一起改。
2. 跑 `node tools/check-i18n.mjs --fix`：把中文写进 `index.html`（没有 JS 的访客、搜索引擎、社交平台抓取看到的就是这份中文）。
3. 再跑一遍 `node tools/check-i18n.mjs`，看到「✓ 中英文案一致，没有缺键和孤儿键」再提交。
4. 跑 `node tools/build-discovery.mjs`，同步静态英文页、JSON-LD、sitemap、robots 和文本资料，再跑 `node tools/build-discovery.mjs --check` 检查没有过期产物。
5. 本地看一眼（见「本地预览」），中文、`?lang=en` 各看一遍。

检查脚本会拦下：HTML 里用了但字典里没有的键、中英字典键不一致、HTML 里的中文和字典不一致、字典里没人用的孤儿键、重复键、空值、`data-i18n` 嵌套。英文里混进汉字会给提醒（「精酿」「交付」「切换到中文」这三个是故意的）。

**写法约定**

- `data-i18n="键"`：替换元素的 innerHTML，值可以带 `<code>`、`<strong>`、`<a>` 等标签。字典里 HTML 属性一律用**单引号**（`<a href='#limits'>`）。
- `data-i18n-attr="属性:键;属性:键"`：替换属性，值是纯文本（`alt`、`aria-label`、`title`、`content`）。
- 带 `data-i18n` 的元素里面不能再套带 `data-i18n` 或 `data-i18n-attr` 的元素（换语言时会被整段覆盖）。图标、按钮这类不随语言变的东西放在旁边的兄弟节点里。
- `main.js` 里要用文案时写 `t("键")`，检查脚本会扫描这些调用；三元写法 `t(ok ? "a" : "b")` 也认。
- 新加一段文案：先在两个字典里加键，再在 HTML 里写空元素 `<p data-i18n="新键"></p>`，跑 `--fix` 填中文。

**文案口径（和仓库 README、任务书一致）**

- 署名只写 Finderchangchang。
- 说到成片时写「实际渲染效果」，不把成片归功于某个模型；插件有没有接真实模型实测，以 README 的说法为准。
- 没上线的功能只能写「即将上线」。
- 不写效果数字（省多少时间、提升多少）；不写广告法极限词；不写隐私承诺类话术。
- 旧名只在页脚「原名 promo-video-skill …」那一句里出现一次，别处不要再写。

每次改完跑一遍禁词检查。禁词清单（广告法极限词、不能公开的名字等，以内部任务书为准）**不放进仓库**：存成仓库外的一个文本文件，每行一个词，然后：

```bash
grep -rnFf <仓库外的禁词清单.txt> --include=*.html --include=*.js --include=*.mjs --include=*.css --include=*.md .
# 应当没有输出；CSS 里宽高的百分比写法不算
grep -n 'src="/\|href="/' index.html   # 本地资源必须是相对路径，应当没有输出
```

## 功能状态（以 GitHub 上已提交的 README 为准）

页面上每个功能的「可用 / 已发布 / 开发中」照仓库 README 写，读 **已提交** 的版本，不要读工作区里别人没提交的改动：

```bash
git -C <brewreel 仓库> show HEAD:README.md
git -C <brewreel 仓库> show HEAD:README.en.md
```

当前状态（v0.5.1）和它们在页面上的位置：

| 功能 | README 里的状态 | 页面位置 / 键 |
|---|---|---|
| 装成 skill、无头脚本 | ✅ 可用 | 「上手」标签页，`st.ready`、`u1.*`、`u2.*` |
| DeepSeek Harness 插件 `dsh-brewreel` | ⚠️ 已发布到 npm，还没接真实 DeepSeek 模型实测 | 「上手」第三个标签：`st.npm`、`u3.flag`、`u3.body`、`u3.note`，安装命令在 `index.html` 的 `#use-dsh` 里 |
| 配音（MiniMax / 阿里云 / 火山引擎） | 已发布；阿里云、火山引擎还没用真实 key 实测 | 「怎么酿」功能格 `how.fv*`；「上手」右栏 `voice.*`；常见问题 `faq.a2`；诚实区 `lim.v1`、`lim.v2` |
| `blueprint` 配方 | 开发中 | **不上页面**，正式可用后按下面「加一个配方」加 |

状态变化时：

- **新功能正式可用**：写进功能介绍（「怎么酿」功能格或对应章节）和常见问题；README「已知限制」里和它相关的条目同步进诚实区（`lim.*`，HTML 里 `.lim-list` 加 `<li>`）。
- **还没发布但要预告**：只能写「即将上线」。上一版页面有过「即将上线」卡片，现在两项都已上线，卡片已删掉；需要时参考「上手」右栏卡片的写法加回去。
- **限制解除**（比如阿里云配音用真实 key 测过了）：从诚实区删掉对应的 `lim.*` 键和 `<li>`，同时改功能介绍里「还没实测」的说法。
- 改完跑 `node tools/check-i18n.mjs`。

## 加一个配方

1. **首屏预览**：从新的 demo 或该配方的样片切一段静音循环（见「素材」的命令），放 `assets/reel-<id>.mp4` 和海报 `assets/reel-<id>.webp`。在 `index.html` 的 `.flight` 里照现有三支加一个 `<li class="tap">`：`data-recipe="<id>"`、`data-demo-at="<在完整演示里的起点秒数>"`。三支以上时把 `.flight` 的 `grid-template-columns` 改成对应列数。
2. **配方单**：照 `#recipe-cards` 复制一张 `<article class="label">`，在 `style.css` 里给 `.label-<id>` 定一个 `--skin` 色（取这支配方自己的主色）。条图放 `assets/style-<id>.webp`（宽 760，按实际显示尺寸压）。
3. **怎么选**：在 `.pick-list` 里加一行。
4. **文案**：在 `i18n.js` 加 `r.<id>.name`、`r.<id>.look`、`r.<id>.fit`、`r.<id>.alt`、`a.tapN`，改 `rec.title`（「三种配方」）等提到数量的地方；`--fix` 后检查。
5. 标题、描述、OG 文案里的「三种配方」一起改；OG 图也要重做（见下）。

## 素材

ffmpeg 可以用 Remotion 自带的（`template/node_modules/@remotion/compositor-*/ffmpeg`），这个版本没有 `fps` / `select` 滤镜，用 `-ss`、`-t`、`scale` 就够了。

**首屏循环预览**（静音、432×768、每段不超过 800KB）：

```bash
ffmpeg -ss <起点秒> -i demo.mp4 -t <时长秒> -an -vf "scale=432:768:flags=lanczos" \
  -c:v libx264 -preset slower -crf 26 -pix_fmt yuv420p -profile:v high -movflags +faststart reel-<id>.mp4
ffmpeg -i reel-<id>.mp4 -frames:v 1 poster.png   # 取首帧当海报，再转 webp（质量 78）
```

画面运动多的段落（journey）用 `-crf 30` 才压得进 800KB。海报用首帧，开始播放时不会跳。

当前切点（`assets/demo.mp4`，v0.4.0 的 50 秒演示）：cards 2.4s 起 9.4s，quiz 11.9s 起 15.3s，journey 27.4s 起 20.4s。这三个起点也写在 `index.html` 的 `data-demo-at` 和链接 `#t=` 里。

**换完整演示视频**：替换 `assets/demo.mp4`（和海报 `assets/poster.webp`），重新找三个切点，重切三段预览，更新 `data-demo-at` 和 `href="assets/demo.mp4#t=…"`。

**图片**：一律 webp，按实际显示尺寸压（配方条图宽 760，行业图 720×628，质量 76 左右）。行业图是「左封面、右片中一帧」两帧横拼，悬停时靠 `object-position` 从左滑到右，换图时保持这个版式和比例。

**OG 图**（`assets/og.jpg`，1200×630）：深色底 + 琥珀逆光，左边 logo、口号、英文口号、`brewreel.com`，右边三支成片截图站在托板上。用 Python + Pillow 画（字体用微软雅黑粗体和 Georgia 斜体），换口号或配方数量时重画。

## 升版本号 / 发布新版本

- 首屏标签里的版本号 `<span data-brew-version>` 会实时拉 GitHub 上 latest 标记的 Release（`/releases/latest`）；页面里的 `v0.5.1` 只是拉不到时的兜底。发了新版本，顺手把这个兜底值改掉。
- Star 数同理：`<b data-brew-stars>`（导航、首屏、收尾三处）实时拉，兜底值是写页面时的真实数字，隔段时间更新一次。
- 两个请求结果在访客浏览器里缓存 30 分钟（`localStorage` 的 `brewreel-gh`）。

**缓存版本号**：改了 `style.css`、`main.js`、`i18n.js` 任意一个，把 `index.html` 里三处 `?v=20260927c` 一起改成新的（日期 + 字母），否则回访用户会拿到旧文件。

## Umami 事件

脚本在 `</head>` 前，站点 ID `c80c17ab-9413-4d0b-a359-171bc2a23bc9`。按钮 / 外链用 `data-umami-event` 属性上报，其余在 `main.js` 里用 `umami.track` 上报。

| 事件 | 触发 | 附带属性 |
|---|---|---|
| `click-github` | 点 GitHub 仓库、Star、Issues 链接 | `pos`：nav / hero / start / start-issue / limits / craft / issues / closing / footer |
| `copy-install` | 点任一复制命令按钮 | `block`：quickstart / skill / claude-deepseek / script / dsh / closing |
| `click-dsh` | 点「在 DeepSeek Harness 里用」、插件说明 | `pos`：hero / start / footer |
| `toggle-lang` | 点 中 / EN | — |
| `play-demo` | 用户在弹窗里播放有声完整演示（自动循环的预览不算） | `from`：full / cards / quiz / journey |
| `view-recipe` | 点首屏某一支预览（打开完整演示并跳到这一段） | `recipe` |
| `pick-usage` | 切换「三种用法」标签 | `tab`：skill / script / dsh |
| `click-sister` | 点页脚姊妹项目链接 | `project` |

注意：Umami 对**站内**链接（不是 `target="_blank"`）会先拦下点击、上报完再跳转。所以会被脚本接管的链接（首屏预览、看完整演示）不要加 `data-umami-event`，改在 `main.js` 里上报。

## 本地预览

```bash
python -m http.server 8813 --bind 127.0.0.1
# 打开 http://127.0.0.1:8813/ 和 http://127.0.0.1:8813/?lang=en
```

`python -m http.server` 不支持 HTTP Range，视频不能跳转，所以「点预览从这一段开始」在本地会从头播；GitHub Pages 支持 Range，线上正常。要在本地验证跳转，换一个支持 Range 的静态服务器。

上线前至少看：1440 宽和 375 宽、浅色和深色、中文和英文；375 宽下 `document.documentElement.scrollWidth` 应当等于 375；控制台没有报错。


## 搜索与 AI 搜索维护（2026-09-30）

- 中文页面 `/`，英文页面 `/en.html`：都包含完整静态正文、各自 canonical、互相对应的 hreflang、OG 和与可见正文一致的 JSON-LD。英文页由字典生成，不手改。
- 保留旧 `?lang=zh/en` 分享链接。启用 JS 时导航到对应静态页面；无 JS 的英文入口使用 `/en.html`。页脚语言链接在无 JS 时也可用。
- 常见问题有稳定的 `#faq-q1` 等锚点，可直接分享某一问题。
- `facts.*` 是产品定位、使用范围、费用和来源的文案来源；`llms.txt` 从同一份文案生成。它是方便读取的文本索引，不是搜索收录或 AI 推荐的保证。
- `robots.txt` 允许公开页面抓取，明确列出 OAI-SearchBot / PerplexityBot。两站此前没有 robots.txt，本次保留默认可抓取状态；搜索爬虫和模型训练爬虫用途不同。
- `sitemap.xml` 只列本站规范页面，不填猜测的修改日期；保留自引用及双向 hreflang。镜像使用官方域名 canonical，不生成镜像域名版本。
- 不写虚构评分、评价、用户数或背书；不添加仅供机器看到的功能承诺。Jev 三端版本各自维护，不能用 Android 版本号代表三端，也不能把 Android 的许可/权限说明概括成所有平台相同。

维护命令：

```bash
node tools/check-i18n.mjs --fix
node tools/build-discovery.mjs
node tools/build-discovery.mjs --check
node --check main.js
git diff --check
```

上线前检查两种语言、375 / 1440 宽度、浅深色、禁用 JS、语言切换和隐私链接。确认 sitemap 内页面返回 200，robots 不屏蔽正文，线上文件与提交一致。

效果验证：在已有的 Search Console / Bing Webmaster Tools 中提交 sitemap，查看实际抓取/索引与 AI 搜索表现；Umami 的 AI 来源访问与 GitHub 入口点击只说明访问和点击，不能当作被 AI 推荐的次数或下载数。不要为了提交 sitemap 采用已废弃的匿名 ping 接口。账号验证与后续表现以平台真实记录为准。

依据：[Google AI 搜索指南](https://developers.google.com/search/docs/fundamentals/ai-optimization-guide)、[OpenAI 爬虫说明](https://developers.openai.com/api/docs/bots)、[Perplexity 爬虫说明](https://docs.perplexity.ai/docs/resources/perplexity-crawlers)。
