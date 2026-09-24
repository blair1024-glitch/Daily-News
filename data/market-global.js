/**
 * market-global.js — 由 GitHub Actions 自動產生，請勿手動編輯。
 * 產生器：scripts/fetch-global-market.mjs
 *
 * 國際行情中繼資料，供每日 dashboard 更新流程讀用，不會被 index.html 載入。
 * ok:false 代表該標的當次抓不到，error 說明原因——請據實標註，不要沿用舊值。
 */
window.MARKET_GLOBAL = {
  "fetchedAt": "2026-09-24T15:43:22.851Z",
  "okCount": 16,
  "totalCount": 16,
  "items": {
    "sox": {
      "ok": true,
      "label": "費城半導體 SOX",
      "symbol": "%5ESOX",
      "value": {
        "close": 12534.2803,
        "prevClose": 12433.1699,
        "change": 101.1104,
        "changePct": 0.81,
        "asOf": "2026-09-23",
        "prevAsOf": "2026-09-21",
        "gapDays": 2,
        "gapSuspect": false,
        "live": true,
        "latest": {
          "date": "2026-09-24",
          "close": 12307.9521,
          "prevDate": "2026-09-23",
          "prevClose": 12534.2803,
          "change": -226.3282,
          "changePct": -1.81,
          "gapDays": 1,
          "gapSuspect": false
        },
        "settled": {
          "date": "2026-09-23",
          "close": 12534.2803,
          "prevDate": "2026-09-21",
          "prevClose": 12433.1699,
          "change": 101.1104,
          "changePct": 0.81,
          "gapDays": 2,
          "gapSuspect": false
        },
        "quotePrice": 12307.952,
        "series": [
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
            "date": "2026-09-23",
            "close": 12534.2803
          },
          {
            "date": "2026-09-24",
            "close": 12307.9521
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
        "close": 15.18,
        "prevClose": 14.87,
        "change": 0.31,
        "changePct": 2.08,
        "asOf": "2026-09-23",
        "prevAsOf": "2026-09-21",
        "gapDays": 2,
        "gapSuspect": false,
        "live": true,
        "latest": {
          "date": "2026-09-24",
          "close": 16.11,
          "prevDate": "2026-09-23",
          "prevClose": 15.18,
          "change": 0.93,
          "changePct": 6.13,
          "gapDays": 1,
          "gapSuspect": false
        },
        "settled": {
          "date": "2026-09-23",
          "close": 15.18,
          "prevDate": "2026-09-21",
          "prevClose": 14.87,
          "change": 0.31,
          "changePct": 2.08,
          "gapDays": 2,
          "gapSuspect": false
        },
        "quotePrice": 16.11,
        "series": [
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
            "date": "2026-09-23",
            "close": 15.18
          },
          {
            "date": "2026-09-24",
            "close": 16.11
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
        "close": 7706.0298,
        "prevClose": 7764.7002,
        "change": -58.6704,
        "changePct": -0.76,
        "asOf": "2026-09-23",
        "prevAsOf": "2026-09-21",
        "gapDays": 2,
        "gapSuspect": false,
        "live": true,
        "latest": {
          "date": "2026-09-24",
          "close": 7667.52,
          "prevDate": "2026-09-23",
          "prevClose": 7706.0298,
          "change": -38.5098,
          "changePct": -0.5,
          "gapDays": 1,
          "gapSuspect": false
        },
        "settled": {
          "date": "2026-09-23",
          "close": 7706.0298,
          "prevDate": "2026-09-21",
          "prevClose": 7764.7002,
          "change": -58.6704,
          "changePct": -0.76,
          "gapDays": 2,
          "gapSuspect": false
        },
        "quotePrice": 7667.52,
        "series": [
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
            "date": "2026-09-23",
            "close": 7706.0298
          },
          {
            "date": "2026-09-24",
            "close": 7667.52
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
        "close": 26936.0391,
        "prevClose": 27122.0898,
        "change": -186.0507,
        "changePct": -0.69,
        "asOf": "2026-09-23",
        "prevAsOf": "2026-09-21",
        "gapDays": 2,
        "gapSuspect": false,
        "live": true,
        "latest": {
          "date": "2026-09-24",
          "close": 26723.4531,
          "prevDate": "2026-09-23",
          "prevClose": 26936.0391,
          "change": -212.586,
          "changePct": -0.79,
          "gapDays": 1,
          "gapSuspect": false
        },
        "settled": {
          "date": "2026-09-23",
          "close": 26936.0391,
          "prevDate": "2026-09-21",
          "prevClose": 27122.0898,
          "change": -186.0507,
          "changePct": -0.69,
          "gapDays": 2,
          "gapSuspect": false
        },
        "quotePrice": 26723.453,
        "series": [
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
            "date": "2026-09-23",
            "close": 26936.0391
          },
          {
            "date": "2026-09-24",
            "close": 26723.4531
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
        "close": 51511.5898,
        "prevClose": 52048.8281,
        "change": -537.2383,
        "changePct": -1.03,
        "asOf": "2026-09-23",
        "prevAsOf": "2026-09-21",
        "gapDays": 2,
        "gapSuspect": false,
        "live": true,
        "latest": {
          "date": "2026-09-24",
          "close": 51155.7813,
          "prevDate": "2026-09-23",
          "prevClose": 51511.5898,
          "change": -355.8085,
          "changePct": -0.69,
          "gapDays": 1,
          "gapSuspect": false
        },
        "settled": {
          "date": "2026-09-23",
          "close": 51511.5898,
          "prevDate": "2026-09-21",
          "prevClose": 52048.8281,
          "change": -537.2383,
          "changePct": -1.03,
          "gapDays": 2,
          "gapSuspect": false
        },
        "quotePrice": 51155.78,
        "series": [
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
            "date": "2026-09-23",
            "close": 51511.5898
          },
          {
            "date": "2026-09-24",
            "close": 51155.7813
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
        "close": 5.114,
        "prevClose": 4.963,
        "change": 0.151,
        "changePct": 3.04,
        "asOf": "2026-09-23",
        "prevAsOf": "2026-09-21",
        "gapDays": 2,
        "gapSuspect": false,
        "live": true,
        "latest": {
          "date": "2026-09-24",
          "close": 5.162,
          "prevDate": "2026-09-23",
          "prevClose": 5.114,
          "change": 0.048,
          "changePct": 0.94,
          "gapDays": 1,
          "gapSuspect": false
        },
        "settled": {
          "date": "2026-09-23",
          "close": 5.114,
          "prevDate": "2026-09-21",
          "prevClose": 4.963,
          "change": 0.151,
          "changePct": 3.04,
          "gapDays": 2,
          "gapSuspect": false
        },
        "quotePrice": 5.162,
        "series": [
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
            "date": "2026-09-23",
            "close": 5.114
          },
          {
            "date": "2026-09-24",
            "close": 5.162
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
        "close": 5.401,
        "prevClose": 5.296,
        "change": 0.105,
        "changePct": 1.98,
        "asOf": "2026-09-23",
        "prevAsOf": "2026-09-21",
        "gapDays": 2,
        "gapSuspect": false,
        "live": true,
        "latest": {
          "date": "2026-09-24",
          "close": 5.455,
          "prevDate": "2026-09-23",
          "prevClose": 5.401,
          "change": 0.054,
          "changePct": 1,
          "gapDays": 1,
          "gapSuspect": false
        },
        "settled": {
          "date": "2026-09-23",
          "close": 5.401,
          "prevDate": "2026-09-21",
          "prevClose": 5.296,
          "change": 0.105,
          "changePct": 1.98,
          "gapDays": 2,
          "gapSuspect": false
        },
        "quotePrice": 5.455,
        "series": [
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
            "date": "2026-09-23",
            "close": 5.401
          },
          {
            "date": "2026-09-24",
            "close": 5.455
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
        "close": 4.997,
        "prevClose": 4.834,
        "change": 0.163,
        "changePct": 3.37,
        "asOf": "2026-09-23",
        "prevAsOf": "2026-09-21",
        "gapDays": 2,
        "gapSuspect": false,
        "live": true,
        "latest": {
          "date": "2026-09-24",
          "close": 5.034,
          "prevDate": "2026-09-23",
          "prevClose": 4.997,
          "change": 0.037,
          "changePct": 0.74,
          "gapDays": 1,
          "gapSuspect": false
        },
        "settled": {
          "date": "2026-09-23",
          "close": 4.997,
          "prevDate": "2026-09-21",
          "prevClose": 4.834,
          "change": 0.163,
          "changePct": 3.37,
          "gapDays": 2,
          "gapSuspect": false
        },
        "quotePrice": 5.034,
        "series": [
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
            "date": "2026-09-23",
            "close": 4.997
          },
          {
            "date": "2026-09-24",
            "close": 5.034
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
        "close": 101.1,
        "prevClose": 100.43,
        "change": 0.67,
        "changePct": 0.67,
        "asOf": "2026-09-23",
        "prevAsOf": "2026-09-21",
        "gapDays": 2,
        "gapSuspect": false,
        "live": true,
        "latest": {
          "date": "2026-09-24",
          "close": 101.356,
          "prevDate": "2026-09-23",
          "prevClose": 101.1,
          "change": 0.256,
          "changePct": 0.25,
          "gapDays": 1,
          "gapSuspect": false
        },
        "settled": {
          "date": "2026-09-23",
          "close": 101.1,
          "prevDate": "2026-09-21",
          "prevClose": 100.43,
          "change": 0.67,
          "changePct": 0.67,
          "gapDays": 2,
          "gapSuspect": false
        },
        "quotePrice": 101.356,
        "series": [
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
            "date": "2026-09-23",
            "close": 101.1
          },
          {
            "date": "2026-09-24",
            "close": 101.356
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
        "close": 92.16,
        "prevClose": 94.59,
        "change": -2.43,
        "changePct": -2.57,
        "asOf": "2026-09-23",
        "prevAsOf": "2026-09-22",
        "gapDays": 1,
        "gapSuspect": false,
        "live": true,
        "latest": {
          "date": "2026-09-24",
          "close": 96.34,
          "prevDate": "2026-09-23",
          "prevClose": 92.16,
          "change": 4.18,
          "changePct": 4.54,
          "gapDays": 1,
          "gapSuspect": false
        },
        "settled": {
          "date": "2026-09-23",
          "close": 92.16,
          "prevDate": "2026-09-22",
          "prevClose": 94.59,
          "change": -2.43,
          "changePct": -2.57,
          "gapDays": 1,
          "gapSuspect": false
        },
        "quotePrice": 96.34,
        "series": [
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
            "close": 94.59
          },
          {
            "date": "2026-09-23",
            "close": 92.16
          },
          {
            "date": "2026-09-24",
            "close": 96.34
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
        "close": 103.08,
        "prevClose": 99.25,
        "change": 3.83,
        "changePct": 3.86,
        "asOf": "2026-09-23",
        "prevAsOf": "2026-09-22",
        "gapDays": 1,
        "gapSuspect": false,
        "live": true,
        "latest": {
          "date": "2026-09-24",
          "close": 107.86,
          "prevDate": "2026-09-23",
          "prevClose": 103.08,
          "change": 4.78,
          "changePct": 4.64,
          "gapDays": 1,
          "gapSuspect": false
        },
        "settled": {
          "date": "2026-09-23",
          "close": 103.08,
          "prevDate": "2026-09-22",
          "prevClose": 99.25,
          "change": 3.83,
          "changePct": 3.86,
          "gapDays": 1,
          "gapSuspect": false
        },
        "quotePrice": 107.86,
        "series": [
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
            "close": 99.25
          },
          {
            "date": "2026-09-23",
            "close": 103.08
          },
          {
            "date": "2026-09-24",
            "close": 107.86
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
        "close": 4318.3999,
        "prevClose": 4376.3999,
        "change": -58,
        "changePct": -1.33,
        "asOf": "2026-09-23",
        "prevAsOf": "2026-09-22",
        "gapDays": 1,
        "gapSuspect": false,
        "live": true,
        "latest": {
          "date": "2026-09-24",
          "close": 4284.3999,
          "prevDate": "2026-09-23",
          "prevClose": 4318.3999,
          "change": -34,
          "changePct": -0.79,
          "gapDays": 1,
          "gapSuspect": false
        },
        "settled": {
          "date": "2026-09-23",
          "close": 4318.3999,
          "prevDate": "2026-09-22",
          "prevClose": 4376.3999,
          "change": -58,
          "changePct": -1.33,
          "gapDays": 1,
          "gapSuspect": false
        },
        "quotePrice": 4284.4,
        "series": [
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
            "close": 4376.3999
          },
          {
            "date": "2026-09-23",
            "close": 4318.3999
          },
          {
            "date": "2026-09-24",
            "close": 4284.3999
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
        "close": 157.464,
        "prevClose": 157.369,
        "change": 0.095,
        "changePct": 0.06,
        "asOf": "2026-09-23",
        "prevAsOf": "2026-09-22",
        "gapDays": 1,
        "gapSuspect": false,
        "live": true,
        "latest": {
          "date": "2026-09-24",
          "close": 158.918,
          "prevDate": "2026-09-23",
          "prevClose": 157.464,
          "change": 1.454,
          "changePct": 0.92,
          "gapDays": 1,
          "gapSuspect": false
        },
        "settled": {
          "date": "2026-09-23",
          "close": 157.464,
          "prevDate": "2026-09-22",
          "prevClose": 157.369,
          "change": 0.095,
          "changePct": 0.06,
          "gapDays": 1,
          "gapSuspect": false
        },
        "quotePrice": 158.918,
        "series": [
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
            "close": 157.464
          },
          {
            "date": "2026-09-24",
            "close": 158.918
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
        "close": 6.6996,
        "prevClose": 6.6953,
        "change": 0.0043,
        "changePct": 0.06,
        "asOf": "2026-09-23",
        "prevAsOf": "2026-09-22",
        "gapDays": 1,
        "gapSuspect": false,
        "live": true,
        "latest": {
          "date": "2026-09-24",
          "close": 6.7028,
          "prevDate": "2026-09-23",
          "prevClose": 6.6996,
          "change": 0.0032,
          "changePct": 0.05,
          "gapDays": 1,
          "gapSuspect": false
        },
        "settled": {
          "date": "2026-09-23",
          "close": 6.6996,
          "prevDate": "2026-09-22",
          "prevClose": 6.6953,
          "change": 0.0043,
          "changePct": 0.06,
          "gapDays": 1,
          "gapSuspect": false
        },
        "quotePrice": 6.7028,
        "series": [
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
          },
          {
            "date": "2026-09-23",
            "close": 6.6996
          },
          {
            "date": "2026-09-24",
            "close": 6.7028
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
        "close": 31.6795,
        "prevClose": 31.7384,
        "change": -0.0589,
        "changePct": -0.19,
        "asOf": "2026-09-23",
        "prevAsOf": "2026-09-22",
        "gapDays": 1,
        "gapSuspect": false,
        "live": true,
        "latest": {
          "date": "2026-09-24",
          "close": 31.828,
          "prevDate": "2026-09-23",
          "prevClose": 31.6795,
          "change": 0.1485,
          "changePct": 0.47,
          "gapDays": 1,
          "gapSuspect": false
        },
        "settled": {
          "date": "2026-09-23",
          "close": 31.6795,
          "prevDate": "2026-09-22",
          "prevClose": 31.7384,
          "change": -0.0589,
          "changePct": -0.19,
          "gapDays": 1,
          "gapSuspect": false
        },
        "quotePrice": 31.828,
        "series": [
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
            "close": 31.6795
          },
          {
            "date": "2026-09-24",
            "close": 31.828
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
        "close": 48024.6016,
        "prevClose": 48157.2891,
        "change": -132.6875,
        "changePct": -0.28,
        "asOf": "2026-09-24",
        "prevAsOf": "2026-09-23",
        "gapDays": 1,
        "gapSuspect": false,
        "live": false,
        "latest": {
          "date": "2026-09-24",
          "close": 48024.6016,
          "prevDate": "2026-09-23",
          "prevClose": 48157.2891,
          "change": -132.6875,
          "changePct": -0.28,
          "gapDays": 1,
          "gapSuspect": false
        },
        "settled": {
          "date": "2026-09-24",
          "close": 48024.6016,
          "prevDate": "2026-09-23",
          "prevClose": 48157.2891,
          "change": -132.6875,
          "changePct": -0.28,
          "gapDays": 1,
          "gapSuspect": false
        },
        "quotePrice": 48024.6,
        "series": [
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
          },
          {
            "date": "2026-09-23",
            "close": 48157.2891
          },
          {
            "date": "2026-09-24",
            "close": 48024.6016
          }
        ],
        "currency": "TWD",
        "timezone": "Asia/Taipei",
        "source": "Yahoo Finance chart API（日線）"
      }
    }
  }
};
