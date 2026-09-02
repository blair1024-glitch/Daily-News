/**
 * market-global.js — 由 GitHub Actions 自動產生，請勿手動編輯。
 * 產生器：scripts/fetch-global-market.mjs
 *
 * 國際行情中繼資料，供每日 dashboard 更新流程讀用，不會被 index.html 載入。
 * ok:false 代表該標的當次抓不到，error 說明原因——請據實標註，不要沿用舊值。
 */
window.MARKET_GLOBAL = {
  "fetchedAt": "2026-09-02T00:50:42.183Z",
  "okCount": 16,
  "totalCount": 16,
  "items": {
    "sox": {
      "ok": true,
      "label": "費城半導體 SOX",
      "symbol": "%5ESOX",
      "value": {
        "close": 11288.6123,
        "prevClose": 11535.0498,
        "change": -246.4375,
        "changePct": -2.14,
        "asOf": "2026-09-01",
        "prevAsOf": "2026-08-31",
        "gapDays": 1,
        "gapSuspect": false,
        "live": false,
        "latest": {
          "date": "2026-09-01",
          "close": 11288.6123,
          "prevDate": "2026-08-31",
          "prevClose": 11535.0498,
          "change": -246.4375,
          "changePct": -2.14,
          "gapDays": 1,
          "gapSuspect": false
        },
        "settled": {
          "date": "2026-09-01",
          "close": 11288.6123,
          "prevDate": "2026-08-31",
          "prevClose": 11535.0498,
          "change": -246.4375,
          "changePct": -2.14,
          "gapDays": 1,
          "gapSuspect": false
        },
        "quotePrice": 11288.612,
        "series": [
          {
            "date": "2026-08-24",
            "close": 11423.1699
          },
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
            "close": 11288.6123
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
        "live": false,
        "latest": {
          "date": "2026-09-01",
          "close": 16.34,
          "prevDate": "2026-08-31",
          "prevClose": 14.92,
          "change": 1.42,
          "changePct": 9.52,
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
        "quotePrice": 16.34,
        "series": [
          {
            "date": "2026-08-24",
            "close": 15.85
          },
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
        "live": false,
        "latest": {
          "date": "2026-09-01",
          "close": 7631.4702,
          "prevDate": "2026-08-31",
          "prevClose": 7686.1401,
          "change": -54.6699,
          "changePct": -0.71,
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
        "quotePrice": 7631.47,
        "series": [
          {
            "date": "2026-08-24",
            "close": 7652.8599
          },
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
        "close": 26099.7734,
        "prevClose": 26370.8906,
        "change": -271.1172,
        "changePct": -1.03,
        "asOf": "2026-09-01",
        "prevAsOf": "2026-08-31",
        "gapDays": 1,
        "gapSuspect": false,
        "live": false,
        "latest": {
          "date": "2026-09-01",
          "close": 26099.7734,
          "prevDate": "2026-08-31",
          "prevClose": 26370.8906,
          "change": -271.1172,
          "changePct": -1.03,
          "gapDays": 1,
          "gapSuspect": false
        },
        "settled": {
          "date": "2026-09-01",
          "close": 26099.7734,
          "prevDate": "2026-08-31",
          "prevClose": 26370.8906,
          "change": -271.1172,
          "changePct": -1.03,
          "gapDays": 1,
          "gapSuspect": false
        },
        "quotePrice": 26099.773,
        "series": [
          {
            "date": "2026-08-24",
            "close": 25980.1895
          },
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
            "close": 26099.7734
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
        "live": false,
        "latest": {
          "date": "2026-09-01",
          "close": 52766.8789,
          "prevDate": "2026-08-31",
          "prevClose": 53185.8984,
          "change": -419.0195,
          "changePct": -0.79,
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
        "quotePrice": 52766.88,
        "series": [
          {
            "date": "2026-08-24",
            "close": 53417.1602
          },
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
        "live": false,
        "latest": {
          "date": "2026-09-01",
          "close": 4.796,
          "prevDate": "2026-08-31",
          "prevClose": 4.758,
          "change": 0.038,
          "changePct": 0.8,
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
        "quotePrice": 4.796,
        "series": [
          {
            "date": "2026-08-24",
            "close": 4.704
          },
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
        "live": false,
        "latest": {
          "date": "2026-09-01",
          "close": 5.268,
          "prevDate": "2026-08-31",
          "prevClose": 5.249,
          "change": 0.019,
          "changePct": 0.36,
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
        "quotePrice": 5.268,
        "series": [
          {
            "date": "2026-08-24",
            "close": 5.231
          },
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
        "live": false,
        "latest": {
          "date": "2026-09-01",
          "close": 4.557,
          "prevDate": "2026-08-31",
          "prevClose": 4.507,
          "change": 0.05,
          "changePct": 1.11,
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
        "quotePrice": 4.557,
        "series": [
          {
            "date": "2026-08-24",
            "close": 4.408
          },
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
        "close": 99.43,
        "prevClose": 99.16,
        "change": 0.27,
        "changePct": 0.27,
        "asOf": "2026-08-31",
        "prevAsOf": "2026-08-27",
        "gapDays": 4,
        "gapSuspect": true,
        "live": true,
        "latest": {
          "date": "2026-09-01",
          "close": 99.707,
          "prevDate": "2026-08-31",
          "prevClose": 99.43,
          "change": 0.277,
          "changePct": 0.28,
          "gapDays": 1,
          "gapSuspect": false
        },
        "settled": {
          "date": "2026-08-31",
          "close": 99.43,
          "prevDate": "2026-08-27",
          "prevClose": 99.16,
          "change": 0.27,
          "changePct": 0.27,
          "gapDays": 4,
          "gapSuspect": true
        },
        "quotePrice": 99.707,
        "series": [
          {
            "date": "2026-08-24",
            "close": 99
          },
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
            "close": 99.707
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
        "close": 85.76,
        "prevClose": 83.4,
        "change": 2.36,
        "changePct": 2.83,
        "asOf": "2026-08-31",
        "prevAsOf": "2026-08-28",
        "gapDays": 3,
        "gapSuspect": false,
        "live": true,
        "latest": {
          "date": "2026-09-01",
          "close": 91.65,
          "prevDate": "2026-08-31",
          "prevClose": 85.76,
          "change": 5.89,
          "changePct": 6.87,
          "gapDays": 1,
          "gapSuspect": false
        },
        "settled": {
          "date": "2026-08-31",
          "close": 85.76,
          "prevDate": "2026-08-28",
          "prevClose": 83.4,
          "change": 2.36,
          "changePct": 2.83,
          "gapDays": 3,
          "gapSuspect": false
        },
        "quotePrice": 91.65,
        "series": [
          {
            "date": "2026-08-25",
            "close": 82.36
          },
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
            "close": 91.65
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
        "close": 90.49,
        "prevClose": 89.31,
        "change": 1.18,
        "changePct": 1.32,
        "asOf": "2026-08-31",
        "prevAsOf": "2026-08-28",
        "gapDays": 3,
        "gapSuspect": false,
        "live": true,
        "latest": {
          "date": "2026-09-01",
          "close": 96.16,
          "prevDate": "2026-08-31",
          "prevClose": 90.49,
          "change": 5.67,
          "changePct": 6.27,
          "gapDays": 1,
          "gapSuspect": false
        },
        "settled": {
          "date": "2026-08-31",
          "close": 90.49,
          "prevDate": "2026-08-28",
          "prevClose": 89.31,
          "change": 1.18,
          "changePct": 1.32,
          "gapDays": 3,
          "gapSuspect": false
        },
        "quotePrice": 96.16,
        "series": [
          {
            "date": "2026-08-25",
            "close": 88.58
          },
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
            "close": 96.16
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
        "close": 4431.1001,
        "prevClose": 4478.1001,
        "change": -47,
        "changePct": -1.05,
        "asOf": "2026-08-31",
        "prevAsOf": "2026-08-28",
        "gapDays": 3,
        "gapSuspect": false,
        "live": true,
        "latest": {
          "date": "2026-09-01",
          "close": 4371.6001,
          "prevDate": "2026-08-31",
          "prevClose": 4431.1001,
          "change": -59.5,
          "changePct": -1.34,
          "gapDays": 1,
          "gapSuspect": false
        },
        "settled": {
          "date": "2026-08-31",
          "close": 4431.1001,
          "prevDate": "2026-08-28",
          "prevClose": 4478.1001,
          "change": -47,
          "changePct": -1.05,
          "gapDays": 3,
          "gapSuspect": false
        },
        "quotePrice": 4371.6,
        "series": [
          {
            "date": "2026-08-25",
            "close": 4638.1001
          },
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
            "close": 4371.6001
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
          "close": 160.235,
          "prevDate": "2026-09-01",
          "prevClose": 159.747,
          "change": 0.488,
          "changePct": 0.31,
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
        "quotePrice": 160.235,
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
            "close": 160.235
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
          "close": 6.7197,
          "prevDate": "2026-09-01",
          "prevClose": 6.726,
          "change": -0.0063,
          "changePct": -0.09,
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
        "quotePrice": 6.7197,
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
            "close": 6.7197
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
          "close": 31.681,
          "prevDate": "2026-09-01",
          "prevClose": 31.688,
          "change": -0.007,
          "changePct": -0.02,
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
        "quotePrice": 31.681,
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
            "close": 31.681
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
        "close": 46128.4688,
        "prevClose": 45975.2188,
        "change": 153.25,
        "changePct": 0.33,
        "asOf": "2026-08-31",
        "prevAsOf": "2026-08-27",
        "gapDays": 4,
        "gapSuspect": true,
        "live": false,
        "latest": {
          "date": "2026-08-31",
          "close": 46128.4688,
          "prevDate": "2026-08-27",
          "prevClose": 45975.2188,
          "change": 153.25,
          "changePct": 0.33,
          "gapDays": 4,
          "gapSuspect": true
        },
        "settled": {
          "date": "2026-08-31",
          "close": 46128.4688,
          "prevDate": "2026-08-27",
          "prevClose": 45975.2188,
          "change": 153.25,
          "changePct": 0.33,
          "gapDays": 4,
          "gapSuspect": true
        },
        "quotePrice": 46948.72,
        "series": [
          {
            "date": "2026-08-21",
            "close": 45224.2891
          },
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
          }
        ],
        "currency": "TWD",
        "timezone": "Asia/Taipei",
        "source": "Yahoo Finance chart API（日線）"
      }
    }
  }
};
