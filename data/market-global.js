/**
 * market-global.js — 由 GitHub Actions 自動產生，請勿手動編輯。
 * 產生器：scripts/fetch-global-market.mjs
 *
 * 國際行情中繼資料，供每日 dashboard 更新流程讀用，不會被 index.html 載入。
 * ok:false 代表該標的當次抓不到，error 說明原因——請據實標註，不要沿用舊值。
 */
window.MARKET_GLOBAL = {
  "fetchedAt": "2026-10-27T23:40:21.986Z",
  "okCount": 16,
  "totalCount": 16,
  "items": {
    "sox": {
      "ok": true,
      "label": "費城半導體 SOX",
      "symbol": "%5ESOX",
      "value": {
        "close": 11482.5049,
        "prevClose": 11083.4697,
        "change": 399.0352,
        "changePct": 3.6,
        "asOf": "2026-10-27",
        "prevAsOf": "2026-10-26",
        "gapDays": 1,
        "gapSuspect": false,
        "live": false,
        "latest": {
          "date": "2026-10-27",
          "close": 11482.5049,
          "prevDate": "2026-10-26",
          "prevClose": 11083.4697,
          "change": 399.0352,
          "changePct": 3.6,
          "gapDays": 1,
          "gapSuspect": false
        },
        "settled": {
          "date": "2026-10-27",
          "close": 11482.5049,
          "prevDate": "2026-10-26",
          "prevClose": 11083.4697,
          "change": 399.0352,
          "changePct": 3.6,
          "gapDays": 1,
          "gapSuspect": false
        },
        "quotePrice": 11482.505,
        "series": [
          {
            "date": "2026-10-20",
            "close": 11283.8096
          },
          {
            "date": "2026-10-21",
            "close": 11505.5596
          },
          {
            "date": "2026-10-22",
            "close": 10731.9805
          },
          {
            "date": "2026-10-23",
            "close": 10779.46
          },
          {
            "date": "2026-10-26",
            "close": 11083.4697
          },
          {
            "date": "2026-10-27",
            "close": 11482.5049
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
        "close": 17.52,
        "prevClose": 18.39,
        "change": -0.87,
        "changePct": -4.73,
        "asOf": "2026-10-27",
        "prevAsOf": "2026-10-26",
        "gapDays": 1,
        "gapSuspect": false,
        "live": false,
        "latest": {
          "date": "2026-10-27",
          "close": 17.52,
          "prevDate": "2026-10-26",
          "prevClose": 18.39,
          "change": -0.87,
          "changePct": -4.73,
          "gapDays": 1,
          "gapSuspect": false
        },
        "settled": {
          "date": "2026-10-27",
          "close": 17.52,
          "prevDate": "2026-10-26",
          "prevClose": 18.39,
          "change": -0.87,
          "changePct": -4.73,
          "gapDays": 1,
          "gapSuspect": false
        },
        "quotePrice": 17.52,
        "series": [
          {
            "date": "2026-10-20",
            "close": 17.31
          },
          {
            "date": "2026-10-21",
            "close": 16.68
          },
          {
            "date": "2026-10-22",
            "close": 19.03
          },
          {
            "date": "2026-10-23",
            "close": 19.45
          },
          {
            "date": "2026-10-26",
            "close": 18.39
          },
          {
            "date": "2026-10-27",
            "close": 17.52
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
        "close": 7722.6001,
        "prevClose": 7676.77,
        "change": 45.8301,
        "changePct": 0.6,
        "asOf": "2026-10-27",
        "prevAsOf": "2026-10-26",
        "gapDays": 1,
        "gapSuspect": false,
        "live": false,
        "latest": {
          "date": "2026-10-27",
          "close": 7722.6001,
          "prevDate": "2026-10-26",
          "prevClose": 7676.77,
          "change": 45.8301,
          "changePct": 0.6,
          "gapDays": 1,
          "gapSuspect": false
        },
        "settled": {
          "date": "2026-10-27",
          "close": 7722.6001,
          "prevDate": "2026-10-26",
          "prevClose": 7676.77,
          "change": 45.8301,
          "changePct": 0.6,
          "gapDays": 1,
          "gapSuspect": false
        },
        "quotePrice": 7722.6,
        "series": [
          {
            "date": "2026-10-20",
            "close": 7712.5698
          },
          {
            "date": "2026-10-21",
            "close": 7757.1699
          },
          {
            "date": "2026-10-22",
            "close": 7663.4302
          },
          {
            "date": "2026-10-23",
            "close": 7623.6802
          },
          {
            "date": "2026-10-26",
            "close": 7676.77
          },
          {
            "date": "2026-10-27",
            "close": 7722.6001
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
        "close": 26477.8105,
        "prevClose": 26169.3809,
        "change": 308.4296,
        "changePct": 1.18,
        "asOf": "2026-10-27",
        "prevAsOf": "2026-10-26",
        "gapDays": 1,
        "gapSuspect": false,
        "live": false,
        "latest": {
          "date": "2026-10-27",
          "close": 26477.8105,
          "prevDate": "2026-10-26",
          "prevClose": 26169.3809,
          "change": 308.4296,
          "changePct": 1.18,
          "gapDays": 1,
          "gapSuspect": false
        },
        "settled": {
          "date": "2026-10-27",
          "close": 26477.8105,
          "prevDate": "2026-10-26",
          "prevClose": 26169.3809,
          "change": 308.4296,
          "changePct": 1.18,
          "gapDays": 1,
          "gapSuspect": false
        },
        "quotePrice": 26477.81,
        "series": [
          {
            "date": "2026-10-20",
            "close": 26424.8203
          },
          {
            "date": "2026-10-21",
            "close": 26702.8594
          },
          {
            "date": "2026-10-22",
            "close": 26008.8594
          },
          {
            "date": "2026-10-23",
            "close": 25955.3398
          },
          {
            "date": "2026-10-26",
            "close": 26169.3809
          },
          {
            "date": "2026-10-27",
            "close": 26477.8105
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
        "close": 52377.5703,
        "prevClose": 52361.5781,
        "change": 15.9922,
        "changePct": 0.03,
        "asOf": "2026-10-27",
        "prevAsOf": "2026-10-26",
        "gapDays": 1,
        "gapSuspect": false,
        "live": false,
        "latest": {
          "date": "2026-10-27",
          "close": 52377.5703,
          "prevDate": "2026-10-26",
          "prevClose": 52361.5781,
          "change": 15.9922,
          "changePct": 0.03,
          "gapDays": 1,
          "gapSuspect": false
        },
        "settled": {
          "date": "2026-10-27",
          "close": 52377.5703,
          "prevDate": "2026-10-26",
          "prevClose": 52361.5781,
          "change": 15.9922,
          "changePct": 0.03,
          "gapDays": 1,
          "gapSuspect": false
        },
        "quotePrice": 52377.57,
        "series": [
          {
            "date": "2026-10-20",
            "close": 52495.8789
          },
          {
            "date": "2026-10-21",
            "close": 52856.0898
          },
          {
            "date": "2026-10-22",
            "close": 52867.9805
          },
          {
            "date": "2026-10-23",
            "close": 52215.1602
          },
          {
            "date": "2026-10-26",
            "close": 52361.5781
          },
          {
            "date": "2026-10-27",
            "close": 52377.5703
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
        "close": 4.993,
        "prevClose": 4.986,
        "change": 0.007,
        "changePct": 0.14,
        "asOf": "2026-10-27",
        "prevAsOf": "2026-10-26",
        "gapDays": 1,
        "gapSuspect": false,
        "live": false,
        "latest": {
          "date": "2026-10-27",
          "close": 4.993,
          "prevDate": "2026-10-26",
          "prevClose": 4.986,
          "change": 0.007,
          "changePct": 0.14,
          "gapDays": 1,
          "gapSuspect": false
        },
        "settled": {
          "date": "2026-10-27",
          "close": 4.993,
          "prevDate": "2026-10-26",
          "prevClose": 4.986,
          "change": 0.007,
          "changePct": 0.14,
          "gapDays": 1,
          "gapSuspect": false
        },
        "quotePrice": 4.993,
        "series": [
          {
            "date": "2026-10-20",
            "close": 5.117
          },
          {
            "date": "2026-10-21",
            "close": 5.146
          },
          {
            "date": "2026-10-22",
            "close": 4.953
          },
          {
            "date": "2026-10-23",
            "close": 4.988
          },
          {
            "date": "2026-10-26",
            "close": 4.986
          },
          {
            "date": "2026-10-27",
            "close": 4.993
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
        "close": 5.305,
        "prevClose": 5.301,
        "change": 0.004,
        "changePct": 0.08,
        "asOf": "2026-10-27",
        "prevAsOf": "2026-10-26",
        "gapDays": 1,
        "gapSuspect": false,
        "live": false,
        "latest": {
          "date": "2026-10-27",
          "close": 5.305,
          "prevDate": "2026-10-26",
          "prevClose": 5.301,
          "change": 0.004,
          "changePct": 0.08,
          "gapDays": 1,
          "gapSuspect": false
        },
        "settled": {
          "date": "2026-10-27",
          "close": 5.305,
          "prevDate": "2026-10-26",
          "prevClose": 5.301,
          "change": 0.004,
          "changePct": 0.08,
          "gapDays": 1,
          "gapSuspect": false
        },
        "quotePrice": 5.305,
        "series": [
          {
            "date": "2026-10-20",
            "close": 5.425
          },
          {
            "date": "2026-10-21",
            "close": 5.439
          },
          {
            "date": "2026-10-22",
            "close": 5.287
          },
          {
            "date": "2026-10-23",
            "close": 5.315
          },
          {
            "date": "2026-10-26",
            "close": 5.301
          },
          {
            "date": "2026-10-27",
            "close": 5.305
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
        "close": 4.84,
        "prevClose": 4.824,
        "change": 0.016,
        "changePct": 0.33,
        "asOf": "2026-10-27",
        "prevAsOf": "2026-10-26",
        "gapDays": 1,
        "gapSuspect": false,
        "live": false,
        "latest": {
          "date": "2026-10-27",
          "close": 4.84,
          "prevDate": "2026-10-26",
          "prevClose": 4.824,
          "change": 0.016,
          "changePct": 0.33,
          "gapDays": 1,
          "gapSuspect": false
        },
        "settled": {
          "date": "2026-10-27",
          "close": 4.84,
          "prevDate": "2026-10-26",
          "prevClose": 4.824,
          "change": 0.016,
          "changePct": 0.33,
          "gapDays": 1,
          "gapSuspect": false
        },
        "quotePrice": 4.84,
        "series": [
          {
            "date": "2026-10-20",
            "close": 4.935
          },
          {
            "date": "2026-10-21",
            "close": 4.972
          },
          {
            "date": "2026-10-22",
            "close": 4.768
          },
          {
            "date": "2026-10-23",
            "close": 4.805
          },
          {
            "date": "2026-10-26",
            "close": 4.824
          },
          {
            "date": "2026-10-27",
            "close": 4.84
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
        "close": 101.96,
        "prevClose": 101.81,
        "change": 0.15,
        "changePct": 0.15,
        "asOf": "2026-10-26",
        "prevAsOf": "2026-10-23",
        "gapDays": 3,
        "gapSuspect": false,
        "live": true,
        "latest": {
          "date": "2026-10-27",
          "close": 102.365,
          "prevDate": "2026-10-26",
          "prevClose": 101.96,
          "change": 0.405,
          "changePct": 0.4,
          "gapDays": 1,
          "gapSuspect": false
        },
        "settled": {
          "date": "2026-10-26",
          "close": 101.96,
          "prevDate": "2026-10-23",
          "prevClose": 101.81,
          "change": 0.15,
          "changePct": 0.15,
          "gapDays": 3,
          "gapSuspect": false
        },
        "quotePrice": 102.365,
        "series": [
          {
            "date": "2026-10-20",
            "close": 101.73
          },
          {
            "date": "2026-10-21",
            "close": 101.78
          },
          {
            "date": "2026-10-22",
            "close": 101.61
          },
          {
            "date": "2026-10-23",
            "close": 101.81
          },
          {
            "date": "2026-10-26",
            "close": 101.96
          },
          {
            "date": "2026-10-27",
            "close": 102.365
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
        "close": 101.76,
        "prevClose": 103.27,
        "change": -1.51,
        "changePct": -1.46,
        "asOf": "2026-10-26",
        "prevAsOf": "2026-10-23",
        "gapDays": 3,
        "gapSuspect": false,
        "live": true,
        "latest": {
          "date": "2026-10-27",
          "close": 100,
          "prevDate": "2026-10-26",
          "prevClose": 101.76,
          "change": -1.76,
          "changePct": -1.73,
          "gapDays": 1,
          "gapSuspect": false
        },
        "settled": {
          "date": "2026-10-26",
          "close": 101.76,
          "prevDate": "2026-10-23",
          "prevClose": 103.27,
          "change": -1.51,
          "changePct": -1.46,
          "gapDays": 3,
          "gapSuspect": false
        },
        "quotePrice": 100,
        "series": [
          {
            "date": "2026-10-20",
            "close": 101.79
          },
          {
            "date": "2026-10-21",
            "close": 97.15
          },
          {
            "date": "2026-10-22",
            "close": 99.47
          },
          {
            "date": "2026-10-23",
            "close": 103.27
          },
          {
            "date": "2026-10-26",
            "close": 101.76
          },
          {
            "date": "2026-10-27",
            "close": 100
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
        "close": 115.81,
        "prevClose": 116.72,
        "change": -0.91,
        "changePct": -0.78,
        "asOf": "2026-10-26",
        "prevAsOf": "2026-10-23",
        "gapDays": 3,
        "gapSuspect": false,
        "live": true,
        "latest": {
          "date": "2026-10-27",
          "close": 109.49,
          "prevDate": "2026-10-26",
          "prevClose": 115.81,
          "change": -6.32,
          "changePct": -5.46,
          "gapDays": 1,
          "gapSuspect": false
        },
        "settled": {
          "date": "2026-10-26",
          "close": 115.81,
          "prevDate": "2026-10-23",
          "prevClose": 116.72,
          "change": -0.91,
          "changePct": -0.78,
          "gapDays": 3,
          "gapSuspect": false
        },
        "quotePrice": 109.49,
        "series": [
          {
            "date": "2026-10-20",
            "close": 108.79
          },
          {
            "date": "2026-10-21",
            "close": 108.82
          },
          {
            "date": "2026-10-22",
            "close": 113.17
          },
          {
            "date": "2026-10-23",
            "close": 116.72
          },
          {
            "date": "2026-10-26",
            "close": 115.81
          },
          {
            "date": "2026-10-27",
            "close": 109.49
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
        "close": 4038.3999,
        "prevClose": 4007.8999,
        "change": 30.5,
        "changePct": 0.76,
        "asOf": "2026-10-26",
        "prevAsOf": "2026-10-23",
        "gapDays": 3,
        "gapSuspect": false,
        "live": true,
        "latest": {
          "date": "2026-10-27",
          "close": 4074.3,
          "prevDate": "2026-10-26",
          "prevClose": 4038.3999,
          "change": 35.9001,
          "changePct": 0.89,
          "gapDays": 1,
          "gapSuspect": false
        },
        "settled": {
          "date": "2026-10-26",
          "close": 4038.3999,
          "prevDate": "2026-10-23",
          "prevClose": 4007.8999,
          "change": 30.5,
          "changePct": 0.76,
          "gapDays": 3,
          "gapSuspect": false
        },
        "quotePrice": 4074.3,
        "series": [
          {
            "date": "2026-10-20",
            "close": 4142.6001
          },
          {
            "date": "2026-10-21",
            "close": 4150
          },
          {
            "date": "2026-10-22",
            "close": 4060.3999
          },
          {
            "date": "2026-10-23",
            "close": 4007.8999
          },
          {
            "date": "2026-10-26",
            "close": 4038.3999
          },
          {
            "date": "2026-10-27",
            "close": 4074.3
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
        "close": 156.83,
        "prevClose": 156.494,
        "change": 0.336,
        "changePct": 0.21,
        "asOf": "2026-10-26",
        "prevAsOf": "2026-10-23",
        "gapDays": 3,
        "gapSuspect": false,
        "live": true,
        "latest": {
          "date": "2026-10-27",
          "close": 157.975,
          "prevDate": "2026-10-26",
          "prevClose": 156.83,
          "change": 1.145,
          "changePct": 0.73,
          "gapDays": 1,
          "gapSuspect": false
        },
        "settled": {
          "date": "2026-10-26",
          "close": 156.83,
          "prevDate": "2026-10-23",
          "prevClose": 156.494,
          "change": 0.336,
          "changePct": 0.21,
          "gapDays": 3,
          "gapSuspect": false
        },
        "quotePrice": 157.975,
        "series": [
          {
            "date": "2026-10-20",
            "close": 158.523
          },
          {
            "date": "2026-10-21",
            "close": 158.268
          },
          {
            "date": "2026-10-22",
            "close": 158.132
          },
          {
            "date": "2026-10-23",
            "close": 156.494
          },
          {
            "date": "2026-10-26",
            "close": 156.83
          },
          {
            "date": "2026-10-27",
            "close": 157.975
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
        "close": 6.6779,
        "prevClose": 6.6779,
        "change": 0,
        "changePct": 0,
        "asOf": "2026-10-26",
        "prevAsOf": "2026-10-23",
        "gapDays": 3,
        "gapSuspect": false,
        "live": true,
        "latest": {
          "date": "2026-10-27",
          "close": 6.6655,
          "prevDate": "2026-10-26",
          "prevClose": 6.6779,
          "change": -0.0124,
          "changePct": -0.19,
          "gapDays": 1,
          "gapSuspect": false
        },
        "settled": {
          "date": "2026-10-26",
          "close": 6.6779,
          "prevDate": "2026-10-23",
          "prevClose": 6.6779,
          "change": 0,
          "changePct": 0,
          "gapDays": 3,
          "gapSuspect": false
        },
        "quotePrice": 6.6655,
        "series": [
          {
            "date": "2026-10-20",
            "close": 6.6909
          },
          {
            "date": "2026-10-21",
            "close": 6.6779
          },
          {
            "date": "2026-10-22",
            "close": 6.6779
          },
          {
            "date": "2026-10-23",
            "close": 6.6779
          },
          {
            "date": "2026-10-26",
            "close": 6.6779
          },
          {
            "date": "2026-10-27",
            "close": 6.6655
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
        "close": 32.5708,
        "prevClose": 32.597,
        "change": -0.0262,
        "changePct": -0.08,
        "asOf": "2026-10-26",
        "prevAsOf": "2026-10-23",
        "gapDays": 3,
        "gapSuspect": false,
        "live": true,
        "latest": {
          "date": "2026-10-27",
          "close": 32.455,
          "prevDate": "2026-10-26",
          "prevClose": 32.5708,
          "change": -0.1158,
          "changePct": -0.36,
          "gapDays": 1,
          "gapSuspect": false
        },
        "settled": {
          "date": "2026-10-26",
          "close": 32.5708,
          "prevDate": "2026-10-23",
          "prevClose": 32.597,
          "change": -0.0262,
          "changePct": -0.08,
          "gapDays": 3,
          "gapSuspect": false
        },
        "quotePrice": 32.455,
        "series": [
          {
            "date": "2026-10-20",
            "close": 32.4802
          },
          {
            "date": "2026-10-21",
            "close": 32.5776
          },
          {
            "date": "2026-10-22",
            "close": 32.3659
          },
          {
            "date": "2026-10-23",
            "close": 32.597
          },
          {
            "date": "2026-10-26",
            "close": 32.5708
          },
          {
            "date": "2026-10-27",
            "close": 32.455
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
        "close": 46041.4297,
        "prevClose": 46887.7695,
        "change": -846.3398,
        "changePct": -1.81,
        "asOf": "2026-10-22",
        "prevAsOf": "2026-10-21",
        "gapDays": 1,
        "gapSuspect": false,
        "live": false,
        "latest": {
          "date": "2026-10-22",
          "close": 46041.4297,
          "prevDate": "2026-10-21",
          "prevClose": 46887.7695,
          "change": -846.3398,
          "changePct": -1.81,
          "gapDays": 1,
          "gapSuspect": false
        },
        "settled": {
          "date": "2026-10-22",
          "close": 46041.4297,
          "prevDate": "2026-10-21",
          "prevClose": 46887.7695,
          "change": -846.3398,
          "changePct": -1.81,
          "gapDays": 1,
          "gapSuspect": false
        },
        "quotePrice": 46096.23,
        "series": [
          {
            "date": "2026-10-15",
            "close": 46969.8711
          },
          {
            "date": "2026-10-16",
            "close": 47111.2617
          },
          {
            "date": "2026-10-19",
            "close": 46822.0781
          },
          {
            "date": "2026-10-20",
            "close": 46292.9297
          },
          {
            "date": "2026-10-21",
            "close": 46887.7695
          },
          {
            "date": "2026-10-22",
            "close": 46041.4297
          }
        ],
        "currency": "TWD",
        "timezone": "Asia/Taipei",
        "source": "Yahoo Finance chart API（日線）"
      }
    }
  }
};
