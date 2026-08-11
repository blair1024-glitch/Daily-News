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
├── index.html            # 版面骨架（章節、標題、掛載點）
├── assets/
│   ├── style.css         # 樣式與設計 token（深／淺色主題）
│   └── app.js            # 讀 data/dashboard.js 並渲染整頁
├── data/
│   └── dashboard.js      # ★ 每天只要改這一個檔案 ★
└── README.md
```

> 資料刻意存成 `.js`（`window.DASHBOARD = {...}`）而不是 `.json`，
> 這樣直接用瀏覽器打開本機的 `index.html` 也能正常顯示，不會被 CORS 擋住。

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
| `futures`   | ⑧ 台指期 / 基差        |
| `calendar`  | ⑨ 未來重要事件（兩級）      |
| `risks`     | ⑩ 四大風險            |
| `scores`    | 🎯 市場總評（分數條會自動畫）  |
| `watchlist` | 👀 明天追蹤的數字        |
| `sources`   | 📚 資料來源           |

`scores` 的 `score` 是 0～10 的數字，長條圖寬度會自動換算。

### 4. 推上去

```bash
git add data/dashboard.js
git commit -m "dashboard: 2026/08/12 更新"
git push
```

GitHub Pages 大約 1 分鐘後自動生效。

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
