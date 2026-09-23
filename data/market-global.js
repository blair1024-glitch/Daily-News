/**
 * market-global.js — 由 GitHub Actions 自動產生，請勿手動編輯。
 * 產生器：scripts/fetch-global-market.mjs
 *
 * 國際行情中繼資料，供每日 dashboard 更新流程讀用，不會被 index.html 載入。
 * ok:false 代表該標的當次抓不到，error 說明原因——請據實標註，不要沿用舊值。
 */
window.MARKET_GLOBAL = {
  "fetchedAt": "2026-09-23T15:19:36.782Z",
  "okCount": 16,
  "totalCount": 16,
  "items": {
    "sox": {
      "ok": true,
      "label": "費城半導體 SOX",
      "symbol": "%5ESOX",
      "value": {
        "close": 12433.1699,
        "prevClose": 11921.6904,
        "change": 511.4795,
        "changePct": 4.29,
        "asOf": "2026-09-21",
        "prevAsOf": "2026-09-18",
        "gapDays": 3,
        "gapSuspect": false,
        "live": true,
        "latest": {
          "date": "2026-09-23",
          "close": 12512.8789,
          "prevDate": "2026-09-21",
          "prevClose": 12433.1699,
          "change": 79.709,
          "changePct": 0.64,
          "gapDays": 2,
          "gapSuspect": false
        },
        "settled": {
          "date": "2026-09-21",
          "close": 12433.1699,
          "prevDate": "2026-09-18",
          "prevClose": 11921.6904,
          "change": 511.4795,
          "changePct": 4.29,
          "gapDays": 3,
          "gapSuspect": false
        },
        "quotePrice": 12512.879,
        "series": [
          {
            "date": "2026-09-15",
            "close": 11175.5498
          },
          {
            "date": "2026-09-16",
            "close": 11246.1104
          },
          {
            "date": "2026-09-17",
            "close": 11599.4902
          },
          {
            "date": "2026-09-18",
            "close": 11921.6904
          },
          {
            "date": "2026-09-21",
            "close": 12433.1699
          },
          {
            "date": "2026-09-23",
            "close": 12512.8789
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
        "prevClose": 14.81,
        "change": 0.06,
        "changePct": 0.41,
        "asOf": "2026-09-21",
        "prevAsOf": "2026-09-18",
        "gapDays": 3,
        "gapSuspect": false,
        "live": true,
        "latest": {
          "date": "2026-09-23",
          "close": 14.54,
          "prevDate": "2026-09-21",
          "prevClose": 14.87,
          "change": -0.33,
          "changePct": -2.22,
          "gapDays": 2,
          "gapSuspect": false
        },
        "settled": {
          "date": "2026-09-21",
          "close": 14.87,
          "prevDate": "2026-09-18",
          "prevClose": 14.81,
          "change": 0.06,
          "changePct": 0.41,
          "gapDays": 3,
          "gapSuspect": false
        },
        "quotePrice": 14.54,
        "series": [
          {
            "date": "2026-09-15",
            "close": 17.2
          },
          {
            "date": "2026-09-16",
            "close": 17.71
          },
          {
            "date": "2026-09-17",
            "close": 15.44
          },
          {
            "date": "2026-09-18",
            "close": 14.81
          },
          {
            "date": "2026-09-21",
            "close": 14.87
          },
          {
            "date": "2026-09-23",
            "close": 14.54
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
        "close": 7764.7002,
        "prevClose": 7650.5,
        "change": 114.2002,
        "changePct": 1.49,
        "asOf": "2026-09-21",
        "prevAsOf": "2026-09-18",
        "gapDays": 3,
        "gapSuspect": false,
        "live": true,
        "latest": {
          "date": "2026-09-23",
          "close": 7725.7002,
          "prevDate": "2026-09-21",
          "prevClose": 7764.7002,
          "change": -39,
          "changePct": -0.5,
          "gapDays": 2,
          "gapSuspect": false
        },
        "settled": {
          "date": "2026-09-21",
          "close": 7764.7002,
          "prevDate": "2026-09-18",
          "prevClose": 7650.5,
          "change": 114.2002,
          "changePct": 1.49,
          "gapDays": 3,
          "gapSuspect": false
        },
        "quotePrice": 7725.7,
        "series": [
          {
            "date": "2026-09-15",
            "close": 7585.73
          },
          {
            "date": "2026-09-16",
            "close": 7551.8101
          },
          {
            "date": "2026-09-17",
            "close": 7637.7598
          },
          {
            "date": "2026-09-18",
            "close": 7650.5
          },
          {
            "date": "2026-09-21",
            "close": 7764.7002
          },
          {
            "date": "2026-09-23",
            "close": 7725.7002
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
        "close": 27122.0898,
        "prevClose": 26522.5391,
        "change": 599.5507,
        "changePct": 2.26,
        "asOf": "2026-09-21",
        "prevAsOf": "2026-09-18",
        "gapDays": 3,
        "gapSuspect": false,
        "live": true,
        "latest": {
          "date": "2026-09-23",
          "close": 26996.5293,
          "prevDate": "2026-09-21",
          "prevClose": 27122.0898,
          "change": -125.5605,
          "changePct": -0.46,
          "gapDays": 2,
          "gapSuspect": false
        },
        "settled": {
          "date": "2026-09-21",
          "close": 27122.0898,
          "prevDate": "2026-09-18",
          "prevClose": 26522.5391,
          "change": 599.5507,
          "changePct": 2.26,
          "gapDays": 3,
          "gapSuspect": false
        },
        "quotePrice": 26996.53,
        "series": [
          {
            "date": "2026-09-15",
            "close": 25981.5703
          },
          {
            "date": "2026-09-16",
            "close": 25978.4297
          },
          {
            "date": "2026-09-17",
            "close": 26418.3008
          },
          {
            "date": "2026-09-18",
            "close": 26522.5391
          },
          {
            "date": "2026-09-21",
            "close": 27122.0898
          },
          {
            "date": "2026-09-23",
            "close": 26996.5293
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
        "close": 52048.8281,
        "prevClose": 51682.6406,
        "change": 366.1875,
        "changePct": 0.71,
        "asOf": "2026-09-21",
        "prevAsOf": "2026-09-18",
        "gapDays": 3,
        "gapSuspect": false,
        "live": true,
        "latest": {
          "date": "2026-09-23",
          "close": 51682.3398,
          "prevDate": "2026-09-21",
          "prevClose": 52048.8281,
          "change": -366.4883,
          "changePct": -0.7,
          "gapDays": 2,
          "gapSuspect": false
        },
        "settled": {
          "date": "2026-09-21",
          "close": 52048.8281,
          "prevDate": "2026-09-18",
          "prevClose": 51682.6406,
          "change": 366.1875,
          "changePct": 0.71,
          "gapDays": 3,
          "gapSuspect": false
        },
        "quotePrice": 51682.34,
        "series": [
          {
            "date": "2026-09-15",
            "close": 52093.1094
          },
          {
            "date": "2026-09-16",
            "close": 51461.8984
          },
          {
            "date": "2026-09-17",
            "close": 51778.0391
          },
          {
            "date": "2026-09-18",
            "close": 51682.6406
          },
          {
            "date": "2026-09-21",
            "close": 52048.8281
          },
          {
            "date": "2026-09-23",
            "close": 51682.3398
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
        "close": 4.963,
        "prevClose": 4.998,
        "change": -0.035,
        "changePct": -0.7,
        "asOf": "2026-09-21",
        "prevAsOf": "2026-09-18",
        "gapDays": 3,
        "gapSuspect": false,
        "live": true,
        "latest": {
          "date": "2026-09-23",
          "close": 5.062,
          "prevDate": "2026-09-21",
          "prevClose": 4.963,
          "change": 0.099,
          "changePct": 1.99,
          "gapDays": 2,
          "gapSuspect": false
        },
        "settled": {
          "date": "2026-09-21",
          "close": 4.963,
          "prevDate": "2026-09-18",
          "prevClose": 4.998,
          "change": -0.035,
          "changePct": -0.7,
          "gapDays": 3,
          "gapSuspect": false
        },
        "quotePrice": 5.062,
        "series": [
          {
            "date": "2026-09-15",
            "close": 4.996
          },
          {
            "date": "2026-09-16",
            "close": 5.006
          },
          {
            "date": "2026-09-17",
            "close": 4.947
          },
          {
            "date": "2026-09-18",
            "close": 4.998
          },
          {
            "date": "2026-09-21",
            "close": 4.963
          },
          {
            "date": "2026-09-23",
            "close": 5.062
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
        "close": 5.296,
        "prevClose": 5.331,
        "change": -0.035,
        "changePct": -0.66,
        "asOf": "2026-09-21",
        "prevAsOf": "2026-09-18",
        "gapDays": 3,
        "gapSuspect": false,
        "live": true,
        "latest": {
          "date": "2026-09-23",
          "close": 5.373,
          "prevDate": "2026-09-21",
          "prevClose": 5.296,
          "change": 0.077,
          "changePct": 1.45,
          "gapDays": 2,
          "gapSuspect": false
        },
        "settled": {
          "date": "2026-09-21",
          "close": 5.296,
          "prevDate": "2026-09-18",
          "prevClose": 5.331,
          "change": -0.035,
          "changePct": -0.66,
          "gapDays": 3,
          "gapSuspect": false
        },
        "quotePrice": 5.373,
        "series": [
          {
            "date": "2026-09-15",
            "close": 5.364
          },
          {
            "date": "2026-09-16",
            "close": 5.349
          },
          {
            "date": "2026-09-17",
            "close": 5.296
          },
          {
            "date": "2026-09-18",
            "close": 5.331
          },
          {
            "date": "2026-09-21",
            "close": 5.296
          },
          {
            "date": "2026-09-23",
            "close": 5.373
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
        "close": 4.834,
        "prevClose": 4.856,
        "change": -0.022,
        "changePct": -0.45,
        "asOf": "2026-09-21",
        "prevAsOf": "2026-09-18",
        "gapDays": 3,
        "gapSuspect": false,
        "live": true,
        "latest": {
          "date": "2026-09-23",
          "close": 4.944,
          "prevDate": "2026-09-21",
          "prevClose": 4.834,
          "change": 0.11,
          "changePct": 2.28,
          "gapDays": 2,
          "gapSuspect": false
        },
        "settled": {
          "date": "2026-09-21",
          "close": 4.834,
          "prevDate": "2026-09-18",
          "prevClose": 4.856,
          "change": -0.022,
          "changePct": -0.45,
          "gapDays": 3,
          "gapSuspect": false
        },
        "quotePrice": 4.944,
        "series": [
          {
            "date": "2026-09-15",
            "close": 4.826
          },
          {
            "date": "2026-09-16",
            "close": 4.859
          },
          {
            "date": "2026-09-17",
            "close": 4.801
          },
          {
            "date": "2026-09-18",
            "close": 4.856
          },
          {
            "date": "2026-09-21",
            "close": 4.834
          },
          {
            "date": "2026-09-23",
            "close": 4.944
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
        "close": 100.43,
        "prevClose": 100.22,
        "change": 0.21,
        "changePct": 0.21,
        "asOf": "2026-09-21",
        "prevAsOf": "2026-09-18",
        "gapDays": 3,
        "gapSuspect": false,
        "live": true,
        "latest": {
          "date": "2026-09-23",
          "close": 101.005,
          "prevDate": "2026-09-21",
          "prevClose": 100.43,
          "change": 0.575,
          "changePct": 0.57,
          "gapDays": 2,
          "gapSuspect": false
        },
        "settled": {
          "date": "2026-09-21",
          "close": 100.43,
          "prevDate": "2026-09-18",
          "prevClose": 100.22,
          "change": 0.21,
          "changePct": 0.21,
          "gapDays": 3,
          "gapSuspect": false
        },
        "quotePrice": 101.005,
        "series": [
          {
            "date": "2026-09-15",
            "close": 99.65
          },
          {
            "date": "2026-09-16",
            "close": 100.31
          },
          {
            "date": "2026-09-17",
            "close": 100.22
          },
          {
            "date": "2026-09-18",
            "close": 100.22
          },
          {
            "date": "2026-09-21",
            "close": 100.43
          },
          {
            "date": "2026-09-23",
            "close": 101.005
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
        "close": 94.59,
        "prevClose": 95.78,
        "change": -1.19,
        "changePct": -1.24,
        "asOf": "2026-09-22",
        "prevAsOf": "2026-09-21",
        "gapDays": 1,
        "gapSuspect": false,
        "live": true,
        "latest": {
          "date": "2026-09-23",
          "close": 91.33,
          "prevDate": "2026-09-22",
          "prevClose": 94.59,
          "change": -3.26,
          "changePct": -3.45,
          "gapDays": 1,
          "gapSuspect": false
        },
        "settled": {
          "date": "2026-09-22",
          "close": 94.59,
          "prevDate": "2026-09-21",
          "prevClose": 95.78,
          "change": -1.19,
          "changePct": -1.24,
          "gapDays": 1,
          "gapSuspect": false
        },
        "quotePrice": 91.33,
        "series": [
          {
            "date": "2026-09-16",
            "close": 102.43
          },
          {
            "date": "2026-09-17",
            "close": 101.91
          },
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
            "close": 91.33
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
        "close": 99.25,
        "prevClose": 100.34,
        "change": -1.09,
        "changePct": -1.09,
        "asOf": "2026-09-22",
        "prevAsOf": "2026-09-21",
        "gapDays": 1,
        "gapSuspect": false,
        "live": true,
        "latest": {
          "date": "2026-09-23",
          "close": 96.9,
          "prevDate": "2026-09-22",
          "prevClose": 99.25,
          "change": -2.35,
          "changePct": -2.37,
          "gapDays": 1,
          "gapSuspect": false
        },
        "settled": {
          "date": "2026-09-22",
          "close": 99.25,
          "prevDate": "2026-09-21",
          "prevClose": 100.34,
          "change": -1.09,
          "changePct": -1.09,
          "gapDays": 1,
          "gapSuspect": false
        },
        "quotePrice": 96.9,
        "series": [
          {
            "date": "2026-09-16",
            "close": 105.83
          },
          {
            "date": "2026-09-17",
            "close": 104.82
          },
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
            "close": 96.9
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
        "close": 4376.3999,
        "prevClose": 4383.8999,
        "change": -7.5,
        "changePct": -0.17,
        "asOf": "2026-09-22",
        "prevAsOf": "2026-09-21",
        "gapDays": 1,
        "gapSuspect": false,
        "live": true,
        "latest": {
          "date": "2026-09-23",
          "close": 4330.7998,
          "prevDate": "2026-09-22",
          "prevClose": 4376.3999,
          "change": -45.6001,
          "changePct": -1.04,
          "gapDays": 1,
          "gapSuspect": false
        },
        "settled": {
          "date": "2026-09-22",
          "close": 4376.3999,
          "prevDate": "2026-09-21",
          "prevClose": 4383.8999,
          "change": -7.5,
          "changePct": -0.17,
          "gapDays": 1,
          "gapSuspect": false
        },
        "quotePrice": 4330.8,
        "series": [
          {
            "date": "2026-09-16",
            "close": 4387.5
          },
          {
            "date": "2026-09-17",
            "close": 4399.7002
          },
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
            "close": 4330.7998
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
        "close": 157.369,
        "prevClose": 157.046,
        "change": 0.323,
        "changePct": 0.21,
        "asOf": "2026-09-22",
        "prevAsOf": "2026-09-21",
        "gapDays": 1,
        "gapSuspect": false,
        "live": true,
        "latest": {
          "date": "2026-09-23",
          "close": 158.258,
          "prevDate": "2026-09-22",
          "prevClose": 157.369,
          "change": 0.889,
          "changePct": 0.56,
          "gapDays": 1,
          "gapSuspect": false
        },
        "settled": {
          "date": "2026-09-22",
          "close": 157.369,
          "prevDate": "2026-09-21",
          "prevClose": 157.046,
          "change": 0.323,
          "changePct": 0.21,
          "gapDays": 1,
          "gapSuspect": false
        },
        "quotePrice": 158.258,
        "series": [
          {
            "date": "2026-09-16",
            "close": 155.266
          },
          {
            "date": "2026-09-17",
            "close": 156.014
          },
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
            "close": 158.258
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
        "close": 6.6953,
        "prevClose": 6.6975,
        "change": -0.0022,
        "changePct": -0.03,
        "asOf": "2026-09-22",
        "prevAsOf": "2026-09-21",
        "gapDays": 1,
        "gapSuspect": false,
        "live": true,
        "latest": {
          "date": "2026-09-23",
          "close": 6.7009,
          "prevDate": "2026-09-22",
          "prevClose": 6.6953,
          "change": 0.0056,
          "changePct": 0.08,
          "gapDays": 1,
          "gapSuspect": false
        },
        "settled": {
          "date": "2026-09-22",
          "close": 6.6953,
          "prevDate": "2026-09-21",
          "prevClose": 6.6975,
          "change": -0.0022,
          "changePct": -0.03,
          "gapDays": 1,
          "gapSuspect": false
        },
        "quotePrice": 6.7009,
        "series": [
          {
            "date": "2026-09-16",
            "close": 6.7112
          },
          {
            "date": "2026-09-17",
            "close": 6.706
          },
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
            "close": 6.7009
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
        "close": 31.7384,
        "prevClose": 31.8091,
        "change": -0.0707,
        "changePct": -0.22,
        "asOf": "2026-09-22",
        "prevAsOf": "2026-09-21",
        "gapDays": 1,
        "gapSuspect": false,
        "live": true,
        "latest": {
          "date": "2026-09-23",
          "close": 31.747,
          "prevDate": "2026-09-22",
          "prevClose": 31.7384,
          "change": 0.0086,
          "changePct": 0.03,
          "gapDays": 1,
          "gapSuspect": false
        },
        "settled": {
          "date": "2026-09-22",
          "close": 31.7384,
          "prevDate": "2026-09-21",
          "prevClose": 31.8091,
          "change": -0.0707,
          "changePct": -0.22,
          "gapDays": 1,
          "gapSuspect": false
        },
        "quotePrice": 31.747,
        "series": [
          {
            "date": "2026-09-16",
            "close": 31.7734
          },
          {
            "date": "2026-09-17",
            "close": 31.8596
          },
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
            "close": 31.747
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
        "close": 48157.2891,
        "prevClose": 47718.8398,
        "change": 438.4493,
        "changePct": 0.92,
        "asOf": "2026-09-23",
        "prevAsOf": "2026-09-21",
        "gapDays": 2,
        "gapSuspect": false,
        "live": false,
        "latest": {
          "date": "2026-09-23",
          "close": 48157.2891,
          "prevDate": "2026-09-21",
          "prevClose": 47718.8398,
          "change": 438.4493,
          "changePct": 0.92,
          "gapDays": 2,
          "gapSuspect": false
        },
        "settled": {
          "date": "2026-09-23",
          "close": 48157.2891,
          "prevDate": "2026-09-21",
          "prevClose": 47718.8398,
          "change": 438.4493,
          "changePct": 0.92,
          "gapDays": 2,
          "gapSuspect": false
        },
        "quotePrice": 48157.29,
        "series": [
          {
            "date": "2026-09-15",
            "close": 45511.4883
          },
          {
            "date": "2026-09-16",
            "close": 45848.8984
          },
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
            "date": "2026-09-23",
            "close": 48157.2891
          }
        ],
        "currency": "TWD",
        "timezone": "Asia/Taipei",
        "source": "Yahoo Finance chart API（日線）"
      }
    }
  }
};
