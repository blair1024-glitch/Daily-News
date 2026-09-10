/**
 * market-global.js — 由 GitHub Actions 自動產生，請勿手動編輯。
 * 產生器：scripts/fetch-global-market.mjs
 *
 * 國際行情中繼資料，供每日 dashboard 更新流程讀用，不會被 index.html 載入。
 * ok:false 代表該標的當次抓不到，error 說明原因——請據實標註，不要沿用舊值。
 */
window.MARKET_GLOBAL = {
  "fetchedAt": "2026-09-10T23:34:14.952Z",
  "okCount": 16,
  "totalCount": 16,
  "items": {
    "sox": {
      "ok": true,
      "label": "費城半導體 SOX",
      "symbol": "%5ESOX",
      "value": {
        "close": 11614.167,
        "prevClose": 11931.3203,
        "change": -317.1533,
        "changePct": -2.66,
        "asOf": "2026-09-10",
        "prevAsOf": "2026-09-09",
        "gapDays": 1,
        "gapSuspect": false,
        "live": false,
        "latest": {
          "date": "2026-09-10",
          "close": 11614.167,
          "prevDate": "2026-09-09",
          "prevClose": 11931.3203,
          "change": -317.1533,
          "changePct": -2.66,
          "gapDays": 1,
          "gapSuspect": false
        },
        "settled": {
          "date": "2026-09-10",
          "close": 11614.167,
          "prevDate": "2026-09-09",
          "prevClose": 11931.3203,
          "change": -317.1533,
          "changePct": -2.66,
          "gapDays": 1,
          "gapSuspect": false
        },
        "quotePrice": 11614.167,
        "series": [
          {
            "date": "2026-09-02",
            "close": 11339.25
          },
          {
            "date": "2026-09-03",
            "close": 11352.1299
          },
          {
            "date": "2026-09-04",
            "close": 11735.2598
          },
          {
            "date": "2026-09-08",
            "close": 11887.8701
          },
          {
            "date": "2026-09-09",
            "close": 11931.3203
          },
          {
            "date": "2026-09-10",
            "close": 11614.167
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
        "close": 17.84,
        "prevClose": 16.46,
        "change": 1.38,
        "changePct": 8.38,
        "asOf": "2026-09-10",
        "prevAsOf": "2026-09-09",
        "gapDays": 1,
        "gapSuspect": false,
        "live": false,
        "latest": {
          "date": "2026-09-10",
          "close": 17.84,
          "prevDate": "2026-09-09",
          "prevClose": 16.46,
          "change": 1.38,
          "changePct": 8.38,
          "gapDays": 1,
          "gapSuspect": false
        },
        "settled": {
          "date": "2026-09-10",
          "close": 17.84,
          "prevDate": "2026-09-09",
          "prevClose": 16.46,
          "change": 1.38,
          "changePct": 8.38,
          "gapDays": 1,
          "gapSuspect": false
        },
        "quotePrice": 17.84,
        "series": [
          {
            "date": "2026-09-03",
            "close": 14.32
          },
          {
            "date": "2026-09-04",
            "close": 14.53
          },
          {
            "date": "2026-09-07",
            "close": 15.3
          },
          {
            "date": "2026-09-08",
            "close": 15.72
          },
          {
            "date": "2026-09-09",
            "close": 16.46
          },
          {
            "date": "2026-09-10",
            "close": 17.84
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
        "close": 7591.7002,
        "prevClose": 7636.3599,
        "change": -44.6597,
        "changePct": -0.58,
        "asOf": "2026-09-10",
        "prevAsOf": "2026-09-09",
        "gapDays": 1,
        "gapSuspect": false,
        "live": false,
        "latest": {
          "date": "2026-09-10",
          "close": 7591.7002,
          "prevDate": "2026-09-09",
          "prevClose": 7636.3599,
          "change": -44.6597,
          "changePct": -0.58,
          "gapDays": 1,
          "gapSuspect": false
        },
        "settled": {
          "date": "2026-09-10",
          "close": 7591.7002,
          "prevDate": "2026-09-09",
          "prevClose": 7636.3599,
          "change": -44.6597,
          "changePct": -0.58,
          "gapDays": 1,
          "gapSuspect": false
        },
        "quotePrice": 7591.7,
        "series": [
          {
            "date": "2026-09-02",
            "close": 7666.6001
          },
          {
            "date": "2026-09-03",
            "close": 7747.71
          },
          {
            "date": "2026-09-04",
            "close": 7718.6001
          },
          {
            "date": "2026-09-08",
            "close": 7673.52
          },
          {
            "date": "2026-09-09",
            "close": 7636.3599
          },
          {
            "date": "2026-09-10",
            "close": 7591.7002
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
        "close": 26081.7246,
        "prevClose": 26253.3398,
        "change": -171.6152,
        "changePct": -0.65,
        "asOf": "2026-09-10",
        "prevAsOf": "2026-09-09",
        "gapDays": 1,
        "gapSuspect": false,
        "live": false,
        "latest": {
          "date": "2026-09-10",
          "close": 26081.7246,
          "prevDate": "2026-09-09",
          "prevClose": 26253.3398,
          "change": -171.6152,
          "changePct": -0.65,
          "gapDays": 1,
          "gapSuspect": false
        },
        "settled": {
          "date": "2026-09-10",
          "close": 26081.7246,
          "prevDate": "2026-09-09",
          "prevClose": 26253.3398,
          "change": -171.6152,
          "changePct": -0.65,
          "gapDays": 1,
          "gapSuspect": false
        },
        "quotePrice": 26081.725,
        "series": [
          {
            "date": "2026-09-02",
            "close": 26217.8301
          },
          {
            "date": "2026-09-03",
            "close": 26584.0605
          },
          {
            "date": "2026-09-04",
            "close": 26506.9902
          },
          {
            "date": "2026-09-08",
            "close": 26421.4102
          },
          {
            "date": "2026-09-09",
            "close": 26253.3398
          },
          {
            "date": "2026-09-10",
            "close": 26081.7246
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
        "close": 52064.1016,
        "prevClose": 52380.6602,
        "change": -316.5586,
        "changePct": -0.6,
        "asOf": "2026-09-10",
        "prevAsOf": "2026-09-09",
        "gapDays": 1,
        "gapSuspect": false,
        "live": false,
        "latest": {
          "date": "2026-09-10",
          "close": 52064.1016,
          "prevDate": "2026-09-09",
          "prevClose": 52380.6602,
          "change": -316.5586,
          "changePct": -0.6,
          "gapDays": 1,
          "gapSuspect": false
        },
        "settled": {
          "date": "2026-09-10",
          "close": 52064.1016,
          "prevDate": "2026-09-09",
          "prevClose": 52380.6602,
          "change": -316.5586,
          "changePct": -0.6,
          "gapDays": 1,
          "gapSuspect": false
        },
        "quotePrice": 52064.1,
        "series": [
          {
            "date": "2026-09-02",
            "close": 53061.9492
          },
          {
            "date": "2026-09-03",
            "close": 53686.1094
          },
          {
            "date": "2026-09-04",
            "close": 53414.25
          },
          {
            "date": "2026-09-08",
            "close": 52786.0703
          },
          {
            "date": "2026-09-09",
            "close": 52380.6602
          },
          {
            "date": "2026-09-10",
            "close": 52064.1016
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
        "close": 4.944,
        "prevClose": 4.837,
        "change": 0.107,
        "changePct": 2.21,
        "asOf": "2026-09-10",
        "prevAsOf": "2026-09-09",
        "gapDays": 1,
        "gapSuspect": false,
        "live": false,
        "latest": {
          "date": "2026-09-10",
          "close": 4.944,
          "prevDate": "2026-09-09",
          "prevClose": 4.837,
          "change": 0.107,
          "changePct": 2.21,
          "gapDays": 1,
          "gapSuspect": false
        },
        "settled": {
          "date": "2026-09-10",
          "close": 4.944,
          "prevDate": "2026-09-09",
          "prevClose": 4.837,
          "change": 0.107,
          "changePct": 2.21,
          "gapDays": 1,
          "gapSuspect": false
        },
        "quotePrice": 4.944,
        "series": [
          {
            "date": "2026-09-02",
            "close": 4.796
          },
          {
            "date": "2026-09-03",
            "close": 4.762
          },
          {
            "date": "2026-09-04",
            "close": 4.784
          },
          {
            "date": "2026-09-08",
            "close": 4.806
          },
          {
            "date": "2026-09-09",
            "close": 4.837
          },
          {
            "date": "2026-09-10",
            "close": 4.944
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
        "close": 5.361,
        "prevClose": 5.286,
        "change": 0.075,
        "changePct": 1.42,
        "asOf": "2026-09-10",
        "prevAsOf": "2026-09-09",
        "gapDays": 1,
        "gapSuspect": false,
        "live": false,
        "latest": {
          "date": "2026-09-10",
          "close": 5.361,
          "prevDate": "2026-09-09",
          "prevClose": 5.286,
          "change": 0.075,
          "changePct": 1.42,
          "gapDays": 1,
          "gapSuspect": false
        },
        "settled": {
          "date": "2026-09-10",
          "close": 5.361,
          "prevDate": "2026-09-09",
          "prevClose": 5.286,
          "change": 0.075,
          "changePct": 1.42,
          "gapDays": 1,
          "gapSuspect": false
        },
        "quotePrice": 5.361,
        "series": [
          {
            "date": "2026-09-02",
            "close": 5.267
          },
          {
            "date": "2026-09-03",
            "close": 5.243
          },
          {
            "date": "2026-09-04",
            "close": 5.246
          },
          {
            "date": "2026-09-08",
            "close": 5.264
          },
          {
            "date": "2026-09-09",
            "close": 5.286
          },
          {
            "date": "2026-09-10",
            "close": 5.361
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
        "close": 4.733,
        "prevClose": 4.614,
        "change": 0.119,
        "changePct": 2.58,
        "asOf": "2026-09-10",
        "prevAsOf": "2026-09-09",
        "gapDays": 1,
        "gapSuspect": false,
        "live": false,
        "latest": {
          "date": "2026-09-10",
          "close": 4.733,
          "prevDate": "2026-09-09",
          "prevClose": 4.614,
          "change": 0.119,
          "changePct": 2.58,
          "gapDays": 1,
          "gapSuspect": false
        },
        "settled": {
          "date": "2026-09-10",
          "close": 4.733,
          "prevDate": "2026-09-09",
          "prevClose": 4.614,
          "change": 0.119,
          "changePct": 2.58,
          "gapDays": 1,
          "gapSuspect": false
        },
        "quotePrice": 4.733,
        "series": [
          {
            "date": "2026-09-02",
            "close": 4.552
          },
          {
            "date": "2026-09-03",
            "close": 4.509
          },
          {
            "date": "2026-09-04",
            "close": 4.55
          },
          {
            "date": "2026-09-08",
            "close": 4.573
          },
          {
            "date": "2026-09-09",
            "close": 4.614
          },
          {
            "date": "2026-09-10",
            "close": 4.733
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
        "close": 98.77,
        "prevClose": 98.84,
        "change": -0.07,
        "changePct": -0.07,
        "asOf": "2026-09-09",
        "prevAsOf": "2026-09-08",
        "gapDays": 1,
        "gapSuspect": false,
        "live": true,
        "latest": {
          "date": "2026-09-10",
          "close": 99.09,
          "prevDate": "2026-09-09",
          "prevClose": 98.77,
          "change": 0.32,
          "changePct": 0.32,
          "gapDays": 1,
          "gapSuspect": false
        },
        "settled": {
          "date": "2026-09-09",
          "close": 98.77,
          "prevDate": "2026-09-08",
          "prevClose": 98.84,
          "change": -0.07,
          "changePct": -0.07,
          "gapDays": 1,
          "gapSuspect": false
        },
        "quotePrice": 99.09,
        "series": [
          {
            "date": "2026-09-02",
            "close": 99.56
          },
          {
            "date": "2026-09-03",
            "close": 99
          },
          {
            "date": "2026-09-04",
            "close": 99.16
          },
          {
            "date": "2026-09-08",
            "close": 98.84
          },
          {
            "date": "2026-09-09",
            "close": 98.77
          },
          {
            "date": "2026-09-10",
            "close": 99.09
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
        "close": 96.05,
        "prevClose": 93.03,
        "change": 3.02,
        "changePct": 3.25,
        "asOf": "2026-09-09",
        "prevAsOf": "2026-09-08",
        "gapDays": 1,
        "gapSuspect": false,
        "live": true,
        "latest": {
          "date": "2026-09-10",
          "close": 103.85,
          "prevDate": "2026-09-09",
          "prevClose": 96.05,
          "change": 7.8,
          "changePct": 8.12,
          "gapDays": 1,
          "gapSuspect": false
        },
        "settled": {
          "date": "2026-09-09",
          "close": 96.05,
          "prevDate": "2026-09-08",
          "prevClose": 93.03,
          "change": 3.02,
          "changePct": 3.25,
          "gapDays": 1,
          "gapSuspect": false
        },
        "quotePrice": 103.85,
        "series": [
          {
            "date": "2026-09-02",
            "close": 91.01
          },
          {
            "date": "2026-09-03",
            "close": 91.3
          },
          {
            "date": "2026-09-04",
            "close": 91.48
          },
          {
            "date": "2026-09-08",
            "close": 93.03
          },
          {
            "date": "2026-09-09",
            "close": 96.05
          },
          {
            "date": "2026-09-10",
            "close": 103.85
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
        "close": 101.21,
        "prevClose": 97.92,
        "change": 3.29,
        "changePct": 3.36,
        "asOf": "2026-09-09",
        "prevAsOf": "2026-09-08",
        "gapDays": 1,
        "gapSuspect": false,
        "live": true,
        "latest": {
          "date": "2026-09-10",
          "close": 108.92,
          "prevDate": "2026-09-09",
          "prevClose": 101.21,
          "change": 7.71,
          "changePct": 7.62,
          "gapDays": 1,
          "gapSuspect": false
        },
        "settled": {
          "date": "2026-09-09",
          "close": 101.21,
          "prevDate": "2026-09-08",
          "prevClose": 97.92,
          "change": 3.29,
          "changePct": 3.36,
          "gapDays": 1,
          "gapSuspect": false
        },
        "quotePrice": 108.92,
        "series": [
          {
            "date": "2026-09-02",
            "close": 95.63
          },
          {
            "date": "2026-09-03",
            "close": 95.52
          },
          {
            "date": "2026-09-04",
            "close": 96.28
          },
          {
            "date": "2026-09-08",
            "close": 97.92
          },
          {
            "date": "2026-09-09",
            "close": 101.21
          },
          {
            "date": "2026-09-10",
            "close": 108.92
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
        "close": 4416,
        "prevClose": 4393.8999,
        "change": 22.1001,
        "changePct": 0.5,
        "asOf": "2026-09-09",
        "prevAsOf": "2026-09-08",
        "gapDays": 1,
        "gapSuspect": false,
        "live": true,
        "latest": {
          "date": "2026-09-10",
          "close": 4358.2998,
          "prevDate": "2026-09-09",
          "prevClose": 4416,
          "change": -57.7002,
          "changePct": -1.31,
          "gapDays": 1,
          "gapSuspect": false
        },
        "settled": {
          "date": "2026-09-09",
          "close": 4416,
          "prevDate": "2026-09-08",
          "prevClose": 4393.8999,
          "change": 22.1001,
          "changePct": 0.5,
          "gapDays": 1,
          "gapSuspect": false
        },
        "quotePrice": 4358.3,
        "series": [
          {
            "date": "2026-09-02",
            "close": 4366.2998
          },
          {
            "date": "2026-09-03",
            "close": 4491.7002
          },
          {
            "date": "2026-09-04",
            "close": 4429.7998
          },
          {
            "date": "2026-09-08",
            "close": 4393.8999
          },
          {
            "date": "2026-09-09",
            "close": 4416
          },
          {
            "date": "2026-09-10",
            "close": 4358.2998
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
        "close": 153.573,
        "prevClose": 153.478,
        "change": 0.095,
        "changePct": 0.06,
        "asOf": "2026-09-10",
        "prevAsOf": "2026-09-09",
        "gapDays": 1,
        "gapSuspect": false,
        "live": true,
        "latest": {
          "date": "2026-09-11",
          "close": 154.555,
          "prevDate": "2026-09-10",
          "prevClose": 153.573,
          "change": 0.982,
          "changePct": 0.64,
          "gapDays": 1,
          "gapSuspect": false
        },
        "settled": {
          "date": "2026-09-10",
          "close": 153.573,
          "prevDate": "2026-09-09",
          "prevClose": 153.478,
          "change": 0.095,
          "changePct": 0.06,
          "gapDays": 1,
          "gapSuspect": false
        },
        "quotePrice": 154.555,
        "series": [
          {
            "date": "2026-09-04",
            "close": 155.66
          },
          {
            "date": "2026-09-07",
            "close": 156.197
          },
          {
            "date": "2026-09-08",
            "close": 153.855
          },
          {
            "date": "2026-09-09",
            "close": 153.478
          },
          {
            "date": "2026-09-10",
            "close": 153.573
          },
          {
            "date": "2026-09-11",
            "close": 154.555
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
        "close": 6.7105,
        "prevClose": 6.7108,
        "change": -0.0003,
        "changePct": 0,
        "asOf": "2026-09-09",
        "prevAsOf": "2026-09-08",
        "gapDays": 1,
        "gapSuspect": false,
        "live": true,
        "latest": {
          "date": "2026-09-10",
          "close": 6.7105,
          "prevDate": "2026-09-09",
          "prevClose": 6.7105,
          "change": 0,
          "changePct": 0,
          "gapDays": 1,
          "gapSuspect": false
        },
        "settled": {
          "date": "2026-09-09",
          "close": 6.7105,
          "prevDate": "2026-09-08",
          "prevClose": 6.7108,
          "change": -0.0003,
          "changePct": 0,
          "gapDays": 1,
          "gapSuspect": false
        },
        "quotePrice": 6.702,
        "series": [
          {
            "date": "2026-09-03",
            "close": 6.719
          },
          {
            "date": "2026-09-04",
            "close": 6.719
          },
          {
            "date": "2026-09-07",
            "close": 6.7108
          },
          {
            "date": "2026-09-08",
            "close": 6.7108
          },
          {
            "date": "2026-09-09",
            "close": 6.7105
          },
          {
            "date": "2026-09-10",
            "close": 6.7105
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
        "close": 31.464,
        "prevClose": 31.4992,
        "change": -0.0352,
        "changePct": -0.11,
        "asOf": "2026-09-10",
        "prevAsOf": "2026-09-09",
        "gapDays": 1,
        "gapSuspect": false,
        "live": true,
        "latest": {
          "date": "2026-09-11",
          "close": 31.627,
          "prevDate": "2026-09-10",
          "prevClose": 31.464,
          "change": 0.163,
          "changePct": 0.52,
          "gapDays": 1,
          "gapSuspect": false
        },
        "settled": {
          "date": "2026-09-10",
          "close": 31.464,
          "prevDate": "2026-09-09",
          "prevClose": 31.4992,
          "change": -0.0352,
          "changePct": -0.11,
          "gapDays": 1,
          "gapSuspect": false
        },
        "quotePrice": 31.627,
        "series": [
          {
            "date": "2026-09-04",
            "close": 31.6954
          },
          {
            "date": "2026-09-07",
            "close": 31.621
          },
          {
            "date": "2026-09-08",
            "close": 31.5049
          },
          {
            "date": "2026-09-09",
            "close": 31.4992
          },
          {
            "date": "2026-09-10",
            "close": 31.464
          },
          {
            "date": "2026-09-11",
            "close": 31.627
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
        "close": 47183.3594,
        "prevClose": 47105.7813,
        "change": 77.5781,
        "changePct": 0.16,
        "asOf": "2026-09-09",
        "prevAsOf": "2026-09-08",
        "gapDays": 1,
        "gapSuspect": false,
        "live": false,
        "latest": {
          "date": "2026-09-09",
          "close": 47183.3594,
          "prevDate": "2026-09-08",
          "prevClose": 47105.7813,
          "change": 77.5781,
          "changePct": 0.16,
          "gapDays": 1,
          "gapSuspect": false
        },
        "settled": {
          "date": "2026-09-09",
          "close": 47183.3594,
          "prevDate": "2026-09-08",
          "prevClose": 47105.7813,
          "change": 77.5781,
          "changePct": 0.16,
          "gapDays": 1,
          "gapSuspect": false
        },
        "quotePrice": 46940.49,
        "series": [
          {
            "date": "2026-09-02",
            "close": 46164.7188
          },
          {
            "date": "2026-09-03",
            "close": 45857.6602
          },
          {
            "date": "2026-09-04",
            "close": 46551.1289
          },
          {
            "date": "2026-09-07",
            "close": 47326.2695
          },
          {
            "date": "2026-09-08",
            "close": 47105.7813
          },
          {
            "date": "2026-09-09",
            "close": 47183.3594
          }
        ],
        "currency": "TWD",
        "timezone": "Asia/Taipei",
        "source": "Yahoo Finance chart API（日線）"
      }
    }
  }
};
