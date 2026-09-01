# 📊 Blair Market Dashboard

每天早上一頁看完：**已發生 → 市場現在怎麼解讀 → 接下來什麼最重要。**

純靜態網站，沒有任何相依套件、沒有 build 步驟。所有內容都由**一個資料檔**驅動，
每天只要改 `data/dashboard.js` 就完成當日更新。

---

## 🚀 上線（GitHub Pages）

1. 進到這個 repo 的 **Settings → Pages**
2. **Source** 選 `Deploy from a branch`
3. **Branch** 選 `main`（或你要發布的分支）、資料夾選 `/ (root)`
4. 按 Save，等 1～2 分鐘

網址會是：

```
https://<你的帳號>.github.io/Daily-News/
```

---

## 📁 檔案結構

```
.
├── index.html            # 每日總表：版面骨架（章節、標題、掛載點）
├── stock/
│   └── 3535.html         # 個股頁：晶彩科解套試算
├── assets/
│   ├── style.css         # 樣式與設計 token（深／淺色主題）— 兩頁共用
│   ├── app.js            # 讀 data/dashboard.js 並渲染總表
│   └── stock.js          # 讀 data/stock-3535.js 並渲染個股頁 ＋ 試算器
├── data/
│   ├── dashboard.js      # ★ 每天只要改這一個檔案 ★
│   ├── market-auto.js    # Actions 自動抓的台股數字（勿手動改）
│   ├── market-global.js  # Actions 自動抓的國際行情（勿手動改）
│   └── stock-3535.js     # 個股頁的所有數字
├── scripts/
│   ├── fetch-tw-market.mjs      # 台股抓數（TWSE／TPEx／TAIFEX／MIS）
│   ├── fetch-global-market.mjs  # 國際行情（Yahoo Finance／Stooq）
│   └── probe-otc-index.mjs      # 櫃買指數端點探測（僅手動觸發）
├── .github/workflows/
│   ├── fetch-tw-market.yml   # 19:00 抓當日 ＋ 隔天 07:00 補抓
│   └── probe-otc-index.yml   # 端點探測，不寫資料檔
└── README.md
```

> 資料刻意存成 `.js`（`window.DASHBOARD = {...}`）而不是 `.json`，
> 這樣直接用瀏覽器打開本機的 `index.html` 也能正常顯示，不會被 CORS 擋住。

> `app.js` 與 `stock.js` 不互通：`app.js` 綁的是總表專屬的 DOM id，
> 個股頁若載入它會直接報錯。新增個股頁請複製 `stock.js` 的架構，不要沿用 `app.js`。

---

## 🤖 資料從哪來

這個專案有**兩條**資料管道，分工明確：

```
GitHub Actions（機器）          每日 Claude session（判斷）
  19:00 抓當日、07:00 補抓        每天 07:32 台灣時間
  台股：TWSE／TPEx／TAIFEX  ──▶   讀 market-auto.js
  國際：Yahoo Finance／Stooq       ＋ 讀 market-global.js
  commit 進 main                  ＋ WebSearch 補新聞與事件
                                  寫 data/dashboard.js
```

**為什麼要分兩條？** 產生 dashboard 的 Claude session 執行在有出網限制的環境裡，
`twse.com.tw`、`tpex.org.tw`、`taifex.com.tw` 全部被 egress proxy 擋掉（403），
所以只存在於交易所表格裡的數字（融資融券、櫃買指數、台指期基差）搜尋不到。
GitHub Actions 的 runner 沒有這個限制，由它負責抓數。

| 檔案 | 誰寫 | 內容 |
| --- | --- | --- |
| `data/market-auto.js` | GitHub Actions | 台股交易所原始數字，**請勿手動編輯** |
| `data/market-global.js` | GitHub Actions | 國際行情原始數字，**請勿手動編輯** |
| `data/dashboard.js` | 每日 Claude session / 你 | 經過整理與判斷的網站內容 |

`market-auto.js` 不會被 `index.html` 載入，它只是給更新流程讀的中繼檔。
每個欄位都帶 `ok` 狀態，抓不到時是 `ok: false` 加 `error` 說明——
**絕不會沿用舊值或推估**，據實標註是這個專案的基本原則。

### 日期語意：收盤價 vs 盤中價

`market-global.js` 每個標的的 `value` 裡：

| 欄位 | 意義 |
| --- | --- |
| `close` / `change` / `changePct` | **最後一根已收盤日線**，dashboard 一律引用這組 |
| `asOf` | 上面那個收盤價的日期（YYYY-MM-DD，交易所當地時區） |
| `live` | `true` = 抓取當下該市場正在交易 |
| `latest` / `quotePrice` | 最後一根（`live` 時為盤中價）——**不可當收盤價用** |
| `series` | 最近 6 根日線，供交叉驗證 |

這一組語意是 8/24 修過的。第一版用 `meta.chartPreviousClose` 算漲跌，
搭配 `range=5d` 等於拿「5 天前」的收盤，S&P 500 因此顯示 −1.43%（那是週變動，
日變動其實是 +0.43%）；`close` 用 `meta.regularMarketPrice`，盤中會拿到即時價，
TAIEX 一度抓到 44,987.11，而 8/21 的收盤是 45,224.29。
現在改讀 `timestamp` / `indicators.quote[0].close` 日線陣列相鄰兩根相減，
並以 `currentTradingPeriod` 判斷最後一根是否未收盤。

`items.taiex` 是刻意放進去的**交叉驗證欄**：它應與 `market-auto.js` 的
`dailyMarket.value.taiexClose` 一致（前提是同一個交易日）。不一致代表某一條管道有問題。

**`live` 是怎麼判的。** 最後一根日線是否還在累積，依序看三件事：日期比交易所當地的
今天新 → 剛開的次日 K 棒（live）；比今天舊 → 收定了；就是今天 → 才看本盤收了沒。
「本盤收了沒」兩道判準取其一：今天的 `currentTradingPeriod.regular.end` 已過（可捕捉
提早收盤），或當地時間已過 `SETTLE_HOUR`（17:00）。

第二道是必要的退路：24 小時商品（黃金、原油、DXY）回報的 `end` 不可靠——有的指向
**次日**，有的就在當天卻遠在傍晚之後。8/25 那次執行因此讓殖利率、DXY、WTI、Brent、
黃金六項的 `settled` 全部落後一天。加上 `SETTLE_HOUR` 後 15 項全部回到當日。
每個標的都會印一行 `⌚ tz=… 當地=… 末根=… tp.end=… live=…` 的診斷到 Actions log，
日期若再跳掉可直接定位。

**期貨與匯率標的一律退用前一根日線。** `dxy`／`wti`／`brent`／`gold`／`usdjpy`／
`usdcny`／`usdtwd` 在 TARGETS 裡帶 `lastBarUnreliable: true`，`live` 直接設為 true，`settled` 因此取倒數第二根。原因是 CME
能量與金屬合約的日線在本專案的兩個抓取時點都還沒定案：8/26 早上抓到的「8/25 收盤」
WTI 是 80.97，隔天同一根 K 棒已變成 82.36（Brent 85.86 → 88.58、黃金 4,724.70 →
4,638.10）。代價是這幾項的 `asOf` 會比其他標的落後一個交易日——**引用時務必照著
`asOf` 標日期**，不要跟美股放在同一個日期下。

> 這個問題一度被我誤判為「連續合約換月造成序列位移」。實際不是：每次抓取裡的
> **前一根** K 棒都與後續序列吻合，錯的只有最後一根。判斷方法很簡單——用
> `close - change` 推回前收，再跟隔天序列裡同一天的值對照，吻合就不是換月問題。

### ✅ 已關閉：櫃買 OTC 指數點位

這是本專案最久的資料缺口，2026/09/01 關閉。

**為什麼卡這麼久**：櫃買中心的 OpenAPI 目錄頁是 JS 渲染的、`swagger.json` 回 520、
猜的資料集名稱與新舊網站 AJAX 路徑全部回 404 頁（HTTP 200 但內容是 HTML）。
Yahoo 的 `^TWOII` 更危險——它認得代號、回一個量級看似正確的報價 269.45，
但 `regularMarketTime` 停在 **2024-10-12**，是死報價，而且**與真實水準差約 35%**
（8/31 實際約 401.70）。這一項靠 `MAX_STALE_DAYS` 的過期檢查擋著。

**解法**：走**證交所的 MIS 即時資訊服務**，不走櫃買自己的網站。

```
https://mis.twse.com.tw/stock/api/getStockInfo.jsp?ex_ch=tse_t00.tw|otc_o00.tw&json=1&delay=0
```

- 櫃買指數在 MIS 的代號是 `o00`，加權指數是 `t00`
- **必須帶 `Referer`**，否則被擋；`mis.tpex.org.tw` 的同路徑只回 HTML 頁，只有
  `mis.twse.com.tw` 可用
- 欄位：`z`=最新成交價、`y`=昨收、`o`=開盤、`h`=最高、`l`=最低、`d`=資料日期
- MIS 給的是「當下這一盤」，所以要看 `d` 決定取 `z` 還是 `y`：`d` 等於要的日期就取
  `z`，等於次日就取 `y`，其他情況一律不採用、留 `null`

**同時抓 `t00` 是刻意的**：它是交叉驗證欄。`t00` 的收盤／昨收應等於 TWSE FMTQIK 的
加權指數收盤——首次驗證時兩者都是 **46,128.47**，完全相同，才敢相信同一個回應裡的
`o00`。結果寫在 `items.otcTpex.value.index`，交叉驗證值寫在 `indexCross`。

`scripts/probe-otc-index.mjs` 是找出這條路的探測腳本（打 18 個候選端點、把實際回應
印進 log），保留下來供端點改版時重跑：`.github/workflows/probe-otc-index.yml`。

### 已知限制

目前沒有已知的資料缺口。若某欄抓不到，`ok: false` 加 `error` 會據實標註。

> 📌 **為什麼國際行情也要走 Actions？** 早期版本只有台股走自動管道，
> SOX、原油、黃金、USD/JPY 全靠 WebSearch——但搜尋只讀得到新聞句子裡
> 真的寫出來的數字。S&P 500 幾乎天天有人寫，SOX 的收盤點位很少被寫進句子，
> 所以那幾項長期時有時無。改由 Actions 直接抓報價後即可穩定取得。

手動補抓某一天：

```bash
node scripts/fetch-tw-market.mjs 20260814   # 台股（可指定日期）
node scripts/fetch-global-market.mjs        # 國際行情（一律抓最新）
```

或到 GitHub 的 Actions 頁面手動觸發「抓取台股盤後數據」，可指定日期。

---

## ✍️ 每日更新流程

打開 `data/dashboard.js`，照著區塊順序更新即可。

### 1. 更新日期與倒數事件

```js
meta: {
  version: "v3.1",
  date: "2026/08/12",
  time: "08:55",
  timezone: "台灣時間",
  countdown: {
    label: "🇺🇸 7 月 CPI 公布",
    note: "台灣時間 8/12 20:30（美東 08:30）",
    target: "2026-08-12T20:30:00+08:00"   // ISO 8601，記得帶時區
  }
}
```

`countdown.target` 一過，倒數會自動變成「已公布」。指向下一個事件即可重新開始倒數。

### 2. 訊號代碼

全站統一三種訊號，任何 `signal` 欄位都只吃這三個值：

| 代碼  | 顯示 | 意義          |
| --- | -- | ----------- |
| `g` | 🟢 | 偏多／安全       |
| `y` | 🟡 | 中性／觀察       |
| `r` | 🔴 | 風險／警戒       |

### 3. 各區塊對照表

| 資料欄位        | 網站區塊              |
| ----------- | ----------------- |
| `verdict`   | 🚦 一眼結論           |
| `global`    | ① 全球市場儀表板         |
| `fed`       | ② Fed / 通膨        |
| `cpi`       | ③ CPI（含情境表）       |
| `jpy`       | ④ 日圓              |
| `csp`       | ⑤ CSP / AI CapEx  |
| `nvidia`    | ⑥ NVIDIA          |
| `taiex`     | ⑦ 台股              |
| `chips`     | ⑧ 台股籌碼面（三大法人 ＋ 融資融券） |
| `futures`   | ⑨ 台指期 / 基差        |
| `calendar`  | ⑩ 未來重要事件（兩級）      |
| `risks`     | ⑪ 四大風險            |
| `scores`    | 🎯 市場總評（分數條會自動畫）  |
| `watchlist` | 👀 明天追蹤的數字        |
| `sources`   | 📚 資料來源           |

`scores` 的 `score` 是 0～10 的數字，長條圖寬度會自動換算。

`chips.institutions` 的 `tse`／`otc` 兩欄**依字串開頭的正負號自動上色**（`+` 綠、`-` 紅），
所以買超務必寫成 `"+453.51 億"`、賣超寫成 `"-16.61 億"`，不要省略正號。

籌碼面與台指期的數字**來自 `data/market-auto.js`**，對應關係：

| dashboard 欄位 | market-auto.js 來源 |
| --- | --- |
| `chips.institutions` | `items.instTwse.value`（`foreign` / `investmentTrust` / `dealer` / `total`） |
| `chips.margin.rows` | `items.marginTwse.value.financingAmountYi` 與 `shortSellingUnits` |
| `futures.future` | `items.txfTaifex.value.close` |
| `futures.basis` | `txfTaifex.value.close − dailyMarket.value.taiexClose` |
| `taiex.turnover` | `items.dailyMarket.value.turnoverYi` |
| 櫃買指數點位 | `items.otcTpex.value.index.close`（來源 MIS `otc_o00.tw`） |
| 櫃買成交金額 | `items.otcTpex.value.turnoverYi` |

抄之前先確認 `instTwse.value.checksumDelta` 是 0（合計 = 分項加總）。
若某欄 `ok: false`，才寫 `"未取得"` 並在 `warning` 引述 `error`——不要沿用舊值而不標註。

內文欄位（`note`、`warning`、`global.notes`、`scores.summary` 等）支援 `**粗體**`，
renderer 會先做 HTML 逃逸再轉換，寫 markdown 是安全的。

### 4. 推上去

```bash
git add data/dashboard.js
git commit -m "dashboard: 2026/08/12 更新"
git push
```

GitHub Pages 大約 1 分鐘後自動生效。

---

## 🧮 個股頁：晶彩科 3535 解套試算

網址 `.../Daily-News/stock/3535.html`，總表右上角也有連結。

這頁的核心是一個**互動式解套試算器**：成本均價不寫死在資料檔裡，而是由你在頁面上輸入，
所有數字都在瀏覽器本機計算，不會送出任何資料。

輸入四個欄位（成本均價／持有張數／目前股價／手續費折數），頁面即時算出：

| 區塊 | 內容 |
| --- | --- |
| ① 解套試算器 | 帳面損益、報酬率、**真實解套價**、所需漲幅、需要幾根漲停、總投入成本 |
| ② 情境目標價 | 四檔目標價各自的距現價、實現損益、是否解套 |
| ③ 需要多久 | 給定月漲幅假設，回推所需月數與時點 |
| ④ 加碼攤平 | 新均價、新解套價，以及被刻意放大顯示的**新增投入金額** |
| ⑤ 基本面 | 逐月營收、EPS、本益比與估值警語 |
| ⑥ 技術面 | 52 週區間價格軸（inline SVG）＋ 關鍵價位表 |
| ⑦ 策略與風險 | 三條路線的**觸發條件**，以及五項風險 |

**真實解套價**已把台股交易成本算進去（手續費買賣各收一次、證交稅 0.3% 只在賣出收）：

```
解套價 = 成本 × (1 + 手續費率) ÷ (1 − 手續費率 − 0.003)
```

### 更新這一頁

只改 `data/stock-3535.js`：`quote` 換報價、`revenue` 加當月營收、
`valuation` 換 EPS／本益比，並把 `meta.asOf` 改成新的報價日（時間推估的起算點）。
`targets` 與 `levels` 的價位都由 52 週高低點的黃金分割算得，換報價區間時記得一併重算。

> ⚠️ 頁面上所有試算都是**數學推導**（給定輸入的必然結果），不是對股價的預測。
> 目標價、EPS 推估與月漲幅假設都只是情境。

---

## 🎨 功能

- **深／淺色主題**：跟隨系統設定，右上角按鈕可手動切換，選擇會記在 `localStorage`
- **倒數計時**：自動倒數到下一個關鍵事件（預設為 CPI 公布）
- **響應式**：手機、平板、桌機都可讀；寬表格會自己橫向捲動，頁面本身不會橫捲
- **側邊目錄**：大螢幕會出現，並自動高亮目前所在章節
- **可列印**：Ctrl/Cmd + P 會輸出乾淨版面（隱藏導覽列）
- **零相依**：沒有 CDN、沒有追蹤碼、沒有外部請求

---

## ⚠️ 免責聲明

本頁為個人市場筆記與資訊整理，**僅供參考，不構成任何投資建議**。
所有數據以各原始來源公布值為準，請自行查證。
