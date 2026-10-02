/**
 * market-global.js — 由 GitHub Actions 自動產生，請勿手動編輯。
 * 產生器：scripts/fetch-global-market.mjs
 *
 * 國際行情中繼資料，供每日 dashboard 更新流程讀用，不會被 index.html 載入。
 * ok:false 代表該標的當次抓不到，error 說明原因——請據實標註，不要沿用舊值。
 */
window.MARKET_GLOBAL = {
  "fetchedAt": "2026-10-02T16:30:56.994Z",
  "okCount": 16,
  "totalCount": 16,
  "items": {
    "sox": {
      "ok": true,
      "label": "費城半導體 SOX",
      "symbol": "%5ESOX",
      "value": {
        "close": 12829,
        "prevClose": 12628.6201,
        "change": 200.3799,
        "changePct": 1.59,
        "asOf": "2026-10-01",
        "prevAsOf": "2026-09-30",
        "gapDays": 1,
        "gapSuspect": false,
        "live": true,
        "latest": {
          "date": "2026-10-02",
          "close": 13204.7871,
          "prevDate": "2026-10-01",
          "prevClose": 12829,
          "change": 375.7871,
          "changePct": 2.93,
          "gapDays": 1,
          "gapSuspect": false
        },
        "settled": {
          "date": "2026-10-01",
          "close": 12829,
          "prevDate": "2026-09-30",
          "prevClose": 12628.6201,
          "change": 200.3799,
          "changePct": 1.59,
          "gapDays": 1,
          "gapSuspect": false
        },
        "quotePrice": 13204.787,
        "series": [
          {
            "date": "2026-09-25",
            "close": 12668.9297
          },
          {
            "date": "2026-09-28",
            "close": 12465.2402
          },
          {
            "date": "2026-09-29",
            "close": 12629.1602
          },
          {
            "date": "2026-09-30",
            "close": 12628.6201
          },
          {
            "date": "2026-10-01",
            "close": 12829
          },
          {
            "date": "2026-10-02",
            "close": 13204.7871
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
        "close": 16.39,
        "prevClose": 16.34,
        "change": 0.05,
        "changePct": 0.31,
        "asOf": "2026-10-01",
        "prevAsOf": "2026-09-30",
        "gapDays": 1,
        "gapSuspect": false,
        "live": true,
        "latest": {
          "date": "2026-10-02",
          "close": 15.59,
          "prevDate": "2026-10-01",
          "prevClose": 16.39,
          "change": -0.8,
          "changePct": -4.88,
          "gapDays": 1,
          "gapSuspect": false
        },
        "settled": {
          "date": "2026-10-01",
          "close": 16.39,
          "prevDate": "2026-09-30",
          "prevClose": 16.34,
          "change": 0.05,
          "changePct": 0.31,
          "gapDays": 1,
          "gapSuspect": false
        },
        "quotePrice": 15.59,
        "series": [
          {
            "date": "2026-09-25",
            "close": 14.87
          },
          {
            "date": "2026-09-28",
            "close": 16.07
          },
          {
            "date": "2026-09-29",
            "close": 16.04
          },
          {
            "date": "2026-09-30",
            "close": 16.34
          },
          {
            "date": "2026-10-01",
            "close": 16.39
          },
          {
            "date": "2026-10-02",
            "close": 15.59
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
        "close": 7666.4502,
        "prevClose": 7651.54,
        "change": 14.9102,
        "changePct": 0.19,
        "asOf": "2026-10-01",
        "prevAsOf": "2026-09-30",
        "gapDays": 1,
        "gapSuspect": false,
        "live": true,
        "latest": {
          "date": "2026-10-02",
          "close": 7721.0498,
          "prevDate": "2026-10-01",
          "prevClose": 7666.4502,
          "change": 54.5996,
          "changePct": 0.71,
          "gapDays": 1,
          "gapSuspect": false
        },
        "settled": {
          "date": "2026-10-01",
          "close": 7666.4502,
          "prevDate": "2026-09-30",
          "prevClose": 7651.54,
          "change": 14.9102,
          "changePct": 0.19,
          "gapDays": 1,
          "gapSuspect": false
        },
        "quotePrice": 7721.05,
        "series": [
          {
            "date": "2026-09-25",
            "close": 7743.4102
          },
          {
            "date": "2026-09-28",
            "close": 7683.6899
          },
          {
            "date": "2026-09-29",
            "close": 7670.8398
          },
          {
            "date": "2026-09-30",
            "close": 7651.54
          },
          {
            "date": "2026-10-01",
            "close": 7666.4502
          },
          {
            "date": "2026-10-02",
            "close": 7721.0498
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
        "close": 26871.5996,
        "prevClose": 26861.0605,
        "change": 10.5391,
        "changePct": 0.04,
        "asOf": "2026-10-01",
        "prevAsOf": "2026-09-30",
        "gapDays": 1,
        "gapSuspect": false,
        "live": true,
        "latest": {
          "date": "2026-10-02",
          "close": 27190.8027,
          "prevDate": "2026-10-01",
          "prevClose": 26871.5996,
          "change": 319.2031,
          "changePct": 1.19,
          "gapDays": 1,
          "gapSuspect": false
        },
        "settled": {
          "date": "2026-10-01",
          "close": 26871.5996,
          "prevDate": "2026-09-30",
          "prevClose": 26861.0605,
          "change": 10.5391,
          "changePct": 0.04,
          "gapDays": 1,
          "gapSuspect": false
        },
        "quotePrice": 27190.803,
        "series": [
          {
            "date": "2026-09-25",
            "close": 27068.7207
          },
          {
            "date": "2026-09-28",
            "close": 26820.3809
          },
          {
            "date": "2026-09-29",
            "close": 26797.5391
          },
          {
            "date": "2026-09-30",
            "close": 26861.0605
          },
          {
            "date": "2026-10-01",
            "close": 26871.5996
          },
          {
            "date": "2026-10-02",
            "close": 27190.8027
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
        "close": 50926.5586,
        "prevClose": 50906.0508,
        "change": 20.5078,
        "changePct": 0.04,
        "asOf": "2026-10-01",
        "prevAsOf": "2026-09-30",
        "gapDays": 1,
        "gapSuspect": false,
        "live": true,
        "latest": {
          "date": "2026-10-02",
          "close": 51106.6484,
          "prevDate": "2026-10-01",
          "prevClose": 50926.5586,
          "change": 180.0898,
          "changePct": 0.35,
          "gapDays": 1,
          "gapSuspect": false
        },
        "settled": {
          "date": "2026-10-01",
          "close": 50926.5586,
          "prevDate": "2026-09-30",
          "prevClose": 50906.0508,
          "change": 20.5078,
          "changePct": 0.04,
          "gapDays": 1,
          "gapSuspect": false
        },
        "quotePrice": 51106.65,
        "series": [
          {
            "date": "2026-09-25",
            "close": 51828.6211
          },
          {
            "date": "2026-09-28",
            "close": 51481.5117
          },
          {
            "date": "2026-09-29",
            "close": 51349.9219
          },
          {
            "date": "2026-09-30",
            "close": 50906.0508
          },
          {
            "date": "2026-10-01",
            "close": 50926.5586
          },
          {
            "date": "2026-10-02",
            "close": 51106.6484
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
        "close": 5.237,
        "prevClose": 5.293,
        "change": -0.056,
        "changePct": -1.06,
        "asOf": "2026-10-01",
        "prevAsOf": "2026-09-30",
        "gapDays": 1,
        "gapSuspect": false,
        "live": true,
        "latest": {
          "date": "2026-10-02",
          "close": 5.262,
          "prevDate": "2026-10-01",
          "prevClose": 5.237,
          "change": 0.025,
          "changePct": 0.48,
          "gapDays": 1,
          "gapSuspect": false
        },
        "settled": {
          "date": "2026-10-01",
          "close": 5.237,
          "prevDate": "2026-09-30",
          "prevClose": 5.293,
          "change": -0.056,
          "changePct": -1.06,
          "gapDays": 1,
          "gapSuspect": false
        },
        "quotePrice": 5.262,
        "series": [
          {
            "date": "2026-09-25",
            "close": 5.184
          },
          {
            "date": "2026-09-28",
            "close": 5.24
          },
          {
            "date": "2026-09-29",
            "close": 5.255
          },
          {
            "date": "2026-09-30",
            "close": 5.293
          },
          {
            "date": "2026-10-01",
            "close": 5.237
          },
          {
            "date": "2026-10-02",
            "close": 5.262
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
        "close": 5.603,
        "prevClose": 5.638,
        "change": -0.035,
        "changePct": -0.62,
        "asOf": "2026-10-01",
        "prevAsOf": "2026-09-30",
        "gapDays": 1,
        "gapSuspect": false,
        "live": true,
        "latest": {
          "date": "2026-10-02",
          "close": 5.622,
          "prevDate": "2026-10-01",
          "prevClose": 5.603,
          "change": 0.019,
          "changePct": 0.34,
          "gapDays": 1,
          "gapSuspect": false
        },
        "settled": {
          "date": "2026-10-01",
          "close": 5.603,
          "prevDate": "2026-09-30",
          "prevClose": 5.638,
          "change": -0.035,
          "changePct": -0.62,
          "gapDays": 1,
          "gapSuspect": false
        },
        "quotePrice": 5.622,
        "series": [
          {
            "date": "2026-09-25",
            "close": 5.504
          },
          {
            "date": "2026-09-28",
            "close": 5.561
          },
          {
            "date": "2026-09-29",
            "close": 5.594
          },
          {
            "date": "2026-09-30",
            "close": 5.638
          },
          {
            "date": "2026-10-01",
            "close": 5.603
          },
          {
            "date": "2026-10-02",
            "close": 5.622
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
        "close": 5.005,
        "prevClose": 5.089,
        "change": -0.084,
        "changePct": -1.65,
        "asOf": "2026-10-01",
        "prevAsOf": "2026-09-30",
        "gapDays": 1,
        "gapSuspect": false,
        "live": true,
        "latest": {
          "date": "2026-10-02",
          "close": 5.041,
          "prevDate": "2026-10-01",
          "prevClose": 5.005,
          "change": 0.036,
          "changePct": 0.72,
          "gapDays": 1,
          "gapSuspect": false
        },
        "settled": {
          "date": "2026-10-01",
          "close": 5.005,
          "prevDate": "2026-09-30",
          "prevClose": 5.089,
          "change": -0.084,
          "changePct": -1.65,
          "gapDays": 1,
          "gapSuspect": false
        },
        "quotePrice": 5.041,
        "series": [
          {
            "date": "2026-09-25",
            "close": 5.007
          },
          {
            "date": "2026-09-28",
            "close": 5.068
          },
          {
            "date": "2026-09-29",
            "close": 5.063
          },
          {
            "date": "2026-09-30",
            "close": 5.089
          },
          {
            "date": "2026-10-01",
            "close": 5.005
          },
          {
            "date": "2026-10-02",
            "close": 5.041
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
        "close": 102.1,
        "prevClose": 101.45,
        "change": 0.65,
        "changePct": 0.64,
        "asOf": "2026-10-01",
        "prevAsOf": "2026-09-30",
        "gapDays": 1,
        "gapSuspect": false,
        "live": true,
        "latest": {
          "date": "2026-10-02",
          "close": 101.909,
          "prevDate": "2026-10-01",
          "prevClose": 102.1,
          "change": -0.191,
          "changePct": -0.19,
          "gapDays": 1,
          "gapSuspect": false
        },
        "settled": {
          "date": "2026-10-01",
          "close": 102.1,
          "prevDate": "2026-09-30",
          "prevClose": 101.45,
          "change": 0.65,
          "changePct": 0.64,
          "gapDays": 1,
          "gapSuspect": false
        },
        "quotePrice": 101.909,
        "series": [
          {
            "date": "2026-09-25",
            "close": 100.97
          },
          {
            "date": "2026-09-28",
            "close": 101.2
          },
          {
            "date": "2026-09-29",
            "close": 101.37
          },
          {
            "date": "2026-09-30",
            "close": 101.45
          },
          {
            "date": "2026-10-01",
            "close": 102.1
          },
          {
            "date": "2026-10-02",
            "close": 101.909
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
        "close": 92.87,
        "prevClose": 90.42,
        "change": 2.45,
        "changePct": 2.71,
        "asOf": "2026-10-01",
        "prevAsOf": "2026-09-30",
        "gapDays": 1,
        "gapSuspect": false,
        "live": true,
        "latest": {
          "date": "2026-10-02",
          "close": 90.53,
          "prevDate": "2026-10-01",
          "prevClose": 92.87,
          "change": -2.34,
          "changePct": -2.52,
          "gapDays": 1,
          "gapSuspect": false
        },
        "settled": {
          "date": "2026-10-01",
          "close": 92.87,
          "prevDate": "2026-09-30",
          "prevClose": 90.42,
          "change": 2.45,
          "changePct": 2.71,
          "gapDays": 1,
          "gapSuspect": false
        },
        "quotePrice": 90.53,
        "series": [
          {
            "date": "2026-09-25",
            "close": 92.41
          },
          {
            "date": "2026-09-28",
            "close": 92.6
          },
          {
            "date": "2026-09-29",
            "close": 89.38
          },
          {
            "date": "2026-09-30",
            "close": 90.42
          },
          {
            "date": "2026-10-01",
            "close": 92.87
          },
          {
            "date": "2026-10-02",
            "close": 90.53
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
        "close": 102.31,
        "prevClose": 103.53,
        "change": -1.22,
        "changePct": -1.18,
        "asOf": "2026-10-01",
        "prevAsOf": "2026-09-30",
        "gapDays": 1,
        "gapSuspect": false,
        "live": true,
        "latest": {
          "date": "2026-10-02",
          "close": 101.17,
          "prevDate": "2026-10-01",
          "prevClose": 102.31,
          "change": -1.14,
          "changePct": -1.11,
          "gapDays": 1,
          "gapSuspect": false
        },
        "settled": {
          "date": "2026-10-01",
          "close": 102.31,
          "prevDate": "2026-09-30",
          "prevClose": 103.53,
          "change": -1.22,
          "changePct": -1.18,
          "gapDays": 1,
          "gapSuspect": false
        },
        "quotePrice": 101.17,
        "series": [
          {
            "date": "2026-09-25",
            "close": 104.32
          },
          {
            "date": "2026-09-28",
            "close": 105.28
          },
          {
            "date": "2026-09-29",
            "close": 102.59
          },
          {
            "date": "2026-09-30",
            "close": 103.53
          },
          {
            "date": "2026-10-01",
            "close": 102.31
          },
          {
            "date": "2026-10-02",
            "close": 101.17
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
        "close": 4202.2998,
        "prevClose": 4186.7002,
        "change": 15.5996,
        "changePct": 0.37,
        "asOf": "2026-10-01",
        "prevAsOf": "2026-09-30",
        "gapDays": 1,
        "gapSuspect": false,
        "live": true,
        "latest": {
          "date": "2026-10-02",
          "close": 4167.8999,
          "prevDate": "2026-10-01",
          "prevClose": 4202.2998,
          "change": -34.3999,
          "changePct": -0.82,
          "gapDays": 1,
          "gapSuspect": false
        },
        "settled": {
          "date": "2026-10-01",
          "close": 4202.2998,
          "prevDate": "2026-09-30",
          "prevClose": 4186.7002,
          "change": 15.5996,
          "changePct": 0.37,
          "gapDays": 1,
          "gapSuspect": false
        },
        "quotePrice": 4167.9,
        "series": [
          {
            "date": "2026-09-25",
            "close": 4321.2002
          },
          {
            "date": "2026-09-28",
            "close": 4168.3999
          },
          {
            "date": "2026-09-29",
            "close": 4179.7002
          },
          {
            "date": "2026-09-30",
            "close": 4186.7002
          },
          {
            "date": "2026-10-01",
            "close": 4202.2998
          },
          {
            "date": "2026-10-02",
            "close": 4167.8999
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
        "close": 157.558,
        "prevClose": 157.404,
        "change": 0.154,
        "changePct": 0.1,
        "asOf": "2026-10-01",
        "prevAsOf": "2026-09-30",
        "gapDays": 1,
        "gapSuspect": false,
        "live": true,
        "latest": {
          "date": "2026-10-02",
          "close": 157.843,
          "prevDate": "2026-10-01",
          "prevClose": 157.558,
          "change": 0.285,
          "changePct": 0.18,
          "gapDays": 1,
          "gapSuspect": false
        },
        "settled": {
          "date": "2026-10-01",
          "close": 157.558,
          "prevDate": "2026-09-30",
          "prevClose": 157.404,
          "change": 0.154,
          "changePct": 0.1,
          "gapDays": 1,
          "gapSuspect": false
        },
        "quotePrice": 157.843,
        "series": [
          {
            "date": "2026-09-25",
            "close": 158.811
          },
          {
            "date": "2026-09-28",
            "close": 157.463
          },
          {
            "date": "2026-09-29",
            "close": 157.361
          },
          {
            "date": "2026-09-30",
            "close": 157.404
          },
          {
            "date": "2026-10-01",
            "close": 157.558
          },
          {
            "date": "2026-10-02",
            "close": 157.843
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
        "close": 6.7045,
        "prevClose": 6.703,
        "change": 0.0015,
        "changePct": 0.02,
        "asOf": "2026-10-01",
        "prevAsOf": "2026-09-30",
        "gapDays": 1,
        "gapSuspect": false,
        "live": true,
        "latest": {
          "date": "2026-10-02",
          "close": 6.6987,
          "prevDate": "2026-10-01",
          "prevClose": 6.7045,
          "change": -0.0058,
          "changePct": -0.09,
          "gapDays": 1,
          "gapSuspect": false
        },
        "settled": {
          "date": "2026-10-01",
          "close": 6.7045,
          "prevDate": "2026-09-30",
          "prevClose": 6.703,
          "change": 0.0015,
          "changePct": 0.02,
          "gapDays": 1,
          "gapSuspect": false
        },
        "quotePrice": 6.6987,
        "series": [
          {
            "date": "2026-09-25",
            "close": 6.7111
          },
          {
            "date": "2026-09-28",
            "close": 6.7128
          },
          {
            "date": "2026-09-29",
            "close": 6.7103
          },
          {
            "date": "2026-09-30",
            "close": 6.703
          },
          {
            "date": "2026-10-01",
            "close": 6.7045
          },
          {
            "date": "2026-10-02",
            "close": 6.6987
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
        "close": 31.8679,
        "prevClose": 31.85,
        "change": 0.0179,
        "changePct": 0.06,
        "asOf": "2026-10-01",
        "prevAsOf": "2026-09-30",
        "gapDays": 1,
        "gapSuspect": false,
        "live": true,
        "latest": {
          "date": "2026-10-02",
          "close": 31.828,
          "prevDate": "2026-10-01",
          "prevClose": 31.8679,
          "change": -0.0399,
          "changePct": -0.13,
          "gapDays": 1,
          "gapSuspect": false
        },
        "settled": {
          "date": "2026-10-01",
          "close": 31.8679,
          "prevDate": "2026-09-30",
          "prevClose": 31.85,
          "change": 0.0179,
          "changePct": 0.06,
          "gapDays": 1,
          "gapSuspect": false
        },
        "quotePrice": 31.828,
        "series": [
          {
            "date": "2026-09-25",
            "close": 31.8062
          },
          {
            "date": "2026-09-28",
            "close": 31.7787
          },
          {
            "date": "2026-09-29",
            "close": 31.7822
          },
          {
            "date": "2026-09-30",
            "close": 31.85
          },
          {
            "date": "2026-10-01",
            "close": 31.8679
          },
          {
            "date": "2026-10-02",
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
        "close": 48353.4883,
        "prevClose": 47940.1289,
        "change": 413.3594,
        "changePct": 0.86,
        "asOf": "2026-10-01",
        "prevAsOf": "2026-09-30",
        "gapDays": 1,
        "gapSuspect": false,
        "live": false,
        "latest": {
          "date": "2026-10-01",
          "close": 48353.4883,
          "prevDate": "2026-09-30",
          "prevClose": 47940.1289,
          "change": 413.3594,
          "changePct": 0.86,
          "gapDays": 1,
          "gapSuspect": false
        },
        "settled": {
          "date": "2026-10-01",
          "close": 48353.4883,
          "prevDate": "2026-09-30",
          "prevClose": 47940.1289,
          "change": 413.3594,
          "changePct": 0.86,
          "gapDays": 1,
          "gapSuspect": false
        },
        "quotePrice": 48475.74,
        "series": [
          {
            "date": "2026-09-22",
            "close": 47800.1719
          },
          {
            "date": "2026-09-23",
            "close": 48157.2891
          },
          {
            "date": "2026-09-24",
            "close": 48024.6016
          },
          {
            "date": "2026-09-29",
            "close": 47631.9609
          },
          {
            "date": "2026-09-30",
            "close": 47940.1289
          },
          {
            "date": "2026-10-01",
            "close": 48353.4883
          }
        ],
        "currency": "TWD",
        "timezone": "Asia/Taipei",
        "source": "Yahoo Finance chart API（日線）"
      }
    }
  }
};
