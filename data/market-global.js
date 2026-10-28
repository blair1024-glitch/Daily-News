/**
 * market-global.js — 由 GitHub Actions 自動產生，請勿手動編輯。
 * 產生器：scripts/fetch-global-market.mjs
 *
 * 國際行情中繼資料，供每日 dashboard 更新流程讀用，不會被 index.html 載入。
 * ok:false 代表該標的當次抓不到，error 說明原因——請據實標註，不要沿用舊值。
 */
window.MARKET_GLOBAL = {
  "fetchedAt": "2026-10-28T02:02:12.727Z",
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
          "close": 102.413,
          "prevDate": "2026-10-26",
          "prevClose": 101.96,
          "change": 0.453,
          "changePct": 0.44,
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
        "quotePrice": 102.413,
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
            "close": 102.413
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
          "close": 101.15,
          "prevDate": "2026-10-26",
          "prevClose": 101.76,
          "change": -0.61,
          "changePct": -0.6,
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
        "quotePrice": 101.15,
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
            "close": 101.15
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
          "close": 111,
          "prevDate": "2026-10-26",
          "prevClose": 115.81,
          "change": -4.81,
          "changePct": -4.15,
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
        "quotePrice": 111,
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
            "close": 111
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
          "close": 4062.3999,
          "prevDate": "2026-10-26",
          "prevClose": 4038.3999,
          "change": 24,
          "changePct": 0.59,
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
        "quotePrice": 4062.4,
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
            "close": 4062.3999
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
        "close": 157.528,
        "prevClose": 156.83,
        "change": 0.698,
        "changePct": 0.45,
        "asOf": "2026-10-27",
        "prevAsOf": "2026-10-26",
        "gapDays": 1,
        "gapSuspect": false,
        "live": true,
        "latest": {
          "date": "2026-10-28",
          "close": 157.948,
          "prevDate": "2026-10-27",
          "prevClose": 157.528,
          "change": 0.42,
          "changePct": 0.27,
          "gapDays": 1,
          "gapSuspect": false
        },
        "settled": {
          "date": "2026-10-27",
          "close": 157.528,
          "prevDate": "2026-10-26",
          "prevClose": 156.83,
          "change": 0.698,
          "changePct": 0.45,
          "gapDays": 1,
          "gapSuspect": false
        },
        "quotePrice": 157.948,
        "series": [
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
            "close": 157.528
          },
          {
            "date": "2026-10-28",
            "close": 157.948
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
        "close": 6.67,
        "prevClose": 6.6779,
        "change": -0.0079,
        "changePct": -0.12,
        "asOf": "2026-10-27",
        "prevAsOf": "2026-10-26",
        "gapDays": 1,
        "gapSuspect": false,
        "live": true,
        "latest": {
          "date": "2026-10-28",
          "close": 6.6675,
          "prevDate": "2026-10-27",
          "prevClose": 6.67,
          "change": -0.0025,
          "changePct": -0.04,
          "gapDays": 1,
          "gapSuspect": false
        },
        "settled": {
          "date": "2026-10-27",
          "close": 6.67,
          "prevDate": "2026-10-26",
          "prevClose": 6.6779,
          "change": -0.0079,
          "changePct": -0.12,
          "gapDays": 1,
          "gapSuspect": false
        },
        "quotePrice": 6.6675,
        "series": [
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
            "close": 6.67
          },
          {
            "date": "2026-10-28",
            "close": 6.6675
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
        "close": 32.5348,
        "prevClose": 32.5708,
        "change": -0.036,
        "changePct": -0.11,
        "asOf": "2026-10-27",
        "prevAsOf": "2026-10-26",
        "gapDays": 1,
        "gapSuspect": false,
        "live": true,
        "latest": {
          "date": "2026-10-28",
          "close": 32.39,
          "prevDate": "2026-10-27",
          "prevClose": 32.5348,
          "change": -0.1448,
          "changePct": -0.45,
          "gapDays": 1,
          "gapSuspect": false
        },
        "settled": {
          "date": "2026-10-27",
          "close": 32.5348,
          "prevDate": "2026-10-26",
          "prevClose": 32.5708,
          "change": -0.036,
          "changePct": -0.11,
          "gapDays": 1,
          "gapSuspect": false
        },
        "quotePrice": 32.39,
        "series": [
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
            "close": 32.5348
          },
          {
            "date": "2026-10-28",
            "close": 32.39
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
        "close": 46096.2305,
        "prevClose": 46041.4297,
        "change": 54.8008,
        "changePct": 0.12,
        "asOf": "2026-10-27",
        "prevAsOf": "2026-10-22",
        "gapDays": 5,
        "gapSuspect": true,
        "live": true,
        "latest": {
          "date": "2026-10-28",
          "close": 46917.2305,
          "prevDate": "2026-10-27",
          "prevClose": 46096.2305,
          "change": 821,
          "changePct": 1.78,
          "gapDays": 1,
          "gapSuspect": false
        },
        "settled": {
          "date": "2026-10-27",
          "close": 46096.2305,
          "prevDate": "2026-10-22",
          "prevClose": 46041.4297,
          "change": 54.8008,
          "changePct": 0.12,
          "gapDays": 5,
          "gapSuspect": true
        },
        "quotePrice": 46917.23,
        "series": [
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
          },
          {
            "date": "2026-10-27",
            "close": 46096.2305
          },
          {
            "date": "2026-10-28",
            "close": 46917.2305
          }
        ],
        "currency": "TWD",
        "timezone": "Asia/Taipei",
        "source": "Yahoo Finance chart API（日線）"
      }
    }
  }
};
