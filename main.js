/* 精酿 · BrewReel 官网脚本
 * 中英切换 / 主题 / 导航 / 复制 / 用法标签页 / 首屏循环预览 / 完整演示弹窗 / 进场动效 / Star 数与版本号
 * 文案全部在 i18n.js；这里用 t("key") 取，check-i18n.mjs 会扫描这些键。
 * 页面不依赖本脚本也能完整阅读：没有 JS 时内容全部可见，只是没有动效和切换。
 */
(function () {
  "use strict";

  var root = document.documentElement;
  var I18N = window.BREW_I18N || { zh: {}, en: {} };
  var LANG_KEY = "brewreel-lang";
  var THEME_KEY = "brewreel-theme";
  var GH_KEY = "brewreel-gh";
  var REPO = "Finderchangchang/brewreel";
  var lang = "zh";
  var reduceMQ = window.matchMedia ? window.matchMedia("(prefers-reduced-motion: reduce)") : null;
  var reduce = !!(reduceMQ && reduceMQ.matches);

  function t(key) {
    var d = I18N[lang] || I18N.zh || {};
    if (d[key] != null) return d[key];
    return (I18N.zh && I18N.zh[key] != null) ? I18N.zh[key] : "";
  }
  function track(name, data) {
    try { if (window.umami && typeof window.umami.track === "function") window.umami.track(name, data); } catch (e) {}
  }
  function load(k) { try { return localStorage.getItem(k); } catch (e) { return null; } }
  function save(k, v) { try { localStorage.setItem(k, v); } catch (e) {} }
  function $(sel, ctx) { return (ctx || document).querySelector(sel); }
  function $$(sel, ctx) { return Array.prototype.slice.call((ctx || document).querySelectorAll(sel)); }
  function announce(msg) { var live = $("#live"); if (live) { live.textContent = ""; setTimeout(function () { live.textContent = msg; }, 30); } }

  /* ---------- 1. 中 / EN ---------- */
  var hooks = [];
  function applyLang(next) {
    lang = next === "en" ? "en" : "zh";
    var dict = I18N[lang] || {};
    $$("[data-i18n]").forEach(function (el) {
      var v = dict[el.getAttribute("data-i18n")];
      if (v != null && el.innerHTML !== v) el.innerHTML = v;
    });
    $$("[data-i18n-attr]").forEach(function (el) {
      el.getAttribute("data-i18n-attr").split(";").forEach(function (pair) {
        var kv = pair.split(":");
        if (kv.length === 2 && dict[kv[1]] != null) el.setAttribute(kv[0], dict[kv[1]]);
      });
    });
    root.setAttribute("lang", lang === "en" ? "en" : "zh-CN");
    hooks.forEach(function (fn) { fn(); });
  }

  var initial = "zh";
  var q = /[?&]lang=(en|zh)\b/.exec(location.search);
  initial = q ? q[1] : (load(LANG_KEY) === "en" ? "en" : "zh");

  var langBtn = $("#langBtn");
  if (langBtn) {
    langBtn.addEventListener("click", function () {
      var next = lang === "en" ? "zh" : "en";
      applyLang(next);
      save(LANG_KEY, next);
      // 地址栏带 ?lang= 时一起改，刷新后不会跳回去
      if (/[?&]lang=/.test(location.search) && window.history && history.replaceState) {
        var url = location.pathname + location.search.replace(/([?&]lang=)(en|zh)/, "$1" + next) + location.hash;
        history.replaceState(null, "", url);
      }
    });
  }

  /* ---------- 2. 主题 ---------- */
  var themeBtn = $("#themeBtn");
  if (themeBtn) {
    themeBtn.addEventListener("click", function () {
      var set = root.getAttribute("data-theme");
      var cur = set || (window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light");
      var next = cur === "dark" ? "light" : "dark";
      root.setAttribute("data-theme", next);
      save(THEME_KEY, next);
    });
  }

  /* ---------- 3. 导航 ---------- */
  var nav = $("#nav");
  var burger = $("#burger");
  var navMenu = $("#navMenu");
  function setMenu(open) {
    if (!burger || !navMenu) return;
    navMenu.classList.toggle("open", open);
    burger.setAttribute("aria-expanded", open ? "true" : "false");
    burger.setAttribute("aria-label", t(open ? "a.menuClose" : "a.menuOpen"));
  }
  hooks.push(function () { setMenu(navMenu ? navMenu.classList.contains("open") : false); });
  if (burger && navMenu) {
    burger.addEventListener("click", function () { setMenu(!navMenu.classList.contains("open")); });
    navMenu.addEventListener("click", function (e) { if (e.target.closest && e.target.closest("a")) setMenu(false); });
    document.addEventListener("keydown", function (e) { if (e.key === "Escape" && navMenu.classList.contains("open")) { setMenu(false); burger.focus(); } });
    document.addEventListener("click", function (e) { if (navMenu.classList.contains("open") && !nav.contains(e.target)) setMenu(false); });
  }
  if (nav) {
    var onScroll = function () { nav.classList.toggle("is-stuck", window.scrollY > 8); };
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
  }

  /* ---------- 4. 复制 ---------- */
  function copyText(text, cb) {
    if (navigator.clipboard && window.isSecureContext) {
      navigator.clipboard.writeText(text).then(function () { cb(true); }, function () { cb(legacyCopy(text)); });
      return;
    }
    cb(legacyCopy(text));
  }
  function legacyCopy(text) {
    try {
      var ta = document.createElement("textarea");
      ta.value = text;
      ta.setAttribute("readonly", "");
      ta.style.position = "fixed";
      ta.style.top = "-1000px";
      document.body.appendChild(ta);
      ta.select();
      var ok = document.execCommand("copy");
      document.body.removeChild(ta);
      return ok;
    } catch (e) { return false; }
  }
  document.addEventListener("click", function (e) {
    var btn = e.target.closest && e.target.closest("[data-copy], [data-copy-from]");
    if (!btn) return;
    var src = btn.hasAttribute("data-copy-from")
      ? $(btn.getAttribute("data-copy-from"))
      : (btn.parentElement ? $("pre", btn.parentElement) : null);
    if (!src) return;
    var text = src.textContent.replace(/\s+$/, "");
    copyText(text, function (ok) {
      var label = $("[data-i18n]", btn);
      var key = label ? label.getAttribute("data-i18n") : null;
      if (label) label.textContent = t(ok ? "ui.copied" : "ui.copyFail");
      btn.classList.toggle("done", ok);
      announce(t(ok ? "ui.copied" : "ui.copyFail"));
      clearTimeout(btn._t);
      btn._t = setTimeout(function () {
        if (label && key) label.innerHTML = t(key);
        btn.classList.remove("done");
      }, 1800);
    });
  });

  /* ---------- 5. 用法标签页（没有 JS 时三块都展开） ---------- */
  var tabsRoot = $("[data-tabs]");
  if (tabsRoot) {
    var tablist = $("[role='tablist']", tabsRoot);
    var tabs = $$("[role='tab']", tabsRoot);
    var panels = tabs.map(function (tab) { return document.getElementById(tab.getAttribute("aria-controls")); });
    var select = function (i, focus) {
      tabs.forEach(function (tab, j) {
        var on = i === j;
        tab.setAttribute("aria-selected", on ? "true" : "false");
        tab.tabIndex = on ? 0 : -1;
        if (panels[j]) panels[j].hidden = !on;
      });
      if (focus) tabs[i].focus();
    };
    var indexOfHash = function (hash) {
      var id = (hash || "").replace(/^#/, "");
      for (var i = 0; i < panels.length; i++) if (panels[i] && panels[i].id === id) return i;
      return -1;
    };
    tabsRoot.classList.add("tabs-on");
    if (tablist) tablist.hidden = false;
    var start = indexOfHash(location.hash);
    select(start >= 0 ? start : 0);

    tabs.forEach(function (tab, i) {
      tab.addEventListener("click", function () { select(i); });
      tab.addEventListener("keydown", function (e) {
        var n = tabs.length, to = -1;
        if (e.key === "ArrowRight") to = (i + 1) % n;
        else if (e.key === "ArrowLeft") to = (i - 1 + n) % n;
        else if (e.key === "Home") to = 0;
        else if (e.key === "End") to = n - 1;
        if (to >= 0) { e.preventDefault(); select(to, true); }
      });
    });
    // 站内链接跳到某个用法（如首屏的「在 DeepSeek Harness 里用」）：先切标签，再让浏览器滚过去
    document.addEventListener("click", function (e) {
      var a = e.target.closest && e.target.closest("a[href^='#use-']");
      if (!a) return;
      var i = indexOfHash(a.getAttribute("href"));
      if (i >= 0) select(i);
    });
    window.addEventListener("hashchange", function () {
      var i = indexOfHash(location.hash);
      if (i >= 0) { select(i); panels[i].scrollIntoView({ block: "start" }); }
    });
  }

  /* ---------- 6. 首屏三支循环预览：静音、进入视口才加载，减弱动效 / 省流量时默认不播 ---------- */
  var loops = $$("video.loop");
  var toggle = $("#flightToggle");
  var saveData = !!(navigator.connection && navigator.connection.saveData);
  var playing = !(reduce || saveData);
  var dialogOpen = false;

  function syncLoop(v) {
    if (playing && !dialogOpen && v._visible) {
      var p = v.play();
      if (p && p.catch) p.catch(function () {});
    } else if (!v.paused) {
      v.pause();
    }
  }
  function syncAll() { loops.forEach(syncLoop); }
  function setToggle() {
    if (!toggle) return;
    toggle.classList.toggle("is-paused", !playing);
    toggle.setAttribute("aria-pressed", playing ? "false" : "true");
    var label = $("#flightToggleLabel");
    if (label) label.textContent = t(playing ? "flight.pause" : "flight.play");
  }
  hooks.push(setToggle);

  if (loops.length) {
    if ("IntersectionObserver" in window) {
      var vio = new IntersectionObserver(function (entries) {
        entries.forEach(function (en) { en.target._visible = en.isIntersecting; syncLoop(en.target); });
      }, { threshold: 0.25 });
      loops.forEach(function (v) { vio.observe(v); });
    } else {
      loops.forEach(function (v) { v._visible = true; });
      syncAll();
    }
    if (toggle) {
      toggle.hidden = false;
      toggle.addEventListener("click", function () { playing = !playing; setToggle(); syncAll(); });
    }
  }

  /* ---------- 7. 完整演示（有声）：弹窗播放；只有用户主动播放才记 play-demo ---------- */
  var dlg = $("#demoDialog");
  var demo = $("#demoVideo");
  var canDialog = !!(dlg && typeof dlg.showModal === "function" && demo);
  var demoFrom = "full";
  var demoTracked = false;

  if (canDialog) {
    document.addEventListener("click", function (e) {
      var a = e.target.closest && e.target.closest("[data-demo-open]");
      if (!a || e.metaKey || e.ctrlKey || e.shiftKey || e.button === 1) return;
      e.preventDefault();
      var recipe = a.getAttribute("data-recipe");
      if (recipe) track("view-recipe", { recipe: recipe });
      demoFrom = recipe || "full";
      demoTracked = false;
      var at = parseFloat(a.getAttribute("data-demo-at")) || 0;
      dialogOpen = true;
      syncAll();
      // 海报等打开时才设，免得首屏白下一张图
      if (!demo.getAttribute("poster") && demo.getAttribute("data-poster")) demo.setAttribute("poster", demo.getAttribute("data-poster"));
      dlg.showModal();
      try { demo.currentTime = at; } catch (err) {}
      if (demo.readyState < 1) {
        demo.addEventListener("loadedmetadata", function once() {
          demo.removeEventListener("loadedmetadata", once);
          if (Math.abs(demo.currentTime - at) > 0.5) { try { demo.currentTime = at; } catch (err) {} }
        });
      }
      demo.muted = false;
      var p = demo.play();
      if (p && p.catch) p.catch(function () {});
    });
    demo.addEventListener("play", function () {
      if (demoTracked || !dialogOpen) return;
      demoTracked = true;
      track("play-demo", { from: demoFrom });
    });
    $$("[data-demo-close]").forEach(function (b) { b.addEventListener("click", function () { dlg.close(); }); });
    dlg.addEventListener("click", function (e) { if (e.target === dlg) dlg.close(); });
    dlg.addEventListener("close", function () {
      demo.pause();
      dialogOpen = false;
      syncAll();
    });
  }

  /* ---------- 8. 进场动效：默认可见；只有 JS 在且没开减弱动效时，才把视口下方的内容做成淡入 ---------- */
  var rvs = $$(".rv");
  if (!reduce && "IntersectionObserver" in window && rvs.length) {
    var vh = window.innerHeight || document.documentElement.clientHeight;
    var rio = new IntersectionObserver(function (entries) {
      entries.forEach(function (en) {
        if (en.isIntersecting) { en.target.classList.add("in"); rio.unobserve(en.target); }
      });
    }, { rootMargin: "0px 0px -8% 0px", threshold: 0.06 });
    rvs.forEach(function (el) {
      if (el.getBoundingClientRect().top < vh * 0.94) el.classList.add("in");
      else rio.observe(el);
    });
    root.classList.add("anim");
    window.addEventListener("beforeprint", function () { rvs.forEach(function (el) { el.classList.add("in"); }); });
  } else {
    rvs.forEach(function (el) { el.classList.add("in"); });
  }

  /* ---------- 9. Star 数和版本号：api.github.com 实时拉，缓存 30 分钟；拉不到就保留页面里的静态值 ---------- */
  function paint(info) {
    if (!info) return;
    if (typeof info.stars === "number") {
      var n = info.stars;
      var txt = n >= 1000 ? (Math.round(n / 100) / 10).toFixed(1).replace(/\.0$/, "") + "k" : String(n);
      $$("[data-brew-stars]").forEach(function (el) { el.textContent = txt; });
    }
    if (typeof info.ver === "string" && /^v?\d+\.\d+/.test(info.ver)) {
      $$("[data-brew-version]").forEach(function (el) { el.textContent = info.ver.charAt(0) === "v" ? info.ver : "v" + info.ver; });
    }
  }
  (function () {
    var cached = null;
    try { cached = JSON.parse(load(GH_KEY) || "null"); } catch (e) {}
    if (cached && Date.now() - cached.t < 30 * 60 * 1000) { paint(cached); return; }
    if (!window.fetch) return;
    var api = "https://api.github.com/repos/" + REPO;
    var get = function (url) {
      return fetch(url, { headers: { Accept: "application/vnd.github+json" } })
        .then(function (r) { return r.ok ? r.json() : null; })
        .catch(function () { return null; });
    };
    Promise.all([get(api), get(api + "/releases/latest")]).then(function (res) {
      var info = { t: Date.now() };
      if (res[0] && typeof res[0].stargazers_count === "number") info.stars = res[0].stargazers_count;
      if (res[1] && typeof res[1].tag_name === "string") info.ver = res[1].tag_name;
      if (info.stars == null && info.ver == null) return;
      paint(info);
      save(GH_KEY, JSON.stringify(info));
    });
  })();

  /* ---------- 启动 ---------- */
  if (initial === "en") applyLang("en");
  else hooks.forEach(function (fn) { fn(); });
  root.classList.remove("i18n-pending");
})();
