/**
 * market-global.js — 由 GitHub Actions 自動產生，請勿手動編輯。
 * 產生器：scripts/fetch-global-market.mjs
 *
 * 國際行情中繼資料，供每日 dashboard 更新流程讀用，不會被 index.html 載入。
 * ok:false 代表該標的當次抓不到，error 說明原因——請據實標註，不要沿用舊值。
 */
window.MARKET_GLOBAL = {
  "fetchedAt": "2026-11-14T02:55:17.140Z",
  "okCount": 16,
  "totalCount": 16,
  "items": {
    "sox": {
      "ok": true,
      "label": "費城半導體 SOX",
      "symbol": "%5ESOX",
      "value": {
        "close": 10146.3232,
        "prevClose": 10506.6699,
        "change": -360.3467,
        "changePct": -3.43,
        "asOf": "2026-11-13",
        "prevAsOf": "2026-11-12",
        "gapDays": 1,
        "gapSuspect": false,
        "live": false,
        "latest": {
          "date": "2026-11-13",
          "close": 10146.3232,
          "prevDate": "2026-11-12",
          "prevClose": 10506.6699,
          "change": -360.3467,
          "changePct": -3.43,
          "gapDays": 1,
          "gapSuspect": false
        },
        "settled": {
          "date": "2026-11-13",
          "close": 10146.3232,
          "prevDate": "2026-11-12",
          "prevClose": 10506.6699,
          "change": -360.3467,
          "changePct": -3.43,
          "gapDays": 1,
          "gapSuspect": false
        },
        "quotePrice": 10146.323,
        "series": [
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
            "close": 10564.1104
          },
          {
            "date": "2026-11-12",
            "close": 10506.6699
          },
          {
            "date": "2026-11-13",
            "close": 10146.3232
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
        "close": 19.3,
        "prevClose": 18.7,
        "change": 0.6,
        "changePct": 3.21,
        "asOf": "2026-11-13",
        "prevAsOf": "2026-11-12",
        "gapDays": 1,
        "gapSuspect": false,
        "live": false,
        "latest": {
          "date": "2026-11-13",
          "close": 19.3,
          "prevDate": "2026-11-12",
          "prevClose": 18.7,
          "change": 0.6,
          "changePct": 3.21,
          "gapDays": 1,
          "gapSuspect": false
        },
        "settled": {
          "date": "2026-11-13",
          "close": 19.3,
          "prevDate": "2026-11-12",
          "prevClose": 18.7,
          "change": 0.6,
          "changePct": 3.21,
          "gapDays": 1,
          "gapSuspect": false
        },
        "quotePrice": 19.3,
        "series": [
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
          },
          {
            "date": "2026-11-12",
            "close": 18.7
          },
          {
            "date": "2026-11-13",
            "close": 19.3
          }
        ],
        "currency": "USD",
        "timezone": "America/New_York",
        "source": "Yahoo Finance chart API（日線）"
      }
    },
    "spx": {
      "ok": true,
      "label": "S&P 500",
      "symbol": "%5EGSPC",
      "value": {
        "close": 7561.6699,
        "prevClose": 7592.3999,
        "change": -30.73,
        "changePct": -0.4,
        "asOf": "2026-11-13",
        "prevAsOf": "2026-11-12",
        "gapDays": 1,
        "gapSuspect": false,
        "live": false,
        "latest": {
          "date": "2026-11-13",
          "close": 7561.6699,
          "prevDate": "2026-11-12",
          "prevClose": 7592.3999,
          "change": -30.73,
          "changePct": -0.4,
          "gapDays": 1,
          "gapSuspect": false
        },
        "settled": {
          "date": "2026-11-13",
          "close": 7561.6699,
          "prevDate": "2026-11-12",
          "prevClose": 7592.3999,
          "change": -30.73,
          "changePct": -0.4,
          "gapDays": 1,
          "gapSuspect": false
        },
        "quotePrice": 7561.67,
        "series": [
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
          },
          {
            "date": "2026-11-12",
            "close": 7592.3999
          },
          {
            "date": "2026-11-13",
            "close": 7561.6699
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
        "close": 25136.2734,
        "prevClose": 25366.0898,
        "change": -229.8164,
        "changePct": -0.91,
        "asOf": "2026-11-13",
        "prevAsOf": "2026-11-12",
        "gapDays": 1,
        "gapSuspect": false,
        "live": false,
        "latest": {
          "date": "2026-11-13",
          "close": 25136.2734,
          "prevDate": "2026-11-12",
          "prevClose": 25366.0898,
          "change": -229.8164,
          "changePct": -0.91,
          "gapDays": 1,
          "gapSuspect": false
        },
        "settled": {
          "date": "2026-11-13",
          "close": 25136.2734,
          "prevDate": "2026-11-12",
          "prevClose": 25366.0898,
          "change": -229.8164,
          "changePct": -0.91,
          "gapDays": 1,
          "gapSuspect": false
        },
        "quotePrice": 25136.273,
        "series": [
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
          },
          {
            "date": "2026-11-12",
            "close": 25366.0898
          },
          {
            "date": "2026-11-13",
            "close": 25136.2734
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
        "close": 52347.5508,
        "prevClose": 52297.0898,
        "change": 50.461,
        "changePct": 0.1,
        "asOf": "2026-11-13",
        "prevAsOf": "2026-11-12",
        "gapDays": 1,
        "gapSuspect": false,
        "live": false,
        "latest": {
          "date": "2026-11-13",
          "close": 52347.5508,
          "prevDate": "2026-11-12",
          "prevClose": 52297.0898,
          "change": 50.461,
          "changePct": 0.1,
          "gapDays": 1,
          "gapSuspect": false
        },
        "settled": {
          "date": "2026-11-13",
          "close": 52347.5508,
          "prevDate": "2026-11-12",
          "prevClose": 52297.0898,
          "change": 50.461,
          "changePct": 0.1,
          "gapDays": 1,
          "gapSuspect": false
        },
        "quotePrice": 52347.55,
        "series": [
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
          },
          {
            "date": "2026-11-12",
            "close": 52297.0898
          },
          {
            "date": "2026-11-13",
            "close": 52347.5508
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
        "close": 5.154,
        "prevClose": 5.103,
        "change": 0.051,
        "changePct": 1,
        "asOf": "2026-11-13",
        "prevAsOf": "2026-11-12",
        "gapDays": 1,
        "gapSuspect": false,
        "live": false,
        "latest": {
          "date": "2026-11-13",
          "close": 5.154,
          "prevDate": "2026-11-12",
          "prevClose": 5.103,
          "change": 0.051,
          "changePct": 1,
          "gapDays": 1,
          "gapSuspect": false
        },
        "settled": {
          "date": "2026-11-13",
          "close": 5.154,
          "prevDate": "2026-11-12",
          "prevClose": 5.103,
          "change": 0.051,
          "changePct": 1,
          "gapDays": 1,
          "gapSuspect": false
        },
        "quotePrice": 5.1540003,
        "series": [
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
          },
          {
            "date": "2026-11-12",
            "close": 5.103
          },
          {
            "date": "2026-11-13",
            "close": 5.154
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
        "close": 5.481,
        "prevClose": 5.433,
        "change": 0.048,
        "changePct": 0.88,
        "asOf": "2026-11-13",
        "prevAsOf": "2026-11-12",
        "gapDays": 1,
        "gapSuspect": false,
        "live": false,
        "latest": {
          "date": "2026-11-13",
          "close": 5.481,
          "prevDate": "2026-11-12",
          "prevClose": 5.433,
          "change": 0.048,
          "changePct": 0.88,
          "gapDays": 1,
          "gapSuspect": false
        },
        "settled": {
          "date": "2026-11-13",
          "close": 5.481,
          "prevDate": "2026-11-12",
          "prevClose": 5.433,
          "change": 0.048,
          "changePct": 0.88,
          "gapDays": 1,
          "gapSuspect": false
        },
        "quotePrice": 5.481,
        "series": [
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
          },
          {
            "date": "2026-11-12",
            "close": 5.433
          },
          {
            "date": "2026-11-13",
            "close": 5.481
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
        "close": 4.981,
        "prevClose": 4.945,
        "change": 0.036,
        "changePct": 0.73,
        "asOf": "2026-11-13",
        "prevAsOf": "2026-11-12",
        "gapDays": 1,
        "gapSuspect": false,
        "live": false,
        "latest": {
          "date": "2026-11-13",
          "close": 4.981,
          "prevDate": "2026-11-12",
          "prevClose": 4.945,
          "change": 0.036,
          "changePct": 0.73,
          "gapDays": 1,
          "gapSuspect": false
        },
        "settled": {
          "date": "2026-11-13",
          "close": 4.981,
          "prevDate": "2026-11-12",
          "prevClose": 4.945,
          "change": 0.036,
          "changePct": 0.73,
          "gapDays": 1,
          "gapSuspect": false
        },
        "quotePrice": 4.981,
        "series": [
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
          },
          {
            "date": "2026-11-12",
            "close": 4.945
          },
          {
            "date": "2026-11-13",
            "close": 4.981
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
        "close": 103.17,
        "prevClose": 102.91,
        "change": 0.26,
        "changePct": 0.25,
        "asOf": "2026-11-12",
        "prevAsOf": "2026-11-11",
        "gapDays": 1,
        "gapSuspect": false,
        "live": true,
        "latest": {
          "date": "2026-11-13",
          "close": 103.411,
          "prevDate": "2026-11-12",
          "prevClose": 103.17,
          "change": 0.241,
          "changePct": 0.23,
          "gapDays": 1,
          "gapSuspect": false
        },
        "settled": {
          "date": "2026-11-12",
          "close": 103.17,
          "prevDate": "2026-11-11",
          "prevClose": 102.91,
          "change": 0.26,
          "changePct": 0.25,
          "gapDays": 1,
          "gapSuspect": false
        },
        "quotePrice": 103.411,
        "series": [
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
            "close": 102.91
          },
          {
            "date": "2026-11-12",
            "close": 103.17
          },
          {
            "date": "2026-11-13",
            "close": 103.411
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
        "close": 88.74,
        "prevClose": 86.53,
        "change": 2.21,
        "changePct": 2.55,
        "asOf": "2026-11-12",
        "prevAsOf": "2026-11-11",
        "gapDays": 1,
        "gapSuspect": false,
        "live": true,
        "latest": {
          "date": "2026-11-13",
          "close": 88.92,
          "prevDate": "2026-11-12",
          "prevClose": 88.74,
          "change": 0.18,
          "changePct": 0.2,
          "gapDays": 1,
          "gapSuspect": false
        },
        "settled": {
          "date": "2026-11-12",
          "close": 88.74,
          "prevDate": "2026-11-11",
          "prevClose": 86.53,
          "change": 2.21,
          "changePct": 2.55,
          "gapDays": 1,
          "gapSuspect": false
        },
        "quotePrice": 88.92,
        "series": [
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
            "close": 86.53
          },
          {
            "date": "2026-11-12",
            "close": 88.74
          },
          {
            "date": "2026-11-13",
            "close": 88.92
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
        "close": 95.82,
        "prevClose": 92.76,
        "change": 3.06,
        "changePct": 3.3,
        "asOf": "2026-11-12",
        "prevAsOf": "2026-11-11",
        "gapDays": 1,
        "gapSuspect": false,
        "live": true,
        "latest": {
          "date": "2026-11-13",
          "close": 96.08,
          "prevDate": "2026-11-12",
          "prevClose": 95.82,
          "change": 0.26,
          "changePct": 0.27,
          "gapDays": 1,
          "gapSuspect": false
        },
        "settled": {
          "date": "2026-11-12",
          "close": 95.82,
          "prevDate": "2026-11-11",
          "prevClose": 92.76,
          "change": 3.06,
          "changePct": 3.3,
          "gapDays": 1,
          "gapSuspect": false
        },
        "quotePrice": 96.08,
        "series": [
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
            "close": 92.76
          },
          {
            "date": "2026-11-12",
            "close": 95.82
          },
          {
            "date": "2026-11-13",
            "close": 96.08
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
        "close": 3885.3,
        "prevClose": 4000.5,
        "change": -115.2,
        "changePct": -2.88,
        "asOf": "2026-11-12",
        "prevAsOf": "2026-11-11",
        "gapDays": 1,
        "gapSuspect": false,
        "live": true,
        "latest": {
          "date": "2026-11-13",
          "close": 3887.6001,
          "prevDate": "2026-11-12",
          "prevClose": 3885.3,
          "change": 2.3001,
          "changePct": 0.06,
          "gapDays": 1,
          "gapSuspect": false
        },
        "settled": {
          "date": "2026-11-12",
          "close": 3885.3,
          "prevDate": "2026-11-11",
          "prevClose": 4000.5,
          "change": -115.2,
          "changePct": -2.88,
          "gapDays": 1,
          "gapSuspect": false
        },
        "quotePrice": 3887.6,
        "series": [
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
            "close": 4000.5
          },
          {
            "date": "2026-11-12",
            "close": 3885.3
          },
          {
            "date": "2026-11-13",
            "close": 3887.6001
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
        "close": 159.734,
        "prevClose": 158.705,
        "change": 1.029,
        "changePct": 0.65,
        "asOf": "2026-11-12",
        "prevAsOf": "2026-11-11",
        "gapDays": 1,
        "gapSuspect": false,
        "live": true,
        "latest": {
          "date": "2026-11-13",
          "close": 159.875,
          "prevDate": "2026-11-12",
          "prevClose": 159.734,
          "change": 0.141,
          "changePct": 0.09,
          "gapDays": 1,
          "gapSuspect": false
        },
        "settled": {
          "date": "2026-11-12",
          "close": 159.734,
          "prevDate": "2026-11-11",
          "prevClose": 158.705,
          "change": 1.029,
          "changePct": 0.65,
          "gapDays": 1,
          "gapSuspect": false
        },
        "quotePrice": 159.686,
        "series": [
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
            "close": 159.734
          },
          {
            "date": "2026-11-13",
            "close": 159.875
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
        "prevClose": 6.6703,
        "change": 0,
        "changePct": 0,
        "asOf": "2026-11-12",
        "prevAsOf": "2026-11-11",
        "gapDays": 1,
        "gapSuspect": false,
        "live": true,
        "latest": {
          "date": "2026-11-13",
          "close": 6.6704,
          "prevDate": "2026-11-12",
          "prevClose": 6.6703,
          "change": 0.0001,
          "changePct": 0,
          "gapDays": 1,
          "gapSuspect": false
        },
        "settled": {
          "date": "2026-11-12",
          "close": 6.6703,
          "prevDate": "2026-11-11",
          "prevClose": 6.6703,
          "change": 0,
          "changePct": 0,
          "gapDays": 1,
          "gapSuspect": false
        },
        "quotePrice": 6.6705,
        "series": [
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
            "close": 6.6703
          },
          {
            "date": "2026-11-13",
            "close": 6.6704
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
        "close": 32.8619,
        "prevClose": 32.9538,
        "change": -0.0919,
        "changePct": -0.28,
        "asOf": "2026-11-12",
        "prevAsOf": "2026-11-11",
        "gapDays": 1,
        "gapSuspect": false,
        "live": true,
        "latest": {
          "date": "2026-11-13",
          "close": 32.939,
          "prevDate": "2026-11-12",
          "prevClose": 32.8619,
          "change": 0.0771,
          "changePct": 0.23,
          "gapDays": 1,
          "gapSuspect": false
        },
        "settled": {
          "date": "2026-11-12",
          "close": 32.8619,
          "prevDate": "2026-11-11",
          "prevClose": 32.9538,
          "change": -0.0919,
          "changePct": -0.28,
          "gapDays": 1,
          "gapSuspect": false
        },
        "quotePrice": 32.875,
        "series": [
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
            "close": 32.8619
          },
          {
            "date": "2026-11-13",
            "close": 32.939
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
        "close": 43675.1211,
        "prevClose": 43091.8711,
        "change": 583.25,
        "changePct": 1.35,
        "asOf": "2026-11-13",
        "prevAsOf": "2026-11-12",
        "gapDays": 1,
        "gapSuspect": false,
        "live": false,
        "latest": {
          "date": "2026-11-13",
          "close": 43675.1211,
          "prevDate": "2026-11-12",
          "prevClose": 43091.8711,
          "change": 583.25,
          "changePct": 1.35,
          "gapDays": 1,
          "gapSuspect": false
        },
        "settled": {
          "date": "2026-11-13",
          "close": 43675.1211,
          "prevDate": "2026-11-12",
          "prevClose": 43091.8711,
          "change": 583.25,
          "changePct": 1.35,
          "gapDays": 1,
          "gapSuspect": false
        },
        "quotePrice": 43675.12,
        "series": [
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
            "close": 43091.8711
          },
          {
            "date": "2026-11-13",
            "close": 43675.1211
          }
        ],
        "currency": "TWD",
        "timezone": "Asia/Taipei",
        "source": "Yahoo Finance chart API（日線）"
      }
    }
  }
};
