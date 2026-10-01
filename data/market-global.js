/**
 * market-global.js — 由 GitHub Actions 自動產生，請勿手動編輯。
 * 產生器：scripts/fetch-global-market.mjs
 *
 * 國際行情中繼資料，供每日 dashboard 更新流程讀用，不會被 index.html 載入。
 * ok:false 代表該標的當次抓不到，error 說明原因——請據實標註，不要沿用舊值。
 */
window.MARKET_GLOBAL = {
  "fetchedAt": "2026-10-01T01:50:59.952Z",
  "okCount": 16,
  "totalCount": 16,
  "items": {
    "sox": {
      "ok": true,
      "label": "費城半導體 SOX",
      "symbol": "%5ESOX",
      "value": {
        "close": 12628.624,
        "prevClose": 12629.1602,
        "change": -0.5362,
        "changePct": 0,
        "asOf": "2026-09-30",
        "prevAsOf": "2026-09-29",
        "gapDays": 1,
        "gapSuspect": false,
        "live": false,
        "latest": {
          "date": "2026-09-30",
          "close": 12628.624,
          "prevDate": "2026-09-29",
          "prevClose": 12629.1602,
          "change": -0.5362,
          "changePct": 0,
          "gapDays": 1,
          "gapSuspect": false
        },
        "settled": {
          "date": "2026-09-30",
          "close": 12628.624,
          "prevDate": "2026-09-29",
          "prevClose": 12629.1602,
          "change": -0.5362,
          "changePct": 0,
          "gapDays": 1,
          "gapSuspect": false
        },
        "quotePrice": 12628.624,
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
            "close": 12628.624
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
        "close": 16.34,
        "prevClose": 16.04,
        "change": 0.3,
        "changePct": 1.87,
        "asOf": "2026-09-30",
        "prevAsOf": "2026-09-29",
        "gapDays": 1,
        "gapSuspect": false,
        "live": false,
        "latest": {
          "date": "2026-09-30",
          "close": 16.34,
          "prevDate": "2026-09-29",
          "prevClose": 16.04,
          "change": 0.3,
          "changePct": 1.87,
          "gapDays": 1,
          "gapSuspect": false
        },
        "settled": {
          "date": "2026-09-30",
          "close": 16.34,
          "prevDate": "2026-09-29",
          "prevClose": 16.04,
          "change": 0.3,
          "changePct": 1.87,
          "gapDays": 1,
          "gapSuspect": false
        },
        "quotePrice": 16.34,
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
            "close": 16.34
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
        "close": 7651.54,
        "prevClose": 7670.8398,
        "change": -19.2998,
        "changePct": -0.25,
        "asOf": "2026-09-30",
        "prevAsOf": "2026-09-29",
        "gapDays": 1,
        "gapSuspect": false,
        "live": false,
        "latest": {
          "date": "2026-09-30",
          "close": 7651.54,
          "prevDate": "2026-09-29",
          "prevClose": 7670.8398,
          "change": -19.2998,
          "changePct": -0.25,
          "gapDays": 1,
          "gapSuspect": false
        },
        "settled": {
          "date": "2026-09-30",
          "close": 7651.54,
          "prevDate": "2026-09-29",
          "prevClose": 7670.8398,
          "change": -19.2998,
          "changePct": -0.25,
          "gapDays": 1,
          "gapSuspect": false
        },
        "quotePrice": 7651.54,
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
            "close": 7651.54
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
        "close": 26861.0645,
        "prevClose": 26797.5391,
        "change": 63.5254,
        "changePct": 0.24,
        "asOf": "2026-09-30",
        "prevAsOf": "2026-09-29",
        "gapDays": 1,
        "gapSuspect": false,
        "live": false,
        "latest": {
          "date": "2026-09-30",
          "close": 26861.0645,
          "prevDate": "2026-09-29",
          "prevClose": 26797.5391,
          "change": 63.5254,
          "changePct": 0.24,
          "gapDays": 1,
          "gapSuspect": false
        },
        "settled": {
          "date": "2026-09-30",
          "close": 26861.0645,
          "prevDate": "2026-09-29",
          "prevClose": 26797.5391,
          "change": 63.5254,
          "changePct": 0.24,
          "gapDays": 1,
          "gapSuspect": false
        },
        "quotePrice": 26861.064,
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
            "close": 26861.0645
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
        "close": 50906.0508,
        "prevClose": 51349.9219,
        "change": -443.8711,
        "changePct": -0.86,
        "asOf": "2026-09-30",
        "prevAsOf": "2026-09-29",
        "gapDays": 1,
        "gapSuspect": false,
        "live": false,
        "latest": {
          "date": "2026-09-30",
          "close": 50906.0508,
          "prevDate": "2026-09-29",
          "prevClose": 51349.9219,
          "change": -443.8711,
          "changePct": -0.86,
          "gapDays": 1,
          "gapSuspect": false
        },
        "settled": {
          "date": "2026-09-30",
          "close": 50906.0508,
          "prevDate": "2026-09-29",
          "prevClose": 51349.9219,
          "change": -443.8711,
          "changePct": -0.86,
          "gapDays": 1,
          "gapSuspect": false
        },
        "quotePrice": 50906.05,
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
            "close": 50906.0508
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
        "close": 5.293,
        "prevClose": 5.255,
        "change": 0.038,
        "changePct": 0.72,
        "asOf": "2026-09-30",
        "prevAsOf": "2026-09-29",
        "gapDays": 1,
        "gapSuspect": false,
        "live": false,
        "latest": {
          "date": "2026-09-30",
          "close": 5.293,
          "prevDate": "2026-09-29",
          "prevClose": 5.255,
          "change": 0.038,
          "changePct": 0.72,
          "gapDays": 1,
          "gapSuspect": false
        },
        "settled": {
          "date": "2026-09-30",
          "close": 5.293,
          "prevDate": "2026-09-29",
          "prevClose": 5.255,
          "change": 0.038,
          "changePct": 0.72,
          "gapDays": 1,
          "gapSuspect": false
        },
        "quotePrice": 5.293,
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
            "close": 5.293
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
        "close": 5.638,
        "prevClose": 5.594,
        "change": 0.044,
        "changePct": 0.79,
        "asOf": "2026-09-30",
        "prevAsOf": "2026-09-29",
        "gapDays": 1,
        "gapSuspect": false,
        "live": false,
        "latest": {
          "date": "2026-09-30",
          "close": 5.638,
          "prevDate": "2026-09-29",
          "prevClose": 5.594,
          "change": 0.044,
          "changePct": 0.79,
          "gapDays": 1,
          "gapSuspect": false
        },
        "settled": {
          "date": "2026-09-30",
          "close": 5.638,
          "prevDate": "2026-09-29",
          "prevClose": 5.594,
          "change": 0.044,
          "changePct": 0.79,
          "gapDays": 1,
          "gapSuspect": false
        },
        "quotePrice": 5.638,
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
            "close": 5.638
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
        "close": 5.089,
        "prevClose": 5.063,
        "change": 0.026,
        "changePct": 0.51,
        "asOf": "2026-09-30",
        "prevAsOf": "2026-09-29",
        "gapDays": 1,
        "gapSuspect": false,
        "live": false,
        "latest": {
          "date": "2026-09-30",
          "close": 5.089,
          "prevDate": "2026-09-29",
          "prevClose": 5.063,
          "change": 0.026,
          "changePct": 0.51,
          "gapDays": 1,
          "gapSuspect": false
        },
        "settled": {
          "date": "2026-09-30",
          "close": 5.089,
          "prevDate": "2026-09-29",
          "prevClose": 5.063,
          "change": 0.026,
          "changePct": 0.51,
          "gapDays": 1,
          "gapSuspect": false
        },
        "quotePrice": 5.089,
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
            "close": 5.089
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
          "close": 101.52,
          "prevDate": "2026-09-29",
          "prevClose": 101.37,
          "change": 0.15,
          "changePct": 0.15,
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
        "quotePrice": 101.52,
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
            "close": 101.52
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
          "close": 90.14,
          "prevDate": "2026-09-29",
          "prevClose": 89.38,
          "change": 0.76,
          "changePct": 0.85,
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
        "quotePrice": 90.14,
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
            "close": 90.14
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
          "close": 97.89,
          "prevDate": "2026-09-29",
          "prevClose": 102.59,
          "change": -4.7,
          "changePct": -4.58,
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
        "quotePrice": 97.89,
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
            "close": 97.89
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
          "close": 4191.7002,
          "prevDate": "2026-09-29",
          "prevClose": 4179.7002,
          "change": 12,
          "changePct": 0.29,
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
        "quotePrice": 4191.7,
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
            "close": 4191.7002
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
        "close": 157.404,
        "prevClose": 157.361,
        "change": 0.043,
        "changePct": 0.03,
        "asOf": "2026-09-30",
        "prevAsOf": "2026-09-29",
        "gapDays": 1,
        "gapSuspect": false,
        "live": true,
        "latest": {
          "date": "2026-10-01",
          "close": 158.093,
          "prevDate": "2026-09-30",
          "prevClose": 157.404,
          "change": 0.689,
          "changePct": 0.44,
          "gapDays": 1,
          "gapSuspect": false
        },
        "settled": {
          "date": "2026-09-30",
          "close": 157.404,
          "prevDate": "2026-09-29",
          "prevClose": 157.361,
          "change": 0.043,
          "changePct": 0.03,
          "gapDays": 1,
          "gapSuspect": false
        },
        "quotePrice": 158.093,
        "series": [
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
            "close": 157.404
          },
          {
            "date": "2026-10-01",
            "close": 158.093
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
        "close": 6.703,
        "prevClose": 6.7103,
        "change": -0.0073,
        "changePct": -0.11,
        "asOf": "2026-09-30",
        "prevAsOf": "2026-09-29",
        "gapDays": 1,
        "gapSuspect": false,
        "live": true,
        "latest": {
          "date": "2026-10-01",
          "close": 6.6987,
          "prevDate": "2026-09-30",
          "prevClose": 6.703,
          "change": -0.0043,
          "changePct": -0.06,
          "gapDays": 1,
          "gapSuspect": false
        },
        "settled": {
          "date": "2026-09-30",
          "close": 6.703,
          "prevDate": "2026-09-29",
          "prevClose": 6.7103,
          "change": -0.0073,
          "changePct": -0.11,
          "gapDays": 1,
          "gapSuspect": false
        },
        "quotePrice": 6.6987,
        "series": [
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
            "close": 6.703
          },
          {
            "date": "2026-10-01",
            "close": 6.6987
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
        "close": 31.85,
        "prevClose": 31.7822,
        "change": 0.0678,
        "changePct": 0.21,
        "asOf": "2026-09-30",
        "prevAsOf": "2026-09-29",
        "gapDays": 1,
        "gapSuspect": false,
        "live": true,
        "latest": {
          "date": "2026-10-01",
          "close": 31.9,
          "prevDate": "2026-09-30",
          "prevClose": 31.85,
          "change": 0.05,
          "changePct": 0.16,
          "gapDays": 1,
          "gapSuspect": false
        },
        "settled": {
          "date": "2026-09-30",
          "close": 31.85,
          "prevDate": "2026-09-29",
          "prevClose": 31.7822,
          "change": 0.0678,
          "changePct": 0.21,
          "gapDays": 1,
          "gapSuspect": false
        },
        "quotePrice": 31.9,
        "series": [
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
            "close": 31.85
          },
          {
            "date": "2026-10-01",
            "close": 31.9
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
        "close": 47940.1289,
        "prevClose": 47631.9609,
        "change": 308.168,
        "changePct": 0.65,
        "asOf": "2026-09-30",
        "prevAsOf": "2026-09-29",
        "gapDays": 1,
        "gapSuspect": false,
        "live": true,
        "latest": {
          "date": "2026-10-01",
          "close": 48028.3203,
          "prevDate": "2026-09-30",
          "prevClose": 47940.1289,
          "change": 88.1914,
          "changePct": 0.18,
          "gapDays": 1,
          "gapSuspect": false
        },
        "settled": {
          "date": "2026-09-30",
          "close": 47940.1289,
          "prevDate": "2026-09-29",
          "prevClose": 47631.9609,
          "change": 308.168,
          "changePct": 0.65,
          "gapDays": 1,
          "gapSuspect": false
        },
        "quotePrice": 48028.32,
        "series": [
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
            "close": 47940.1289
          },
          {
            "date": "2026-10-01",
            "close": 48028.3203
          }
        ],
        "currency": "TWD",
        "timezone": "Asia/Taipei",
        "source": "Yahoo Finance chart API（日線）"
      }
    }
  }
};
