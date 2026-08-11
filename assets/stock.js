/* 晶彩科 3535 — 個股頁 renderer + 解套試算器
   Reads window.STOCK_3535 (data/stock-3535.js) and paints the page.
   No dependencies, no network calls. 所有輸入只留在瀏覽器，不外送。

   注意：本檔不能用 assets/app.js 取代 —— app.js 綁的是 dashboard 的
   DOM（#hero-sub / #theme-btn 之外還有十多個 dashboard 專屬 id），
   且 window.DASHBOARD 不存在時會直接 return。 */
(function () {
  "use strict";

  var S = window.STOCK_3535;

  // ---- helpers ------------------------------------------------------------
  function el(id) { return document.getElementById(id); }
  function esc(s) {
    return String(s == null ? "" : s).replace(/[&<>"']/g, function (c) {
      return { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c];
    });
  }
  function html(node, markup) { if (node) node.innerHTML = markup; }
  function sigClass(s) { return (s === "g" || s === "y" || s === "r") ? "s-" + s : ""; }

  if (!S) {
    var sub = el("hero-sub");
    if (sub) sub.textContent = "⚠️ 找不到 data/stock-3535.js 資料檔";
    return;
  }

  // ---- theme (與 index.html 共用 localStorage key，兩頁主題才一致) --------
  var root = document.documentElement;
  var saved = null;
  try { saved = localStorage.getItem("bmd-theme"); } catch (e) { /* private mode */ }
  if (saved === "light" || saved === "dark") root.setAttribute("data-theme", saved);

  el("theme-btn").addEventListener("click", function () {
    var next = root.getAttribute("data-theme") === "light" ? "dark" : "light";
    root.setAttribute("data-theme", next);
    try { localStorage.setItem("bmd-theme", next); } catch (e) { /* ignore */ }
  });

  // ---- number formatting --------------------------------------------------
  function fmt(n, d) {
    if (n == null || !isFinite(n)) return "—";
    return n.toLocaleString("en-US", { minimumFractionDigits: d, maximumFractionDigits: d });
  }
  function money(n) {
    if (!isFinite(n)) return "—";
    return (n < 0 ? "−" : "") + "NT$ " + fmt(Math.abs(n), 0);
  }
  function signedMoney(n) {
    if (!isFinite(n)) return "—";
    return (n > 0 ? "+" : n < 0 ? "−" : "") + "NT$ " + fmt(Math.abs(n), 0);
  }
  function pct(n, d) {
    if (!isFinite(n)) return "—";
    return (n > 0 ? "+" : n < 0 ? "−" : "") + fmt(Math.abs(n), d == null ? 1 : d) + "%";
  }
  function tile(label, value, subtext, sig) {
    return '<div class="stat ' + sigClass(sig) + '">' +
      '<div class="stat-label">' + esc(label) + "</div>" +
      '<div class="stat-value">' + esc(value) + "</div>" +
      (subtext ? '<div class="stat-sub">' + esc(subtext) + "</div>" : "") +
      "</div>";
  }
  var EMPTY = '<div class="calc-empty">👆 先在上方輸入你的<b>成本均價</b>，這一區就會即時算出來</div>';

  var Q = S.quote, V = S.valuation, F = S.fees, M = S.meta;

  // ==========================================================================
  // 靜態區塊（不隨輸入變動）
  // ==========================================================================
  el("brand-ver").textContent = M.version || "";
  el("brand-code").textContent = M.code;
  el("stamp").textContent = [M.code, "報價 " + M.asOf].join("｜");
  el("hero-sub").textContent =
    [M.name + " " + M.code + "（" + M.market + "・" + M.industry + "）",
     "報價日 " + M.asOf, "資料整理 " + M.updated].join("　·　");
  document.title = M.name + " " + M.code + " — 解套試算";

  // ---- 目前位置 -----------------------------------------------------------
  var span52 = Q.week52High - Q.week52Low;
  var pctile = ((Q.price - Q.week52Low) / span52) * 100;

  el("quote-hint").textContent = "收盤 " + M.asOf;
  el("q-price").textContent = fmt(Q.price, 2);
  var qd = el("q-delta");
  qd.textContent = pct(Q.changePct, 2) + "（" + (Q.change > 0 ? "+" : "−") + fmt(Math.abs(Q.change), 2) + "）";
  qd.style.color = Q.change >= 0 ? "var(--green)" : "var(--red)";
  el("q-meta").textContent = "市值 " + Q.marketCap + "　約 " + fmt(Q.sharesLots, 0) + " 張";

  html(el("q-stats"), [
    tile("當日區間", fmt(Q.low, 1) + " – " + fmt(Q.high, 1), "開盤 " + fmt(Q.open, 1), null),
    tile("52 週高", fmt(Q.week52High, 1), "距現價 " + pct((Q.week52High / Q.price - 1) * 100), "r"),
    tile("52 週低", fmt(Q.week52Low, 1), "距現價 " + pct((Q.week52Low / Q.price - 1) * 100), "g"),
    tile("52 週區間分位", fmt(pctile, 1) + "%", pctile < 40 ? "位於區間下緣，屬弱勢" : "位於區間中上緣",
         pctile < 40 ? "r" : pctile < 60 ? "y" : "g")
  ].join(""));

  // ---- 基本面 -------------------------------------------------------------
  var revSum = 0, revMax = 0, revMin = Infinity;
  for (var i = 0; i < S.revenue.length; i++) {
    var v = S.revenue[i].value;
    revSum += v;
    if (v > revMax) revMax = v;
    if (v < revMin) revMin = v;
  }

  html(el("fund-stats"), [
    tile("2026 累計營收", fmt(revSum / 100, 2) + " 億", "1–" + S.revenue.length + " 月合計", "g"),
    tile("2026 Q1 EPS", fmt(V.epsQ1_2026, 2) + " 元", "季增 48%、年增 306%", "g"),
    tile("2025 全年 EPS", fmt(V.eps2025, 2) + " 元", "去年仍為虧損", "r"),
    tile("本益比 (PE)", fmt(V.pe, 1) + " 倍", "7/3 曾達 " + fmt(V.peHigh, 0) + " 倍", "r"),
    tile("每股淨值", fmt(V.bookValue, 2) + " 元", "本淨比 " + fmt(V.pb, 2) + " 倍", "r")
  ].join(""));

  html(el("rev-rows"), S.revenue.map(function (r, idx) {
    var prev = idx > 0 ? S.revenue[idx - 1].value : null;
    var mom = prev ? (r.value / prev - 1) * 100 : null;
    var momSig = mom == null ? null : (mom >= 0 ? "g" : "r");
    var w = (r.value / revMax) * 100;
    return "<tr>" +
      "<td><b>" + esc(r.month) + "</b>" +
        (r.note ? ' <span class="stat-sub">' + esc(r.note) + "</span>" : "") + "</td>" +
      '<td class="num">' + fmt(r.value, 1) + "</td>" +
      '<td class="num ' + sigClass(momSig) + '" style="color:var(--sig,var(--text))">' +
        (mom == null ? "—" : pct(mom)) + "</td>" +
      // 年增率量級落差極大（−9.3% ~ +9,447%）：小數字保留 1 位，大數字取整
      '<td class="num">' +
        (r.yoy == null ? "—" : pct(r.yoy, Math.abs(r.yoy) < 100 ? 1 : 0)) + "</td>" +
      '<td class="bar-cell ' + sigClass(momSig) + '">' +
        '<div class="score-track"><div class="score-fill" style="width:' + w.toFixed(1) + '%"></div></div>' +
      "</td>" +
      "</tr>";
  }).join(""));

  html(el("rev-warn"),
    "<strong>營收極不平滑，不能用單月 YoY 外推年度 EPS。</strong>" +
    "2026 年單月最高 " + fmt(revMax, 1) + " 百萬、最低 " + fmt(revMin, 1) + " 百萬，落差達 " +
    fmt(revMax / revMin, 1) + " 倍。這是設備出貨認列的典型型態 —— 認列時點決定當月數字，" +
    "而非需求真的在單月暴增或崩跌。動輒數千 % 的年增率，主要來自去年的極低基期。");

  // ---- 合理價矩陣 ---------------------------------------------------------
  var FV = S.fairValue;
  html(el("fv-head"),
    "<th>　</th>" + FV.peCases.map(function (pe) {
      return '<th class="num" style="text-align:right">PE ' + pe + " 倍</th>";
    }).join(""));

  // ==========================================================================
  // 互動區塊：全部由 recompute() 重畫
  // ==========================================================================
  var inCost = el("in-cost"), inLots = el("in-lots"),
      inPrice = el("in-price"), inDisc = el("in-disc"), inAdd = el("in-add");

  inPrice.value = Q.price;
  el("hint-price").textContent = M.asOf + " 收盤 " + fmt(Q.price, 2) + "，可自行覆寫";

  function readNum(node, fallback) {
    var v = parseFloat(node.value);
    return isFinite(v) ? v : fallback;
  }

  function addMonths(iso, k) {
    var parts = String(iso).split("-");
    var y = parseInt(parts[0], 10), mo = parseInt(parts[1], 10) - 1 + k;
    y += Math.floor(mo / 12);
    mo = ((mo % 12) + 12) % 12;
    return y + "-" + (mo + 1 < 10 ? "0" : "") + (mo + 1);
  }

  function tierSig(required) {          // required = 所需漲幅（小數）
    if (required <= 0) return "g";
    return required < 0.20 ? "y" : "r";
  }

  function recompute() {
    var C     = readNum(inCost, NaN);
    var N     = Math.max(0, readNum(inLots, 0));
    var P     = readNum(inPrice, Q.price);
    var disc  = Math.min(10, Math.max(1, readNum(inDisc, F.defaultDiscount)));
    var addLots = Math.max(0, readNum(inAdd, 0));

    if (!isFinite(P) || P <= 0) P = Q.price;

    // 台股交易成本：手續費買賣各收一次，證交稅 0.3% 只在賣出收
    var f = F.brokerage * (disc / 10);
    var netSell = 1 - f - F.tax;            // 賣出實收比例
    var hasCost = isFinite(C) && C > 0;

    var creal    = hasCost ? (C * (1 + f)) / netSell : NaN;   // 真實解套價
    var required = hasCost ? creal / P - 1 : NaN;             // 所需漲幅（小數）
    var freed    = hasCost && creal <= P;                     // 已解套？

    renderCalc(C, N, P, f, netSell, creal, required, freed, hasCost);
    renderTargets(C, N, P, f, netSell, creal, hasCost);
    renderTime(P, creal, required, freed, hasCost);
    renderAverage(C, N, P, addLots, f, netSell, required, hasCost);
    renderFairValue(P);
    renderAxis(C, P, hasCost);
    renderLevels(C, P, hasCost);
  }

  // ---- ① 試算器輸出 -------------------------------------------------------
  function renderCalc(C, N, P, f, netSell, creal, required, freed, hasCost) {
    var status = el("calc-status");
    if (!hasCost) {
      status.className = "calc-status";
      html(status, "👆 先輸入你的成本均價 —— 下面每一區都會即時更新");
      html(el("calc-out"), EMPTY);
      el("calc-foot").textContent = "";
      return;
    }

    var sig = tierSig(required);
    status.className = "calc-status " + sigClass(sig);
    html(status,
      (freed ? "✅ 已經解套 —— 現價高於你的真實成本" : "❌ 尚未解套 —— 還需要上漲 " + pct(required * 100)) +
      '<span class="sub">真實解套價 ' + fmt(creal, 2) + " 元　·　現價 " + fmt(P, 2) + " 元</span>");

    var shares  = N * 1000;
    var paper   = (P - C) * shares;                        // 帳面損益（未扣費用）
    var totalIn = C * (1 + f) * shares;                    // 總投入（含買進手續費）
    var realize = P * netSell * shares - totalIn;          // 現在賣出的實現損益
    var limitUps = freed ? 0 : Math.ceil(Math.log(creal / P) / Math.log(1.1));

    html(el("calc-out"), [
      tile("帳面損益", signedMoney(paper),
           "現在賣出實拿 " + signedMoney(realize), paper >= 0 ? "g" : "r"),
      tile("報酬率", pct((P / C - 1) * 100, 2),
           N > 0 ? N + " 張 ／ " + fmt(shares, 0) + " 股" : "尚未填張數", (P >= C) ? "g" : "r"),
      tile("真實解套價", fmt(creal, 2) + " 元",
           "不含費用為 " + fmt(C, 2) + " 元（費用吃掉 " + fmt(creal - C, 2) + " 元）", sig),
      tile("所需漲幅", freed ? "已達成" : pct(required * 100),
           freed ? "現價已高於解套價" : "從 " + fmt(P, 2) + " 漲到 " + fmt(creal, 2), sig),
      tile("需要幾根漲停", freed ? "0 根" : limitUps + " 根",
           "以每根 +10% 連續計算", sig),
      tile("總投入成本", money(totalIn), "含買進手續費（" + fmt(f * 100, 4) + "%）", null)
    ].join(""));

    el("calc-foot").textContent =
      "計算方式：解套價 = 成本 ×(1+手續費率) ÷ (1−手續費率−證交稅 0.3%)。" +
      "手續費率已套用你設定的折數，買賣各收一次；證交稅只在賣出時收。所有數字只在你的瀏覽器計算，不會送出。";
  }

  // ---- ② 情境目標價 -------------------------------------------------------
  function renderTargets(C, N, P, f, netSell, creal, hasCost) {
    var shares = N * 1000;
    html(el("target-rows"), S.targets.map(function (t) {
      var gap = (t.price / P - 1) * 100;
      var cell, mark;
      if (hasCost) {
        var pl = t.price * netSell * shares - C * (1 + f) * shares;
        cell = '<td class="num" style="color:' + (pl >= 0 ? "var(--green)" : "var(--red)") + '">' +
               signedMoney(pl) + "</td>";
        mark = '<td class="sig">' + (t.price >= creal ? "✅" : "❌") + "</td>";
      } else {
        cell = '<td class="num">—</td>';
        mark = '<td class="sig">—</td>';
      }
      return '<tr class="' + sigClass(t.sig) + '">' +
        "<td><b>" + esc(t.label) + "</b></td>" +
        '<td class="num">' + fmt(t.price, 1) + "</td>" +
        '<td class="num" style="color:' + (gap >= 0 ? "var(--green)" : "var(--red)") + '">' + pct(gap) + "</td>" +
        cell + mark +
        "<td>" + esc(t.basis) + "</td>" +
        "</tr>";
    }).join(""));
  }

  // ---- ③ 需要多久 ---------------------------------------------------------
  function renderTime(P, creal, required, freed, hasCost) {
    if (!hasCost) {
      html(el("time-rows"), '<tr><td colspan="4">' + EMPTY + "</td></tr>");
      return;
    }
    if (freed) {
      html(el("time-rows"),
        '<tr><td colspan="4"><div class="calc-empty">✅ 現價已在解套價之上，不需要等待</div></td></tr>');
      return;
    }
    var need = Math.log(creal / P);   // > 0
    html(el("time-rows"), S.scenarios.map(function (s) {
      var months = null;
      if (s.rate > 0) months = need / Math.log(1 + s.rate / 100);
      var monthsTxt, dateTxt;
      if (months == null) {
        monthsTxt = "不會解套";
        dateTxt = "股價持續走弱，差距只會擴大";
      } else if (months > 120) {
        monthsTxt = "> 120 個月";
        dateTxt = "超過 10 年，實質上等於不會解套";
      } else {
        monthsTxt = fmt(months, 1) + " 個月";
        dateTxt = addMonths(M.asOf, Math.ceil(months));
      }
      return '<tr class="' + sigClass(s.sig) + '">' +
        "<td><b style=\"color:var(--sig,var(--text))\">" + pct(s.rate, 0) + " / 月</b></td>" +
        "<td>" + esc(s.label) + "</td>" +
        '<td class="num">' + esc(monthsTxt) + "</td>" +
        '<td class="num">' + esc(dateTxt) + "</td>" +
        "</tr>";
    }).join(""));
  }

  // ---- ④ 加碼攤平 ---------------------------------------------------------
  function renderAverage(C, N, P, addLots, f, netSell, required, hasCost) {
    var box = el("avg-out");
    if (!hasCost) { html(box, EMPTY); return; }
    if (addLots <= 0) {
      html(box, '<div class="calc-empty">輸入要再買進的張數，看看均價會被拉到哪裡</div>');
      return;
    }

    var totalLots = N + addLots;
    var newAvg    = (C * N + P * addLots) / totalLots;
    var newCreal  = (newAvg * (1 + f)) / netSell;
    var newReq    = newCreal / P - 1;
    var addCost   = P * (1 + f) * addLots * 1000;
    var totalCost = C * (1 + f) * N * 1000 + addCost;
    var sig       = tierSig(newReq);

    html(box,
      '<div class="stats">' + [
        tile("新成本均價", fmt(newAvg, 2) + " 元", "原本 " + fmt(C, 2) + " 元", sig),
        tile("新真實解套價", fmt(newCreal, 2) + " 元", "含手續費與證交稅", sig),
        tile("新所需漲幅", newReq <= 0 ? "已達成" : pct(newReq * 100),
             "原本 " + (required <= 0 ? "已達成" : pct(required * 100)), sig),
        tile("總持有張數", fmt(totalLots, 0) + " 張", "原本 " + fmt(N, 0) + " 張", null)
      ].join("") + "</div>" +
      '<div class="callout ' + sigClass(sig) + '" style="margin-top:14px">' +
        '<div style="font-size:.82rem;color:var(--text-muted)">為了把均價從 ' + fmt(C, 2) +
          " 元降到 " + fmt(newAvg, 2) + " 元，你需要再投入</div>" +
        '<div class="emph">' + money(addCost) + "</div>" +
        '<div style="font-size:.86rem;color:var(--text-muted);margin-top:6px">' +
          "部位從 " + fmt(N, 0) + " 張變成 " + fmt(totalLots, 0) + " 張，總投入成本 " + money(totalCost) + "。" +
          "<b>攤平降低的是均價，放大的是曝險</b> —— 如果看錯方向，虧損金額也會照比例放大。</div>" +
      "</div>");
  }

  // ---- ⑤ 合理價矩陣 -------------------------------------------------------
  function renderFairValue(P) {
    html(el("fv-rows"), FV.epsCases.map(function (e) {
      return "<tr>" +
        '<th class="rowhead">' + esc(e.label) + "</th>" +
        FV.peCases.map(function (pe) {
          var fair = e.eps * pe;
          var sig = fair >= P ? "g" : "r";
          return '<td class="cell ' + sigClass(sig) + '">' + fmt(fair, 1) + "</td>";
        }).join("") +
        "</tr>";
    }).join(""));

    el("fv-note").textContent =
      "綠色 = 該情境下的合理價高於現價 " + fmt(P, 2) + " 元（有上檔空間），紅色 = 低於現價。" +
      "Q1 EPS 為 0.99 元，要撐起現價，年度 EPS 大致需落在 2.5 元且市場願意給 40 倍以上本益比。" +
      "這是情境推估，不是預測 —— 真正決定的是後續每季認列的實際數字。";
  }

  // ---- ⑥ 價格軸 (inline SVG) ---------------------------------------------
  var AX_L = 60, AX_R = 940, AX_Y = 78;
  function axX(p) {
    var t = (p - Q.week52Low) / span52;
    return AX_L + Math.min(1, Math.max(0, t)) * (AX_R - AX_L);
  }

  function renderAxis(C, P, hasCost) {
    var out = ['<line class="ax-line" x1="' + AX_L + '" y1="' + AX_Y + '" x2="' + AX_R + '" y2="' + AX_Y + '"/>'];

    // 關鍵價位刻度 + 價格標籤（軸下方）
    for (var i = 0; i < S.levels.length; i++) {
      var lv = S.levels[i], x = axX(lv.price), cls = lv.type === "s" ? "sup" : "res";
      out.push('<line class="ax-' + cls + '" x1="' + x.toFixed(1) + '" y1="' + (AX_Y - 8) +
               '" x2="' + x.toFixed(1) + '" y2="' + (AX_Y + 8) + '"/>');
      out.push('<text class="t-' + cls + '" x="' + x.toFixed(1) + '" y="' + (AX_Y + 30) + '">' +
               esc(fmt(lv.price, 1)) + "</text>");
    }

    // 現價（軸上方）
    var xn = axX(P);
    out.push('<line class="ax-now" x1="' + xn.toFixed(1) + '" y1="' + (AX_Y - 32) +
             '" x2="' + xn.toFixed(1) + '" y2="' + (AX_Y + 4) + '"/>');
    out.push('<text class="t-now" x="' + xn.toFixed(1) + '" y="' + (AX_Y - 42) + '">現價 ' +
             esc(fmt(P, 1)) + "</text>");

    // 你的成本（軸下方，虛線）
    if (hasCost) {
      var xc = axX(C);
      var off = C > Q.week52High ? " ▶" : C < Q.week52Low ? " ◀" : "";
      out.push('<line class="ax-cost" x1="' + xc.toFixed(1) + '" y1="' + (AX_Y - 4) +
               '" x2="' + xc.toFixed(1) + '" y2="' + (AX_Y + 44) + '"/>');
      out.push('<text class="t-cost" x="' + xc.toFixed(1) + '" y="' + (AX_Y + 66) + '">你的成本 ' +
               esc(fmt(C, 1) + off) + "</text>");
    }

    html(el("price-axis"), out.join(""));
  }

  // ---- ⑥ 關鍵價位表 -------------------------------------------------------
  function renderLevels(C, P, hasCost) {
    html(el("level-rows"), S.levels.map(function (lv) {
      var gap = (lv.price / P - 1) * 100;
      var sig = lv.type === "s" ? "g" : "r";
      return '<tr class="' + sigClass(sig) + '">' +
        '<td class="num">' + fmt(lv.price, 1) + "</td>" +
        '<td><span class="badge ' + sigClass(sig) + '">' +
          (lv.type === "s" ? "支撐" : "壓力") + "</span> " + esc(lv.label) + "</td>" +
        '<td class="num" style="color:' + (gap >= 0 ? "var(--green)" : "var(--red)") + '">' + pct(gap) + "</td>" +
        "<td>" + esc(lv.note) + "</td>" +
        "</tr>";
    }).join(""));

    var note = el("level-note");
    if (!hasCost) { html(note, EMPTY); return; }

    var above = null, below = null;
    for (var i = 0; i < S.levels.length; i++) {
      var p = S.levels[i].price;
      if (p > C && (above === null || p < above.price)) above = S.levels[i];
      if (p <= C && (below === null || p > below.price)) below = S.levels[i];
    }
    html(note,
      '<div class="callout ' + sigClass(above ? "y" : "r") + '">' +
        "<strong>你的成本 " + esc(fmt(C, 2)) + " 元落在哪裡：</strong>" +
        (above
          ? "上方最近的關卡是 <strong>" + esc(fmt(above.price, 1)) + "</strong> 元（" + esc(above.label) +
            "），要解套必須先突破它。"
          : "已高於所有標示的關鍵價位，包含 52 週高點 —— 這代表你買在整段區間的最上緣。") +
        (below ? "下方最近的參考位置是 " + esc(fmt(below.price, 1)) + " 元（" + esc(below.label) + "）。" : "") +
      "</div>");
  }

  // ---- ⑦ 策略與風險（靜態） ----------------------------------------------
  html(el("strategy-list"), S.strategies.map(function (s) {
    return '<div class="branch ' + sigClass(s.sig) + '">' +
      "<h4>" + esc(s.title) + "</h4>" +
      '<span class="trigger"><b>觸發條件：</b>' + esc(s.trigger) + "</span>" +
      "<ul>" + s.lines.map(function (l) { return "<li>" + esc(l) + "</li>"; }).join("") + "</ul>" +
      "</div>";
  }).join(""));

  html(el("risk-list"), S.risks.map(function (r, i) {
    return '<li><span class="idx">' + (i + 1) + "</span><span>" + esc(r) + "</span></li>";
  }).join(""));

  html(el("source-list"), S.sources.map(function (s, i) {
    return '<li><span class="n">' + (i + 1) + '.</span><a href="' + esc(s.url) +
      '" target="_blank" rel="noopener noreferrer">' + esc(s.label) + "</a></li>";
  }).join(""));

  // ---- 綁定 ---------------------------------------------------------------
  var inputs = [inCost, inLots, inPrice, inDisc, inAdd];
  for (var k = 0; k < inputs.length; k++) {
    inputs[k].addEventListener("input", recompute);
  }
  recompute();

  // ---- TOC 高亮（沿用 dashboard 的作法） ---------------------------------
  if (window.IntersectionObserver) {
    var links = {};
    var anchors = document.querySelectorAll(".toc a");
    for (var a = 0; a < anchors.length; a++) {
      links[anchors[a].getAttribute("href").slice(1)] = anchors[a];
    }
    var obs = new IntersectionObserver(function (entries) {
      for (var e = 0; e < entries.length; e++) {
        var link = links[entries[e].target.id];
        if (link && entries[e].isIntersecting) {
          for (var key in links) { if (links[key]) links[key].classList.remove("active"); }
          link.classList.add("active");
        }
      }
    }, { rootMargin: "-70px 0px -70% 0px" });
    var secs = document.querySelectorAll("section.block");
    for (var s2 = 0; s2 < secs.length; s2++) obs.observe(secs[s2]);
  }
})();
