/**
 * market-global.js — 由 GitHub Actions 自動產生，請勿手動編輯。
 * 產生器：scripts/fetch-global-market.mjs
 *
 * 國際行情中繼資料，供每日 dashboard 更新流程讀用，不會被 index.html 載入。
 * ok:false 代表該標的當次抓不到，error 說明原因——請據實標註，不要沿用舊值。
 */
window.MARKET_GLOBAL = {
  "fetchedAt": "2026-09-26T01:13:28.951Z",
  "okCount": 16,
  "totalCount": 16,
  "items": {
    "sox": {
      "ok": true,
      "label": "費城半導體 SOX",
      "symbol": "%5ESOX",
      "value": {
        "close": 12668.9287,
        "prevClose": 12492.54,
        "change": 176.3887,
        "changePct": 1.41,
        "asOf": "2026-09-25",
        "prevAsOf": "2026-09-24",
        "gapDays": 1,
        "gapSuspect": false,
        "live": false,
        "latest": {
          "date": "2026-09-25",
          "close": 12668.9287,
          "prevDate": "2026-09-24",
          "prevClose": 12492.54,
          "change": 176.3887,
          "changePct": 1.41,
          "gapDays": 1,
          "gapSuspect": false
        },
        "settled": {
          "date": "2026-09-25",
          "close": 12668.9287,
          "prevDate": "2026-09-24",
          "prevClose": 12492.54,
          "change": 176.3887,
          "changePct": 1.41,
          "gapDays": 1,
          "gapSuspect": false
        },
        "quotePrice": 12668.929,
        "series": [
          {
            "date": "2026-09-18",
            "close": 11921.6904
          },
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
            "close": 12668.9287
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
        "live": false,
        "latest": {
          "date": "2026-09-25",
          "close": 14.87,
          "prevDate": "2026-09-24",
          "prevClose": 15.67,
          "change": -0.8,
          "changePct": -5.11,
          "gapDays": 1,
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
        "quotePrice": 14.87,
        "series": [
          {
            "date": "2026-09-18",
            "close": 14.81
          },
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
        "live": false,
        "latest": {
          "date": "2026-09-25",
          "close": 7743.4102,
          "prevDate": "2026-09-24",
          "prevClose": 7704.1299,
          "change": 39.2803,
          "changePct": 0.51,
          "gapDays": 1,
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
        "quotePrice": 7743.41,
        "series": [
          {
            "date": "2026-09-18",
            "close": 7650.5
          },
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
        "close": 27068.7168,
        "prevClose": 26939.3691,
        "change": 129.3477,
        "changePct": 0.48,
        "asOf": "2026-09-25",
        "prevAsOf": "2026-09-24",
        "gapDays": 1,
        "gapSuspect": false,
        "live": false,
        "latest": {
          "date": "2026-09-25",
          "close": 27068.7168,
          "prevDate": "2026-09-24",
          "prevClose": 26939.3691,
          "change": 129.3477,
          "changePct": 0.48,
          "gapDays": 1,
          "gapSuspect": false
        },
        "settled": {
          "date": "2026-09-25",
          "close": 27068.7168,
          "prevDate": "2026-09-24",
          "prevClose": 26939.3691,
          "change": 129.3477,
          "changePct": 0.48,
          "gapDays": 1,
          "gapSuspect": false
        },
        "quotePrice": 27068.717,
        "series": [
          {
            "date": "2026-09-18",
            "close": 26522.5391
          },
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
            "close": 27068.7168
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
        "live": false,
        "latest": {
          "date": "2026-09-25",
          "close": 51828.6211,
          "prevDate": "2026-09-24",
          "prevClose": 51349.9805,
          "change": 478.6406,
          "changePct": 0.93,
          "gapDays": 1,
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
        "quotePrice": 51828.62,
        "series": [
          {
            "date": "2026-09-18",
            "close": 51682.6406
          },
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
        "live": false,
        "latest": {
          "date": "2026-09-25",
          "close": 5.184,
          "prevDate": "2026-09-24",
          "prevClose": 5.162,
          "change": 0.022,
          "changePct": 0.43,
          "gapDays": 1,
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
        "quotePrice": 5.184,
        "series": [
          {
            "date": "2026-09-18",
            "close": 4.998
          },
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
        "live": false,
        "latest": {
          "date": "2026-09-25",
          "close": 5.504,
          "prevDate": "2026-09-24",
          "prevClose": 5.461,
          "change": 0.043,
          "changePct": 0.79,
          "gapDays": 1,
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
        "quotePrice": 5.504,
        "series": [
          {
            "date": "2026-09-18",
            "close": 5.331
          },
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
        "live": false,
        "latest": {
          "date": "2026-09-25",
          "close": 5.007,
          "prevDate": "2026-09-24",
          "prevClose": 5.025,
          "change": -0.018,
          "changePct": -0.36,
          "gapDays": 1,
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
        "quotePrice": 5.007,
        "series": [
          {
            "date": "2026-09-18",
            "close": 4.856
          },
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
        "close": 101.29,
        "prevClose": 101.1,
        "change": 0.19,
        "changePct": 0.19,
        "asOf": "2026-09-24",
        "prevAsOf": "2026-09-23",
        "gapDays": 1,
        "gapSuspect": false,
        "live": true,
        "latest": {
          "date": "2026-09-25",
          "close": 101.035,
          "prevDate": "2026-09-24",
          "prevClose": 101.29,
          "change": -0.255,
          "changePct": -0.25,
          "gapDays": 1,
          "gapSuspect": false
        },
        "settled": {
          "date": "2026-09-24",
          "close": 101.29,
          "prevDate": "2026-09-23",
          "prevClose": 101.1,
          "change": 0.19,
          "changePct": 0.19,
          "gapDays": 1,
          "gapSuspect": false
        },
        "quotePrice": 101.035,
        "series": [
          {
            "date": "2026-09-18",
            "close": 100.22
          },
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
            "close": 101.035
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
        "close": 94.61,
        "prevClose": 92.16,
        "change": 2.45,
        "changePct": 2.66,
        "asOf": "2026-09-24",
        "prevAsOf": "2026-09-23",
        "gapDays": 1,
        "gapSuspect": false,
        "live": true,
        "latest": {
          "date": "2026-09-25",
          "close": 92.44,
          "prevDate": "2026-09-24",
          "prevClose": 94.61,
          "change": -2.17,
          "changePct": -2.29,
          "gapDays": 1,
          "gapSuspect": false
        },
        "settled": {
          "date": "2026-09-24",
          "close": 94.61,
          "prevDate": "2026-09-23",
          "prevClose": 92.16,
          "change": 2.45,
          "changePct": 2.66,
          "gapDays": 1,
          "gapSuspect": false
        },
        "quotePrice": 92.44,
        "series": [
          {
            "date": "2026-09-18",
            "close": 100.3
          },
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
            "close": 92.44
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
        "close": 106.6,
        "prevClose": 103.08,
        "change": 3.52,
        "changePct": 3.41,
        "asOf": "2026-09-24",
        "prevAsOf": "2026-09-23",
        "gapDays": 1,
        "gapSuspect": false,
        "live": true,
        "latest": {
          "date": "2026-09-25",
          "close": 97.47,
          "prevDate": "2026-09-24",
          "prevClose": 106.6,
          "change": -9.13,
          "changePct": -8.56,
          "gapDays": 1,
          "gapSuspect": false
        },
        "settled": {
          "date": "2026-09-24",
          "close": 106.6,
          "prevDate": "2026-09-23",
          "prevClose": 103.08,
          "change": 3.52,
          "changePct": 3.41,
          "gapDays": 1,
          "gapSuspect": false
        },
        "quotePrice": 97.47,
        "series": [
          {
            "date": "2026-09-18",
            "close": 103.87
          },
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
            "close": 97.47
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
        "close": 4298,
        "prevClose": 4318.3999,
        "change": -20.3999,
        "changePct": -0.47,
        "asOf": "2026-09-24",
        "prevAsOf": "2026-09-23",
        "gapDays": 1,
        "gapSuspect": false,
        "live": true,
        "latest": {
          "date": "2026-09-25",
          "close": 4320.5,
          "prevDate": "2026-09-24",
          "prevClose": 4298,
          "change": 22.5,
          "changePct": 0.52,
          "gapDays": 1,
          "gapSuspect": false
        },
        "settled": {
          "date": "2026-09-24",
          "close": 4298,
          "prevDate": "2026-09-23",
          "prevClose": 4318.3999,
          "change": -20.3999,
          "changePct": -0.47,
          "gapDays": 1,
          "gapSuspect": false
        },
        "quotePrice": 4320.5,
        "series": [
          {
            "date": "2026-09-18",
            "close": 4424.8999
          },
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
            "close": 4320.5
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
        "close": 158.265,
        "prevClose": 157.464,
        "change": 0.801,
        "changePct": 0.51,
        "asOf": "2026-09-24",
        "prevAsOf": "2026-09-23",
        "gapDays": 1,
        "gapSuspect": false,
        "live": true,
        "latest": {
          "date": "2026-09-25",
          "close": 157.185,
          "prevDate": "2026-09-24",
          "prevClose": 158.265,
          "change": -1.08,
          "changePct": -0.68,
          "gapDays": 1,
          "gapSuspect": false
        },
        "settled": {
          "date": "2026-09-24",
          "close": 158.265,
          "prevDate": "2026-09-23",
          "prevClose": 157.464,
          "change": 0.801,
          "changePct": 0.51,
          "gapDays": 1,
          "gapSuspect": false
        },
        "quotePrice": 157.185,
        "series": [
          {
            "date": "2026-09-18",
            "close": 156.129
          },
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
            "close": 157.185
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
        "prevClose": 6.6996,
        "change": 0.0115,
        "changePct": 0.17,
        "asOf": "2026-09-24",
        "prevAsOf": "2026-09-23",
        "gapDays": 1,
        "gapSuspect": false,
        "live": true,
        "latest": {
          "date": "2026-09-25",
          "close": 6.7123,
          "prevDate": "2026-09-24",
          "prevClose": 6.7111,
          "change": 0.0012,
          "changePct": 0.02,
          "gapDays": 1,
          "gapSuspect": false
        },
        "settled": {
          "date": "2026-09-24",
          "close": 6.7111,
          "prevDate": "2026-09-23",
          "prevClose": 6.6996,
          "change": 0.0115,
          "changePct": 0.17,
          "gapDays": 1,
          "gapSuspect": false
        },
        "quotePrice": 6.7123,
        "series": [
          {
            "date": "2026-09-18",
            "close": 6.7074
          },
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
            "close": 6.7123
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
        "close": 31.7895,
        "prevClose": 31.6795,
        "change": 0.11,
        "changePct": 0.35,
        "asOf": "2026-09-24",
        "prevAsOf": "2026-09-23",
        "gapDays": 1,
        "gapSuspect": false,
        "live": true,
        "latest": {
          "date": "2026-09-25",
          "close": 31.695,
          "prevDate": "2026-09-24",
          "prevClose": 31.7895,
          "change": -0.0945,
          "changePct": -0.3,
          "gapDays": 1,
          "gapSuspect": false
        },
        "settled": {
          "date": "2026-09-24",
          "close": 31.7895,
          "prevDate": "2026-09-23",
          "prevClose": 31.6795,
          "change": 0.11,
          "changePct": 0.35,
          "gapDays": 1,
          "gapSuspect": false
        },
        "quotePrice": 31.695,
        "series": [
          {
            "date": "2026-09-18",
            "close": 31.8511
          },
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
            "close": 31.695
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
