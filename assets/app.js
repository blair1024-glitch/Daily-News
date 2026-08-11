/* Blair Market Dashboard — renderer
   Reads window.DASHBOARD (data/dashboard.js) and paints the page.
   No dependencies, no network calls. */
(function () {
  "use strict";

  var D = window.DASHBOARD;
  if (!D) {
    document.getElementById("hero-sub").textContent = "⚠️ 找不到 data/dashboard.js 資料檔";
    return;
  }

  // ---- helpers ------------------------------------------------------------
  function el(id) { return document.getElementById(id); }
  function esc(s) {
    return String(s == null ? "" : s).replace(/[&<>"']/g, function (c) {
      return { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c];
    });
  }
  function sigClass(s) { return "s-" + (s === "g" || s === "y" || s === "r" ? s : "y"); }
  function sigDot(s) { return { g: "🟢", y: "🟡", r: "🔴" }[s] || "⚪"; }
  function html(node, markup) { if (node) node.innerHTML = markup; }

  // ---- theme --------------------------------------------------------------
  var root = document.documentElement;
  var saved = null;
  try { saved = localStorage.getItem("bmd-theme"); } catch (e) { /* private mode */ }
  if (saved === "light" || saved === "dark") root.setAttribute("data-theme", saved);

  el("theme-btn").addEventListener("click", function () {
    var next = root.getAttribute("data-theme") === "light" ? "dark" : "light";
    root.setAttribute("data-theme", next);
    try { localStorage.setItem("bmd-theme", next); } catch (e) { /* ignore */ }
  });

  // ---- header / hero ------------------------------------------------------
  var m = D.meta || {};
  el("brand-ver").textContent = m.version || "";
  el("stamp").textContent = [m.date, m.time, m.timezone].filter(Boolean).join("｜");
  el("hero-sub").textContent =
    [m.date, m.timezone + " " + (m.time || ""), "Dashboard " + (m.version || "")]
      .filter(Boolean).join("　·　");
  document.title = "Blair Market Dashboard " + (m.version || "") + "｜" + (m.date || "");

  // ---- countdown ----------------------------------------------------------
  (function countdown() {
    var c = m.countdown;
    if (!c || !c.target) return;
    var target = new Date(c.target).getTime();
    if (isNaN(target)) return;

    var box = el("countdown");
    box.hidden = false;
    el("cd-label").textContent = c.label || "下一個關鍵事件";
    el("cd-note").textContent = c.note || "";

    var units = [["日", 864e5], ["時", 36e5], ["分", 6e4], ["秒", 1e3]];
    var clock = el("cd-clock");

    function tick() {
      var diff = target - Date.now();
      if (diff <= 0) {
        clock.innerHTML = '<div class="cd-unit"><div class="cd-num">已公布</div>' +
                          '<div class="cd-tag">RELEASED</div></div>';
        return;
      }
      var out = "", rest = diff;
      for (var i = 0; i < units.length; i++) {
        var v = Math.floor(rest / units[i][1]);
        rest -= v * units[i][1];
        out += '<div class="cd-unit"><div class="cd-num">' + String(v).padStart(2, "0") +
               '</div><div class="cd-tag">' + units[i][0] + "</div></div>";
      }
      clock.innerHTML = out;
      requestAnimationFrame(function () { setTimeout(tick, 1000); });
    }
    tick();
  })();

  // ---- 🚦 verdict ---------------------------------------------------------
  html(el("verdict-grid"), (D.verdict || []).map(function (v) {
    return '<div class="chip ' + sigClass(v.signal) + '">' +
             '<span class="dot"></span>' +
             '<span class="chip-label">' + esc(v.label) + "</span>" +
             '<span class="chip-state">' + esc(v.state) + "</span>" +
           "</div>";
  }).join(""));

  // ---- ① global -----------------------------------------------------------
  var g = D.global || {};
  html(el("global-rows"), (g.rows || []).map(function (r) {
    return "<tr><td>" + esc(r.name) + '</td><td class="num">' + esc(r.value) +
           '</td><td class="sig">' + sigDot(r.signal) + "</td></tr>";
  }).join(""));
  html(el("global-notes"), (g.notes || []).map(function (n) {
    return '<p class="note">' + esc(n) + "</p>";
  }).join(""));

  // ---- ② Fed --------------------------------------------------------------
  var f = D.fed || {};
  el("fed-headline").textContent = f.headline || "";
  html(el("fed-stats"), (f.stats || []).map(function (s) {
    return '<div class="stat ' + sigClass(s.signal) + '">' +
             '<div class="stat-label">' + esc(s.label) + "</div>" +
             '<div class="stat-value">' + esc(s.value) + "</div>" +
           "</div>";
  }).join(""));
  if (f.shift) {
    html(el("fed-shift"),
      '<div class="shift-box"><div class="t">之前市場擔心</div><div class="v">' +
        esc(f.shift.before) + "</div></div>" +
      '<div class="shift-arrow">→</div>' +
      '<div class="shift-box"><div class="t">現在變成</div><div class="v">' +
        esc(f.shift.after) + "</div></div>");
  }
  if (f.probability) {
    html(el("fed-prob"),
      '<span class="lbl">' + esc(f.probability.label) + "</span>" +
      '<span class="from">' + esc(f.probability.from) + "</span>" +
      '<span class="lbl">→</span>' +
      '<span class="to">' + esc(f.probability.to) + "</span>");
  }
  el("fed-foot").textContent = f.footnote || "";

  // ---- ③ CPI --------------------------------------------------------------
  var c = D.cpi || {};
  el("cpi-title").textContent = "🔥 " + (c.title || "CPI");
  html(el("cpi-release"),
    '<div class="stat s-y"><div class="stat-label">美國時間</div>' +
      '<div class="stat-value" style="font-size:1rem">' + esc(c.releaseUS) + "</div></div>" +
    '<div class="stat s-r"><div class="stat-label">台灣時間</div>' +
      '<div class="stat-value" style="font-size:1rem">' + esc(c.releaseTW) + "</div></div>");
  html(el("cpi-exp"), (c.expectations || []).map(function (e) {
    return "<tr><td>" + esc(e.name) + '</td><td class="num">' + esc(e.value) + "</td></tr>";
  }).join(""));
  html(el("cpi-fear"), "<strong>⚠️ 真正的風險：</strong>" + esc(c.fear));
  html(el("cpi-scen"), (c.scenarios || []).map(function (s) {
    return '<tr><td class="num" style="text-align:left">' + esc(s.result) + "</td>" +
           "<td>" + sigDot(s.fedSignal) + " " + esc(s.fed) + "</td>" +
           '<td class="sig"><span class="badge ' + sigClass(s.techSignal) + '">' +
             esc(s.tech) + "</span></td></tr>";
  }).join(""));
  html(el("cpi-conc"), "<strong>結論：</strong>" + esc(c.conclusion));

  // ---- ④ JPY --------------------------------------------------------------
  var j = D.jpy || {};
  el("jpy-level").textContent = j.level || "";
  el("jpy-bg").textContent = j.background || "";
  html(el("jpy-key"), "<strong>🚨 " + esc(j.keyLevel) + "</strong>");
  html(el("jpy-branches"), (j.branches || []).map(function (b) {
    return '<div class="branch ' + sigClass(b.signal) + '">' +
             "<h4>" + esc(b.condition) + "</h4><ul>" +
             (b.items || []).map(function (i) { return "<li>" + esc(i) + "</li>"; }).join("") +
             "</ul></div>";
  }).join(""));
  html(el("jpy-conc"), "<strong>所以：</strong>" + esc(j.conclusion));

  // ---- ⑤ CSP --------------------------------------------------------------
  var cs = D.csp || {};
  html(el("csp-rows"), (cs.rows || []).map(function (r) {
    return "<tr><td><strong>" + esc(r.company) + "</strong></td><td>" + esc(r.result) +
           '</td><td class="sig">' + esc(r.ai) + "</td></tr>";
  }).join(""));
  if (cs.capex) {
    html(el("csp-capex"),
      '<h3 style="font-size:1rem;margin-bottom:12px">' + esc(cs.capex.title) + "</h3>" +
      '<div class="shift">' +
        '<div class="shift-box"><div class="t">2025</div><div class="v">' +
          esc(cs.capex.from) + "</div></div>" +
        '<div class="shift-arrow">→</div>' +
        '<div class="shift-box s-g" style="border-left:3px solid var(--green)">' +
          '<div class="t">2026 (E)</div><div class="v">' + esc(cs.capex.to) + "</div></div>" +
      "</div>");
  }
  if (cs.takeaway) {
    html(el("csp-take"),
      '<div class="callout s-y"><strong>還沒看到：</strong>' + esc(cs.takeaway.not) + "</div>" +
      '<div class="callout s-g"><strong>反而看到：</strong>' + esc(cs.takeaway.but) + "</div>" +
      '<div class="callout s-g"><strong>結論：</strong>' + esc(cs.takeaway.conclusion) + "</div>");
  }

  // ---- ⑥ NVIDIA -----------------------------------------------------------
  var n = D.nvidia || {};
  el("nv-event").textContent = n.event || "";
  el("nv-sub").textContent = n.subtitle || "";
  html(el("nv-watch"), (n.watch || []).map(function (w, i) {
    return '<li><span class="idx">' + (i + 1) + "</span>" + esc(w) + "</li>";
  }).join(""));
  el("nv-note").textContent = n.note || "";

  // ---- ⑦ TAIEX ------------------------------------------------------------
  var t = D.taiex || {};
  el("tw-close").textContent = t.close || "";
  el("tw-delta").textContent = [t.change, t.changePct].filter(Boolean).join("　");
  el("tw-meta").textContent = [t.date, "成交 " + (t.turnover || "")].filter(Boolean).join("　·　");
  el("tw-note").textContent = t.note || "";

  // ---- ⑧ futures ----------------------------------------------------------
  var fu = D.futures || {};
  html(el("fut-stats"),
    '<div class="stat s-g"><div class="stat-label">現貨 TAIEX</div>' +
      '<div class="stat-value">' + esc(fu.spot) + "</div></div>" +
    '<div class="stat s-y"><div class="stat-label">' + esc(fu.month || "台指期") + "</div>" +
      '<div class="stat-value">' + esc(fu.future) + "</div></div>" +
    '<div class="stat s-r"><div class="stat-label">基差</div>' +
      '<div class="stat-value" style="font-size:1.05rem">' + esc(fu.basis) + "</div></div>");
  html(el("fut-note"), "<strong>🚨 觀察重點：</strong>" + esc(fu.note));

  // ---- ⑨ calendar ---------------------------------------------------------
  function calRows(list) {
    return (list || []).map(function (e) {
      return '<div class="cal-item' + (e.hot ? " hot" : "") + '">' +
               '<span class="cal-date">' + esc(e.date) + "</span>" +
               '<span class="cal-event">' + esc(e.event) + "</span></div>";
    }).join("");
  }
  var cal = D.calendar || {};
  html(el("cal-1"), calRows(cal.tier1));
  html(el("cal-2"), calRows(cal.tier2));

  // ---- ⑩ risks ------------------------------------------------------------
  html(el("risk-list"), (D.risks || []).map(function (r) {
    return '<div class="branch ' + sigClass(r.signal) + '">' +
             "<h4>" + esc(r.n) + " " + esc(r.name) + " " + sigDot(r.signal) + "</h4>" +
             '<p class="note" style="margin-top:4px">' + esc(r.desc) + "</p></div>";
  }).join(""));

  // ---- 🎯 scores ----------------------------------------------------------
  var sc = D.scores || {};
  var rows = (sc.items || []).map(function (s) {
    return '<div class="score-row ' + sigClass(s.signal) + '">' +
             '<div class="score-name">' + esc(s.name) + "</div>" +
             '<div class="score-track"><div class="score-fill" data-w="' +
               (Number(s.score) * 10) + '"></div></div>' +
             '<div class="score-val">' + esc(s.score) + "</div>" +
             '<div class="score-note">' + esc(s.note || "") + "</div>" +
           "</div>";
  });
  if (sc.overall) {
    rows.push('<div class="score-row overall ' + sigClass(sc.overall.signal) + '">' +
      '<div class="score-name">⚠️ ' + esc(sc.overall.name) + "</div>" +
      '<div class="score-track"><div class="score-fill" data-w="' +
        (Number(sc.overall.score) * 10) + '"></div></div>' +
      '<div class="score-val">' + esc(sc.overall.score) + "</div>" +
      '<div class="score-note"></div></div>');
  }
  html(el("score-list"), rows.join(""));
  html(el("score-summary"), (sc.summary || []).map(function (p) {
    return "<p>" + esc(p) + "</p>";
  }).join(""));

  // animate the bars in once they exist
  requestAnimationFrame(function () {
    var bars = document.querySelectorAll(".score-fill");
    for (var i = 0; i < bars.length; i++) bars[i].style.width = bars[i].dataset.w + "%";
  });

  // ---- 👀 watchlist -------------------------------------------------------
  html(el("watch-list"), (D.watchlist || []).map(function (w, i) {
    return '<li><span class="idx">' + (i + 1) + "</span>" + esc(w) + "</li>";
  }).join(""));

  // ---- 📚 sources ---------------------------------------------------------
  html(el("source-list"), (D.sources || []).map(function (s, i) {
    return '<li><span class="n">[' + (i + 1) + ']</span>' +
           '<a href="' + esc(s.url) + '" target="_blank" rel="noopener noreferrer">' +
             esc(s.label) + "</a></li>";
  }).join(""));

  // ---- TOC active-section highlight ---------------------------------------
  var links = Array.prototype.slice.call(document.querySelectorAll(".toc a"));
  if (links.length && "IntersectionObserver" in window) {
    var byId = {};
    links.forEach(function (a) { byId[a.getAttribute("href").slice(1)] = a; });
    var obs = new IntersectionObserver(function (entries) {
      entries.forEach(function (e) {
        var a = byId[e.target.id];
        if (a && e.isIntersecting) {
          links.forEach(function (x) { x.classList.remove("active"); });
          a.classList.add("active");
        }
      });
    }, { rootMargin: "-70px 0px -70% 0px" });
    Object.keys(byId).forEach(function (id) {
      var sec = document.getElementById(id);
      if (sec) obs.observe(sec);
    });
  }
})();
