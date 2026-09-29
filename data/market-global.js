/**
 * market-global.js — 由 GitHub Actions 自動產生，請勿手動編輯。
 * 產生器：scripts/fetch-global-market.mjs
 *
 * 國際行情中繼資料，供每日 dashboard 更新流程讀用，不會被 index.html 載入。
 * ok:false 代表該標的當次抓不到，error 說明原因——請據實標註，不要沿用舊值。
 */
window.MARKET_GLOBAL = {
  "fetchedAt": "2026-09-29T02:29:38.112Z",
  "okCount": 16,
  "totalCount": 16,
  "items": {
    "sox": {
      "ok": true,
      "label": "費城半導體 SOX",
      "symbol": "%5ESOX",
      "value": {
        "close": 12465.2412,
        "prevClose": 12668.9297,
        "change": -203.6885,
        "changePct": -1.61,
        "asOf": "2026-09-28",
        "prevAsOf": "2026-09-25",
        "gapDays": 3,
        "gapSuspect": false,
        "live": false,
        "latest": {
          "date": "2026-09-28",
          "close": 12465.2412,
          "prevDate": "2026-09-25",
          "prevClose": 12668.9297,
          "change": -203.6885,
          "changePct": -1.61,
          "gapDays": 3,
          "gapSuspect": false
        },
        "settled": {
          "date": "2026-09-28",
          "close": 12465.2412,
          "prevDate": "2026-09-25",
          "prevClose": 12668.9297,
          "change": -203.6885,
          "changePct": -1.61,
          "gapDays": 3,
          "gapSuspect": false
        },
        "quotePrice": 12465.241,
        "series": [
          {
            "date": "2026-09-21",
            "close": 12433.1699
          },
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
            "close": 12465.2412
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
        "close": 16.07,
        "prevClose": 14.87,
        "change": 1.2,
        "changePct": 8.07,
        "asOf": "2026-09-28",
        "prevAsOf": "2026-09-25",
        "gapDays": 3,
        "gapSuspect": false,
        "live": false,
        "latest": {
          "date": "2026-09-28",
          "close": 16.07,
          "prevDate": "2026-09-25",
          "prevClose": 14.87,
          "change": 1.2,
          "changePct": 8.07,
          "gapDays": 3,
          "gapSuspect": false
        },
        "settled": {
          "date": "2026-09-28",
          "close": 16.07,
          "prevDate": "2026-09-25",
          "prevClose": 14.87,
          "change": 1.2,
          "changePct": 8.07,
          "gapDays": 3,
          "gapSuspect": false
        },
        "quotePrice": 16.07,
        "series": [
          {
            "date": "2026-09-21",
            "close": 14.87
          },
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
        "close": 7683.6899,
        "prevClose": 7743.4102,
        "change": -59.7203,
        "changePct": -0.77,
        "asOf": "2026-09-28",
        "prevAsOf": "2026-09-25",
        "gapDays": 3,
        "gapSuspect": false,
        "live": false,
        "latest": {
          "date": "2026-09-28",
          "close": 7683.6899,
          "prevDate": "2026-09-25",
          "prevClose": 7743.4102,
          "change": -59.7203,
          "changePct": -0.77,
          "gapDays": 3,
          "gapSuspect": false
        },
        "settled": {
          "date": "2026-09-28",
          "close": 7683.6899,
          "prevDate": "2026-09-25",
          "prevClose": 7743.4102,
          "change": -59.7203,
          "changePct": -0.77,
          "gapDays": 3,
          "gapSuspect": false
        },
        "quotePrice": 7683.69,
        "series": [
          {
            "date": "2026-09-21",
            "close": 7764.7002
          },
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
        "close": 26820.3809,
        "prevClose": 27068.7207,
        "change": -248.3398,
        "changePct": -0.92,
        "asOf": "2026-09-28",
        "prevAsOf": "2026-09-25",
        "gapDays": 3,
        "gapSuspect": false,
        "live": false,
        "latest": {
          "date": "2026-09-28",
          "close": 26820.3809,
          "prevDate": "2026-09-25",
          "prevClose": 27068.7207,
          "change": -248.3398,
          "changePct": -0.92,
          "gapDays": 3,
          "gapSuspect": false
        },
        "settled": {
          "date": "2026-09-28",
          "close": 26820.3809,
          "prevDate": "2026-09-25",
          "prevClose": 27068.7207,
          "change": -248.3398,
          "changePct": -0.92,
          "gapDays": 3,
          "gapSuspect": false
        },
        "quotePrice": 26820.38,
        "series": [
          {
            "date": "2026-09-21",
            "close": 27122.0898
          },
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
        "close": 51481.5117,
        "prevClose": 51828.6211,
        "change": -347.1094,
        "changePct": -0.67,
        "asOf": "2026-09-28",
        "prevAsOf": "2026-09-25",
        "gapDays": 3,
        "gapSuspect": false,
        "live": false,
        "latest": {
          "date": "2026-09-28",
          "close": 51481.5117,
          "prevDate": "2026-09-25",
          "prevClose": 51828.6211,
          "change": -347.1094,
          "changePct": -0.67,
          "gapDays": 3,
          "gapSuspect": false
        },
        "settled": {
          "date": "2026-09-28",
          "close": 51481.5117,
          "prevDate": "2026-09-25",
          "prevClose": 51828.6211,
          "change": -347.1094,
          "changePct": -0.67,
          "gapDays": 3,
          "gapSuspect": false
        },
        "quotePrice": 51481.51,
        "series": [
          {
            "date": "2026-09-21",
            "close": 52048.8281
          },
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
        "close": 5.24,
        "prevClose": 5.184,
        "change": 0.056,
        "changePct": 1.08,
        "asOf": "2026-09-28",
        "prevAsOf": "2026-09-25",
        "gapDays": 3,
        "gapSuspect": false,
        "live": false,
        "latest": {
          "date": "2026-09-28",
          "close": 5.24,
          "prevDate": "2026-09-25",
          "prevClose": 5.184,
          "change": 0.056,
          "changePct": 1.08,
          "gapDays": 3,
          "gapSuspect": false
        },
        "settled": {
          "date": "2026-09-28",
          "close": 5.24,
          "prevDate": "2026-09-25",
          "prevClose": 5.184,
          "change": 0.056,
          "changePct": 1.08,
          "gapDays": 3,
          "gapSuspect": false
        },
        "quotePrice": 5.24,
        "series": [
          {
            "date": "2026-09-21",
            "close": 4.963
          },
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
        "close": 5.561,
        "prevClose": 5.504,
        "change": 0.057,
        "changePct": 1.04,
        "asOf": "2026-09-28",
        "prevAsOf": "2026-09-25",
        "gapDays": 3,
        "gapSuspect": false,
        "live": false,
        "latest": {
          "date": "2026-09-28",
          "close": 5.561,
          "prevDate": "2026-09-25",
          "prevClose": 5.504,
          "change": 0.057,
          "changePct": 1.04,
          "gapDays": 3,
          "gapSuspect": false
        },
        "settled": {
          "date": "2026-09-28",
          "close": 5.561,
          "prevDate": "2026-09-25",
          "prevClose": 5.504,
          "change": 0.057,
          "changePct": 1.04,
          "gapDays": 3,
          "gapSuspect": false
        },
        "quotePrice": 5.561,
        "series": [
          {
            "date": "2026-09-21",
            "close": 5.296
          },
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
        "close": 5.068,
        "prevClose": 5.007,
        "change": 0.061,
        "changePct": 1.22,
        "asOf": "2026-09-28",
        "prevAsOf": "2026-09-25",
        "gapDays": 3,
        "gapSuspect": false,
        "live": false,
        "latest": {
          "date": "2026-09-28",
          "close": 5.068,
          "prevDate": "2026-09-25",
          "prevClose": 5.007,
          "change": 0.061,
          "changePct": 1.22,
          "gapDays": 3,
          "gapSuspect": false
        },
        "settled": {
          "date": "2026-09-28",
          "close": 5.068,
          "prevDate": "2026-09-25",
          "prevClose": 5.007,
          "change": 0.061,
          "changePct": 1.22,
          "gapDays": 3,
          "gapSuspect": false
        },
        "quotePrice": 5.068,
        "series": [
          {
            "date": "2026-09-21",
            "close": 4.834
          },
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
        "close": 100.97,
        "prevClose": 101.29,
        "change": -0.32,
        "changePct": -0.32,
        "asOf": "2026-09-25",
        "prevAsOf": "2026-09-24",
        "gapDays": 1,
        "gapSuspect": false,
        "live": true,
        "latest": {
          "date": "2026-09-28",
          "close": 101.196,
          "prevDate": "2026-09-25",
          "prevClose": 100.97,
          "change": 0.226,
          "changePct": 0.22,
          "gapDays": 3,
          "gapSuspect": false
        },
        "settled": {
          "date": "2026-09-25",
          "close": 100.97,
          "prevDate": "2026-09-24",
          "prevClose": 101.29,
          "change": -0.32,
          "changePct": -0.32,
          "gapDays": 1,
          "gapSuspect": false
        },
        "quotePrice": 101.196,
        "series": [
          {
            "date": "2026-09-21",
            "close": 100.43
          },
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
            "close": 101.196
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
        "close": 92.41,
        "prevClose": 94.61,
        "change": -2.2,
        "changePct": -2.33,
        "asOf": "2026-09-25",
        "prevAsOf": "2026-09-24",
        "gapDays": 1,
        "gapSuspect": false,
        "live": true,
        "latest": {
          "date": "2026-09-28",
          "close": 93.52,
          "prevDate": "2026-09-25",
          "prevClose": 92.41,
          "change": 1.11,
          "changePct": 1.2,
          "gapDays": 3,
          "gapSuspect": false
        },
        "settled": {
          "date": "2026-09-25",
          "close": 92.41,
          "prevDate": "2026-09-24",
          "prevClose": 94.61,
          "change": -2.2,
          "changePct": -2.33,
          "gapDays": 1,
          "gapSuspect": false
        },
        "quotePrice": 93.52,
        "series": [
          {
            "date": "2026-09-21",
            "close": 95.78
          },
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
            "close": 93.52
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
        "close": 104.32,
        "prevClose": 106.6,
        "change": -2.28,
        "changePct": -2.14,
        "asOf": "2026-09-25",
        "prevAsOf": "2026-09-24",
        "gapDays": 1,
        "gapSuspect": false,
        "live": true,
        "latest": {
          "date": "2026-09-28",
          "close": 99.19,
          "prevDate": "2026-09-25",
          "prevClose": 104.32,
          "change": -5.13,
          "changePct": -4.92,
          "gapDays": 3,
          "gapSuspect": false
        },
        "settled": {
          "date": "2026-09-25",
          "close": 104.32,
          "prevDate": "2026-09-24",
          "prevClose": 106.6,
          "change": -2.28,
          "changePct": -2.14,
          "gapDays": 1,
          "gapSuspect": false
        },
        "quotePrice": 99.19,
        "series": [
          {
            "date": "2026-09-21",
            "close": 100.34
          },
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
            "close": 99.19
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
        "close": 4321.2002,
        "prevClose": 4298,
        "change": 23.2002,
        "changePct": 0.54,
        "asOf": "2026-09-25",
        "prevAsOf": "2026-09-24",
        "gapDays": 1,
        "gapSuspect": false,
        "live": true,
        "latest": {
          "date": "2026-09-28",
          "close": 4166,
          "prevDate": "2026-09-25",
          "prevClose": 4321.2002,
          "change": -155.2002,
          "changePct": -3.59,
          "gapDays": 3,
          "gapSuspect": false
        },
        "settled": {
          "date": "2026-09-25",
          "close": 4321.2002,
          "prevDate": "2026-09-24",
          "prevClose": 4298,
          "change": 23.2002,
          "changePct": 0.54,
          "gapDays": 1,
          "gapSuspect": false
        },
        "quotePrice": 4166,
        "series": [
          {
            "date": "2026-09-21",
            "close": 4383.8999
          },
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
            "close": 4166
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
        "close": 157.463,
        "prevClose": 158.811,
        "change": -1.348,
        "changePct": -0.85,
        "asOf": "2026-09-28",
        "prevAsOf": "2026-09-25",
        "gapDays": 3,
        "gapSuspect": false,
        "live": true,
        "latest": {
          "date": "2026-09-29",
          "close": 157.325,
          "prevDate": "2026-09-28",
          "prevClose": 157.463,
          "change": -0.138,
          "changePct": -0.09,
          "gapDays": 1,
          "gapSuspect": false
        },
        "settled": {
          "date": "2026-09-28",
          "close": 157.463,
          "prevDate": "2026-09-25",
          "prevClose": 158.811,
          "change": -1.348,
          "changePct": -0.85,
          "gapDays": 3,
          "gapSuspect": false
        },
        "quotePrice": 157.325,
        "series": [
          {
            "date": "2026-09-22",
            "close": 157.369
          },
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
            "close": 157.325
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
        "close": 6.7128,
        "prevClose": 6.7111,
        "change": 0.0017,
        "changePct": 0.03,
        "asOf": "2026-09-28",
        "prevAsOf": "2026-09-25",
        "gapDays": 3,
        "gapSuspect": false,
        "live": true,
        "latest": {
          "date": "2026-09-29",
          "close": 6.7048,
          "prevDate": "2026-09-28",
          "prevClose": 6.7128,
          "change": -0.008,
          "changePct": -0.12,
          "gapDays": 1,
          "gapSuspect": false
        },
        "settled": {
          "date": "2026-09-28",
          "close": 6.7128,
          "prevDate": "2026-09-25",
          "prevClose": 6.7111,
          "change": 0.0017,
          "changePct": 0.03,
          "gapDays": 3,
          "gapSuspect": false
        },
        "quotePrice": 6.7048,
        "series": [
          {
            "date": "2026-09-22",
            "close": 6.6953
          },
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
            "close": 6.7048
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
        "close": 31.7787,
        "prevClose": 31.8062,
        "change": -0.0275,
        "changePct": -0.09,
        "asOf": "2026-09-28",
        "prevAsOf": "2026-09-25",
        "gapDays": 3,
        "gapSuspect": false,
        "live": true,
        "latest": {
          "date": "2026-09-29",
          "close": 31.806,
          "prevDate": "2026-09-28",
          "prevClose": 31.7787,
          "change": 0.0273,
          "changePct": 0.09,
          "gapDays": 1,
          "gapSuspect": false
        },
        "settled": {
          "date": "2026-09-28",
          "close": 31.7787,
          "prevDate": "2026-09-25",
          "prevClose": 31.8062,
          "change": -0.0275,
          "changePct": -0.09,
          "gapDays": 3,
          "gapSuspect": false
        },
        "quotePrice": 31.806,
        "series": [
          {
            "date": "2026-09-22",
            "close": 31.7384
          },
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
            "close": 31.806
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
        "close": 48024.6016,
        "prevClose": 48157.2891,
        "change": -132.6875,
        "changePct": -0.28,
        "asOf": "2026-09-24",
        "prevAsOf": "2026-09-23",
        "gapDays": 1,
        "gapSuspect": false,
        "live": true,
        "latest": {
          "date": "2026-09-29",
          "close": 47830.0781,
          "prevDate": "2026-09-24",
          "prevClose": 48024.6016,
          "change": -194.5235,
          "changePct": -0.41,
          "gapDays": 5,
          "gapSuspect": true
        },
        "settled": {
          "date": "2026-09-24",
          "close": 48024.6016,
          "prevDate": "2026-09-23",
          "prevClose": 48157.2891,
          "change": -132.6875,
          "changePct": -0.28,
          "gapDays": 1,
          "gapSuspect": false
        },
        "quotePrice": 47830.08,
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
            "close": 47830.0781
          }
        ],
        "currency": "TWD",
        "timezone": "Asia/Taipei",
        "source": "Yahoo Finance chart API（日線）"
      }
    }
  }
};
