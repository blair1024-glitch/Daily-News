/**
 * market-global.js — 由 GitHub Actions 自動產生，請勿手動編輯。
 * 產生器：scripts/fetch-global-market.mjs
 *
 * 國際行情中繼資料，供每日 dashboard 更新流程讀用，不會被 index.html 載入。
 * ok:false 代表該標的當次抓不到，error 說明原因——請據實標註，不要沿用舊值。
 */
window.MARKET_GLOBAL = {
  "fetchedAt": "2026-08-25T11:27:28.303Z",
  "okCount": 16,
  "totalCount": 17,
  "items": {
    "sox": {
      "ok": true,
      "label": "費城半導體 SOX",
      "symbol": "%5ESOX",
      "value": {
        "close": 11423.1699,
        "prevClose": 11740.3701,
        "change": -317.2002,
        "changePct": -2.7,
        "asOf": "2026-08-24",
        "prevAsOf": "2026-08-21",
        "live": false,
        "latest": {
          "date": "2026-08-24",
          "close": 11423.1699,
          "prevDate": "2026-08-21",
          "prevClose": 11740.3701,
          "change": -317.2002,
          "changePct": -2.7
        },
        "settled": {
          "date": "2026-08-24",
          "close": 11423.1699,
          "prevDate": "2026-08-21",
          "prevClose": 11740.3701,
          "change": -317.2002,
          "changePct": -2.7
        },
        "quotePrice": 11423.169,
        "series": [
          {
            "date": "2026-08-17",
            "close": 12621
          },
          {
            "date": "2026-08-18",
            "close": 11992.46
          },
          {
            "date": "2026-08-19",
            "close": 11738.2305
          },
          {
            "date": "2026-08-20",
            "close": 11800.0195
          },
          {
            "date": "2026-08-21",
            "close": 11740.3701
          },
          {
            "date": "2026-08-24",
            "close": 11423.1699
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
        "close": 15.85,
        "prevClose": 15.13,
        "change": 0.72,
        "changePct": 4.76,
        "asOf": "2026-08-24",
        "prevAsOf": "2026-08-21",
        "live": true,
        "latest": {
          "date": "2026-08-25",
          "close": 15.82,
          "prevDate": "2026-08-24",
          "prevClose": 15.85,
          "change": -0.03,
          "changePct": -0.19
        },
        "settled": {
          "date": "2026-08-24",
          "close": 15.85,
          "prevDate": "2026-08-21",
          "prevClose": 15.13,
          "change": 0.72,
          "changePct": 4.76
        },
        "quotePrice": 15.82,
        "series": [
          {
            "date": "2026-08-18",
            "close": 15.84
          },
          {
            "date": "2026-08-19",
            "close": 14.89
          },
          {
            "date": "2026-08-20",
            "close": 16.01
          },
          {
            "date": "2026-08-21",
            "close": 15.13
          },
          {
            "date": "2026-08-24",
            "close": 15.85
          },
          {
            "date": "2026-08-25",
            "close": 15.82
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
        "close": 7652.8599,
        "prevClose": 7674.3701,
        "change": -21.5102,
        "changePct": -0.28,
        "asOf": "2026-08-24",
        "prevAsOf": "2026-08-21",
        "live": false,
        "latest": {
          "date": "2026-08-24",
          "close": 7652.8599,
          "prevDate": "2026-08-21",
          "prevClose": 7674.3701,
          "change": -21.5102,
          "changePct": -0.28
        },
        "settled": {
          "date": "2026-08-24",
          "close": 7652.8599,
          "prevDate": "2026-08-21",
          "prevClose": 7674.3701,
          "change": -21.5102,
          "changePct": -0.28
        },
        "quotePrice": 7652.86,
        "series": [
          {
            "date": "2026-08-17",
            "close": 7745.0601
          },
          {
            "date": "2026-08-18",
            "close": 7691.7598
          },
          {
            "date": "2026-08-19",
            "close": 7707.98
          },
          {
            "date": "2026-08-20",
            "close": 7641.1602
          },
          {
            "date": "2026-08-21",
            "close": 7674.3701
          },
          {
            "date": "2026-08-24",
            "close": 7652.8599
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
        "close": 25980.1895,
        "prevClose": 26180.4609,
        "change": -200.2714,
        "changePct": -0.76,
        "asOf": "2026-08-24",
        "prevAsOf": "2026-08-21",
        "live": false,
        "latest": {
          "date": "2026-08-24",
          "close": 25980.1895,
          "prevDate": "2026-08-21",
          "prevClose": 26180.4609,
          "change": -200.2714,
          "changePct": -0.76
        },
        "settled": {
          "date": "2026-08-24",
          "close": 25980.1895,
          "prevDate": "2026-08-21",
          "prevClose": 26180.4609,
          "change": -200.2714,
          "changePct": -0.76
        },
        "quotePrice": 25980.191,
        "series": [
          {
            "date": "2026-08-17",
            "close": 26644.9102
          },
          {
            "date": "2026-08-18",
            "close": 26289.7109
          },
          {
            "date": "2026-08-19",
            "close": 26331.0898
          },
          {
            "date": "2026-08-20",
            "close": 26067.1699
          },
          {
            "date": "2026-08-21",
            "close": 26180.4609
          },
          {
            "date": "2026-08-24",
            "close": 25980.1895
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
        "close": 53417.1602,
        "prevClose": 53277.0117,
        "change": 140.1485,
        "changePct": 0.26,
        "asOf": "2026-08-24",
        "prevAsOf": "2026-08-21",
        "live": false,
        "latest": {
          "date": "2026-08-24",
          "close": 53417.1602,
          "prevDate": "2026-08-21",
          "prevClose": 53277.0117,
          "change": 140.1485,
          "changePct": 0.26
        },
        "settled": {
          "date": "2026-08-24",
          "close": 53417.1602,
          "prevDate": "2026-08-21",
          "prevClose": 53277.0117,
          "change": 140.1485,
          "changePct": 0.26
        },
        "quotePrice": 53417.2,
        "series": [
          {
            "date": "2026-08-17",
            "close": 53459.7813
          },
          {
            "date": "2026-08-18",
            "close": 53343.3984
          },
          {
            "date": "2026-08-19",
            "close": 53463.0508
          },
          {
            "date": "2026-08-20",
            "close": 52759.2109
          },
          {
            "date": "2026-08-21",
            "close": 53277.0117
          },
          {
            "date": "2026-08-24",
            "close": 53417.1602
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
        "close": 4.704,
        "prevClose": 4.738,
        "change": -0.034,
        "changePct": -0.72,
        "asOf": "2026-08-24",
        "prevAsOf": "2026-08-21",
        "live": false,
        "latest": {
          "date": "2026-08-24",
          "close": 4.704,
          "prevDate": "2026-08-21",
          "prevClose": 4.738,
          "change": -0.034,
          "changePct": -0.72
        },
        "settled": {
          "date": "2026-08-24",
          "close": 4.704,
          "prevDate": "2026-08-21",
          "prevClose": 4.738,
          "change": -0.034,
          "changePct": -0.72
        },
        "quotePrice": 4.704,
        "series": [
          {
            "date": "2026-08-17",
            "close": 4.724
          },
          {
            "date": "2026-08-18",
            "close": 4.706
          },
          {
            "date": "2026-08-19",
            "close": 4.653
          },
          {
            "date": "2026-08-20",
            "close": 4.696
          },
          {
            "date": "2026-08-21",
            "close": 4.738
          },
          {
            "date": "2026-08-24",
            "close": 4.704
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
        "close": 5.231,
        "prevClose": 5.276,
        "change": -0.045,
        "changePct": -0.85,
        "asOf": "2026-08-24",
        "prevAsOf": "2026-08-21",
        "live": false,
        "latest": {
          "date": "2026-08-24",
          "close": 5.231,
          "prevDate": "2026-08-21",
          "prevClose": 5.276,
          "change": -0.045,
          "changePct": -0.85
        },
        "settled": {
          "date": "2026-08-24",
          "close": 5.231,
          "prevDate": "2026-08-21",
          "prevClose": 5.276,
          "change": -0.045,
          "changePct": -0.85
        },
        "quotePrice": 5.231,
        "series": [
          {
            "date": "2026-08-17",
            "close": 5.309
          },
          {
            "date": "2026-08-18",
            "close": 5.285
          },
          {
            "date": "2026-08-19",
            "close": 5.194
          },
          {
            "date": "2026-08-20",
            "close": 5.237
          },
          {
            "date": "2026-08-21",
            "close": 5.276
          },
          {
            "date": "2026-08-24",
            "close": 5.231
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
        "close": 4.408,
        "prevClose": 4.424,
        "change": -0.016,
        "changePct": -0.36,
        "asOf": "2026-08-24",
        "prevAsOf": "2026-08-21",
        "live": false,
        "latest": {
          "date": "2026-08-24",
          "close": 4.408,
          "prevDate": "2026-08-21",
          "prevClose": 4.424,
          "change": -0.016,
          "changePct": -0.36
        },
        "settled": {
          "date": "2026-08-24",
          "close": 4.408,
          "prevDate": "2026-08-21",
          "prevClose": 4.424,
          "change": -0.016,
          "changePct": -0.36
        },
        "quotePrice": 4.408,
        "series": [
          {
            "date": "2026-08-17",
            "close": 4.376
          },
          {
            "date": "2026-08-18",
            "close": 4.367
          },
          {
            "date": "2026-08-19",
            "close": 4.353
          },
          {
            "date": "2026-08-20",
            "close": 4.387
          },
          {
            "date": "2026-08-21",
            "close": 4.424
          },
          {
            "date": "2026-08-24",
            "close": 4.408
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
        "close": 99,
        "prevClose": 98.8,
        "change": 0.2,
        "changePct": 0.2,
        "asOf": "2026-08-24",
        "prevAsOf": "2026-08-21",
        "live": true,
        "latest": {
          "date": "2026-08-25",
          "close": 99.048,
          "prevDate": "2026-08-24",
          "prevClose": 99,
          "change": 0.048,
          "changePct": 0.05
        },
        "settled": {
          "date": "2026-08-24",
          "close": 99,
          "prevDate": "2026-08-21",
          "prevClose": 98.8,
          "change": 0.2,
          "changePct": 0.2
        },
        "quotePrice": 99.048,
        "series": [
          {
            "date": "2026-08-18",
            "close": 99.65
          },
          {
            "date": "2026-08-19",
            "close": 98.83
          },
          {
            "date": "2026-08-20",
            "close": 98.9
          },
          {
            "date": "2026-08-21",
            "close": 98.8
          },
          {
            "date": "2026-08-24",
            "close": 99
          },
          {
            "date": "2026-08-25",
            "close": 99.048
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
        "close": 85.01,
        "prevClose": 87.06,
        "change": -2.05,
        "changePct": -2.35,
        "asOf": "2026-08-24",
        "prevAsOf": "2026-08-21",
        "live": true,
        "latest": {
          "date": "2026-08-25",
          "close": 82.57,
          "prevDate": "2026-08-24",
          "prevClose": 85.01,
          "change": -2.44,
          "changePct": -2.87
        },
        "settled": {
          "date": "2026-08-24",
          "close": 85.01,
          "prevDate": "2026-08-21",
          "prevClose": 87.06,
          "change": -2.05,
          "changePct": -2.35
        },
        "quotePrice": 82.57,
        "series": [
          {
            "date": "2026-08-18",
            "close": 84.94
          },
          {
            "date": "2026-08-19",
            "close": 85.83
          },
          {
            "date": "2026-08-20",
            "close": 87.83
          },
          {
            "date": "2026-08-21",
            "close": 87.06
          },
          {
            "date": "2026-08-24",
            "close": 85.01
          },
          {
            "date": "2026-08-25",
            "close": 82.57
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
        "close": 92.17,
        "prevClose": 94.39,
        "change": -2.22,
        "changePct": -2.35,
        "asOf": "2026-08-24",
        "prevAsOf": "2026-08-21",
        "live": true,
        "latest": {
          "date": "2026-08-25",
          "close": 88.19,
          "prevDate": "2026-08-24",
          "prevClose": 92.17,
          "change": -3.98,
          "changePct": -4.32
        },
        "settled": {
          "date": "2026-08-24",
          "close": 92.17,
          "prevDate": "2026-08-21",
          "prevClose": 94.39,
          "change": -2.22,
          "changePct": -2.35
        },
        "quotePrice": 88.19,
        "series": [
          {
            "date": "2026-08-18",
            "close": 91.02
          },
          {
            "date": "2026-08-19",
            "close": 91.62
          },
          {
            "date": "2026-08-20",
            "close": 93.78
          },
          {
            "date": "2026-08-21",
            "close": 94.39
          },
          {
            "date": "2026-08-24",
            "close": 92.17
          },
          {
            "date": "2026-08-25",
            "close": 88.19
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
        "close": 4640.7998,
        "prevClose": 4624.1001,
        "change": 16.6997,
        "changePct": 0.36,
        "asOf": "2026-08-24",
        "prevAsOf": "2026-08-21",
        "live": true,
        "latest": {
          "date": "2026-08-25",
          "close": 4696.2998,
          "prevDate": "2026-08-24",
          "prevClose": 4640.7998,
          "change": 55.5,
          "changePct": 1.2
        },
        "settled": {
          "date": "2026-08-24",
          "close": 4640.7998,
          "prevDate": "2026-08-21",
          "prevClose": 4624.1001,
          "change": 16.6997,
          "changePct": 0.36
        },
        "quotePrice": 4696.3,
        "series": [
          {
            "date": "2026-08-18",
            "close": 4366
          },
          {
            "date": "2026-08-19",
            "close": 4489.3999
          },
          {
            "date": "2026-08-20",
            "close": 4516.2998
          },
          {
            "date": "2026-08-21",
            "close": 4624.1001
          },
          {
            "date": "2026-08-24",
            "close": 4640.7998
          },
          {
            "date": "2026-08-25",
            "close": 4696.2998
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
        "close": 158.904,
        "prevClose": 158.883,
        "change": 0.021,
        "changePct": 0.01,
        "asOf": "2026-08-24",
        "prevAsOf": "2026-08-21",
        "live": true,
        "latest": {
          "date": "2026-08-25",
          "close": 159.314,
          "prevDate": "2026-08-24",
          "prevClose": 158.904,
          "change": 0.41,
          "changePct": 0.26
        },
        "settled": {
          "date": "2026-08-24",
          "close": 158.904,
          "prevDate": "2026-08-21",
          "prevClose": 158.883,
          "change": 0.021,
          "changePct": 0.01
        },
        "quotePrice": 159.314,
        "series": [
          {
            "date": "2026-08-18",
            "close": 159.34
          },
          {
            "date": "2026-08-19",
            "close": 159.55
          },
          {
            "date": "2026-08-20",
            "close": 158.276
          },
          {
            "date": "2026-08-21",
            "close": 158.883
          },
          {
            "date": "2026-08-24",
            "close": 158.904
          },
          {
            "date": "2026-08-25",
            "close": 159.314
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
        "close": 6.721,
        "prevClose": 6.7225,
        "change": -0.0015,
        "changePct": -0.02,
        "asOf": "2026-08-24",
        "prevAsOf": "2026-08-21",
        "live": true,
        "latest": {
          "date": "2026-08-25",
          "close": 6.7078,
          "prevDate": "2026-08-24",
          "prevClose": 6.721,
          "change": -0.0132,
          "changePct": -0.2
        },
        "settled": {
          "date": "2026-08-24",
          "close": 6.721,
          "prevDate": "2026-08-21",
          "prevClose": 6.7225,
          "change": -0.0015,
          "changePct": -0.02
        },
        "quotePrice": 6.7078,
        "series": [
          {
            "date": "2026-08-18",
            "close": 6.7399
          },
          {
            "date": "2026-08-19",
            "close": 6.7426
          },
          {
            "date": "2026-08-20",
            "close": 6.7295
          },
          {
            "date": "2026-08-21",
            "close": 6.7225
          },
          {
            "date": "2026-08-24",
            "close": 6.721
          },
          {
            "date": "2026-08-25",
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
        "close": 31.822,
        "prevClose": 31.8383,
        "change": -0.0163,
        "changePct": -0.05,
        "asOf": "2026-08-24",
        "prevAsOf": "2026-08-21",
        "live": true,
        "latest": {
          "date": "2026-08-25",
          "close": 31.861,
          "prevDate": "2026-08-24",
          "prevClose": 31.822,
          "change": 0.039,
          "changePct": 0.12
        },
        "settled": {
          "date": "2026-08-24",
          "close": 31.822,
          "prevDate": "2026-08-21",
          "prevClose": 31.8383,
          "change": -0.0163,
          "changePct": -0.05
        },
        "quotePrice": 31.861,
        "series": [
          {
            "date": "2026-08-18",
            "close": 31.8503
          },
          {
            "date": "2026-08-19",
            "close": 31.8819
          },
          {
            "date": "2026-08-20",
            "close": 31.8151
          },
          {
            "date": "2026-08-21",
            "close": 31.8383
          },
          {
            "date": "2026-08-24",
            "close": 31.822
          },
          {
            "date": "2026-08-25",
            "close": 31.861
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
      "error": "yahoo(%5ETWOII) → 報價過期：asOf 2024-10-12 距今 682 天（上限 10 天），該來源可能已停止更新此代號"
    },
    "taiex": {
      "ok": true,
      "label": "TAIEX（交叉驗證）",
      "symbol": "%5ETWII",
      "value": {
        "close": 45169.4609,
        "prevClose": 44762.3203,
        "change": 407.1406,
        "changePct": 0.91,
        "asOf": "2026-08-25",
        "prevAsOf": "2026-08-24",
        "live": false,
        "latest": {
          "date": "2026-08-25",
          "close": 45169.4609,
          "prevDate": "2026-08-24",
          "prevClose": 44762.3203,
          "change": 407.1406,
          "changePct": 0.91
        },
        "settled": {
          "date": "2026-08-25",
          "close": 45169.4609,
          "prevDate": "2026-08-24",
          "prevClose": 44762.3203,
          "change": 407.1406,
          "changePct": 0.91
        },
        "quotePrice": 45169.46,
        "series": [
          {
            "date": "2026-08-18",
            "close": 45308.6797
          },
          {
            "date": "2026-08-19",
            "close": 44719.3516
          },
          {
            "date": "2026-08-20",
            "close": 44933.7383
          },
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
          }
        ],
        "currency": "TWD",
        "timezone": "Asia/Taipei",
        "source": "Yahoo Finance chart API（日線）"
      }
    }
  }
};
