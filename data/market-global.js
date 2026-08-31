/**
 * market-global.js — 由 GitHub Actions 自動產生，請勿手動編輯。
 * 產生器：scripts/fetch-global-market.mjs
 *
 * 國際行情中繼資料，供每日 dashboard 更新流程讀用，不會被 index.html 載入。
 * ok:false 代表該標的當次抓不到，error 說明原因——請據實標註，不要沿用舊值。
 */
window.MARKET_GLOBAL = {
  "fetchedAt": "2026-08-31T17:55:31.667Z",
  "okCount": 16,
  "totalCount": 17,
  "items": {
    "sox": {
      "ok": true,
      "label": "費城半導體 SOX",
      "symbol": "%5ESOX",
      "value": {
        "close": 11469.6602,
        "prevClose": 11882.1699,
        "change": -412.5097,
        "changePct": -3.47,
        "asOf": "2026-08-28",
        "prevAsOf": "2026-08-27",
        "live": true,
        "latest": {
          "date": "2026-08-31",
          "close": 11504.2207,
          "prevDate": "2026-08-28",
          "prevClose": 11469.6602,
          "change": 34.5605,
          "changePct": 0.3
        },
        "settled": {
          "date": "2026-08-28",
          "close": 11469.6602,
          "prevDate": "2026-08-27",
          "prevClose": 11882.1699,
          "change": -412.5097,
          "changePct": -3.47
        },
        "quotePrice": 11504.221,
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
            "date": "2026-08-28",
            "close": 11469.6602
          },
          {
            "date": "2026-08-31",
            "close": 11504.2207
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
        "close": 14.43,
        "prevClose": 14.51,
        "change": -0.08,
        "changePct": -0.55,
        "asOf": "2026-08-28",
        "prevAsOf": "2026-08-27",
        "live": true,
        "latest": {
          "date": "2026-08-31",
          "close": 15.12,
          "prevDate": "2026-08-28",
          "prevClose": 14.43,
          "change": 0.69,
          "changePct": 4.78
        },
        "settled": {
          "date": "2026-08-28",
          "close": 14.43,
          "prevDate": "2026-08-27",
          "prevClose": 14.51,
          "change": -0.08,
          "changePct": -0.55
        },
        "quotePrice": 15.12,
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
            "date": "2026-08-28",
            "close": 14.43
          },
          {
            "date": "2026-08-31",
            "close": 15.12
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
        "close": 7711.7598,
        "prevClose": 7730.9902,
        "change": -19.2304,
        "changePct": -0.25,
        "asOf": "2026-08-28",
        "prevAsOf": "2026-08-27",
        "live": true,
        "latest": {
          "date": "2026-08-31",
          "close": 7684.71,
          "prevDate": "2026-08-28",
          "prevClose": 7711.7598,
          "change": -27.0498,
          "changePct": -0.35
        },
        "settled": {
          "date": "2026-08-28",
          "close": 7711.7598,
          "prevDate": "2026-08-27",
          "prevClose": 7730.9902,
          "change": -19.2304,
          "changePct": -0.25
        },
        "quotePrice": 7684.71,
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
            "date": "2026-08-28",
            "close": 7711.7598
          },
          {
            "date": "2026-08-31",
            "close": 7684.71
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
        "close": 26402.4199,
        "prevClose": 26541.3496,
        "change": -138.9297,
        "changePct": -0.52,
        "asOf": "2026-08-28",
        "prevAsOf": "2026-08-27",
        "live": true,
        "latest": {
          "date": "2026-08-31",
          "close": 26330.334,
          "prevDate": "2026-08-28",
          "prevClose": 26402.4199,
          "change": -72.0859,
          "changePct": -0.27
        },
        "settled": {
          "date": "2026-08-28",
          "close": 26402.4199,
          "prevDate": "2026-08-27",
          "prevClose": 26541.3496,
          "change": -138.9297,
          "changePct": -0.52
        },
        "quotePrice": 26330.334,
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
            "date": "2026-08-28",
            "close": 26402.4199
          },
          {
            "date": "2026-08-31",
            "close": 26330.334
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
        "close": 53559.9883,
        "prevClose": 53569.4414,
        "change": -9.4531,
        "changePct": -0.02,
        "asOf": "2026-08-28",
        "prevAsOf": "2026-08-27",
        "live": true,
        "latest": {
          "date": "2026-08-31",
          "close": 53256.3086,
          "prevDate": "2026-08-28",
          "prevClose": 53559.9883,
          "change": -303.6797,
          "changePct": -0.57
        },
        "settled": {
          "date": "2026-08-28",
          "close": 53559.9883,
          "prevDate": "2026-08-27",
          "prevClose": 53569.4414,
          "change": -9.4531,
          "changePct": -0.02
        },
        "quotePrice": 53256.31,
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
            "date": "2026-08-28",
            "close": 53559.9883
          },
          {
            "date": "2026-08-31",
            "close": 53256.3086
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
        "close": 4.72,
        "prevClose": 4.672,
        "change": 0.048,
        "changePct": 1.03,
        "asOf": "2026-08-28",
        "prevAsOf": "2026-08-27",
        "live": true,
        "latest": {
          "date": "2026-08-31",
          "close": 4.758,
          "prevDate": "2026-08-28",
          "prevClose": 4.72,
          "change": 0.038,
          "changePct": 0.81
        },
        "settled": {
          "date": "2026-08-28",
          "close": 4.72,
          "prevDate": "2026-08-27",
          "prevClose": 4.672,
          "change": 0.048,
          "changePct": 1.03
        },
        "quotePrice": 4.7580004,
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
            "date": "2026-08-28",
            "close": 4.72
          },
          {
            "date": "2026-08-31",
            "close": 4.758
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
        "close": 5.206,
        "prevClose": 5.191,
        "change": 0.015,
        "changePct": 0.29,
        "asOf": "2026-08-28",
        "prevAsOf": "2026-08-27",
        "live": true,
        "latest": {
          "date": "2026-08-31",
          "close": 5.255,
          "prevDate": "2026-08-28",
          "prevClose": 5.206,
          "change": 0.049,
          "changePct": 0.94
        },
        "settled": {
          "date": "2026-08-28",
          "close": 5.206,
          "prevDate": "2026-08-27",
          "prevClose": 5.191,
          "change": 0.015,
          "changePct": 0.29
        },
        "quotePrice": 5.255,
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
            "date": "2026-08-28",
            "close": 5.206
          },
          {
            "date": "2026-08-31",
            "close": 5.255
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
        "close": 4.481,
        "prevClose": 4.396,
        "change": 0.085,
        "changePct": 1.93,
        "asOf": "2026-08-28",
        "prevAsOf": "2026-08-27",
        "live": true,
        "latest": {
          "date": "2026-08-31",
          "close": 4.502,
          "prevDate": "2026-08-28",
          "prevClose": 4.481,
          "change": 0.021,
          "changePct": 0.47
        },
        "settled": {
          "date": "2026-08-28",
          "close": 4.481,
          "prevDate": "2026-08-27",
          "prevClose": 4.396,
          "change": 0.085,
          "changePct": 1.93
        },
        "quotePrice": 4.502,
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
            "date": "2026-08-28",
            "close": 4.481
          },
          {
            "date": "2026-08-31",
            "close": 4.502
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
        "close": 99.7,
        "prevClose": 99.16,
        "change": 0.54,
        "changePct": 0.54,
        "asOf": "2026-08-28",
        "prevAsOf": "2026-08-27",
        "live": true,
        "latest": {
          "date": "2026-08-31",
          "close": 99.411,
          "prevDate": "2026-08-28",
          "prevClose": 99.7,
          "change": -0.289,
          "changePct": -0.29
        },
        "settled": {
          "date": "2026-08-28",
          "close": 99.7,
          "prevDate": "2026-08-27",
          "prevClose": 99.16,
          "change": 0.54,
          "changePct": 0.54
        },
        "quotePrice": 99.411,
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
            "date": "2026-08-28",
            "close": 99.7
          },
          {
            "date": "2026-08-31",
            "close": 99.411
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
        "close": 83.4,
        "prevClose": 83.53,
        "change": -0.13,
        "changePct": -0.16,
        "asOf": "2026-08-28",
        "prevAsOf": "2026-08-27",
        "live": true,
        "latest": {
          "date": "2026-08-31",
          "close": 85.55,
          "prevDate": "2026-08-28",
          "prevClose": 83.4,
          "change": 2.15,
          "changePct": 2.58
        },
        "settled": {
          "date": "2026-08-28",
          "close": 83.4,
          "prevDate": "2026-08-27",
          "prevClose": 83.53,
          "change": -0.13,
          "changePct": -0.16
        },
        "quotePrice": 85.55,
        "series": [
          {
            "date": "2026-08-24",
            "close": 85.01
          },
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
            "close": 85.55
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
        "close": 89.31,
        "prevClose": 89.7,
        "change": -0.39,
        "changePct": -0.43,
        "asOf": "2026-08-28",
        "prevAsOf": "2026-08-27",
        "live": true,
        "latest": {
          "date": "2026-08-31",
          "close": 88.2,
          "prevDate": "2026-08-28",
          "prevClose": 89.31,
          "change": -1.11,
          "changePct": -1.24
        },
        "settled": {
          "date": "2026-08-28",
          "close": 89.31,
          "prevDate": "2026-08-27",
          "prevClose": 89.7,
          "change": -0.39,
          "changePct": -0.43
        },
        "quotePrice": 88.2,
        "series": [
          {
            "date": "2026-08-24",
            "close": 92.17
          },
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
            "close": 88.2
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
        "close": 4478.1001,
        "prevClose": 4609.7002,
        "change": -131.6001,
        "changePct": -2.85,
        "asOf": "2026-08-28",
        "prevAsOf": "2026-08-27",
        "live": true,
        "latest": {
          "date": "2026-08-31",
          "close": 4486.5,
          "prevDate": "2026-08-28",
          "prevClose": 4478.1001,
          "change": 8.3999,
          "changePct": 0.19
        },
        "settled": {
          "date": "2026-08-28",
          "close": 4478.1001,
          "prevDate": "2026-08-27",
          "prevClose": 4609.7002,
          "change": -131.6001,
          "changePct": -2.85
        },
        "quotePrice": 4486.5,
        "series": [
          {
            "date": "2026-08-24",
            "close": 4640.7998
          },
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
            "close": 4486.5
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
        "close": 159.321,
        "prevClose": 159.255,
        "change": 0.066,
        "changePct": 0.04,
        "asOf": "2026-08-28",
        "prevAsOf": "2026-08-27",
        "live": true,
        "latest": {
          "date": "2026-08-31",
          "close": 159.692,
          "prevDate": "2026-08-28",
          "prevClose": 159.321,
          "change": 0.371,
          "changePct": 0.23
        },
        "settled": {
          "date": "2026-08-28",
          "close": 159.321,
          "prevDate": "2026-08-27",
          "prevClose": 159.255,
          "change": 0.066,
          "changePct": 0.04
        },
        "quotePrice": 159.692,
        "series": [
          {
            "date": "2026-08-24",
            "close": 158.904
          },
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
            "close": 159.692
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
        "close": 6.7225,
        "prevClose": 6.7225,
        "change": 0,
        "changePct": 0,
        "asOf": "2026-08-28",
        "prevAsOf": "2026-08-27",
        "live": true,
        "latest": {
          "date": "2026-08-31",
          "close": 6.7078,
          "prevDate": "2026-08-28",
          "prevClose": 6.7225,
          "change": -0.0147,
          "changePct": -0.22
        },
        "settled": {
          "date": "2026-08-28",
          "close": 6.7225,
          "prevDate": "2026-08-27",
          "prevClose": 6.7225,
          "change": 0,
          "changePct": 0
        },
        "quotePrice": 6.7078,
        "series": [
          {
            "date": "2026-08-24",
            "close": 6.721
          },
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
            "close": 6.7078
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
        "close": 31.6609,
        "prevClose": 31.8059,
        "change": -0.145,
        "changePct": -0.46,
        "asOf": "2026-08-28",
        "prevAsOf": "2026-08-27",
        "live": true,
        "latest": {
          "date": "2026-08-31",
          "close": 31.681,
          "prevDate": "2026-08-28",
          "prevClose": 31.6609,
          "change": 0.0201,
          "changePct": 0.06
        },
        "settled": {
          "date": "2026-08-28",
          "close": 31.6609,
          "prevDate": "2026-08-27",
          "prevClose": 31.8059,
          "change": -0.145,
          "changePct": -0.46
        },
        "quotePrice": 31.681,
        "series": [
          {
            "date": "2026-08-24",
            "close": 31.822
          },
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
            "close": 31.681
          }
        ],
        "currency": "TWD",
        "timezone": "Europe/London",
        "source": "Yahoo Finance chart API（日線）"
      }
    },
    "otcTwo": {
      "ok": false,
      "label": "櫃買指數 OTC",
      "error": "yahoo(%5ETWOII) → 報價過期：asOf 2024-10-12 距今 688 天（上限 10 天），該來源可能已停止更新此代號"
    },
    "taiex": {
      "ok": true,
      "label": "TAIEX（交叉驗證）",
      "symbol": "%5ETWII",
      "value": {
        "close": 46331.4492,
        "prevClose": 45975.2188,
        "change": 356.2304,
        "changePct": 0.77,
        "asOf": "2026-08-28",
        "prevAsOf": "2026-08-27",
        "live": false,
        "latest": {
          "date": "2026-08-28",
          "close": 46331.4492,
          "prevDate": "2026-08-27",
          "prevClose": 45975.2188,
          "change": 356.2304,
          "changePct": 0.77
        },
        "settled": {
          "date": "2026-08-28",
          "close": 46331.4492,
          "prevDate": "2026-08-27",
          "prevClose": 45975.2188,
          "change": 356.2304,
          "changePct": 0.77
        },
        "quotePrice": 46128.47,
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
            "date": "2026-08-28",
            "close": 46331.4492
          }
        ],
        "currency": "TWD",
        "timezone": "Asia/Taipei",
        "source": "Yahoo Finance chart API（日線）"
      }
    }
  }
};
