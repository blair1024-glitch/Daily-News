/**
 * market-global.js — 由 GitHub Actions 自動產生，請勿手動編輯。
 * 產生器：scripts/fetch-global-market.mjs
 *
 * 國際行情中繼資料，供每日 dashboard 更新流程讀用，不會被 index.html 載入。
 * ok:false 代表該標的當次抓不到，error 說明原因——請據實標註，不要沿用舊值。
 */
window.MARKET_GLOBAL = {
  "fetchedAt": "2026-09-23T23:44:27.871Z",
  "okCount": 16,
  "totalCount": 16,
  "items": {
    "sox": {
      "ok": true,
      "label": "費城半導體 SOX",
      "symbol": "%5ESOX",
      "value": {
        "close": 12534.2744,
        "prevClose": 12433.1699,
        "change": 101.1045,
        "changePct": 0.81,
        "asOf": "2026-09-23",
        "prevAsOf": "2026-09-21",
        "gapDays": 2,
        "gapSuspect": false,
        "live": false,
        "latest": {
          "date": "2026-09-23",
          "close": 12534.2744,
          "prevDate": "2026-09-21",
          "prevClose": 12433.1699,
          "change": 101.1045,
          "changePct": 0.81,
          "gapDays": 2,
          "gapSuspect": false
        },
        "settled": {
          "date": "2026-09-23",
          "close": 12534.2744,
          "prevDate": "2026-09-21",
          "prevClose": 12433.1699,
          "change": 101.1045,
          "changePct": 0.81,
          "gapDays": 2,
          "gapSuspect": false
        },
        "quotePrice": 12534.274,
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
            "date": "2026-09-23",
            "close": 12534.2744
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
        "live": false,
        "latest": {
          "date": "2026-09-23",
          "close": 15.18,
          "prevDate": "2026-09-21",
          "prevClose": 14.87,
          "change": 0.31,
          "changePct": 2.08,
          "gapDays": 2,
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
        "quotePrice": 15.18,
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
            "date": "2026-09-23",
            "close": 15.18
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
        "live": false,
        "latest": {
          "date": "2026-09-23",
          "close": 7706.0298,
          "prevDate": "2026-09-21",
          "prevClose": 7764.7002,
          "change": -58.6704,
          "changePct": -0.76,
          "gapDays": 2,
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
        "quotePrice": 7706.03,
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
            "date": "2026-09-23",
            "close": 7706.0298
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
        "close": 26936.0371,
        "prevClose": 27122.0898,
        "change": -186.0527,
        "changePct": -0.69,
        "asOf": "2026-09-23",
        "prevAsOf": "2026-09-21",
        "gapDays": 2,
        "gapSuspect": false,
        "live": false,
        "latest": {
          "date": "2026-09-23",
          "close": 26936.0371,
          "prevDate": "2026-09-21",
          "prevClose": 27122.0898,
          "change": -186.0527,
          "changePct": -0.69,
          "gapDays": 2,
          "gapSuspect": false
        },
        "settled": {
          "date": "2026-09-23",
          "close": 26936.0371,
          "prevDate": "2026-09-21",
          "prevClose": 27122.0898,
          "change": -186.0527,
          "changePct": -0.69,
          "gapDays": 2,
          "gapSuspect": false
        },
        "quotePrice": 26936.037,
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
            "date": "2026-09-23",
            "close": 26936.0371
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
        "live": false,
        "latest": {
          "date": "2026-09-23",
          "close": 51511.5898,
          "prevDate": "2026-09-21",
          "prevClose": 52048.8281,
          "change": -537.2383,
          "changePct": -1.03,
          "gapDays": 2,
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
        "quotePrice": 51511.59,
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
            "date": "2026-09-23",
            "close": 51511.5898
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
        "live": false,
        "latest": {
          "date": "2026-09-23",
          "close": 5.114,
          "prevDate": "2026-09-21",
          "prevClose": 4.963,
          "change": 0.151,
          "changePct": 3.04,
          "gapDays": 2,
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
        "quotePrice": 5.114,
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
            "date": "2026-09-23",
            "close": 5.114
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
        "live": false,
        "latest": {
          "date": "2026-09-23",
          "close": 5.401,
          "prevDate": "2026-09-21",
          "prevClose": 5.296,
          "change": 0.105,
          "changePct": 1.98,
          "gapDays": 2,
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
        "quotePrice": 5.401,
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
            "date": "2026-09-23",
            "close": 5.401
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
        "live": false,
        "latest": {
          "date": "2026-09-23",
          "close": 4.997,
          "prevDate": "2026-09-21",
          "prevClose": 4.834,
          "change": 0.163,
          "changePct": 3.37,
          "gapDays": 2,
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
        "quotePrice": 4.997,
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
            "date": "2026-09-23",
            "close": 4.997
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
          "date": "2026-09-23",
          "close": 101.114,
          "prevDate": "2026-09-21",
          "prevClose": 100.43,
          "change": 0.684,
          "changePct": 0.68,
          "gapDays": 2,
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
        "quotePrice": 101.114,
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
            "date": "2026-09-23",
            "close": 101.114
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
        "close": 94.59,
        "prevClose": 95.78,
        "change": -1.19,
        "changePct": -1.24,
        "asOf": "2026-09-22",
        "prevAsOf": "2026-09-21",
        "gapDays": 1,
        "gapSuspect": false,
        "live": true,
        "latest": {
          "date": "2026-09-23",
          "close": 92.1,
          "prevDate": "2026-09-22",
          "prevClose": 94.59,
          "change": -2.49,
          "changePct": -2.63,
          "gapDays": 1,
          "gapSuspect": false
        },
        "settled": {
          "date": "2026-09-22",
          "close": 94.59,
          "prevDate": "2026-09-21",
          "prevClose": 95.78,
          "change": -1.19,
          "changePct": -1.24,
          "gapDays": 1,
          "gapSuspect": false
        },
        "quotePrice": 92.1,
        "series": [
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
            "close": 94.59
          },
          {
            "date": "2026-09-23",
            "close": 92.1
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
        "close": 99.25,
        "prevClose": 100.34,
        "change": -1.09,
        "changePct": -1.09,
        "asOf": "2026-09-22",
        "prevAsOf": "2026-09-21",
        "gapDays": 1,
        "gapSuspect": false,
        "live": true,
        "latest": {
          "date": "2026-09-23",
          "close": 97.74,
          "prevDate": "2026-09-22",
          "prevClose": 99.25,
          "change": -1.51,
          "changePct": -1.52,
          "gapDays": 1,
          "gapSuspect": false
        },
        "settled": {
          "date": "2026-09-22",
          "close": 99.25,
          "prevDate": "2026-09-21",
          "prevClose": 100.34,
          "change": -1.09,
          "changePct": -1.09,
          "gapDays": 1,
          "gapSuspect": false
        },
        "quotePrice": 97.74,
        "series": [
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
            "close": 99.25
          },
          {
            "date": "2026-09-23",
            "close": 97.74
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
        "close": 4376.3999,
        "prevClose": 4383.8999,
        "change": -7.5,
        "changePct": -0.17,
        "asOf": "2026-09-22",
        "prevAsOf": "2026-09-21",
        "gapDays": 1,
        "gapSuspect": false,
        "live": true,
        "latest": {
          "date": "2026-09-23",
          "close": 4320.7002,
          "prevDate": "2026-09-22",
          "prevClose": 4376.3999,
          "change": -55.6997,
          "changePct": -1.27,
          "gapDays": 1,
          "gapSuspect": false
        },
        "settled": {
          "date": "2026-09-22",
          "close": 4376.3999,
          "prevDate": "2026-09-21",
          "prevClose": 4383.8999,
          "change": -7.5,
          "changePct": -0.17,
          "gapDays": 1,
          "gapSuspect": false
        },
        "quotePrice": 4320.7,
        "series": [
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
            "close": 4376.3999
          },
          {
            "date": "2026-09-23",
            "close": 4320.7002
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
          "close": 158.329,
          "prevDate": "2026-09-23",
          "prevClose": 157.464,
          "change": 0.865,
          "changePct": 0.55,
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
        "quotePrice": 158.329,
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
            "close": 158.329
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
          "close": 6.7019,
          "prevDate": "2026-09-23",
          "prevClose": 6.6996,
          "change": 0.0023,
          "changePct": 0.03,
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
        "quotePrice": 6.7019,
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
            "close": 6.7019
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
          "close": 31.789,
          "prevDate": "2026-09-23",
          "prevClose": 31.6795,
          "change": 0.1095,
          "changePct": 0.35,
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
        "quotePrice": 31.789,
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
            "close": 31.789
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
        "quotePrice": 48157.29,
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
