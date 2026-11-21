/**
 * market-global.js — 由 GitHub Actions 自動產生，請勿手動編輯。
 * 產生器：scripts/fetch-global-market.mjs
 *
 * 國際行情中繼資料，供每日 dashboard 更新流程讀用，不會被 index.html 載入。
 * ok:false 代表該標的當次抓不到，error 說明原因——請據實標註，不要沿用舊值。
 */
window.MARKET_GLOBAL = {
  "fetchedAt": "2026-11-21T03:46:47.965Z",
  "okCount": 16,
  "totalCount": 16,
  "items": {
    "sox": {
      "ok": true,
      "label": "費城半導體 SOX",
      "symbol": "%5ESOX",
      "value": {
        "close": 8408.5908,
        "prevClose": 9419.7197,
        "change": -1011.1289,
        "changePct": -10.73,
        "asOf": "2026-11-20",
        "prevAsOf": "2026-11-19",
        "gapDays": 1,
        "gapSuspect": false,
        "live": false,
        "latest": {
          "date": "2026-11-20",
          "close": 8408.5908,
          "prevDate": "2026-11-19",
          "prevClose": 9419.7197,
          "change": -1011.1289,
          "changePct": -10.73,
          "gapDays": 1,
          "gapSuspect": false
        },
        "settled": {
          "date": "2026-11-20",
          "close": 8408.5908,
          "prevDate": "2026-11-19",
          "prevClose": 9419.7197,
          "change": -1011.1289,
          "changePct": -10.73,
          "gapDays": 1,
          "gapSuspect": false
        },
        "quotePrice": 8408.591,
        "series": [
          {
            "date": "2026-11-13",
            "close": 10146.3203
          },
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
            "close": 8408.5908
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
        "close": 35.89,
        "prevClose": 28.44,
        "change": 7.45,
        "changePct": 26.2,
        "asOf": "2026-11-20",
        "prevAsOf": "2026-11-19",
        "gapDays": 1,
        "gapSuspect": false,
        "live": false,
        "latest": {
          "date": "2026-11-20",
          "close": 35.89,
          "prevDate": "2026-11-19",
          "prevClose": 28.44,
          "change": 7.45,
          "changePct": 26.2,
          "gapDays": 1,
          "gapSuspect": false
        },
        "settled": {
          "date": "2026-11-20",
          "close": 35.89,
          "prevDate": "2026-11-19",
          "prevClose": 28.44,
          "change": 7.45,
          "changePct": 26.2,
          "gapDays": 1,
          "gapSuspect": false
        },
        "quotePrice": 35.89,
        "series": [
          {
            "date": "2026-11-13",
            "close": 19.3
          },
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
          }
        ],
        "currency": "USD",
        "timezone": "America/New_York",
        "source": "Yahoo Finance chart API（日線）"
      }
    },
    "spx": {
      "ok": true,
      "label": "S&P 500",
      "symbol": "%5EGSPC",
      "value": {
        "close": 6910.3901,
        "prevClose": 7175.8301,
        "change": -265.44,
        "changePct": -3.7,
        "asOf": "2026-11-20",
        "prevAsOf": "2026-11-19",
        "gapDays": 1,
        "gapSuspect": false,
        "live": false,
        "latest": {
          "date": "2026-11-20",
          "close": 6910.3901,
          "prevDate": "2026-11-19",
          "prevClose": 7175.8301,
          "change": -265.44,
          "changePct": -3.7,
          "gapDays": 1,
          "gapSuspect": false
        },
        "settled": {
          "date": "2026-11-20",
          "close": 6910.3901,
          "prevDate": "2026-11-19",
          "prevClose": 7175.8301,
          "change": -265.44,
          "changePct": -3.7,
          "gapDays": 1,
          "gapSuspect": false
        },
        "quotePrice": 6910.39,
        "series": [
          {
            "date": "2026-11-13",
            "close": 7561.6699
          },
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
        "close": 22617.7324,
        "prevClose": 23879.1992,
        "change": -1261.4668,
        "changePct": -5.28,
        "asOf": "2026-11-20",
        "prevAsOf": "2026-11-19",
        "gapDays": 1,
        "gapSuspect": false,
        "live": false,
        "latest": {
          "date": "2026-11-20",
          "close": 22617.7324,
          "prevDate": "2026-11-19",
          "prevClose": 23879.1992,
          "change": -1261.4668,
          "changePct": -5.28,
          "gapDays": 1,
          "gapSuspect": false
        },
        "settled": {
          "date": "2026-11-20",
          "close": 22617.7324,
          "prevDate": "2026-11-19",
          "prevClose": 23879.1992,
          "change": -1261.4668,
          "changePct": -5.28,
          "gapDays": 1,
          "gapSuspect": false
        },
        "quotePrice": 22617.732,
        "series": [
          {
            "date": "2026-11-13",
            "close": 25136.2695
          },
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
            "close": 22617.7324
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
        "close": 48147.3281,
        "prevClose": 49097.0586,
        "change": -949.7305,
        "changePct": -1.93,
        "asOf": "2026-11-20",
        "prevAsOf": "2026-11-19",
        "gapDays": 1,
        "gapSuspect": false,
        "live": false,
        "latest": {
          "date": "2026-11-20",
          "close": 48147.3281,
          "prevDate": "2026-11-19",
          "prevClose": 49097.0586,
          "change": -949.7305,
          "changePct": -1.93,
          "gapDays": 1,
          "gapSuspect": false
        },
        "settled": {
          "date": "2026-11-20",
          "close": 48147.3281,
          "prevDate": "2026-11-19",
          "prevClose": 49097.0586,
          "change": -949.7305,
          "changePct": -1.93,
          "gapDays": 1,
          "gapSuspect": false
        },
        "quotePrice": 48147.33,
        "series": [
          {
            "date": "2026-11-13",
            "close": 52347.5508
          },
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
        "close": 4.912,
        "prevClose": 5.052,
        "change": -0.14,
        "changePct": -2.77,
        "asOf": "2026-11-20",
        "prevAsOf": "2026-11-19",
        "gapDays": 1,
        "gapSuspect": false,
        "live": false,
        "latest": {
          "date": "2026-11-20",
          "close": 4.912,
          "prevDate": "2026-11-19",
          "prevClose": 5.052,
          "change": -0.14,
          "changePct": -2.77,
          "gapDays": 1,
          "gapSuspect": false
        },
        "settled": {
          "date": "2026-11-20",
          "close": 4.912,
          "prevDate": "2026-11-19",
          "prevClose": 5.052,
          "change": -0.14,
          "changePct": -2.77,
          "gapDays": 1,
          "gapSuspect": false
        },
        "quotePrice": 4.912,
        "series": [
          {
            "date": "2026-11-13",
            "close": 5.154
          },
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
        "close": 5.303,
        "prevClose": 5.401,
        "change": -0.098,
        "changePct": -1.81,
        "asOf": "2026-11-20",
        "prevAsOf": "2026-11-19",
        "gapDays": 1,
        "gapSuspect": false,
        "live": false,
        "latest": {
          "date": "2026-11-20",
          "close": 5.303,
          "prevDate": "2026-11-19",
          "prevClose": 5.401,
          "change": -0.098,
          "changePct": -1.81,
          "gapDays": 1,
          "gapSuspect": false
        },
        "settled": {
          "date": "2026-11-20",
          "close": 5.303,
          "prevDate": "2026-11-19",
          "prevClose": 5.401,
          "change": -0.098,
          "changePct": -1.81,
          "gapDays": 1,
          "gapSuspect": false
        },
        "quotePrice": 5.303,
        "series": [
          {
            "date": "2026-11-13",
            "close": 5.481
          },
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
        "close": 4.701,
        "prevClose": 4.866,
        "change": -0.165,
        "changePct": -3.39,
        "asOf": "2026-11-20",
        "prevAsOf": "2026-11-19",
        "gapDays": 1,
        "gapSuspect": false,
        "live": false,
        "latest": {
          "date": "2026-11-20",
          "close": 4.701,
          "prevDate": "2026-11-19",
          "prevClose": 4.866,
          "change": -0.165,
          "changePct": -3.39,
          "gapDays": 1,
          "gapSuspect": false
        },
        "settled": {
          "date": "2026-11-20",
          "close": 4.701,
          "prevDate": "2026-11-19",
          "prevClose": 4.866,
          "change": -0.165,
          "changePct": -3.39,
          "gapDays": 1,
          "gapSuspect": false
        },
        "quotePrice": 4.701,
        "series": [
          {
            "date": "2026-11-13",
            "close": 4.981
          },
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
        "close": 103.9,
        "prevClose": 103.86,
        "change": 0.04,
        "changePct": 0.04,
        "asOf": "2026-11-19",
        "prevAsOf": "2026-11-18",
        "gapDays": 1,
        "gapSuspect": false,
        "live": true,
        "latest": {
          "date": "2026-11-20",
          "close": 103.84,
          "prevDate": "2026-11-19",
          "prevClose": 103.9,
          "change": -0.06,
          "changePct": -0.06,
          "gapDays": 1,
          "gapSuspect": false
        },
        "settled": {
          "date": "2026-11-19",
          "close": 103.9,
          "prevDate": "2026-11-18",
          "prevClose": 103.86,
          "change": 0.04,
          "changePct": 0.04,
          "gapDays": 1,
          "gapSuspect": false
        },
        "quotePrice": 103.84,
        "series": [
          {
            "date": "2026-11-13",
            "close": 103.41
          },
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
            "close": 103.84
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
        "close": 83.21,
        "prevClose": 83.26,
        "change": -0.05,
        "changePct": -0.06,
        "asOf": "2026-11-19",
        "prevAsOf": "2026-11-18",
        "gapDays": 1,
        "gapSuspect": false,
        "live": true,
        "latest": {
          "date": "2026-11-20",
          "close": 83.62,
          "prevDate": "2026-11-19",
          "prevClose": 83.21,
          "change": 0.41,
          "changePct": 0.49,
          "gapDays": 1,
          "gapSuspect": false
        },
        "settled": {
          "date": "2026-11-19",
          "close": 83.21,
          "prevDate": "2026-11-18",
          "prevClose": 83.26,
          "change": -0.05,
          "changePct": -0.06,
          "gapDays": 1,
          "gapSuspect": false
        },
        "quotePrice": 83.62,
        "series": [
          {
            "date": "2026-11-13",
            "close": 88.56
          },
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
            "close": 83.62
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
        "close": 91.98,
        "prevClose": 91.95,
        "change": 0.03,
        "changePct": 0.03,
        "asOf": "2026-11-19",
        "prevAsOf": "2026-11-18",
        "gapDays": 1,
        "gapSuspect": false,
        "live": true,
        "latest": {
          "date": "2026-11-20",
          "close": 89.87,
          "prevDate": "2026-11-19",
          "prevClose": 91.98,
          "change": -2.11,
          "changePct": -2.29,
          "gapDays": 1,
          "gapSuspect": false
        },
        "settled": {
          "date": "2026-11-19",
          "close": 91.98,
          "prevDate": "2026-11-18",
          "prevClose": 91.95,
          "change": 0.03,
          "changePct": 0.03,
          "gapDays": 1,
          "gapSuspect": false
        },
        "quotePrice": 89.87,
        "series": [
          {
            "date": "2026-11-13",
            "close": 95.84
          },
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
            "close": 89.87
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
        "close": 3685.5,
        "prevClose": 3741.8999,
        "change": -56.3999,
        "changePct": -1.51,
        "asOf": "2026-11-19",
        "prevAsOf": "2026-11-18",
        "gapDays": 1,
        "gapSuspect": false,
        "live": true,
        "latest": {
          "date": "2026-11-20",
          "close": 3539,
          "prevDate": "2026-11-19",
          "prevClose": 3685.5,
          "change": -146.5,
          "changePct": -3.98,
          "gapDays": 1,
          "gapSuspect": false
        },
        "settled": {
          "date": "2026-11-19",
          "close": 3685.5,
          "prevDate": "2026-11-18",
          "prevClose": 3741.8999,
          "change": -56.3999,
          "changePct": -1.51,
          "gapDays": 1,
          "gapSuspect": false
        },
        "quotePrice": 3539,
        "series": [
          {
            "date": "2026-11-13",
            "close": 3886.3
          },
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
            "close": 3539
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
        "close": 159.381,
        "prevClose": 159.504,
        "change": -0.123,
        "changePct": -0.08,
        "asOf": "2026-11-19",
        "prevAsOf": "2026-11-18",
        "gapDays": 1,
        "gapSuspect": false,
        "live": true,
        "latest": {
          "date": "2026-11-20",
          "close": 159.707,
          "prevDate": "2026-11-19",
          "prevClose": 159.381,
          "change": 0.326,
          "changePct": 0.2,
          "gapDays": 1,
          "gapSuspect": false
        },
        "settled": {
          "date": "2026-11-19",
          "close": 159.381,
          "prevDate": "2026-11-18",
          "prevClose": 159.504,
          "change": -0.123,
          "changePct": -0.08,
          "gapDays": 1,
          "gapSuspect": false
        },
        "quotePrice": 158.512,
        "series": [
          {
            "date": "2026-11-13",
            "close": 159.875
          },
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
          "date": "2026-11-21",
          "close": 6.6772,
          "prevDate": "2026-11-20",
          "prevClose": 6.6665,
          "change": 0.0107,
          "changePct": 0.16,
          "gapDays": 1,
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
        "quotePrice": 6.6772,
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
            "date": "2026-11-21",
            "close": 6.6772
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
        "close": 32.9299,
        "prevClose": 32.9108,
        "change": 0.0191,
        "changePct": 0.06,
        "asOf": "2026-11-19",
        "prevAsOf": "2026-11-18",
        "gapDays": 1,
        "gapSuspect": false,
        "live": true,
        "latest": {
          "date": "2026-11-20",
          "close": 33.0263,
          "prevDate": "2026-11-19",
          "prevClose": 32.9299,
          "change": 0.0964,
          "changePct": 0.29,
          "gapDays": 1,
          "gapSuspect": false
        },
        "settled": {
          "date": "2026-11-19",
          "close": 32.9299,
          "prevDate": "2026-11-18",
          "prevClose": 32.9108,
          "change": 0.0191,
          "changePct": 0.06,
          "gapDays": 1,
          "gapSuspect": false
        },
        "quotePrice": 32.958,
        "series": [
          {
            "date": "2026-11-13",
            "close": 32.939
          },
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
        "quotePrice": 36033.29,
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
