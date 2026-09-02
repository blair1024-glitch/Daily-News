/**
 * market-global.js — 由 GitHub Actions 自動產生，請勿手動編輯。
 * 產生器：scripts/fetch-global-market.mjs
 *
 * 國際行情中繼資料，供每日 dashboard 更新流程讀用，不會被 index.html 載入。
 * ok:false 代表該標的當次抓不到，error 說明原因——請據實標註，不要沿用舊值。
 */
window.MARKET_GLOBAL = {
  "fetchedAt": "2026-09-02T14:59:19.046Z",
  "okCount": 16,
  "totalCount": 16,
  "items": {
    "sox": {
      "ok": true,
      "label": "費城半導體 SOX",
      "symbol": "%5ESOX",
      "value": {
        "close": 11288.6104,
        "prevClose": 11535.0498,
        "change": -246.4394,
        "changePct": -2.14,
        "asOf": "2026-09-01",
        "prevAsOf": "2026-08-31",
        "gapDays": 1,
        "gapSuspect": false,
        "live": true,
        "latest": {
          "date": "2026-09-02",
          "close": 11285.1289,
          "prevDate": "2026-09-01",
          "prevClose": 11288.6104,
          "change": -3.4815,
          "changePct": -0.03,
          "gapDays": 1,
          "gapSuspect": false
        },
        "settled": {
          "date": "2026-09-01",
          "close": 11288.6104,
          "prevDate": "2026-08-31",
          "prevClose": 11535.0498,
          "change": -246.4394,
          "changePct": -2.14,
          "gapDays": 1,
          "gapSuspect": false
        },
        "quotePrice": 11285.129,
        "series": [
          {
            "date": "2026-08-26",
            "close": 11611.2402
          },
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
            "close": 11285.1289
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
        "prevClose": 14.92,
        "change": 1.42,
        "changePct": 9.52,
        "asOf": "2026-09-01",
        "prevAsOf": "2026-08-31",
        "gapDays": 1,
        "gapSuspect": false,
        "live": true,
        "latest": {
          "date": "2026-09-02",
          "close": 15.34,
          "prevDate": "2026-09-01",
          "prevClose": 16.34,
          "change": -1,
          "changePct": -6.12,
          "gapDays": 1,
          "gapSuspect": false
        },
        "settled": {
          "date": "2026-09-01",
          "close": 16.34,
          "prevDate": "2026-08-31",
          "prevClose": 14.92,
          "change": 1.42,
          "changePct": 9.52,
          "gapDays": 1,
          "gapSuspect": false
        },
        "quotePrice": 15.34,
        "series": [
          {
            "date": "2026-08-26",
            "close": 15.21
          },
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
            "close": 15.34
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
        "close": 7631.4702,
        "prevClose": 7686.1401,
        "change": -54.6699,
        "changePct": -0.71,
        "asOf": "2026-09-01",
        "prevAsOf": "2026-08-31",
        "gapDays": 1,
        "gapSuspect": false,
        "live": true,
        "latest": {
          "date": "2026-09-02",
          "close": 7669.8701,
          "prevDate": "2026-09-01",
          "prevClose": 7631.4702,
          "change": 38.3999,
          "changePct": 0.5,
          "gapDays": 1,
          "gapSuspect": false
        },
        "settled": {
          "date": "2026-09-01",
          "close": 7631.4702,
          "prevDate": "2026-08-31",
          "prevClose": 7686.1401,
          "change": -54.6699,
          "changePct": -0.71,
          "gapDays": 1,
          "gapSuspect": false
        },
        "quotePrice": 7669.87,
        "series": [
          {
            "date": "2026-08-26",
            "close": 7675.7002
          },
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
            "close": 7669.8701
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
        "close": 26099.7695,
        "prevClose": 26370.8906,
        "change": -271.1211,
        "changePct": -1.03,
        "asOf": "2026-09-01",
        "prevAsOf": "2026-08-31",
        "gapDays": 1,
        "gapSuspect": false,
        "live": true,
        "latest": {
          "date": "2026-09-02",
          "close": 26169.9434,
          "prevDate": "2026-09-01",
          "prevClose": 26099.7695,
          "change": 70.1739,
          "changePct": 0.27,
          "gapDays": 1,
          "gapSuspect": false
        },
        "settled": {
          "date": "2026-09-01",
          "close": 26099.7695,
          "prevDate": "2026-08-31",
          "prevClose": 26370.8906,
          "change": -271.1211,
          "changePct": -1.03,
          "gapDays": 1,
          "gapSuspect": false
        },
        "quotePrice": 26169.943,
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
            "close": 26169.9434
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
        "close": 52766.8789,
        "prevClose": 53185.8984,
        "change": -419.0195,
        "changePct": -0.79,
        "asOf": "2026-09-01",
        "prevAsOf": "2026-08-31",
        "gapDays": 1,
        "gapSuspect": false,
        "live": true,
        "latest": {
          "date": "2026-09-02",
          "close": 53178.1406,
          "prevDate": "2026-09-01",
          "prevClose": 52766.8789,
          "change": 411.2617,
          "changePct": 0.78,
          "gapDays": 1,
          "gapSuspect": false
        },
        "settled": {
          "date": "2026-09-01",
          "close": 52766.8789,
          "prevDate": "2026-08-31",
          "prevClose": 53185.8984,
          "change": -419.0195,
          "changePct": -0.79,
          "gapDays": 1,
          "gapSuspect": false
        },
        "quotePrice": 53178.14,
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
            "close": 53178.1406
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
        "prevClose": 4.758,
        "change": 0.038,
        "changePct": 0.8,
        "asOf": "2026-09-01",
        "prevAsOf": "2026-08-31",
        "gapDays": 1,
        "gapSuspect": false,
        "live": true,
        "latest": {
          "date": "2026-09-02",
          "close": 4.794,
          "prevDate": "2026-09-01",
          "prevClose": 4.796,
          "change": -0.002,
          "changePct": -0.04,
          "gapDays": 1,
          "gapSuspect": false
        },
        "settled": {
          "date": "2026-09-01",
          "close": 4.796,
          "prevDate": "2026-08-31",
          "prevClose": 4.758,
          "change": 0.038,
          "changePct": 0.8,
          "gapDays": 1,
          "gapSuspect": false
        },
        "quotePrice": 4.794,
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
            "close": 4.794
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
        "close": 5.268,
        "prevClose": 5.249,
        "change": 0.019,
        "changePct": 0.36,
        "asOf": "2026-09-01",
        "prevAsOf": "2026-08-31",
        "gapDays": 1,
        "gapSuspect": false,
        "live": true,
        "latest": {
          "date": "2026-09-02",
          "close": 5.264,
          "prevDate": "2026-09-01",
          "prevClose": 5.268,
          "change": -0.004,
          "changePct": -0.08,
          "gapDays": 1,
          "gapSuspect": false
        },
        "settled": {
          "date": "2026-09-01",
          "close": 5.268,
          "prevDate": "2026-08-31",
          "prevClose": 5.249,
          "change": 0.019,
          "changePct": 0.36,
          "gapDays": 1,
          "gapSuspect": false
        },
        "quotePrice": 5.264,
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
            "close": 5.264
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
        "close": 4.557,
        "prevClose": 4.507,
        "change": 0.05,
        "changePct": 1.11,
        "asOf": "2026-09-01",
        "prevAsOf": "2026-08-31",
        "gapDays": 1,
        "gapSuspect": false,
        "live": true,
        "latest": {
          "date": "2026-09-02",
          "close": 4.553,
          "prevDate": "2026-09-01",
          "prevClose": 4.557,
          "change": -0.004,
          "changePct": -0.09,
          "gapDays": 1,
          "gapSuspect": false
        },
        "settled": {
          "date": "2026-09-01",
          "close": 4.557,
          "prevDate": "2026-08-31",
          "prevClose": 4.507,
          "change": 0.05,
          "changePct": 1.11,
          "gapDays": 1,
          "gapSuspect": false
        },
        "quotePrice": 4.553,
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
            "close": 4.553
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
          "close": 99.548,
          "prevDate": "2026-09-01",
          "prevClose": 99.67,
          "change": -0.122,
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
        "quotePrice": 99.548,
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
            "close": 99.548
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
          "close": 90.31,
          "prevDate": "2026-09-01",
          "prevClose": 90.22,
          "change": 0.09,
          "changePct": 0.1,
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
        "quotePrice": 90.31,
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
            "close": 90.31
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
          "close": 95.05,
          "prevDate": "2026-09-01",
          "prevClose": 94.65,
          "change": 0.4,
          "changePct": 0.42,
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
        "quotePrice": 95.05,
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
            "close": 95.05
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
          "close": 4426.5,
          "prevDate": "2026-09-01",
          "prevClose": 4348,
          "change": 78.5,
          "changePct": 1.81,
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
        "quotePrice": 4426.5,
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
            "close": 4426.5
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
        "close": 159.747,
        "prevClose": 160.122,
        "change": -0.375,
        "changePct": -0.23,
        "asOf": "2026-09-01",
        "prevAsOf": "2026-08-31",
        "gapDays": 1,
        "gapSuspect": false,
        "live": true,
        "latest": {
          "date": "2026-09-02",
          "close": 158.706,
          "prevDate": "2026-09-01",
          "prevClose": 159.747,
          "change": -1.041,
          "changePct": -0.65,
          "gapDays": 1,
          "gapSuspect": false
        },
        "settled": {
          "date": "2026-09-01",
          "close": 159.747,
          "prevDate": "2026-08-31",
          "prevClose": 160.122,
          "change": -0.375,
          "changePct": -0.23,
          "gapDays": 1,
          "gapSuspect": false
        },
        "quotePrice": 158.706,
        "series": [
          {
            "date": "2026-08-26",
            "close": 159.223
          },
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
            "close": 158.706
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
        "close": 6.726,
        "prevClose": 6.726,
        "change": 0,
        "changePct": 0,
        "asOf": "2026-09-01",
        "prevAsOf": "2026-08-31",
        "gapDays": 1,
        "gapSuspect": false,
        "live": true,
        "latest": {
          "date": "2026-09-02",
          "close": 6.7072,
          "prevDate": "2026-09-01",
          "prevClose": 6.726,
          "change": -0.0188,
          "changePct": -0.28,
          "gapDays": 1,
          "gapSuspect": false
        },
        "settled": {
          "date": "2026-09-01",
          "close": 6.726,
          "prevDate": "2026-08-31",
          "prevClose": 6.726,
          "change": 0,
          "changePct": 0,
          "gapDays": 1,
          "gapSuspect": false
        },
        "quotePrice": 6.7072,
        "series": [
          {
            "date": "2026-08-26",
            "close": 6.7203
          },
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
            "close": 6.7072
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
        "close": 31.688,
        "prevClose": 31.626,
        "change": 0.062,
        "changePct": 0.2,
        "asOf": "2026-09-01",
        "prevAsOf": "2026-08-31",
        "gapDays": 1,
        "gapSuspect": false,
        "live": true,
        "latest": {
          "date": "2026-09-02",
          "close": 31.739,
          "prevDate": "2026-09-01",
          "prevClose": 31.688,
          "change": 0.051,
          "changePct": 0.16,
          "gapDays": 1,
          "gapSuspect": false
        },
        "settled": {
          "date": "2026-09-01",
          "close": 31.688,
          "prevDate": "2026-08-31",
          "prevClose": 31.626,
          "change": 0.062,
          "changePct": 0.2,
          "gapDays": 1,
          "gapSuspect": false
        },
        "quotePrice": 31.739,
        "series": [
          {
            "date": "2026-08-26",
            "close": 31.8419
          },
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
            "close": 31.739
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
        "close": 46164.7188,
        "prevClose": 46948.7188,
        "change": -784,
        "changePct": -1.67,
        "asOf": "2026-09-02",
        "prevAsOf": "2026-09-01",
        "gapDays": 1,
        "gapSuspect": false,
        "live": false,
        "latest": {
          "date": "2026-09-02",
          "close": 46164.7188,
          "prevDate": "2026-09-01",
          "prevClose": 46948.7188,
          "change": -784,
          "changePct": -1.67,
          "gapDays": 1,
          "gapSuspect": false
        },
        "settled": {
          "date": "2026-09-02",
          "close": 46164.7188,
          "prevDate": "2026-09-01",
          "prevClose": 46948.7188,
          "change": -784,
          "changePct": -1.67,
          "gapDays": 1,
          "gapSuspect": false
        },
        "quotePrice": 46164.72,
        "series": [
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
          },
          {
            "date": "2026-09-02",
            "close": 46164.7188
          }
        ],
        "currency": "TWD",
        "timezone": "Asia/Taipei",
        "source": "Yahoo Finance chart API（日線）"
      }
    }
  }
};
