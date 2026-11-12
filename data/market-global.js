/**
 * market-global.js — 由 GitHub Actions 自動產生，請勿手動編輯。
 * 產生器：scripts/fetch-global-market.mjs
 *
 * 國際行情中繼資料，供每日 dashboard 更新流程讀用，不會被 index.html 載入。
 * ok:false 代表該標的當次抓不到，error 說明原因——請據實標註，不要沿用舊值。
 */
window.MARKET_GLOBAL = {
  "fetchedAt": "2026-11-12T03:38:17.018Z",
  "okCount": 16,
  "totalCount": 16,
  "items": {
    "sox": {
      "ok": true,
      "label": "費城半導體 SOX",
      "symbol": "%5ESOX",
      "value": {
        "close": 10564.1113,
        "prevClose": 9998.3301,
        "change": 565.7812,
        "changePct": 5.66,
        "asOf": "2026-11-11",
        "prevAsOf": "2026-11-10",
        "gapDays": 1,
        "gapSuspect": false,
        "live": false,
        "latest": {
          "date": "2026-11-11",
          "close": 10564.1113,
          "prevDate": "2026-11-10",
          "prevClose": 9998.3301,
          "change": 565.7812,
          "changePct": 5.66,
          "gapDays": 1,
          "gapSuspect": false
        },
        "settled": {
          "date": "2026-11-11",
          "close": 10564.1113,
          "prevDate": "2026-11-10",
          "prevClose": 9998.3301,
          "change": 565.7812,
          "changePct": 5.66,
          "gapDays": 1,
          "gapSuspect": false
        },
        "quotePrice": 10564.111,
        "series": [
          {
            "date": "2026-11-04",
            "close": 10268.6504
          },
          {
            "date": "2026-11-05",
            "close": 9011.1396
          },
          {
            "date": "2026-11-06",
            "close": 9390.25
          },
          {
            "date": "2026-11-09",
            "close": 10033.9297
          },
          {
            "date": "2026-11-10",
            "close": 9998.3301
          },
          {
            "date": "2026-11-11",
            "close": 10564.1113
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
        "close": 17.49,
        "prevClose": 19.46,
        "change": -1.97,
        "changePct": -10.12,
        "asOf": "2026-11-11",
        "prevAsOf": "2026-11-10",
        "gapDays": 1,
        "gapSuspect": false,
        "live": false,
        "latest": {
          "date": "2026-11-11",
          "close": 17.49,
          "prevDate": "2026-11-10",
          "prevClose": 19.46,
          "change": -1.97,
          "changePct": -10.12,
          "gapDays": 1,
          "gapSuspect": false
        },
        "settled": {
          "date": "2026-11-11",
          "close": 17.49,
          "prevDate": "2026-11-10",
          "prevClose": 19.46,
          "change": -1.97,
          "changePct": -10.12,
          "gapDays": 1,
          "gapSuspect": false
        },
        "quotePrice": 17.49,
        "series": [
          {
            "date": "2026-11-04",
            "close": 16.61
          },
          {
            "date": "2026-11-05",
            "close": 28.18
          },
          {
            "date": "2026-11-06",
            "close": 25.64
          },
          {
            "date": "2026-11-09",
            "close": 19.92
          },
          {
            "date": "2026-11-10",
            "close": 19.46
          },
          {
            "date": "2026-11-11",
            "close": 17.49
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
        "close": 7619.3799,
        "prevClose": 7520.9302,
        "change": 98.4497,
        "changePct": 1.31,
        "asOf": "2026-11-11",
        "prevAsOf": "2026-11-10",
        "gapDays": 1,
        "gapSuspect": false,
        "live": false,
        "latest": {
          "date": "2026-11-11",
          "close": 7619.3799,
          "prevDate": "2026-11-10",
          "prevClose": 7520.9302,
          "change": 98.4497,
          "changePct": 1.31,
          "gapDays": 1,
          "gapSuspect": false
        },
        "settled": {
          "date": "2026-11-11",
          "close": 7619.3799,
          "prevDate": "2026-11-10",
          "prevClose": 7520.9302,
          "change": 98.4497,
          "changePct": 1.31,
          "gapDays": 1,
          "gapSuspect": false
        },
        "quotePrice": 7619.38,
        "series": [
          {
            "date": "2026-11-04",
            "close": 7688.6201
          },
          {
            "date": "2026-11-05",
            "close": 7353.73
          },
          {
            "date": "2026-11-06",
            "close": 7376.8599
          },
          {
            "date": "2026-11-09",
            "close": 7549.9399
          },
          {
            "date": "2026-11-10",
            "close": 7520.9302
          },
          {
            "date": "2026-11-11",
            "close": 7619.3799
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
        "close": 25466.1895,
        "prevClose": 25065.8691,
        "change": 400.3204,
        "changePct": 1.6,
        "asOf": "2026-11-11",
        "prevAsOf": "2026-11-10",
        "gapDays": 1,
        "gapSuspect": false,
        "live": false,
        "latest": {
          "date": "2026-11-11",
          "close": 25466.1895,
          "prevDate": "2026-11-10",
          "prevClose": 25065.8691,
          "change": 400.3204,
          "changePct": 1.6,
          "gapDays": 1,
          "gapSuspect": false
        },
        "settled": {
          "date": "2026-11-11",
          "close": 25466.1895,
          "prevDate": "2026-11-10",
          "prevClose": 25065.8691,
          "change": 400.3204,
          "changePct": 1.6,
          "gapDays": 1,
          "gapSuspect": false
        },
        "quotePrice": 25466.19,
        "series": [
          {
            "date": "2026-11-04",
            "close": 25736.5098
          },
          {
            "date": "2026-11-05",
            "close": 24315
          },
          {
            "date": "2026-11-06",
            "close": 24579.4297
          },
          {
            "date": "2026-11-09",
            "close": 25253.1406
          },
          {
            "date": "2026-11-10",
            "close": 25065.8691
          },
          {
            "date": "2026-11-11",
            "close": 25466.1895
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
        "close": 52486.4883,
        "prevClose": 52231.8906,
        "change": 254.5977,
        "changePct": 0.49,
        "asOf": "2026-11-11",
        "prevAsOf": "2026-11-10",
        "gapDays": 1,
        "gapSuspect": false,
        "live": false,
        "latest": {
          "date": "2026-11-11",
          "close": 52486.4883,
          "prevDate": "2026-11-10",
          "prevClose": 52231.8906,
          "change": 254.5977,
          "changePct": 0.49,
          "gapDays": 1,
          "gapSuspect": false
        },
        "settled": {
          "date": "2026-11-11",
          "close": 52486.4883,
          "prevDate": "2026-11-10",
          "prevClose": 52231.8906,
          "change": 254.5977,
          "changePct": 0.49,
          "gapDays": 1,
          "gapSuspect": false
        },
        "quotePrice": 52486.49,
        "series": [
          {
            "date": "2026-11-04",
            "close": 53356.1211
          },
          {
            "date": "2026-11-05",
            "close": 51523.0586
          },
          {
            "date": "2026-11-06",
            "close": 51285.7305
          },
          {
            "date": "2026-11-09",
            "close": 52389.75
          },
          {
            "date": "2026-11-10",
            "close": 52231.8906
          },
          {
            "date": "2026-11-11",
            "close": 52486.4883
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
        "close": 4.998,
        "prevClose": 4.983,
        "change": 0.015,
        "changePct": 0.3,
        "asOf": "2026-11-11",
        "prevAsOf": "2026-11-10",
        "gapDays": 1,
        "gapSuspect": false,
        "live": false,
        "latest": {
          "date": "2026-11-11",
          "close": 4.998,
          "prevDate": "2026-11-10",
          "prevClose": 4.983,
          "change": 0.015,
          "changePct": 0.3,
          "gapDays": 1,
          "gapSuspect": false
        },
        "settled": {
          "date": "2026-11-11",
          "close": 4.998,
          "prevDate": "2026-11-10",
          "prevClose": 4.983,
          "change": 0.015,
          "changePct": 0.3,
          "gapDays": 1,
          "gapSuspect": false
        },
        "quotePrice": 4.998,
        "series": [
          {
            "date": "2026-11-04",
            "close": 4.894
          },
          {
            "date": "2026-11-05",
            "close": 4.837
          },
          {
            "date": "2026-11-06",
            "close": 4.859
          },
          {
            "date": "2026-11-09",
            "close": 4.864
          },
          {
            "date": "2026-11-10",
            "close": 4.983
          },
          {
            "date": "2026-11-11",
            "close": 4.998
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
        "close": 5.356,
        "prevClose": 5.35,
        "change": 0.006,
        "changePct": 0.11,
        "asOf": "2026-11-11",
        "prevAsOf": "2026-11-10",
        "gapDays": 1,
        "gapSuspect": false,
        "live": false,
        "latest": {
          "date": "2026-11-11",
          "close": 5.356,
          "prevDate": "2026-11-10",
          "prevClose": 5.35,
          "change": 0.006,
          "changePct": 0.11,
          "gapDays": 1,
          "gapSuspect": false
        },
        "settled": {
          "date": "2026-11-11",
          "close": 5.356,
          "prevDate": "2026-11-10",
          "prevClose": 5.35,
          "change": 0.006,
          "changePct": 0.11,
          "gapDays": 1,
          "gapSuspect": false
        },
        "quotePrice": 5.356,
        "series": [
          {
            "date": "2026-11-04",
            "close": 5.282
          },
          {
            "date": "2026-11-05",
            "close": 5.251
          },
          {
            "date": "2026-11-06",
            "close": 5.26
          },
          {
            "date": "2026-11-09",
            "close": 5.256
          },
          {
            "date": "2026-11-10",
            "close": 5.35
          },
          {
            "date": "2026-11-11",
            "close": 5.356
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
        "close": 4.827,
        "prevClose": 4.807,
        "change": 0.02,
        "changePct": 0.42,
        "asOf": "2026-11-11",
        "prevAsOf": "2026-11-10",
        "gapDays": 1,
        "gapSuspect": false,
        "live": false,
        "latest": {
          "date": "2026-11-11",
          "close": 4.827,
          "prevDate": "2026-11-10",
          "prevClose": 4.807,
          "change": 0.02,
          "changePct": 0.42,
          "gapDays": 1,
          "gapSuspect": false
        },
        "settled": {
          "date": "2026-11-11",
          "close": 4.827,
          "prevDate": "2026-11-10",
          "prevClose": 4.807,
          "change": 0.02,
          "changePct": 0.42,
          "gapDays": 1,
          "gapSuspect": false
        },
        "quotePrice": 4.827,
        "series": [
          {
            "date": "2026-11-04",
            "close": 4.689
          },
          {
            "date": "2026-11-05",
            "close": 4.608
          },
          {
            "date": "2026-11-06",
            "close": 4.648
          },
          {
            "date": "2026-11-09",
            "close": 4.659
          },
          {
            "date": "2026-11-10",
            "close": 4.807
          },
          {
            "date": "2026-11-11",
            "close": 4.827
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
        "close": 102.23,
        "prevClose": 101.65,
        "change": 0.58,
        "changePct": 0.57,
        "asOf": "2026-11-10",
        "prevAsOf": "2026-11-09",
        "gapDays": 1,
        "gapSuspect": false,
        "live": true,
        "latest": {
          "date": "2026-11-11",
          "close": 103.025,
          "prevDate": "2026-11-10",
          "prevClose": 102.23,
          "change": 0.795,
          "changePct": 0.78,
          "gapDays": 1,
          "gapSuspect": false
        },
        "settled": {
          "date": "2026-11-10",
          "close": 102.23,
          "prevDate": "2026-11-09",
          "prevClose": 101.65,
          "change": 0.58,
          "changePct": 0.57,
          "gapDays": 1,
          "gapSuspect": false
        },
        "quotePrice": 103.025,
        "series": [
          {
            "date": "2026-11-04",
            "close": 101.51
          },
          {
            "date": "2026-11-05",
            "close": 101.55
          },
          {
            "date": "2026-11-06",
            "close": 102.3
          },
          {
            "date": "2026-11-09",
            "close": 101.65
          },
          {
            "date": "2026-11-10",
            "close": 102.23
          },
          {
            "date": "2026-11-11",
            "close": 103.025
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
        "close": 86.04,
        "prevClose": 86.85,
        "change": -0.81,
        "changePct": -0.93,
        "asOf": "2026-11-10",
        "prevAsOf": "2026-11-09",
        "gapDays": 1,
        "gapSuspect": false,
        "live": true,
        "latest": {
          "date": "2026-11-11",
          "close": 85.58,
          "prevDate": "2026-11-10",
          "prevClose": 86.04,
          "change": -0.46,
          "changePct": -0.53,
          "gapDays": 1,
          "gapSuspect": false
        },
        "settled": {
          "date": "2026-11-10",
          "close": 86.04,
          "prevDate": "2026-11-09",
          "prevClose": 86.85,
          "change": -0.81,
          "changePct": -0.93,
          "gapDays": 1,
          "gapSuspect": false
        },
        "quotePrice": 85.58,
        "series": [
          {
            "date": "2026-11-04",
            "close": 88.12
          },
          {
            "date": "2026-11-05",
            "close": 90.52
          },
          {
            "date": "2026-11-06",
            "close": 90.83
          },
          {
            "date": "2026-11-09",
            "close": 86.85
          },
          {
            "date": "2026-11-10",
            "close": 86.04
          },
          {
            "date": "2026-11-11",
            "close": 85.58
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
        "close": 91.49,
        "prevClose": 92.57,
        "change": -1.08,
        "changePct": -1.17,
        "asOf": "2026-11-10",
        "prevAsOf": "2026-11-09",
        "gapDays": 1,
        "gapSuspect": false,
        "live": true,
        "latest": {
          "date": "2026-11-11",
          "close": 91.64,
          "prevDate": "2026-11-10",
          "prevClose": 91.49,
          "change": 0.15,
          "changePct": 0.16,
          "gapDays": 1,
          "gapSuspect": false
        },
        "settled": {
          "date": "2026-11-10",
          "close": 91.49,
          "prevDate": "2026-11-09",
          "prevClose": 92.57,
          "change": -1.08,
          "changePct": -1.17,
          "gapDays": 1,
          "gapSuspect": false
        },
        "quotePrice": 91.64,
        "series": [
          {
            "date": "2026-11-04",
            "close": 94.62
          },
          {
            "date": "2026-11-05",
            "close": 98.29
          },
          {
            "date": "2026-11-06",
            "close": 98.32
          },
          {
            "date": "2026-11-09",
            "close": 92.57
          },
          {
            "date": "2026-11-10",
            "close": 91.49
          },
          {
            "date": "2026-11-11",
            "close": 91.64
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
        "close": 4030.2,
        "prevClose": 4114.5,
        "change": -84.3,
        "changePct": -2.05,
        "asOf": "2026-11-10",
        "prevAsOf": "2026-11-09",
        "gapDays": 1,
        "gapSuspect": false,
        "live": true,
        "latest": {
          "date": "2026-11-11",
          "close": 3985.3999,
          "prevDate": "2026-11-10",
          "prevClose": 4030.2,
          "change": -44.8001,
          "changePct": -1.11,
          "gapDays": 1,
          "gapSuspect": false
        },
        "settled": {
          "date": "2026-11-10",
          "close": 4030.2,
          "prevDate": "2026-11-09",
          "prevClose": 4114.5,
          "change": -84.3,
          "changePct": -2.05,
          "gapDays": 1,
          "gapSuspect": false
        },
        "quotePrice": 3985.4,
        "series": [
          {
            "date": "2026-11-04",
            "close": 4073
          },
          {
            "date": "2026-11-05",
            "close": 4113.5
          },
          {
            "date": "2026-11-06",
            "close": 4074.8999
          },
          {
            "date": "2026-11-09",
            "close": 4114.5
          },
          {
            "date": "2026-11-10",
            "close": 4030.2
          },
          {
            "date": "2026-11-11",
            "close": 3985.3999
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
        "close": 158.705,
        "prevClose": 157.983,
        "change": 0.722,
        "changePct": 0.46,
        "asOf": "2026-11-11",
        "prevAsOf": "2026-11-10",
        "gapDays": 1,
        "gapSuspect": false,
        "live": true,
        "latest": {
          "date": "2026-11-12",
          "close": 159.742,
          "prevDate": "2026-11-11",
          "prevClose": 158.705,
          "change": 1.037,
          "changePct": 0.65,
          "gapDays": 1,
          "gapSuspect": false
        },
        "settled": {
          "date": "2026-11-11",
          "close": 158.705,
          "prevDate": "2026-11-10",
          "prevClose": 157.983,
          "change": 0.722,
          "changePct": 0.46,
          "gapDays": 1,
          "gapSuspect": false
        },
        "quotePrice": 159.742,
        "series": [
          {
            "date": "2026-11-05",
            "close": 158.357
          },
          {
            "date": "2026-11-06",
            "close": 157.498
          },
          {
            "date": "2026-11-09",
            "close": 158.292
          },
          {
            "date": "2026-11-10",
            "close": 157.983
          },
          {
            "date": "2026-11-11",
            "close": 158.705
          },
          {
            "date": "2026-11-12",
            "close": 159.742
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
        "close": 6.6703,
        "prevClose": 6.6727,
        "change": -0.0024,
        "changePct": -0.04,
        "asOf": "2026-11-11",
        "prevAsOf": "2026-11-10",
        "gapDays": 1,
        "gapSuspect": false,
        "live": true,
        "latest": {
          "date": "2026-11-12",
          "close": 6.6676,
          "prevDate": "2026-11-11",
          "prevClose": 6.6703,
          "change": -0.0027,
          "changePct": -0.04,
          "gapDays": 1,
          "gapSuspect": false
        },
        "settled": {
          "date": "2026-11-11",
          "close": 6.6703,
          "prevDate": "2026-11-10",
          "prevClose": 6.6727,
          "change": -0.0024,
          "changePct": -0.04,
          "gapDays": 1,
          "gapSuspect": false
        },
        "quotePrice": 6.6676,
        "series": [
          {
            "date": "2026-11-05",
            "close": 6.6731
          },
          {
            "date": "2026-11-06",
            "close": 6.688
          },
          {
            "date": "2026-11-09",
            "close": 6.676
          },
          {
            "date": "2026-11-10",
            "close": 6.6727
          },
          {
            "date": "2026-11-11",
            "close": 6.6703
          },
          {
            "date": "2026-11-12",
            "close": 6.6676
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
        "close": 32.9538,
        "prevClose": 32.7886,
        "change": 0.1652,
        "changePct": 0.5,
        "asOf": "2026-11-11",
        "prevAsOf": "2026-11-10",
        "gapDays": 1,
        "gapSuspect": false,
        "live": true,
        "latest": {
          "date": "2026-11-12",
          "close": 32.916,
          "prevDate": "2026-11-11",
          "prevClose": 32.9538,
          "change": -0.0378,
          "changePct": -0.11,
          "gapDays": 1,
          "gapSuspect": false
        },
        "settled": {
          "date": "2026-11-11",
          "close": 32.9538,
          "prevDate": "2026-11-10",
          "prevClose": 32.7886,
          "change": 0.1652,
          "changePct": 0.5,
          "gapDays": 1,
          "gapSuspect": false
        },
        "quotePrice": 32.916,
        "series": [
          {
            "date": "2026-11-05",
            "close": 32.8212
          },
          {
            "date": "2026-11-06",
            "close": 33.1093
          },
          {
            "date": "2026-11-09",
            "close": 32.7603
          },
          {
            "date": "2026-11-10",
            "close": 32.7886
          },
          {
            "date": "2026-11-11",
            "close": 32.9538
          },
          {
            "date": "2026-11-12",
            "close": 32.916
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
        "close": 44257.1484,
        "prevClose": 42711.9219,
        "change": 1545.2265,
        "changePct": 3.62,
        "asOf": "2026-11-11",
        "prevAsOf": "2026-11-10",
        "gapDays": 1,
        "gapSuspect": false,
        "live": true,
        "latest": {
          "date": "2026-11-12",
          "close": 44252.3398,
          "prevDate": "2026-11-11",
          "prevClose": 44257.1484,
          "change": -4.8086,
          "changePct": -0.01,
          "gapDays": 1,
          "gapSuspect": false
        },
        "settled": {
          "date": "2026-11-11",
          "close": 44257.1484,
          "prevDate": "2026-11-10",
          "prevClose": 42711.9219,
          "change": 1545.2265,
          "changePct": 3.62,
          "gapDays": 1,
          "gapSuspect": false
        },
        "quotePrice": 44252.34,
        "series": [
          {
            "date": "2026-11-05",
            "close": 41574.7188
          },
          {
            "date": "2026-11-06",
            "close": 39701.6406
          },
          {
            "date": "2026-11-09",
            "close": 41661.6992
          },
          {
            "date": "2026-11-10",
            "close": 42711.9219
          },
          {
            "date": "2026-11-11",
            "close": 44257.1484
          },
          {
            "date": "2026-11-12",
            "close": 44252.3398
          }
        ],
        "currency": "TWD",
        "timezone": "Asia/Taipei",
        "source": "Yahoo Finance chart API（日線）"
      }
    }
  }
};
