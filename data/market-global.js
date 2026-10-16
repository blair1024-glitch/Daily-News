/**
 * market-global.js — 由 GitHub Actions 自動產生，請勿手動編輯。
 * 產生器：scripts/fetch-global-market.mjs
 *
 * 國際行情中繼資料，供每日 dashboard 更新流程讀用，不會被 index.html 載入。
 * ok:false 代表該標的當次抓不到，error 說明原因——請據實標註，不要沿用舊值。
 */
window.MARKET_GLOBAL = {
  "fetchedAt": "2026-10-16T15:16:20.950Z",
  "okCount": 16,
  "totalCount": 16,
  "items": {
    "sox": {
      "ok": true,
      "label": "費城半導體 SOX",
      "symbol": "%5ESOX",
      "value": {
        "close": 11581.21,
        "prevClose": 11684.3799,
        "change": -103.1699,
        "changePct": -0.88,
        "asOf": "2026-10-15",
        "prevAsOf": "2026-10-14",
        "gapDays": 1,
        "gapSuspect": false,
        "live": true,
        "latest": {
          "date": "2026-10-16",
          "close": 11340.4609,
          "prevDate": "2026-10-15",
          "prevClose": 11581.21,
          "change": -240.7491,
          "changePct": -2.08,
          "gapDays": 1,
          "gapSuspect": false
        },
        "settled": {
          "date": "2026-10-15",
          "close": 11581.21,
          "prevDate": "2026-10-14",
          "prevClose": 11684.3799,
          "change": -103.1699,
          "changePct": -0.88,
          "gapDays": 1,
          "gapSuspect": false
        },
        "quotePrice": 11340.461,
        "series": [
          {
            "date": "2026-10-09",
            "close": 12572.4199
          },
          {
            "date": "2026-10-12",
            "close": 12236.79
          },
          {
            "date": "2026-10-13",
            "close": 12208.79
          },
          {
            "date": "2026-10-14",
            "close": 11684.3799
          },
          {
            "date": "2026-10-15",
            "close": 11581.21
          },
          {
            "date": "2026-10-16",
            "close": 11340.4609
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
        "prevClose": 16.87,
        "change": -0.41,
        "changePct": -2.43,
        "asOf": "2026-10-15",
        "prevAsOf": "2026-10-14",
        "gapDays": 1,
        "gapSuspect": false,
        "live": true,
        "latest": {
          "date": "2026-10-16",
          "close": 15.87,
          "prevDate": "2026-10-15",
          "prevClose": 16.46,
          "change": -0.59,
          "changePct": -3.58,
          "gapDays": 1,
          "gapSuspect": false
        },
        "settled": {
          "date": "2026-10-15",
          "close": 16.46,
          "prevDate": "2026-10-14",
          "prevClose": 16.87,
          "change": -0.41,
          "changePct": -2.43,
          "gapDays": 1,
          "gapSuspect": false
        },
        "quotePrice": 15.87,
        "series": [
          {
            "date": "2026-10-09",
            "close": 14.84
          },
          {
            "date": "2026-10-12",
            "close": 15.21
          },
          {
            "date": "2026-10-13",
            "close": 15.27
          },
          {
            "date": "2026-10-14",
            "close": 16.87
          },
          {
            "date": "2026-10-15",
            "close": 16.46
          },
          {
            "date": "2026-10-16",
            "close": 15.87
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
        "close": 7744.0601,
        "prevClose": 7718.9399,
        "change": 25.1202,
        "changePct": 0.33,
        "asOf": "2026-10-15",
        "prevAsOf": "2026-10-14",
        "gapDays": 1,
        "gapSuspect": false,
        "live": true,
        "latest": {
          "date": "2026-10-16",
          "close": 7722.3501,
          "prevDate": "2026-10-15",
          "prevClose": 7744.0601,
          "change": -21.71,
          "changePct": -0.28,
          "gapDays": 1,
          "gapSuspect": false
        },
        "settled": {
          "date": "2026-10-15",
          "close": 7744.0601,
          "prevDate": "2026-10-14",
          "prevClose": 7718.9399,
          "change": 25.1202,
          "changePct": 0.33,
          "gapDays": 1,
          "gapSuspect": false
        },
        "quotePrice": 7722.35,
        "series": [
          {
            "date": "2026-10-09",
            "close": 7811.54
          },
          {
            "date": "2026-10-12",
            "close": 7807.2402
          },
          {
            "date": "2026-10-13",
            "close": 7805.4502
          },
          {
            "date": "2026-10-14",
            "close": 7718.9399
          },
          {
            "date": "2026-10-15",
            "close": 7744.0601
          },
          {
            "date": "2026-10-16",
            "close": 7722.3501
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
        "close": 26713.0293,
        "prevClose": 26692.8691,
        "change": 20.1602,
        "changePct": 0.08,
        "asOf": "2026-10-15",
        "prevAsOf": "2026-10-14",
        "gapDays": 1,
        "gapSuspect": false,
        "live": true,
        "latest": {
          "date": "2026-10-16",
          "close": 26420.9961,
          "prevDate": "2026-10-15",
          "prevClose": 26713.0293,
          "change": -292.0332,
          "changePct": -1.09,
          "gapDays": 1,
          "gapSuspect": false
        },
        "settled": {
          "date": "2026-10-15",
          "close": 26713.0293,
          "prevDate": "2026-10-14",
          "prevClose": 26692.8691,
          "change": 20.1602,
          "changePct": 0.08,
          "gapDays": 1,
          "gapSuspect": false
        },
        "quotePrice": 26420.996,
        "series": [
          {
            "date": "2026-10-09",
            "close": 27366.1699
          },
          {
            "date": "2026-10-12",
            "close": 27245.9004
          },
          {
            "date": "2026-10-13",
            "close": 27204.3809
          },
          {
            "date": "2026-10-14",
            "close": 26692.8691
          },
          {
            "date": "2026-10-15",
            "close": 26713.0293
          },
          {
            "date": "2026-10-16",
            "close": 26420.9961
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
        "close": 52177.6914,
        "prevClose": 51621.4805,
        "change": 556.2109,
        "changePct": 1.08,
        "asOf": "2026-10-15",
        "prevAsOf": "2026-10-14",
        "gapDays": 1,
        "gapSuspect": false,
        "live": true,
        "latest": {
          "date": "2026-10-16",
          "close": 52376.0586,
          "prevDate": "2026-10-15",
          "prevClose": 52177.6914,
          "change": 198.3672,
          "changePct": 0.38,
          "gapDays": 1,
          "gapSuspect": false
        },
        "settled": {
          "date": "2026-10-15",
          "close": 52177.6914,
          "prevDate": "2026-10-14",
          "prevClose": 51621.4805,
          "change": 556.2109,
          "changePct": 1.08,
          "gapDays": 1,
          "gapSuspect": false
        },
        "quotePrice": 52376.06,
        "series": [
          {
            "date": "2026-10-09",
            "close": 51654.9492
          },
          {
            "date": "2026-10-12",
            "close": 51850.5508
          },
          {
            "date": "2026-10-13",
            "close": 51670.1016
          },
          {
            "date": "2026-10-14",
            "close": 51621.4805
          },
          {
            "date": "2026-10-15",
            "close": 52177.6914
          },
          {
            "date": "2026-10-16",
            "close": 52376.0586
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
        "close": 5.089,
        "prevClose": 5.19,
        "change": -0.101,
        "changePct": -1.95,
        "asOf": "2026-10-15",
        "prevAsOf": "2026-10-14",
        "gapDays": 1,
        "gapSuspect": false,
        "live": true,
        "latest": {
          "date": "2026-10-16",
          "close": 5.092,
          "prevDate": "2026-10-15",
          "prevClose": 5.089,
          "change": 0.003,
          "changePct": 0.06,
          "gapDays": 1,
          "gapSuspect": false
        },
        "settled": {
          "date": "2026-10-15",
          "close": 5.089,
          "prevDate": "2026-10-14",
          "prevClose": 5.19,
          "change": -0.101,
          "changePct": -1.95,
          "gapDays": 1,
          "gapSuspect": false
        },
        "quotePrice": 5.092,
        "series": [
          {
            "date": "2026-10-09",
            "close": 5.244
          },
          {
            "date": "2026-10-12",
            "close": 5.24
          },
          {
            "date": "2026-10-13",
            "close": 5.217
          },
          {
            "date": "2026-10-14",
            "close": 5.19
          },
          {
            "date": "2026-10-15",
            "close": 5.089
          },
          {
            "date": "2026-10-16",
            "close": 5.092
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
        "close": 5.429,
        "prevClose": 5.525,
        "change": -0.096,
        "changePct": -1.74,
        "asOf": "2026-10-15",
        "prevAsOf": "2026-10-14",
        "gapDays": 1,
        "gapSuspect": false,
        "live": true,
        "latest": {
          "date": "2026-10-16",
          "close": 5.43,
          "prevDate": "2026-10-15",
          "prevClose": 5.429,
          "change": 0.001,
          "changePct": 0.02,
          "gapDays": 1,
          "gapSuspect": false
        },
        "settled": {
          "date": "2026-10-15",
          "close": 5.429,
          "prevDate": "2026-10-14",
          "prevClose": 5.525,
          "change": -0.096,
          "changePct": -1.74,
          "gapDays": 1,
          "gapSuspect": false
        },
        "quotePrice": 5.43,
        "series": [
          {
            "date": "2026-10-09",
            "close": 5.6
          },
          {
            "date": "2026-10-12",
            "close": 5.598
          },
          {
            "date": "2026-10-13",
            "close": 5.563
          },
          {
            "date": "2026-10-14",
            "close": 5.525
          },
          {
            "date": "2026-10-15",
            "close": 5.429
          },
          {
            "date": "2026-10-16",
            "close": 5.43
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
        "close": 4.899,
        "prevClose": 4.992,
        "change": -0.093,
        "changePct": -1.86,
        "asOf": "2026-10-15",
        "prevAsOf": "2026-10-14",
        "gapDays": 1,
        "gapSuspect": false,
        "live": true,
        "latest": {
          "date": "2026-10-16",
          "close": 4.891,
          "prevDate": "2026-10-15",
          "prevClose": 4.899,
          "change": -0.008,
          "changePct": -0.16,
          "gapDays": 1,
          "gapSuspect": false
        },
        "settled": {
          "date": "2026-10-15",
          "close": 4.899,
          "prevDate": "2026-10-14",
          "prevClose": 4.992,
          "change": -0.093,
          "changePct": -1.86,
          "gapDays": 1,
          "gapSuspect": false
        },
        "quotePrice": 4.891,
        "series": [
          {
            "date": "2026-10-09",
            "close": 5.021
          },
          {
            "date": "2026-10-12",
            "close": 5.019
          },
          {
            "date": "2026-10-13",
            "close": 5.007
          },
          {
            "date": "2026-10-14",
            "close": 4.992
          },
          {
            "date": "2026-10-15",
            "close": 4.899
          },
          {
            "date": "2026-10-16",
            "close": 4.891
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
        "close": 102,
        "prevClose": 102.55,
        "change": -0.55,
        "changePct": -0.54,
        "asOf": "2026-10-15",
        "prevAsOf": "2026-10-14",
        "gapDays": 1,
        "gapSuspect": false,
        "live": true,
        "latest": {
          "date": "2026-10-16",
          "close": 101.642,
          "prevDate": "2026-10-15",
          "prevClose": 102,
          "change": -0.358,
          "changePct": -0.35,
          "gapDays": 1,
          "gapSuspect": false
        },
        "settled": {
          "date": "2026-10-15",
          "close": 102,
          "prevDate": "2026-10-14",
          "prevClose": 102.55,
          "change": -0.55,
          "changePct": -0.54,
          "gapDays": 1,
          "gapSuspect": false
        },
        "quotePrice": 101.642,
        "series": [
          {
            "date": "2026-10-09",
            "close": 102.21
          },
          {
            "date": "2026-10-12",
            "close": 102.58
          },
          {
            "date": "2026-10-13",
            "close": 102.18
          },
          {
            "date": "2026-10-14",
            "close": 102.55
          },
          {
            "date": "2026-10-15",
            "close": 102
          },
          {
            "date": "2026-10-16",
            "close": 101.642
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
        "close": 97.97,
        "prevClose": 95.09,
        "change": 2.88,
        "changePct": 3.03,
        "asOf": "2026-10-15",
        "prevAsOf": "2026-10-14",
        "gapDays": 1,
        "gapSuspect": false,
        "live": true,
        "latest": {
          "date": "2026-10-16",
          "close": 95.8,
          "prevDate": "2026-10-15",
          "prevClose": 97.97,
          "change": -2.17,
          "changePct": -2.21,
          "gapDays": 1,
          "gapSuspect": false
        },
        "settled": {
          "date": "2026-10-15",
          "close": 97.97,
          "prevDate": "2026-10-14",
          "prevClose": 95.09,
          "change": 2.88,
          "changePct": 3.03,
          "gapDays": 1,
          "gapSuspect": false
        },
        "quotePrice": 95.8,
        "series": [
          {
            "date": "2026-10-09",
            "close": 91.85
          },
          {
            "date": "2026-10-12",
            "close": 93.74
          },
          {
            "date": "2026-10-13",
            "close": 94.14
          },
          {
            "date": "2026-10-14",
            "close": 95.09
          },
          {
            "date": "2026-10-15",
            "close": 97.97
          },
          {
            "date": "2026-10-16",
            "close": 95.8
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
        "close": 105.92,
        "prevClose": 106.06,
        "change": -0.14,
        "changePct": -0.13,
        "asOf": "2026-10-15",
        "prevAsOf": "2026-10-14",
        "gapDays": 1,
        "gapSuspect": false,
        "live": true,
        "latest": {
          "date": "2026-10-16",
          "close": 105.91,
          "prevDate": "2026-10-15",
          "prevClose": 105.92,
          "change": -0.01,
          "changePct": -0.01,
          "gapDays": 1,
          "gapSuspect": false
        },
        "settled": {
          "date": "2026-10-15",
          "close": 105.92,
          "prevDate": "2026-10-14",
          "prevClose": 106.06,
          "change": -0.14,
          "changePct": -0.13,
          "gapDays": 1,
          "gapSuspect": false
        },
        "quotePrice": 105.91,
        "series": [
          {
            "date": "2026-10-09",
            "close": 104.72
          },
          {
            "date": "2026-10-12",
            "close": 106.65
          },
          {
            "date": "2026-10-13",
            "close": 105.69
          },
          {
            "date": "2026-10-14",
            "close": 106.06
          },
          {
            "date": "2026-10-15",
            "close": 105.92
          },
          {
            "date": "2026-10-16",
            "close": 105.91
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
        "close": 4170.1001,
        "prevClose": 4107.8999,
        "change": 62.2002,
        "changePct": 1.51,
        "asOf": "2026-10-15",
        "prevAsOf": "2026-10-14",
        "gapDays": 1,
        "gapSuspect": false,
        "live": true,
        "latest": {
          "date": "2026-10-16",
          "close": 4207.1001,
          "prevDate": "2026-10-15",
          "prevClose": 4170.1001,
          "change": 37,
          "changePct": 0.89,
          "gapDays": 1,
          "gapSuspect": false
        },
        "settled": {
          "date": "2026-10-15",
          "close": 4170.1001,
          "prevDate": "2026-10-14",
          "prevClose": 4107.8999,
          "change": 62.2002,
          "changePct": 1.51,
          "gapDays": 1,
          "gapSuspect": false
        },
        "quotePrice": 4207.1,
        "series": [
          {
            "date": "2026-10-09",
            "close": 4216.2998
          },
          {
            "date": "2026-10-12",
            "close": 4190.6001
          },
          {
            "date": "2026-10-13",
            "close": 4177.2998
          },
          {
            "date": "2026-10-14",
            "close": 4107.8999
          },
          {
            "date": "2026-10-15",
            "close": 4170.1001
          },
          {
            "date": "2026-10-16",
            "close": 4207.1001
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
        "close": 157.957,
        "prevClose": 158.322,
        "change": -0.365,
        "changePct": -0.23,
        "asOf": "2026-10-15",
        "prevAsOf": "2026-10-14",
        "gapDays": 1,
        "gapSuspect": false,
        "live": true,
        "latest": {
          "date": "2026-10-16",
          "close": 157.874,
          "prevDate": "2026-10-15",
          "prevClose": 157.957,
          "change": -0.083,
          "changePct": -0.05,
          "gapDays": 1,
          "gapSuspect": false
        },
        "settled": {
          "date": "2026-10-15",
          "close": 157.957,
          "prevDate": "2026-10-14",
          "prevClose": 158.322,
          "change": -0.365,
          "changePct": -0.23,
          "gapDays": 1,
          "gapSuspect": false
        },
        "quotePrice": 157.874,
        "series": [
          {
            "date": "2026-10-09",
            "close": 158.063
          },
          {
            "date": "2026-10-12",
            "close": 158.203
          },
          {
            "date": "2026-10-13",
            "close": 158.52
          },
          {
            "date": "2026-10-14",
            "close": 158.322
          },
          {
            "date": "2026-10-15",
            "close": 157.957
          },
          {
            "date": "2026-10-16",
            "close": 157.874
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
        "close": 6.6926,
        "prevClose": 6.692,
        "change": 0.0006,
        "changePct": 0.01,
        "asOf": "2026-10-15",
        "prevAsOf": "2026-10-14",
        "gapDays": 1,
        "gapSuspect": false,
        "live": true,
        "latest": {
          "date": "2026-10-16",
          "close": 6.6755,
          "prevDate": "2026-10-15",
          "prevClose": 6.6926,
          "change": -0.0171,
          "changePct": -0.26,
          "gapDays": 1,
          "gapSuspect": false
        },
        "settled": {
          "date": "2026-10-15",
          "close": 6.6926,
          "prevDate": "2026-10-14",
          "prevClose": 6.692,
          "change": 0.0006,
          "changePct": 0.01,
          "gapDays": 1,
          "gapSuspect": false
        },
        "quotePrice": 6.6755,
        "series": [
          {
            "date": "2026-10-09",
            "close": 6.7021
          },
          {
            "date": "2026-10-12",
            "close": 6.692
          },
          {
            "date": "2026-10-13",
            "close": 6.692
          },
          {
            "date": "2026-10-14",
            "close": 6.692
          },
          {
            "date": "2026-10-15",
            "close": 6.6926
          },
          {
            "date": "2026-10-16",
            "close": 6.6755
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
        "close": 32.1899,
        "prevClose": 32.105,
        "change": 0.0849,
        "changePct": 0.26,
        "asOf": "2026-10-15",
        "prevAsOf": "2026-10-14",
        "gapDays": 1,
        "gapSuspect": false,
        "live": true,
        "latest": {
          "date": "2026-10-16",
          "close": 32.415,
          "prevDate": "2026-10-15",
          "prevClose": 32.1899,
          "change": 0.2251,
          "changePct": 0.7,
          "gapDays": 1,
          "gapSuspect": false
        },
        "settled": {
          "date": "2026-10-15",
          "close": 32.1899,
          "prevDate": "2026-10-14",
          "prevClose": 32.105,
          "change": 0.0849,
          "changePct": 0.26,
          "gapDays": 1,
          "gapSuspect": false
        },
        "quotePrice": 32.415,
        "series": [
          {
            "date": "2026-10-09",
            "close": 31.9254
          },
          {
            "date": "2026-10-12",
            "close": 31.9161
          },
          {
            "date": "2026-10-13",
            "close": 31.9278
          },
          {
            "date": "2026-10-14",
            "close": 32.105
          },
          {
            "date": "2026-10-15",
            "close": 32.1899
          },
          {
            "date": "2026-10-16",
            "close": 32.415
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
        "close": 47111.2617,
        "prevClose": 46969.8711,
        "change": 141.3906,
        "changePct": 0.3,
        "asOf": "2026-10-16",
        "prevAsOf": "2026-10-15",
        "gapDays": 1,
        "gapSuspect": false,
        "live": false,
        "latest": {
          "date": "2026-10-16",
          "close": 47111.2617,
          "prevDate": "2026-10-15",
          "prevClose": 46969.8711,
          "change": 141.3906,
          "changePct": 0.3,
          "gapDays": 1,
          "gapSuspect": false
        },
        "settled": {
          "date": "2026-10-16",
          "close": 47111.2617,
          "prevDate": "2026-10-15",
          "prevClose": 46969.8711,
          "change": 141.3906,
          "changePct": 0.3,
          "gapDays": 1,
          "gapSuspect": false
        },
        "quotePrice": 47111.26,
        "series": [
          {
            "date": "2026-10-08",
            "close": 49313.4414
          },
          {
            "date": "2026-10-12",
            "close": 49301.9609
          },
          {
            "date": "2026-10-13",
            "close": 48341.3086
          },
          {
            "date": "2026-10-14",
            "close": 48625.8281
          },
          {
            "date": "2026-10-15",
            "close": 46969.8711
          },
          {
            "date": "2026-10-16",
            "close": 47111.2617
          }
        ],
        "currency": "TWD",
        "timezone": "Asia/Taipei",
        "source": "Yahoo Finance chart API（日線）"
      }
    }
  }
};
