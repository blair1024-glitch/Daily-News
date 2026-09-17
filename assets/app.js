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
  // 資料檔裡常出現 **粗體** 寫法。先做 HTML 逃逸，再把 ** 轉成 <strong>，
  // 順序不能顛倒——否則等於放行任意標記。
  function mdBold(s) {
    return esc(s).replace(/\*\*([^*]+)\*\*/g, "<strong>$1</strong>");
  }
  function setRich(node, s) { if (node) node.innerHTML = mdBold(s || ""); }
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
    return "<tr><td>" + esc(r.name) + '</td><td class="num">' + mdBold(r.value) +
           '</td><td class="sig">' + sigDot(r.signal) + "</td></tr>";
  }).join(""));
  html(el("global-notes"), (g.notes || []).map(function (n) {
    return '<p class="note">' + mdBold(n) + "</p>";
  }).join(""));

  // ---- ② Fed --------------------------------------------------------------
  var f = D.fed || {};
  el("fed-headline").textContent = f.headline || "";
  html(el("fed-stats"), (f.stats || []).map(function (s) {
    return '<div class="stat ' + sigClass(s.signal) + '">' +
             '<div class="stat-label">' + esc(s.label) + "</div>" +
             '<div class="stat-value">' + mdBold(s.value) + "</div>" +
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
      '<span class="lbl">' + mdBold(f.probability.label) + "</span>" +
      '<span class="from">' + mdBold(f.probability.from) + "</span>" +
      '<span class="lbl">→</span>' +
      '<span class="to">' + mdBold(f.probability.to) + "</span>");
  }
  setRich(el("fed-foot"), f.footnote);

  // ---- ③ CPI --------------------------------------------------------------
  var c = D.cpi || {};
  el("cpi-title").textContent = "🔥 " + (c.title || "CPI");
  html(el("cpi-release"),
    '<div class="stat s-y"><div class="stat-label">美國時間</div>' +
      '<div class="stat-value" style="font-size:1rem">' + mdBold(c.releaseUS) + "</div></div>" +
    '<div class="stat s-r"><div class="stat-label">台灣時間</div>' +
      '<div class="stat-value" style="font-size:1rem">' + mdBold(c.releaseTW) + "</div></div>");
  html(el("cpi-exp"), (c.expectations || []).map(function (e) {
    return "<tr><td>" + esc(e.name) + '</td><td class="num">' + mdBold(e.value) + "</td></tr>";
  }).join(""));
  html(el("cpi-fear"), "<strong>⚠️ 真正的風險：</strong>" + mdBold(c.fear));
  html(el("cpi-scen"), (c.scenarios || []).map(function (s) {
    return '<tr><td class="num" style="text-align:left">' + esc(s.result) + "</td>" +
           "<td>" + sigDot(s.fedSignal) + " " + mdBold(s.fed) + "</td>" +
           '<td class="sig"><span class="badge ' + sigClass(s.techSignal) + '">' +
             mdBold(s.tech) + "</span></td></tr>";
  }).join(""));
  html(el("cpi-conc"), "<strong>結論：</strong>" + mdBold(c.conclusion));

  // ---- ④ JPY --------------------------------------------------------------
  var j = D.jpy || {};
  el("jpy-level").textContent = j.level || "";
  setRich(el("jpy-bg"), j.background);
  html(el("jpy-key"), "<strong>🚨 " + esc(j.keyLevel) + "</strong>");
  html(el("jpy-branches"), (j.branches || []).map(function (b) {
    return '<div class="branch ' + sigClass(b.signal) + '">' +
             "<h4>" + esc(b.condition) + "</h4><ul>" +
             (b.items || []).map(function (i) { return "<li>" + esc(i) + "</li>"; }).join("") +
             "</ul></div>";
  }).join(""));
  html(el("jpy-conc"), "<strong>所以：</strong>" + mdBold(j.conclusion));

  // ---- ⑤ CSP --------------------------------------------------------------
  var cs = D.csp || {};
  html(el("csp-rows"), (cs.rows || []).map(function (r) {
    return "<tr><td><strong>" + esc(r.company) + "</strong></td><td>" + mdBold(r.result) +
           '</td><td class="sig">' + esc(r.ai) + "</td></tr>";
  }).join(""));
  if (cs.capex) {
    html(el("csp-capex"),
      '<h3 style="font-size:1rem;margin-bottom:12px">' + esc(cs.capex.title) + "</h3>" +
      '<div class="shift">' +
        '<div class="shift-box"><div class="t">2025</div><div class="v">' +
          mdBold(cs.capex.from) + "</div></div>" +
        '<div class="shift-arrow">→</div>' +
        '<div class="shift-box s-g" style="border-left:3px solid var(--green)">' +
          '<div class="t">2026 (E)</div><div class="v">' + mdBold(cs.capex.to) + "</div></div>" +
      "</div>");
  }
  if (cs.takeaway) {
    html(el("csp-take"),
      '<div class="callout s-y"><strong>還沒看到：</strong>' + mdBold(cs.takeaway.not) + "</div>" +
      '<div class="callout s-g"><strong>反而看到：</strong>' + mdBold(cs.takeaway.but) + "</div>" +
      '<div class="callout s-g"><strong>結論：</strong>' + mdBold(cs.takeaway.conclusion) + "</div>");
  }

  // ---- ⑥ NVIDIA -----------------------------------------------------------
  var n = D.nvidia || {};
  el("nv-event").textContent = n.event || "";
  el("nv-sub").textContent = n.subtitle || "";
  html(el("nv-watch"), (n.watch || []).map(function (w, i) {
    return '<li><span class="idx">' + (i + 1) + "</span>" + esc(w) + "</li>";
  }).join(""));
  setRich(el("nv-note"), n.note);

  // ---- ⑦ TAIEX ------------------------------------------------------------
  var t = D.taiex || {};
  el("tw-close").textContent = t.close || "";
  el("tw-delta").textContent = [t.change, t.changePct].filter(Boolean).join("　");
  el("tw-meta").textContent = [t.date, "成交 " + (t.turnover || "")].filter(Boolean).join("　·　");
  setRich(el("tw-note"), t.note);

  // ---- ⑧ chips（三大法人 / 融資融券）--------------------------------------
  var ch = D.chips || {};
  el("chips-date").textContent = ch.date || "";
  // 買賣超依數字正負自動上色：買超綠、賣超紅、取不到值則中性
  function flowCell(v) {
    var s = String(v == null ? "" : v).trim();
    var cls = /^\+/.test(s) ? "s-g" : /^-/.test(s) ? "s-r" : "";
    return '<td class="num ' + cls + '">' + esc(s) + "</td>";
  }
  html(el("chips-rows"), (ch.institutions || []).map(function (r) {
    var strong = /合計/.test(r.name);
    return "<tr>" +
      "<td>" + (strong ? "<strong>" + esc(r.name) + "</strong>" : esc(r.name)) + "</td>" +
      flowCell(r.tse) + flowCell(r.otc) + "</tr>";
  }).join(""));
  setRich(el("chips-note"), ch.note);

  var mg = ch.margin || {};
  el("margin-title").textContent = mg.title || "";
  html(el("margin-stats"), (mg.rows || []).map(function (r) {
    return '<div class="stat ' + sigClass(r.signal) + '">' +
             '<div class="stat-label">' + esc(r.name) + "</div>" +
             '<div class="stat-value" style="font-size:1.05rem">' + mdBold(r.value) + "</div>" +
           "</div>";
  }).join(""));
  setRich(el("margin-warning"), mg.warning);

  // ---- ⑨ futures ----------------------------------------------------------
  var fu = D.futures || {};
  html(el("fut-stats"),
    '<div class="stat s-g"><div class="stat-label">現貨 TAIEX</div>' +
      '<div class="stat-value">' + mdBold(fu.spot) + "</div></div>" +
    '<div class="stat s-y"><div class="stat-label">' + esc(fu.month || "台指期") + "</div>" +
      '<div class="stat-value">' + mdBold(fu.future) + "</div></div>" +
    '<div class="stat s-r"><div class="stat-label">基差</div>' +
      '<div class="stat-value" style="font-size:1.05rem">' + mdBold(fu.basis) + "</div></div>");
  html(el("fut-note"), mdBold(fu.note));

  // ---- ⑨ calendar ---------------------------------------------------------
  function calRows(list) {
    return (list || []).map(function (e) {
      return '<div class="cal-item' + (e.hot ? " hot" : "") + '">' +
               '<span class="cal-date">' + esc(e.date) + "</span>" +
               '<span class="cal-event">' + mdBold(e.event) + "</span></div>";
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
    return "<p>" + mdBold(p) + "</p>";
  }).join(""));

  // animate the bars in once they exist
  requestAnimationFrame(function () {
    var bars = document.querySelectorAll(".score-fill");
    for (var i = 0; i < bars.length; i++) bars[i].style.width = bars[i].dataset.w + "%";
  });

  // ---- 📉 trend（整體風險評分 × TAIEX 歷史對照）---------------------------
  (function renderTrend() {
    var RH = window.RISK_HISTORY;
    var pts = RH && RH.points ? RH.points : [];
    var section = el("trend");
    if (!pts.length) { if (section) section.hidden = true; return; }

    var last = pts[pts.length - 1];
    el("trend-hint").textContent =
      "今日 " + last.score.toFixed(1) + " " + sigDot(last.signal) + "　·　" + pts.length + " 個交易日";
    el("trend-note").textContent = RH.note || "";

    // ---- 數據表 ----
    html(el("trend-table-body"), pts.map(function (p) {
      var chgSign = p.chg >= 0 ? "+" : "";
      return "<tr>" +
        "<td>" + esc(p.date) + "</td>" +
        "<td>" + esc(p.v) + "</td>" +
        '<td class="num">' + p.score.toFixed(1) + "</td>" +
        '<td class="sig">' + sigDot(p.signal) + "</td>" +
        '<td class="num">' + Math.round(p.taiex).toLocaleString("en-US") + "</td>" +
        '<td class="num">' + chgSign + p.chg.toFixed(2) + "</td>" +
      "</tr>";
    }).join(""));

    // ---- 圖表 ----
    var PAD_L = 42, PAD_R = 12, PAD_T = 14, PAD_B = 22;

    function xScale(i, W) { return PAD_L + (i / (pts.length - 1)) * (W - PAD_L - PAD_R); }
    function buildYScale(min, max, pad, H) {
      var lo = min - pad, hi = max + pad;
      return function (v) { return PAD_T + (1 - (v - lo) / (hi - lo)) * (H - PAD_T - PAD_B); };
    }
    function niceTicks(min, max, count) {
      var span = max - min, rawStep = span / count;
      var mag = Math.pow(10, Math.floor(Math.log(rawStep) / Math.LN10));
      var norm = rawStep / mag, step;
      if (norm < 1.5) step = 1 * mag;
      else if (norm < 3) step = 2 * mag;
      else if (norm < 7) step = 5 * mag;
      else step = 10 * mag;
      var ticks = [], t = Math.ceil(min / step) * step;
      for (; t <= max + 1e-9; t += step) ticks.push(Math.round(t * 100) / 100);
      return ticks;
    }

    function renderOne(svgId, key, opts) {
      var svg = el(svgId);
      var vb = svg.getAttribute("viewBox").split(" ");
      var W = Number(vb[2]), H = Number(vb[3]);
      var vals = pts.map(function (p) { return p[key]; });
      var min = Math.min.apply(null, vals), max = Math.max.apply(null, vals);
      var padAmt = (max - min) * 0.18 || max * 0.05;
      var y = buildYScale(min, max, padAmt, H);
      var ticks = niceTicks(min - padAmt, max + padAmt, 4);
      var out = "";

      ticks.forEach(function (t) {
        var yy = y(t);
        out += '<line class="trend-grid" x1="' + PAD_L + '" y1="' + yy + '" x2="' + (W - PAD_R) + '" y2="' + yy + '"></line>';
        out += '<text class="trend-axis-label" x="' + (PAD_L - 6) + '" y="' + (yy + 3) + '" text-anchor="end">' + opts.fmtY(t) + "</text>";
      });
      out += '<line class="trend-baseline" x1="' + PAD_L + '" y1="' + (H - PAD_B) + '" x2="' + (W - PAD_R) + '" y2="' + (H - PAD_B) + '"></line>';

      pts.forEach(function (p, i) {
        if (i % 2 === 0 || i === pts.length - 1) {
          out += '<text class="trend-axis-label" x="' + xScale(i, W) + '" y="' + (H - 6) + '" text-anchor="middle">' + esc(p.date) + "</text>";
        }
      });

      var linePts = pts.map(function (p, i) { return xScale(i, W) + "," + y(p[key]); }).join(" L ");
      out += '<path class="' + opts.areaClass + '" d="M ' + xScale(0, W) + "," + (H - PAD_B) +
             " L " + linePts + " L " + xScale(pts.length - 1, W) + "," + (H - PAD_B) + ' Z"></path>';
      out += '<path class="' + opts.lineClass + '" d="M ' + linePts + '"></path>';

      pts.forEach(function (p, i) {
        var xx = xScale(i, W), yy = y(p[key]);
        var dotClass = opts.bySignal ? "trend-dot " + sigClass(p.signal) : "trend-dot-taiex";
        out += '<circle class="trend-dot-ring" cx="' + xx + '" cy="' + yy + '" r="6"></circle>';
        out += '<circle class="' + dotClass + '" cx="' + xx + '" cy="' + yy + '" r="4.2"></circle>';
      });

      var lastI = pts.length - 1;
      out += '<text class="trend-end-label" x="' + xScale(lastI, W) + '" y="' + (y(pts[lastI][key]) - 12) + '" text-anchor="end">' + opts.fmtY(pts[lastI][key]) + "</text>";

      var extI = opts.extreme === "min"
        ? pts.reduce(function (mi, p, i) { return p[key] < pts[mi][key] ? i : mi; }, 0)
        : pts.reduce(function (mi, p, i) { return p[key] > pts[mi][key] ? i : mi; }, 0);
      if (extI !== lastI) {
        var dy = opts.extreme === "min" ? -12 : 16;
        out += '<text class="trend-extreme-label" x="' + xScale(extI, W) + '" y="' + (y(pts[extI][key]) + dy) + '" text-anchor="middle">' + opts.extremeLabel + opts.fmtY(pts[extI][key]) + "</text>";
      }

      out += '<line class="trend-crosshair" id="trend-ch-' + svgId + '" x1="0" y1="' + PAD_T + '" x2="0" y2="' + (H - PAD_B) + '"></line>';
      out += '<rect class="trend-hit" id="trend-hit-' + svgId + '" x="' + PAD_L + '" y="0" width="' + (W - PAD_L - PAD_R) + '" height="' + H + '"></rect>';

      svg.innerHTML = out;
      return W;
    }

    var scoreW = renderOne("trend-svg-score", "score", {
      fmtY: function (v) { return v.toFixed(1); },
      lineClass: "trend-line-score", areaClass: "trend-area-score",
      bySignal: true, extreme: "min", extremeLabel: "波段低點 "
    });
    renderOne("trend-svg-taiex", "taiex", {
      fmtY: function (v) { return Math.round(v).toLocaleString("en-US"); },
      lineClass: "trend-line-taiex", areaClass: "trend-area-taiex",
      bySignal: false, extreme: "max", extremeLabel: "波段高點 "
    });

    // ---- 共用十字線 + tooltip ----
    var tooltip = el("trend-tooltip");
    var wrap = el("trend-wrap");
    var chScore = el("trend-ch-trend-svg-score");
    var chTaiex = el("trend-ch-trend-svg-taiex");
    var hitScore = el("trend-hit-trend-svg-score");
    var hitTaiex = el("trend-hit-trend-svg-taiex");

    function nearestIndex(clientX, hitEl, W) {
      var rect = hitEl.getBoundingClientRect();
      var plotW = W - PAD_L - PAD_R;
      var scale = plotW / rect.width;
      var localX = PAD_L + (clientX - rect.left) * scale;
      var best = 0, bestDist = Infinity;
      pts.forEach(function (_, i) {
        var dist = Math.abs(xScale(i, W) - localX);
        if (dist < bestDist) { bestDist = dist; best = i; }
      });
      return best;
    }

    function showAt(i) {
      var xx = xScale(i, scoreW);
      [chScore, chTaiex].forEach(function (ch) {
        ch.setAttribute("x1", xx); ch.setAttribute("x2", xx); ch.style.opacity = 1;
      });
      var p = pts[i];
      var chgSign = p.chg >= 0 ? "+" : "";
      html(tooltip,
        '<div class="tt-date">' + esc(p.date) + "（" + esc(p.v) + "）</div>" +
        '<div class="tt-row"><span class="tt-key ' + sigClass(p.signal) + '" style="background:var(--sig)"></span>評分' +
          '<span class="tt-val">' + p.score.toFixed(1) + "　" + sigDot(p.signal) + "</span></div>" +
        '<div class="tt-row"><span class="tt-key" style="background:var(--accent-2)"></span>TAIEX' +
          '<span class="tt-val">' + Math.round(p.taiex).toLocaleString("en-US") + "（" + chgSign + p.chg.toFixed(2) + "）</span></div>"
      );
      tooltip.style.opacity = 1;
      var svgRect = el("trend-svg-score").getBoundingClientRect();
      var wrapRect = wrap.getBoundingClientRect();
      var ratio = svgRect.width / scoreW;
      var left = xx * ratio + 12;
      if (left + 190 > wrapRect.width) left = xx * ratio - 190 - 12;
      tooltip.style.left = left + "px";
      tooltip.style.top = "0px";
    }
    function hideAll() {
      [chScore, chTaiex].forEach(function (ch) { ch.style.opacity = 0; });
      tooltip.style.opacity = 0;
    }
    [hitScore, hitTaiex].forEach(function (hit) {
      hit.addEventListener("pointermove", function (e) { showAt(nearestIndex(e.clientX, hit, scoreW)); });
      hit.addEventListener("pointerleave", hideAll);
    });
  })();

  // ---- 👀 watchlist -------------------------------------------------------
  html(el("watch-list"), (D.watchlist || []).map(function (w, i) {
    return '<li><span class="idx">' + (i + 1) + "</span>" + mdBold(w) + "</li>";
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
