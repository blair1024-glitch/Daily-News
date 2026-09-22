/**
 * market-global.js — 由 GitHub Actions 自動產生，請勿手動編輯。
 * 產生器：scripts/fetch-global-market.mjs
 *
 * 國際行情中繼資料，供每日 dashboard 更新流程讀用，不會被 index.html 載入。
 * ok:false 代表該標的當次抓不到，error 說明原因——請據實標註，不要沿用舊值。
 */
window.MARKET_GLOBAL = {
  "fetchedAt": "2026-09-22T23:44:33.030Z",
  "okCount": 16,
  "totalCount": 16,
  "items": {
    "sox": {
      "ok": true,
      "label": "費城半導體 SOX",
      "symbol": "%5ESOX",
      "value": {
        "close": 12689.8203,
        "prevClose": 12433.1699,
        "change": 256.6504,
        "changePct": 2.06,
        "asOf": "2026-09-22",
        "prevAsOf": "2026-09-21",
        "gapDays": 1,
        "gapSuspect": false,
        "live": false,
        "latest": {
          "date": "2026-09-22",
          "close": 12689.8203,
          "prevDate": "2026-09-21",
          "prevClose": 12433.1699,
          "change": 256.6504,
          "changePct": 2.06,
          "gapDays": 1,
          "gapSuspect": false
        },
        "settled": {
          "date": "2026-09-22",
          "close": 12689.8203,
          "prevDate": "2026-09-21",
          "prevClose": 12433.1699,
          "change": 256.6504,
          "changePct": 2.06,
          "gapDays": 1,
          "gapSuspect": false
        },
        "quotePrice": 12689.82,
        "series": [
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
            "close": 12433.1699
          },
          {
            "date": "2026-09-22",
            "close": 12689.8203
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
        "close": 14.21,
        "prevClose": 14.87,
        "change": -0.66,
        "changePct": -4.44,
        "asOf": "2026-09-22",
        "prevAsOf": "2026-09-21",
        "gapDays": 1,
        "gapSuspect": false,
        "live": false,
        "latest": {
          "date": "2026-09-22",
          "close": 14.21,
          "prevDate": "2026-09-21",
          "prevClose": 14.87,
          "change": -0.66,
          "changePct": -4.44,
          "gapDays": 1,
          "gapSuspect": false
        },
        "settled": {
          "date": "2026-09-22",
          "close": 14.21,
          "prevDate": "2026-09-21",
          "prevClose": 14.87,
          "change": -0.66,
          "changePct": -4.44,
          "gapDays": 1,
          "gapSuspect": false
        },
        "quotePrice": 14.21,
        "series": [
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
          },
          {
            "date": "2026-09-22",
            "close": 14.21
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
        "close": 7764.6401,
        "prevClose": 7764.7002,
        "change": -0.0601,
        "changePct": 0,
        "asOf": "2026-09-22",
        "prevAsOf": "2026-09-21",
        "gapDays": 1,
        "gapSuspect": false,
        "live": false,
        "latest": {
          "date": "2026-09-22",
          "close": 7764.6401,
          "prevDate": "2026-09-21",
          "prevClose": 7764.7002,
          "change": -0.0601,
          "changePct": 0,
          "gapDays": 1,
          "gapSuspect": false
        },
        "settled": {
          "date": "2026-09-22",
          "close": 7764.6401,
          "prevDate": "2026-09-21",
          "prevClose": 7764.7002,
          "change": -0.0601,
          "changePct": 0,
          "gapDays": 1,
          "gapSuspect": false
        },
        "quotePrice": 7764.64,
        "series": [
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
          },
          {
            "date": "2026-09-22",
            "close": 7764.6401
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
        "close": 27244.2773,
        "prevClose": 27122.0898,
        "change": 122.1875,
        "changePct": 0.45,
        "asOf": "2026-09-22",
        "prevAsOf": "2026-09-21",
        "gapDays": 1,
        "gapSuspect": false,
        "live": false,
        "latest": {
          "date": "2026-09-22",
          "close": 27244.2773,
          "prevDate": "2026-09-21",
          "prevClose": 27122.0898,
          "change": 122.1875,
          "changePct": 0.45,
          "gapDays": 1,
          "gapSuspect": false
        },
        "settled": {
          "date": "2026-09-22",
          "close": 27244.2773,
          "prevDate": "2026-09-21",
          "prevClose": 27122.0898,
          "change": 122.1875,
          "changePct": 0.45,
          "gapDays": 1,
          "gapSuspect": false
        },
        "quotePrice": 27244.277,
        "series": [
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
            "close": 27122.0898
          },
          {
            "date": "2026-09-22",
            "close": 27244.2773
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
        "close": 51863.6914,
        "prevClose": 52048.8281,
        "change": -185.1367,
        "changePct": -0.36,
        "asOf": "2026-09-22",
        "prevAsOf": "2026-09-21",
        "gapDays": 1,
        "gapSuspect": false,
        "live": false,
        "latest": {
          "date": "2026-09-22",
          "close": 51863.6914,
          "prevDate": "2026-09-21",
          "prevClose": 52048.8281,
          "change": -185.1367,
          "changePct": -0.36,
          "gapDays": 1,
          "gapSuspect": false
        },
        "settled": {
          "date": "2026-09-22",
          "close": 51863.6914,
          "prevDate": "2026-09-21",
          "prevClose": 52048.8281,
          "change": -185.1367,
          "changePct": -0.36,
          "gapDays": 1,
          "gapSuspect": false
        },
        "quotePrice": 51863.69,
        "series": [
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
          },
          {
            "date": "2026-09-22",
            "close": 51863.6914
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
        "close": 4.968,
        "prevClose": 4.963,
        "change": 0.005,
        "changePct": 0.1,
        "asOf": "2026-09-22",
        "prevAsOf": "2026-09-21",
        "gapDays": 1,
        "gapSuspect": false,
        "live": false,
        "latest": {
          "date": "2026-09-22",
          "close": 4.968,
          "prevDate": "2026-09-21",
          "prevClose": 4.963,
          "change": 0.005,
          "changePct": 0.1,
          "gapDays": 1,
          "gapSuspect": false
        },
        "settled": {
          "date": "2026-09-22",
          "close": 4.968,
          "prevDate": "2026-09-21",
          "prevClose": 4.963,
          "change": 0.005,
          "changePct": 0.1,
          "gapDays": 1,
          "gapSuspect": false
        },
        "quotePrice": 4.968,
        "series": [
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
          },
          {
            "date": "2026-09-22",
            "close": 4.968
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
        "close": 5.303,
        "prevClose": 5.296,
        "change": 0.007,
        "changePct": 0.13,
        "asOf": "2026-09-22",
        "prevAsOf": "2026-09-21",
        "gapDays": 1,
        "gapSuspect": false,
        "live": false,
        "latest": {
          "date": "2026-09-22",
          "close": 5.303,
          "prevDate": "2026-09-21",
          "prevClose": 5.296,
          "change": 0.007,
          "changePct": 0.13,
          "gapDays": 1,
          "gapSuspect": false
        },
        "settled": {
          "date": "2026-09-22",
          "close": 5.303,
          "prevDate": "2026-09-21",
          "prevClose": 5.296,
          "change": 0.007,
          "changePct": 0.13,
          "gapDays": 1,
          "gapSuspect": false
        },
        "quotePrice": 5.303,
        "series": [
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
          },
          {
            "date": "2026-09-22",
            "close": 5.303
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
        "close": 4.842,
        "prevClose": 4.834,
        "change": 0.008,
        "changePct": 0.17,
        "asOf": "2026-09-22",
        "prevAsOf": "2026-09-21",
        "gapDays": 1,
        "gapSuspect": false,
        "live": false,
        "latest": {
          "date": "2026-09-22",
          "close": 4.842,
          "prevDate": "2026-09-21",
          "prevClose": 4.834,
          "change": 0.008,
          "changePct": 0.17,
          "gapDays": 1,
          "gapSuspect": false
        },
        "settled": {
          "date": "2026-09-22",
          "close": 4.842,
          "prevDate": "2026-09-21",
          "prevClose": 4.834,
          "change": 0.008,
          "changePct": 0.17,
          "gapDays": 1,
          "gapSuspect": false
        },
        "quotePrice": 4.842,
        "series": [
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
          },
          {
            "date": "2026-09-22",
            "close": 4.842
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
        "close": 100.43,
        "prevClose": 100.22,
        "change": 0.21,
        "changePct": 0.21,
        "asOf": "2026-09-21",
        "prevAsOf": "2026-09-18",
        "gapDays": 3,
        "gapSuspect": false,
        "live": true,
        "latest": {
          "date": "2026-09-22",
          "close": 100.56,
          "prevDate": "2026-09-21",
          "prevClose": 100.43,
          "change": 0.13,
          "changePct": 0.13,
          "gapDays": 1,
          "gapSuspect": false
        },
        "settled": {
          "date": "2026-09-21",
          "close": 100.43,
          "prevDate": "2026-09-18",
          "prevClose": 100.22,
          "change": 0.21,
          "changePct": 0.21,
          "gapDays": 3,
          "gapSuspect": false
        },
        "quotePrice": 100.56,
        "series": [
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
            "close": 100.43
          },
          {
            "date": "2026-09-22",
            "close": 100.56
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
        "close": 95.78,
        "prevClose": 100.3,
        "change": -4.52,
        "changePct": -4.51,
        "asOf": "2026-09-21",
        "prevAsOf": "2026-09-18",
        "gapDays": 3,
        "gapSuspect": false,
        "live": true,
        "latest": {
          "date": "2026-09-22",
          "close": 89.65,
          "prevDate": "2026-09-21",
          "prevClose": 95.78,
          "change": -6.13,
          "changePct": -6.4,
          "gapDays": 1,
          "gapSuspect": false
        },
        "settled": {
          "date": "2026-09-21",
          "close": 95.78,
          "prevDate": "2026-09-18",
          "prevClose": 100.3,
          "change": -4.52,
          "changePct": -4.51,
          "gapDays": 3,
          "gapSuspect": false
        },
        "quotePrice": 89.65,
        "series": [
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
            "close": 95.78
          },
          {
            "date": "2026-09-22",
            "close": 89.65
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
        "close": 100.34,
        "prevClose": 103.87,
        "change": -3.53,
        "changePct": -3.4,
        "asOf": "2026-09-21",
        "prevAsOf": "2026-09-18",
        "gapDays": 3,
        "gapSuspect": false,
        "live": true,
        "latest": {
          "date": "2026-09-22",
          "close": 98.52,
          "prevDate": "2026-09-21",
          "prevClose": 100.34,
          "change": -1.82,
          "changePct": -1.81,
          "gapDays": 1,
          "gapSuspect": false
        },
        "settled": {
          "date": "2026-09-21",
          "close": 100.34,
          "prevDate": "2026-09-18",
          "prevClose": 103.87,
          "change": -3.53,
          "changePct": -3.4,
          "gapDays": 3,
          "gapSuspect": false
        },
        "quotePrice": 98.52,
        "series": [
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
            "close": 100.34
          },
          {
            "date": "2026-09-22",
            "close": 98.52
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
        "close": 4383.8999,
        "prevClose": 4424.8999,
        "change": -41,
        "changePct": -0.93,
        "asOf": "2026-09-21",
        "prevAsOf": "2026-09-18",
        "gapDays": 3,
        "gapSuspect": false,
        "live": true,
        "latest": {
          "date": "2026-09-22",
          "close": 4402.2998,
          "prevDate": "2026-09-21",
          "prevClose": 4383.8999,
          "change": 18.3999,
          "changePct": 0.42,
          "gapDays": 1,
          "gapSuspect": false
        },
        "settled": {
          "date": "2026-09-21",
          "close": 4383.8999,
          "prevDate": "2026-09-18",
          "prevClose": 4424.8999,
          "change": -41,
          "changePct": -0.93,
          "gapDays": 3,
          "gapSuspect": false
        },
        "quotePrice": 4402.3,
        "series": [
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
            "close": 4383.8999
          },
          {
            "date": "2026-09-22",
            "close": 4402.2998
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
        "close": 157.369,
        "prevClose": 157.046,
        "change": 0.323,
        "changePct": 0.21,
        "asOf": "2026-09-22",
        "prevAsOf": "2026-09-21",
        "gapDays": 1,
        "gapSuspect": false,
        "live": true,
        "latest": {
          "date": "2026-09-23",
          "close": 157.451,
          "prevDate": "2026-09-22",
          "prevClose": 157.369,
          "change": 0.082,
          "changePct": 0.05,
          "gapDays": 1,
          "gapSuspect": false
        },
        "settled": {
          "date": "2026-09-22",
          "close": 157.369,
          "prevDate": "2026-09-21",
          "prevClose": 157.046,
          "change": 0.323,
          "changePct": 0.21,
          "gapDays": 1,
          "gapSuspect": false
        },
        "quotePrice": 157.451,
        "series": [
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
            "close": 157.369
          },
          {
            "date": "2026-09-23",
            "close": 157.451
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
          "close": 6.6953,
          "prevDate": "2026-09-21",
          "prevClose": 6.6975,
          "change": -0.0022,
          "changePct": -0.03,
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
        "quotePrice": 6.6897,
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
            "close": 6.6953
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
        "close": 31.7384,
        "prevClose": 31.8091,
        "change": -0.0707,
        "changePct": -0.22,
        "asOf": "2026-09-22",
        "prevAsOf": "2026-09-21",
        "gapDays": 1,
        "gapSuspect": false,
        "live": true,
        "latest": {
          "date": "2026-09-23",
          "close": 31.697,
          "prevDate": "2026-09-22",
          "prevClose": 31.7384,
          "change": -0.0414,
          "changePct": -0.13,
          "gapDays": 1,
          "gapSuspect": false
        },
        "settled": {
          "date": "2026-09-22",
          "close": 31.7384,
          "prevDate": "2026-09-21",
          "prevClose": 31.8091,
          "change": -0.0707,
          "changePct": -0.22,
          "gapDays": 1,
          "gapSuspect": false
        },
        "quotePrice": 31.697,
        "series": [
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
            "close": 31.7384
          },
          {
            "date": "2026-09-23",
            "close": 31.697
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
        "close": 47718.8398,
        "prevClose": 47180.75,
        "change": 538.0898,
        "changePct": 1.14,
        "asOf": "2026-09-21",
        "prevAsOf": "2026-09-18",
        "gapDays": 3,
        "gapSuspect": false,
        "live": false,
        "latest": {
          "date": "2026-09-21",
          "close": 47718.8398,
          "prevDate": "2026-09-18",
          "prevClose": 47180.75,
          "change": 538.0898,
          "changePct": 1.14,
          "gapDays": 3,
          "gapSuspect": false
        },
        "settled": {
          "date": "2026-09-21",
          "close": 47718.8398,
          "prevDate": "2026-09-18",
          "prevClose": 47180.75,
          "change": 538.0898,
          "changePct": 1.14,
          "gapDays": 3,
          "gapSuspect": false
        },
        "quotePrice": 47800.17,
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
            "date": "2026-09-21",
            "close": 47718.8398
          }
        ],
        "currency": "TWD",
        "timezone": "Asia/Taipei",
        "source": "Yahoo Finance chart API（日線）"
      }
    }
  }
};
