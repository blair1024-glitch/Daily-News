/**
 * market-global.js — 由 GitHub Actions 自動產生，請勿手動編輯。
 * 產生器：scripts/fetch-global-market.mjs
 *
 * 國際行情中繼資料，供每日 dashboard 更新流程讀用，不會被 index.html 載入。
 * ok:false 代表該標的當次抓不到，error 說明原因——請據實標註，不要沿用舊值。
 */
window.MARKET_GLOBAL = {
  "fetchedAt": "2026-09-30T16:41:08.395Z",
  "okCount": 16,
  "totalCount": 16,
  "items": {
    "sox": {
      "ok": true,
      "label": "費城半導體 SOX",
      "symbol": "%5ESOX",
      "value": {
        "close": 12629.1602,
        "prevClose": 12465.2402,
        "change": 163.92,
        "changePct": 1.32,
        "asOf": "2026-09-29",
        "prevAsOf": "2026-09-28",
        "gapDays": 1,
        "gapSuspect": false,
        "live": true,
        "latest": {
          "date": "2026-09-30",
          "close": 12591.4922,
          "prevDate": "2026-09-29",
          "prevClose": 12629.1602,
          "change": -37.668,
          "changePct": -0.3,
          "gapDays": 1,
          "gapSuspect": false
        },
        "settled": {
          "date": "2026-09-29",
          "close": 12629.1602,
          "prevDate": "2026-09-28",
          "prevClose": 12465.2402,
          "change": 163.92,
          "changePct": 1.32,
          "gapDays": 1,
          "gapSuspect": false
        },
        "quotePrice": 12591.492,
        "series": [
          {
            "date": "2026-09-23",
            "close": 12534.2803
          },
          {
            "date": "2026-09-24",
            "close": 12492.54
          },
          {
            "date": "2026-09-25",
            "close": 12668.9297
          },
          {
            "date": "2026-09-28",
            "close": 12465.2402
          },
          {
            "date": "2026-09-29",
            "close": 12629.1602
          },
          {
            "date": "2026-09-30",
            "close": 12591.4922
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
        "close": 16.04,
        "prevClose": 16.07,
        "change": -0.03,
        "changePct": -0.19,
        "asOf": "2026-09-29",
        "prevAsOf": "2026-09-28",
        "gapDays": 1,
        "gapSuspect": false,
        "live": true,
        "latest": {
          "date": "2026-09-30",
          "close": 15.86,
          "prevDate": "2026-09-29",
          "prevClose": 16.04,
          "change": -0.18,
          "changePct": -1.12,
          "gapDays": 1,
          "gapSuspect": false
        },
        "settled": {
          "date": "2026-09-29",
          "close": 16.04,
          "prevDate": "2026-09-28",
          "prevClose": 16.07,
          "change": -0.03,
          "changePct": -0.19,
          "gapDays": 1,
          "gapSuspect": false
        },
        "quotePrice": 15.86,
        "series": [
          {
            "date": "2026-09-23",
            "close": 15.18
          },
          {
            "date": "2026-09-24",
            "close": 15.67
          },
          {
            "date": "2026-09-25",
            "close": 14.87
          },
          {
            "date": "2026-09-28",
            "close": 16.07
          },
          {
            "date": "2026-09-29",
            "close": 16.04
          },
          {
            "date": "2026-09-30",
            "close": 15.86
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
        "close": 7670.8398,
        "prevClose": 7683.6899,
        "change": -12.8501,
        "changePct": -0.17,
        "asOf": "2026-09-29",
        "prevAsOf": "2026-09-28",
        "gapDays": 1,
        "gapSuspect": false,
        "live": true,
        "latest": {
          "date": "2026-09-30",
          "close": 7710.0498,
          "prevDate": "2026-09-29",
          "prevClose": 7670.8398,
          "change": 39.21,
          "changePct": 0.51,
          "gapDays": 1,
          "gapSuspect": false
        },
        "settled": {
          "date": "2026-09-29",
          "close": 7670.8398,
          "prevDate": "2026-09-28",
          "prevClose": 7683.6899,
          "change": -12.8501,
          "changePct": -0.17,
          "gapDays": 1,
          "gapSuspect": false
        },
        "quotePrice": 7710.05,
        "series": [
          {
            "date": "2026-09-23",
            "close": 7706.0298
          },
          {
            "date": "2026-09-24",
            "close": 7704.1299
          },
          {
            "date": "2026-09-25",
            "close": 7743.4102
          },
          {
            "date": "2026-09-28",
            "close": 7683.6899
          },
          {
            "date": "2026-09-29",
            "close": 7670.8398
          },
          {
            "date": "2026-09-30",
            "close": 7710.0498
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
        "close": 26797.5391,
        "prevClose": 26820.3809,
        "change": -22.8418,
        "changePct": -0.09,
        "asOf": "2026-09-29",
        "prevAsOf": "2026-09-28",
        "gapDays": 1,
        "gapSuspect": false,
        "live": true,
        "latest": {
          "date": "2026-09-30",
          "close": 27057.8184,
          "prevDate": "2026-09-29",
          "prevClose": 26797.5391,
          "change": 260.2793,
          "changePct": 0.97,
          "gapDays": 1,
          "gapSuspect": false
        },
        "settled": {
          "date": "2026-09-29",
          "close": 26797.5391,
          "prevDate": "2026-09-28",
          "prevClose": 26820.3809,
          "change": -22.8418,
          "changePct": -0.09,
          "gapDays": 1,
          "gapSuspect": false
        },
        "quotePrice": 27057.818,
        "series": [
          {
            "date": "2026-09-23",
            "close": 26936.0391
          },
          {
            "date": "2026-09-24",
            "close": 26939.3691
          },
          {
            "date": "2026-09-25",
            "close": 27068.7207
          },
          {
            "date": "2026-09-28",
            "close": 26820.3809
          },
          {
            "date": "2026-09-29",
            "close": 26797.5391
          },
          {
            "date": "2026-09-30",
            "close": 27057.8184
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
        "close": 51349.9219,
        "prevClose": 51481.5117,
        "change": -131.5898,
        "changePct": -0.26,
        "asOf": "2026-09-29",
        "prevAsOf": "2026-09-28",
        "gapDays": 1,
        "gapSuspect": false,
        "live": true,
        "latest": {
          "date": "2026-09-30",
          "close": 51307.2188,
          "prevDate": "2026-09-29",
          "prevClose": 51349.9219,
          "change": -42.7031,
          "changePct": -0.08,
          "gapDays": 1,
          "gapSuspect": false
        },
        "settled": {
          "date": "2026-09-29",
          "close": 51349.9219,
          "prevDate": "2026-09-28",
          "prevClose": 51481.5117,
          "change": -131.5898,
          "changePct": -0.26,
          "gapDays": 1,
          "gapSuspect": false
        },
        "quotePrice": 51307.22,
        "series": [
          {
            "date": "2026-09-23",
            "close": 51511.5898
          },
          {
            "date": "2026-09-24",
            "close": 51349.9805
          },
          {
            "date": "2026-09-25",
            "close": 51828.6211
          },
          {
            "date": "2026-09-28",
            "close": 51481.5117
          },
          {
            "date": "2026-09-29",
            "close": 51349.9219
          },
          {
            "date": "2026-09-30",
            "close": 51307.2188
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
        "close": 5.255,
        "prevClose": 5.24,
        "change": 0.015,
        "changePct": 0.29,
        "asOf": "2026-09-29",
        "prevAsOf": "2026-09-28",
        "gapDays": 1,
        "gapSuspect": false,
        "live": true,
        "latest": {
          "date": "2026-09-30",
          "close": 5.285,
          "prevDate": "2026-09-29",
          "prevClose": 5.255,
          "change": 0.03,
          "changePct": 0.57,
          "gapDays": 1,
          "gapSuspect": false
        },
        "settled": {
          "date": "2026-09-29",
          "close": 5.255,
          "prevDate": "2026-09-28",
          "prevClose": 5.24,
          "change": 0.015,
          "changePct": 0.29,
          "gapDays": 1,
          "gapSuspect": false
        },
        "quotePrice": 5.285,
        "series": [
          {
            "date": "2026-09-23",
            "close": 5.114
          },
          {
            "date": "2026-09-24",
            "close": 5.162
          },
          {
            "date": "2026-09-25",
            "close": 5.184
          },
          {
            "date": "2026-09-28",
            "close": 5.24
          },
          {
            "date": "2026-09-29",
            "close": 5.255
          },
          {
            "date": "2026-09-30",
            "close": 5.285
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
        "close": 5.594,
        "prevClose": 5.561,
        "change": 0.033,
        "changePct": 0.59,
        "asOf": "2026-09-29",
        "prevAsOf": "2026-09-28",
        "gapDays": 1,
        "gapSuspect": false,
        "live": true,
        "latest": {
          "date": "2026-09-30",
          "close": 5.636,
          "prevDate": "2026-09-29",
          "prevClose": 5.594,
          "change": 0.042,
          "changePct": 0.75,
          "gapDays": 1,
          "gapSuspect": false
        },
        "settled": {
          "date": "2026-09-29",
          "close": 5.594,
          "prevDate": "2026-09-28",
          "prevClose": 5.561,
          "change": 0.033,
          "changePct": 0.59,
          "gapDays": 1,
          "gapSuspect": false
        },
        "quotePrice": 5.636,
        "series": [
          {
            "date": "2026-09-23",
            "close": 5.401
          },
          {
            "date": "2026-09-24",
            "close": 5.461
          },
          {
            "date": "2026-09-25",
            "close": 5.504
          },
          {
            "date": "2026-09-28",
            "close": 5.561
          },
          {
            "date": "2026-09-29",
            "close": 5.594
          },
          {
            "date": "2026-09-30",
            "close": 5.636
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
        "close": 5.063,
        "prevClose": 5.068,
        "change": -0.005,
        "changePct": -0.1,
        "asOf": "2026-09-29",
        "prevAsOf": "2026-09-28",
        "gapDays": 1,
        "gapSuspect": false,
        "live": true,
        "latest": {
          "date": "2026-09-30",
          "close": 5.08,
          "prevDate": "2026-09-29",
          "prevClose": 5.063,
          "change": 0.017,
          "changePct": 0.34,
          "gapDays": 1,
          "gapSuspect": false
        },
        "settled": {
          "date": "2026-09-29",
          "close": 5.063,
          "prevDate": "2026-09-28",
          "prevClose": 5.068,
          "change": -0.005,
          "changePct": -0.1,
          "gapDays": 1,
          "gapSuspect": false
        },
        "quotePrice": 5.08,
        "series": [
          {
            "date": "2026-09-23",
            "close": 4.997
          },
          {
            "date": "2026-09-24",
            "close": 5.025
          },
          {
            "date": "2026-09-25",
            "close": 5.007
          },
          {
            "date": "2026-09-28",
            "close": 5.068
          },
          {
            "date": "2026-09-29",
            "close": 5.063
          },
          {
            "date": "2026-09-30",
            "close": 5.08
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
        "close": 101.37,
        "prevClose": 101.2,
        "change": 0.17,
        "changePct": 0.17,
        "asOf": "2026-09-29",
        "prevAsOf": "2026-09-28",
        "gapDays": 1,
        "gapSuspect": false,
        "live": true,
        "latest": {
          "date": "2026-09-30",
          "close": 101.414,
          "prevDate": "2026-09-29",
          "prevClose": 101.37,
          "change": 0.044,
          "changePct": 0.04,
          "gapDays": 1,
          "gapSuspect": false
        },
        "settled": {
          "date": "2026-09-29",
          "close": 101.37,
          "prevDate": "2026-09-28",
          "prevClose": 101.2,
          "change": 0.17,
          "changePct": 0.17,
          "gapDays": 1,
          "gapSuspect": false
        },
        "quotePrice": 101.414,
        "series": [
          {
            "date": "2026-09-23",
            "close": 101.1
          },
          {
            "date": "2026-09-24",
            "close": 101.29
          },
          {
            "date": "2026-09-25",
            "close": 100.97
          },
          {
            "date": "2026-09-28",
            "close": 101.2
          },
          {
            "date": "2026-09-29",
            "close": 101.37
          },
          {
            "date": "2026-09-30",
            "close": 101.414
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
        "close": 89.38,
        "prevClose": 92.6,
        "change": -3.22,
        "changePct": -3.48,
        "asOf": "2026-09-29",
        "prevAsOf": "2026-09-28",
        "gapDays": 1,
        "gapSuspect": false,
        "live": true,
        "latest": {
          "date": "2026-09-30",
          "close": 91.5,
          "prevDate": "2026-09-29",
          "prevClose": 89.38,
          "change": 2.12,
          "changePct": 2.37,
          "gapDays": 1,
          "gapSuspect": false
        },
        "settled": {
          "date": "2026-09-29",
          "close": 89.38,
          "prevDate": "2026-09-28",
          "prevClose": 92.6,
          "change": -3.22,
          "changePct": -3.48,
          "gapDays": 1,
          "gapSuspect": false
        },
        "quotePrice": 91.5,
        "series": [
          {
            "date": "2026-09-23",
            "close": 92.16
          },
          {
            "date": "2026-09-24",
            "close": 94.61
          },
          {
            "date": "2026-09-25",
            "close": 92.41
          },
          {
            "date": "2026-09-28",
            "close": 92.6
          },
          {
            "date": "2026-09-29",
            "close": 89.38
          },
          {
            "date": "2026-09-30",
            "close": 91.5
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
        "close": 102.59,
        "prevClose": 105.28,
        "change": -2.69,
        "changePct": -2.56,
        "asOf": "2026-09-29",
        "prevAsOf": "2026-09-28",
        "gapDays": 1,
        "gapSuspect": false,
        "live": true,
        "latest": {
          "date": "2026-09-30",
          "close": 99.01,
          "prevDate": "2026-09-29",
          "prevClose": 102.59,
          "change": -3.58,
          "changePct": -3.49,
          "gapDays": 1,
          "gapSuspect": false
        },
        "settled": {
          "date": "2026-09-29",
          "close": 102.59,
          "prevDate": "2026-09-28",
          "prevClose": 105.28,
          "change": -2.69,
          "changePct": -2.56,
          "gapDays": 1,
          "gapSuspect": false
        },
        "quotePrice": 99.01,
        "series": [
          {
            "date": "2026-09-23",
            "close": 103.08
          },
          {
            "date": "2026-09-24",
            "close": 106.6
          },
          {
            "date": "2026-09-25",
            "close": 104.32
          },
          {
            "date": "2026-09-28",
            "close": 105.28
          },
          {
            "date": "2026-09-29",
            "close": 102.59
          },
          {
            "date": "2026-09-30",
            "close": 99.01
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
        "close": 4179.7002,
        "prevClose": 4168.3999,
        "change": 11.3003,
        "changePct": 0.27,
        "asOf": "2026-09-29",
        "prevAsOf": "2026-09-28",
        "gapDays": 1,
        "gapSuspect": false,
        "live": true,
        "latest": {
          "date": "2026-09-30",
          "close": 4191,
          "prevDate": "2026-09-29",
          "prevClose": 4179.7002,
          "change": 11.2998,
          "changePct": 0.27,
          "gapDays": 1,
          "gapSuspect": false
        },
        "settled": {
          "date": "2026-09-29",
          "close": 4179.7002,
          "prevDate": "2026-09-28",
          "prevClose": 4168.3999,
          "change": 11.3003,
          "changePct": 0.27,
          "gapDays": 1,
          "gapSuspect": false
        },
        "quotePrice": 4191,
        "series": [
          {
            "date": "2026-09-23",
            "close": 4318.3999
          },
          {
            "date": "2026-09-24",
            "close": 4298
          },
          {
            "date": "2026-09-25",
            "close": 4321.2002
          },
          {
            "date": "2026-09-28",
            "close": 4168.3999
          },
          {
            "date": "2026-09-29",
            "close": 4179.7002
          },
          {
            "date": "2026-09-30",
            "close": 4191
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
        "close": 157.361,
        "prevClose": 157.463,
        "change": -0.102,
        "changePct": -0.06,
        "asOf": "2026-09-29",
        "prevAsOf": "2026-09-28",
        "gapDays": 1,
        "gapSuspect": false,
        "live": true,
        "latest": {
          "date": "2026-09-30",
          "close": 157.302,
          "prevDate": "2026-09-29",
          "prevClose": 157.361,
          "change": -0.059,
          "changePct": -0.04,
          "gapDays": 1,
          "gapSuspect": false
        },
        "settled": {
          "date": "2026-09-29",
          "close": 157.361,
          "prevDate": "2026-09-28",
          "prevClose": 157.463,
          "change": -0.102,
          "changePct": -0.06,
          "gapDays": 1,
          "gapSuspect": false
        },
        "quotePrice": 157.302,
        "series": [
          {
            "date": "2026-09-23",
            "close": 157.464
          },
          {
            "date": "2026-09-24",
            "close": 158.265
          },
          {
            "date": "2026-09-25",
            "close": 158.811
          },
          {
            "date": "2026-09-28",
            "close": 157.463
          },
          {
            "date": "2026-09-29",
            "close": 157.361
          },
          {
            "date": "2026-09-30",
            "close": 157.302
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
        "close": 6.7103,
        "prevClose": 6.7128,
        "change": -0.0025,
        "changePct": -0.04,
        "asOf": "2026-09-29",
        "prevAsOf": "2026-09-28",
        "gapDays": 1,
        "gapSuspect": false,
        "live": true,
        "latest": {
          "date": "2026-09-30",
          "close": 6.6978,
          "prevDate": "2026-09-29",
          "prevClose": 6.7103,
          "change": -0.0125,
          "changePct": -0.19,
          "gapDays": 1,
          "gapSuspect": false
        },
        "settled": {
          "date": "2026-09-29",
          "close": 6.7103,
          "prevDate": "2026-09-28",
          "prevClose": 6.7128,
          "change": -0.0025,
          "changePct": -0.04,
          "gapDays": 1,
          "gapSuspect": false
        },
        "quotePrice": 6.6978,
        "series": [
          {
            "date": "2026-09-23",
            "close": 6.6996
          },
          {
            "date": "2026-09-24",
            "close": 6.7111
          },
          {
            "date": "2026-09-25",
            "close": 6.7111
          },
          {
            "date": "2026-09-28",
            "close": 6.7128
          },
          {
            "date": "2026-09-29",
            "close": 6.7103
          },
          {
            "date": "2026-09-30",
            "close": 6.6978
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
        "close": 31.7822,
        "prevClose": 31.7787,
        "change": 0.0035,
        "changePct": 0.01,
        "asOf": "2026-09-29",
        "prevAsOf": "2026-09-28",
        "gapDays": 1,
        "gapSuspect": false,
        "live": true,
        "latest": {
          "date": "2026-09-30",
          "close": 31.861,
          "prevDate": "2026-09-29",
          "prevClose": 31.7822,
          "change": 0.0788,
          "changePct": 0.25,
          "gapDays": 1,
          "gapSuspect": false
        },
        "settled": {
          "date": "2026-09-29",
          "close": 31.7822,
          "prevDate": "2026-09-28",
          "prevClose": 31.7787,
          "change": 0.0035,
          "changePct": 0.01,
          "gapDays": 1,
          "gapSuspect": false
        },
        "quotePrice": 31.861,
        "series": [
          {
            "date": "2026-09-23",
            "close": 31.6795
          },
          {
            "date": "2026-09-24",
            "close": 31.7895
          },
          {
            "date": "2026-09-25",
            "close": 31.8062
          },
          {
            "date": "2026-09-28",
            "close": 31.7787
          },
          {
            "date": "2026-09-29",
            "close": 31.7822
          },
          {
            "date": "2026-09-30",
            "close": 31.861
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
        "close": 47631.9609,
        "prevClose": 48024.6016,
        "change": -392.6407,
        "changePct": -0.82,
        "asOf": "2026-09-29",
        "prevAsOf": "2026-09-24",
        "gapDays": 5,
        "gapSuspect": true,
        "live": false,
        "latest": {
          "date": "2026-09-29",
          "close": 47631.9609,
          "prevDate": "2026-09-24",
          "prevClose": 48024.6016,
          "change": -392.6407,
          "changePct": -0.82,
          "gapDays": 5,
          "gapSuspect": true
        },
        "settled": {
          "date": "2026-09-29",
          "close": 47631.9609,
          "prevDate": "2026-09-24",
          "prevClose": 48024.6016,
          "change": -392.6407,
          "changePct": -0.82,
          "gapDays": 5,
          "gapSuspect": true
        },
        "quotePrice": 47940.13,
        "series": [
          {
            "date": "2026-09-18",
            "close": 47180.75
          },
          {
            "date": "2026-09-21",
            "close": 47718.8398
          },
          {
            "date": "2026-09-22",
            "close": 47800.1719
          },
          {
            "date": "2026-09-23",
            "close": 48157.2891
          },
          {
            "date": "2026-09-24",
            "close": 48024.6016
          },
          {
            "date": "2026-09-29",
            "close": 47631.9609
          }
        ],
        "currency": "TWD",
        "timezone": "Asia/Taipei",
        "source": "Yahoo Finance chart API（日線）"
      }
    }
  }
};
