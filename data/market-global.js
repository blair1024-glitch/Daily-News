/**
 * market-global.js — 由 GitHub Actions 自動產生，請勿手動編輯。
 * 產生器：scripts/fetch-global-market.mjs
 *
 * 國際行情中繼資料，供每日 dashboard 更新流程讀用，不會被 index.html 載入。
 * ok:false 代表該標的當次抓不到，error 說明原因——請據實標註，不要沿用舊值。
 */
window.MARKET_GLOBAL = {
  "fetchedAt": "2026-09-28T18:30:31.552Z",
  "okCount": 16,
  "totalCount": 16,
  "items": {
    "sox": {
      "ok": true,
      "label": "費城半導體 SOX",
      "symbol": "%5ESOX",
      "value": {
        "close": 12668.9297,
        "prevClose": 12492.54,
        "change": 176.3897,
        "changePct": 1.41,
        "asOf": "2026-09-25",
        "prevAsOf": "2026-09-24",
        "gapDays": 1,
        "gapSuspect": false,
        "live": true,
        "latest": {
          "date": "2026-09-28",
          "close": 12464.1025,
          "prevDate": "2026-09-25",
          "prevClose": 12668.9297,
          "change": -204.8272,
          "changePct": -1.62,
          "gapDays": 3,
          "gapSuspect": false
        },
        "settled": {
          "date": "2026-09-25",
          "close": 12668.9297,
          "prevDate": "2026-09-24",
          "prevClose": 12492.54,
          "change": 176.3897,
          "changePct": 1.41,
          "gapDays": 1,
          "gapSuspect": false
        },
        "quotePrice": 12464.103,
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
            "close": 12464.1025
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
        "close": 14.87,
        "prevClose": 15.67,
        "change": -0.8,
        "changePct": -5.11,
        "asOf": "2026-09-25",
        "prevAsOf": "2026-09-24",
        "gapDays": 1,
        "gapSuspect": false,
        "live": true,
        "latest": {
          "date": "2026-09-28",
          "close": 15.83,
          "prevDate": "2026-09-25",
          "prevClose": 14.87,
          "change": 0.96,
          "changePct": 6.46,
          "gapDays": 3,
          "gapSuspect": false
        },
        "settled": {
          "date": "2026-09-25",
          "close": 14.87,
          "prevDate": "2026-09-24",
          "prevClose": 15.67,
          "change": -0.8,
          "changePct": -5.11,
          "gapDays": 1,
          "gapSuspect": false
        },
        "quotePrice": 15.83,
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
            "close": 15.83
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
        "close": 7743.4102,
        "prevClose": 7704.1299,
        "change": 39.2803,
        "changePct": 0.51,
        "asOf": "2026-09-25",
        "prevAsOf": "2026-09-24",
        "gapDays": 1,
        "gapSuspect": false,
        "live": true,
        "latest": {
          "date": "2026-09-28",
          "close": 7698.0601,
          "prevDate": "2026-09-25",
          "prevClose": 7743.4102,
          "change": -45.3501,
          "changePct": -0.59,
          "gapDays": 3,
          "gapSuspect": false
        },
        "settled": {
          "date": "2026-09-25",
          "close": 7743.4102,
          "prevDate": "2026-09-24",
          "prevClose": 7704.1299,
          "change": 39.2803,
          "changePct": 0.51,
          "gapDays": 1,
          "gapSuspect": false
        },
        "quotePrice": 7698.06,
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
            "close": 7698.0601
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
        "close": 27068.7207,
        "prevClose": 26939.3691,
        "change": 129.3516,
        "changePct": 0.48,
        "asOf": "2026-09-25",
        "prevAsOf": "2026-09-24",
        "gapDays": 1,
        "gapSuspect": false,
        "live": true,
        "latest": {
          "date": "2026-09-28",
          "close": 26893.4004,
          "prevDate": "2026-09-25",
          "prevClose": 27068.7207,
          "change": -175.3203,
          "changePct": -0.65,
          "gapDays": 3,
          "gapSuspect": false
        },
        "settled": {
          "date": "2026-09-25",
          "close": 27068.7207,
          "prevDate": "2026-09-24",
          "prevClose": 26939.3691,
          "change": 129.3516,
          "changePct": 0.48,
          "gapDays": 1,
          "gapSuspect": false
        },
        "quotePrice": 26893.4,
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
            "close": 26893.4004
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
        "close": 51828.6211,
        "prevClose": 51349.9805,
        "change": 478.6406,
        "changePct": 0.93,
        "asOf": "2026-09-25",
        "prevAsOf": "2026-09-24",
        "gapDays": 1,
        "gapSuspect": false,
        "live": true,
        "latest": {
          "date": "2026-09-28",
          "close": 51562.6289,
          "prevDate": "2026-09-25",
          "prevClose": 51828.6211,
          "change": -265.9922,
          "changePct": -0.51,
          "gapDays": 3,
          "gapSuspect": false
        },
        "settled": {
          "date": "2026-09-25",
          "close": 51828.6211,
          "prevDate": "2026-09-24",
          "prevClose": 51349.9805,
          "change": 478.6406,
          "changePct": 0.93,
          "gapDays": 1,
          "gapSuspect": false
        },
        "quotePrice": 51562.63,
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
            "close": 51562.6289
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
        "close": 5.184,
        "prevClose": 5.162,
        "change": 0.022,
        "changePct": 0.43,
        "asOf": "2026-09-25",
        "prevAsOf": "2026-09-24",
        "gapDays": 1,
        "gapSuspect": false,
        "live": true,
        "latest": {
          "date": "2026-09-28",
          "close": 5.232,
          "prevDate": "2026-09-25",
          "prevClose": 5.184,
          "change": 0.048,
          "changePct": 0.93,
          "gapDays": 3,
          "gapSuspect": false
        },
        "settled": {
          "date": "2026-09-25",
          "close": 5.184,
          "prevDate": "2026-09-24",
          "prevClose": 5.162,
          "change": 0.022,
          "changePct": 0.43,
          "gapDays": 1,
          "gapSuspect": false
        },
        "quotePrice": 5.232,
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
            "close": 5.232
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
        "close": 5.504,
        "prevClose": 5.461,
        "change": 0.043,
        "changePct": 0.79,
        "asOf": "2026-09-25",
        "prevAsOf": "2026-09-24",
        "gapDays": 1,
        "gapSuspect": false,
        "live": true,
        "latest": {
          "date": "2026-09-28",
          "close": 5.557,
          "prevDate": "2026-09-25",
          "prevClose": 5.504,
          "change": 0.053,
          "changePct": 0.96,
          "gapDays": 3,
          "gapSuspect": false
        },
        "settled": {
          "date": "2026-09-25",
          "close": 5.504,
          "prevDate": "2026-09-24",
          "prevClose": 5.461,
          "change": 0.043,
          "changePct": 0.79,
          "gapDays": 1,
          "gapSuspect": false
        },
        "quotePrice": 5.557,
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
            "close": 5.557
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
        "close": 5.007,
        "prevClose": 5.025,
        "change": -0.018,
        "changePct": -0.36,
        "asOf": "2026-09-25",
        "prevAsOf": "2026-09-24",
        "gapDays": 1,
        "gapSuspect": false,
        "live": true,
        "latest": {
          "date": "2026-09-28",
          "close": 5.057,
          "prevDate": "2026-09-25",
          "prevClose": 5.007,
          "change": 0.05,
          "changePct": 1,
          "gapDays": 3,
          "gapSuspect": false
        },
        "settled": {
          "date": "2026-09-25",
          "close": 5.007,
          "prevDate": "2026-09-24",
          "prevClose": 5.025,
          "change": -0.018,
          "changePct": -0.36,
          "gapDays": 1,
          "gapSuspect": false
        },
        "quotePrice": 5.057,
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
            "close": 5.057
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
          "close": 101.149,
          "prevDate": "2026-09-25",
          "prevClose": 100.97,
          "change": 0.179,
          "changePct": 0.18,
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
        "quotePrice": 101.149,
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
            "close": 101.149
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
          "close": 92.38,
          "prevDate": "2026-09-25",
          "prevClose": 92.41,
          "change": -0.03,
          "changePct": -0.03,
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
        "quotePrice": 92.38,
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
            "close": 92.38
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
          "close": 97.66,
          "prevDate": "2026-09-25",
          "prevClose": 104.32,
          "change": -6.66,
          "changePct": -6.38,
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
        "quotePrice": 97.66,
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
            "close": 97.66
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
          "close": 4167.2002,
          "prevDate": "2026-09-25",
          "prevClose": 4321.2002,
          "change": -154,
          "changePct": -3.56,
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
        "quotePrice": 4167.2,
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
            "close": 4167.2002
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
        "close": 158.811,
        "prevClose": 158.265,
        "change": 0.546,
        "changePct": 0.34,
        "asOf": "2026-09-25",
        "prevAsOf": "2026-09-24",
        "gapDays": 1,
        "gapSuspect": false,
        "live": true,
        "latest": {
          "date": "2026-09-28",
          "close": 157.341,
          "prevDate": "2026-09-25",
          "prevClose": 158.811,
          "change": -1.47,
          "changePct": -0.93,
          "gapDays": 3,
          "gapSuspect": false
        },
        "settled": {
          "date": "2026-09-25",
          "close": 158.811,
          "prevDate": "2026-09-24",
          "prevClose": 158.265,
          "change": 0.546,
          "changePct": 0.34,
          "gapDays": 1,
          "gapSuspect": false
        },
        "quotePrice": 157.341,
        "series": [
          {
            "date": "2026-09-21",
            "close": 157.046
          },
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
            "close": 157.341
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
        "close": 6.7111,
        "prevClose": 6.7111,
        "change": 0,
        "changePct": 0,
        "asOf": "2026-09-25",
        "prevAsOf": "2026-09-24",
        "gapDays": 1,
        "gapSuspect": false,
        "live": true,
        "latest": {
          "date": "2026-09-28",
          "close": 6.6993,
          "prevDate": "2026-09-25",
          "prevClose": 6.7111,
          "change": -0.0118,
          "changePct": -0.18,
          "gapDays": 3,
          "gapSuspect": false
        },
        "settled": {
          "date": "2026-09-25",
          "close": 6.7111,
          "prevDate": "2026-09-24",
          "prevClose": 6.7111,
          "change": 0,
          "changePct": 0,
          "gapDays": 1,
          "gapSuspect": false
        },
        "quotePrice": 6.6993,
        "series": [
          {
            "date": "2026-09-21",
            "close": 6.6975
          },
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
            "close": 6.6993
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
        "close": 31.8062,
        "prevClose": 31.7895,
        "change": 0.0167,
        "changePct": 0.05,
        "asOf": "2026-09-25",
        "prevAsOf": "2026-09-24",
        "gapDays": 1,
        "gapSuspect": false,
        "live": true,
        "latest": {
          "date": "2026-09-28",
          "close": 31.76,
          "prevDate": "2026-09-25",
          "prevClose": 31.8062,
          "change": -0.0462,
          "changePct": -0.15,
          "gapDays": 3,
          "gapSuspect": false
        },
        "settled": {
          "date": "2026-09-25",
          "close": 31.8062,
          "prevDate": "2026-09-24",
          "prevClose": 31.7895,
          "change": 0.0167,
          "changePct": 0.05,
          "gapDays": 1,
          "gapSuspect": false
        },
        "quotePrice": 31.76,
        "series": [
          {
            "date": "2026-09-21",
            "close": 31.8091
          },
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
            "close": 31.76
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
        "live": false,
        "latest": {
          "date": "2026-09-24",
          "close": 48024.6016,
          "prevDate": "2026-09-23",
          "prevClose": 48157.2891,
          "change": -132.6875,
          "changePct": -0.28,
          "gapDays": 1,
          "gapSuspect": false
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
        "quotePrice": 48024.6,
        "series": [
          {
            "date": "2026-09-17",
            "close": 46288
          },
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
          }
        ],
        "currency": "TWD",
        "timezone": "Asia/Taipei",
        "source": "Yahoo Finance chart API（日線）"
      }
    }
  }
};
