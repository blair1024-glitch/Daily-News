/**
 * market-global.js — 由 GitHub Actions 自動產生，請勿手動編輯。
 * 產生器：scripts/fetch-global-market.mjs
 *
 * 國際行情中繼資料，供每日 dashboard 更新流程讀用，不會被 index.html 載入。
 * ok:false 代表該標的當次抓不到，error 說明原因——請據實標註，不要沿用舊值。
 */
window.MARKET_GLOBAL = {
  "fetchedAt": "2026-11-23T22:28:09.883Z",
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
        "close": 24089.5586,
        "prevClose": 22617.7305,
        "change": 1471.8281,
        "changePct": 6.51,
        "asOf": "2026-11-23",
        "prevAsOf": "2026-11-20",
        "gapDays": 3,
        "gapSuspect": false,
        "live": false,
        "latest": {
          "date": "2026-11-23",
          "close": 24089.5586,
          "prevDate": "2026-11-20",
          "prevClose": 22617.7305,
          "change": 1471.8281,
          "changePct": 6.51,
          "gapDays": 3,
          "gapSuspect": false
        },
        "settled": {
          "date": "2026-11-23",
          "close": 24089.5586,
          "prevDate": "2026-11-20",
          "prevClose": 22617.7305,
          "change": 1471.8281,
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
            "close": 24089.5586
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
        "close": 103.81,
        "prevClose": 103.9,
        "change": -0.09,
        "changePct": -0.09,
        "asOf": "2026-11-20",
        "prevAsOf": "2026-11-19",
        "gapDays": 1,
        "gapSuspect": false,
        "live": true,
        "latest": {
          "date": "2026-11-23",
          "close": 104.348,
          "prevDate": "2026-11-20",
          "prevClose": 103.81,
          "change": 0.538,
          "changePct": 0.52,
          "gapDays": 3,
          "gapSuspect": false
        },
        "settled": {
          "date": "2026-11-20",
          "close": 103.81,
          "prevDate": "2026-11-19",
          "prevClose": 103.9,
          "change": -0.09,
          "changePct": -0.09,
          "gapDays": 1,
          "gapSuspect": false
        },
        "quotePrice": 104.348,
        "series": [
          {
            "date": "2026-11-16",
            "close": 103.55
          },
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
            "close": 104.348
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
        "close": 83.98,
        "prevClose": 83.21,
        "change": 0.77,
        "changePct": 0.93,
        "asOf": "2026-11-20",
        "prevAsOf": "2026-11-19",
        "gapDays": 1,
        "gapSuspect": false,
        "live": true,
        "latest": {
          "date": "2026-11-23",
          "close": 80.25,
          "prevDate": "2026-11-20",
          "prevClose": 83.98,
          "change": -3.73,
          "changePct": -4.44,
          "gapDays": 3,
          "gapSuspect": false
        },
        "settled": {
          "date": "2026-11-20",
          "close": 83.98,
          "prevDate": "2026-11-19",
          "prevClose": 83.21,
          "change": 0.77,
          "changePct": 0.93,
          "gapDays": 1,
          "gapSuspect": false
        },
        "quotePrice": 80.25,
        "series": [
          {
            "date": "2026-11-16",
            "close": 85.72
          },
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
            "close": 80.25
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
        "close": 92.57,
        "prevClose": 91.98,
        "change": 0.59,
        "changePct": 0.64,
        "asOf": "2026-11-20",
        "prevAsOf": "2026-11-19",
        "gapDays": 1,
        "gapSuspect": false,
        "live": true,
        "latest": {
          "date": "2026-11-23",
          "close": 86.72,
          "prevDate": "2026-11-20",
          "prevClose": 92.57,
          "change": -5.85,
          "changePct": -6.32,
          "gapDays": 3,
          "gapSuspect": false
        },
        "settled": {
          "date": "2026-11-20",
          "close": 92.57,
          "prevDate": "2026-11-19",
          "prevClose": 91.98,
          "change": 0.59,
          "changePct": 0.64,
          "gapDays": 1,
          "gapSuspect": false
        },
        "quotePrice": 86.72,
        "series": [
          {
            "date": "2026-11-16",
            "close": 92.44
          },
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
            "close": 86.72
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
        "close": 3515.3999,
        "prevClose": 3685.5,
        "change": -170.1001,
        "changePct": -4.62,
        "asOf": "2026-11-20",
        "prevAsOf": "2026-11-19",
        "gapDays": 1,
        "gapSuspect": false,
        "live": true,
        "latest": {
          "date": "2026-11-23",
          "close": 3634.3999,
          "prevDate": "2026-11-20",
          "prevClose": 3515.3999,
          "change": 119,
          "changePct": 3.39,
          "gapDays": 3,
          "gapSuspect": false
        },
        "settled": {
          "date": "2026-11-20",
          "close": 3515.3999,
          "prevDate": "2026-11-19",
          "prevClose": 3685.5,
          "change": -170.1001,
          "changePct": -4.62,
          "gapDays": 1,
          "gapSuspect": false
        },
        "quotePrice": 3634.4,
        "series": [
          {
            "date": "2026-11-16",
            "close": 3853
          },
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
            "close": 3634.3999
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
        "close": 159.707,
        "prevClose": 159.381,
        "change": 0.326,
        "changePct": 0.2,
        "asOf": "2026-11-20",
        "prevAsOf": "2026-11-19",
        "gapDays": 1,
        "gapSuspect": false,
        "live": true,
        "latest": {
          "date": "2026-11-23",
          "close": 158.943,
          "prevDate": "2026-11-20",
          "prevClose": 159.707,
          "change": -0.764,
          "changePct": -0.48,
          "gapDays": 3,
          "gapSuspect": false
        },
        "settled": {
          "date": "2026-11-20",
          "close": 159.707,
          "prevDate": "2026-11-19",
          "prevClose": 159.381,
          "change": 0.326,
          "changePct": 0.2,
          "gapDays": 1,
          "gapSuspect": false
        },
        "quotePrice": 158.943,
        "series": [
          {
            "date": "2026-11-16",
            "close": 159.78
          },
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
            "close": 158.943
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
        "close": 6.6665,
        "prevClose": 6.6676,
        "change": -0.0011,
        "changePct": -0.02,
        "asOf": "2026-11-20",
        "prevAsOf": "2026-11-19",
        "gapDays": 1,
        "gapSuspect": false,
        "live": true,
        "latest": {
          "date": "2026-11-23",
          "close": 6.6638,
          "prevDate": "2026-11-20",
          "prevClose": 6.6665,
          "change": -0.0027,
          "changePct": -0.04,
          "gapDays": 3,
          "gapSuspect": false
        },
        "settled": {
          "date": "2026-11-20",
          "close": 6.6665,
          "prevDate": "2026-11-19",
          "prevClose": 6.6676,
          "change": -0.0011,
          "changePct": -0.02,
          "gapDays": 1,
          "gapSuspect": false
        },
        "quotePrice": 6.6638,
        "series": [
          {
            "date": "2026-11-16",
            "close": 6.671
          },
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
            "close": 6.6638
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
        "close": 33.0263,
        "prevClose": 32.9299,
        "change": 0.0964,
        "changePct": 0.29,
        "asOf": "2026-11-20",
        "prevAsOf": "2026-11-19",
        "gapDays": 1,
        "gapSuspect": false,
        "live": true,
        "latest": {
          "date": "2026-11-23",
          "close": 32.849,
          "prevDate": "2026-11-20",
          "prevClose": 33.0263,
          "change": -0.1773,
          "changePct": -0.54,
          "gapDays": 3,
          "gapSuspect": false
        },
        "settled": {
          "date": "2026-11-20",
          "close": 33.0263,
          "prevDate": "2026-11-19",
          "prevClose": 32.9299,
          "change": 0.0964,
          "changePct": 0.29,
          "gapDays": 1,
          "gapSuspect": false
        },
        "quotePrice": 32.849,
        "series": [
          {
            "date": "2026-11-16",
            "close": 32.8764
          },
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
            "close": 32.849
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
        "close": 36033.2891,
        "prevClose": 38426.8906,
        "change": -2393.6015,
        "changePct": -6.23,
        "asOf": "2026-11-20",
        "prevAsOf": "2026-11-19",
        "gapDays": 1,
        "gapSuspect": false,
        "live": false,
        "latest": {
          "date": "2026-11-20",
          "close": 36033.2891,
          "prevDate": "2026-11-19",
          "prevClose": 38426.8906,
          "change": -2393.6015,
          "changePct": -6.23,
          "gapDays": 1,
          "gapSuspect": false
        },
        "settled": {
          "date": "2026-11-20",
          "close": 36033.2891,
          "prevDate": "2026-11-19",
          "prevClose": 38426.8906,
          "change": -2393.6015,
          "changePct": -6.23,
          "gapDays": 1,
          "gapSuspect": false
        },
        "quotePrice": 36811.89,
        "series": [
          {
            "date": "2026-11-13",
            "close": 43675.1211
          },
          {
            "date": "2026-11-16",
            "close": 41040.0781
          },
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
          }
        ],
        "currency": "TWD",
        "timezone": "Asia/Taipei",
        "source": "Yahoo Finance chart API（日線）"
      }
    }
  }
};
