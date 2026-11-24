/**
 * market-global.js — 由 GitHub Actions 自動產生，請勿手動編輯。
 * 產生器：scripts/fetch-global-market.mjs
 *
 * 國際行情中繼資料，供每日 dashboard 更新流程讀用，不會被 index.html 載入。
 * ok:false 代表該標的當次抓不到，error 說明原因——請據實標註，不要沿用舊值。
 */
window.MARKET_GLOBAL = {
  "fetchedAt": "2026-11-24T06:47:07.147Z",
  "okCount": 16,
  "totalCount": 16,
  "items": {
    "sox": {
      "ok": true,
      "label": "費城半導體 SOX",
      "symbol": "%5ESOX",
      "value": {
        "close": 9588.0498,
        "prevClose": 8408.5898,
        "change": 1179.46,
        "changePct": 14.03,
        "asOf": "2026-11-23",
        "prevAsOf": "2026-11-20",
        "gapDays": 3,
        "gapSuspect": false,
        "live": false,
        "latest": {
          "date": "2026-11-23",
          "close": 9588.0498,
          "prevDate": "2026-11-20",
          "prevClose": 8408.5898,
          "change": 1179.46,
          "changePct": 14.03,
          "gapDays": 3,
          "gapSuspect": false
        },
        "settled": {
          "date": "2026-11-23",
          "close": 9588.0498,
          "prevDate": "2026-11-20",
          "prevClose": 8408.5898,
          "change": 1179.46,
          "changePct": 14.03,
          "gapDays": 3,
          "gapSuspect": false
        },
        "quotePrice": 9588.05,
        "series": [
          {
            "date": "2026-11-16",
            "close": 9610.6504
          },
          {
            "date": "2026-11-17",
            "close": 9642.8799
          },
          {
            "date": "2026-11-18",
            "close": 9652.7998
          },
          {
            "date": "2026-11-19",
            "close": 9419.7197
          },
          {
            "date": "2026-11-20",
            "close": 8408.5898
          },
          {
            "date": "2026-11-23",
            "close": 9588.0498
          }
        ],
        "currency": "USD",
        "timezone": "America/New_York",
        "source": "Yahoo Finance chart API（日線）"
      }
    },
    "vix": {
      "ok": true,
      "label": "VIX",
      "symbol": "%5EVIX",
      "value": {
        "close": 26.62,
        "prevClose": 35.89,
        "change": -9.27,
        "changePct": -25.83,
        "asOf": "2026-11-23",
        "prevAsOf": "2026-11-20",
        "gapDays": 3,
        "gapSuspect": false,
        "live": false,
        "latest": {
          "date": "2026-11-23",
          "close": 26.62,
          "prevDate": "2026-11-20",
          "prevClose": 35.89,
          "change": -9.27,
          "changePct": -25.83,
          "gapDays": 3,
          "gapSuspect": false
        },
        "settled": {
          "date": "2026-11-23",
          "close": 26.62,
          "prevDate": "2026-11-20",
          "prevClose": 35.89,
          "change": -9.27,
          "changePct": -25.83,
          "gapDays": 3,
          "gapSuspect": false
        },
        "quotePrice": 26.62,
        "series": [
          {
            "date": "2026-11-16",
            "close": 22.91
          },
          {
            "date": "2026-11-17",
            "close": 25.46
          },
          {
            "date": "2026-11-18",
            "close": 24.56
          },
          {
            "date": "2026-11-19",
            "close": 28.44
          },
          {
            "date": "2026-11-20",
            "close": 35.89
          },
          {
            "date": "2026-11-23",
            "close": 26.62
          }
        ],
        "currency": "USD",
        "timezone": "America/Chicago",
        "source": "Yahoo Finance chart API（日線）"
      }
    },
    "spx": {
      "ok": true,
      "label": "S&P 500",
      "symbol": "%5EGSPC",
      "value": {
        "close": 7237.1699,
        "prevClose": 6910.3901,
        "change": 326.7798,
        "changePct": 4.73,
        "asOf": "2026-11-23",
        "prevAsOf": "2026-11-20",
        "gapDays": 3,
        "gapSuspect": false,
        "live": false,
        "latest": {
          "date": "2026-11-23",
          "close": 7237.1699,
          "prevDate": "2026-11-20",
          "prevClose": 6910.3901,
          "change": 326.7798,
          "changePct": 4.73,
          "gapDays": 3,
          "gapSuspect": false
        },
        "settled": {
          "date": "2026-11-23",
          "close": 7237.1699,
          "prevDate": "2026-11-20",
          "prevClose": 6910.3901,
          "change": 326.7798,
          "changePct": 4.73,
          "gapDays": 3,
          "gapSuspect": false
        },
        "quotePrice": 7237.17,
        "series": [
          {
            "date": "2026-11-16",
            "close": 7416.5898
          },
          {
            "date": "2026-11-17",
            "close": 7340.5298
          },
          {
            "date": "2026-11-18",
            "close": 7323.6299
          },
          {
            "date": "2026-11-19",
            "close": 7175.8301
          },
          {
            "date": "2026-11-20",
            "close": 6910.3901
          },
          {
            "date": "2026-11-23",
            "close": 7237.1699
          }
        ],
        "currency": "USD",
        "timezone": "America/New_York",
        "source": "Yahoo Finance chart API（日線）"
      }
    },
    "ndx": {
      "ok": true,
      "label": "Nasdaq 綜合",
      "symbol": "%5EIXIC",
      "value": {
        "close": 24089.5605,
        "prevClose": 22617.7305,
        "change": 1471.83,
        "changePct": 6.51,
        "asOf": "2026-11-23",
        "prevAsOf": "2026-11-20",
        "gapDays": 3,
        "gapSuspect": false,
        "live": false,
        "latest": {
          "date": "2026-11-23",
          "close": 24089.5605,
          "prevDate": "2026-11-20",
          "prevClose": 22617.7305,
          "change": 1471.83,
          "changePct": 6.51,
          "gapDays": 3,
          "gapSuspect": false
        },
        "settled": {
          "date": "2026-11-23",
          "close": 24089.5605,
          "prevDate": "2026-11-20",
          "prevClose": 22617.7305,
          "change": 1471.83,
          "changePct": 6.51,
          "gapDays": 3,
          "gapSuspect": false
        },
        "quotePrice": 24089.559,
        "series": [
          {
            "date": "2026-11-16",
            "close": 24509.7598
          },
          {
            "date": "2026-11-17",
            "close": 24328.3809
          },
          {
            "date": "2026-11-18",
            "close": 24429.8809
          },
          {
            "date": "2026-11-19",
            "close": 23879.1992
          },
          {
            "date": "2026-11-20",
            "close": 22617.7305
          },
          {
            "date": "2026-11-23",
            "close": 24089.5605
          }
        ],
        "currency": "USD",
        "timezone": "America/New_York",
        "source": "Yahoo Finance chart API（日線）"
      }
    },
    "dji": {
      "ok": true,
      "label": "Dow Jones",
      "symbol": "%5EDJI",
      "value": {
        "close": 49595.3086,
        "prevClose": 48147.3281,
        "change": 1447.9805,
        "changePct": 3.01,
        "asOf": "2026-11-23",
        "prevAsOf": "2026-11-20",
        "gapDays": 3,
        "gapSuspect": false,
        "live": false,
        "latest": {
          "date": "2026-11-23",
          "close": 49595.3086,
          "prevDate": "2026-11-20",
          "prevClose": 48147.3281,
          "change": 1447.9805,
          "changePct": 3.01,
          "gapDays": 3,
          "gapSuspect": false
        },
        "settled": {
          "date": "2026-11-23",
          "close": 49595.3086,
          "prevDate": "2026-11-20",
          "prevClose": 48147.3281,
          "change": 1447.9805,
          "changePct": 3.01,
          "gapDays": 3,
          "gapSuspect": false
        },
        "quotePrice": 49595.31,
        "series": [
          {
            "date": "2026-11-16",
            "close": 51608.1719
          },
          {
            "date": "2026-11-17",
            "close": 50759.4219
          },
          {
            "date": "2026-11-18",
            "close": 50198.1719
          },
          {
            "date": "2026-11-19",
            "close": 49097.0586
          },
          {
            "date": "2026-11-20",
            "close": 48147.3281
          },
          {
            "date": "2026-11-23",
            "close": 49595.3086
          }
        ],
        "currency": "USD",
        "timezone": "America/New_York",
        "source": "Yahoo Finance chart API（日線）"
      }
    },
    "us10y": {
      "ok": true,
      "label": "US 10Y 殖利率",
      "symbol": "%5ETNX",
      "value": {
        "close": 4.918,
        "prevClose": 4.912,
        "change": 0.006,
        "changePct": 0.12,
        "asOf": "2026-11-23",
        "prevAsOf": "2026-11-20",
        "gapDays": 3,
        "gapSuspect": false,
        "live": false,
        "latest": {
          "date": "2026-11-23",
          "close": 4.918,
          "prevDate": "2026-11-20",
          "prevClose": 4.912,
          "change": 0.006,
          "changePct": 0.12,
          "gapDays": 3,
          "gapSuspect": false
        },
        "settled": {
          "date": "2026-11-23",
          "close": 4.918,
          "prevDate": "2026-11-20",
          "prevClose": 4.912,
          "change": 0.006,
          "changePct": 0.12,
          "gapDays": 3,
          "gapSuspect": false
        },
        "quotePrice": 4.918,
        "series": [
          {
            "date": "2026-11-16",
            "close": 5.121
          },
          {
            "date": "2026-11-17",
            "close": 5.103
          },
          {
            "date": "2026-11-18",
            "close": 5.066
          },
          {
            "date": "2026-11-19",
            "close": 5.052
          },
          {
            "date": "2026-11-20",
            "close": 4.912
          },
          {
            "date": "2026-11-23",
            "close": 4.918
          }
        ],
        "currency": "USD",
        "timezone": "America/Chicago",
        "source": "Yahoo Finance chart API（日線）"
      }
    },
    "us30y": {
      "ok": true,
      "label": "US 30Y 殖利率",
      "symbol": "%5ETYX",
      "value": {
        "close": 5.294,
        "prevClose": 5.303,
        "change": -0.009,
        "changePct": -0.17,
        "asOf": "2026-11-23",
        "prevAsOf": "2026-11-20",
        "gapDays": 3,
        "gapSuspect": false,
        "live": false,
        "latest": {
          "date": "2026-11-23",
          "close": 5.294,
          "prevDate": "2026-11-20",
          "prevClose": 5.303,
          "change": -0.009,
          "changePct": -0.17,
          "gapDays": 3,
          "gapSuspect": false
        },
        "settled": {
          "date": "2026-11-23",
          "close": 5.294,
          "prevDate": "2026-11-20",
          "prevClose": 5.303,
          "change": -0.009,
          "changePct": -0.17,
          "gapDays": 3,
          "gapSuspect": false
        },
        "quotePrice": 5.294,
        "series": [
          {
            "date": "2026-11-16",
            "close": 5.467
          },
          {
            "date": "2026-11-17",
            "close": 5.458
          },
          {
            "date": "2026-11-18",
            "close": 5.412
          },
          {
            "date": "2026-11-19",
            "close": 5.401
          },
          {
            "date": "2026-11-20",
            "close": 5.303
          },
          {
            "date": "2026-11-23",
            "close": 5.294
          }
        ],
        "currency": "USD",
        "timezone": "America/Chicago",
        "source": "Yahoo Finance chart API（日線）"
      }
    },
    "us5y": {
      "ok": true,
      "label": "US 5Y 殖利率",
      "symbol": "%5EFVX",
      "value": {
        "close": 4.728,
        "prevClose": 4.701,
        "change": 0.027,
        "changePct": 0.57,
        "asOf": "2026-11-23",
        "prevAsOf": "2026-11-20",
        "gapDays": 3,
        "gapSuspect": false,
        "live": false,
        "latest": {
          "date": "2026-11-23",
          "close": 4.728,
          "prevDate": "2026-11-20",
          "prevClose": 4.701,
          "change": 0.027,
          "changePct": 0.57,
          "gapDays": 3,
          "gapSuspect": false
        },
        "settled": {
          "date": "2026-11-23",
          "close": 4.728,
          "prevDate": "2026-11-20",
          "prevClose": 4.701,
          "change": 0.027,
          "changePct": 0.57,
          "gapDays": 3,
          "gapSuspect": false
        },
        "quotePrice": 4.7279997,
        "series": [
          {
            "date": "2026-11-16",
            "close": 4.935
          },
          {
            "date": "2026-11-17",
            "close": 4.9
          },
          {
            "date": "2026-11-18",
            "close": 4.884
          },
          {
            "date": "2026-11-19",
            "close": 4.866
          },
          {
            "date": "2026-11-20",
            "close": 4.701
          },
          {
            "date": "2026-11-23",
            "close": 4.728
          }
        ],
        "currency": "USD",
        "timezone": "America/Chicago",
        "source": "Yahoo Finance chart API（日線）"
      }
    },
    "dxy": {
      "ok": true,
      "label": "DXY 美元指數",
      "symbol": "DX-Y.NYB",
      "value": {
        "close": 104.32,
        "prevClose": 103.81,
        "change": 0.51,
        "changePct": 0.49,
        "asOf": "2026-11-23",
        "prevAsOf": "2026-11-20",
        "gapDays": 3,
        "gapSuspect": false,
        "live": true,
        "latest": {
          "date": "2026-11-24",
          "close": 104.306,
          "prevDate": "2026-11-23",
          "prevClose": 104.32,
          "change": -0.014,
          "changePct": -0.01,
          "gapDays": 1,
          "gapSuspect": false
        },
        "settled": {
          "date": "2026-11-23",
          "close": 104.32,
          "prevDate": "2026-11-20",
          "prevClose": 103.81,
          "change": 0.51,
          "changePct": 0.49,
          "gapDays": 3,
          "gapSuspect": false
        },
        "quotePrice": 104.306,
        "series": [
          {
            "date": "2026-11-17",
            "close": 103.49
          },
          {
            "date": "2026-11-18",
            "close": 103.86
          },
          {
            "date": "2026-11-19",
            "close": 103.9
          },
          {
            "date": "2026-11-20",
            "close": 103.81
          },
          {
            "date": "2026-11-23",
            "close": 104.32
          },
          {
            "date": "2026-11-24",
            "close": 104.306
          }
        ],
        "currency": "USD",
        "timezone": "America/New_York",
        "source": "Yahoo Finance chart API（日線）"
      }
    },
    "wti": {
      "ok": true,
      "label": "WTI 原油",
      "symbol": "CL%3DF",
      "value": {
        "close": 80.17,
        "prevClose": 83.98,
        "change": -3.81,
        "changePct": -4.54,
        "asOf": "2026-11-23",
        "prevAsOf": "2026-11-20",
        "gapDays": 3,
        "gapSuspect": false,
        "live": true,
        "latest": {
          "date": "2026-11-24",
          "close": 79.62,
          "prevDate": "2026-11-23",
          "prevClose": 80.17,
          "change": -0.55,
          "changePct": -0.69,
          "gapDays": 1,
          "gapSuspect": false
        },
        "settled": {
          "date": "2026-11-23",
          "close": 80.17,
          "prevDate": "2026-11-20",
          "prevClose": 83.98,
          "change": -3.81,
          "changePct": -4.54,
          "gapDays": 3,
          "gapSuspect": false
        },
        "quotePrice": 79.62,
        "series": [
          {
            "date": "2026-11-17",
            "close": 86.01
          },
          {
            "date": "2026-11-18",
            "close": 83.26
          },
          {
            "date": "2026-11-19",
            "close": 83.21
          },
          {
            "date": "2026-11-20",
            "close": 83.98
          },
          {
            "date": "2026-11-23",
            "close": 80.17
          },
          {
            "date": "2026-11-24",
            "close": 79.62
          }
        ],
        "currency": "USD",
        "timezone": "America/New_York",
        "source": "Yahoo Finance chart API（日線）"
      }
    },
    "brent": {
      "ok": true,
      "label": "Brent 原油",
      "symbol": "BZ%3DF",
      "value": {
        "close": 89.37,
        "prevClose": 92.57,
        "change": -3.2,
        "changePct": -3.46,
        "asOf": "2026-11-23",
        "prevAsOf": "2026-11-20",
        "gapDays": 3,
        "gapSuspect": false,
        "live": true,
        "latest": {
          "date": "2026-11-24",
          "close": 86.15,
          "prevDate": "2026-11-23",
          "prevClose": 89.37,
          "change": -3.22,
          "changePct": -3.6,
          "gapDays": 1,
          "gapSuspect": false
        },
        "settled": {
          "date": "2026-11-23",
          "close": 89.37,
          "prevDate": "2026-11-20",
          "prevClose": 92.57,
          "change": -3.2,
          "changePct": -3.46,
          "gapDays": 3,
          "gapSuspect": false
        },
        "quotePrice": 86.15,
        "series": [
          {
            "date": "2026-11-17",
            "close": 93.14
          },
          {
            "date": "2026-11-18",
            "close": 91.95
          },
          {
            "date": "2026-11-19",
            "close": 91.98
          },
          {
            "date": "2026-11-20",
            "close": 92.57
          },
          {
            "date": "2026-11-23",
            "close": 89.37
          },
          {
            "date": "2026-11-24",
            "close": 86.15
          }
        ],
        "currency": "USD",
        "timezone": "America/New_York",
        "source": "Yahoo Finance chart API（日線）"
      }
    },
    "gold": {
      "ok": true,
      "label": "黃金",
      "symbol": "GC%3DF",
      "value": {
        "close": 3651.3999,
        "prevClose": 3515.3999,
        "change": 136,
        "changePct": 3.87,
        "asOf": "2026-11-23",
        "prevAsOf": "2026-11-20",
        "gapDays": 3,
        "gapSuspect": false,
        "live": true,
        "latest": {
          "date": "2026-11-24",
          "close": 3615.7,
          "prevDate": "2026-11-23",
          "prevClose": 3651.3999,
          "change": -35.6999,
          "changePct": -0.98,
          "gapDays": 1,
          "gapSuspect": false
        },
        "settled": {
          "date": "2026-11-23",
          "close": 3651.3999,
          "prevDate": "2026-11-20",
          "prevClose": 3515.3999,
          "change": 136,
          "changePct": 3.87,
          "gapDays": 3,
          "gapSuspect": false
        },
        "quotePrice": 3615.7,
        "series": [
          {
            "date": "2026-11-17",
            "close": 3864.2
          },
          {
            "date": "2026-11-18",
            "close": 3741.8999
          },
          {
            "date": "2026-11-19",
            "close": 3685.5
          },
          {
            "date": "2026-11-20",
            "close": 3515.3999
          },
          {
            "date": "2026-11-23",
            "close": 3651.3999
          },
          {
            "date": "2026-11-24",
            "close": 3615.7
          }
        ],
        "currency": "USD",
        "timezone": "America/New_York",
        "source": "Yahoo Finance chart API（日線）"
      }
    },
    "usdjpy": {
      "ok": true,
      "label": "USD/JPY",
      "symbol": "JPY%3DX",
      "value": {
        "close": 158.931,
        "prevClose": 159.707,
        "change": -0.776,
        "changePct": -0.49,
        "asOf": "2026-11-23",
        "prevAsOf": "2026-11-20",
        "gapDays": 3,
        "gapSuspect": false,
        "live": true,
        "latest": {
          "date": "2026-11-24",
          "close": 159.289,
          "prevDate": "2026-11-23",
          "prevClose": 158.931,
          "change": 0.358,
          "changePct": 0.23,
          "gapDays": 1,
          "gapSuspect": false
        },
        "settled": {
          "date": "2026-11-23",
          "close": 158.931,
          "prevDate": "2026-11-20",
          "prevClose": 159.707,
          "change": -0.776,
          "changePct": -0.49,
          "gapDays": 3,
          "gapSuspect": false
        },
        "quotePrice": 159.289,
        "series": [
          {
            "date": "2026-11-17",
            "close": 159.523
          },
          {
            "date": "2026-11-18",
            "close": 159.504
          },
          {
            "date": "2026-11-19",
            "close": 159.381
          },
          {
            "date": "2026-11-20",
            "close": 159.707
          },
          {
            "date": "2026-11-23",
            "close": 158.931
          },
          {
            "date": "2026-11-24",
            "close": 159.289
          }
        ],
        "currency": "JPY",
        "timezone": "Europe/London",
        "source": "Yahoo Finance chart API（日線）"
      }
    },
    "usdcny": {
      "ok": true,
      "label": "USD/CNY",
      "symbol": "CNY%3DX",
      "value": {
        "close": 6.677,
        "prevClose": 6.6665,
        "change": 0.0105,
        "changePct": 0.16,
        "asOf": "2026-11-23",
        "prevAsOf": "2026-11-20",
        "gapDays": 3,
        "gapSuspect": false,
        "live": true,
        "latest": {
          "date": "2026-11-24",
          "close": 6.6609,
          "prevDate": "2026-11-23",
          "prevClose": 6.677,
          "change": -0.0161,
          "changePct": -0.24,
          "gapDays": 1,
          "gapSuspect": false
        },
        "settled": {
          "date": "2026-11-23",
          "close": 6.677,
          "prevDate": "2026-11-20",
          "prevClose": 6.6665,
          "change": 0.0105,
          "changePct": 0.16,
          "gapDays": 3,
          "gapSuspect": false
        },
        "quotePrice": 6.6609,
        "series": [
          {
            "date": "2026-11-17",
            "close": 6.6642
          },
          {
            "date": "2026-11-18",
            "close": 6.6659
          },
          {
            "date": "2026-11-19",
            "close": 6.6676
          },
          {
            "date": "2026-11-20",
            "close": 6.6665
          },
          {
            "date": "2026-11-23",
            "close": 6.677
          },
          {
            "date": "2026-11-24",
            "close": 6.6609
          }
        ],
        "currency": "CNY",
        "timezone": "Europe/London",
        "source": "Yahoo Finance chart API（日線）"
      }
    },
    "usdtwd": {
      "ok": true,
      "label": "USD/TWD",
      "symbol": "TWD%3DX",
      "value": {
        "close": 32.9546,
        "prevClose": 33.0263,
        "change": -0.0717,
        "changePct": -0.22,
        "asOf": "2026-11-23",
        "prevAsOf": "2026-11-20",
        "gapDays": 3,
        "gapSuspect": false,
        "live": true,
        "latest": {
          "date": "2026-11-24",
          "close": 32.878,
          "prevDate": "2026-11-23",
          "prevClose": 32.9546,
          "change": -0.0766,
          "changePct": -0.23,
          "gapDays": 1,
          "gapSuspect": false
        },
        "settled": {
          "date": "2026-11-23",
          "close": 32.9546,
          "prevDate": "2026-11-20",
          "prevClose": 33.0263,
          "change": -0.0717,
          "changePct": -0.22,
          "gapDays": 3,
          "gapSuspect": false
        },
        "quotePrice": 32.878,
        "series": [
          {
            "date": "2026-11-17",
            "close": 32.9629
          },
          {
            "date": "2026-11-18",
            "close": 32.9108
          },
          {
            "date": "2026-11-19",
            "close": 32.9299
          },
          {
            "date": "2026-11-20",
            "close": 33.0263
          },
          {
            "date": "2026-11-23",
            "close": 32.9546
          },
          {
            "date": "2026-11-24",
            "close": 32.878
          }
        ],
        "currency": "TWD",
        "timezone": "Europe/London",
        "source": "Yahoo Finance chart API（日線）"
      }
    },
    "taiex": {
      "ok": true,
      "label": "TAIEX（交叉驗證）",
      "symbol": "%5ETWII",
      "value": {
        "close": 40122.3516,
        "prevClose": 36811.8906,
        "change": 3310.461,
        "changePct": 8.99,
        "asOf": "2026-11-24",
        "prevAsOf": "2026-11-23",
        "gapDays": 1,
        "gapSuspect": false,
        "live": false,
        "latest": {
          "date": "2026-11-24",
          "close": 40122.3516,
          "prevDate": "2026-11-23",
          "prevClose": 36811.8906,
          "change": 3310.461,
          "changePct": 8.99,
          "gapDays": 1,
          "gapSuspect": false
        },
        "settled": {
          "date": "2026-11-24",
          "close": 40122.3516,
          "prevDate": "2026-11-23",
          "prevClose": 36811.8906,
          "change": 3310.461,
          "changePct": 8.99,
          "gapDays": 1,
          "gapSuspect": false
        },
        "quotePrice": 40122.35,
        "series": [
          {
            "date": "2026-11-17",
            "close": 40092.1094
          },
          {
            "date": "2026-11-18",
            "close": 40194.9102
          },
          {
            "date": "2026-11-19",
            "close": 38426.8906
          },
          {
            "date": "2026-11-20",
            "close": 36033.2891
          },
          {
            "date": "2026-11-23",
            "close": 36811.8906
          },
          {
            "date": "2026-11-24",
            "close": 40122.3516
          }
        ],
        "currency": "TWD",
        "timezone": "Asia/Taipei",
        "source": "Yahoo Finance chart API（日線）"
      }
    }
  }
};
