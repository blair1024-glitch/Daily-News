/**
 * market-global.js — 由 GitHub Actions 自動產生，請勿手動編輯。
 * 產生器：scripts/fetch-global-market.mjs
 *
 * 國際行情中繼資料，供每日 dashboard 更新流程讀用，不會被 index.html 載入。
 * ok:false 代表該標的當次抓不到，error 說明原因——請據實標註，不要沿用舊值。
 */
window.MARKET_GLOBAL = {
  "fetchedAt": "2026-09-10T14:52:45.600Z",
  "okCount": 16,
  "totalCount": 16,
  "items": {
    "sox": {
      "ok": true,
      "label": "費城半導體 SOX",
      "symbol": "%5ESOX",
      "value": {
        "close": 11931.3203,
        "prevClose": 11887.8701,
        "change": 43.4502,
        "changePct": 0.37,
        "asOf": "2026-09-09",
        "prevAsOf": "2026-09-08",
        "gapDays": 1,
        "gapSuspect": false,
        "live": true,
        "latest": {
          "date": "2026-09-10",
          "close": 11697.1924,
          "prevDate": "2026-09-09",
          "prevClose": 11931.3203,
          "change": -234.1279,
          "changePct": -1.96,
          "gapDays": 1,
          "gapSuspect": false
        },
        "settled": {
          "date": "2026-09-09",
          "close": 11931.3203,
          "prevDate": "2026-09-08",
          "prevClose": 11887.8701,
          "change": 43.4502,
          "changePct": 0.37,
          "gapDays": 1,
          "gapSuspect": false
        },
        "quotePrice": 11697.192,
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
            "close": 11697.1924
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
        "close": 16.46,
        "prevClose": 15.72,
        "change": 0.74,
        "changePct": 4.71,
        "asOf": "2026-09-09",
        "prevAsOf": "2026-09-08",
        "gapDays": 1,
        "gapSuspect": false,
        "live": true,
        "latest": {
          "date": "2026-09-10",
          "close": 17.33,
          "prevDate": "2026-09-09",
          "prevClose": 16.46,
          "change": 0.87,
          "changePct": 5.29,
          "gapDays": 1,
          "gapSuspect": false
        },
        "settled": {
          "date": "2026-09-09",
          "close": 16.46,
          "prevDate": "2026-09-08",
          "prevClose": 15.72,
          "change": 0.74,
          "changePct": 4.71,
          "gapDays": 1,
          "gapSuspect": false
        },
        "quotePrice": 17.33,
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
            "close": 17.33
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
        "close": 7636.3599,
        "prevClose": 7673.52,
        "change": -37.1601,
        "changePct": -0.48,
        "asOf": "2026-09-09",
        "prevAsOf": "2026-09-08",
        "gapDays": 1,
        "gapSuspect": false,
        "live": true,
        "latest": {
          "date": "2026-09-10",
          "close": 7603.8301,
          "prevDate": "2026-09-09",
          "prevClose": 7636.3599,
          "change": -32.5298,
          "changePct": -0.43,
          "gapDays": 1,
          "gapSuspect": false
        },
        "settled": {
          "date": "2026-09-09",
          "close": 7636.3599,
          "prevDate": "2026-09-08",
          "prevClose": 7673.52,
          "change": -37.1601,
          "changePct": -0.48,
          "gapDays": 1,
          "gapSuspect": false
        },
        "quotePrice": 7603.83,
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
            "close": 7603.8301
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
        "close": 26253.3398,
        "prevClose": 26421.4102,
        "change": -168.0704,
        "changePct": -0.64,
        "asOf": "2026-09-09",
        "prevAsOf": "2026-09-08",
        "gapDays": 1,
        "gapSuspect": false,
        "live": true,
        "latest": {
          "date": "2026-09-10",
          "close": 26146.0586,
          "prevDate": "2026-09-09",
          "prevClose": 26253.3398,
          "change": -107.2812,
          "changePct": -0.41,
          "gapDays": 1,
          "gapSuspect": false
        },
        "settled": {
          "date": "2026-09-09",
          "close": 26253.3398,
          "prevDate": "2026-09-08",
          "prevClose": 26421.4102,
          "change": -168.0704,
          "changePct": -0.64,
          "gapDays": 1,
          "gapSuspect": false
        },
        "quotePrice": 26146.059,
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
            "close": 26146.0586
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
        "close": 52380.6602,
        "prevClose": 52786.0703,
        "change": -405.4101,
        "changePct": -0.77,
        "asOf": "2026-09-09",
        "prevAsOf": "2026-09-08",
        "gapDays": 1,
        "gapSuspect": false,
        "live": true,
        "latest": {
          "date": "2026-09-10",
          "close": 52160.3516,
          "prevDate": "2026-09-09",
          "prevClose": 52380.6602,
          "change": -220.3086,
          "changePct": -0.42,
          "gapDays": 1,
          "gapSuspect": false
        },
        "settled": {
          "date": "2026-09-09",
          "close": 52380.6602,
          "prevDate": "2026-09-08",
          "prevClose": 52786.0703,
          "change": -405.4101,
          "changePct": -0.77,
          "gapDays": 1,
          "gapSuspect": false
        },
        "quotePrice": 52160.35,
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
            "close": 52160.3516
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
        "close": 4.837,
        "prevClose": 4.806,
        "change": 0.031,
        "changePct": 0.65,
        "asOf": "2026-09-09",
        "prevAsOf": "2026-09-08",
        "gapDays": 1,
        "gapSuspect": false,
        "live": true,
        "latest": {
          "date": "2026-09-10",
          "close": 4.914,
          "prevDate": "2026-09-09",
          "prevClose": 4.837,
          "change": 0.077,
          "changePct": 1.59,
          "gapDays": 1,
          "gapSuspect": false
        },
        "settled": {
          "date": "2026-09-09",
          "close": 4.837,
          "prevDate": "2026-09-08",
          "prevClose": 4.806,
          "change": 0.031,
          "changePct": 0.65,
          "gapDays": 1,
          "gapSuspect": false
        },
        "quotePrice": 4.914,
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
            "close": 4.914
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
        "close": 5.286,
        "prevClose": 5.264,
        "change": 0.022,
        "changePct": 0.42,
        "asOf": "2026-09-09",
        "prevAsOf": "2026-09-08",
        "gapDays": 1,
        "gapSuspect": false,
        "live": true,
        "latest": {
          "date": "2026-09-10",
          "close": 5.338,
          "prevDate": "2026-09-09",
          "prevClose": 5.286,
          "change": 0.052,
          "changePct": 0.98,
          "gapDays": 1,
          "gapSuspect": false
        },
        "settled": {
          "date": "2026-09-09",
          "close": 5.286,
          "prevDate": "2026-09-08",
          "prevClose": 5.264,
          "change": 0.022,
          "changePct": 0.42,
          "gapDays": 1,
          "gapSuspect": false
        },
        "quotePrice": 5.3380003,
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
            "close": 5.338
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
        "close": 4.614,
        "prevClose": 4.573,
        "change": 0.041,
        "changePct": 0.9,
        "asOf": "2026-09-09",
        "prevAsOf": "2026-09-08",
        "gapDays": 1,
        "gapSuspect": false,
        "live": true,
        "latest": {
          "date": "2026-09-10",
          "close": 4.708,
          "prevDate": "2026-09-09",
          "prevClose": 4.614,
          "change": 0.094,
          "changePct": 2.04,
          "gapDays": 1,
          "gapSuspect": false
        },
        "settled": {
          "date": "2026-09-09",
          "close": 4.614,
          "prevDate": "2026-09-08",
          "prevClose": 4.573,
          "change": 0.041,
          "changePct": 0.9,
          "gapDays": 1,
          "gapSuspect": false
        },
        "quotePrice": 4.708,
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
            "close": 4.708
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
          "close": 98.929,
          "prevDate": "2026-09-09",
          "prevClose": 98.77,
          "change": 0.159,
          "changePct": 0.16,
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
        "quotePrice": 98.929,
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
            "close": 98.929
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
          "close": 99.64,
          "prevDate": "2026-09-09",
          "prevClose": 96.05,
          "change": 3.59,
          "changePct": 3.74,
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
        "quotePrice": 99.64,
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
            "close": 99.64
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
          "close": 105.05,
          "prevDate": "2026-09-09",
          "prevClose": 101.21,
          "change": 3.84,
          "changePct": 3.79,
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
        "quotePrice": 105.05,
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
            "close": 105.05
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
          "close": 4404.8999,
          "prevDate": "2026-09-09",
          "prevClose": 4416,
          "change": -11.1001,
          "changePct": -0.25,
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
        "quotePrice": 4404.9,
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
            "close": 4404.8999
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
        "close": 153.478,
        "prevClose": 153.855,
        "change": -0.377,
        "changePct": -0.25,
        "asOf": "2026-09-09",
        "prevAsOf": "2026-09-08",
        "gapDays": 1,
        "gapSuspect": false,
        "live": true,
        "latest": {
          "date": "2026-09-10",
          "close": 154.001,
          "prevDate": "2026-09-09",
          "prevClose": 153.478,
          "change": 0.523,
          "changePct": 0.34,
          "gapDays": 1,
          "gapSuspect": false
        },
        "settled": {
          "date": "2026-09-09",
          "close": 153.478,
          "prevDate": "2026-09-08",
          "prevClose": 153.855,
          "change": -0.377,
          "changePct": -0.25,
          "gapDays": 1,
          "gapSuspect": false
        },
        "quotePrice": 154.001,
        "series": [
          {
            "date": "2026-09-03",
            "close": 158.923
          },
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
            "close": 154.001
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
          "close": 6.7056,
          "prevDate": "2026-09-09",
          "prevClose": 6.7105,
          "change": -0.0049,
          "changePct": -0.07,
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
        "quotePrice": 6.7056,
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
            "close": 6.7056
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
        "close": 31.4992,
        "prevClose": 31.5049,
        "change": -0.0057,
        "changePct": -0.02,
        "asOf": "2026-09-09",
        "prevAsOf": "2026-09-08",
        "gapDays": 1,
        "gapSuspect": false,
        "live": true,
        "latest": {
          "date": "2026-09-10",
          "close": 31.636,
          "prevDate": "2026-09-09",
          "prevClose": 31.4992,
          "change": 0.1368,
          "changePct": 0.43,
          "gapDays": 1,
          "gapSuspect": false
        },
        "settled": {
          "date": "2026-09-09",
          "close": 31.4992,
          "prevDate": "2026-09-08",
          "prevClose": 31.5049,
          "change": -0.0057,
          "changePct": -0.02,
          "gapDays": 1,
          "gapSuspect": false
        },
        "quotePrice": 31.636,
        "series": [
          {
            "date": "2026-09-03",
            "close": 31.7262
          },
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
            "close": 31.636
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
        "close": 46940.4883,
        "prevClose": 47183.3594,
        "change": -242.8711,
        "changePct": -0.51,
        "asOf": "2026-09-10",
        "prevAsOf": "2026-09-09",
        "gapDays": 1,
        "gapSuspect": false,
        "live": false,
        "latest": {
          "date": "2026-09-10",
          "close": 46940.4883,
          "prevDate": "2026-09-09",
          "prevClose": 47183.3594,
          "change": -242.8711,
          "changePct": -0.51,
          "gapDays": 1,
          "gapSuspect": false
        },
        "settled": {
          "date": "2026-09-10",
          "close": 46940.4883,
          "prevDate": "2026-09-09",
          "prevClose": 47183.3594,
          "change": -242.8711,
          "changePct": -0.51,
          "gapDays": 1,
          "gapSuspect": false
        },
        "quotePrice": 46940.49,
        "series": [
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
          },
          {
            "date": "2026-09-10",
            "close": 46940.4883
          }
        ],
        "currency": "TWD",
        "timezone": "Asia/Taipei",
        "source": "Yahoo Finance chart API（日線）"
      }
    }
  }
};
