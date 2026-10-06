/**
 * market-global.js — 由 GitHub Actions 自動產生，請勿手動編輯。
 * 產生器：scripts/fetch-global-market.mjs
 *
 * 國際行情中繼資料，供每日 dashboard 更新流程讀用，不會被 index.html 載入。
 * ok:false 代表該標的當次抓不到，error 說明原因——請據實標註，不要沿用舊值。
 */
window.MARKET_GLOBAL = {
  "fetchedAt": "2026-10-06T02:42:51.762Z",
  "okCount": 16,
  "totalCount": 16,
  "items": {
    "sox": {
      "ok": true,
      "label": "費城半導體 SOX",
      "symbol": "%5ESOX",
      "value": {
        "close": 13172.7363,
        "prevClose": 13136.6699,
        "change": 36.0664,
        "changePct": 0.27,
        "asOf": "2026-10-05",
        "prevAsOf": "2026-10-02",
        "gapDays": 3,
        "gapSuspect": false,
        "live": false,
        "latest": {
          "date": "2026-10-05",
          "close": 13172.7363,
          "prevDate": "2026-10-02",
          "prevClose": 13136.6699,
          "change": 36.0664,
          "changePct": 0.27,
          "gapDays": 3,
          "gapSuspect": false
        },
        "settled": {
          "date": "2026-10-05",
          "close": 13172.7363,
          "prevDate": "2026-10-02",
          "prevClose": 13136.6699,
          "change": 36.0664,
          "changePct": 0.27,
          "gapDays": 3,
          "gapSuspect": false
        },
        "quotePrice": 13172.736,
        "series": [
          {
            "date": "2026-09-28",
            "close": 12465.2402
          },
          {
            "date": "2026-09-29",
            "close": 12629.1602
          },
          {
            "date": "2026-09-30",
            "close": 12628.6201
          },
          {
            "date": "2026-10-01",
            "close": 12829
          },
          {
            "date": "2026-10-02",
            "close": 13136.6699
          },
          {
            "date": "2026-10-05",
            "close": 13172.7363
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
        "close": 15.52,
        "prevClose": 15.31,
        "change": 0.21,
        "changePct": 1.37,
        "asOf": "2026-10-05",
        "prevAsOf": "2026-10-02",
        "gapDays": 3,
        "gapSuspect": false,
        "live": false,
        "latest": {
          "date": "2026-10-05",
          "close": 15.52,
          "prevDate": "2026-10-02",
          "prevClose": 15.31,
          "change": 0.21,
          "changePct": 1.37,
          "gapDays": 3,
          "gapSuspect": false
        },
        "settled": {
          "date": "2026-10-05",
          "close": 15.52,
          "prevDate": "2026-10-02",
          "prevClose": 15.31,
          "change": 0.21,
          "changePct": 1.37,
          "gapDays": 3,
          "gapSuspect": false
        },
        "quotePrice": 15.52,
        "series": [
          {
            "date": "2026-09-28",
            "close": 16.07
          },
          {
            "date": "2026-09-29",
            "close": 16.04
          },
          {
            "date": "2026-09-30",
            "close": 16.34
          },
          {
            "date": "2026-10-01",
            "close": 16.39
          },
          {
            "date": "2026-10-02",
            "close": 15.31
          },
          {
            "date": "2026-10-05",
            "close": 15.52
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
        "close": 7773.9502,
        "prevClose": 7722.7202,
        "change": 51.23,
        "changePct": 0.66,
        "asOf": "2026-10-05",
        "prevAsOf": "2026-10-02",
        "gapDays": 3,
        "gapSuspect": false,
        "live": false,
        "latest": {
          "date": "2026-10-05",
          "close": 7773.9502,
          "prevDate": "2026-10-02",
          "prevClose": 7722.7202,
          "change": 51.23,
          "changePct": 0.66,
          "gapDays": 3,
          "gapSuspect": false
        },
        "settled": {
          "date": "2026-10-05",
          "close": 7773.9502,
          "prevDate": "2026-10-02",
          "prevClose": 7722.7202,
          "change": 51.23,
          "changePct": 0.66,
          "gapDays": 3,
          "gapSuspect": false
        },
        "quotePrice": 7773.95,
        "series": [
          {
            "date": "2026-09-28",
            "close": 7683.6899
          },
          {
            "date": "2026-09-29",
            "close": 7670.8398
          },
          {
            "date": "2026-09-30",
            "close": 7651.54
          },
          {
            "date": "2026-10-01",
            "close": 7666.4502
          },
          {
            "date": "2026-10-02",
            "close": 7722.7202
          },
          {
            "date": "2026-10-05",
            "close": 7773.9502
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
        "close": 27477.3105,
        "prevClose": 27190.8594,
        "change": 286.4511,
        "changePct": 1.05,
        "asOf": "2026-10-05",
        "prevAsOf": "2026-10-02",
        "gapDays": 3,
        "gapSuspect": false,
        "live": false,
        "latest": {
          "date": "2026-10-05",
          "close": 27477.3105,
          "prevDate": "2026-10-02",
          "prevClose": 27190.8594,
          "change": 286.4511,
          "changePct": 1.05,
          "gapDays": 3,
          "gapSuspect": false
        },
        "settled": {
          "date": "2026-10-05",
          "close": 27477.3105,
          "prevDate": "2026-10-02",
          "prevClose": 27190.8594,
          "change": 286.4511,
          "changePct": 1.05,
          "gapDays": 3,
          "gapSuspect": false
        },
        "quotePrice": 27477.31,
        "series": [
          {
            "date": "2026-09-28",
            "close": 26820.3809
          },
          {
            "date": "2026-09-29",
            "close": 26797.5391
          },
          {
            "date": "2026-09-30",
            "close": 26861.0605
          },
          {
            "date": "2026-10-01",
            "close": 26871.5996
          },
          {
            "date": "2026-10-02",
            "close": 27190.8594
          },
          {
            "date": "2026-10-05",
            "close": 27477.3105
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
        "close": 51267.8984,
        "prevClose": 51176.9609,
        "change": 90.9375,
        "changePct": 0.18,
        "asOf": "2026-10-05",
        "prevAsOf": "2026-10-02",
        "gapDays": 3,
        "gapSuspect": false,
        "live": false,
        "latest": {
          "date": "2026-10-05",
          "close": 51267.8984,
          "prevDate": "2026-10-02",
          "prevClose": 51176.9609,
          "change": 90.9375,
          "changePct": 0.18,
          "gapDays": 3,
          "gapSuspect": false
        },
        "settled": {
          "date": "2026-10-05",
          "close": 51267.8984,
          "prevDate": "2026-10-02",
          "prevClose": 51176.9609,
          "change": 90.9375,
          "changePct": 0.18,
          "gapDays": 3,
          "gapSuspect": false
        },
        "quotePrice": 51267.9,
        "series": [
          {
            "date": "2026-09-28",
            "close": 51481.5117
          },
          {
            "date": "2026-09-29",
            "close": 51349.9219
          },
          {
            "date": "2026-09-30",
            "close": 50906.0508
          },
          {
            "date": "2026-10-01",
            "close": 50926.5586
          },
          {
            "date": "2026-10-02",
            "close": 51176.9609
          },
          {
            "date": "2026-10-05",
            "close": 51267.8984
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
        "close": 5.311,
        "prevClose": 5.277,
        "change": 0.034,
        "changePct": 0.64,
        "asOf": "2026-10-05",
        "prevAsOf": "2026-10-02",
        "gapDays": 3,
        "gapSuspect": false,
        "live": false,
        "latest": {
          "date": "2026-10-05",
          "close": 5.311,
          "prevDate": "2026-10-02",
          "prevClose": 5.277,
          "change": 0.034,
          "changePct": 0.64,
          "gapDays": 3,
          "gapSuspect": false
        },
        "settled": {
          "date": "2026-10-05",
          "close": 5.311,
          "prevDate": "2026-10-02",
          "prevClose": 5.277,
          "change": 0.034,
          "changePct": 0.64,
          "gapDays": 3,
          "gapSuspect": false
        },
        "quotePrice": 5.311,
        "series": [
          {
            "date": "2026-09-28",
            "close": 5.24
          },
          {
            "date": "2026-09-29",
            "close": 5.255
          },
          {
            "date": "2026-09-30",
            "close": 5.293
          },
          {
            "date": "2026-10-01",
            "close": 5.237
          },
          {
            "date": "2026-10-02",
            "close": 5.277
          },
          {
            "date": "2026-10-05",
            "close": 5.311
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
        "close": 5.665,
        "prevClose": 5.63,
        "change": 0.035,
        "changePct": 0.62,
        "asOf": "2026-10-05",
        "prevAsOf": "2026-10-02",
        "gapDays": 3,
        "gapSuspect": false,
        "live": false,
        "latest": {
          "date": "2026-10-05",
          "close": 5.665,
          "prevDate": "2026-10-02",
          "prevClose": 5.63,
          "change": 0.035,
          "changePct": 0.62,
          "gapDays": 3,
          "gapSuspect": false
        },
        "settled": {
          "date": "2026-10-05",
          "close": 5.665,
          "prevDate": "2026-10-02",
          "prevClose": 5.63,
          "change": 0.035,
          "changePct": 0.62,
          "gapDays": 3,
          "gapSuspect": false
        },
        "quotePrice": 5.665,
        "series": [
          {
            "date": "2026-09-28",
            "close": 5.561
          },
          {
            "date": "2026-09-29",
            "close": 5.594
          },
          {
            "date": "2026-09-30",
            "close": 5.638
          },
          {
            "date": "2026-10-01",
            "close": 5.603
          },
          {
            "date": "2026-10-02",
            "close": 5.63
          },
          {
            "date": "2026-10-05",
            "close": 5.665
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
        "close": 5.066,
        "prevClose": 5.055,
        "change": 0.011,
        "changePct": 0.22,
        "asOf": "2026-10-05",
        "prevAsOf": "2026-10-02",
        "gapDays": 3,
        "gapSuspect": false,
        "live": false,
        "latest": {
          "date": "2026-10-05",
          "close": 5.066,
          "prevDate": "2026-10-02",
          "prevClose": 5.055,
          "change": 0.011,
          "changePct": 0.22,
          "gapDays": 3,
          "gapSuspect": false
        },
        "settled": {
          "date": "2026-10-05",
          "close": 5.066,
          "prevDate": "2026-10-02",
          "prevClose": 5.055,
          "change": 0.011,
          "changePct": 0.22,
          "gapDays": 3,
          "gapSuspect": false
        },
        "quotePrice": 5.066,
        "series": [
          {
            "date": "2026-09-28",
            "close": 5.068
          },
          {
            "date": "2026-09-29",
            "close": 5.063
          },
          {
            "date": "2026-09-30",
            "close": 5.089
          },
          {
            "date": "2026-10-01",
            "close": 5.005
          },
          {
            "date": "2026-10-02",
            "close": 5.055
          },
          {
            "date": "2026-10-05",
            "close": 5.066
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
        "close": 101.93,
        "prevClose": 102.1,
        "change": -0.17,
        "changePct": -0.17,
        "asOf": "2026-10-02",
        "prevAsOf": "2026-10-01",
        "gapDays": 1,
        "gapSuspect": false,
        "live": true,
        "latest": {
          "date": "2026-10-05",
          "close": 102.175,
          "prevDate": "2026-10-02",
          "prevClose": 101.93,
          "change": 0.245,
          "changePct": 0.24,
          "gapDays": 3,
          "gapSuspect": false
        },
        "settled": {
          "date": "2026-10-02",
          "close": 101.93,
          "prevDate": "2026-10-01",
          "prevClose": 102.1,
          "change": -0.17,
          "changePct": -0.17,
          "gapDays": 1,
          "gapSuspect": false
        },
        "quotePrice": 102.175,
        "series": [
          {
            "date": "2026-09-28",
            "close": 101.2
          },
          {
            "date": "2026-09-29",
            "close": 101.37
          },
          {
            "date": "2026-09-30",
            "close": 101.45
          },
          {
            "date": "2026-10-01",
            "close": 102.1
          },
          {
            "date": "2026-10-02",
            "close": 101.93
          },
          {
            "date": "2026-10-05",
            "close": 102.175
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
        "close": 91.11,
        "prevClose": 92.87,
        "change": -1.76,
        "changePct": -1.9,
        "asOf": "2026-10-02",
        "prevAsOf": "2026-10-01",
        "gapDays": 1,
        "gapSuspect": false,
        "live": true,
        "latest": {
          "date": "2026-10-05",
          "close": 89.75,
          "prevDate": "2026-10-02",
          "prevClose": 91.11,
          "change": -1.36,
          "changePct": -1.49,
          "gapDays": 3,
          "gapSuspect": false
        },
        "settled": {
          "date": "2026-10-02",
          "close": 91.11,
          "prevDate": "2026-10-01",
          "prevClose": 92.87,
          "change": -1.76,
          "changePct": -1.9,
          "gapDays": 1,
          "gapSuspect": false
        },
        "quotePrice": 89.75,
        "series": [
          {
            "date": "2026-09-28",
            "close": 92.6
          },
          {
            "date": "2026-09-29",
            "close": 89.38
          },
          {
            "date": "2026-09-30",
            "close": 90.42
          },
          {
            "date": "2026-10-01",
            "close": 92.87
          },
          {
            "date": "2026-10-02",
            "close": 91.11
          },
          {
            "date": "2026-10-05",
            "close": 89.75
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
        "close": 102.25,
        "prevClose": 102.31,
        "change": -0.06,
        "changePct": -0.06,
        "asOf": "2026-10-02",
        "prevAsOf": "2026-10-01",
        "gapDays": 1,
        "gapSuspect": false,
        "live": true,
        "latest": {
          "date": "2026-10-05",
          "close": 100.79,
          "prevDate": "2026-10-02",
          "prevClose": 102.25,
          "change": -1.46,
          "changePct": -1.43,
          "gapDays": 3,
          "gapSuspect": false
        },
        "settled": {
          "date": "2026-10-02",
          "close": 102.25,
          "prevDate": "2026-10-01",
          "prevClose": 102.31,
          "change": -0.06,
          "changePct": -0.06,
          "gapDays": 1,
          "gapSuspect": false
        },
        "quotePrice": 100.79,
        "series": [
          {
            "date": "2026-09-28",
            "close": 105.28
          },
          {
            "date": "2026-09-29",
            "close": 102.59
          },
          {
            "date": "2026-09-30",
            "close": 103.53
          },
          {
            "date": "2026-10-01",
            "close": 102.31
          },
          {
            "date": "2026-10-02",
            "close": 102.25
          },
          {
            "date": "2026-10-05",
            "close": 100.79
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
        "close": 4162.2998,
        "prevClose": 4202.2998,
        "change": -40,
        "changePct": -0.95,
        "asOf": "2026-10-02",
        "prevAsOf": "2026-10-01",
        "gapDays": 1,
        "gapSuspect": false,
        "live": true,
        "latest": {
          "date": "2026-10-05",
          "close": 4154.3999,
          "prevDate": "2026-10-02",
          "prevClose": 4162.2998,
          "change": -7.8999,
          "changePct": -0.19,
          "gapDays": 3,
          "gapSuspect": false
        },
        "settled": {
          "date": "2026-10-02",
          "close": 4162.2998,
          "prevDate": "2026-10-01",
          "prevClose": 4202.2998,
          "change": -40,
          "changePct": -0.95,
          "gapDays": 1,
          "gapSuspect": false
        },
        "quotePrice": 4154.4,
        "series": [
          {
            "date": "2026-09-28",
            "close": 4168.3999
          },
          {
            "date": "2026-09-29",
            "close": 4179.7002
          },
          {
            "date": "2026-09-30",
            "close": 4186.7002
          },
          {
            "date": "2026-10-01",
            "close": 4202.2998
          },
          {
            "date": "2026-10-02",
            "close": 4162.2998
          },
          {
            "date": "2026-10-05",
            "close": 4154.3999
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
        "close": 157.734,
        "prevClose": 157.927,
        "change": -0.193,
        "changePct": -0.12,
        "asOf": "2026-10-05",
        "prevAsOf": "2026-10-02",
        "gapDays": 3,
        "gapSuspect": false,
        "live": true,
        "latest": {
          "date": "2026-10-06",
          "close": 157.959,
          "prevDate": "2026-10-05",
          "prevClose": 157.734,
          "change": 0.225,
          "changePct": 0.14,
          "gapDays": 1,
          "gapSuspect": false
        },
        "settled": {
          "date": "2026-10-05",
          "close": 157.734,
          "prevDate": "2026-10-02",
          "prevClose": 157.927,
          "change": -0.193,
          "changePct": -0.12,
          "gapDays": 3,
          "gapSuspect": false
        },
        "quotePrice": 157.959,
        "series": [
          {
            "date": "2026-09-29",
            "close": 157.361
          },
          {
            "date": "2026-09-30",
            "close": 157.404
          },
          {
            "date": "2026-10-01",
            "close": 157.558
          },
          {
            "date": "2026-10-02",
            "close": 157.927
          },
          {
            "date": "2026-10-05",
            "close": 157.734
          },
          {
            "date": "2026-10-06",
            "close": 157.959
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
        "close": 6.7045,
        "prevClose": 6.7045,
        "change": 0,
        "changePct": 0,
        "asOf": "2026-10-05",
        "prevAsOf": "2026-10-02",
        "gapDays": 3,
        "gapSuspect": false,
        "live": true,
        "latest": {
          "date": "2026-10-06",
          "close": 6.704,
          "prevDate": "2026-10-05",
          "prevClose": 6.7045,
          "change": -0.0005,
          "changePct": -0.01,
          "gapDays": 1,
          "gapSuspect": false
        },
        "settled": {
          "date": "2026-10-05",
          "close": 6.7045,
          "prevDate": "2026-10-02",
          "prevClose": 6.7045,
          "change": 0,
          "changePct": 0,
          "gapDays": 3,
          "gapSuspect": false
        },
        "quotePrice": 6.704,
        "series": [
          {
            "date": "2026-09-29",
            "close": 6.7103
          },
          {
            "date": "2026-09-30",
            "close": 6.703
          },
          {
            "date": "2026-10-01",
            "close": 6.7045
          },
          {
            "date": "2026-10-02",
            "close": 6.7045
          },
          {
            "date": "2026-10-05",
            "close": 6.7045
          },
          {
            "date": "2026-10-06",
            "close": 6.704
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
        "close": 31.8344,
        "prevClose": 31.8868,
        "change": -0.0524,
        "changePct": -0.16,
        "asOf": "2026-10-05",
        "prevAsOf": "2026-10-02",
        "gapDays": 3,
        "gapSuspect": false,
        "live": true,
        "latest": {
          "date": "2026-10-06",
          "close": 31.745,
          "prevDate": "2026-10-05",
          "prevClose": 31.8344,
          "change": -0.0894,
          "changePct": -0.28,
          "gapDays": 1,
          "gapSuspect": false
        },
        "settled": {
          "date": "2026-10-05",
          "close": 31.8344,
          "prevDate": "2026-10-02",
          "prevClose": 31.8868,
          "change": -0.0524,
          "changePct": -0.16,
          "gapDays": 3,
          "gapSuspect": false
        },
        "quotePrice": 31.745,
        "series": [
          {
            "date": "2026-09-29",
            "close": 31.7822
          },
          {
            "date": "2026-09-30",
            "close": 31.85
          },
          {
            "date": "2026-10-01",
            "close": 31.8679
          },
          {
            "date": "2026-10-02",
            "close": 31.8868
          },
          {
            "date": "2026-10-05",
            "close": 31.8344
          },
          {
            "date": "2026-10-06",
            "close": 31.745
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
        "close": 49712.0391,
        "prevClose": 48475.7383,
        "change": 1236.3008,
        "changePct": 2.55,
        "asOf": "2026-10-05",
        "prevAsOf": "2026-10-02",
        "gapDays": 3,
        "gapSuspect": false,
        "live": true,
        "latest": {
          "date": "2026-10-06",
          "close": 49615.8398,
          "prevDate": "2026-10-05",
          "prevClose": 49712.0391,
          "change": -96.1993,
          "changePct": -0.19,
          "gapDays": 1,
          "gapSuspect": false
        },
        "settled": {
          "date": "2026-10-05",
          "close": 49712.0391,
          "prevDate": "2026-10-02",
          "prevClose": 48475.7383,
          "change": 1236.3008,
          "changePct": 2.55,
          "gapDays": 3,
          "gapSuspect": false
        },
        "quotePrice": 49615.84,
        "series": [
          {
            "date": "2026-09-29",
            "close": 47631.9609
          },
          {
            "date": "2026-09-30",
            "close": 47940.1289
          },
          {
            "date": "2026-10-01",
            "close": 48353.4883
          },
          {
            "date": "2026-10-02",
            "close": 48475.7383
          },
          {
            "date": "2026-10-05",
            "close": 49712.0391
          },
          {
            "date": "2026-10-06",
            "close": 49615.8398
          }
        ],
        "currency": "TWD",
        "timezone": "Asia/Taipei",
        "source": "Yahoo Finance chart API（日線）"
      }
    }
  }
};
