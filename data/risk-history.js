/**
 * risk-history.js — 每日整體風險評分／TAIEX 收盤 歷史序列
 * ------------------------------------------------------------------
 * 每日更新流程在寫完 dashboard.js 之後，於此檔案 points 陣列尾端
 * 追加當天一筆（見 README「每日更新流程」）。不倒序、不覆寫舊資料；
 * 若當天官方數字事後更正，比照 dashboard.js 的原則在 note 裡註記，
 * 不可靜默覆蓋歷史值。
 *
 * date   : 該筆評分所依據的「資料交易日」（非發布日），格式 M/D
 * v      : 對應 dashboard.js 的 meta.version
 * score  : scores.overall.score
 * signal : scores.overall.signal（'g'/'y'/'r'）
 * taiex  : taiex.close（去除千分位的數字）
 * chg    : taiex.change（數字，含正負號意義以正負數表示）
 */
window.RISK_HISTORY = {
  note: "本站可追溯的最早版本為 v4.2（8/26 收盤），更早的版本未留存歷史資料。",
  points: [
    { date: "8/26", v: "v4.2", score: 6.5, signal: "y", taiex: 45832.62, chg: 663.16 },
    { date: "8/27", v: "v4.3", score: 6.3, signal: "y", taiex: 45975.22, chg: 142.60 },
    { date: "8/28", v: "v4.4", score: 5.0, signal: "y", taiex: 46331.45, chg: 356.23 },
    { date: "8/31", v: "v4.5", score: 4.7, signal: "r", taiex: 46128.47, chg: -202.98 },
    { date: "9/1",  v: "v4.7", score: 4.6, signal: "r", taiex: 46948.72, chg: 820.25 },
    { date: "9/2",  v: "v4.9", score: 4.6, signal: "r", taiex: 46164.72, chg: -784.00 },
    { date: "9/3",  v: "v5.0", score: 4.9, signal: "r", taiex: 45857.66, chg: -307.06 },
    { date: "9/4",  v: "v5.1", score: 5.0, signal: "r", taiex: 46551.13, chg: 693.47 },
    { date: "9/7",  v: "v5.2", score: 5.3, signal: "y", taiex: 47326.27, chg: 775.14 },
    { date: "9/8",  v: "v5.3", score: 4.9, signal: "r", taiex: 47105.78, chg: -220.49 },
    { date: "9/9",  v: "v5.4", score: 4.5, signal: "r", taiex: 47183.36, chg: 77.58 },
    { date: "9/10", v: "v5.5", score: 3.5, signal: "r", taiex: 46940.49, chg: -242.87 },
    { date: "9/11", v: "v5.6", score: 3.9, signal: "r", taiex: 46184.85, chg: -755.64 },
    { date: "9/14", v: "v5.7", score: 3.1, signal: "r", taiex: 45862.52, chg: -322.33 },
    { date: "9/15", v: "v5.8", score: 2.7, signal: "r", taiex: 45511.49, chg: -351.03 },
    { date: "9/16", v: "v5.9", score: 3.0, signal: "r", taiex: 45848.90, chg: 337.41 },
    { date: "9/17", v: "v6.0", score: 4.4, signal: "y", taiex: 46288.00, chg: 439.10 }
  ]
};
