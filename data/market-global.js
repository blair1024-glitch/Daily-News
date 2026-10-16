/**
 * market-global.js — 由 GitHub Actions 自動產生，請勿手動編輯。
 * 產生器：scripts/fetch-global-market.mjs
 *
 * 國際行情中繼資料，供每日 dashboard 更新流程讀用，不會被 index.html 載入。
 * ok:false 代表該標的當次抓不到，error 說明原因——請據實標註，不要沿用舊值。
 */
window.MARKET_GLOBAL = {
  "fetchedAt": "2026-10-16T01:02:28.903Z",
  "okCount": 16,
  "totalCount": 16,
  "items": {
    "sox": {
      "ok": true,
      "label": "費城半導體 SOX",
      "symbol": "%5ESOX",
      "value": {
        "close": 11581.2148,
        "prevClose": 11684.3799,
        "change": -103.1651,
        "changePct": -0.88,
        "asOf": "2026-10-15",
        "prevAsOf": "2026-10-14",
        "gapDays": 1,
        "gapSuspect": false,
        "live": false,
        "latest": {
          "date": "2026-10-15",
          "close": 11581.2148,
          "prevDate": "2026-10-14",
          "prevClose": 11684.3799,
          "change": -103.1651,
          "changePct": -0.88,
          "gapDays": 1,
          "gapSuspect": false
        },
        "settled": {
          "date": "2026-10-15",
          "close": 11581.2148,
          "prevDate": "2026-10-14",
          "prevClose": 11684.3799,
          "change": -103.1651,
          "changePct": -0.88,
          "gapDays": 1,
          "gapSuspect": false
        },
        "quotePrice": 11581.215,
        "series": [
          {
            "date": "2026-10-08",
            "close": 12623.71
          },
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
            "close": 11581.2148
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
        "close": 16.46,
        "prevClose": 16.87,
        "change": -0.41,
        "changePct": -2.43,
        "asOf": "2026-10-15",
        "prevAsOf": "2026-10-14",
        "gapDays": 1,
        "gapSuspect": false,
        "live": false,
        "latest": {
          "date": "2026-10-15",
          "close": 16.46,
          "prevDate": "2026-10-14",
          "prevClose": 16.87,
          "change": -0.41,
          "changePct": -2.43,
          "gapDays": 1,
          "gapSuspect": false
        },
        "settled": {
          "date": "2026-10-15",
          "close": 16.46,
          "prevDate": "2026-10-14",
          "prevClose": 16.87,
          "change": -0.41,
          "changePct": -2.43,
          "gapDays": 1,
          "gapSuspect": false
        },
        "quotePrice": 16.46,
        "series": [
          {
            "date": "2026-10-08",
            "close": 15.41
          },
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
        "close": 7744.0601,
        "prevClose": 7718.9399,
        "change": 25.1202,
        "changePct": 0.33,
        "asOf": "2026-10-15",
        "prevAsOf": "2026-10-14",
        "gapDays": 1,
        "gapSuspect": false,
        "live": false,
        "latest": {
          "date": "2026-10-15",
          "close": 7744.0601,
          "prevDate": "2026-10-14",
          "prevClose": 7718.9399,
          "change": 25.1202,
          "changePct": 0.33,
          "gapDays": 1,
          "gapSuspect": false
        },
        "settled": {
          "date": "2026-10-15",
          "close": 7744.0601,
          "prevDate": "2026-10-14",
          "prevClose": 7718.9399,
          "change": 25.1202,
          "changePct": 0.33,
          "gapDays": 1,
          "gapSuspect": false
        },
        "quotePrice": 7744.06,
        "series": [
          {
            "date": "2026-10-08",
            "close": 7765.3599
          },
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
        "close": 26713.0254,
        "prevClose": 26692.8691,
        "change": 20.1563,
        "changePct": 0.08,
        "asOf": "2026-10-15",
        "prevAsOf": "2026-10-14",
        "gapDays": 1,
        "gapSuspect": false,
        "live": false,
        "latest": {
          "date": "2026-10-15",
          "close": 26713.0254,
          "prevDate": "2026-10-14",
          "prevClose": 26692.8691,
          "change": 20.1563,
          "changePct": 0.08,
          "gapDays": 1,
          "gapSuspect": false
        },
        "settled": {
          "date": "2026-10-15",
          "close": 26713.0254,
          "prevDate": "2026-10-14",
          "prevClose": 26692.8691,
          "change": 20.1563,
          "changePct": 0.08,
          "gapDays": 1,
          "gapSuspect": false
        },
        "quotePrice": 26713.025,
        "series": [
          {
            "date": "2026-10-08",
            "close": 27193.3398
          },
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
            "close": 26713.0254
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
        "close": 52177.6914,
        "prevClose": 51621.4805,
        "change": 556.2109,
        "changePct": 1.08,
        "asOf": "2026-10-15",
        "prevAsOf": "2026-10-14",
        "gapDays": 1,
        "gapSuspect": false,
        "live": false,
        "latest": {
          "date": "2026-10-15",
          "close": 52177.6914,
          "prevDate": "2026-10-14",
          "prevClose": 51621.4805,
          "change": 556.2109,
          "changePct": 1.08,
          "gapDays": 1,
          "gapSuspect": false
        },
        "settled": {
          "date": "2026-10-15",
          "close": 52177.6914,
          "prevDate": "2026-10-14",
          "prevClose": 51621.4805,
          "change": 556.2109,
          "changePct": 1.08,
          "gapDays": 1,
          "gapSuspect": false
        },
        "quotePrice": 52177.69,
        "series": [
          {
            "date": "2026-10-08",
            "close": 51231.6406
          },
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
        "close": 5.089,
        "prevClose": 5.19,
        "change": -0.101,
        "changePct": -1.95,
        "asOf": "2026-10-15",
        "prevAsOf": "2026-10-14",
        "gapDays": 1,
        "gapSuspect": false,
        "live": false,
        "latest": {
          "date": "2026-10-15",
          "close": 5.089,
          "prevDate": "2026-10-14",
          "prevClose": 5.19,
          "change": -0.101,
          "changePct": -1.95,
          "gapDays": 1,
          "gapSuspect": false
        },
        "settled": {
          "date": "2026-10-15",
          "close": 5.089,
          "prevDate": "2026-10-14",
          "prevClose": 5.19,
          "change": -0.101,
          "changePct": -1.95,
          "gapDays": 1,
          "gapSuspect": false
        },
        "quotePrice": 5.089,
        "series": [
          {
            "date": "2026-10-08",
            "close": 5.231
          },
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
        "close": 5.429,
        "prevClose": 5.525,
        "change": -0.096,
        "changePct": -1.74,
        "asOf": "2026-10-15",
        "prevAsOf": "2026-10-14",
        "gapDays": 1,
        "gapSuspect": false,
        "live": false,
        "latest": {
          "date": "2026-10-15",
          "close": 5.429,
          "prevDate": "2026-10-14",
          "prevClose": 5.525,
          "change": -0.096,
          "changePct": -1.74,
          "gapDays": 1,
          "gapSuspect": false
        },
        "settled": {
          "date": "2026-10-15",
          "close": 5.429,
          "prevDate": "2026-10-14",
          "prevClose": 5.525,
          "change": -0.096,
          "changePct": -1.74,
          "gapDays": 1,
          "gapSuspect": false
        },
        "quotePrice": 5.429,
        "series": [
          {
            "date": "2026-10-08",
            "close": 5.606
          },
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
        "prevClose": 4.992,
        "change": -0.093,
        "changePct": -1.86,
        "asOf": "2026-10-15",
        "prevAsOf": "2026-10-14",
        "gapDays": 1,
        "gapSuspect": false,
        "live": false,
        "latest": {
          "date": "2026-10-15",
          "close": 4.899,
          "prevDate": "2026-10-14",
          "prevClose": 4.992,
          "change": -0.093,
          "changePct": -1.86,
          "gapDays": 1,
          "gapSuspect": false
        },
        "settled": {
          "date": "2026-10-15",
          "close": 4.899,
          "prevDate": "2026-10-14",
          "prevClose": 4.992,
          "change": -0.093,
          "changePct": -1.86,
          "gapDays": 1,
          "gapSuspect": false
        },
        "quotePrice": 4.899,
        "series": [
          {
            "date": "2026-10-08",
            "close": 4.991
          },
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
        "close": 102.55,
        "prevClose": 102.18,
        "change": 0.37,
        "changePct": 0.36,
        "asOf": "2026-10-14",
        "prevAsOf": "2026-10-13",
        "gapDays": 1,
        "gapSuspect": false,
        "live": true,
        "latest": {
          "date": "2026-10-15",
          "close": 102.063,
          "prevDate": "2026-10-14",
          "prevClose": 102.55,
          "change": -0.487,
          "changePct": -0.47,
          "gapDays": 1,
          "gapSuspect": false
        },
        "settled": {
          "date": "2026-10-14",
          "close": 102.55,
          "prevDate": "2026-10-13",
          "prevClose": 102.18,
          "change": 0.37,
          "changePct": 0.36,
          "gapDays": 1,
          "gapSuspect": false
        },
        "quotePrice": 102.063,
        "series": [
          {
            "date": "2026-10-08",
            "close": 102.14
          },
          {
            "date": "2026-10-09",
            "close": 102.21
          },
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
            "close": 102.063
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
        "close": 95.09,
        "prevClose": 94.14,
        "change": 0.95,
        "changePct": 1.01,
        "asOf": "2026-10-14",
        "prevAsOf": "2026-10-13",
        "gapDays": 1,
        "gapSuspect": false,
        "live": true,
        "latest": {
          "date": "2026-10-15",
          "close": 96.01,
          "prevDate": "2026-10-14",
          "prevClose": 95.09,
          "change": 0.92,
          "changePct": 0.97,
          "gapDays": 1,
          "gapSuspect": false
        },
        "settled": {
          "date": "2026-10-14",
          "close": 95.09,
          "prevDate": "2026-10-13",
          "prevClose": 94.14,
          "change": 0.95,
          "changePct": 1.01,
          "gapDays": 1,
          "gapSuspect": false
        },
        "quotePrice": 96.01,
        "series": [
          {
            "date": "2026-10-08",
            "close": 91.49
          },
          {
            "date": "2026-10-09",
            "close": 91.85
          },
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
            "close": 96.01
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
        "close": 106.06,
        "prevClose": 105.69,
        "change": 0.37,
        "changePct": 0.35,
        "asOf": "2026-10-14",
        "prevAsOf": "2026-10-13",
        "gapDays": 1,
        "gapSuspect": false,
        "live": true,
        "latest": {
          "date": "2026-10-15",
          "close": 105.5,
          "prevDate": "2026-10-14",
          "prevClose": 106.06,
          "change": -0.56,
          "changePct": -0.53,
          "gapDays": 1,
          "gapSuspect": false
        },
        "settled": {
          "date": "2026-10-14",
          "close": 106.06,
          "prevDate": "2026-10-13",
          "prevClose": 105.69,
          "change": 0.37,
          "changePct": 0.35,
          "gapDays": 1,
          "gapSuspect": false
        },
        "quotePrice": 105.5,
        "series": [
          {
            "date": "2026-10-08",
            "close": 104.28
          },
          {
            "date": "2026-10-09",
            "close": 104.72
          },
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
            "close": 105.5
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
        "close": 4107.8999,
        "prevClose": 4177.2998,
        "change": -69.3999,
        "changePct": -1.66,
        "asOf": "2026-10-14",
        "prevAsOf": "2026-10-13",
        "gapDays": 1,
        "gapSuspect": false,
        "live": true,
        "latest": {
          "date": "2026-10-15",
          "close": 4176.3999,
          "prevDate": "2026-10-14",
          "prevClose": 4107.8999,
          "change": 68.5,
          "changePct": 1.67,
          "gapDays": 1,
          "gapSuspect": false
        },
        "settled": {
          "date": "2026-10-14",
          "close": 4107.8999,
          "prevDate": "2026-10-13",
          "prevClose": 4177.2998,
          "change": -69.3999,
          "changePct": -1.66,
          "gapDays": 1,
          "gapSuspect": false
        },
        "quotePrice": 4176.4,
        "series": [
          {
            "date": "2026-10-08",
            "close": 4157
          },
          {
            "date": "2026-10-09",
            "close": 4216.2998
          },
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
            "close": 4176.3999
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
        "close": 157.957,
        "prevClose": 158.322,
        "change": -0.365,
        "changePct": -0.23,
        "asOf": "2026-10-15",
        "prevAsOf": "2026-10-14",
        "gapDays": 1,
        "gapSuspect": false,
        "live": true,
        "latest": {
          "date": "2026-10-16",
          "close": 158.149,
          "prevDate": "2026-10-15",
          "prevClose": 157.957,
          "change": 0.192,
          "changePct": 0.12,
          "gapDays": 1,
          "gapSuspect": false
        },
        "settled": {
          "date": "2026-10-15",
          "close": 157.957,
          "prevDate": "2026-10-14",
          "prevClose": 158.322,
          "change": -0.365,
          "changePct": -0.23,
          "gapDays": 1,
          "gapSuspect": false
        },
        "quotePrice": 158.149,
        "series": [
          {
            "date": "2026-10-09",
            "close": 158.063
          },
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
            "close": 158.149
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
        "close": 6.6926,
        "prevClose": 6.692,
        "change": 0.0006,
        "changePct": 0.01,
        "asOf": "2026-10-15",
        "prevAsOf": "2026-10-14",
        "gapDays": 1,
        "gapSuspect": false,
        "live": true,
        "latest": {
          "date": "2026-10-16",
          "close": 6.6904,
          "prevDate": "2026-10-15",
          "prevClose": 6.6926,
          "change": -0.0022,
          "changePct": -0.03,
          "gapDays": 1,
          "gapSuspect": false
        },
        "settled": {
          "date": "2026-10-15",
          "close": 6.6926,
          "prevDate": "2026-10-14",
          "prevClose": 6.692,
          "change": 0.0006,
          "changePct": 0.01,
          "gapDays": 1,
          "gapSuspect": false
        },
        "quotePrice": 6.6904,
        "series": [
          {
            "date": "2026-10-09",
            "close": 6.7021
          },
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
            "close": 6.6904
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
        "close": 32.1899,
        "prevClose": 32.105,
        "change": 0.0849,
        "changePct": 0.26,
        "asOf": "2026-10-15",
        "prevAsOf": "2026-10-14",
        "gapDays": 1,
        "gapSuspect": false,
        "live": true,
        "latest": {
          "date": "2026-10-16",
          "close": 32.38,
          "prevDate": "2026-10-15",
          "prevClose": 32.1899,
          "change": 0.1901,
          "changePct": 0.59,
          "gapDays": 1,
          "gapSuspect": false
        },
        "settled": {
          "date": "2026-10-15",
          "close": 32.1899,
          "prevDate": "2026-10-14",
          "prevClose": 32.105,
          "change": 0.0849,
          "changePct": 0.26,
          "gapDays": 1,
          "gapSuspect": false
        },
        "quotePrice": 32.38,
        "series": [
          {
            "date": "2026-10-09",
            "close": 31.9254
          },
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
            "close": 32.38
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
        "close": 46969.8711,
        "prevClose": 48625.8281,
        "change": -1655.957,
        "changePct": -3.41,
        "asOf": "2026-10-15",
        "prevAsOf": "2026-10-14",
        "gapDays": 1,
        "gapSuspect": false,
        "live": false,
        "latest": {
          "date": "2026-10-15",
          "close": 46969.8711,
          "prevDate": "2026-10-14",
          "prevClose": 48625.8281,
          "change": -1655.957,
          "changePct": -3.41,
          "gapDays": 1,
          "gapSuspect": false
        },
        "settled": {
          "date": "2026-10-15",
          "close": 46969.8711,
          "prevDate": "2026-10-14",
          "prevClose": 48625.8281,
          "change": -1655.957,
          "changePct": -3.41,
          "gapDays": 1,
          "gapSuspect": false
        },
        "quotePrice": 46969.87,
        "series": [
          {
            "date": "2026-10-07",
            "close": 49806.3711
          },
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
          }
        ],
        "currency": "TWD",
        "timezone": "Asia/Taipei",
        "source": "Yahoo Finance chart API（日線）"
      }
    }
  }
};
