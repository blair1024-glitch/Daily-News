/**
 * market-global.js — 由 GitHub Actions 自動產生，請勿手動編輯。
 * 產生器：scripts/fetch-global-market.mjs
 *
 * 國際行情中繼資料，供每日 dashboard 更新流程讀用，不會被 index.html 載入。
 * ok:false 代表該標的當次抓不到，error 說明原因——請據實標註，不要沿用舊值。
 */
window.MARKET_GLOBAL = {
  "fetchedAt": "2026-11-13T03:10:05.839Z",
  "okCount": 16,
  "totalCount": 16,
  "items": {
    "sox": {
      "ok": true,
      "label": "費城半導體 SOX",
      "symbol": "%5ESOX",
      "value": {
        "close": 10506.6738,
        "prevClose": 10564.1104,
        "change": -57.4366,
        "changePct": -0.54,
        "asOf": "2026-11-12",
        "prevAsOf": "2026-11-11",
        "gapDays": 1,
        "gapSuspect": false,
        "live": false,
        "latest": {
          "date": "2026-11-12",
          "close": 10506.6738,
          "prevDate": "2026-11-11",
          "prevClose": 10564.1104,
          "change": -57.4366,
          "changePct": -0.54,
          "gapDays": 1,
          "gapSuspect": false
        },
        "settled": {
          "date": "2026-11-12",
          "close": 10506.6738,
          "prevDate": "2026-11-11",
          "prevClose": 10564.1104,
          "change": -57.4366,
          "changePct": -0.54,
          "gapDays": 1,
          "gapSuspect": false
        },
        "quotePrice": 10506.674,
        "series": [
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
            "close": 10564.1104
          },
          {
            "date": "2026-11-12",
            "close": 10506.6738
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
        "close": 18.7,
        "prevClose": 17.49,
        "change": 1.21,
        "changePct": 6.92,
        "asOf": "2026-11-12",
        "prevAsOf": "2026-11-11",
        "gapDays": 1,
        "gapSuspect": false,
        "live": false,
        "latest": {
          "date": "2026-11-12",
          "close": 18.7,
          "prevDate": "2026-11-11",
          "prevClose": 17.49,
          "change": 1.21,
          "changePct": 6.92,
          "gapDays": 1,
          "gapSuspect": false
        },
        "settled": {
          "date": "2026-11-12",
          "close": 18.7,
          "prevDate": "2026-11-11",
          "prevClose": 17.49,
          "change": 1.21,
          "changePct": 6.92,
          "gapDays": 1,
          "gapSuspect": false
        },
        "quotePrice": 18.7,
        "series": [
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
          },
          {
            "date": "2026-11-12",
            "close": 18.7
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
        "close": 7592.3999,
        "prevClose": 7619.3799,
        "change": -26.98,
        "changePct": -0.35,
        "asOf": "2026-11-12",
        "prevAsOf": "2026-11-11",
        "gapDays": 1,
        "gapSuspect": false,
        "live": false,
        "latest": {
          "date": "2026-11-12",
          "close": 7592.3999,
          "prevDate": "2026-11-11",
          "prevClose": 7619.3799,
          "change": -26.98,
          "changePct": -0.35,
          "gapDays": 1,
          "gapSuspect": false
        },
        "settled": {
          "date": "2026-11-12",
          "close": 7592.3999,
          "prevDate": "2026-11-11",
          "prevClose": 7619.3799,
          "change": -26.98,
          "changePct": -0.35,
          "gapDays": 1,
          "gapSuspect": false
        },
        "quotePrice": 7592.4,
        "series": [
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
          },
          {
            "date": "2026-11-12",
            "close": 7592.3999
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
        "close": 25366.0938,
        "prevClose": 25466.1895,
        "change": -100.0957,
        "changePct": -0.39,
        "asOf": "2026-11-12",
        "prevAsOf": "2026-11-11",
        "gapDays": 1,
        "gapSuspect": false,
        "live": false,
        "latest": {
          "date": "2026-11-12",
          "close": 25366.0938,
          "prevDate": "2026-11-11",
          "prevClose": 25466.1895,
          "change": -100.0957,
          "changePct": -0.39,
          "gapDays": 1,
          "gapSuspect": false
        },
        "settled": {
          "date": "2026-11-12",
          "close": 25366.0938,
          "prevDate": "2026-11-11",
          "prevClose": 25466.1895,
          "change": -100.0957,
          "changePct": -0.39,
          "gapDays": 1,
          "gapSuspect": false
        },
        "quotePrice": 25366.094,
        "series": [
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
          },
          {
            "date": "2026-11-12",
            "close": 25366.0938
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
        "close": 52297.0898,
        "prevClose": 52486.4883,
        "change": -189.3985,
        "changePct": -0.36,
        "asOf": "2026-11-12",
        "prevAsOf": "2026-11-11",
        "gapDays": 1,
        "gapSuspect": false,
        "live": false,
        "latest": {
          "date": "2026-11-12",
          "close": 52297.0898,
          "prevDate": "2026-11-11",
          "prevClose": 52486.4883,
          "change": -189.3985,
          "changePct": -0.36,
          "gapDays": 1,
          "gapSuspect": false
        },
        "settled": {
          "date": "2026-11-12",
          "close": 52297.0898,
          "prevDate": "2026-11-11",
          "prevClose": 52486.4883,
          "change": -189.3985,
          "changePct": -0.36,
          "gapDays": 1,
          "gapSuspect": false
        },
        "quotePrice": 52297.09,
        "series": [
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
          },
          {
            "date": "2026-11-12",
            "close": 52297.0898
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
        "close": 5.103,
        "prevClose": 4.998,
        "change": 0.105,
        "changePct": 2.1,
        "asOf": "2026-11-12",
        "prevAsOf": "2026-11-11",
        "gapDays": 1,
        "gapSuspect": false,
        "live": false,
        "latest": {
          "date": "2026-11-12",
          "close": 5.103,
          "prevDate": "2026-11-11",
          "prevClose": 4.998,
          "change": 0.105,
          "changePct": 2.1,
          "gapDays": 1,
          "gapSuspect": false
        },
        "settled": {
          "date": "2026-11-12",
          "close": 5.103,
          "prevDate": "2026-11-11",
          "prevClose": 4.998,
          "change": 0.105,
          "changePct": 2.1,
          "gapDays": 1,
          "gapSuspect": false
        },
        "quotePrice": 5.103,
        "series": [
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
          },
          {
            "date": "2026-11-12",
            "close": 5.103
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
        "close": 5.433,
        "prevClose": 5.356,
        "change": 0.077,
        "changePct": 1.44,
        "asOf": "2026-11-12",
        "prevAsOf": "2026-11-11",
        "gapDays": 1,
        "gapSuspect": false,
        "live": false,
        "latest": {
          "date": "2026-11-12",
          "close": 5.433,
          "prevDate": "2026-11-11",
          "prevClose": 5.356,
          "change": 0.077,
          "changePct": 1.44,
          "gapDays": 1,
          "gapSuspect": false
        },
        "settled": {
          "date": "2026-11-12",
          "close": 5.433,
          "prevDate": "2026-11-11",
          "prevClose": 5.356,
          "change": 0.077,
          "changePct": 1.44,
          "gapDays": 1,
          "gapSuspect": false
        },
        "quotePrice": 5.433,
        "series": [
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
          },
          {
            "date": "2026-11-12",
            "close": 5.433
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
        "close": 4.945,
        "prevClose": 4.827,
        "change": 0.118,
        "changePct": 2.44,
        "asOf": "2026-11-12",
        "prevAsOf": "2026-11-11",
        "gapDays": 1,
        "gapSuspect": false,
        "live": false,
        "latest": {
          "date": "2026-11-12",
          "close": 4.945,
          "prevDate": "2026-11-11",
          "prevClose": 4.827,
          "change": 0.118,
          "changePct": 2.44,
          "gapDays": 1,
          "gapSuspect": false
        },
        "settled": {
          "date": "2026-11-12",
          "close": 4.945,
          "prevDate": "2026-11-11",
          "prevClose": 4.827,
          "change": 0.118,
          "changePct": 2.44,
          "gapDays": 1,
          "gapSuspect": false
        },
        "quotePrice": 4.945,
        "series": [
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
          },
          {
            "date": "2026-11-12",
            "close": 4.945
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
        "close": 102.91,
        "prevClose": 102.23,
        "change": 0.68,
        "changePct": 0.67,
        "asOf": "2026-11-11",
        "prevAsOf": "2026-11-10",
        "gapDays": 1,
        "gapSuspect": false,
        "live": true,
        "latest": {
          "date": "2026-11-12",
          "close": 103.147,
          "prevDate": "2026-11-11",
          "prevClose": 102.91,
          "change": 0.237,
          "changePct": 0.23,
          "gapDays": 1,
          "gapSuspect": false
        },
        "settled": {
          "date": "2026-11-11",
          "close": 102.91,
          "prevDate": "2026-11-10",
          "prevClose": 102.23,
          "change": 0.68,
          "changePct": 0.67,
          "gapDays": 1,
          "gapSuspect": false
        },
        "quotePrice": 103.147,
        "series": [
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
            "close": 102.91
          },
          {
            "date": "2026-11-12",
            "close": 103.147
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
        "close": 86.53,
        "prevClose": 86.04,
        "change": 0.49,
        "changePct": 0.57,
        "asOf": "2026-11-11",
        "prevAsOf": "2026-11-10",
        "gapDays": 1,
        "gapSuspect": false,
        "live": true,
        "latest": {
          "date": "2026-11-12",
          "close": 88.2,
          "prevDate": "2026-11-11",
          "prevClose": 86.53,
          "change": 1.67,
          "changePct": 1.93,
          "gapDays": 1,
          "gapSuspect": false
        },
        "settled": {
          "date": "2026-11-11",
          "close": 86.53,
          "prevDate": "2026-11-10",
          "prevClose": 86.04,
          "change": 0.49,
          "changePct": 0.57,
          "gapDays": 1,
          "gapSuspect": false
        },
        "quotePrice": 88.2,
        "series": [
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
            "close": 86.53
          },
          {
            "date": "2026-11-12",
            "close": 88.2
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
        "close": 92.76,
        "prevClose": 91.49,
        "change": 1.27,
        "changePct": 1.39,
        "asOf": "2026-11-11",
        "prevAsOf": "2026-11-10",
        "gapDays": 1,
        "gapSuspect": false,
        "live": true,
        "latest": {
          "date": "2026-11-12",
          "close": 95.48,
          "prevDate": "2026-11-11",
          "prevClose": 92.76,
          "change": 2.72,
          "changePct": 2.93,
          "gapDays": 1,
          "gapSuspect": false
        },
        "settled": {
          "date": "2026-11-11",
          "close": 92.76,
          "prevDate": "2026-11-10",
          "prevClose": 91.49,
          "change": 1.27,
          "changePct": 1.39,
          "gapDays": 1,
          "gapSuspect": false
        },
        "quotePrice": 95.48,
        "series": [
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
            "close": 92.76
          },
          {
            "date": "2026-11-12",
            "close": 95.48
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
        "close": 4000.5,
        "prevClose": 4030.2,
        "change": -29.7,
        "changePct": -0.74,
        "asOf": "2026-11-11",
        "prevAsOf": "2026-11-10",
        "gapDays": 1,
        "gapSuspect": false,
        "live": true,
        "latest": {
          "date": "2026-11-12",
          "close": 3920.3999,
          "prevDate": "2026-11-11",
          "prevClose": 4000.5,
          "change": -80.1001,
          "changePct": -2,
          "gapDays": 1,
          "gapSuspect": false
        },
        "settled": {
          "date": "2026-11-11",
          "close": 4000.5,
          "prevDate": "2026-11-10",
          "prevClose": 4030.2,
          "change": -29.7,
          "changePct": -0.74,
          "gapDays": 1,
          "gapSuspect": false
        },
        "quotePrice": 3920.4,
        "series": [
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
            "close": 4000.5
          },
          {
            "date": "2026-11-12",
            "close": 3920.3999
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
          "close": 159.944,
          "prevDate": "2026-11-12",
          "prevClose": 159.734,
          "change": 0.21,
          "changePct": 0.13,
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
        "quotePrice": 159.944,
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
            "close": 159.944
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
          "close": 6.6732,
          "prevDate": "2026-11-12",
          "prevClose": 6.6703,
          "change": 0.0029,
          "changePct": 0.04,
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
        "quotePrice": 6.6732,
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
            "close": 6.6732
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
          "close": 32.834,
          "prevDate": "2026-11-12",
          "prevClose": 32.8619,
          "change": -0.0279,
          "changePct": -0.08,
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
        "quotePrice": 32.834,
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
            "close": 32.834
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
        "close": 43091.8711,
        "prevClose": 44257.1484,
        "change": -1165.2773,
        "changePct": -2.63,
        "asOf": "2026-11-12",
        "prevAsOf": "2026-11-11",
        "gapDays": 1,
        "gapSuspect": false,
        "live": true,
        "latest": {
          "date": "2026-11-13",
          "close": 44050.5391,
          "prevDate": "2026-11-12",
          "prevClose": 43091.8711,
          "change": 958.668,
          "changePct": 2.22,
          "gapDays": 1,
          "gapSuspect": false
        },
        "settled": {
          "date": "2026-11-12",
          "close": 43091.8711,
          "prevDate": "2026-11-11",
          "prevClose": 44257.1484,
          "change": -1165.2773,
          "changePct": -2.63,
          "gapDays": 1,
          "gapSuspect": false
        },
        "quotePrice": 44050.54,
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
            "close": 44050.5391
          }
        ],
        "currency": "TWD",
        "timezone": "Asia/Taipei",
        "source": "Yahoo Finance chart API（日線）"
      }
    }
  }
};
