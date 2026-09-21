/**
 * market-global.js — 由 GitHub Actions 自動產生，請勿手動編輯。
 * 產生器：scripts/fetch-global-market.mjs
 *
 * 國際行情中繼資料，供每日 dashboard 更新流程讀用，不會被 index.html 載入。
 * ok:false 代表該標的當次抓不到，error 說明原因——請據實標註，不要沿用舊值。
 */
window.MARKET_GLOBAL = {
  "fetchedAt": "2026-09-21T16:48:41.602Z",
  "okCount": 16,
  "totalCount": 16,
  "items": {
    "sox": {
      "ok": true,
      "label": "費城半導體 SOX",
      "symbol": "%5ESOX",
      "value": {
        "close": 11921.6904,
        "prevClose": 11599.4902,
        "change": 322.2002,
        "changePct": 2.78,
        "asOf": "2026-09-18",
        "prevAsOf": "2026-09-17",
        "gapDays": 1,
        "gapSuspect": false,
        "live": true,
        "latest": {
          "date": "2026-09-21",
          "close": 12365.3271,
          "prevDate": "2026-09-18",
          "prevClose": 11921.6904,
          "change": 443.6367,
          "changePct": 3.72,
          "gapDays": 3,
          "gapSuspect": false
        },
        "settled": {
          "date": "2026-09-18",
          "close": 11921.6904,
          "prevDate": "2026-09-17",
          "prevClose": 11599.4902,
          "change": 322.2002,
          "changePct": 2.78,
          "gapDays": 1,
          "gapSuspect": false
        },
        "quotePrice": 12365.327,
        "series": [
          {
            "date": "2026-09-14",
            "close": 11131.2803
          },
          {
            "date": "2026-09-15",
            "close": 11175.5498
          },
          {
            "date": "2026-09-16",
            "close": 11246.1104
          },
          {
            "date": "2026-09-17",
            "close": 11599.4902
          },
          {
            "date": "2026-09-18",
            "close": 11921.6904
          },
          {
            "date": "2026-09-21",
            "close": 12365.3271
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
        "close": 14.81,
        "prevClose": 15.44,
        "change": -0.63,
        "changePct": -4.08,
        "asOf": "2026-09-18",
        "prevAsOf": "2026-09-17",
        "gapDays": 1,
        "gapSuspect": false,
        "live": true,
        "latest": {
          "date": "2026-09-21",
          "close": 15.07,
          "prevDate": "2026-09-18",
          "prevClose": 14.81,
          "change": 0.26,
          "changePct": 1.76,
          "gapDays": 3,
          "gapSuspect": false
        },
        "settled": {
          "date": "2026-09-18",
          "close": 14.81,
          "prevDate": "2026-09-17",
          "prevClose": 15.44,
          "change": -0.63,
          "changePct": -4.08,
          "gapDays": 1,
          "gapSuspect": false
        },
        "quotePrice": 15.07,
        "series": [
          {
            "date": "2026-09-14",
            "close": 17.1
          },
          {
            "date": "2026-09-15",
            "close": 17.2
          },
          {
            "date": "2026-09-16",
            "close": 17.71
          },
          {
            "date": "2026-09-17",
            "close": 15.44
          },
          {
            "date": "2026-09-18",
            "close": 14.81
          },
          {
            "date": "2026-09-21",
            "close": 15.07
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
        "close": 7650.5,
        "prevClose": 7637.7598,
        "change": 12.7402,
        "changePct": 0.17,
        "asOf": "2026-09-18",
        "prevAsOf": "2026-09-17",
        "gapDays": 1,
        "gapSuspect": false,
        "live": true,
        "latest": {
          "date": "2026-09-21",
          "close": 7752,
          "prevDate": "2026-09-18",
          "prevClose": 7650.5,
          "change": 101.5,
          "changePct": 1.33,
          "gapDays": 3,
          "gapSuspect": false
        },
        "settled": {
          "date": "2026-09-18",
          "close": 7650.5,
          "prevDate": "2026-09-17",
          "prevClose": 7637.7598,
          "change": 12.7402,
          "changePct": 0.17,
          "gapDays": 1,
          "gapSuspect": false
        },
        "quotePrice": 7752,
        "series": [
          {
            "date": "2026-09-14",
            "close": 7619.98
          },
          {
            "date": "2026-09-15",
            "close": 7585.73
          },
          {
            "date": "2026-09-16",
            "close": 7551.8101
          },
          {
            "date": "2026-09-17",
            "close": 7637.7598
          },
          {
            "date": "2026-09-18",
            "close": 7650.5
          },
          {
            "date": "2026-09-21",
            "close": 7752
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
        "close": 26522.5391,
        "prevClose": 26418.3008,
        "change": 104.2383,
        "changePct": 0.39,
        "asOf": "2026-09-18",
        "prevAsOf": "2026-09-17",
        "gapDays": 1,
        "gapSuspect": false,
        "live": true,
        "latest": {
          "date": "2026-09-21",
          "close": 27040.6387,
          "prevDate": "2026-09-18",
          "prevClose": 26522.5391,
          "change": 518.0996,
          "changePct": 1.95,
          "gapDays": 3,
          "gapSuspect": false
        },
        "settled": {
          "date": "2026-09-18",
          "close": 26522.5391,
          "prevDate": "2026-09-17",
          "prevClose": 26418.3008,
          "change": 104.2383,
          "changePct": 0.39,
          "gapDays": 1,
          "gapSuspect": false
        },
        "quotePrice": 27040.639,
        "series": [
          {
            "date": "2026-09-14",
            "close": 26186.4102
          },
          {
            "date": "2026-09-15",
            "close": 25981.5703
          },
          {
            "date": "2026-09-16",
            "close": 25978.4297
          },
          {
            "date": "2026-09-17",
            "close": 26418.3008
          },
          {
            "date": "2026-09-18",
            "close": 26522.5391
          },
          {
            "date": "2026-09-21",
            "close": 27040.6387
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
        "close": 51682.6406,
        "prevClose": 51778.0391,
        "change": -95.3985,
        "changePct": -0.18,
        "asOf": "2026-09-18",
        "prevAsOf": "2026-09-17",
        "gapDays": 1,
        "gapSuspect": false,
        "live": true,
        "latest": {
          "date": "2026-09-21",
          "close": 51989.7813,
          "prevDate": "2026-09-18",
          "prevClose": 51682.6406,
          "change": 307.1407,
          "changePct": 0.59,
          "gapDays": 3,
          "gapSuspect": false
        },
        "settled": {
          "date": "2026-09-18",
          "close": 51682.6406,
          "prevDate": "2026-09-17",
          "prevClose": 51778.0391,
          "change": -95.3985,
          "changePct": -0.18,
          "gapDays": 1,
          "gapSuspect": false
        },
        "quotePrice": 51989.78,
        "series": [
          {
            "date": "2026-09-14",
            "close": 52421.1992
          },
          {
            "date": "2026-09-15",
            "close": 52093.1094
          },
          {
            "date": "2026-09-16",
            "close": 51461.8984
          },
          {
            "date": "2026-09-17",
            "close": 51778.0391
          },
          {
            "date": "2026-09-18",
            "close": 51682.6406
          },
          {
            "date": "2026-09-21",
            "close": 51989.7813
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
        "prevClose": 4.947,
        "change": 0.051,
        "changePct": 1.03,
        "asOf": "2026-09-18",
        "prevAsOf": "2026-09-17",
        "gapDays": 1,
        "gapSuspect": false,
        "live": true,
        "latest": {
          "date": "2026-09-21",
          "close": 4.955,
          "prevDate": "2026-09-18",
          "prevClose": 4.998,
          "change": -0.043,
          "changePct": -0.86,
          "gapDays": 3,
          "gapSuspect": false
        },
        "settled": {
          "date": "2026-09-18",
          "close": 4.998,
          "prevDate": "2026-09-17",
          "prevClose": 4.947,
          "change": 0.051,
          "changePct": 1.03,
          "gapDays": 1,
          "gapSuspect": false
        },
        "quotePrice": 4.955,
        "series": [
          {
            "date": "2026-09-14",
            "close": 4.961
          },
          {
            "date": "2026-09-15",
            "close": 4.996
          },
          {
            "date": "2026-09-16",
            "close": 5.006
          },
          {
            "date": "2026-09-17",
            "close": 4.947
          },
          {
            "date": "2026-09-18",
            "close": 4.998
          },
          {
            "date": "2026-09-21",
            "close": 4.955
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
        "close": 5.331,
        "prevClose": 5.296,
        "change": 0.035,
        "changePct": 0.66,
        "asOf": "2026-09-18",
        "prevAsOf": "2026-09-17",
        "gapDays": 1,
        "gapSuspect": false,
        "live": true,
        "latest": {
          "date": "2026-09-21",
          "close": 5.291,
          "prevDate": "2026-09-18",
          "prevClose": 5.331,
          "change": -0.04,
          "changePct": -0.75,
          "gapDays": 3,
          "gapSuspect": false
        },
        "settled": {
          "date": "2026-09-18",
          "close": 5.331,
          "prevDate": "2026-09-17",
          "prevClose": 5.296,
          "change": 0.035,
          "changePct": 0.66,
          "gapDays": 1,
          "gapSuspect": false
        },
        "quotePrice": 5.291,
        "series": [
          {
            "date": "2026-09-14",
            "close": 5.329
          },
          {
            "date": "2026-09-15",
            "close": 5.364
          },
          {
            "date": "2026-09-16",
            "close": 5.349
          },
          {
            "date": "2026-09-17",
            "close": 5.296
          },
          {
            "date": "2026-09-18",
            "close": 5.331
          },
          {
            "date": "2026-09-21",
            "close": 5.291
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
        "close": 4.856,
        "prevClose": 4.801,
        "change": 0.055,
        "changePct": 1.15,
        "asOf": "2026-09-18",
        "prevAsOf": "2026-09-17",
        "gapDays": 1,
        "gapSuspect": false,
        "live": true,
        "latest": {
          "date": "2026-09-21",
          "close": 4.82,
          "prevDate": "2026-09-18",
          "prevClose": 4.856,
          "change": -0.036,
          "changePct": -0.74,
          "gapDays": 3,
          "gapSuspect": false
        },
        "settled": {
          "date": "2026-09-18",
          "close": 4.856,
          "prevDate": "2026-09-17",
          "prevClose": 4.801,
          "change": 0.055,
          "changePct": 1.15,
          "gapDays": 1,
          "gapSuspect": false
        },
        "quotePrice": 4.82,
        "series": [
          {
            "date": "2026-09-14",
            "close": 4.79
          },
          {
            "date": "2026-09-15",
            "close": 4.826
          },
          {
            "date": "2026-09-16",
            "close": 4.859
          },
          {
            "date": "2026-09-17",
            "close": 4.801
          },
          {
            "date": "2026-09-18",
            "close": 4.856
          },
          {
            "date": "2026-09-21",
            "close": 4.82
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
        "close": 100.22,
        "prevClose": 100.22,
        "change": 0,
        "changePct": 0,
        "asOf": "2026-09-18",
        "prevAsOf": "2026-09-17",
        "gapDays": 1,
        "gapSuspect": false,
        "live": true,
        "latest": {
          "date": "2026-09-21",
          "close": 100.37,
          "prevDate": "2026-09-18",
          "prevClose": 100.22,
          "change": 0.15,
          "changePct": 0.15,
          "gapDays": 3,
          "gapSuspect": false
        },
        "settled": {
          "date": "2026-09-18",
          "close": 100.22,
          "prevDate": "2026-09-17",
          "prevClose": 100.22,
          "change": 0,
          "changePct": 0,
          "gapDays": 1,
          "gapSuspect": false
        },
        "quotePrice": 100.37,
        "series": [
          {
            "date": "2026-09-14",
            "close": 99.46
          },
          {
            "date": "2026-09-15",
            "close": 99.65
          },
          {
            "date": "2026-09-16",
            "close": 100.31
          },
          {
            "date": "2026-09-17",
            "close": 100.22
          },
          {
            "date": "2026-09-18",
            "close": 100.22
          },
          {
            "date": "2026-09-21",
            "close": 100.37
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
        "close": 100.3,
        "prevClose": 101.91,
        "change": -1.61,
        "changePct": -1.58,
        "asOf": "2026-09-18",
        "prevAsOf": "2026-09-17",
        "gapDays": 1,
        "gapSuspect": false,
        "live": true,
        "latest": {
          "date": "2026-09-21",
          "close": 91.34,
          "prevDate": "2026-09-18",
          "prevClose": 100.3,
          "change": -8.96,
          "changePct": -8.93,
          "gapDays": 3,
          "gapSuspect": false
        },
        "settled": {
          "date": "2026-09-18",
          "close": 100.3,
          "prevDate": "2026-09-17",
          "prevClose": 101.91,
          "change": -1.61,
          "changePct": -1.58,
          "gapDays": 1,
          "gapSuspect": false
        },
        "quotePrice": 91.34,
        "series": [
          {
            "date": "2026-09-14",
            "close": 101.39
          },
          {
            "date": "2026-09-15",
            "close": 105.83
          },
          {
            "date": "2026-09-16",
            "close": 102.43
          },
          {
            "date": "2026-09-17",
            "close": 101.91
          },
          {
            "date": "2026-09-18",
            "close": 100.3
          },
          {
            "date": "2026-09-21",
            "close": 91.34
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
        "close": 103.87,
        "prevClose": 104.82,
        "change": -0.95,
        "changePct": -0.91,
        "asOf": "2026-09-18",
        "prevAsOf": "2026-09-17",
        "gapDays": 1,
        "gapSuspect": false,
        "live": true,
        "latest": {
          "date": "2026-09-21",
          "close": 95.2,
          "prevDate": "2026-09-18",
          "prevClose": 103.87,
          "change": -8.67,
          "changePct": -8.35,
          "gapDays": 3,
          "gapSuspect": false
        },
        "settled": {
          "date": "2026-09-18",
          "close": 103.87,
          "prevDate": "2026-09-17",
          "prevClose": 104.82,
          "change": -0.95,
          "changePct": -0.91,
          "gapDays": 1,
          "gapSuspect": false
        },
        "quotePrice": 95.2,
        "series": [
          {
            "date": "2026-09-14",
            "close": 105.68
          },
          {
            "date": "2026-09-15",
            "close": 108.75
          },
          {
            "date": "2026-09-16",
            "close": 105.83
          },
          {
            "date": "2026-09-17",
            "close": 104.82
          },
          {
            "date": "2026-09-18",
            "close": 103.87
          },
          {
            "date": "2026-09-21",
            "close": 95.2
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
        "close": 4424.8999,
        "prevClose": 4399.7002,
        "change": 25.1997,
        "changePct": 0.57,
        "asOf": "2026-09-18",
        "prevAsOf": "2026-09-17",
        "gapDays": 1,
        "gapSuspect": false,
        "live": true,
        "latest": {
          "date": "2026-09-21",
          "close": 4388.2002,
          "prevDate": "2026-09-18",
          "prevClose": 4424.8999,
          "change": -36.6997,
          "changePct": -0.83,
          "gapDays": 3,
          "gapSuspect": false
        },
        "settled": {
          "date": "2026-09-18",
          "close": 4424.8999,
          "prevDate": "2026-09-17",
          "prevClose": 4399.7002,
          "change": 25.1997,
          "changePct": 0.57,
          "gapDays": 1,
          "gapSuspect": false
        },
        "quotePrice": 4388.2,
        "series": [
          {
            "date": "2026-09-14",
            "close": 4351.8999
          },
          {
            "date": "2026-09-15",
            "close": 4332.7998
          },
          {
            "date": "2026-09-16",
            "close": 4387.5
          },
          {
            "date": "2026-09-17",
            "close": 4399.7002
          },
          {
            "date": "2026-09-18",
            "close": 4424.8999
          },
          {
            "date": "2026-09-21",
            "close": 4388.2002
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
        "close": 156.129,
        "prevClose": 156.014,
        "change": 0.115,
        "changePct": 0.07,
        "asOf": "2026-09-18",
        "prevAsOf": "2026-09-17",
        "gapDays": 1,
        "gapSuspect": false,
        "live": true,
        "latest": {
          "date": "2026-09-21",
          "close": 157.434,
          "prevDate": "2026-09-18",
          "prevClose": 156.129,
          "change": 1.305,
          "changePct": 0.84,
          "gapDays": 3,
          "gapSuspect": false
        },
        "settled": {
          "date": "2026-09-18",
          "close": 156.129,
          "prevDate": "2026-09-17",
          "prevClose": 156.014,
          "change": 0.115,
          "changePct": 0.07,
          "gapDays": 1,
          "gapSuspect": false
        },
        "quotePrice": 157.434,
        "series": [
          {
            "date": "2026-09-14",
            "close": 153.424
          },
          {
            "date": "2026-09-15",
            "close": 154.385
          },
          {
            "date": "2026-09-16",
            "close": 155.266
          },
          {
            "date": "2026-09-17",
            "close": 156.014
          },
          {
            "date": "2026-09-18",
            "close": 156.129
          },
          {
            "date": "2026-09-21",
            "close": 157.434
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
        "close": 6.7074,
        "prevClose": 6.706,
        "change": 0.0014,
        "changePct": 0.02,
        "asOf": "2026-09-18",
        "prevAsOf": "2026-09-17",
        "gapDays": 1,
        "gapSuspect": false,
        "live": true,
        "latest": {
          "date": "2026-09-21",
          "close": 6.6835,
          "prevDate": "2026-09-18",
          "prevClose": 6.7074,
          "change": -0.0239,
          "changePct": -0.36,
          "gapDays": 3,
          "gapSuspect": false
        },
        "settled": {
          "date": "2026-09-18",
          "close": 6.7074,
          "prevDate": "2026-09-17",
          "prevClose": 6.706,
          "change": 0.0014,
          "changePct": 0.02,
          "gapDays": 1,
          "gapSuspect": false
        },
        "quotePrice": 6.6835,
        "series": [
          {
            "date": "2026-09-14",
            "close": 6.708
          },
          {
            "date": "2026-09-15",
            "close": 6.7082
          },
          {
            "date": "2026-09-16",
            "close": 6.7112
          },
          {
            "date": "2026-09-17",
            "close": 6.706
          },
          {
            "date": "2026-09-18",
            "close": 6.7074
          },
          {
            "date": "2026-09-21",
            "close": 6.6835
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
        "close": 31.8511,
        "prevClose": 31.8596,
        "change": -0.0085,
        "changePct": -0.03,
        "asOf": "2026-09-18",
        "prevAsOf": "2026-09-17",
        "gapDays": 1,
        "gapSuspect": false,
        "live": true,
        "latest": {
          "date": "2026-09-21",
          "close": 31.705,
          "prevDate": "2026-09-18",
          "prevClose": 31.8511,
          "change": -0.1461,
          "changePct": -0.46,
          "gapDays": 3,
          "gapSuspect": false
        },
        "settled": {
          "date": "2026-09-18",
          "close": 31.8511,
          "prevDate": "2026-09-17",
          "prevClose": 31.8596,
          "change": -0.0085,
          "changePct": -0.03,
          "gapDays": 1,
          "gapSuspect": false
        },
        "quotePrice": 31.705,
        "series": [
          {
            "date": "2026-09-14",
            "close": 31.6762
          },
          {
            "date": "2026-09-15",
            "close": 31.7176
          },
          {
            "date": "2026-09-16",
            "close": 31.7734
          },
          {
            "date": "2026-09-17",
            "close": 31.8596
          },
          {
            "date": "2026-09-18",
            "close": 31.8511
          },
          {
            "date": "2026-09-21",
            "close": 31.705
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
        "close": 47180.75,
        "prevClose": 46288,
        "change": 892.75,
        "changePct": 1.93,
        "asOf": "2026-09-18",
        "prevAsOf": "2026-09-17",
        "gapDays": 1,
        "gapSuspect": false,
        "live": false,
        "latest": {
          "date": "2026-09-18",
          "close": 47180.75,
          "prevDate": "2026-09-17",
          "prevClose": 46288,
          "change": 892.75,
          "changePct": 1.93,
          "gapDays": 1,
          "gapSuspect": false
        },
        "settled": {
          "date": "2026-09-18",
          "close": 47180.75,
          "prevDate": "2026-09-17",
          "prevClose": 46288,
          "change": 892.75,
          "changePct": 1.93,
          "gapDays": 1,
          "gapSuspect": false
        },
        "quotePrice": 47718.84,
        "series": [
          {
            "date": "2026-09-11",
            "close": 46184.8516
          },
          {
            "date": "2026-09-14",
            "close": 45862.5195
          },
          {
            "date": "2026-09-15",
            "close": 45511.4883
          },
          {
            "date": "2026-09-16",
            "close": 45848.8984
          },
          {
            "date": "2026-09-17",
            "close": 46288
          },
          {
            "date": "2026-09-18",
            "close": 47180.75
          }
        ],
        "currency": "TWD",
        "timezone": "Asia/Taipei",
        "source": "Yahoo Finance chart API（日線）"
      }
    }
  }
};
