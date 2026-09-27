/* 精酿 · BrewReel 官网脚本：中英切换 / 主题 / 导航 / 复制 / 演示视频 / 进场动效 / Star 数 */

/* ---------- 文案字典：data-i18n 的 key → HTML；data-i18n-attr 的 key → 纯文本 ---------- */
var BREW_I18N = {
  "zh": {
    "meta.title": "精酿 · BrewReel — 便宜模型，也能酿出好片",
    "meta.desc": "精酿 · BrewReel 是一个开源的竖版宣传片工具：写一份产品简报，AI 挑镜头、写文案，一条命令出一支竖版宣传片。三种配方、六个行业包，内置《广告法》极限词和行业合规校验，Apache-2.0 开源。",
    "skip": "跳到主要内容",
    "a.brand": "精酿 · BrewReel 首页",
    "brand.name": "精酿<span class=\"brand-alt\"> · BrewReel</span>",
    "a.nav": "主导航",
    "nav.recipes": "配方",
    "nav.industries": "行业",
    "nav.usage": "怎么用",
    "nav.faq": "常见问题",
    "a.lang": "Switch to English",
    "a.theme": "切换深浅色主题",
    "a.star": "GitHub 仓库，好用的话点个 Star",
    "a.menuOpen": "打开菜单",
    "a.menuClose": "关闭菜单",
    "hero.eyebrow": "开源 · Apache-2.0 · v0.4.0 预览版",
    "hero.title": "便宜模型，<br>也能酿出好片",
    "hero.sub": "写一份产品简报，AI 挑镜头、写文案，一条命令出一支竖版宣传片。",
    "hero.github": "GitHub 仓库",
    "hero.demo": "看演示",
    "hero.dsh": "在 DeepSeek Harness 里用",
    "hero.note": "<strong>还是预览版：</strong>成片先当初稿，看完整片、改完再发。",
    "a.video": "演示视频：三种配方的实际渲染效果",
    "hero.cap": "三种配方的实际渲染效果，产品和数据都是虚构的",
    "what.kicker": "它是什么",
    "what.statement": "配方由强模型先调好，<em>便宜模型照着填</em>，就能出同一水准的片。",
    "what.note": "把简报交给 AI 编程助手、无头脚本或 DeepSeek Harness 插件，模型只写一份分镜，版式、动效、节奏都在现成组件里，一条命令出一支带配乐和音效的竖版宣传片。",
    "gloss.t1": "配方",
    "gloss.d1": "= 风格包：设计令牌、镜头组件、校验规则和叙事模板",
    "gloss.t2": "调配方",
    "gloss.d2": "= 从参考视频提炼风格",
    "gloss.t3": "开酿",
    "gloss.d3": "= 出片",
    "rec.title": "三种配方",
    "rec.lead": "分镜里写 <code>meta.style</code> 选配方，不写就是默认的 <code>cards</code>。下面都是实际渲染的画面，产品和数据都是虚构的。",
    "rec.tag1": "配方 01",
    "rec.tag2": "配方 02",
    "rec.tag3": "配方 03",
    "rec.name1": "cards 卡片信息流",
    "rec.name2": "quiz 答题互动",
    "rec.name3": "journey 角色漫游",
    "rec.default": "默认",
    "rec.ratio3": "4:5（默认）/ 9:16",
    "rec.look1": "渐变底 + 居中白卡片 + 描边大字幕，一镜讲一件事。",
    "rec.look2": "红笔圈出一个常见误解 → 出一道选择题 → 揭晓 → 词条卡讲清楚。",
    "rec.look3": "原创吉祥物一镜到底横穿剪纸城市，每站一张明信片讲一个类别。",
    "rec.fit1": "<b>适合</b>单一卖点、使用流程、界面演示、实物和门店、价目表",
    "rec.fit2": "<b>适合</b>有一个常见误解、能出一道只有一个正确答案的选择题（「X 到底是什么意思？」）",
    "rec.fit3": "<b>适合</b>有 4–6 个清楚的类别、功能或站点，想按一条路线挨站逛一遍",
    "a.rec1": "cards 卡片信息流：三个实际渲染画面",
    "a.rec2": "quiz 答题互动：三个实际渲染画面",
    "a.rec3": "journey 角色漫游：三个实际渲染画面",
    "rec.pick": "<b>怎么选：</b>能出一道选择题 → <code>quiz</code>；有 4–6 个类别想挨站逛 → <code>journey</code>；其余情况 → <code>cards</code>，也就是不写。",
    "ind.title": "六个行业",
    "ind.lead": "每个行业包带合规规则、推荐的镜头结构、给商家的简报模板和一份回归测试简报。每张图左边是第 0 帧封面，右边是片中一帧。",
    "ind.1": "软件 · 记账工具",
    "ind.2": "餐饮 · 单品上新",
    "ind.3": "电商 · 实物商品",
    "ind.4": "教培 · 成人职业课程",
    "ind.5": "美业 · 无实拍照片",
    "ind.6": "文旅 · 住宿",
    "a.ind1": "软件：记账工具，封面与片中一帧",
    "a.ind2": "餐饮：单品上新，封面与片中一帧",
    "a.ind3": "电商：实物商品，封面与片中一帧",
    "a.ind4": "教培：成人职业课程，封面与片中一帧",
    "a.ind5": "美业：无实拍照片，封面与片中一帧",
    "a.ind6": "文旅：住宿，封面与片中一帧",
    "ind.nope": "不做的品类",
    "ind.n1": "医疗美容",
    "ind.n2": "处方药 / 药品",
    "ind.n3": "K12 学科培训",
    "ind.n4": "保健品功效宣称",
    "ind.n5": "烟草",
    "ind.nopeNote": "校验规则没覆盖，硬要做也不保证合规。",
    "why.title": "为什么用它",
    "why.lead": "便宜模型负责填空；版式、合规和出片质检交给配方和脚本。",
    "why.t1": "便宜模型只做它做得好的事",
    "why.d1": "模型只写一份 <code>storyboard.json</code>：挑镜头、填文字，不写代码、不算坐标。版式、动效、节奏都在现成组件里。",
    "why.t2": "配方由强模型先调好",
    "why.d2": "每种风格先由强模型做到位，再写成组件和校验规则；便宜模型照着填，出片水准由配方兜底。",
    "why.t3": "合规红线先拦一遍",
    "why.d3": "内置《广告法》极限词、六个行业的合规规则、断词换行、安全区等几十条校验，报错用中文写清楚哪里要改。",
    "why.t4": "一条命令出片",
    "why.d4": "校验 → 配乐 → 渲染 → 拼图 → 检查帧，全自动；自查有 ✗ 的片子不交付。",
    "why.t5": "配乐现场合成，没有版权问题",
    "why.d5": "按镜头切点卡拍，响度统一到 -16 LUFS。",
    "why.t6": "中英双语",
    "why.d6": "字幕可选中文或英文；英文片每半拍扫一次画面，混进汉字就不交付。",
    "why.t7": "开源、可商用",
    "why.d7": "Apache-2.0，注明出处即可；渲染出的视频不要求署名。",
    "how.title": "它怎么工作",
    "how.lead": "从一份简报到一支能交付的片子，中间是这六步。",
    "how.t1": "产品简报",
    "how.d1": "商家或你自己填一份简报，有通用模板，各行业另有专用模板。",
    "how.t2": "选配方",
    "how.d2": "<code>meta.style</code> 选 cards / quiz / journey，<code>meta.industry</code> 选行业包。",
    "how.t3": "便宜模型写分镜",
    "how.d3": "只输出一份 <code>storyboard.json</code>：挑镜头、填文字，不写代码、不写坐标。",
    "how.t4": "校验",
    "how.d4": "<code>validate.mjs</code> 查硬性规则和广告法 / 行业合规，报告回喂给模型改。",
    "how.t5": "开酿",
    "how.d5": "<code>make.mjs</code> 一条命令：配乐 → 渲染 → 拼图 → 检查帧 → 交付清单，有 ✗ 不交付。",
    "how.t6": "发布前人工自查",
    "how.d6": "照片授权、评价真实性、价格条件这些机器判断不了的事，由发布者确认。",
    "use.title": "怎么用",
    "use.lead": "先装依赖、跑个样例，再挑一种方式让 AI 写分镜。",
    "use.s1": "装依赖",
    "use.s1d": "<code>npm install</code> 装渲染引擎；<code>npx remotion browser ensure</code> 下载一次 Chrome Headless Shell，供无头渲染用。",
    "use.s2": "跑个样例，确认装好了",
    "use.s2d": "校验那条通过就说明装好了。出片那条要几分钟，终端末行出现「交付：&lt;mp4 路径&gt;」才算出片；<code>--out</code> 不能指向仓库里面。",
    "code.sample": "node scripts/validate.mjs examples/ledger.json\nnode scripts/make.mjs examples/ledger.json --out ../brewreel-out/ledger",
    "env.title": "运行环境",
    "env.os": "操作系统",
    "env.osv": "Windows（仅 x64）/ macOS ≥ 15 / Linux（glibc ≥ 2.35，需要 <code>libnss3</code> / <code>libgbm</code> / <code>libasound2</code> 等共享库；不支持 Alpine、NixOS）",
    "env.nodev": "≥ 18（建议 20 LTS 或更高）；DeepSeek Harness 插件要 22.19+ 的 22.x 或 24+",
    "env.pyv": "3.10+；配乐脚本要 <code>numpy</code> / <code>scipy</code>，<code>llm_make.py</code> 只用标准库",
    "env.dl": "首次下载",
    "env.dlv": "渲染依赖约几百 MB，外加约 110 MB 的 Chrome Headless Shell",
    "env.foot": "成片 1080×1920（journey 默认 1080×1350），30 fps，带配乐和音效。",
    "use.pick": "让 AI 写分镜，三选一",
    "st.ready": "可用",
    "st.repo": "可从仓库目录安装",
    "u1.title": "装成 skill",
    "u1.body": "适合 Claude Code、Codex、opencode 等能读 <code>SKILL.md</code> 的 AI 编程助手。把整个仓库 clone 到 <code>~/.claude/skills/brewreel/</code>（Claude Code）或 <code>~/.agents/skills/brewreel/</code>（通用约定），也可以用你工具自带的 skill 安装命令指向本仓库。然后把简报交给助手（模板见 <code>brief-template.md</code>），让它照 <code>SKILL.md</code> 出片。",
    "u1.l1": "装成 Claude Code 的 skill",
    "u1.l2": "可选：让 Claude Code 走 DeepSeek（占位符换成你自己的 key）",
    "code.claudeDs": "export ANTHROPIC_BASE_URL=https://api.deepseek.com/anthropic\nexport ANTHROPIC_AUTH_TOKEN=&lt;你的 DeepSeek API Key&gt;\nexport ANTHROPIC_MODEL=deepseek-flash[1m]",
    "u2.title": "无头脚本 <code>llm_make.py</code>",
    "u2.body": "不需要 agent。脚本直接调 OpenAI 兼容接口（默认 DeepSeek）：简报进、视频出，校验报错会原样回喂给模型重试（至多 3 次）。",
    "code.script": "export LLM_API_KEY=&lt;你的 DeepSeek API Key&gt;\nexport LLM_BASE_URL=https://api.deepseek.com\nexport LLM_MODEL=deepseek-chat\npython scripts/llm_make.py path/to/brief.md",
    "u2.note": "Windows PowerShell 用 <code>$env:LLM_API_KEY=\"...\"</code> 代替 <code>export</code>。以上都是占位符，换成你自己的 key；不要把 key 提交进仓库或写进 issue。加 <code>--dry-run</code> 不调接口、不读密钥，只把拼好的提示写出来并估算 token 数。",
    "u3.title": "DeepSeek Harness 插件 <code>dsh-brewreel</code>",
    "u3.flag": "<strong>可从仓库目录安装，npm 包即将上线，还没接真实 DeepSeek 模型实测。</strong>",
    "u3.body": "装上后，模型照着 skill 写分镜，校验、出片、核对都调插件的 7 个工具完成，出片在后台跑、报进度。需要 dsh 0.1.7-rc.2 或更高的 0.1.x、Node.js 22.19+ 的 22.x 或 24+，以及 pnpm。",
    "code.dshComment": "# 还没装 dsh 时",
    "u3.note": "第三条命令在 clone 的上一级目录执行。初次使用时对模型说「检查一下视频插件环境」，它会调 doctor，经你同意后再调 setup 装渲染依赖。",
    "u3.link": "插件说明",
    "ui.copy": "复制",
    "ui.copied": "已复制",
    "ui.copyFail": "复制失败",
    "a.copy": "复制命令",
    "lim.title": "现在能用到什么程度",
    "lim.lead": "这是预览版。下面照实写，用之前先看一遍。",
    "lim.1": "<strong>还是预览版：</strong>测试和修复仍在进行中，目前还不建议把成片不经人工修改直接对外发布。",
    "lim.2": "<strong>便宜模型实测还没到「能直接发」：</strong>v0.2.0 发布前的那一轮让小模型扮演便宜模型，只给简报和 <code>SKILL.md</code>，从零写分镜、跑校验、出片，共 9 支，没有一支到 7 分（我们定的「可以直接发」的线）。软件 / 工具类整体 5–6 分、合规 7–8 分；行业片整体 4–5 分、合规 4–5 分，失分主要在跨字段的事实问题上。",
    "lim.3": "<strong>quiz / journey 修复后还没重测：</strong>两个配方各测了 3 支，修了评审列出的问题，样例分镜都重新通过了校验和出片检查；但便宜模型还没重新写一轮打分，公开的分数仍是修复前的。journey 的配乐和音效还没有人工试听。",
    "lim.4": "<strong>没有配音：</strong>目前没有 TTS，只有字幕、配乐和音效。",
    "lim.5": "<strong>没有实拍就只能插画：</strong>全程没有商家实拍照片时，画面靠组件和插画兜底，行业片会明显吃亏。",
    "lim.6": "<strong>DeepSeek Harness 插件还没接真实 DeepSeek 模型实测</strong>，npm 包即将上线。",
    "lim.7": "<strong>不做的品类：</strong>医疗美容、处方药 / 药品、K12 学科培训、保健品功效宣称、烟草。",
    "lim.advice": "<b>建议用法：</b>把成片当初稿，看完整片再改再发，不要只看校验通过就发；行业片尽量配商家实拍照片，出片时传 <code>--brief &lt;简报&gt;</code>，交付前把画面上每个价格、条件、日期、营业时间、距离逐条和简报对一遍。",
    "lim.more": "仍存在的其他问题和各轮测试结果，见 README 的<a class=\"inline-link\" href=\"https://github.com/Finderchangchang/brewreel#已知限制\" target=\"_blank\" rel=\"noopener\">「已知限制」</a>。",
    "soon.title": "即将上线",
    "soon.lead": "下面两项还没上线，做好后会写进更新日志。",
    "soon.badge": "即将上线",
    "soon.badge2": "即将上线 · v0.5.0",
    "soon.t1": "npm 包 <code>dsh-brewreel</code>",
    "soon.d1": "现在插件要从仓库目录安装；npm 包发布后，可以直接 <code>dsh plugin --profile web add dsh-brewreel</code> 装上。",
    "soon.t2": "配音",
    "soon.d2": "MiniMax 语音 + 逐字字幕。现在的成片没有配音，需要的话出片后在剪辑软件或平台里自己加。",
    "name.title": "为什么叫精酿",
    "name.lead": "好酒靠的是配方，原料普通也能酿好。",
    "name.t1": "强模型调配方，便宜模型照着酿",
    "name.d1": "先让强模型把一种视频风格做到位，再把版式、动效、节奏和规则写成一份配方：现成组件加校验脚本。DeepSeek 这类便宜模型就是普通原料，照着配方填分镜，就能酿出同一水准的片子。",
    "name.t2": "自酿、分享配方",
    "name.d2": "精酿圈的习惯是自己酿、把配方拿出来分享。这里对应开源和二创、三创：一创直接拿现成配方开酿；二创换皮，换配色、字体、角色；三创按 <code>distill/</code> 的六步流程拆一支视频，调出新配方。",
    "name.t3": "只学结构，皮肤自己设计",
    "name.d3": "调配方只学结构：叙事、节奏、动效、镜头语言。皮肤必须自己设计：配色、角色、招牌细节。<code>check-originality.mjs</code> 会自动检查：和参考片的配色色差（CIEDE2000）要拉够，招牌清单每一条都要写明换成了什么或已删除。",
    "faq.title": "常见问题",
    "faq.q1": "背景音乐是怎么来的？",
    "faq.a1": "<p><code>scripts/make_bgm.py</code> 用 numpy / scipy 现场合成：乐器、和声、旋律、混音、母带都在脚本里，不用外部素材库。每个镜头一个段落，音符落在整拍 / 半拍，镜头切换处有镲或加花，所以音乐是卡着镜头走的；响度校到 -16 LUFS。</p><p>因为是现场合成的，没有版权问题。正式发抖音这类平台时，也可以出片时加 <code>--no-bgm</code> 出静音版，再在平台里配乐。</p>",
    "faq.q2": "有没有配音？",
    "faq.a2": "<p>目前没有，没有接 TTS。画面靠字幕、逐字点亮和音效把话说清楚；配音在计划中。现在需要配音的话，出片后在剪辑软件或平台里自己加；用了 AI 配音，记得按平台要求勾选 AI 生成内容声明。</p>",
    "faq.q3": "为什么画面是插画，不是实拍？",
    "faq.a3": "<p>项目不生成「看起来像真实拍摄」的拟真图片。没有商家素材时，画面用组件和简笔插画兜底，并明确标注，不冒充实拍。有商家实拍照片（门店、成品、价目表）时，用实拍镜头放进去，可信度会好很多；照片是否授权会列进「需人工复核」。</p>",
    "faq.q4": "成片能直接发吗？",
    "faq.a4": "<p>还不建议。把成片当初稿：看完整片，改掉别扭的文案和重复的卖点再发；行业片把画面上每个价格、条件、日期、营业时间、距离逐条和简报对一遍。实测情况见上面的<a class=\"inline-link\" href=\"#limits\">「现在能用到什么程度」</a>。</p>",
    "faq.q5": "要花钱吗？",
    "faq.a5": "<p>本项目免费开源。模型调用用你自己的 API Key，按用量在服务商那边结算，项目不经手任何费用；渲染在你自己的电脑上跑。渲染引擎 Remotion 对 4 人及以上的营利组织收费，见下一条。</p>",
    "faq.q6": "Remotion 要授权吗？",
    "faq.a6": "<p>Remotion 是源码可见、非开源的软件：个人、3 人及以下的营利公司、非营利组织可免费使用（含商用）；<strong>4 人及以上的营利组织需要购买 Remotion 的 Company License</strong>，详见 <a class=\"inline-link\" href=\"https://www.remotion.dev/license\" target=\"_blank\" rel=\"noopener\">remotion.dev/license</a>。本仓库的 Apache-2.0 不改变 Remotion 自己的许可条件。</p><p>本仓库把 <code>remotion</code> / <code>@remotion/cli</code> 钉在 <code>4.0.529</code>。升级到 5.0 后，Remotion 免费层需要在配置里传 <code>licenseKey</code>（个人 / 3 人以下公司 / 非营利填 <code>free-license</code>），升级前请先看 <code>THIRD_PARTY_LICENSES.md</code>。</p>",
    "ct.title": "参与与联系",
    "ct.lead": "想听真实需求：你想给什么产品做片？缺哪种配方、哪个行业？哪条合规规则误伤了你？公众号私信或开 issue 都行。",
    "ct.issues": "误伤或漏拦的校验规则、渲染出错、看着别扭的画面，能附上分镜 JSON 和报错就更好。<strong>别贴 API Key。</strong>",
    "ct.issuesLink": "提一个 Issue",
    "ct.mpTitle": "公众号私信",
    "ct.mp": "合作、赞助、需求都走公众号私信，扫码关注后在后台留言。",
    "ct.mpNote": "暂无专属交流群。",
    "a.mp": "公众号二维码",
    "ct.coffeeTitle": "请我喝杯咖啡",
    "ct.coffee": "如果精酿帮上了你的忙，欢迎请我喝杯咖啡。每一份配方都是一杯杯咖啡熬出来的：这杯续上，下一份配方就调得快一点。",
    "ct.coffeeNote": "量力而行，不用有压力；点个 Star、提个 issue，或者给我看看你酿的片子，我一样开心。",
    "a.donate": "微信赞赏码",
    "sis.label": "同作者的开源项目：",
    "sis.1": "Jev 聊天助手",
    "sis.2": "Jev 聊天助手 macOS 版",
    "sis.3": "Jev 聊天助手 Windows 版",
    "ft.tag": "便宜模型，也能酿出好片。写一份产品简报，一条命令出一支竖版宣传片。",
    "ft.project": "项目",
    "ft.repo": "GitHub 仓库",
    "ft.changelog": "更新日志",
    "ft.docs": "文档",
    "ft.plugin": "插件说明",
    "ft.remotion": "Remotion 许可",
    "ft.onpage": "站内",
    "ft.copy": "© 2026 Finderchangchang · <a href=\"https://github.com/Finderchangchang/brewreel/blob/main/LICENSE\" target=\"_blank\" rel=\"noopener\">Apache-2.0 开源</a> · 可商用，须注明出处（<a href=\"https://github.com/Finderchangchang/brewreel/blob/main/NOTICE\" target=\"_blank\" rel=\"noopener\">NOTICE</a>）",
    "ft.legal": "校验规则只用于辅助自查，不构成法律意见。",
    "ft.more": "同作者：<a href=\"https://chatjevs.com\" target=\"_blank\" rel=\"noopener\">Jev 聊天助手</a> · 原名 promo-video-skill / 蒸馏视频，旧地址自动跳转。"
  },
  "en": {
    "meta.title": "BrewReel · 精酿 — Brew great promo reels with low-cost models",
    "meta.desc": "BrewReel is an open-source vertical promo video tool: write a product brief, let the AI pick the shots and write the copy, and render a vertical promo video with one command. Three recipes, six industry packs, built-in ad-law and industry compliance checks. Apache-2.0.",
    "skip": "Skip to main content",
    "a.brand": "BrewReel home",
    "brand.name": "BrewReel<span class=\"brand-alt\"> · 精酿</span>",
    "a.nav": "Main navigation",
    "nav.recipes": "Recipes",
    "nav.industries": "Industries",
    "nav.usage": "How to use",
    "nav.faq": "FAQ",
    "a.lang": "切换到中文",
    "a.theme": "Toggle light / dark theme",
    "a.star": "GitHub repository, leave a Star if it helps",
    "a.menuOpen": "Open menu",
    "a.menuClose": "Close menu",
    "hero.eyebrow": "Open source · Apache-2.0 · v0.4.0 preview",
    "hero.title": "Brew great promo reels<br>with low-cost models",
    "hero.sub": "Write a product brief, let the AI pick the shots and write the copy, and render a vertical promo video with one command.",
    "hero.github": "GitHub repository",
    "hero.demo": "Watch the demo",
    "hero.dsh": "Use it in DeepSeek Harness",
    "hero.note": "<strong>Still a preview:</strong> treat each video as a first draft; watch the whole thing and edit it before you publish.",
    "a.video": "Demo video: actual renders of the three recipes",
    "hero.cap": "Actual renders of the three recipes; the products and numbers are fictional",
    "what.kicker": "What it is",
    "what.statement": "A strong model tunes the recipe first; <em>a low-cost model follows it</em> and brews a video at the same level.",
    "what.note": "Hand a brief to an AI coding assistant, the headless script or the DeepSeek Harness plugin. The model only writes a storyboard; layout, motion and pacing live in ready-made components, and one command renders a vertical promo video with music and sound effects.",
    "gloss.t1": "Recipe",
    "gloss.d1": "= style pack: design tokens, shot components, validation rules and narrative templates",
    "gloss.t2": "Crafting a recipe",
    "gloss.d2": "= deriving a style from a reference video",
    "gloss.t3": "Brewing",
    "gloss.d3": "= rendering a video",
    "rec.title": "Three recipes",
    "rec.lead": "A storyboard picks its recipe with <code>meta.style</code>; without it you get the default <code>cards</code>. Everything below is an actual render; the products and numbers are fictional.",
    "rec.tag1": "Recipe 01",
    "rec.tag2": "Recipe 02",
    "rec.tag3": "Recipe 03",
    "rec.name1": "cards",
    "rec.name2": "quiz",
    "rec.name3": "journey",
    "rec.default": "default",
    "rec.ratio3": "4:5 (default) / 9:16",
    "rec.look1": "Gradient background, a centered white card and bold outlined captions, one point per shot.",
    "rec.look2": "Circle a common misconception in red pen → ask one multiple-choice question → reveal → a dictionary card explains it.",
    "rec.look3": "An original mascot crosses a paper-cut city in one take, one postcard per stop for each category.",
    "rec.fit1": "<b>Fits</b> a single selling point, a how-it-works flow, UI demos, physical products and stores, price lists",
    "rec.fit2": "<b>Fits</b> a common misconception that can be framed as one multiple-choice question with exactly one right answer (\"What does X actually mean?\")",
    "rec.fit3": "<b>Fits</b> 4–6 clear categories, features or stops worth touring along one route",
    "a.rec1": "cards recipe: three actual rendered frames",
    "a.rec2": "quiz recipe: three actual rendered frames",
    "a.rec3": "journey recipe: three actual rendered frames",
    "rec.pick": "<b>How to choose:</b> one multiple-choice question → <code>quiz</code>; 4–6 categories to tour → <code>journey</code>; everything else → <code>cards</code>, i.e. leave it out.",
    "ind.title": "Six industries",
    "ind.lead": "Each industry pack has compliance rules, a recommended shot structure, a brief template for merchants and a regression-test brief. Each image shows frame 0, the cover, on the left and one frame from the middle on the right.",
    "ind.1": "Software · budgeting",
    "ind.2": "Food · item launch",
    "ind.3": "Ecommerce · physical goods",
    "ind.4": "Education · adult vocational course",
    "ind.5": "Beauty · no real photos",
    "ind.6": "Travel · lodging",
    "a.ind1": "Software: budgeting, cover and a mid-video frame",
    "a.ind2": "Food: item launch, cover and a mid-video frame",
    "a.ind3": "Ecommerce: physical goods, cover and a mid-video frame",
    "a.ind4": "Education: adult vocational course, cover and a mid-video frame",
    "a.ind5": "Beauty: no real photos, cover and a mid-video frame",
    "a.ind6": "Travel: lodging, cover and a mid-video frame",
    "ind.nope": "Not supported",
    "ind.n1": "Medical aesthetics",
    "ind.n2": "Prescription drugs / medicine",
    "ind.n3": "K12 academic tutoring",
    "ind.n4": "Dietary-supplement efficacy claims",
    "ind.n5": "Tobacco",
    "ind.nopeNote": "The compliance rules don't cover these, so results aren't guaranteed compliant even if you force them.",
    "why.title": "Why BrewReel",
    "why.lead": "The low-cost model fills in the blanks; layout, compliance and render QA are left to the recipe and the scripts.",
    "why.t1": "The cheap model only does what it's good at",
    "why.d1": "It writes one <code>storyboard.json</code>: pick shots, fill in text. No code, no coordinates. Layout, motion and pacing live in ready-made components.",
    "why.t2": "A strong model tunes the recipe first",
    "why.d2": "Each style is first made right by a strong model, then written down as components and validation rules. The cheap model follows the recipe, and the recipe holds the quality bar.",
    "why.t3": "Compliance red lines are checked first",
    "why.d3": "Dozens of built-in checks cover ad-law superlatives, compliance rules for six industries, line-wrap problems and safe areas, and every error says what to fix.",
    "why.t4": "One command renders the video",
    "why.d4": "Validate → music → render → contact sheet → check frames, fully automated. A video with a ✗ in its self-check is not delivered.",
    "why.t5": "Music made on the spot, no copyright issues",
    "why.d5": "It hits the shot cuts, and loudness is normalized to -16 LUFS.",
    "why.t6": "Chinese and English",
    "why.d6": "Captions can be Chinese or English; English videos are scanned every half beat, and any Chinese character on screen blocks delivery.",
    "why.t7": "Open source, commercial use allowed",
    "why.d7": "Apache-2.0, just credit the source. Rendered videos don't require attribution.",
    "how.title": "How it works",
    "how.lead": "From a brief to a video that can be delivered, in six steps.",
    "how.t1": "Product brief",
    "how.d1": "The merchant, or you, fills in a brief; there is a generic template plus one per industry.",
    "how.t2": "Pick a recipe",
    "how.d2": "<code>meta.style</code> = cards / quiz / journey, <code>meta.industry</code> = an industry pack.",
    "how.t3": "The cheap model writes the storyboard",
    "how.d3": "It outputs one <code>storyboard.json</code>: pick shots, fill in text; no code, no coordinates.",
    "how.t4": "Validate",
    "how.d4": "<code>validate.mjs</code> checks hard rules plus ad-law / industry compliance; the report goes back to the model.",
    "how.t5": "Brew",
    "how.d5": "<code>make.mjs</code> in one command: music → render → contact sheet → check frames → delivery manifest; any ✗ means no delivery.",
    "how.t6": "Human pre-publish check",
    "how.d6": "Things a machine can't judge, such as photo authorization, genuine reviews and price conditions, are confirmed by the publisher.",
    "use.title": "How to use",
    "use.lead": "Install the dependencies, run a sample, then pick a way to let the AI write the storyboard.",
    "use.s1": "Install dependencies",
    "use.s1d": "<code>npm install</code> installs the rendering engine; <code>npx remotion browser ensure</code> downloads Chrome Headless Shell once, for headless rendering.",
    "use.s2": "Run a sample to check the setup",
    "use.s2d": "If the first command passes, your setup is good. The second renders in a few minutes; the final terminal line reads <code>交付：&lt;mp4 path&gt;</code> (\"delivered\"). <code>--out</code> must not point inside the repo.",
    "code.sample": "node scripts/validate.mjs examples/en-focus.json\nnode scripts/make.mjs examples/en-focus.json --out ../brewreel-out/en-focus",
    "env.title": "Environment",
    "env.os": "OS",
    "env.osv": "Windows (x64 only) / macOS ≥ 15 / Linux (glibc ≥ 2.35, plus shared libs like <code>libnss3</code> / <code>libgbm</code> / <code>libasound2</code>; Alpine and NixOS are not supported)",
    "env.nodev": "≥ 18 (20 LTS or newer recommended); the DeepSeek Harness plugin needs 22.x from 22.19, or 24+",
    "env.pyv": "3.10+; the music script needs <code>numpy</code> / <code>scipy</code>, <code>llm_make.py</code> uses only the standard library",
    "env.dl": "First download",
    "env.dlv": "A few hundred MB of render dependencies, plus about 110 MB for Chrome Headless Shell",
    "env.foot": "Output is 1080×1920 (journey defaults to 1080×1350), 30 fps, with music and sound effects.",
    "use.pick": "Let the AI write the storyboard: pick one",
    "st.ready": "Ready",
    "st.repo": "Installable from the repo folder",
    "u1.title": "As a skill",
    "u1.body": "For AI coding assistants that read <code>SKILL.md</code>: Claude Code, Codex, opencode and others. Clone the whole repo into <code>~/.claude/skills/brewreel/</code> (Claude Code) or <code>~/.agents/skills/brewreel/</code> (a common convention), or point your tool's own skill-install command at this repository. Then hand the assistant a brief (template: <code>brief-template.md</code>) and let it follow <code>SKILL.md</code>.",
    "u1.l1": "Install as a Claude Code skill",
    "u1.l2": "Optional: wire DeepSeek into Claude Code (replace the placeholder with your own key)",
    "code.claudeDs": "export ANTHROPIC_BASE_URL=https://api.deepseek.com/anthropic\nexport ANTHROPIC_AUTH_TOKEN=&lt;your DeepSeek API key&gt;\nexport ANTHROPIC_MODEL=deepseek-flash[1m]",
    "u2.title": "Headless script <code>llm_make.py</code>",
    "u2.body": "No agent needed. The script calls an OpenAI-compatible endpoint (DeepSeek by default): brief in, video out, with validator errors fed back to the model verbatim on retry (up to 3 times).",
    "code.script": "export LLM_API_KEY=&lt;your DeepSeek API key&gt;\nexport LLM_BASE_URL=https://api.deepseek.com\nexport LLM_MODEL=deepseek-chat\npython scripts/llm_make.py path/to/brief.md",
    "u2.note": "On Windows PowerShell use <code>$env:LLM_API_KEY=\"...\"</code> instead of <code>export</code>. All values above are placeholders; swap in your own key, and never commit a key or paste one into an issue. With <code>--dry-run</code> it calls no API and reads no key; it only writes out the assembled prompt and estimates its token count.",
    "u3.title": "DeepSeek Harness plugin <code>dsh-brewreel</code>",
    "u3.flag": "<strong>Installable from the repo folder; the npm package is coming soon; not yet tested against a real DeepSeek model.</strong>",
    "u3.body": "With it installed, the model writes the storyboard by following the skill, and validates, renders and verifies through the plugin's 7 tools; rendering runs in the background with progress. You need dsh 0.1.7-rc.2 or later within 0.1.x, Node.js 22.x from 22.19 or 24+, and pnpm.",
    "code.dshComment": "# if dsh is not installed yet",
    "u3.note": "Run the third command from the folder that contains the clone. On first use, ask the model to \"check the video plugin environment\": it calls doctor, and after you agree, calls setup to install the render dependencies.",
    "u3.link": "Plugin docs",
    "ui.copy": "Copy",
    "ui.copied": "Copied",
    "ui.copyFail": "Copy failed",
    "a.copy": "Copy commands",
    "lim.title": "How far it gets today",
    "lim.lead": "This is a preview. Here is where it stands, stated plainly; read it before you use it.",
    "lim.1": "<strong>Still a preview:</strong> testing and bug-fixing are ongoing. We don't yet recommend publishing a video as rendered, without human edits.",
    "lim.2": "<strong>Cheap-model results are not yet \"fine to publish as is\":</strong> in the round before the v0.2.0 release a small model played the cheap model, got only the brief and <code>SKILL.md</code>, and wrote the storyboard from scratch, validated and rendered, 9 videos in all. None reached 7, the score we set as \"fine to publish as is\". Software/tool videos scored 5–6 overall and 7–8 on compliance; industry videos 4–5 on both, losing points mainly on cross-field factual problems.",
    "lim.3": "<strong>quiz / journey not re-tested after the fixes:</strong> each recipe was tested with 3 videos and the problems the review listed were fixed, and the sample storyboards passed validation and delivery checks again; but the cheap model has not re-run a scored round, so the published scores are still from before the fixes. Nobody has listened to journey's music and sound effects yet.",
    "lim.4": "<strong>No voice-over:</strong> there is no TTS yet, only captions, music and sound effects.",
    "lim.5": "<strong>Illustrations only without real photos:</strong> with no merchant photos, the visuals come from components and illustrations, which clearly hurts industry videos.",
    "lim.6": "<strong>The DeepSeek Harness plugin has not been tested against a real DeepSeek model yet</strong>; the npm package is coming soon.",
    "lim.7": "<strong>Not supported:</strong> medical aesthetics, prescription drugs / medicine, K12 academic tutoring, dietary-supplement efficacy claims, tobacco.",
    "lim.advice": "<b>Recommended use:</b> treat the video as a first draft and watch the whole thing before you edit and publish; passing validation alone is not enough. For industry videos, use the merchant's real photos where possible and pass <code>--brief &lt;brief&gt;</code> when rendering; before delivery, check every price, condition, date, opening hour and distance on screen against the brief.",
    "lim.more": "The remaining open problems and the results of each test round are in the README's <a class=\"inline-link\" href=\"https://github.com/Finderchangchang/brewreel/blob/main/README.en.md#known-limitations\" target=\"_blank\" rel=\"noopener\">Known limitations</a>.",
    "soon.title": "Coming soon",
    "soon.lead": "These two are not out yet; they will be noted in the changelog when they ship.",
    "soon.badge": "Coming soon",
    "soon.badge2": "Coming soon · v0.5.0",
    "soon.t1": "npm package <code>dsh-brewreel</code>",
    "soon.d1": "For now the plugin installs from the repo folder; once the npm package is published, <code>dsh plugin --profile web add dsh-brewreel</code> will work directly.",
    "soon.t2": "Voice-over",
    "soon.d2": "MiniMax voice + word-by-word captions. Videos have no voice-over today; if you need one, add it after rendering in a video editor or on the platform.",
    "name.title": "Why the name BrewReel",
    "name.lead": "Good beer comes from a good recipe, even with ordinary ingredients. (精酿, the Chinese name, means \"craft brew\".)",
    "name.t1": "A strong model writes the recipe, a cheap one brews",
    "name.d1": "A strong model first gets a video style right; its layout, motion, pacing and rules are then written down as a recipe: ready-made components plus a validator. A low-cost model like DeepSeek is the ordinary ingredient: it follows the recipe, fills in a storyboard, and brews a video at the same level.",
    "name.t2": "Homebrew and share the recipe",
    "name.d2": "Craft brewers brew at home and share their recipes. Here that means open source plus remixes and new recipes: use an existing recipe as is; remix one by changing its palette, fonts and characters; or follow the six-step process in <code>distill/</code> to break down a video and craft a new recipe.",
    "name.t3": "Learn the structure, design your own skin",
    "name.d3": "Crafting a recipe only borrows the structure: narrative, pacing, motion, camera language. The skin must be your own design: palette, characters, signature details. <code>check-originality.mjs</code> checks this automatically: the palette must be far enough from the reference in color difference (CIEDE2000), and every item on the signature list must say what replaced it or that it was removed.",
    "faq.title": "FAQ",
    "faq.q1": "Where does the background music come from?",
    "faq.a1": "<p><code>scripts/make_bgm.py</code> synthesizes it on the spot with numpy / scipy: instruments, harmony, melody, mixing and mastering are all in the script, with no external sample library. Each shot is one section, notes land on whole or half beats, and every shot change gets a cymbal or a fill, so the music follows the cuts; loudness is normalized to -16 LUFS.</p><p>Because it is synthesized on the spot, there are no copyright issues. When you publish on a platform such as Douyin, you can also render a silent version with <code>--no-bgm</code> and add music on the platform.</p>",
    "faq.q2": "Is there a voice-over?",
    "faq.a2": "<p>Not yet; there is no TTS. The video tells its story with captions, text that lights up word by word, and sound effects; voice-over is planned. If you need one now, add it after rendering in a video editor or on the platform. If you use an AI voice, tick the platform's AI-generated content declaration as it requires.</p>",
    "faq.q3": "Why illustrations instead of real footage?",
    "faq.a3": "<p>The project does not generate images that look like \"real photography\". Without merchant material, the video falls back to components and simple line-drawn illustrations and labels them clearly, rather than passing them off as real photos. With the merchant's real photos (store, finished product, price list), use the real-photo shots; the result is far more convincing. Whether a photo is authorized goes on the human-review list.</p>",
    "faq.q4": "Can I publish the video as rendered?",
    "faq.a4": "<p>Not yet recommended. Treat the video as a first draft: watch the whole thing, fix awkward copy and repeated selling points, then publish. For industry videos, check every price, condition, date, opening hour and distance on screen against the brief, one by one. See <a class=\"inline-link\" href=\"#limits\">How far it gets today</a> above for test results.</p>",
    "faq.q5": "Does it cost anything?",
    "faq.a5": "<p>The project is free and open source. Model calls use your own API key and are billed by the provider for what you use; the project handles no money. Rendering runs on your own computer. The rendering engine Remotion charges for-profit organizations with 4 or more people; see the next question.</p>",
    "faq.q6": "Does Remotion need a license?",
    "faq.a6": "<p>Remotion is source-available, not open source: free for individuals, for-profit companies with 3 or fewer people, and non-profits (including commercial use); <strong>for-profit organizations with 4 or more people must purchase Remotion's Company License</strong>, see <a class=\"inline-link\" href=\"https://www.remotion.dev/license\" target=\"_blank\" rel=\"noopener\">remotion.dev/license</a>. This repo's Apache-2.0 license does not change Remotion's own license terms.</p><p>This repo pins <code>remotion</code> / <code>@remotion/cli</code> to <code>4.0.529</code>. After upgrading to 5.0, Remotion's free tier requires passing a <code>licenseKey</code> in config (individuals / companies with ≤3 people / non-profits use <code>free-license</code>); read <code>THIRD_PARTY_LICENSES.md</code> before upgrading.</p>",
    "ct.title": "Get involved",
    "ct.lead": "We want to hear real needs: what product do you want a video for? Which recipe or industry is missing? Which compliance rule got in your way? Message the Official Account or open an issue.",
    "ct.issues": "Validation rules that block too much or too little, render errors, frames that look wrong. Attaching the storyboard JSON and the error output helps a lot. <strong>Never paste an API key.</strong>",
    "ct.issuesLink": "Open an issue",
    "ct.mpTitle": "WeChat Official Account",
    "ct.mp": "Partnerships, sponsorship and requests all go through a private message to the Official Account: scan to follow, then message us.",
    "ct.mpNote": "There is no dedicated chat group yet.",
    "a.mp": "WeChat Official Account QR code",
    "ct.coffeeTitle": "Buy me a coffee",
    "ct.coffee": "If BrewReel helped you out, feel free to buy me a coffee. Every recipe here was brewed on a lot of coffee: keep the cup filled and the next recipe comes sooner.",
    "ct.coffeeNote": "Only if it's easy for you, no pressure. A Star, an issue, or showing me a video you brewed makes me just as happy.",
    "a.donate": "WeChat appreciation QR code",
    "sis.label": "Sister projects by the same author:",
    "sis.1": "Jev chat assistant",
    "sis.2": "Jev chat assistant for macOS",
    "sis.3": "Jev chat assistant for Windows",
    "ft.tag": "Brew great promo reels with low-cost models. Write a product brief and render a vertical promo video with one command.",
    "ft.project": "Project",
    "ft.repo": "GitHub repository",
    "ft.changelog": "Changelog",
    "ft.docs": "Docs",
    "ft.plugin": "Plugin docs",
    "ft.remotion": "Remotion license",
    "ft.onpage": "On this page",
    "ft.copy": "© 2026 Finderchangchang · <a href=\"https://github.com/Finderchangchang/brewreel/blob/main/LICENSE\" target=\"_blank\" rel=\"noopener\">Apache-2.0 open source</a> · Commercial use allowed, credit required (<a href=\"https://github.com/Finderchangchang/brewreel/blob/main/NOTICE\" target=\"_blank\" rel=\"noopener\">NOTICE</a>)",
    "ft.legal": "The validation rules are for self-checking only and are not legal advice.",
    "ft.more": "Same author: <a href=\"https://chatjevs.com\" target=\"_blank\" rel=\"noopener\">Jev chat assistant</a> · Formerly promo-video-skill / Distill Video; old links redirect automatically."
  }
};

(function () {
  "use strict";

  var root = document.documentElement;
  var I18N = BREW_I18N;
  var LANG_KEY = "brewreel-lang";
  var THEME_KEY = "brewreel-theme";
  var lang = "zh";

  function t(key) {
    var d = I18N[lang] || I18N.zh;
    return d[key] != null ? d[key] : (I18N.zh[key] != null ? I18N.zh[key] : "");
  }

  function track(name, data) {
    try {
      if (window.umami && typeof window.umami.track === "function") window.umami.track(name, data);
    } catch (e) {}
  }

  /* ---------- 1. 中 / EN 切换 ---------- */
  function applyLang(next) {
    lang = next === "en" ? "en" : "zh";
    var i, els, key;

    els = document.querySelectorAll("[data-i18n]");
    for (i = 0; i < els.length; i++) {
      key = els[i].getAttribute("data-i18n");
      if (I18N[lang][key] != null) els[i].innerHTML = I18N[lang][key];
    }

    els = document.querySelectorAll("[data-i18n-attr]");
    for (i = 0; i < els.length; i++) {
      var pairs = els[i].getAttribute("data-i18n-attr").split(";");
      for (var p = 0; p < pairs.length; p++) {
        var kv = pairs[p].split(":");
        if (kv.length === 2 && I18N[lang][kv[1]] != null) els[i].setAttribute(kv[0], I18N[lang][kv[1]]);
      }
    }

    document.title = t("meta.title");
    root.setAttribute("lang", lang === "en" ? "en" : "zh-CN");
    syncBurgerLabel();
  }

  var initial = "zh";
  try {
    var q = /[?&]lang=(en|zh)\b/.exec(location.search);
    initial = q ? q[1] : (localStorage.getItem(LANG_KEY) || "zh");
  } catch (e) {}

  var langBtn = document.getElementById("langBtn");
  if (langBtn) {
    langBtn.addEventListener("click", function () {
      var next = lang === "en" ? "zh" : "en";
      applyLang(next);
      try { localStorage.setItem(LANG_KEY, next); } catch (e) {}
    });
  }

  /* ---------- 2. 主题切换 ---------- */
  var themeBtn = document.getElementById("themeBtn");

  function currentTheme() {
    var set = root.getAttribute("data-theme");
    if (set) return set;
    return window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
  }

  if (themeBtn) {
    themeBtn.addEventListener("click", function () {
      var next = currentTheme() === "dark" ? "light" : "dark";
      root.setAttribute("data-theme", next);
      try { localStorage.setItem(THEME_KEY, next); } catch (e) {}
    });
  }

  /* ---------- 3. 导航：汉堡菜单 + 滚动描边 ---------- */
  var burger = document.getElementById("burger");
  var navMenu = document.getElementById("navMenu");
  var nav = document.getElementById("nav");

  function syncBurgerLabel() {
    if (!burger || !navMenu) return;
    var open = navMenu.classList.contains("open");
    burger.setAttribute("aria-label", t(open ? "a.menuClose" : "a.menuOpen"));
  }

  if (burger && navMenu) {
    burger.addEventListener("click", function () {
      var open = navMenu.classList.toggle("open");
      burger.setAttribute("aria-expanded", open ? "true" : "false");
      syncBurgerLabel();
    });
    navMenu.addEventListener("click", function (e) {
      if (e.target.closest && e.target.closest("a")) {
        navMenu.classList.remove("open");
        burger.setAttribute("aria-expanded", "false");
        syncBurgerLabel();
      }
    });
  }

  if (nav) {
    var onScroll = function () {
      if (window.scrollY > 8) nav.classList.add("is-stuck");
      else nav.classList.remove("is-stuck");
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
  }

  /* ---------- 4. 代码块复制 ---------- */
  function copyText(text, cb) {
    if (navigator.clipboard && navigator.clipboard.writeText) {
      navigator.clipboard.writeText(text).then(function () { cb(true); }, function () { cb(false); });
      return;
    }
    try {
      var ta = document.createElement("textarea");
      ta.value = text;
      ta.setAttribute("readonly", "");
      ta.style.position = "fixed";
      ta.style.opacity = "0";
      document.body.appendChild(ta);
      ta.select();
      document.execCommand("copy");
      document.body.removeChild(ta);
      cb(true);
    } catch (e) { cb(false); }
  }

  var copyBtns = document.querySelectorAll("[data-copy]");
  for (var c = 0; c < copyBtns.length; c++) {
    copyBtns[c].addEventListener("click", function () {
      var btn = this;
      var pre = btn.parentElement ? btn.parentElement.querySelector("pre") : null;
      if (!pre) return;
      var label = btn.querySelector("[data-i18n]");
      copyText(pre.textContent.replace(/\s+$/, ""), function (ok) {
        if (label) label.textContent = t(ok ? "ui.copied" : "ui.copyFail");
        btn.classList.toggle("done", ok);
        setTimeout(function () {
          if (label) label.textContent = t("ui.copy");
          btn.classList.remove("done");
        }, 1800);
      });
    });
  }

  /* ---------- 5. 演示视频：静音自动循环；用户点开才算一次播放 ---------- */
  var reduce = window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  var video = document.getElementById("demoVideo");
  var demoBtn = document.getElementById("demoBtn");

  if (video) {
    var userTouched = false;
    var tracked = false;
    var markUser = function () { userTouched = true; };
    var trackDemo = function () {
      if (tracked || !userTouched) return;
      tracked = true;
      track("play-demo");
    };

    video.addEventListener("pointerdown", markUser, { passive: true });
    video.addEventListener("keydown", markUser);
    video.addEventListener("play", trackDemo);
    video.addEventListener("volumechange", function () { if (!video.muted) trackDemo(); });

    if (reduce) {
      video.removeAttribute("autoplay");
      try { video.pause(); } catch (e) {}
    } else if ("IntersectionObserver" in window) {
      // 只在「没人碰过的静音循环」状态下，滚出视口时暂停、滚回来继续
      new IntersectionObserver(function (entries) {
        if (userTouched) return;
        for (var k = 0; k < entries.length; k++) {
          if (entries[k].isIntersecting) {
            var pr = video.play();
            if (pr && pr.catch) pr.catch(function () {});
          } else {
            video.pause();
          }
        }
      }, { threshold: 0.15 }).observe(video);
    }

    if (demoBtn) {
      demoBtn.addEventListener("click", function () {
        userTouched = true;
        try {
          video.muted = false;
          video.currentTime = 0;
          var pr = video.play();
          if (pr && pr.catch) pr.catch(function () {});
        } catch (e) {}
        trackDemo();
      });
    }
  }

  /* ---------- 6. 进场动效 ---------- */
  var items = document.querySelectorAll(".reveal");

  if (reduce || !("IntersectionObserver" in window)) {
    for (var k = 0; k < items.length; k++) items[k].classList.add("in");
  } else {
    var io = new IntersectionObserver(function (entries) {
      for (var j = 0; j < entries.length; j++) {
        if (entries[j].isIntersecting) {
          entries[j].target.classList.add("in");
          io.unobserve(entries[j].target);
        }
      }
    }, { rootMargin: "0px 0px -8% 0px", threshold: 0.08 });

    for (var n = 0; n < items.length; n++) {
      // 同一容器内的卡片错开一点点
      var sibs = items[n].parentElement ? items[n].parentElement.children : [];
      var idx = Array.prototype.indexOf.call(sibs, items[n]);
      if (idx > 0 && idx < 6) items[n].style.transitionDelay = (idx * 70) + "ms";
      io.observe(items[n]);
    }
  }

  applyLang(initial);
})();

(function () {
  var BREW = window.BREW || {};
  var repo = BREW.repo || "https://github.com/Finderchangchang/brewreel";
  // GitHub Star 数：拉不到就保留页面里的静态数字
  (function () {
    var els = document.querySelectorAll("[data-brew-stars]");
    if (!els.length || !window.fetch) return;
    var m = /github\.com\/([^/]+\/[^/#?]+)/.exec(repo);
    if (!m) return;
    fetch("https://api.github.com/repos/" + m[1], { headers: { Accept: "application/vnd.github+json" } })
      .then(function (r) { return r.ok ? r.json() : null; })
      .then(function (d) {
        if (!d || typeof d.stargazers_count !== "number") return;
        var n = d.stargazers_count;
        var txt = n >= 1000 ? (Math.round(n / 100) / 10).toFixed(1).replace(/\.0$/, "") + "k" : String(n);
        for (var i = 0; i < els.length; i++) els[i].textContent = txt;
      })
      .catch(function () {});
  })();
})();
