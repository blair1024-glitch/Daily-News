/**
 * market-global.js — 由 GitHub Actions 自動產生，請勿手動編輯。
 * 產生器：scripts/fetch-global-market.mjs
 *
 * 國際行情中繼資料，供每日 dashboard 更新流程讀用，不會被 index.html 載入。
 * ok:false 代表該標的當次抓不到，error 說明原因——請據實標註，不要沿用舊值。
 */
window.MARKET_GLOBAL = {
  "fetchedAt": "2026-10-27T01:50:28.187Z",
  "okCount": 16,
  "totalCount": 16,
  "items": {
    "sox": {
      "ok": true,
      "label": "費城半導體 SOX",
      "symbol": "%5ESOX",
      "value": {
        "close": 11083.4697,
        "prevClose": 10779.46,
        "change": 304.0097,
        "changePct": 2.82,
        "asOf": "2026-10-26",
        "prevAsOf": "2026-10-23",
        "gapDays": 3,
        "gapSuspect": false,
        "live": false,
        "latest": {
          "date": "2026-10-26",
          "close": 11083.4697,
          "prevDate": "2026-10-23",
          "prevClose": 10779.46,
          "change": 304.0097,
          "changePct": 2.82,
          "gapDays": 3,
          "gapSuspect": false
        },
        "settled": {
          "date": "2026-10-26",
          "close": 11083.4697,
          "prevDate": "2026-10-23",
          "prevClose": 10779.46,
          "change": 304.0097,
          "changePct": 2.82,
          "gapDays": 3,
          "gapSuspect": false
        },
        "quotePrice": 11083.47,
        "series": [
          {
            "date": "2026-10-19",
            "close": 11316.3398
          },
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
        "close": 18.39,
        "prevClose": 19.45,
        "change": -1.06,
        "changePct": -5.45,
        "asOf": "2026-10-26",
        "prevAsOf": "2026-10-23",
        "gapDays": 3,
        "gapSuspect": false,
        "live": false,
        "latest": {
          "date": "2026-10-26",
          "close": 18.39,
          "prevDate": "2026-10-23",
          "prevClose": 19.45,
          "change": -1.06,
          "changePct": -5.45,
          "gapDays": 3,
          "gapSuspect": false
        },
        "settled": {
          "date": "2026-10-26",
          "close": 18.39,
          "prevDate": "2026-10-23",
          "prevClose": 19.45,
          "change": -1.06,
          "changePct": -5.45,
          "gapDays": 3,
          "gapSuspect": false
        },
        "quotePrice": 18.39,
        "series": [
          {
            "date": "2026-10-19",
            "close": 18.44
          },
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
        "close": 7676.77,
        "prevClose": 7623.6802,
        "change": 53.0898,
        "changePct": 0.7,
        "asOf": "2026-10-26",
        "prevAsOf": "2026-10-23",
        "gapDays": 3,
        "gapSuspect": false,
        "live": false,
        "latest": {
          "date": "2026-10-26",
          "close": 7676.77,
          "prevDate": "2026-10-23",
          "prevClose": 7623.6802,
          "change": 53.0898,
          "changePct": 0.7,
          "gapDays": 3,
          "gapSuspect": false
        },
        "settled": {
          "date": "2026-10-26",
          "close": 7676.77,
          "prevDate": "2026-10-23",
          "prevClose": 7623.6802,
          "change": 53.0898,
          "changePct": 0.7,
          "gapDays": 3,
          "gapSuspect": false
        },
        "quotePrice": 7676.77,
        "series": [
          {
            "date": "2026-10-19",
            "close": 7690.73
          },
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
        "close": 26169.3809,
        "prevClose": 25955.3398,
        "change": 214.0411,
        "changePct": 0.82,
        "asOf": "2026-10-26",
        "prevAsOf": "2026-10-23",
        "gapDays": 3,
        "gapSuspect": false,
        "live": false,
        "latest": {
          "date": "2026-10-26",
          "close": 26169.3809,
          "prevDate": "2026-10-23",
          "prevClose": 25955.3398,
          "change": 214.0411,
          "changePct": 0.82,
          "gapDays": 3,
          "gapSuspect": false
        },
        "settled": {
          "date": "2026-10-26",
          "close": 26169.3809,
          "prevDate": "2026-10-23",
          "prevClose": 25955.3398,
          "change": 214.0411,
          "changePct": 0.82,
          "gapDays": 3,
          "gapSuspect": false
        },
        "quotePrice": 26169.38,
        "series": [
          {
            "date": "2026-10-19",
            "close": 26430.8906
          },
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
        "close": 52361.5781,
        "prevClose": 52215.1602,
        "change": 146.4179,
        "changePct": 0.28,
        "asOf": "2026-10-26",
        "prevAsOf": "2026-10-23",
        "gapDays": 3,
        "gapSuspect": false,
        "live": false,
        "latest": {
          "date": "2026-10-26",
          "close": 52361.5781,
          "prevDate": "2026-10-23",
          "prevClose": 52215.1602,
          "change": 146.4179,
          "changePct": 0.28,
          "gapDays": 3,
          "gapSuspect": false
        },
        "settled": {
          "date": "2026-10-26",
          "close": 52361.5781,
          "prevDate": "2026-10-23",
          "prevClose": 52215.1602,
          "change": 146.4179,
          "changePct": 0.28,
          "gapDays": 3,
          "gapSuspect": false
        },
        "quotePrice": 52361.58,
        "series": [
          {
            "date": "2026-10-19",
            "close": 51966.0313
          },
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
        "close": 4.986,
        "prevClose": 4.988,
        "change": -0.002,
        "changePct": -0.04,
        "asOf": "2026-10-26",
        "prevAsOf": "2026-10-23",
        "gapDays": 3,
        "gapSuspect": false,
        "live": false,
        "latest": {
          "date": "2026-10-26",
          "close": 4.986,
          "prevDate": "2026-10-23",
          "prevClose": 4.988,
          "change": -0.002,
          "changePct": -0.04,
          "gapDays": 3,
          "gapSuspect": false
        },
        "settled": {
          "date": "2026-10-26",
          "close": 4.986,
          "prevDate": "2026-10-23",
          "prevClose": 4.988,
          "change": -0.002,
          "changePct": -0.04,
          "gapDays": 3,
          "gapSuspect": false
        },
        "quotePrice": 4.986,
        "series": [
          {
            "date": "2026-10-19",
            "close": 5.136
          },
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
        "close": 5.301,
        "prevClose": 5.315,
        "change": -0.014,
        "changePct": -0.26,
        "asOf": "2026-10-26",
        "prevAsOf": "2026-10-23",
        "gapDays": 3,
        "gapSuspect": false,
        "live": false,
        "latest": {
          "date": "2026-10-26",
          "close": 5.301,
          "prevDate": "2026-10-23",
          "prevClose": 5.315,
          "change": -0.014,
          "changePct": -0.26,
          "gapDays": 3,
          "gapSuspect": false
        },
        "settled": {
          "date": "2026-10-26",
          "close": 5.301,
          "prevDate": "2026-10-23",
          "prevClose": 5.315,
          "change": -0.014,
          "changePct": -0.26,
          "gapDays": 3,
          "gapSuspect": false
        },
        "quotePrice": 5.301,
        "series": [
          {
            "date": "2026-10-19",
            "close": 5.472
          },
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
        "close": 4.824,
        "prevClose": 4.805,
        "change": 0.019,
        "changePct": 0.4,
        "asOf": "2026-10-26",
        "prevAsOf": "2026-10-23",
        "gapDays": 3,
        "gapSuspect": false,
        "live": false,
        "latest": {
          "date": "2026-10-26",
          "close": 4.824,
          "prevDate": "2026-10-23",
          "prevClose": 4.805,
          "change": 0.019,
          "changePct": 0.4,
          "gapDays": 3,
          "gapSuspect": false
        },
        "settled": {
          "date": "2026-10-26",
          "close": 4.824,
          "prevDate": "2026-10-23",
          "prevClose": 4.805,
          "change": 0.019,
          "changePct": 0.4,
          "gapDays": 3,
          "gapSuspect": false
        },
        "quotePrice": 4.824,
        "series": [
          {
            "date": "2026-10-19",
            "close": 4.929
          },
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
        "close": 101.81,
        "prevClose": 101.61,
        "change": 0.2,
        "changePct": 0.2,
        "asOf": "2026-10-23",
        "prevAsOf": "2026-10-22",
        "gapDays": 1,
        "gapSuspect": false,
        "live": true,
        "latest": {
          "date": "2026-10-26",
          "close": 102.055,
          "prevDate": "2026-10-23",
          "prevClose": 101.81,
          "change": 0.245,
          "changePct": 0.24,
          "gapDays": 3,
          "gapSuspect": false
        },
        "settled": {
          "date": "2026-10-23",
          "close": 101.81,
          "prevDate": "2026-10-22",
          "prevClose": 101.61,
          "change": 0.2,
          "changePct": 0.2,
          "gapDays": 1,
          "gapSuspect": false
        },
        "quotePrice": 102.055,
        "series": [
          {
            "date": "2026-10-19",
            "close": 101.98
          },
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
            "close": 102.055
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
        "close": 103.27,
        "prevClose": 99.47,
        "change": 3.8,
        "changePct": 3.82,
        "asOf": "2026-10-23",
        "prevAsOf": "2026-10-22",
        "gapDays": 1,
        "gapSuspect": false,
        "live": true,
        "latest": {
          "date": "2026-10-26",
          "close": 100.91,
          "prevDate": "2026-10-23",
          "prevClose": 103.27,
          "change": -2.36,
          "changePct": -2.29,
          "gapDays": 3,
          "gapSuspect": false
        },
        "settled": {
          "date": "2026-10-23",
          "close": 103.27,
          "prevDate": "2026-10-22",
          "prevClose": 99.47,
          "change": 3.8,
          "changePct": 3.82,
          "gapDays": 1,
          "gapSuspect": false
        },
        "quotePrice": 100.91,
        "series": [
          {
            "date": "2026-10-19",
            "close": 103.66
          },
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
            "close": 100.91
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
        "close": 116.72,
        "prevClose": 113.17,
        "change": 3.55,
        "changePct": 3.14,
        "asOf": "2026-10-23",
        "prevAsOf": "2026-10-22",
        "gapDays": 1,
        "gapSuspect": false,
        "live": true,
        "latest": {
          "date": "2026-10-26",
          "close": 109.78,
          "prevDate": "2026-10-23",
          "prevClose": 116.72,
          "change": -6.94,
          "changePct": -5.95,
          "gapDays": 3,
          "gapSuspect": false
        },
        "settled": {
          "date": "2026-10-23",
          "close": 116.72,
          "prevDate": "2026-10-22",
          "prevClose": 113.17,
          "change": 3.55,
          "changePct": 3.14,
          "gapDays": 1,
          "gapSuspect": false
        },
        "quotePrice": 109.78,
        "series": [
          {
            "date": "2026-10-19",
            "close": 109.55
          },
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
            "close": 109.78
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
        "close": 4007.8999,
        "prevClose": 4060.3999,
        "change": -52.5,
        "changePct": -1.29,
        "asOf": "2026-10-23",
        "prevAsOf": "2026-10-22",
        "gapDays": 1,
        "gapSuspect": false,
        "live": true,
        "latest": {
          "date": "2026-10-26",
          "close": 4028.8,
          "prevDate": "2026-10-23",
          "prevClose": 4007.8999,
          "change": 20.9001,
          "changePct": 0.52,
          "gapDays": 3,
          "gapSuspect": false
        },
        "settled": {
          "date": "2026-10-23",
          "close": 4007.8999,
          "prevDate": "2026-10-22",
          "prevClose": 4060.3999,
          "change": -52.5,
          "changePct": -1.29,
          "gapDays": 1,
          "gapSuspect": false
        },
        "quotePrice": 4028.8,
        "series": [
          {
            "date": "2026-10-19",
            "close": 4160.1001
          },
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
            "close": 4028.8
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
          "close": 157.685,
          "prevDate": "2026-10-26",
          "prevClose": 156.83,
          "change": 0.855,
          "changePct": 0.55,
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
        "quotePrice": 157.685,
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
            "close": 157.685
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
          "close": 6.6699,
          "prevDate": "2026-10-26",
          "prevClose": 6.6779,
          "change": -0.008,
          "changePct": -0.12,
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
        "quotePrice": 6.6699,
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
            "close": 6.6699
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
          "close": 32.537,
          "prevDate": "2026-10-26",
          "prevClose": 32.5708,
          "change": -0.0338,
          "changePct": -0.1,
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
        "quotePrice": 32.537,
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
            "close": 32.537
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
        "live": true,
        "latest": {
          "date": "2026-10-27",
          "close": 46269.1289,
          "prevDate": "2026-10-22",
          "prevClose": 46041.4297,
          "change": 227.6992,
          "changePct": 0.49,
          "gapDays": 5,
          "gapSuspect": true
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
        "quotePrice": 46269.13,
        "series": [
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
          },
          {
            "date": "2026-10-27",
            "close": 46269.1289
          }
        ],
        "currency": "TWD",
        "timezone": "Asia/Taipei",
        "source": "Yahoo Finance chart API（日線）"
      }
    }
  }
};
