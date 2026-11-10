/**
 * market-global.js — 由 GitHub Actions 自動產生，請勿手動編輯。
 * 產生器：scripts/fetch-global-market.mjs
 *
 * 國際行情中繼資料，供每日 dashboard 更新流程讀用，不會被 index.html 載入。
 * ok:false 代表該標的當次抓不到，error 說明原因——請據實標註，不要沿用舊值。
 */
window.MARKET_GLOBAL = {
  "fetchedAt": "2026-11-10T18:29:35.670Z",
  "okCount": 16,
  "totalCount": 16,
  "items": {
    "sox": {
      "ok": true,
      "label": "費城半導體 SOX",
      "symbol": "%5ESOX",
      "value": {
        "close": 10033.9297,
        "prevClose": 9390.25,
        "change": 643.6797,
        "changePct": 6.85,
        "asOf": "2026-11-09",
        "prevAsOf": "2026-11-06",
        "gapDays": 3,
        "gapSuspect": false,
        "live": true,
        "latest": {
          "date": "2026-11-10",
          "close": 9849.1621,
          "prevDate": "2026-11-09",
          "prevClose": 10033.9297,
          "change": -184.7676,
          "changePct": -1.84,
          "gapDays": 1,
          "gapSuspect": false
        },
        "settled": {
          "date": "2026-11-09",
          "close": 10033.9297,
          "prevDate": "2026-11-06",
          "prevClose": 9390.25,
          "change": 643.6797,
          "changePct": 6.85,
          "gapDays": 3,
          "gapSuspect": false
        },
        "quotePrice": 9849.162,
        "series": [
          {
            "date": "2026-11-03",
            "close": 10600.4004
          },
          {
            "date": "2026-11-04",
            "close": 10268.6504
          },
          {
            "date": "2026-11-05",
            "close": 9011.1396
          },
          {
            "date": "2026-11-06",
            "close": 9390.25
          },
          {
            "date": "2026-11-09",
            "close": 10033.9297
          },
          {
            "date": "2026-11-10",
            "close": 9849.1621
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
        "close": 19.92,
        "prevClose": 25.64,
        "change": -5.72,
        "changePct": -22.31,
        "asOf": "2026-11-09",
        "prevAsOf": "2026-11-06",
        "gapDays": 3,
        "gapSuspect": false,
        "live": true,
        "latest": {
          "date": "2026-11-10",
          "close": 20.86,
          "prevDate": "2026-11-09",
          "prevClose": 19.92,
          "change": 0.94,
          "changePct": 4.72,
          "gapDays": 1,
          "gapSuspect": false
        },
        "settled": {
          "date": "2026-11-09",
          "close": 19.92,
          "prevDate": "2026-11-06",
          "prevClose": 25.64,
          "change": -5.72,
          "changePct": -22.31,
          "gapDays": 3,
          "gapSuspect": false
        },
        "quotePrice": 20.86,
        "series": [
          {
            "date": "2026-11-03",
            "close": 20.83
          },
          {
            "date": "2026-11-04",
            "close": 16.61
          },
          {
            "date": "2026-11-05",
            "close": 28.18
          },
          {
            "date": "2026-11-06",
            "close": 25.64
          },
          {
            "date": "2026-11-09",
            "close": 19.92
          },
          {
            "date": "2026-11-10",
            "close": 20.86
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
        "close": 7549.9399,
        "prevClose": 7376.8599,
        "change": 173.08,
        "changePct": 2.35,
        "asOf": "2026-11-09",
        "prevAsOf": "2026-11-06",
        "gapDays": 3,
        "gapSuspect": false,
        "live": true,
        "latest": {
          "date": "2026-11-10",
          "close": 7484.2598,
          "prevDate": "2026-11-09",
          "prevClose": 7549.9399,
          "change": -65.6801,
          "changePct": -0.87,
          "gapDays": 1,
          "gapSuspect": false
        },
        "settled": {
          "date": "2026-11-09",
          "close": 7549.9399,
          "prevDate": "2026-11-06",
          "prevClose": 7376.8599,
          "change": 173.08,
          "changePct": 2.35,
          "gapDays": 3,
          "gapSuspect": false
        },
        "quotePrice": 7484.26,
        "series": [
          {
            "date": "2026-11-03",
            "close": 7568.9199
          },
          {
            "date": "2026-11-04",
            "close": 7688.6201
          },
          {
            "date": "2026-11-05",
            "close": 7353.73
          },
          {
            "date": "2026-11-06",
            "close": 7376.8599
          },
          {
            "date": "2026-11-09",
            "close": 7549.9399
          },
          {
            "date": "2026-11-10",
            "close": 7484.2598
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
        "close": 25253.1406,
        "prevClose": 24579.4297,
        "change": 673.7109,
        "changePct": 2.74,
        "asOf": "2026-11-09",
        "prevAsOf": "2026-11-06",
        "gapDays": 3,
        "gapSuspect": false,
        "live": true,
        "latest": {
          "date": "2026-11-10",
          "close": 24891.2832,
          "prevDate": "2026-11-09",
          "prevClose": 25253.1406,
          "change": -361.8574,
          "changePct": -1.43,
          "gapDays": 1,
          "gapSuspect": false
        },
        "settled": {
          "date": "2026-11-09",
          "close": 25253.1406,
          "prevDate": "2026-11-06",
          "prevClose": 24579.4297,
          "change": 673.7109,
          "changePct": 2.74,
          "gapDays": 3,
          "gapSuspect": false
        },
        "quotePrice": 24891.283,
        "series": [
          {
            "date": "2026-11-03",
            "close": 25372.0098
          },
          {
            "date": "2026-11-04",
            "close": 25736.5098
          },
          {
            "date": "2026-11-05",
            "close": 24315
          },
          {
            "date": "2026-11-06",
            "close": 24579.4297
          },
          {
            "date": "2026-11-09",
            "close": 25253.1406
          },
          {
            "date": "2026-11-10",
            "close": 24891.2832
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
        "close": 52389.75,
        "prevClose": 51285.7305,
        "change": 1104.0195,
        "changePct": 2.15,
        "asOf": "2026-11-09",
        "prevAsOf": "2026-11-06",
        "gapDays": 3,
        "gapSuspect": false,
        "live": true,
        "latest": {
          "date": "2026-11-10",
          "close": 52074.8594,
          "prevDate": "2026-11-09",
          "prevClose": 52389.75,
          "change": -314.8906,
          "changePct": -0.6,
          "gapDays": 1,
          "gapSuspect": false
        },
        "settled": {
          "date": "2026-11-09",
          "close": 52389.75,
          "prevDate": "2026-11-06",
          "prevClose": 51285.7305,
          "change": 1104.0195,
          "changePct": 2.15,
          "gapDays": 3,
          "gapSuspect": false
        },
        "quotePrice": 52074.86,
        "series": [
          {
            "date": "2026-11-03",
            "close": 51786.7188
          },
          {
            "date": "2026-11-04",
            "close": 53356.1211
          },
          {
            "date": "2026-11-05",
            "close": 51523.0586
          },
          {
            "date": "2026-11-06",
            "close": 51285.7305
          },
          {
            "date": "2026-11-09",
            "close": 52389.75
          },
          {
            "date": "2026-11-10",
            "close": 52074.8594
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
        "close": 4.864,
        "prevClose": 4.859,
        "change": 0.005,
        "changePct": 0.1,
        "asOf": "2026-11-09",
        "prevAsOf": "2026-11-06",
        "gapDays": 3,
        "gapSuspect": false,
        "live": true,
        "latest": {
          "date": "2026-11-10",
          "close": 5.008,
          "prevDate": "2026-11-09",
          "prevClose": 4.864,
          "change": 0.144,
          "changePct": 2.96,
          "gapDays": 1,
          "gapSuspect": false
        },
        "settled": {
          "date": "2026-11-09",
          "close": 4.864,
          "prevDate": "2026-11-06",
          "prevClose": 4.859,
          "change": 0.005,
          "changePct": 0.1,
          "gapDays": 3,
          "gapSuspect": false
        },
        "quotePrice": 5.008,
        "series": [
          {
            "date": "2026-11-03",
            "close": 4.952
          },
          {
            "date": "2026-11-04",
            "close": 4.894
          },
          {
            "date": "2026-11-05",
            "close": 4.837
          },
          {
            "date": "2026-11-06",
            "close": 4.859
          },
          {
            "date": "2026-11-09",
            "close": 4.864
          },
          {
            "date": "2026-11-10",
            "close": 5.008
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
        "close": 5.256,
        "prevClose": 5.26,
        "change": -0.004,
        "changePct": -0.08,
        "asOf": "2026-11-09",
        "prevAsOf": "2026-11-06",
        "gapDays": 3,
        "gapSuspect": false,
        "live": true,
        "latest": {
          "date": "2026-11-10",
          "close": 5.37,
          "prevDate": "2026-11-09",
          "prevClose": 5.256,
          "change": 0.114,
          "changePct": 2.17,
          "gapDays": 1,
          "gapSuspect": false
        },
        "settled": {
          "date": "2026-11-09",
          "close": 5.256,
          "prevDate": "2026-11-06",
          "prevClose": 5.26,
          "change": -0.004,
          "changePct": -0.08,
          "gapDays": 3,
          "gapSuspect": false
        },
        "quotePrice": 5.37,
        "series": [
          {
            "date": "2026-11-03",
            "close": 5.324
          },
          {
            "date": "2026-11-04",
            "close": 5.282
          },
          {
            "date": "2026-11-05",
            "close": 5.251
          },
          {
            "date": "2026-11-06",
            "close": 5.26
          },
          {
            "date": "2026-11-09",
            "close": 5.256
          },
          {
            "date": "2026-11-10",
            "close": 5.37
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
        "close": 4.659,
        "prevClose": 4.648,
        "change": 0.011,
        "changePct": 0.24,
        "asOf": "2026-11-09",
        "prevAsOf": "2026-11-06",
        "gapDays": 3,
        "gapSuspect": false,
        "live": true,
        "latest": {
          "date": "2026-11-10",
          "close": 4.832,
          "prevDate": "2026-11-09",
          "prevClose": 4.659,
          "change": 0.173,
          "changePct": 3.71,
          "gapDays": 1,
          "gapSuspect": false
        },
        "settled": {
          "date": "2026-11-09",
          "close": 4.659,
          "prevDate": "2026-11-06",
          "prevClose": 4.648,
          "change": 0.011,
          "changePct": 0.24,
          "gapDays": 3,
          "gapSuspect": false
        },
        "quotePrice": 4.832,
        "series": [
          {
            "date": "2026-11-03",
            "close": 4.743
          },
          {
            "date": "2026-11-04",
            "close": 4.689
          },
          {
            "date": "2026-11-05",
            "close": 4.608
          },
          {
            "date": "2026-11-06",
            "close": 4.648
          },
          {
            "date": "2026-11-09",
            "close": 4.659
          },
          {
            "date": "2026-11-10",
            "close": 4.832
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
        "close": 101.65,
        "prevClose": 102.3,
        "change": -0.65,
        "changePct": -0.64,
        "asOf": "2026-11-09",
        "prevAsOf": "2026-11-06",
        "gapDays": 3,
        "gapSuspect": false,
        "live": true,
        "latest": {
          "date": "2026-11-10",
          "close": 102.316,
          "prevDate": "2026-11-09",
          "prevClose": 101.65,
          "change": 0.666,
          "changePct": 0.66,
          "gapDays": 1,
          "gapSuspect": false
        },
        "settled": {
          "date": "2026-11-09",
          "close": 101.65,
          "prevDate": "2026-11-06",
          "prevClose": 102.3,
          "change": -0.65,
          "changePct": -0.64,
          "gapDays": 3,
          "gapSuspect": false
        },
        "quotePrice": 102.316,
        "series": [
          {
            "date": "2026-11-03",
            "close": 101.87
          },
          {
            "date": "2026-11-04",
            "close": 101.51
          },
          {
            "date": "2026-11-05",
            "close": 101.55
          },
          {
            "date": "2026-11-06",
            "close": 102.3
          },
          {
            "date": "2026-11-09",
            "close": 101.65
          },
          {
            "date": "2026-11-10",
            "close": 102.316
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
        "close": 86.85,
        "prevClose": 90.83,
        "change": -3.98,
        "changePct": -4.38,
        "asOf": "2026-11-09",
        "prevAsOf": "2026-11-06",
        "gapDays": 3,
        "gapSuspect": false,
        "live": true,
        "latest": {
          "date": "2026-11-10",
          "close": 86.28,
          "prevDate": "2026-11-09",
          "prevClose": 86.85,
          "change": -0.57,
          "changePct": -0.66,
          "gapDays": 1,
          "gapSuspect": false
        },
        "settled": {
          "date": "2026-11-09",
          "close": 86.85,
          "prevDate": "2026-11-06",
          "prevClose": 90.83,
          "change": -3.98,
          "changePct": -4.38,
          "gapDays": 3,
          "gapSuspect": false
        },
        "quotePrice": 86.28,
        "series": [
          {
            "date": "2026-11-03",
            "close": 96.09
          },
          {
            "date": "2026-11-04",
            "close": 88.12
          },
          {
            "date": "2026-11-05",
            "close": 90.52
          },
          {
            "date": "2026-11-06",
            "close": 90.83
          },
          {
            "date": "2026-11-09",
            "close": 86.85
          },
          {
            "date": "2026-11-10",
            "close": 86.28
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
        "close": 92.57,
        "prevClose": 98.32,
        "change": -5.75,
        "changePct": -5.85,
        "asOf": "2026-11-09",
        "prevAsOf": "2026-11-06",
        "gapDays": 3,
        "gapSuspect": false,
        "live": true,
        "latest": {
          "date": "2026-11-10",
          "close": 91.76,
          "prevDate": "2026-11-09",
          "prevClose": 92.57,
          "change": -0.81,
          "changePct": -0.88,
          "gapDays": 1,
          "gapSuspect": false
        },
        "settled": {
          "date": "2026-11-09",
          "close": 92.57,
          "prevDate": "2026-11-06",
          "prevClose": 98.32,
          "change": -5.75,
          "changePct": -5.85,
          "gapDays": 3,
          "gapSuspect": false
        },
        "quotePrice": 91.76,
        "series": [
          {
            "date": "2026-11-03",
            "close": 103.6
          },
          {
            "date": "2026-11-04",
            "close": 94.62
          },
          {
            "date": "2026-11-05",
            "close": 98.29
          },
          {
            "date": "2026-11-06",
            "close": 98.32
          },
          {
            "date": "2026-11-09",
            "close": 92.57
          },
          {
            "date": "2026-11-10",
            "close": 91.76
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
        "close": 4114.5,
        "prevClose": 4074.8999,
        "change": 39.6001,
        "changePct": 0.97,
        "asOf": "2026-11-09",
        "prevAsOf": "2026-11-06",
        "gapDays": 3,
        "gapSuspect": false,
        "live": true,
        "latest": {
          "date": "2026-11-10",
          "close": 4027.2,
          "prevDate": "2026-11-09",
          "prevClose": 4114.5,
          "change": -87.3,
          "changePct": -2.12,
          "gapDays": 1,
          "gapSuspect": false
        },
        "settled": {
          "date": "2026-11-09",
          "close": 4114.5,
          "prevDate": "2026-11-06",
          "prevClose": 4074.8999,
          "change": 39.6001,
          "changePct": 0.97,
          "gapDays": 3,
          "gapSuspect": false
        },
        "quotePrice": 4027.2,
        "series": [
          {
            "date": "2026-11-03",
            "close": 3940.3999
          },
          {
            "date": "2026-11-04",
            "close": 4073
          },
          {
            "date": "2026-11-05",
            "close": 4113.5
          },
          {
            "date": "2026-11-06",
            "close": 4074.8999
          },
          {
            "date": "2026-11-09",
            "close": 4114.5
          },
          {
            "date": "2026-11-10",
            "close": 4027.2
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
        "close": 158.292,
        "prevClose": 157.498,
        "change": 0.794,
        "changePct": 0.5,
        "asOf": "2026-11-09",
        "prevAsOf": "2026-11-06",
        "gapDays": 3,
        "gapSuspect": false,
        "live": true,
        "latest": {
          "date": "2026-11-10",
          "close": 158.804,
          "prevDate": "2026-11-09",
          "prevClose": 158.292,
          "change": 0.512,
          "changePct": 0.32,
          "gapDays": 1,
          "gapSuspect": false
        },
        "settled": {
          "date": "2026-11-09",
          "close": 158.292,
          "prevDate": "2026-11-06",
          "prevClose": 157.498,
          "change": 0.794,
          "changePct": 0.5,
          "gapDays": 3,
          "gapSuspect": false
        },
        "quotePrice": 158.804,
        "series": [
          {
            "date": "2026-11-03",
            "close": 157.915
          },
          {
            "date": "2026-11-04",
            "close": 158.469
          },
          {
            "date": "2026-11-05",
            "close": 158.357
          },
          {
            "date": "2026-11-06",
            "close": 157.498
          },
          {
            "date": "2026-11-09",
            "close": 158.292
          },
          {
            "date": "2026-11-10",
            "close": 158.804
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
        "close": 6.676,
        "prevClose": 6.688,
        "change": -0.012,
        "changePct": -0.18,
        "asOf": "2026-11-09",
        "prevAsOf": "2026-11-06",
        "gapDays": 3,
        "gapSuspect": false,
        "live": true,
        "latest": {
          "date": "2026-11-10",
          "close": 6.6677,
          "prevDate": "2026-11-09",
          "prevClose": 6.676,
          "change": -0.0083,
          "changePct": -0.12,
          "gapDays": 1,
          "gapSuspect": false
        },
        "settled": {
          "date": "2026-11-09",
          "close": 6.676,
          "prevDate": "2026-11-06",
          "prevClose": 6.688,
          "change": -0.012,
          "changePct": -0.18,
          "gapDays": 3,
          "gapSuspect": false
        },
        "quotePrice": 6.6677,
        "series": [
          {
            "date": "2026-11-03",
            "close": 6.648
          },
          {
            "date": "2026-11-04",
            "close": 6.6701
          },
          {
            "date": "2026-11-05",
            "close": 6.6731
          },
          {
            "date": "2026-11-06",
            "close": 6.688
          },
          {
            "date": "2026-11-09",
            "close": 6.676
          },
          {
            "date": "2026-11-10",
            "close": 6.6677
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
        "close": 32.7603,
        "prevClose": 33.1093,
        "change": -0.349,
        "changePct": -1.05,
        "asOf": "2026-11-09",
        "prevAsOf": "2026-11-06",
        "gapDays": 3,
        "gapSuspect": false,
        "live": true,
        "latest": {
          "date": "2026-11-10",
          "close": 32.986,
          "prevDate": "2026-11-09",
          "prevClose": 32.7603,
          "change": 0.2257,
          "changePct": 0.69,
          "gapDays": 1,
          "gapSuspect": false
        },
        "settled": {
          "date": "2026-11-09",
          "close": 32.7603,
          "prevDate": "2026-11-06",
          "prevClose": 33.1093,
          "change": -0.349,
          "changePct": -1.05,
          "gapDays": 3,
          "gapSuspect": false
        },
        "quotePrice": 32.986,
        "series": [
          {
            "date": "2026-11-03",
            "close": 32.5851
          },
          {
            "date": "2026-11-04",
            "close": 32.733
          },
          {
            "date": "2026-11-05",
            "close": 32.8212
          },
          {
            "date": "2026-11-06",
            "close": 33.1093
          },
          {
            "date": "2026-11-09",
            "close": 32.7603
          },
          {
            "date": "2026-11-10",
            "close": 32.986
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
        "close": 41661.6992,
        "prevClose": 39701.6406,
        "change": 1960.0586,
        "changePct": 4.94,
        "asOf": "2026-11-09",
        "prevAsOf": "2026-11-06",
        "gapDays": 3,
        "gapSuspect": false,
        "live": false,
        "latest": {
          "date": "2026-11-09",
          "close": 41661.6992,
          "prevDate": "2026-11-06",
          "prevClose": 39701.6406,
          "change": 1960.0586,
          "changePct": 4.94,
          "gapDays": 3,
          "gapSuspect": false
        },
        "settled": {
          "date": "2026-11-09",
          "close": 41661.6992,
          "prevDate": "2026-11-06",
          "prevClose": 39701.6406,
          "change": 1960.0586,
          "changePct": 4.94,
          "gapDays": 3,
          "gapSuspect": false
        },
        "quotePrice": 42711.92,
        "series": [
          {
            "date": "2026-11-02",
            "close": 44920.1406
          },
          {
            "date": "2026-11-03",
            "close": 43307.5391
          },
          {
            "date": "2026-11-04",
            "close": 42948.9102
          },
          {
            "date": "2026-11-05",
            "close": 41574.7188
          },
          {
            "date": "2026-11-06",
            "close": 39701.6406
          },
          {
            "date": "2026-11-09",
            "close": 41661.6992
          }
        ],
        "currency": "TWD",
        "timezone": "Asia/Taipei",
        "source": "Yahoo Finance chart API（日線）"
      }
    }
  }
};
