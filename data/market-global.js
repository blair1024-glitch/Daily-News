/**
 * market-global.js — 由 GitHub Actions 自動產生，請勿手動編輯。
 * 產生器：scripts/fetch-global-market.mjs
 *
 * 國際行情中繼資料，供每日 dashboard 更新流程讀用，不會被 index.html 載入。
 * ok:false 代表該標的當次抓不到，error 說明原因——請據實標註，不要沿用舊值。
 */
window.MARKET_GLOBAL = {
  "fetchedAt": "2026-10-18T23:40:55.354Z",
  "okCount": 16,
  "totalCount": 16,
  "items": {
    "sox": {
      "ok": true,
      "label": "費城半導體 SOX",
      "symbol": "%5ESOX",
      "value": {
        "close": 11137.29,
        "prevClose": 11581.21,
        "change": -443.92,
        "changePct": -3.83,
        "asOf": "2026-10-16",
        "prevAsOf": "2026-10-15",
        "gapDays": 1,
        "gapSuspect": false,
        "live": false,
        "latest": {
          "date": "2026-10-16",
          "close": 11137.29,
          "prevDate": "2026-10-15",
          "prevClose": 11581.21,
          "change": -443.92,
          "changePct": -3.83,
          "gapDays": 1,
          "gapSuspect": false
        },
        "settled": {
          "date": "2026-10-16",
          "close": 11137.29,
          "prevDate": "2026-10-15",
          "prevClose": 11581.21,
          "change": -443.92,
          "changePct": -3.83,
          "gapDays": 1,
          "gapSuspect": false
        },
        "quotePrice": 11137.287,
        "series": [
          {
            "date": "2026-10-09",
            "close": 12572.4199
          },
          {
            "date": "2026-10-12",
            "close": 12236.79
          },
          {
            "date": "2026-10-13",
            "close": 12208.79
          },
          {
            "date": "2026-10-14",
            "close": 11684.3799
          },
          {
            "date": "2026-10-15",
            "close": 11581.21
          },
          {
            "date": "2026-10-16",
            "close": 11137.29
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
        "close": 19.99,
        "prevClose": 16.46,
        "change": 3.53,
        "changePct": 21.45,
        "asOf": "2026-10-16",
        "prevAsOf": "2026-10-15",
        "gapDays": 1,
        "gapSuspect": false,
        "live": false,
        "latest": {
          "date": "2026-10-16",
          "close": 19.99,
          "prevDate": "2026-10-15",
          "prevClose": 16.46,
          "change": 3.53,
          "changePct": 21.45,
          "gapDays": 1,
          "gapSuspect": false
        },
        "settled": {
          "date": "2026-10-16",
          "close": 19.99,
          "prevDate": "2026-10-15",
          "prevClose": 16.46,
          "change": 3.53,
          "changePct": 21.45,
          "gapDays": 1,
          "gapSuspect": false
        },
        "quotePrice": 19.99,
        "series": [
          {
            "date": "2026-10-09",
            "close": 14.84
          },
          {
            "date": "2026-10-12",
            "close": 15.21
          },
          {
            "date": "2026-10-13",
            "close": 15.27
          },
          {
            "date": "2026-10-14",
            "close": 16.87
          },
          {
            "date": "2026-10-15",
            "close": 16.46
          },
          {
            "date": "2026-10-16",
            "close": 19.99
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
        "close": 7659.4399,
        "prevClose": 7744.0601,
        "change": -84.6202,
        "changePct": -1.09,
        "asOf": "2026-10-16",
        "prevAsOf": "2026-10-15",
        "gapDays": 1,
        "gapSuspect": false,
        "live": false,
        "latest": {
          "date": "2026-10-16",
          "close": 7659.4399,
          "prevDate": "2026-10-15",
          "prevClose": 7744.0601,
          "change": -84.6202,
          "changePct": -1.09,
          "gapDays": 1,
          "gapSuspect": false
        },
        "settled": {
          "date": "2026-10-16",
          "close": 7659.4399,
          "prevDate": "2026-10-15",
          "prevClose": 7744.0601,
          "change": -84.6202,
          "changePct": -1.09,
          "gapDays": 1,
          "gapSuspect": false
        },
        "quotePrice": 7659.44,
        "series": [
          {
            "date": "2026-10-09",
            "close": 7811.54
          },
          {
            "date": "2026-10-12",
            "close": 7807.2402
          },
          {
            "date": "2026-10-13",
            "close": 7805.4502
          },
          {
            "date": "2026-10-14",
            "close": 7718.9399
          },
          {
            "date": "2026-10-15",
            "close": 7744.0601
          },
          {
            "date": "2026-10-16",
            "close": 7659.4399
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
        "close": 26140.0293,
        "prevClose": 26713.0293,
        "change": -573,
        "changePct": -2.15,
        "asOf": "2026-10-16",
        "prevAsOf": "2026-10-15",
        "gapDays": 1,
        "gapSuspect": false,
        "live": false,
        "latest": {
          "date": "2026-10-16",
          "close": 26140.0293,
          "prevDate": "2026-10-15",
          "prevClose": 26713.0293,
          "change": -573,
          "changePct": -2.15,
          "gapDays": 1,
          "gapSuspect": false
        },
        "settled": {
          "date": "2026-10-16",
          "close": 26140.0293,
          "prevDate": "2026-10-15",
          "prevClose": 26713.0293,
          "change": -573,
          "changePct": -2.15,
          "gapDays": 1,
          "gapSuspect": false
        },
        "quotePrice": 26140.033,
        "series": [
          {
            "date": "2026-10-09",
            "close": 27366.1699
          },
          {
            "date": "2026-10-12",
            "close": 27245.9004
          },
          {
            "date": "2026-10-13",
            "close": 27204.3809
          },
          {
            "date": "2026-10-14",
            "close": 26692.8691
          },
          {
            "date": "2026-10-15",
            "close": 26713.0293
          },
          {
            "date": "2026-10-16",
            "close": 26140.0293
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
        "close": 52002.4102,
        "prevClose": 52177.6914,
        "change": -175.2812,
        "changePct": -0.34,
        "asOf": "2026-10-16",
        "prevAsOf": "2026-10-15",
        "gapDays": 1,
        "gapSuspect": false,
        "live": false,
        "latest": {
          "date": "2026-10-16",
          "close": 52002.4102,
          "prevDate": "2026-10-15",
          "prevClose": 52177.6914,
          "change": -175.2812,
          "changePct": -0.34,
          "gapDays": 1,
          "gapSuspect": false
        },
        "settled": {
          "date": "2026-10-16",
          "close": 52002.4102,
          "prevDate": "2026-10-15",
          "prevClose": 52177.6914,
          "change": -175.2812,
          "changePct": -0.34,
          "gapDays": 1,
          "gapSuspect": false
        },
        "quotePrice": 52002.41,
        "series": [
          {
            "date": "2026-10-09",
            "close": 51654.9492
          },
          {
            "date": "2026-10-12",
            "close": 51850.5508
          },
          {
            "date": "2026-10-13",
            "close": 51670.1016
          },
          {
            "date": "2026-10-14",
            "close": 51621.4805
          },
          {
            "date": "2026-10-15",
            "close": 52177.6914
          },
          {
            "date": "2026-10-16",
            "close": 52002.4102
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
        "close": 5.098,
        "prevClose": 5.089,
        "change": 0.009,
        "changePct": 0.18,
        "asOf": "2026-10-16",
        "prevAsOf": "2026-10-15",
        "gapDays": 1,
        "gapSuspect": false,
        "live": false,
        "latest": {
          "date": "2026-10-16",
          "close": 5.098,
          "prevDate": "2026-10-15",
          "prevClose": 5.089,
          "change": 0.009,
          "changePct": 0.18,
          "gapDays": 1,
          "gapSuspect": false
        },
        "settled": {
          "date": "2026-10-16",
          "close": 5.098,
          "prevDate": "2026-10-15",
          "prevClose": 5.089,
          "change": 0.009,
          "changePct": 0.18,
          "gapDays": 1,
          "gapSuspect": false
        },
        "quotePrice": 5.098,
        "series": [
          {
            "date": "2026-10-09",
            "close": 5.244
          },
          {
            "date": "2026-10-12",
            "close": 5.24
          },
          {
            "date": "2026-10-13",
            "close": 5.217
          },
          {
            "date": "2026-10-14",
            "close": 5.19
          },
          {
            "date": "2026-10-15",
            "close": 5.089
          },
          {
            "date": "2026-10-16",
            "close": 5.098
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
        "close": 5.436,
        "prevClose": 5.429,
        "change": 0.007,
        "changePct": 0.13,
        "asOf": "2026-10-16",
        "prevAsOf": "2026-10-15",
        "gapDays": 1,
        "gapSuspect": false,
        "live": false,
        "latest": {
          "date": "2026-10-16",
          "close": 5.436,
          "prevDate": "2026-10-15",
          "prevClose": 5.429,
          "change": 0.007,
          "changePct": 0.13,
          "gapDays": 1,
          "gapSuspect": false
        },
        "settled": {
          "date": "2026-10-16",
          "close": 5.436,
          "prevDate": "2026-10-15",
          "prevClose": 5.429,
          "change": 0.007,
          "changePct": 0.13,
          "gapDays": 1,
          "gapSuspect": false
        },
        "quotePrice": 5.436,
        "series": [
          {
            "date": "2026-10-09",
            "close": 5.6
          },
          {
            "date": "2026-10-12",
            "close": 5.598
          },
          {
            "date": "2026-10-13",
            "close": 5.563
          },
          {
            "date": "2026-10-14",
            "close": 5.525
          },
          {
            "date": "2026-10-15",
            "close": 5.429
          },
          {
            "date": "2026-10-16",
            "close": 5.436
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
        "close": 4.899,
        "prevClose": 4.899,
        "change": 0,
        "changePct": 0,
        "asOf": "2026-10-16",
        "prevAsOf": "2026-10-15",
        "gapDays": 1,
        "gapSuspect": false,
        "live": false,
        "latest": {
          "date": "2026-10-16",
          "close": 4.899,
          "prevDate": "2026-10-15",
          "prevClose": 4.899,
          "change": 0,
          "changePct": 0,
          "gapDays": 1,
          "gapSuspect": false
        },
        "settled": {
          "date": "2026-10-16",
          "close": 4.899,
          "prevDate": "2026-10-15",
          "prevClose": 4.899,
          "change": 0,
          "changePct": 0,
          "gapDays": 1,
          "gapSuspect": false
        },
        "quotePrice": 4.899,
        "series": [
          {
            "date": "2026-10-09",
            "close": 5.021
          },
          {
            "date": "2026-10-12",
            "close": 5.019
          },
          {
            "date": "2026-10-13",
            "close": 5.007
          },
          {
            "date": "2026-10-14",
            "close": 4.992
          },
          {
            "date": "2026-10-15",
            "close": 4.899
          },
          {
            "date": "2026-10-16",
            "close": 4.899
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
        "close": 101.84,
        "prevClose": 102,
        "change": -0.16,
        "changePct": -0.16,
        "asOf": "2026-10-16",
        "prevAsOf": "2026-10-15",
        "gapDays": 1,
        "gapSuspect": false,
        "live": true,
        "latest": {
          "date": "2026-10-18",
          "close": 101.872,
          "prevDate": "2026-10-16",
          "prevClose": 101.84,
          "change": 0.032,
          "changePct": 0.03,
          "gapDays": 2,
          "gapSuspect": false
        },
        "settled": {
          "date": "2026-10-16",
          "close": 101.84,
          "prevDate": "2026-10-15",
          "prevClose": 102,
          "change": -0.16,
          "changePct": -0.16,
          "gapDays": 1,
          "gapSuspect": false
        },
        "quotePrice": 101.872,
        "series": [
          {
            "date": "2026-10-12",
            "close": 102.58
          },
          {
            "date": "2026-10-13",
            "close": 102.18
          },
          {
            "date": "2026-10-14",
            "close": 102.55
          },
          {
            "date": "2026-10-15",
            "close": 102
          },
          {
            "date": "2026-10-16",
            "close": 101.84
          },
          {
            "date": "2026-10-18",
            "close": 101.872
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
        "close": 101.41,
        "prevClose": 97.97,
        "change": 3.44,
        "changePct": 3.51,
        "asOf": "2026-10-16",
        "prevAsOf": "2026-10-15",
        "gapDays": 1,
        "gapSuspect": false,
        "live": true,
        "latest": {
          "date": "2026-10-18",
          "close": 98.04,
          "prevDate": "2026-10-16",
          "prevClose": 101.41,
          "change": -3.37,
          "changePct": -3.32,
          "gapDays": 2,
          "gapSuspect": false
        },
        "settled": {
          "date": "2026-10-16",
          "close": 101.41,
          "prevDate": "2026-10-15",
          "prevClose": 97.97,
          "change": 3.44,
          "changePct": 3.51,
          "gapDays": 1,
          "gapSuspect": false
        },
        "quotePrice": 98.04,
        "series": [
          {
            "date": "2026-10-12",
            "close": 93.74
          },
          {
            "date": "2026-10-13",
            "close": 94.14
          },
          {
            "date": "2026-10-14",
            "close": 95.09
          },
          {
            "date": "2026-10-15",
            "close": 97.97
          },
          {
            "date": "2026-10-16",
            "close": 101.41
          },
          {
            "date": "2026-10-18",
            "close": 98.04
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
        "close": 109.86,
        "prevClose": 105.92,
        "change": 3.94,
        "changePct": 3.72,
        "asOf": "2026-10-16",
        "prevAsOf": "2026-10-15",
        "gapDays": 1,
        "gapSuspect": false,
        "live": true,
        "latest": {
          "date": "2026-10-18",
          "close": 108.58,
          "prevDate": "2026-10-16",
          "prevClose": 109.86,
          "change": -1.28,
          "changePct": -1.17,
          "gapDays": 2,
          "gapSuspect": false
        },
        "settled": {
          "date": "2026-10-16",
          "close": 109.86,
          "prevDate": "2026-10-15",
          "prevClose": 105.92,
          "change": 3.94,
          "changePct": 3.72,
          "gapDays": 1,
          "gapSuspect": false
        },
        "quotePrice": 108.58,
        "series": [
          {
            "date": "2026-10-12",
            "close": 106.65
          },
          {
            "date": "2026-10-13",
            "close": 105.69
          },
          {
            "date": "2026-10-14",
            "close": 106.06
          },
          {
            "date": "2026-10-15",
            "close": 105.92
          },
          {
            "date": "2026-10-16",
            "close": 109.86
          },
          {
            "date": "2026-10-18",
            "close": 108.58
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
        "close": 4181.1001,
        "prevClose": 4170.1001,
        "change": 11,
        "changePct": 0.26,
        "asOf": "2026-10-16",
        "prevAsOf": "2026-10-15",
        "gapDays": 1,
        "gapSuspect": false,
        "live": true,
        "latest": {
          "date": "2026-10-18",
          "close": 4205,
          "prevDate": "2026-10-16",
          "prevClose": 4181.1001,
          "change": 23.8999,
          "changePct": 0.57,
          "gapDays": 2,
          "gapSuspect": false
        },
        "settled": {
          "date": "2026-10-16",
          "close": 4181.1001,
          "prevDate": "2026-10-15",
          "prevClose": 4170.1001,
          "change": 11,
          "changePct": 0.26,
          "gapDays": 1,
          "gapSuspect": false
        },
        "quotePrice": 4205,
        "series": [
          {
            "date": "2026-10-12",
            "close": 4190.6001
          },
          {
            "date": "2026-10-13",
            "close": 4177.2998
          },
          {
            "date": "2026-10-14",
            "close": 4107.8999
          },
          {
            "date": "2026-10-15",
            "close": 4170.1001
          },
          {
            "date": "2026-10-16",
            "close": 4181.1001
          },
          {
            "date": "2026-10-18",
            "close": 4205
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
        "close": 158.143,
        "prevClose": 157.957,
        "change": 0.186,
        "changePct": 0.12,
        "asOf": "2026-10-16",
        "prevAsOf": "2026-10-15",
        "gapDays": 1,
        "gapSuspect": false,
        "live": true,
        "latest": {
          "date": "2026-10-19",
          "close": 157.812,
          "prevDate": "2026-10-16",
          "prevClose": 158.143,
          "change": -0.331,
          "changePct": -0.21,
          "gapDays": 3,
          "gapSuspect": false
        },
        "settled": {
          "date": "2026-10-16",
          "close": 158.143,
          "prevDate": "2026-10-15",
          "prevClose": 157.957,
          "change": 0.186,
          "changePct": 0.12,
          "gapDays": 1,
          "gapSuspect": false
        },
        "quotePrice": 157.812,
        "series": [
          {
            "date": "2026-10-12",
            "close": 158.203
          },
          {
            "date": "2026-10-13",
            "close": 158.52
          },
          {
            "date": "2026-10-14",
            "close": 158.322
          },
          {
            "date": "2026-10-15",
            "close": 157.957
          },
          {
            "date": "2026-10-16",
            "close": 158.143
          },
          {
            "date": "2026-10-19",
            "close": 157.812
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
        "close": 6.6909,
        "prevClose": 6.6926,
        "change": -0.0017,
        "changePct": -0.03,
        "asOf": "2026-10-16",
        "prevAsOf": "2026-10-15",
        "gapDays": 1,
        "gapSuspect": false,
        "live": true,
        "latest": {
          "date": "2026-10-19",
          "close": 6.6855,
          "prevDate": "2026-10-16",
          "prevClose": 6.6909,
          "change": -0.0054,
          "changePct": -0.08,
          "gapDays": 3,
          "gapSuspect": false
        },
        "settled": {
          "date": "2026-10-16",
          "close": 6.6909,
          "prevDate": "2026-10-15",
          "prevClose": 6.6926,
          "change": -0.0017,
          "changePct": -0.03,
          "gapDays": 1,
          "gapSuspect": false
        },
        "quotePrice": 6.6855,
        "series": [
          {
            "date": "2026-10-12",
            "close": 6.692
          },
          {
            "date": "2026-10-13",
            "close": 6.692
          },
          {
            "date": "2026-10-14",
            "close": 6.692
          },
          {
            "date": "2026-10-15",
            "close": 6.6926
          },
          {
            "date": "2026-10-16",
            "close": 6.6909
          },
          {
            "date": "2026-10-19",
            "close": 6.6855
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
        "close": 32.3269,
        "prevClose": 32.1899,
        "change": 0.137,
        "changePct": 0.43,
        "asOf": "2026-10-16",
        "prevAsOf": "2026-10-15",
        "gapDays": 1,
        "gapSuspect": false,
        "live": true,
        "latest": {
          "date": "2026-10-19",
          "close": 32.386,
          "prevDate": "2026-10-16",
          "prevClose": 32.3269,
          "change": 0.0591,
          "changePct": 0.18,
          "gapDays": 3,
          "gapSuspect": false
        },
        "settled": {
          "date": "2026-10-16",
          "close": 32.3269,
          "prevDate": "2026-10-15",
          "prevClose": 32.1899,
          "change": 0.137,
          "changePct": 0.43,
          "gapDays": 1,
          "gapSuspect": false
        },
        "quotePrice": 32.386,
        "series": [
          {
            "date": "2026-10-12",
            "close": 31.9161
          },
          {
            "date": "2026-10-13",
            "close": 31.9278
          },
          {
            "date": "2026-10-14",
            "close": 32.105
          },
          {
            "date": "2026-10-15",
            "close": 32.1899
          },
          {
            "date": "2026-10-16",
            "close": 32.3269
          },
          {
            "date": "2026-10-19",
            "close": 32.386
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
        "close": 47111.2617,
        "prevClose": 46969.8711,
        "change": 141.3906,
        "changePct": 0.3,
        "asOf": "2026-10-16",
        "prevAsOf": "2026-10-15",
        "gapDays": 1,
        "gapSuspect": false,
        "live": false,
        "latest": {
          "date": "2026-10-16",
          "close": 47111.2617,
          "prevDate": "2026-10-15",
          "prevClose": 46969.8711,
          "change": 141.3906,
          "changePct": 0.3,
          "gapDays": 1,
          "gapSuspect": false
        },
        "settled": {
          "date": "2026-10-16",
          "close": 47111.2617,
          "prevDate": "2026-10-15",
          "prevClose": 46969.8711,
          "change": 141.3906,
          "changePct": 0.3,
          "gapDays": 1,
          "gapSuspect": false
        },
        "quotePrice": 47111.26,
        "series": [
          {
            "date": "2026-10-08",
            "close": 49313.4414
          },
          {
            "date": "2026-10-12",
            "close": 49301.9609
          },
          {
            "date": "2026-10-13",
            "close": 48341.3086
          },
          {
            "date": "2026-10-14",
            "close": 48625.8281
          },
          {
            "date": "2026-10-15",
            "close": 46969.8711
          },
          {
            "date": "2026-10-16",
            "close": 47111.2617
          }
        ],
        "currency": "TWD",
        "timezone": "Asia/Taipei",
        "source": "Yahoo Finance chart API（日線）"
      }
    }
  }
};
