/**
 * market-global.js — 由 GitHub Actions 自動產生，請勿手動編輯。
 * 產生器：scripts/fetch-global-market.mjs
 *
 * 國際行情中繼資料，供每日 dashboard 更新流程讀用，不會被 index.html 載入。
 * ok:false 代表該標的當次抓不到，error 說明原因——請據實標註，不要沿用舊值。
 */
window.MARKET_GLOBAL = {
  "fetchedAt": "2026-09-22T01:27:20.495Z",
  "okCount": 16,
  "totalCount": 16,
  "items": {
    "sox": {
      "ok": true,
      "label": "費城半導體 SOX",
      "symbol": "%5ESOX",
      "value": {
        "close": 12433.1709,
        "prevClose": 11921.6904,
        "change": 511.4805,
        "changePct": 4.29,
        "asOf": "2026-09-21",
        "prevAsOf": "2026-09-18",
        "gapDays": 3,
        "gapSuspect": false,
        "live": false,
        "latest": {
          "date": "2026-09-21",
          "close": 12433.1709,
          "prevDate": "2026-09-18",
          "prevClose": 11921.6904,
          "change": 511.4805,
          "changePct": 4.29,
          "gapDays": 3,
          "gapSuspect": false
        },
        "settled": {
          "date": "2026-09-21",
          "close": 12433.1709,
          "prevDate": "2026-09-18",
          "prevClose": 11921.6904,
          "change": 511.4805,
          "changePct": 4.29,
          "gapDays": 3,
          "gapSuspect": false
        },
        "quotePrice": 12433.171,
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
            "close": 12433.1709
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
        "close": 14.87,
        "prevClose": 14.81,
        "change": 0.06,
        "changePct": 0.41,
        "asOf": "2026-09-21",
        "prevAsOf": "2026-09-18",
        "gapDays": 3,
        "gapSuspect": false,
        "live": false,
        "latest": {
          "date": "2026-09-21",
          "close": 14.87,
          "prevDate": "2026-09-18",
          "prevClose": 14.81,
          "change": 0.06,
          "changePct": 0.41,
          "gapDays": 3,
          "gapSuspect": false
        },
        "settled": {
          "date": "2026-09-21",
          "close": 14.87,
          "prevDate": "2026-09-18",
          "prevClose": 14.81,
          "change": 0.06,
          "changePct": 0.41,
          "gapDays": 3,
          "gapSuspect": false
        },
        "quotePrice": 14.87,
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
            "close": 14.87
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
        "close": 7764.7002,
        "prevClose": 7650.5,
        "change": 114.2002,
        "changePct": 1.49,
        "asOf": "2026-09-21",
        "prevAsOf": "2026-09-18",
        "gapDays": 3,
        "gapSuspect": false,
        "live": false,
        "latest": {
          "date": "2026-09-21",
          "close": 7764.7002,
          "prevDate": "2026-09-18",
          "prevClose": 7650.5,
          "change": 114.2002,
          "changePct": 1.49,
          "gapDays": 3,
          "gapSuspect": false
        },
        "settled": {
          "date": "2026-09-21",
          "close": 7764.7002,
          "prevDate": "2026-09-18",
          "prevClose": 7650.5,
          "change": 114.2002,
          "changePct": 1.49,
          "gapDays": 3,
          "gapSuspect": false
        },
        "quotePrice": 7764.7,
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
            "close": 7764.7002
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
        "close": 27122.0938,
        "prevClose": 26522.5391,
        "change": 599.5547,
        "changePct": 2.26,
        "asOf": "2026-09-21",
        "prevAsOf": "2026-09-18",
        "gapDays": 3,
        "gapSuspect": false,
        "live": false,
        "latest": {
          "date": "2026-09-21",
          "close": 27122.0938,
          "prevDate": "2026-09-18",
          "prevClose": 26522.5391,
          "change": 599.5547,
          "changePct": 2.26,
          "gapDays": 3,
          "gapSuspect": false
        },
        "settled": {
          "date": "2026-09-21",
          "close": 27122.0938,
          "prevDate": "2026-09-18",
          "prevClose": 26522.5391,
          "change": 599.5547,
          "changePct": 2.26,
          "gapDays": 3,
          "gapSuspect": false
        },
        "quotePrice": 27122.094,
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
            "close": 27122.0938
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
        "close": 52048.8281,
        "prevClose": 51682.6406,
        "change": 366.1875,
        "changePct": 0.71,
        "asOf": "2026-09-21",
        "prevAsOf": "2026-09-18",
        "gapDays": 3,
        "gapSuspect": false,
        "live": false,
        "latest": {
          "date": "2026-09-21",
          "close": 52048.8281,
          "prevDate": "2026-09-18",
          "prevClose": 51682.6406,
          "change": 366.1875,
          "changePct": 0.71,
          "gapDays": 3,
          "gapSuspect": false
        },
        "settled": {
          "date": "2026-09-21",
          "close": 52048.8281,
          "prevDate": "2026-09-18",
          "prevClose": 51682.6406,
          "change": 366.1875,
          "changePct": 0.71,
          "gapDays": 3,
          "gapSuspect": false
        },
        "quotePrice": 52048.83,
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
            "close": 52048.8281
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
        "close": 4.963,
        "prevClose": 4.998,
        "change": -0.035,
        "changePct": -0.7,
        "asOf": "2026-09-21",
        "prevAsOf": "2026-09-18",
        "gapDays": 3,
        "gapSuspect": false,
        "live": false,
        "latest": {
          "date": "2026-09-21",
          "close": 4.963,
          "prevDate": "2026-09-18",
          "prevClose": 4.998,
          "change": -0.035,
          "changePct": -0.7,
          "gapDays": 3,
          "gapSuspect": false
        },
        "settled": {
          "date": "2026-09-21",
          "close": 4.963,
          "prevDate": "2026-09-18",
          "prevClose": 4.998,
          "change": -0.035,
          "changePct": -0.7,
          "gapDays": 3,
          "gapSuspect": false
        },
        "quotePrice": 4.963,
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
            "close": 4.963
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
        "close": 5.296,
        "prevClose": 5.331,
        "change": -0.035,
        "changePct": -0.66,
        "asOf": "2026-09-21",
        "prevAsOf": "2026-09-18",
        "gapDays": 3,
        "gapSuspect": false,
        "live": false,
        "latest": {
          "date": "2026-09-21",
          "close": 5.296,
          "prevDate": "2026-09-18",
          "prevClose": 5.331,
          "change": -0.035,
          "changePct": -0.66,
          "gapDays": 3,
          "gapSuspect": false
        },
        "settled": {
          "date": "2026-09-21",
          "close": 5.296,
          "prevDate": "2026-09-18",
          "prevClose": 5.331,
          "change": -0.035,
          "changePct": -0.66,
          "gapDays": 3,
          "gapSuspect": false
        },
        "quotePrice": 5.296,
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
            "close": 5.296
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
        "close": 4.834,
        "prevClose": 4.856,
        "change": -0.022,
        "changePct": -0.45,
        "asOf": "2026-09-21",
        "prevAsOf": "2026-09-18",
        "gapDays": 3,
        "gapSuspect": false,
        "live": false,
        "latest": {
          "date": "2026-09-21",
          "close": 4.834,
          "prevDate": "2026-09-18",
          "prevClose": 4.856,
          "change": -0.022,
          "changePct": -0.45,
          "gapDays": 3,
          "gapSuspect": false
        },
        "settled": {
          "date": "2026-09-21",
          "close": 4.834,
          "prevDate": "2026-09-18",
          "prevClose": 4.856,
          "change": -0.022,
          "changePct": -0.45,
          "gapDays": 3,
          "gapSuspect": false
        },
        "quotePrice": 4.834,
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
            "close": 4.834
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
          "close": 100.413,
          "prevDate": "2026-09-18",
          "prevClose": 100.22,
          "change": 0.193,
          "changePct": 0.19,
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
        "quotePrice": 100.413,
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
            "close": 100.413
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
          "close": 92.77,
          "prevDate": "2026-09-18",
          "prevClose": 100.3,
          "change": -7.53,
          "changePct": -7.51,
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
        "quotePrice": 92.77,
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
            "close": 92.77
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
          "close": 96.78,
          "prevDate": "2026-09-18",
          "prevClose": 103.87,
          "change": -7.09,
          "changePct": -6.83,
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
        "quotePrice": 96.78,
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
            "close": 96.78
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
        "close": 157.046,
        "prevClose": 156.129,
        "change": 0.917,
        "changePct": 0.59,
        "asOf": "2026-09-21",
        "prevAsOf": "2026-09-18",
        "gapDays": 3,
        "gapSuspect": false,
        "live": true,
        "latest": {
          "date": "2026-09-22",
          "close": 157.458,
          "prevDate": "2026-09-21",
          "prevClose": 157.046,
          "change": 0.412,
          "changePct": 0.26,
          "gapDays": 1,
          "gapSuspect": false
        },
        "settled": {
          "date": "2026-09-21",
          "close": 157.046,
          "prevDate": "2026-09-18",
          "prevClose": 156.129,
          "change": 0.917,
          "changePct": 0.59,
          "gapDays": 3,
          "gapSuspect": false
        },
        "quotePrice": 157.458,
        "series": [
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
            "close": 157.046
          },
          {
            "date": "2026-09-22",
            "close": 157.458
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
        "close": 6.6975,
        "prevClose": 6.7074,
        "change": -0.0099,
        "changePct": -0.15,
        "asOf": "2026-09-21",
        "prevAsOf": "2026-09-18",
        "gapDays": 3,
        "gapSuspect": false,
        "live": true,
        "latest": {
          "date": "2026-09-22",
          "close": 6.6845,
          "prevDate": "2026-09-21",
          "prevClose": 6.6975,
          "change": -0.013,
          "changePct": -0.19,
          "gapDays": 1,
          "gapSuspect": false
        },
        "settled": {
          "date": "2026-09-21",
          "close": 6.6975,
          "prevDate": "2026-09-18",
          "prevClose": 6.7074,
          "change": -0.0099,
          "changePct": -0.15,
          "gapDays": 3,
          "gapSuspect": false
        },
        "quotePrice": 6.6845,
        "series": [
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
            "close": 6.6975
          },
          {
            "date": "2026-09-22",
            "close": 6.6845
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
        "close": 31.8091,
        "prevClose": 31.8511,
        "change": -0.042,
        "changePct": -0.13,
        "asOf": "2026-09-21",
        "prevAsOf": "2026-09-18",
        "gapDays": 3,
        "gapSuspect": false,
        "live": true,
        "latest": {
          "date": "2026-09-22",
          "close": 31.682,
          "prevDate": "2026-09-21",
          "prevClose": 31.8091,
          "change": -0.1271,
          "changePct": -0.4,
          "gapDays": 1,
          "gapSuspect": false
        },
        "settled": {
          "date": "2026-09-21",
          "close": 31.8091,
          "prevDate": "2026-09-18",
          "prevClose": 31.8511,
          "change": -0.042,
          "changePct": -0.13,
          "gapDays": 3,
          "gapSuspect": false
        },
        "quotePrice": 31.682,
        "series": [
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
            "close": 31.8091
          },
          {
            "date": "2026-09-22",
            "close": 31.682
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
        "live": true,
        "latest": {
          "date": "2026-09-22",
          "close": 48460.1602,
          "prevDate": "2026-09-18",
          "prevClose": 47180.75,
          "change": 1279.4102,
          "changePct": 2.71,
          "gapDays": 4,
          "gapSuspect": true
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
        "quotePrice": 48460.16,
        "series": [
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
          },
          {
            "date": "2026-09-22",
            "close": 48460.1602
          }
        ],
        "currency": "TWD",
        "timezone": "Asia/Taipei",
        "source": "Yahoo Finance chart API（日線）"
      }
    }
  }
};
