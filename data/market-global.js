/**
 * market-global.js — 由 GitHub Actions 自動產生，請勿手動編輯。
 * 產生器：scripts/fetch-global-market.mjs
 *
 * 國際行情中繼資料，供每日 dashboard 更新流程讀用，不會被 index.html 載入。
 * ok:false 代表該標的當次抓不到，error 說明原因——請據實標註，不要沿用舊值。
 */
window.MARKET_GLOBAL = {
  "fetchedAt": "2026-09-03T14:53:25.421Z",
  "okCount": 16,
  "totalCount": 16,
  "items": {
    "sox": {
      "ok": true,
      "label": "費城半導體 SOX",
      "symbol": "%5ESOX",
      "value": {
        "close": 11339.25,
        "prevClose": 11288.6104,
        "change": 50.6396,
        "changePct": 0.45,
        "asOf": "2026-09-02",
        "prevAsOf": "2026-09-01",
        "gapDays": 1,
        "gapSuspect": false,
        "live": true,
        "latest": {
          "date": "2026-09-03",
          "close": 11173.7793,
          "prevDate": "2026-09-02",
          "prevClose": 11339.25,
          "change": -165.4707,
          "changePct": -1.46,
          "gapDays": 1,
          "gapSuspect": false
        },
        "settled": {
          "date": "2026-09-02",
          "close": 11339.25,
          "prevDate": "2026-09-01",
          "prevClose": 11288.6104,
          "change": 50.6396,
          "changePct": 0.45,
          "gapDays": 1,
          "gapSuspect": false
        },
        "quotePrice": 11173.779,
        "series": [
          {
            "date": "2026-08-27",
            "close": 11882.1699
          },
          {
            "date": "2026-08-28",
            "close": 11469.6602
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
            "close": 11339.25
          },
          {
            "date": "2026-09-03",
            "close": 11173.7793
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
        "live": true,
        "latest": {
          "date": "2026-09-03",
          "close": 14.95,
          "prevDate": "2026-09-02",
          "prevClose": 15.2,
          "change": -0.25,
          "changePct": -1.64,
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
        "quotePrice": 14.95,
        "series": [
          {
            "date": "2026-08-27",
            "close": 14.51
          },
          {
            "date": "2026-08-28",
            "close": 14.43
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
          },
          {
            "date": "2026-09-03",
            "close": 14.95
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
        "live": true,
        "latest": {
          "date": "2026-09-03",
          "close": 7698.6602,
          "prevDate": "2026-09-02",
          "prevClose": 7666.6001,
          "change": 32.0601,
          "changePct": 0.42,
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
        "quotePrice": 7698.66,
        "series": [
          {
            "date": "2026-08-27",
            "close": 7730.9902
          },
          {
            "date": "2026-08-28",
            "close": 7711.7598
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
          },
          {
            "date": "2026-09-03",
            "close": 7698.6602
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
        "close": 26217.8301,
        "prevClose": 26099.7695,
        "change": 118.0606,
        "changePct": 0.45,
        "asOf": "2026-09-02",
        "prevAsOf": "2026-09-01",
        "gapDays": 1,
        "gapSuspect": false,
        "live": true,
        "latest": {
          "date": "2026-09-03",
          "close": 26381.3477,
          "prevDate": "2026-09-02",
          "prevClose": 26217.8301,
          "change": 163.5176,
          "changePct": 0.62,
          "gapDays": 1,
          "gapSuspect": false
        },
        "settled": {
          "date": "2026-09-02",
          "close": 26217.8301,
          "prevDate": "2026-09-01",
          "prevClose": 26099.7695,
          "change": 118.0606,
          "changePct": 0.45,
          "gapDays": 1,
          "gapSuspect": false
        },
        "quotePrice": 26381.348,
        "series": [
          {
            "date": "2026-08-27",
            "close": 26541.3496
          },
          {
            "date": "2026-08-28",
            "close": 26402.4199
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
            "close": 26217.8301
          },
          {
            "date": "2026-09-03",
            "close": 26381.3477
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
        "live": true,
        "latest": {
          "date": "2026-09-03",
          "close": 53441.0313,
          "prevDate": "2026-09-02",
          "prevClose": 53061.9492,
          "change": 379.0821,
          "changePct": 0.71,
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
        "quotePrice": 53441.03,
        "series": [
          {
            "date": "2026-08-27",
            "close": 53569.4414
          },
          {
            "date": "2026-08-28",
            "close": 53559.9883
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
          },
          {
            "date": "2026-09-03",
            "close": 53441.0313
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
        "live": true,
        "latest": {
          "date": "2026-09-03",
          "close": 4.756,
          "prevDate": "2026-09-02",
          "prevClose": 4.796,
          "change": -0.04,
          "changePct": -0.83,
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
        "quotePrice": 4.756,
        "series": [
          {
            "date": "2026-08-27",
            "close": 4.672
          },
          {
            "date": "2026-08-28",
            "close": 4.72
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
          },
          {
            "date": "2026-09-03",
            "close": 4.756
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
        "live": true,
        "latest": {
          "date": "2026-09-03",
          "close": 5.238,
          "prevDate": "2026-09-02",
          "prevClose": 5.267,
          "change": -0.029,
          "changePct": -0.55,
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
        "quotePrice": 5.238,
        "series": [
          {
            "date": "2026-08-27",
            "close": 5.191
          },
          {
            "date": "2026-08-28",
            "close": 5.206
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
          },
          {
            "date": "2026-09-03",
            "close": 5.238
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
        "live": true,
        "latest": {
          "date": "2026-09-03",
          "close": 4.507,
          "prevDate": "2026-09-02",
          "prevClose": 4.552,
          "change": -0.045,
          "changePct": -0.99,
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
        "quotePrice": 4.507,
        "series": [
          {
            "date": "2026-08-27",
            "close": 4.396
          },
          {
            "date": "2026-08-28",
            "close": 4.481
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
          },
          {
            "date": "2026-09-03",
            "close": 4.507
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
        "close": 99.56,
        "prevClose": 99.67,
        "change": -0.11,
        "changePct": -0.11,
        "asOf": "2026-09-02",
        "prevAsOf": "2026-09-01",
        "gapDays": 1,
        "gapSuspect": false,
        "live": true,
        "latest": {
          "date": "2026-09-03",
          "close": 99.093,
          "prevDate": "2026-09-02",
          "prevClose": 99.56,
          "change": -0.467,
          "changePct": -0.47,
          "gapDays": 1,
          "gapSuspect": false
        },
        "settled": {
          "date": "2026-09-02",
          "close": 99.56,
          "prevDate": "2026-09-01",
          "prevClose": 99.67,
          "change": -0.11,
          "changePct": -0.11,
          "gapDays": 1,
          "gapSuspect": false
        },
        "quotePrice": 99.093,
        "series": [
          {
            "date": "2026-08-27",
            "close": 99.16
          },
          {
            "date": "2026-08-28",
            "close": 99.7
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
            "close": 99.56
          },
          {
            "date": "2026-09-03",
            "close": 99.093
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
        "close": 91.01,
        "prevClose": 90.22,
        "change": 0.79,
        "changePct": 0.88,
        "asOf": "2026-09-02",
        "prevAsOf": "2026-09-01",
        "gapDays": 1,
        "gapSuspect": false,
        "live": true,
        "latest": {
          "date": "2026-09-03",
          "close": 92.25,
          "prevDate": "2026-09-02",
          "prevClose": 91.01,
          "change": 1.24,
          "changePct": 1.36,
          "gapDays": 1,
          "gapSuspect": false
        },
        "settled": {
          "date": "2026-09-02",
          "close": 91.01,
          "prevDate": "2026-09-01",
          "prevClose": 90.22,
          "change": 0.79,
          "changePct": 0.88,
          "gapDays": 1,
          "gapSuspect": false
        },
        "quotePrice": 92.25,
        "series": [
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
            "close": 91.01
          },
          {
            "date": "2026-09-03",
            "close": 92.25
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
        "close": 95.63,
        "prevClose": 94.65,
        "change": 0.98,
        "changePct": 1.04,
        "asOf": "2026-09-02",
        "prevAsOf": "2026-09-01",
        "gapDays": 1,
        "gapSuspect": false,
        "live": true,
        "latest": {
          "date": "2026-09-03",
          "close": 96.7,
          "prevDate": "2026-09-02",
          "prevClose": 95.63,
          "change": 1.07,
          "changePct": 1.12,
          "gapDays": 1,
          "gapSuspect": false
        },
        "settled": {
          "date": "2026-09-02",
          "close": 95.63,
          "prevDate": "2026-09-01",
          "prevClose": 94.65,
          "change": 0.98,
          "changePct": 1.04,
          "gapDays": 1,
          "gapSuspect": false
        },
        "quotePrice": 96.7,
        "series": [
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
            "close": 95.63
          },
          {
            "date": "2026-09-03",
            "close": 96.7
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
        "close": 4366.2998,
        "prevClose": 4348,
        "change": 18.2998,
        "changePct": 0.42,
        "asOf": "2026-09-02",
        "prevAsOf": "2026-09-01",
        "gapDays": 1,
        "gapSuspect": false,
        "live": true,
        "latest": {
          "date": "2026-09-03",
          "close": 4517.8999,
          "prevDate": "2026-09-02",
          "prevClose": 4366.2998,
          "change": 151.6001,
          "changePct": 3.47,
          "gapDays": 1,
          "gapSuspect": false
        },
        "settled": {
          "date": "2026-09-02",
          "close": 4366.2998,
          "prevDate": "2026-09-01",
          "prevClose": 4348,
          "change": 18.2998,
          "changePct": 0.42,
          "gapDays": 1,
          "gapSuspect": false
        },
        "quotePrice": 4517.9,
        "series": [
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
            "close": 4366.2998
          },
          {
            "date": "2026-09-03",
            "close": 4517.8999
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
          "close": 155.529,
          "prevDate": "2026-09-02",
          "prevClose": 160.196,
          "change": -4.667,
          "changePct": -2.91,
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
        "quotePrice": 155.529,
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
            "close": 155.529
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
          "close": 6.7082,
          "prevDate": "2026-09-02",
          "prevClose": 6.7202,
          "change": -0.012,
          "changePct": -0.18,
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
        "quotePrice": 6.7082,
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
            "close": 6.7082
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
          "close": 31.694,
          "prevDate": "2026-09-02",
          "prevClose": 31.675,
          "change": 0.019,
          "changePct": 0.06,
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
        "quotePrice": 31.694,
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
            "close": 31.694
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
        "close": 45857.6602,
        "prevClose": 46164.7188,
        "change": -307.0586,
        "changePct": -0.67,
        "asOf": "2026-09-03",
        "prevAsOf": "2026-09-02",
        "gapDays": 1,
        "gapSuspect": false,
        "live": false,
        "latest": {
          "date": "2026-09-03",
          "close": 45857.6602,
          "prevDate": "2026-09-02",
          "prevClose": 46164.7188,
          "change": -307.0586,
          "changePct": -0.67,
          "gapDays": 1,
          "gapSuspect": false
        },
        "settled": {
          "date": "2026-09-03",
          "close": 45857.6602,
          "prevDate": "2026-09-02",
          "prevClose": 46164.7188,
          "change": -307.0586,
          "changePct": -0.67,
          "gapDays": 1,
          "gapSuspect": false
        },
        "quotePrice": 45857.66,
        "series": [
          {
            "date": "2026-08-27",
            "close": 45975.2188
          },
          {
            "date": "2026-08-28",
            "close": 46331.4492
          },
          {
            "date": "2026-08-31",
            "close": 46128.4688
          },
          {
            "date": "2026-09-01",
            "close": 46948.7188
          },
          {
            "date": "2026-09-02",
            "close": 46164.7188
          },
          {
            "date": "2026-09-03",
            "close": 45857.6602
          }
        ],
        "currency": "TWD",
        "timezone": "Asia/Taipei",
        "source": "Yahoo Finance chart API（日線）"
      }
    }
  }
};
