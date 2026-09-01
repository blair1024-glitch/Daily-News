/**
 * market-global.js — 由 GitHub Actions 自動產生，請勿手動編輯。
 * 產生器：scripts/fetch-global-market.mjs
 *
 * 國際行情中繼資料，供每日 dashboard 更新流程讀用，不會被 index.html 載入。
 * ok:false 代表該標的當次抓不到，error 說明原因——請據實標註，不要沿用舊值。
 */
window.MARKET_GLOBAL = {
  "fetchedAt": "2026-09-01T15:24:13.250Z",
  "okCount": 16,
  "totalCount": 16,
  "items": {
    "sox": {
      "ok": true,
      "label": "費城半導體 SOX",
      "symbol": "%5ESOX",
      "value": {
        "close": 11535.0498,
        "prevClose": 11882.1699,
        "change": -347.1201,
        "changePct": -2.92,
        "asOf": "2026-08-31",
        "prevAsOf": "2026-08-27",
        "live": true,
        "latest": {
          "date": "2026-09-01",
          "close": 11307.6123,
          "prevDate": "2026-08-31",
          "prevClose": 11535.0498,
          "change": -227.4375,
          "changePct": -1.97
        },
        "settled": {
          "date": "2026-08-31",
          "close": 11535.0498,
          "prevDate": "2026-08-27",
          "prevClose": 11882.1699,
          "change": -347.1201,
          "changePct": -2.92
        },
        "quotePrice": 11307.612,
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
            "close": 11307.6123
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
        "close": 14.92,
        "prevClose": 14.51,
        "change": 0.41,
        "changePct": 2.83,
        "asOf": "2026-08-31",
        "prevAsOf": "2026-08-27",
        "live": true,
        "latest": {
          "date": "2026-09-01",
          "close": 15.51,
          "prevDate": "2026-08-31",
          "prevClose": 14.92,
          "change": 0.59,
          "changePct": 3.95
        },
        "settled": {
          "date": "2026-08-31",
          "close": 14.92,
          "prevDate": "2026-08-27",
          "prevClose": 14.51,
          "change": 0.41,
          "changePct": 2.83
        },
        "quotePrice": 15.51,
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
            "close": 15.51
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
        "close": 7686.1401,
        "prevClose": 7730.9902,
        "change": -44.8501,
        "changePct": -0.58,
        "asOf": "2026-08-31",
        "prevAsOf": "2026-08-27",
        "live": true,
        "latest": {
          "date": "2026-09-01",
          "close": 7651.4102,
          "prevDate": "2026-08-31",
          "prevClose": 7686.1401,
          "change": -34.7299,
          "changePct": -0.45
        },
        "settled": {
          "date": "2026-08-31",
          "close": 7686.1401,
          "prevDate": "2026-08-27",
          "prevClose": 7730.9902,
          "change": -44.8501,
          "changePct": -0.58
        },
        "quotePrice": 7651.41,
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
            "close": 7651.4102
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
        "close": 26370.8906,
        "prevClose": 26541.3496,
        "change": -170.459,
        "changePct": -0.64,
        "asOf": "2026-08-31",
        "prevAsOf": "2026-08-27",
        "live": true,
        "latest": {
          "date": "2026-09-01",
          "close": 26170.5898,
          "prevDate": "2026-08-31",
          "prevClose": 26370.8906,
          "change": -200.3008,
          "changePct": -0.76
        },
        "settled": {
          "date": "2026-08-31",
          "close": 26370.8906,
          "prevDate": "2026-08-27",
          "prevClose": 26541.3496,
          "change": -170.459,
          "changePct": -0.64
        },
        "quotePrice": 26170.59,
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
            "close": 26170.5898
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
        "close": 53185.8984,
        "prevClose": 53569.4414,
        "change": -383.543,
        "changePct": -0.72,
        "asOf": "2026-08-31",
        "prevAsOf": "2026-08-27",
        "live": true,
        "latest": {
          "date": "2026-09-01",
          "close": 52971.0117,
          "prevDate": "2026-08-31",
          "prevClose": 53185.8984,
          "change": -214.8867,
          "changePct": -0.4
        },
        "settled": {
          "date": "2026-08-31",
          "close": 53185.8984,
          "prevDate": "2026-08-27",
          "prevClose": 53569.4414,
          "change": -383.543,
          "changePct": -0.72
        },
        "quotePrice": 52971.01,
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
            "close": 52971.0117
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
        "close": 4.758,
        "prevClose": 4.672,
        "change": 0.086,
        "changePct": 1.84,
        "asOf": "2026-08-31",
        "prevAsOf": "2026-08-27",
        "live": true,
        "latest": {
          "date": "2026-09-01",
          "close": 4.77,
          "prevDate": "2026-08-31",
          "prevClose": 4.758,
          "change": 0.012,
          "changePct": 0.25
        },
        "settled": {
          "date": "2026-08-31",
          "close": 4.758,
          "prevDate": "2026-08-27",
          "prevClose": 4.672,
          "change": 0.086,
          "changePct": 1.84
        },
        "quotePrice": 4.77,
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
            "close": 4.77
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
        "close": 5.249,
        "prevClose": 5.191,
        "change": 0.058,
        "changePct": 1.12,
        "asOf": "2026-08-31",
        "prevAsOf": "2026-08-27",
        "live": true,
        "latest": {
          "date": "2026-09-01",
          "close": 5.248,
          "prevDate": "2026-08-31",
          "prevClose": 5.249,
          "change": -0.001,
          "changePct": -0.02
        },
        "settled": {
          "date": "2026-08-31",
          "close": 5.249,
          "prevDate": "2026-08-27",
          "prevClose": 5.191,
          "change": 0.058,
          "changePct": 1.12
        },
        "quotePrice": 5.248,
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
            "close": 5.248
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
        "close": 4.507,
        "prevClose": 4.396,
        "change": 0.111,
        "changePct": 2.53,
        "asOf": "2026-08-31",
        "prevAsOf": "2026-08-27",
        "live": true,
        "latest": {
          "date": "2026-09-01",
          "close": 4.525,
          "prevDate": "2026-08-31",
          "prevClose": 4.507,
          "change": 0.018,
          "changePct": 0.4
        },
        "settled": {
          "date": "2026-08-31",
          "close": 4.507,
          "prevDate": "2026-08-27",
          "prevClose": 4.396,
          "change": 0.111,
          "changePct": 2.53
        },
        "quotePrice": 4.525,
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
            "close": 4.525
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
        "live": true,
        "latest": {
          "date": "2026-09-01",
          "close": 99.622,
          "prevDate": "2026-08-31",
          "prevClose": 99.43,
          "change": 0.192,
          "changePct": 0.19
        },
        "settled": {
          "date": "2026-08-31",
          "close": 99.43,
          "prevDate": "2026-08-27",
          "prevClose": 99.16,
          "change": 0.27,
          "changePct": 0.27
        },
        "quotePrice": 99.622,
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
            "close": 99.622
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
        "live": true,
        "latest": {
          "date": "2026-09-01",
          "close": 87.91,
          "prevDate": "2026-08-31",
          "prevClose": 85.76,
          "change": 2.15,
          "changePct": 2.51
        },
        "settled": {
          "date": "2026-08-31",
          "close": 85.76,
          "prevDate": "2026-08-28",
          "prevClose": 83.4,
          "change": 2.36,
          "changePct": 2.83
        },
        "quotePrice": 87.91,
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
            "close": 87.91
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
        "live": true,
        "latest": {
          "date": "2026-09-01",
          "close": 92.36,
          "prevDate": "2026-08-31",
          "prevClose": 90.49,
          "change": 1.87,
          "changePct": 2.07
        },
        "settled": {
          "date": "2026-08-31",
          "close": 90.49,
          "prevDate": "2026-08-28",
          "prevClose": 89.31,
          "change": 1.18,
          "changePct": 1.32
        },
        "quotePrice": 92.36,
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
            "close": 92.36
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
        "live": true,
        "latest": {
          "date": "2026-09-01",
          "close": 4405.3999,
          "prevDate": "2026-08-31",
          "prevClose": 4431.1001,
          "change": -25.7002,
          "changePct": -0.58
        },
        "settled": {
          "date": "2026-08-31",
          "close": 4431.1001,
          "prevDate": "2026-08-28",
          "prevClose": 4478.1001,
          "change": -47,
          "changePct": -1.05
        },
        "quotePrice": 4405.4,
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
            "close": 4405.3999
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
        "close": 160.122,
        "prevClose": 159.321,
        "change": 0.801,
        "changePct": 0.5,
        "asOf": "2026-08-31",
        "prevAsOf": "2026-08-28",
        "live": true,
        "latest": {
          "date": "2026-09-01",
          "close": 160.064,
          "prevDate": "2026-08-31",
          "prevClose": 160.122,
          "change": -0.058,
          "changePct": -0.04
        },
        "settled": {
          "date": "2026-08-31",
          "close": 160.122,
          "prevDate": "2026-08-28",
          "prevClose": 159.321,
          "change": 0.801,
          "changePct": 0.5
        },
        "quotePrice": 160.064,
        "series": [
          {
            "date": "2026-08-25",
            "close": 159.139
          },
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
            "close": 160.064
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
        "prevClose": 6.7225,
        "change": 0.0035,
        "changePct": 0.05,
        "asOf": "2026-08-31",
        "prevAsOf": "2026-08-28",
        "live": true,
        "latest": {
          "date": "2026-09-01",
          "close": 6.7088,
          "prevDate": "2026-08-31",
          "prevClose": 6.726,
          "change": -0.0172,
          "changePct": -0.26
        },
        "settled": {
          "date": "2026-08-31",
          "close": 6.726,
          "prevDate": "2026-08-28",
          "prevClose": 6.7225,
          "change": 0.0035,
          "changePct": 0.05
        },
        "quotePrice": 6.7088,
        "series": [
          {
            "date": "2026-08-25",
            "close": 6.7219
          },
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
            "close": 6.7088
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
        "close": 31.626,
        "prevClose": 31.6609,
        "change": -0.0349,
        "changePct": -0.11,
        "asOf": "2026-08-31",
        "prevAsOf": "2026-08-28",
        "live": true,
        "latest": {
          "date": "2026-09-01",
          "close": 31.666,
          "prevDate": "2026-08-31",
          "prevClose": 31.626,
          "change": 0.04,
          "changePct": 0.13
        },
        "settled": {
          "date": "2026-08-31",
          "close": 31.626,
          "prevDate": "2026-08-28",
          "prevClose": 31.6609,
          "change": -0.0349,
          "changePct": -0.11
        },
        "quotePrice": 31.666,
        "series": [
          {
            "date": "2026-08-25",
            "close": 31.812
          },
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
            "close": 31.666
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
        "live": false,
        "latest": {
          "date": "2026-09-01",
          "close": 46948.7188,
          "prevDate": "2026-08-31",
          "prevClose": 46128.4688,
          "change": 820.25,
          "changePct": 1.78
        },
        "settled": {
          "date": "2026-09-01",
          "close": 46948.7188,
          "prevDate": "2026-08-31",
          "prevClose": 46128.4688,
          "change": 820.25,
          "changePct": 1.78
        },
        "quotePrice": 46948.72,
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
