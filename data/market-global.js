/**
 * market-global.js — 由 GitHub Actions 自動產生，請勿手動編輯。
 * 產生器：scripts/fetch-global-market.mjs
 *
 * 國際行情中繼資料，供每日 dashboard 更新流程讀用，不會被 index.html 載入。
 * ok:false 代表該標的當次抓不到，error 說明原因——請據實標註，不要沿用舊值。
 */
window.MARKET_GLOBAL = {
  "fetchedAt": "2026-11-17T19:38:32.384Z",
  "okCount": 16,
  "totalCount": 16,
  "items": {
    "sox": {
      "ok": true,
      "label": "費城半導體 SOX",
      "symbol": "%5ESOX",
      "value": {
        "close": 9610.6504,
        "prevClose": 10146.3203,
        "change": -535.6699,
        "changePct": -5.28,
        "asOf": "2026-11-16",
        "prevAsOf": "2026-11-13",
        "gapDays": 3,
        "gapSuspect": false,
        "live": true,
        "latest": {
          "date": "2026-11-17",
          "close": 9503.7793,
          "prevDate": "2026-11-16",
          "prevClose": 9610.6504,
          "change": -106.8711,
          "changePct": -1.11,
          "gapDays": 1,
          "gapSuspect": false
        },
        "settled": {
          "date": "2026-11-16",
          "close": 9610.6504,
          "prevDate": "2026-11-13",
          "prevClose": 10146.3203,
          "change": -535.6699,
          "changePct": -5.28,
          "gapDays": 3,
          "gapSuspect": false
        },
        "quotePrice": 9503.779,
        "series": [
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
            "close": 10146.3203
          },
          {
            "date": "2026-11-16",
            "close": 9610.6504
          },
          {
            "date": "2026-11-17",
            "close": 9503.7793
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
        "close": 22.91,
        "prevClose": 19.3,
        "change": 3.61,
        "changePct": 18.7,
        "asOf": "2026-11-16",
        "prevAsOf": "2026-11-13",
        "gapDays": 3,
        "gapSuspect": false,
        "live": true,
        "latest": {
          "date": "2026-11-17",
          "close": 25.67,
          "prevDate": "2026-11-16",
          "prevClose": 22.91,
          "change": 2.76,
          "changePct": 12.05,
          "gapDays": 1,
          "gapSuspect": false
        },
        "settled": {
          "date": "2026-11-16",
          "close": 22.91,
          "prevDate": "2026-11-13",
          "prevClose": 19.3,
          "change": 3.61,
          "changePct": 18.7,
          "gapDays": 3,
          "gapSuspect": false
        },
        "quotePrice": 25.67,
        "series": [
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
          },
          {
            "date": "2026-11-16",
            "close": 22.91
          },
          {
            "date": "2026-11-17",
            "close": 25.67
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
        "close": 7416.5898,
        "prevClose": 7561.6699,
        "change": -145.0801,
        "changePct": -1.92,
        "asOf": "2026-11-16",
        "prevAsOf": "2026-11-13",
        "gapDays": 3,
        "gapSuspect": false,
        "live": true,
        "latest": {
          "date": "2026-11-17",
          "close": 7325.5801,
          "prevDate": "2026-11-16",
          "prevClose": 7416.5898,
          "change": -91.0097,
          "changePct": -1.23,
          "gapDays": 1,
          "gapSuspect": false
        },
        "settled": {
          "date": "2026-11-16",
          "close": 7416.5898,
          "prevDate": "2026-11-13",
          "prevClose": 7561.6699,
          "change": -145.0801,
          "changePct": -1.92,
          "gapDays": 3,
          "gapSuspect": false
        },
        "quotePrice": 7325.58,
        "series": [
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
          },
          {
            "date": "2026-11-16",
            "close": 7416.5898
          },
          {
            "date": "2026-11-17",
            "close": 7325.5801
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
        "close": 24509.7598,
        "prevClose": 25136.2695,
        "change": -626.5097,
        "changePct": -2.49,
        "asOf": "2026-11-16",
        "prevAsOf": "2026-11-13",
        "gapDays": 3,
        "gapSuspect": false,
        "live": true,
        "latest": {
          "date": "2026-11-17",
          "close": 24238.8652,
          "prevDate": "2026-11-16",
          "prevClose": 24509.7598,
          "change": -270.8946,
          "changePct": -1.11,
          "gapDays": 1,
          "gapSuspect": false
        },
        "settled": {
          "date": "2026-11-16",
          "close": 24509.7598,
          "prevDate": "2026-11-13",
          "prevClose": 25136.2695,
          "change": -626.5097,
          "changePct": -2.49,
          "gapDays": 3,
          "gapSuspect": false
        },
        "quotePrice": 24238.865,
        "series": [
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
            "close": 25136.2695
          },
          {
            "date": "2026-11-16",
            "close": 24509.7598
          },
          {
            "date": "2026-11-17",
            "close": 24238.8652
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
        "close": 51608.1719,
        "prevClose": 52347.5508,
        "change": -739.3789,
        "changePct": -1.41,
        "asOf": "2026-11-16",
        "prevAsOf": "2026-11-13",
        "gapDays": 3,
        "gapSuspect": false,
        "live": true,
        "latest": {
          "date": "2026-11-17",
          "close": 50765.7109,
          "prevDate": "2026-11-16",
          "prevClose": 51608.1719,
          "change": -842.461,
          "changePct": -1.63,
          "gapDays": 1,
          "gapSuspect": false
        },
        "settled": {
          "date": "2026-11-16",
          "close": 51608.1719,
          "prevDate": "2026-11-13",
          "prevClose": 52347.5508,
          "change": -739.3789,
          "changePct": -1.41,
          "gapDays": 3,
          "gapSuspect": false
        },
        "quotePrice": 50765.71,
        "series": [
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
          },
          {
            "date": "2026-11-16",
            "close": 51608.1719
          },
          {
            "date": "2026-11-17",
            "close": 50765.7109
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
        "close": 5.121,
        "prevClose": 5.154,
        "change": -0.033,
        "changePct": -0.64,
        "asOf": "2026-11-16",
        "prevAsOf": "2026-11-13",
        "gapDays": 3,
        "gapSuspect": false,
        "live": true,
        "latest": {
          "date": "2026-11-17",
          "close": 5.101,
          "prevDate": "2026-11-16",
          "prevClose": 5.121,
          "change": -0.02,
          "changePct": -0.39,
          "gapDays": 1,
          "gapSuspect": false
        },
        "settled": {
          "date": "2026-11-16",
          "close": 5.121,
          "prevDate": "2026-11-13",
          "prevClose": 5.154,
          "change": -0.033,
          "changePct": -0.64,
          "gapDays": 3,
          "gapSuspect": false
        },
        "quotePrice": 5.101,
        "series": [
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
          },
          {
            "date": "2026-11-16",
            "close": 5.121
          },
          {
            "date": "2026-11-17",
            "close": 5.101
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
        "close": 5.467,
        "prevClose": 5.481,
        "change": -0.014,
        "changePct": -0.26,
        "asOf": "2026-11-16",
        "prevAsOf": "2026-11-13",
        "gapDays": 3,
        "gapSuspect": false,
        "live": true,
        "latest": {
          "date": "2026-11-17",
          "close": 5.459,
          "prevDate": "2026-11-16",
          "prevClose": 5.467,
          "change": -0.008,
          "changePct": -0.15,
          "gapDays": 1,
          "gapSuspect": false
        },
        "settled": {
          "date": "2026-11-16",
          "close": 5.467,
          "prevDate": "2026-11-13",
          "prevClose": 5.481,
          "change": -0.014,
          "changePct": -0.26,
          "gapDays": 3,
          "gapSuspect": false
        },
        "quotePrice": 5.459,
        "series": [
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
          },
          {
            "date": "2026-11-16",
            "close": 5.467
          },
          {
            "date": "2026-11-17",
            "close": 5.459
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
        "close": 4.935,
        "prevClose": 4.981,
        "change": -0.046,
        "changePct": -0.92,
        "asOf": "2026-11-16",
        "prevAsOf": "2026-11-13",
        "gapDays": 3,
        "gapSuspect": false,
        "live": true,
        "latest": {
          "date": "2026-11-17",
          "close": 4.9,
          "prevDate": "2026-11-16",
          "prevClose": 4.935,
          "change": -0.035,
          "changePct": -0.71,
          "gapDays": 1,
          "gapSuspect": false
        },
        "settled": {
          "date": "2026-11-16",
          "close": 4.935,
          "prevDate": "2026-11-13",
          "prevClose": 4.981,
          "change": -0.046,
          "changePct": -0.92,
          "gapDays": 3,
          "gapSuspect": false
        },
        "quotePrice": 4.9,
        "series": [
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
          },
          {
            "date": "2026-11-16",
            "close": 4.935
          },
          {
            "date": "2026-11-17",
            "close": 4.9
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
        "close": 103.55,
        "prevClose": 103.41,
        "change": 0.14,
        "changePct": 0.14,
        "asOf": "2026-11-16",
        "prevAsOf": "2026-11-13",
        "gapDays": 3,
        "gapSuspect": false,
        "live": true,
        "latest": {
          "date": "2026-11-17",
          "close": 103.469,
          "prevDate": "2026-11-16",
          "prevClose": 103.55,
          "change": -0.081,
          "changePct": -0.08,
          "gapDays": 1,
          "gapSuspect": false
        },
        "settled": {
          "date": "2026-11-16",
          "close": 103.55,
          "prevDate": "2026-11-13",
          "prevClose": 103.41,
          "change": 0.14,
          "changePct": 0.14,
          "gapDays": 3,
          "gapSuspect": false
        },
        "quotePrice": 103.469,
        "series": [
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
            "close": 103.41
          },
          {
            "date": "2026-11-16",
            "close": 103.55
          },
          {
            "date": "2026-11-17",
            "close": 103.469
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
        "close": 85.72,
        "prevClose": 88.56,
        "change": -2.84,
        "changePct": -3.21,
        "asOf": "2026-11-16",
        "prevAsOf": "2026-11-13",
        "gapDays": 3,
        "gapSuspect": false,
        "live": true,
        "latest": {
          "date": "2026-11-17",
          "close": 86,
          "prevDate": "2026-11-16",
          "prevClose": 85.72,
          "change": 0.28,
          "changePct": 0.33,
          "gapDays": 1,
          "gapSuspect": false
        },
        "settled": {
          "date": "2026-11-16",
          "close": 85.72,
          "prevDate": "2026-11-13",
          "prevClose": 88.56,
          "change": -2.84,
          "changePct": -3.21,
          "gapDays": 3,
          "gapSuspect": false
        },
        "quotePrice": 86,
        "series": [
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
            "close": 88.56
          },
          {
            "date": "2026-11-16",
            "close": 85.72
          },
          {
            "date": "2026-11-17",
            "close": 86
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
        "close": 92.44,
        "prevClose": 95.84,
        "change": -3.4,
        "changePct": -3.55,
        "asOf": "2026-11-16",
        "prevAsOf": "2026-11-13",
        "gapDays": 3,
        "gapSuspect": false,
        "live": true,
        "latest": {
          "date": "2026-11-17",
          "close": 93.12,
          "prevDate": "2026-11-16",
          "prevClose": 92.44,
          "change": 0.68,
          "changePct": 0.74,
          "gapDays": 1,
          "gapSuspect": false
        },
        "settled": {
          "date": "2026-11-16",
          "close": 92.44,
          "prevDate": "2026-11-13",
          "prevClose": 95.84,
          "change": -3.4,
          "changePct": -3.55,
          "gapDays": 3,
          "gapSuspect": false
        },
        "quotePrice": 93.12,
        "series": [
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
            "close": 95.84
          },
          {
            "date": "2026-11-16",
            "close": 92.44
          },
          {
            "date": "2026-11-17",
            "close": 93.12
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
        "close": 3853,
        "prevClose": 3886.3,
        "change": -33.3,
        "changePct": -0.86,
        "asOf": "2026-11-16",
        "prevAsOf": "2026-11-13",
        "gapDays": 3,
        "gapSuspect": false,
        "live": true,
        "latest": {
          "date": "2026-11-17",
          "close": 3855.8999,
          "prevDate": "2026-11-16",
          "prevClose": 3853,
          "change": 2.8999,
          "changePct": 0.08,
          "gapDays": 1,
          "gapSuspect": false
        },
        "settled": {
          "date": "2026-11-16",
          "close": 3853,
          "prevDate": "2026-11-13",
          "prevClose": 3886.3,
          "change": -33.3,
          "changePct": -0.86,
          "gapDays": 3,
          "gapSuspect": false
        },
        "quotePrice": 3855.9,
        "series": [
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
            "close": 3886.3
          },
          {
            "date": "2026-11-16",
            "close": 3853
          },
          {
            "date": "2026-11-17",
            "close": 3855.8999
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
        "close": 159.78,
        "prevClose": 159.875,
        "change": -0.095,
        "changePct": -0.06,
        "asOf": "2026-11-16",
        "prevAsOf": "2026-11-13",
        "gapDays": 3,
        "gapSuspect": false,
        "live": true,
        "latest": {
          "date": "2026-11-17",
          "close": 159.312,
          "prevDate": "2026-11-16",
          "prevClose": 159.78,
          "change": -0.468,
          "changePct": -0.29,
          "gapDays": 1,
          "gapSuspect": false
        },
        "settled": {
          "date": "2026-11-16",
          "close": 159.78,
          "prevDate": "2026-11-13",
          "prevClose": 159.875,
          "change": -0.095,
          "changePct": -0.06,
          "gapDays": 3,
          "gapSuspect": false
        },
        "quotePrice": 159.312,
        "series": [
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
          },
          {
            "date": "2026-11-16",
            "close": 159.78
          },
          {
            "date": "2026-11-17",
            "close": 159.312
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
        "close": 6.671,
        "prevClose": 6.6704,
        "change": 0.0006,
        "changePct": 0.01,
        "asOf": "2026-11-16",
        "prevAsOf": "2026-11-13",
        "gapDays": 3,
        "gapSuspect": false,
        "live": true,
        "latest": {
          "date": "2026-11-17",
          "close": 6.6654,
          "prevDate": "2026-11-16",
          "prevClose": 6.671,
          "change": -0.0056,
          "changePct": -0.08,
          "gapDays": 1,
          "gapSuspect": false
        },
        "settled": {
          "date": "2026-11-16",
          "close": 6.671,
          "prevDate": "2026-11-13",
          "prevClose": 6.6704,
          "change": 0.0006,
          "changePct": 0.01,
          "gapDays": 3,
          "gapSuspect": false
        },
        "quotePrice": 6.6654,
        "series": [
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
          },
          {
            "date": "2026-11-16",
            "close": 6.671
          },
          {
            "date": "2026-11-17",
            "close": 6.6654
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
        "close": 32.8764,
        "prevClose": 32.939,
        "change": -0.0626,
        "changePct": -0.19,
        "asOf": "2026-11-16",
        "prevAsOf": "2026-11-13",
        "gapDays": 3,
        "gapSuspect": false,
        "live": true,
        "latest": {
          "date": "2026-11-17",
          "close": 32.912,
          "prevDate": "2026-11-16",
          "prevClose": 32.8764,
          "change": 0.0356,
          "changePct": 0.11,
          "gapDays": 1,
          "gapSuspect": false
        },
        "settled": {
          "date": "2026-11-16",
          "close": 32.8764,
          "prevDate": "2026-11-13",
          "prevClose": 32.939,
          "change": -0.0626,
          "changePct": -0.19,
          "gapDays": 3,
          "gapSuspect": false
        },
        "quotePrice": 32.912,
        "series": [
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
          },
          {
            "date": "2026-11-16",
            "close": 32.8764
          },
          {
            "date": "2026-11-17",
            "close": 32.912
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
        "close": 41040.0781,
        "prevClose": 43675.1211,
        "change": -2635.043,
        "changePct": -6.03,
        "asOf": "2026-11-16",
        "prevAsOf": "2026-11-13",
        "gapDays": 3,
        "gapSuspect": false,
        "live": false,
        "latest": {
          "date": "2026-11-16",
          "close": 41040.0781,
          "prevDate": "2026-11-13",
          "prevClose": 43675.1211,
          "change": -2635.043,
          "changePct": -6.03,
          "gapDays": 3,
          "gapSuspect": false
        },
        "settled": {
          "date": "2026-11-16",
          "close": 41040.0781,
          "prevDate": "2026-11-13",
          "prevClose": 43675.1211,
          "change": -2635.043,
          "changePct": -6.03,
          "gapDays": 3,
          "gapSuspect": false
        },
        "quotePrice": 40092.11,
        "series": [
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
          },
          {
            "date": "2026-11-16",
            "close": 41040.0781
          }
        ],
        "currency": "TWD",
        "timezone": "Asia/Taipei",
        "source": "Yahoo Finance chart API（日線）"
      }
    }
  }
};
