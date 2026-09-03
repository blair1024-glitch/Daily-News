/**
 * market-global.js — 由 GitHub Actions 自動產生，請勿手動編輯。
 * 產生器：scripts/fetch-global-market.mjs
 *
 * 國際行情中繼資料，供每日 dashboard 更新流程讀用，不會被 index.html 載入。
 * ok:false 代表該標的當次抓不到，error 說明原因——請據實標註，不要沿用舊值。
 */
window.MARKET_GLOBAL = {
  "fetchedAt": "2026-09-03T00:58:20.993Z",
  "okCount": 16,
  "totalCount": 16,
  "items": {
    "sox": {
      "ok": true,
      "label": "費城半導體 SOX",
      "symbol": "%5ESOX",
      "value": {
        "close": 11339.2539,
        "prevClose": 11288.6104,
        "change": 50.6435,
        "changePct": 0.45,
        "asOf": "2026-09-02",
        "prevAsOf": "2026-09-01",
        "gapDays": 1,
        "gapSuspect": false,
        "live": false,
        "latest": {
          "date": "2026-09-02",
          "close": 11339.2539,
          "prevDate": "2026-09-01",
          "prevClose": 11288.6104,
          "change": 50.6435,
          "changePct": 0.45,
          "gapDays": 1,
          "gapSuspect": false
        },
        "settled": {
          "date": "2026-09-02",
          "close": 11339.2539,
          "prevDate": "2026-09-01",
          "prevClose": 11288.6104,
          "change": 50.6435,
          "changePct": 0.45,
          "gapDays": 1,
          "gapSuspect": false
        },
        "quotePrice": 11339.254,
        "series": [
          {
            "date": "2026-08-25",
            "close": 11588.04
          },
          {
            "date": "2026-08-26",
            "close": 11611.2402
          },
          {
            "date": "2026-08-27",
            "close": 11882.1699
          },
          {
            "date": "2026-08-31",
            "close": 11535.0498
          },
          {
            "date": "2026-09-01",
            "close": 11288.6104
          },
          {
            "date": "2026-09-02",
            "close": 11339.2539
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
        "close": 15.2,
        "prevClose": 16.34,
        "change": -1.14,
        "changePct": -6.98,
        "asOf": "2026-09-02",
        "prevAsOf": "2026-09-01",
        "gapDays": 1,
        "gapSuspect": false,
        "live": false,
        "latest": {
          "date": "2026-09-02",
          "close": 15.2,
          "prevDate": "2026-09-01",
          "prevClose": 16.34,
          "change": -1.14,
          "changePct": -6.98,
          "gapDays": 1,
          "gapSuspect": false
        },
        "settled": {
          "date": "2026-09-02",
          "close": 15.2,
          "prevDate": "2026-09-01",
          "prevClose": 16.34,
          "change": -1.14,
          "changePct": -6.98,
          "gapDays": 1,
          "gapSuspect": false
        },
        "quotePrice": 15.2,
        "series": [
          {
            "date": "2026-08-25",
            "close": 15.45
          },
          {
            "date": "2026-08-26",
            "close": 15.21
          },
          {
            "date": "2026-08-27",
            "close": 14.51
          },
          {
            "date": "2026-08-31",
            "close": 14.92
          },
          {
            "date": "2026-09-01",
            "close": 16.34
          },
          {
            "date": "2026-09-02",
            "close": 15.2
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
        "close": 7666.6001,
        "prevClose": 7631.4702,
        "change": 35.1299,
        "changePct": 0.46,
        "asOf": "2026-09-02",
        "prevAsOf": "2026-09-01",
        "gapDays": 1,
        "gapSuspect": false,
        "live": false,
        "latest": {
          "date": "2026-09-02",
          "close": 7666.6001,
          "prevDate": "2026-09-01",
          "prevClose": 7631.4702,
          "change": 35.1299,
          "changePct": 0.46,
          "gapDays": 1,
          "gapSuspect": false
        },
        "settled": {
          "date": "2026-09-02",
          "close": 7666.6001,
          "prevDate": "2026-09-01",
          "prevClose": 7631.4702,
          "change": 35.1299,
          "changePct": 0.46,
          "gapDays": 1,
          "gapSuspect": false
        },
        "quotePrice": 7666.6,
        "series": [
          {
            "date": "2026-08-25",
            "close": 7677.2798
          },
          {
            "date": "2026-08-26",
            "close": 7675.7002
          },
          {
            "date": "2026-08-27",
            "close": 7730.9902
          },
          {
            "date": "2026-08-31",
            "close": 7686.1401
          },
          {
            "date": "2026-09-01",
            "close": 7631.4702
          },
          {
            "date": "2026-09-02",
            "close": 7666.6001
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
        "close": 26217.8281,
        "prevClose": 26099.7695,
        "change": 118.0586,
        "changePct": 0.45,
        "asOf": "2026-09-02",
        "prevAsOf": "2026-09-01",
        "gapDays": 1,
        "gapSuspect": false,
        "live": false,
        "latest": {
          "date": "2026-09-02",
          "close": 26217.8281,
          "prevDate": "2026-09-01",
          "prevClose": 26099.7695,
          "change": 118.0586,
          "changePct": 0.45,
          "gapDays": 1,
          "gapSuspect": false
        },
        "settled": {
          "date": "2026-09-02",
          "close": 26217.8281,
          "prevDate": "2026-09-01",
          "prevClose": 26099.7695,
          "change": 118.0586,
          "changePct": 0.45,
          "gapDays": 1,
          "gapSuspect": false
        },
        "quotePrice": 26217.828,
        "series": [
          {
            "date": "2026-08-25",
            "close": 26151.3008
          },
          {
            "date": "2026-08-26",
            "close": 26130.1992
          },
          {
            "date": "2026-08-27",
            "close": 26541.3496
          },
          {
            "date": "2026-08-31",
            "close": 26370.8906
          },
          {
            "date": "2026-09-01",
            "close": 26099.7695
          },
          {
            "date": "2026-09-02",
            "close": 26217.8281
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
        "close": 53061.9492,
        "prevClose": 52766.8789,
        "change": 295.0703,
        "changePct": 0.56,
        "asOf": "2026-09-02",
        "prevAsOf": "2026-09-01",
        "gapDays": 1,
        "gapSuspect": false,
        "live": false,
        "latest": {
          "date": "2026-09-02",
          "close": 53061.9492,
          "prevDate": "2026-09-01",
          "prevClose": 52766.8789,
          "change": 295.0703,
          "changePct": 0.56,
          "gapDays": 1,
          "gapSuspect": false
        },
        "settled": {
          "date": "2026-09-02",
          "close": 53061.9492,
          "prevDate": "2026-09-01",
          "prevClose": 52766.8789,
          "change": 295.0703,
          "changePct": 0.56,
          "gapDays": 1,
          "gapSuspect": false
        },
        "quotePrice": 53061.95,
        "series": [
          {
            "date": "2026-08-25",
            "close": 53577.3984
          },
          {
            "date": "2026-08-26",
            "close": 53463.8789
          },
          {
            "date": "2026-08-27",
            "close": 53569.4414
          },
          {
            "date": "2026-08-31",
            "close": 53185.8984
          },
          {
            "date": "2026-09-01",
            "close": 52766.8789
          },
          {
            "date": "2026-09-02",
            "close": 53061.9492
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
        "close": 4.796,
        "prevClose": 4.796,
        "change": 0,
        "changePct": 0,
        "asOf": "2026-09-02",
        "prevAsOf": "2026-09-01",
        "gapDays": 1,
        "gapSuspect": false,
        "live": false,
        "latest": {
          "date": "2026-09-02",
          "close": 4.796,
          "prevDate": "2026-09-01",
          "prevClose": 4.796,
          "change": 0,
          "changePct": 0,
          "gapDays": 1,
          "gapSuspect": false
        },
        "settled": {
          "date": "2026-09-02",
          "close": 4.796,
          "prevDate": "2026-09-01",
          "prevClose": 4.796,
          "change": 0,
          "changePct": 0,
          "gapDays": 1,
          "gapSuspect": false
        },
        "quotePrice": 4.796,
        "series": [
          {
            "date": "2026-08-25",
            "close": 4.639
          },
          {
            "date": "2026-08-26",
            "close": 4.664
          },
          {
            "date": "2026-08-27",
            "close": 4.672
          },
          {
            "date": "2026-08-31",
            "close": 4.758
          },
          {
            "date": "2026-09-01",
            "close": 4.796
          },
          {
            "date": "2026-09-02",
            "close": 4.796
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
        "close": 5.267,
        "prevClose": 5.268,
        "change": -0.001,
        "changePct": -0.02,
        "asOf": "2026-09-02",
        "prevAsOf": "2026-09-01",
        "gapDays": 1,
        "gapSuspect": false,
        "live": false,
        "latest": {
          "date": "2026-09-02",
          "close": 5.267,
          "prevDate": "2026-09-01",
          "prevClose": 5.268,
          "change": -0.001,
          "changePct": -0.02,
          "gapDays": 1,
          "gapSuspect": false
        },
        "settled": {
          "date": "2026-09-02",
          "close": 5.267,
          "prevDate": "2026-09-01",
          "prevClose": 5.268,
          "change": -0.001,
          "changePct": -0.02,
          "gapDays": 1,
          "gapSuspect": false
        },
        "quotePrice": 5.267,
        "series": [
          {
            "date": "2026-08-25",
            "close": 5.174
          },
          {
            "date": "2026-08-26",
            "close": 5.186
          },
          {
            "date": "2026-08-27",
            "close": 5.191
          },
          {
            "date": "2026-08-31",
            "close": 5.249
          },
          {
            "date": "2026-09-01",
            "close": 5.268
          },
          {
            "date": "2026-09-02",
            "close": 5.267
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
        "close": 4.552,
        "prevClose": 4.557,
        "change": -0.005,
        "changePct": -0.11,
        "asOf": "2026-09-02",
        "prevAsOf": "2026-09-01",
        "gapDays": 1,
        "gapSuspect": false,
        "live": false,
        "latest": {
          "date": "2026-09-02",
          "close": 4.552,
          "prevDate": "2026-09-01",
          "prevClose": 4.557,
          "change": -0.005,
          "changePct": -0.11,
          "gapDays": 1,
          "gapSuspect": false
        },
        "settled": {
          "date": "2026-09-02",
          "close": 4.552,
          "prevDate": "2026-09-01",
          "prevClose": 4.557,
          "change": -0.005,
          "changePct": -0.11,
          "gapDays": 1,
          "gapSuspect": false
        },
        "quotePrice": 4.552,
        "series": [
          {
            "date": "2026-08-25",
            "close": 4.351
          },
          {
            "date": "2026-08-26",
            "close": 4.381
          },
          {
            "date": "2026-08-27",
            "close": 4.396
          },
          {
            "date": "2026-08-31",
            "close": 4.507
          },
          {
            "date": "2026-09-01",
            "close": 4.557
          },
          {
            "date": "2026-09-02",
            "close": 4.552
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
        "close": 99.67,
        "prevClose": 99.43,
        "change": 0.24,
        "changePct": 0.24,
        "asOf": "2026-09-01",
        "prevAsOf": "2026-08-31",
        "gapDays": 1,
        "gapSuspect": false,
        "live": true,
        "latest": {
          "date": "2026-09-02",
          "close": 99.552,
          "prevDate": "2026-09-01",
          "prevClose": 99.67,
          "change": -0.118,
          "changePct": -0.12,
          "gapDays": 1,
          "gapSuspect": false
        },
        "settled": {
          "date": "2026-09-01",
          "close": 99.67,
          "prevDate": "2026-08-31",
          "prevClose": 99.43,
          "change": 0.24,
          "changePct": 0.24,
          "gapDays": 1,
          "gapSuspect": false
        },
        "quotePrice": 99.552,
        "series": [
          {
            "date": "2026-08-25",
            "close": 98.92
          },
          {
            "date": "2026-08-26",
            "close": 99.17
          },
          {
            "date": "2026-08-27",
            "close": 99.16
          },
          {
            "date": "2026-08-31",
            "close": 99.43
          },
          {
            "date": "2026-09-01",
            "close": 99.67
          },
          {
            "date": "2026-09-02",
            "close": 99.552
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
        "close": 90.22,
        "prevClose": 85.76,
        "change": 4.46,
        "changePct": 5.2,
        "asOf": "2026-09-01",
        "prevAsOf": "2026-08-31",
        "gapDays": 1,
        "gapSuspect": false,
        "live": true,
        "latest": {
          "date": "2026-09-02",
          "close": 90.75,
          "prevDate": "2026-09-01",
          "prevClose": 90.22,
          "change": 0.53,
          "changePct": 0.59,
          "gapDays": 1,
          "gapSuspect": false
        },
        "settled": {
          "date": "2026-09-01",
          "close": 90.22,
          "prevDate": "2026-08-31",
          "prevClose": 85.76,
          "change": 4.46,
          "changePct": 5.2,
          "gapDays": 1,
          "gapSuspect": false
        },
        "quotePrice": 90.75,
        "series": [
          {
            "date": "2026-08-26",
            "close": 82.23
          },
          {
            "date": "2026-08-27",
            "close": 83.53
          },
          {
            "date": "2026-08-28",
            "close": 83.4
          },
          {
            "date": "2026-08-31",
            "close": 85.76
          },
          {
            "date": "2026-09-01",
            "close": 90.22
          },
          {
            "date": "2026-09-02",
            "close": 90.75
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
        "close": 94.65,
        "prevClose": 90.49,
        "change": 4.16,
        "changePct": 4.6,
        "asOf": "2026-09-01",
        "prevAsOf": "2026-08-31",
        "gapDays": 1,
        "gapSuspect": false,
        "live": true,
        "latest": {
          "date": "2026-09-02",
          "close": 95.21,
          "prevDate": "2026-09-01",
          "prevClose": 94.65,
          "change": 0.56,
          "changePct": 0.59,
          "gapDays": 1,
          "gapSuspect": false
        },
        "settled": {
          "date": "2026-09-01",
          "close": 94.65,
          "prevDate": "2026-08-31",
          "prevClose": 90.49,
          "change": 4.16,
          "changePct": 4.6,
          "gapDays": 1,
          "gapSuspect": false
        },
        "quotePrice": 95.21,
        "series": [
          {
            "date": "2026-08-26",
            "close": 87.84
          },
          {
            "date": "2026-08-27",
            "close": 89.7
          },
          {
            "date": "2026-08-28",
            "close": 89.31
          },
          {
            "date": "2026-08-31",
            "close": 90.49
          },
          {
            "date": "2026-09-01",
            "close": 94.65
          },
          {
            "date": "2026-09-02",
            "close": 95.21
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
        "close": 4348,
        "prevClose": 4431.1001,
        "change": -83.1001,
        "changePct": -1.88,
        "asOf": "2026-09-01",
        "prevAsOf": "2026-08-31",
        "gapDays": 1,
        "gapSuspect": false,
        "live": true,
        "latest": {
          "date": "2026-09-02",
          "close": 4432.7998,
          "prevDate": "2026-09-01",
          "prevClose": 4348,
          "change": 84.7998,
          "changePct": 1.95,
          "gapDays": 1,
          "gapSuspect": false
        },
        "settled": {
          "date": "2026-09-01",
          "close": 4348,
          "prevDate": "2026-08-31",
          "prevClose": 4431.1001,
          "change": -83.1001,
          "changePct": -1.88,
          "gapDays": 1,
          "gapSuspect": false
        },
        "quotePrice": 4432.8,
        "series": [
          {
            "date": "2026-08-26",
            "close": 4598.2002
          },
          {
            "date": "2026-08-27",
            "close": 4609.7002
          },
          {
            "date": "2026-08-28",
            "close": 4478.1001
          },
          {
            "date": "2026-08-31",
            "close": 4431.1001
          },
          {
            "date": "2026-09-01",
            "close": 4348
          },
          {
            "date": "2026-09-02",
            "close": 4432.7998
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
        "close": 160.196,
        "prevClose": 159.747,
        "change": 0.449,
        "changePct": 0.28,
        "asOf": "2026-09-02",
        "prevAsOf": "2026-09-01",
        "gapDays": 1,
        "gapSuspect": false,
        "live": true,
        "latest": {
          "date": "2026-09-03",
          "close": 158.686,
          "prevDate": "2026-09-02",
          "prevClose": 160.196,
          "change": -1.51,
          "changePct": -0.94,
          "gapDays": 1,
          "gapSuspect": false
        },
        "settled": {
          "date": "2026-09-02",
          "close": 160.196,
          "prevDate": "2026-09-01",
          "prevClose": 159.747,
          "change": 0.449,
          "changePct": 0.28,
          "gapDays": 1,
          "gapSuspect": false
        },
        "quotePrice": 158.686,
        "series": [
          {
            "date": "2026-08-27",
            "close": 159.255
          },
          {
            "date": "2026-08-28",
            "close": 159.321
          },
          {
            "date": "2026-08-31",
            "close": 160.122
          },
          {
            "date": "2026-09-01",
            "close": 159.747
          },
          {
            "date": "2026-09-02",
            "close": 160.196
          },
          {
            "date": "2026-09-03",
            "close": 158.686
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
        "close": 6.7202,
        "prevClose": 6.726,
        "change": -0.0058,
        "changePct": -0.09,
        "asOf": "2026-09-02",
        "prevAsOf": "2026-09-01",
        "gapDays": 1,
        "gapSuspect": false,
        "live": true,
        "latest": {
          "date": "2026-09-03",
          "close": 6.71,
          "prevDate": "2026-09-02",
          "prevClose": 6.7202,
          "change": -0.0102,
          "changePct": -0.15,
          "gapDays": 1,
          "gapSuspect": false
        },
        "settled": {
          "date": "2026-09-02",
          "close": 6.7202,
          "prevDate": "2026-09-01",
          "prevClose": 6.726,
          "change": -0.0058,
          "changePct": -0.09,
          "gapDays": 1,
          "gapSuspect": false
        },
        "quotePrice": 6.71,
        "series": [
          {
            "date": "2026-08-27",
            "close": 6.7225
          },
          {
            "date": "2026-08-28",
            "close": 6.7225
          },
          {
            "date": "2026-08-31",
            "close": 6.726
          },
          {
            "date": "2026-09-01",
            "close": 6.726
          },
          {
            "date": "2026-09-02",
            "close": 6.7202
          },
          {
            "date": "2026-09-03",
            "close": 6.71
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
        "close": 31.675,
        "prevClose": 31.688,
        "change": -0.013,
        "changePct": -0.04,
        "asOf": "2026-09-02",
        "prevAsOf": "2026-09-01",
        "gapDays": 1,
        "gapSuspect": false,
        "live": true,
        "latest": {
          "date": "2026-09-03",
          "close": 31.746,
          "prevDate": "2026-09-02",
          "prevClose": 31.675,
          "change": 0.071,
          "changePct": 0.22,
          "gapDays": 1,
          "gapSuspect": false
        },
        "settled": {
          "date": "2026-09-02",
          "close": 31.675,
          "prevDate": "2026-09-01",
          "prevClose": 31.688,
          "change": -0.013,
          "changePct": -0.04,
          "gapDays": 1,
          "gapSuspect": false
        },
        "quotePrice": 31.746,
        "series": [
          {
            "date": "2026-08-27",
            "close": 31.8059
          },
          {
            "date": "2026-08-28",
            "close": 31.6609
          },
          {
            "date": "2026-08-31",
            "close": 31.626
          },
          {
            "date": "2026-09-01",
            "close": 31.688
          },
          {
            "date": "2026-09-02",
            "close": 31.675
          },
          {
            "date": "2026-09-03",
            "close": 31.746
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
        "close": 46948.7188,
        "prevClose": 46128.4688,
        "change": 820.25,
        "changePct": 1.78,
        "asOf": "2026-09-01",
        "prevAsOf": "2026-08-31",
        "gapDays": 1,
        "gapSuspect": false,
        "live": false,
        "latest": {
          "date": "2026-09-01",
          "close": 46948.7188,
          "prevDate": "2026-08-31",
          "prevClose": 46128.4688,
          "change": 820.25,
          "changePct": 1.78,
          "gapDays": 1,
          "gapSuspect": false
        },
        "settled": {
          "date": "2026-09-01",
          "close": 46948.7188,
          "prevDate": "2026-08-31",
          "prevClose": 46128.4688,
          "change": 820.25,
          "changePct": 1.78,
          "gapDays": 1,
          "gapSuspect": false
        },
        "quotePrice": 46164.72,
        "series": [
          {
            "date": "2026-08-24",
            "close": 44762.3203
          },
          {
            "date": "2026-08-25",
            "close": 45169.4609
          },
          {
            "date": "2026-08-26",
            "close": 45832.6211
          },
          {
            "date": "2026-08-27",
            "close": 45975.2188
          },
          {
            "date": "2026-08-31",
            "close": 46128.4688
          },
          {
            "date": "2026-09-01",
            "close": 46948.7188
          }
        ],
        "currency": "TWD",
        "timezone": "Asia/Taipei",
        "source": "Yahoo Finance chart API（日線）"
      }
    }
  }
};
