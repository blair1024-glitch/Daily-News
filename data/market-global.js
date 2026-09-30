/**
 * market-global.js — 由 GitHub Actions 自動產生，請勿手動編輯。
 * 產生器：scripts/fetch-global-market.mjs
 *
 * 國際行情中繼資料，供每日 dashboard 更新流程讀用，不會被 index.html 載入。
 * ok:false 代表該標的當次抓不到，error 說明原因——請據實標註，不要沿用舊值。
 */
window.MARKET_GLOBAL = {
  "fetchedAt": "2026-09-30T01:51:44.249Z",
  "okCount": 16,
  "totalCount": 16,
  "items": {
    "sox": {
      "ok": true,
      "label": "費城半導體 SOX",
      "symbol": "%5ESOX",
      "value": {
        "close": 12629.1611,
        "prevClose": 12465.2402,
        "change": 163.9209,
        "changePct": 1.32,
        "asOf": "2026-09-29",
        "prevAsOf": "2026-09-28",
        "gapDays": 1,
        "gapSuspect": false,
        "live": false,
        "latest": {
          "date": "2026-09-29",
          "close": 12629.1611,
          "prevDate": "2026-09-28",
          "prevClose": 12465.2402,
          "change": 163.9209,
          "changePct": 1.32,
          "gapDays": 1,
          "gapSuspect": false
        },
        "settled": {
          "date": "2026-09-29",
          "close": 12629.1611,
          "prevDate": "2026-09-28",
          "prevClose": 12465.2402,
          "change": 163.9209,
          "changePct": 1.32,
          "gapDays": 1,
          "gapSuspect": false
        },
        "quotePrice": 12629.161,
        "series": [
          {
            "date": "2026-09-22",
            "close": 12689.8203
          },
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
            "close": 12629.1611
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
        "live": false,
        "latest": {
          "date": "2026-09-29",
          "close": 16.04,
          "prevDate": "2026-09-28",
          "prevClose": 16.07,
          "change": -0.03,
          "changePct": -0.19,
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
        "quotePrice": 16.04,
        "series": [
          {
            "date": "2026-09-22",
            "close": 14.21
          },
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
        "live": false,
        "latest": {
          "date": "2026-09-29",
          "close": 7670.8398,
          "prevDate": "2026-09-28",
          "prevClose": 7683.6899,
          "change": -12.8501,
          "changePct": -0.17,
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
        "quotePrice": 7670.84,
        "series": [
          {
            "date": "2026-09-22",
            "close": 7764.6401
          },
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
        "close": 26797.541,
        "prevClose": 26820.3809,
        "change": -22.8399,
        "changePct": -0.09,
        "asOf": "2026-09-29",
        "prevAsOf": "2026-09-28",
        "gapDays": 1,
        "gapSuspect": false,
        "live": false,
        "latest": {
          "date": "2026-09-29",
          "close": 26797.541,
          "prevDate": "2026-09-28",
          "prevClose": 26820.3809,
          "change": -22.8399,
          "changePct": -0.09,
          "gapDays": 1,
          "gapSuspect": false
        },
        "settled": {
          "date": "2026-09-29",
          "close": 26797.541,
          "prevDate": "2026-09-28",
          "prevClose": 26820.3809,
          "change": -22.8399,
          "changePct": -0.09,
          "gapDays": 1,
          "gapSuspect": false
        },
        "quotePrice": 26797.541,
        "series": [
          {
            "date": "2026-09-22",
            "close": 27244.2793
          },
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
            "close": 26797.541
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
        "live": false,
        "latest": {
          "date": "2026-09-29",
          "close": 51349.9219,
          "prevDate": "2026-09-28",
          "prevClose": 51481.5117,
          "change": -131.5898,
          "changePct": -0.26,
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
        "quotePrice": 51349.92,
        "series": [
          {
            "date": "2026-09-22",
            "close": 51863.6914
          },
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
        "live": false,
        "latest": {
          "date": "2026-09-29",
          "close": 5.255,
          "prevDate": "2026-09-28",
          "prevClose": 5.24,
          "change": 0.015,
          "changePct": 0.29,
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
        "quotePrice": 5.255,
        "series": [
          {
            "date": "2026-09-22",
            "close": 4.968
          },
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
        "live": false,
        "latest": {
          "date": "2026-09-29",
          "close": 5.594,
          "prevDate": "2026-09-28",
          "prevClose": 5.561,
          "change": 0.033,
          "changePct": 0.59,
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
        "quotePrice": 5.594,
        "series": [
          {
            "date": "2026-09-22",
            "close": 5.303
          },
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
        "live": false,
        "latest": {
          "date": "2026-09-29",
          "close": 5.063,
          "prevDate": "2026-09-28",
          "prevClose": 5.068,
          "change": -0.005,
          "changePct": -0.1,
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
        "quotePrice": 5.063,
        "series": [
          {
            "date": "2026-09-22",
            "close": 4.842
          },
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
        "close": 101.2,
        "prevClose": 100.97,
        "change": 0.23,
        "changePct": 0.23,
        "asOf": "2026-09-28",
        "prevAsOf": "2026-09-25",
        "gapDays": 3,
        "gapSuspect": false,
        "live": true,
        "latest": {
          "date": "2026-09-29",
          "close": 101.332,
          "prevDate": "2026-09-28",
          "prevClose": 101.2,
          "change": 0.132,
          "changePct": 0.13,
          "gapDays": 1,
          "gapSuspect": false
        },
        "settled": {
          "date": "2026-09-28",
          "close": 101.2,
          "prevDate": "2026-09-25",
          "prevClose": 100.97,
          "change": 0.23,
          "changePct": 0.23,
          "gapDays": 3,
          "gapSuspect": false
        },
        "quotePrice": 101.332,
        "series": [
          {
            "date": "2026-09-22",
            "close": 100.6
          },
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
            "close": 101.332
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
        "close": 92.6,
        "prevClose": 92.41,
        "change": 0.19,
        "changePct": 0.21,
        "asOf": "2026-09-28",
        "prevAsOf": "2026-09-25",
        "gapDays": 3,
        "gapSuspect": false,
        "live": true,
        "latest": {
          "date": "2026-09-29",
          "close": 89.58,
          "prevDate": "2026-09-28",
          "prevClose": 92.6,
          "change": -3.02,
          "changePct": -3.26,
          "gapDays": 1,
          "gapSuspect": false
        },
        "settled": {
          "date": "2026-09-28",
          "close": 92.6,
          "prevDate": "2026-09-25",
          "prevClose": 92.41,
          "change": 0.19,
          "changePct": 0.21,
          "gapDays": 3,
          "gapSuspect": false
        },
        "quotePrice": 89.58,
        "series": [
          {
            "date": "2026-09-22",
            "close": 94.59
          },
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
            "close": 89.58
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
        "close": 105.28,
        "prevClose": 104.32,
        "change": 0.96,
        "changePct": 0.92,
        "asOf": "2026-09-28",
        "prevAsOf": "2026-09-25",
        "gapDays": 3,
        "gapSuspect": false,
        "live": true,
        "latest": {
          "date": "2026-09-29",
          "close": 96.5,
          "prevDate": "2026-09-28",
          "prevClose": 105.28,
          "change": -8.78,
          "changePct": -8.34,
          "gapDays": 1,
          "gapSuspect": false
        },
        "settled": {
          "date": "2026-09-28",
          "close": 105.28,
          "prevDate": "2026-09-25",
          "prevClose": 104.32,
          "change": 0.96,
          "changePct": 0.92,
          "gapDays": 3,
          "gapSuspect": false
        },
        "quotePrice": 96.5,
        "series": [
          {
            "date": "2026-09-22",
            "close": 99.25
          },
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
            "close": 96.5
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
        "close": 4168.3999,
        "prevClose": 4321.2002,
        "change": -152.8003,
        "changePct": -3.54,
        "asOf": "2026-09-28",
        "prevAsOf": "2026-09-25",
        "gapDays": 3,
        "gapSuspect": false,
        "live": true,
        "latest": {
          "date": "2026-09-29",
          "close": 4201,
          "prevDate": "2026-09-28",
          "prevClose": 4168.3999,
          "change": 32.6001,
          "changePct": 0.78,
          "gapDays": 1,
          "gapSuspect": false
        },
        "settled": {
          "date": "2026-09-28",
          "close": 4168.3999,
          "prevDate": "2026-09-25",
          "prevClose": 4321.2002,
          "change": -152.8003,
          "changePct": -3.54,
          "gapDays": 3,
          "gapSuspect": false
        },
        "quotePrice": 4201,
        "series": [
          {
            "date": "2026-09-22",
            "close": 4376.3999
          },
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
            "close": 4201
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
          "close": 156.747,
          "prevDate": "2026-09-29",
          "prevClose": 157.361,
          "change": -0.614,
          "changePct": -0.39,
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
        "quotePrice": 156.747,
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
            "close": 156.747
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
          "close": 6.697,
          "prevDate": "2026-09-29",
          "prevClose": 6.7103,
          "change": -0.0133,
          "changePct": -0.2,
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
        "quotePrice": 6.697,
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
            "close": 6.697
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
          "close": 31.855,
          "prevDate": "2026-09-29",
          "prevClose": 31.7822,
          "change": 0.0728,
          "changePct": 0.23,
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
        "quotePrice": 31.855,
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
            "close": 31.855
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
        "live": true,
        "latest": {
          "date": "2026-09-30",
          "close": 48248.4102,
          "prevDate": "2026-09-29",
          "prevClose": 47631.9609,
          "change": 616.4493,
          "changePct": 1.29,
          "gapDays": 1,
          "gapSuspect": false
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
        "quotePrice": 48248.41,
        "series": [
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
          },
          {
            "date": "2026-09-30",
            "close": 48248.4102
          }
        ],
        "currency": "TWD",
        "timezone": "Asia/Taipei",
        "source": "Yahoo Finance chart API（日線）"
      }
    }
  }
};
