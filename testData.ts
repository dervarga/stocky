export const mockedSymbols = [
  {
    '1. symbol': 'TSLA',
    '2. name': 'Tesla Inc',
    '3. type': 'Equity',
    '4. region': 'United States',
    '5. marketOpen': '09:30',
    '6. marketClose': '16:00',
    '7. timezone': 'UTC-04',
    '8. currency': 'USD',
    '9. matchScore': '1.0000',
  },
  {
    '1. symbol': 'TSLAX',
    '2. name': 'TRANSAMERICA SMALL CAP VALUE A',
    '3. type': 'Mutual Fund',
    '4. region': 'United States',
    '5. marketOpen': '09:30',
    '6. marketClose': '16:00',
    '7. timezone': 'UTC-04',
    '8. currency': 'USD',
    '9. matchScore': '0.8889',
  },
  {
    '1. symbol': 'TSLA.LON',
    '2. name': 'LS 1x Tesla Tracker ETP Securities GBP',
    '3. type': 'ETF',
    '4. region': 'United Kingdom',
    '5. marketOpen': '08:00',
    '6. marketClose': '16:30',
    '7. timezone': 'UTC+01',
    '8. currency': 'GBX',
    '9. matchScore': '0.8000',
  },
  {
    '1. symbol': 'TSLA.TRT',
    '2. name': 'Tesla CDR (CAD Hedged)',
    '3. type': 'Equity',
    '4. region': 'Toronto',
    '5. marketOpen': '09:30',
    '6. marketClose': '16:00',
    '7. timezone': 'UTC-05',
    '8. currency': 'CAD',
    '9. matchScore': '0.7273',
  },
  {
    '1. symbol': 'TSLA34.SAO',
    '2. name': 'Tesla Inc',
    '3. type': 'Equity',
    '4. region': 'Brazil/Sao Paolo',
    '5. marketOpen': '10:00',
    '6. marketClose': '17:30',
    '7. timezone': 'UTC-03',
    '8. currency': 'BRL',
    '9. matchScore': '0.6154',
  },
]

export const mockedGlobalQoute = {
  '01. symbol': 'TSLA',
  '02. open': '272.0600',
  '03. high': '272.6500',
  '04. low': '260.0200',
  '05. price': '263.4500',
  '06. volume': '97443450',
  '07. latest trading day': '2025-03-06',
  '08. previous close': '279.1000',
  '09. change': '-15.6500',
  '10. change percent': '-5.6073%',
}

export const mockedTimeSeriesResponse = {
  'Meta Data': {
    '1. Information':
      'Intraday (5min) open, high, low, close prices and volume',
    '2. Symbol': 'IBM',
    '3. Last Refreshed': '2025-03-06 19:55:00',
    '4. Interval': '5min',
    '5. Output Size': 'Compact',
    '6. Time Zone': 'US/Eastern',
  },
  'Time Series (5min)': {
    '2025-03-06 19:55:00': {
      '1. open': '249.1000',
      '2. high': '249.1000',
      '3. low': '249.0000',
      '4. close': '249.0000',
      '5. volume': '132',
    },
    '2025-03-06 19:50:00': {
      '1. open': '249.0000',
      '2. high': '249.0000',
      '3. low': '249.0000',
      '4. close': '249.0000',
      '5. volume': '30',
    },
    '2025-03-06 19:40:00': {
      '1. open': '249.0635',
      '2. high': '249.0635',
      '3. low': '249.0635',
      '4. close': '249.0635',
      '5. volume': '1',
    },
    '2025-03-06 19:15:00': {
      '1. open': '249.0000',
      '2. high': '249.0000',
      '3. low': '249.0000',
      '4. close': '249.0000',
      '5. volume': '5',
    },
    '2025-03-06 19:10:00': {
      '1. open': '249.0100',
      '2. high': '249.0100',
      '3. low': '249.0000',
      '4. close': '249.0000',
      '5. volume': '2',
    },
    '2025-03-06 19:05:00': {
      '1. open': '249.4600',
      '2. high': '249.4600',
      '3. low': '248.6900',
      '4. close': '248.6900',
      '5. volume': '1730',
    },
    '2025-03-06 19:00:00': {
      '1. open': '248.6900',
      '2. high': '248.6900',
      '3. low': '248.6900',
      '4. close': '248.6900',
      '5. volume': '519386',
    },
    '2025-03-06 18:50:00': {
      '1. open': '249.0200',
      '2. high': '249.4700',
      '3. low': '249.0200',
      '4. close': '249.4700',
      '5. volume': '18',
    },
    '2025-03-06 18:40:00': {
      '1. open': '249.4700',
      '2. high': '251.5400',
      '3. low': '249.4700',
      '4. close': '251.5400',
      '5. volume': '16',
    },
    '2025-03-06 18:30:00': {
      '1. open': '248.6900',
      '2. high': '252.0000',
      '3. low': '248.6900',
      '4. close': '252.0000',
      '5. volume': '519389',
    },
    '2025-03-06 18:15:00': {
      '1. open': '249.0000',
      '2. high': '249.0000',
      '3. low': '249.0000',
      '4. close': '249.0000',
      '5. volume': '12',
    },
    '2025-03-06 18:10:00': {
      '1. open': '248.7700',
      '2. high': '248.7700',
      '3. low': '248.7700',
      '4. close': '248.7700',
      '5. volume': '6',
    },
    '2025-03-06 18:05:00': {
      '1. open': '248.7800',
      '2. high': '252.9000',
      '3. low': '248.7700',
      '4. close': '252.9000',
      '5. volume': '7',
    },
    '2025-03-06 18:00:00': {
      '1. open': '248.7900',
      '2. high': '248.7900',
      '3. low': '248.7300',
      '4. close': '248.7300',
      '5. volume': '66',
    },
    '2025-03-06 17:50:00': {
      '1. open': '248.7900',
      '2. high': '248.7900',
      '3. low': '248.7900',
      '4. close': '248.7900',
      '5. volume': '15',
    },
    '2025-03-06 17:45:00': {
      '1. open': '248.7700',
      '2. high': '248.7900',
      '3. low': '248.7700',
      '4. close': '248.7900',
      '5. volume': '10',
    },
    '2025-03-06 17:40:00': {
      '1. open': '248.7700',
      '2. high': '248.7700',
      '3. low': '248.7700',
      '4. close': '248.7700',
      '5. volume': '2',
    },
    '2025-03-06 17:35:00': {
      '1. open': '248.7300',
      '2. high': '248.9700',
      '3. low': '248.7300',
      '4. close': '248.9700',
      '5. volume': '5',
    },
    '2025-03-06 17:25:00': {
      '1. open': '248.7700',
      '2. high': '248.7900',
      '3. low': '248.7700',
      '4. close': '248.7900',
      '5. volume': '22',
    },
    '2025-03-06 17:20:00': {
      '1. open': '248.7500',
      '2. high': '248.7500',
      '3. low': '248.7500',
      '4. close': '248.7500',
      '5. volume': '23',
    },
    '2025-03-06 17:15:00': {
      '1. open': '252.9000',
      '2. high': '252.9000',
      '3. low': '248.9700',
      '4. close': '248.9700',
      '5. volume': '23',
    },
    '2025-03-06 17:10:00': {
      '1. open': '248.7500',
      '2. high': '249.0000',
      '3. low': '248.7500',
      '4. close': '248.9800',
      '5. volume': '242',
    },
    '2025-03-06 17:05:00': {
      '1. open': '248.8400',
      '2. high': '248.8400',
      '3. low': '248.8200',
      '4. close': '248.8400',
      '5. volume': '104',
    },
    '2025-03-06 17:00:00': {
      '1. open': '249.0100',
      '2. high': '249.0100',
      '3. low': '248.8400',
      '4. close': '248.8400',
      '5. volume': '16',
    },
    '2025-03-06 16:55:00': {
      '1. open': '250.5000',
      '2. high': '250.5000',
      '3. low': '250.5000',
      '4. close': '250.5000',
      '5. volume': '15',
    },
    '2025-03-06 16:50:00': {
      '1. open': '249.5000',
      '2. high': '250.5000',
      '3. low': '249.5000',
      '4. close': '250.5000',
      '5. volume': '4',
    },
    '2025-03-06 16:40:00': {
      '1. open': '249.1300',
      '2. high': '249.1300',
      '3. low': '248.6900',
      '4. close': '248.7500',
      '5. volume': '17872',
    },
    '2025-03-06 16:35:00': {
      '1. open': '248.6900',
      '2. high': '249.0800',
      '3. low': '248.6900',
      '4. close': '249.0800',
      '5. volume': '1855',
    },
    '2025-03-06 16:25:00': {
      '1. open': '248.8000',
      '2. high': '252.9000',
      '3. low': '248.8000',
      '4. close': '249.5000',
      '5. volume': '18',
    },
    '2025-03-06 16:20:00': {
      '1. open': '252.9000',
      '2. high': '252.9000',
      '3. low': '248.6900',
      '4. close': '248.6900',
      '5. volume': '1033',
    },
    '2025-03-06 16:15:00': {
      '1. open': '248.6900',
      '2. high': '252.7958',
      '3. low': '248.6843',
      '4. close': '248.6843',
      '5. volume': '28147',
    },
    '2025-03-06 16:10:00': {
      '1. open': '248.6900',
      '2. high': '248.6900',
      '3. low': '248.6900',
      '4. close': '248.6900',
      '5. volume': '533459',
    },
    '2025-03-06 16:05:00': {
      '1. open': '248.6900',
      '2. high': '248.7100',
      '3. low': '247.5000',
      '4. close': '248.7100',
      '5. volume': '364',
    },
    '2025-03-06 16:00:00': {
      '1. open': '248.5300',
      '2. high': '248.6900',
      '3. low': '247.5200',
      '4. close': '248.6900',
      '5. volume': '1185031',
    },
    '2025-03-06 15:55:00': {
      '1. open': '249.0500',
      '2. high': '249.1050',
      '3. low': '248.4500',
      '4. close': '248.5300',
      '5. volume': '230786',
    },
    '2025-03-06 15:50:00': {
      '1. open': '248.9800',
      '2. high': '249.1600',
      '3. low': '248.3400',
      '4. close': '249.0400',
      '5. volume': '102072',
    },
    '2025-03-06 15:45:00': {
      '1. open': '248.4950',
      '2. high': '248.9700',
      '3. low': '248.3200',
      '4. close': '248.8500',
      '5. volume': '37691',
    },
    '2025-03-06 15:40:00': {
      '1. open': '248.6900',
      '2. high': '248.9000',
      '3. low': '248.2100',
      '4. close': '248.5200',
      '5. volume': '38246',
    },
    '2025-03-06 15:35:00': {
      '1. open': '248.8300',
      '2. high': '249.1500',
      '3. low': '248.7200',
      '4. close': '248.7200',
      '5. volume': '31503',
    },
    '2025-03-06 15:30:00': {
      '1. open': '248.9900',
      '2. high': '249.3500',
      '3. low': '248.8400',
      '4. close': '248.9800',
      '5. volume': '31005',
    },
    '2025-03-06 15:25:00': {
      '1. open': '248.5100',
      '2. high': '248.9800',
      '3. low': '248.4700',
      '4. close': '248.9050',
      '5. volume': '25518',
    },
    '2025-03-06 15:20:00': {
      '1. open': '249.1100',
      '2. high': '249.3099',
      '3. low': '248.3700',
      '4. close': '248.6100',
      '5. volume': '29377',
    },
    '2025-03-06 15:15:00': {
      '1. open': '248.8350',
      '2. high': '249.0800',
      '3. low': '248.6050',
      '4. close': '249.0800',
      '5. volume': '24103',
    },
    '2025-03-06 15:10:00': {
      '1. open': '249.0150',
      '2. high': '249.1600',
      '3. low': '248.5700',
      '4. close': '248.8650',
      '5. volume': '33141',
    },
    '2025-03-06 15:05:00': {
      '1. open': '248.5300',
      '2. high': '249.0800',
      '3. low': '248.3840',
      '4. close': '249.0150',
      '5. volume': '43437',
    },
    '2025-03-06 15:00:00': {
      '1. open': '247.8100',
      '2. high': '248.6650',
      '3. low': '247.6900',
      '4. close': '248.4250',
      '5. volume': '43513',
    },
    '2025-03-06 14:55:00': {
      '1. open': '248.8900',
      '2. high': '248.8900',
      '3. low': '246.8844',
      '4. close': '247.8968',
      '5. volume': '61203',
    },
    '2025-03-06 14:50:00': {
      '1. open': '249.1100',
      '2. high': '249.4400',
      '3. low': '248.7600',
      '4. close': '248.7600',
      '5. volume': '27469',
    },
    '2025-03-06 14:45:00': {
      '1. open': '248.0700',
      '2. high': '249.4900',
      '3. low': '248.0700',
      '4. close': '249.0500',
      '5. volume': '45525',
    },
    '2025-03-06 14:40:00': {
      '1. open': '247.5200',
      '2. high': '248.2000',
      '3. low': '247.5200',
      '4. close': '247.9850',
      '5. volume': '21210',
    },
    '2025-03-06 14:35:00': {
      '1. open': '247.6000',
      '2. high': '247.8200',
      '3. low': '247.4172',
      '4. close': '247.5300',
      '5. volume': '38795',
    },
    '2025-03-06 14:30:00': {
      '1. open': '247.4900',
      '2. high': '247.7750',
      '3. low': '247.3600',
      '4. close': '247.5500',
      '5. volume': '25036',
    },
    '2025-03-06 14:25:00': {
      '1. open': '247.7500',
      '2. high': '247.7600',
      '3. low': '247.3306',
      '4. close': '247.4400',
      '5. volume': '19975',
    },
    '2025-03-06 14:20:00': {
      '1. open': '247.5500',
      '2. high': '247.8000',
      '3. low': '247.3000',
      '4. close': '247.8000',
      '5. volume': '26443',
    },
    '2025-03-06 14:15:00': {
      '1. open': '248.0200',
      '2. high': '248.1700',
      '3. low': '247.4100',
      '4. close': '247.4968',
      '5. volume': '29638',
    },
    '2025-03-06 14:10:00': {
      '1. open': '247.9500',
      '2. high': '248.2100',
      '3. low': '247.9000',
      '4. close': '248.0400',
      '5. volume': '14683',
    },
    '2025-03-06 14:05:00': {
      '1. open': '247.8600',
      '2. high': '248.0700',
      '3. low': '247.6600',
      '4. close': '247.8700',
      '5. volume': '10713',
    },
    '2025-03-06 14:00:00': {
      '1. open': '248.1500',
      '2. high': '248.1500',
      '3. low': '247.6400',
      '4. close': '247.8200',
      '5. volume': '19963',
    },
    '2025-03-06 13:55:00': {
      '1. open': '248.1900',
      '2. high': '248.2500',
      '3. low': '247.9650',
      '4. close': '248.1550',
      '5. volume': '13813',
    },
    '2025-03-06 13:50:00': {
      '1. open': '247.8400',
      '2. high': '248.3700',
      '3. low': '247.7800',
      '4. close': '248.0000',
      '5. volume': '10166',
    },
    '2025-03-06 13:45:00': {
      '1. open': '247.6000',
      '2. high': '248.0000',
      '3. low': '247.5700',
      '4. close': '247.7400',
      '5. volume': '12552',
    },
    '2025-03-06 13:40:00': {
      '1. open': '247.9900',
      '2. high': '247.9900',
      '3. low': '247.3800',
      '4. close': '247.7600',
      '5. volume': '20843',
    },
    '2025-03-06 13:35:00': {
      '1. open': '248.4300',
      '2. high': '248.5400',
      '3. low': '247.9300',
      '4. close': '247.9300',
      '5. volume': '21627',
    },
    '2025-03-06 13:30:00': {
      '1. open': '248.3500',
      '2. high': '248.8800',
      '3. low': '248.3500',
      '4. close': '248.4200',
      '5. volume': '20731',
    },
    '2025-03-06 13:25:00': {
      '1. open': '248.9550',
      '2. high': '249.0500',
      '3. low': '248.4100',
      '4. close': '248.4300',
      '5. volume': '27283',
    },
    '2025-03-06 13:20:00': {
      '1. open': '248.9300',
      '2. high': '249.0700',
      '3. low': '248.7313',
      '4. close': '248.9400',
      '5. volume': '11979',
    },
    '2025-03-06 13:15:00': {
      '1. open': '248.5700',
      '2. high': '249.0300',
      '3. low': '248.5300',
      '4. close': '249.0100',
      '5. volume': '23585',
    },
    '2025-03-06 13:10:00': {
      '1. open': '248.6800',
      '2. high': '248.7400',
      '3. low': '248.3900',
      '4. close': '248.4800',
      '5. volume': '29349',
    },
    '2025-03-06 13:05:00': {
      '1. open': '248.9300',
      '2. high': '249.0800',
      '3. low': '248.5925',
      '4. close': '248.5925',
      '5. volume': '15739',
    },
    '2025-03-06 13:00:00': {
      '1. open': '249.0900',
      '2. high': '249.1600',
      '3. low': '248.7801',
      '4. close': '248.9400',
      '5. volume': '18363',
    },
    '2025-03-06 12:55:00': {
      '1. open': '248.7000',
      '2. high': '249.3350',
      '3. low': '248.6962',
      '4. close': '249.1800',
      '5. volume': '20656',
    },
    '2025-03-06 12:50:00': {
      '1. open': '248.4300',
      '2. high': '248.7200',
      '3. low': '248.3400',
      '4. close': '248.6850',
      '5. volume': '22603',
    },
    '2025-03-06 12:45:00': {
      '1. open': '248.8400',
      '2. high': '248.8400',
      '3. low': '248.3150',
      '4. close': '248.4100',
      '5. volume': '27546',
    },
    '2025-03-06 12:40:00': {
      '1. open': '248.9285',
      '2. high': '249.4800',
      '3. low': '248.8100',
      '4. close': '248.9100',
      '5. volume': '24349',
    },
    '2025-03-06 12:35:00': {
      '1. open': '249.3800',
      '2. high': '249.4200',
      '3. low': '248.8600',
      '4. close': '249.0000',
      '5. volume': '16825',
    },
    '2025-03-06 12:30:00': {
      '1. open': '249.2150',
      '2. high': '249.6900',
      '3. low': '249.1401',
      '4. close': '249.3800',
      '5. volume': '19231',
    },
    '2025-03-06 12:25:00': {
      '1. open': '249.4600',
      '2. high': '249.5100',
      '3. low': '249.1344',
      '4. close': '249.1381',
      '5. volume': '15930',
    },
    '2025-03-06 12:20:00': {
      '1. open': '249.6200',
      '2. high': '249.8300',
      '3. low': '249.3719',
      '4. close': '249.4600',
      '5. volume': '17093',
    },
    '2025-03-06 12:15:00': {
      '1. open': '249.3700',
      '2. high': '249.7000',
      '3. low': '249.3100',
      '4. close': '249.5200',
      '5. volume': '10279',
    },
    '2025-03-06 12:10:00': {
      '1. open': '249.1700',
      '2. high': '249.4800',
      '3. low': '249.1000',
      '4. close': '249.4800',
      '5. volume': '16118',
    },
    '2025-03-06 12:05:00': {
      '1. open': '249.0500',
      '2. high': '249.2400',
      '3. low': '248.8800',
      '4. close': '249.0900',
      '5. volume': '15021',
    },
    '2025-03-06 12:00:00': {
      '1. open': '249.5400',
      '2. high': '249.8000',
      '3. low': '249.1000',
      '4. close': '249.1000',
      '5. volume': '20137',
    },
    '2025-03-06 11:55:00': {
      '1. open': '250.0050',
      '2. high': '250.0050',
      '3. low': '249.4510',
      '4. close': '249.4510',
      '5. volume': '11977',
    },
    '2025-03-06 11:50:00': {
      '1. open': '250.5200',
      '2. high': '250.5200',
      '3. low': '249.8800',
      '4. close': '249.9341',
      '5. volume': '33157',
    },
    '2025-03-06 11:45:00': {
      '1. open': '250.8700',
      '2. high': '250.8700',
      '3. low': '250.5800',
      '4. close': '250.6250',
      '5. volume': '13842',
    },
    '2025-03-06 11:40:00': {
      '1. open': '251.1050',
      '2. high': '251.2000',
      '3. low': '250.6862',
      '4. close': '250.8250',
      '5. volume': '26323',
    },
    '2025-03-06 11:35:00': {
      '1. open': '251.8900',
      '2. high': '251.8900',
      '3. low': '250.9600',
      '4. close': '251.2000',
      '5. volume': '28200',
    },
    '2025-03-06 11:30:00': {
      '1. open': '251.7000',
      '2. high': '252.0600',
      '3. low': '251.3700',
      '4. close': '251.8700',
      '5. volume': '41130',
    },
    '2025-03-06 11:25:00': {
      '1. open': '251.5750',
      '2. high': '251.7864',
      '3. low': '250.9500',
      '4. close': '251.7864',
      '5. volume': '55422',
    },
    '2025-03-06 11:20:00': {
      '1. open': '251.6900',
      '2. high': '251.7300',
      '3. low': '251.0300',
      '4. close': '251.4900',
      '5. volume': '40463',
    },
    '2025-03-06 11:15:00': {
      '1. open': '251.8000',
      '2. high': '252.1000',
      '3. low': '251.6200',
      '4. close': '251.7200',
      '5. volume': '21506',
    },
    '2025-03-06 11:10:00': {
      '1. open': '251.8800',
      '2. high': '251.8800',
      '3. low': '251.6000',
      '4. close': '251.7317',
      '5. volume': '16879',
    },
    '2025-03-06 11:05:00': {
      '1. open': '251.6700',
      '2. high': '251.9600',
      '3. low': '251.5000',
      '4. close': '251.8600',
      '5. volume': '29515',
    },
    '2025-03-06 11:00:00': {
      '1. open': '251.7300',
      '2. high': '251.9300',
      '3. low': '251.5300',
      '4. close': '251.6700',
      '5. volume': '23950',
    },
    '2025-03-06 10:55:00': {
      '1. open': '251.3100',
      '2. high': '251.6996',
      '3. low': '251.1600',
      '4. close': '251.6200',
      '5. volume': '22232',
    },
    '2025-03-06 10:50:00': {
      '1. open': '251.5000',
      '2. high': '251.6800',
      '3. low': '251.2200',
      '4. close': '251.2400',
      '5. volume': '18434',
    },
    '2025-03-06 10:45:00': {
      '1. open': '251.5650',
      '2. high': '251.6800',
      '3. low': '251.2300',
      '4. close': '251.4900',
      '5. volume': '31849',
    },
    '2025-03-06 10:40:00': {
      '1. open': '251.3200',
      '2. high': '251.6800',
      '3. low': '251.3200',
      '4. close': '251.5400',
      '5. volume': '26588',
    },
    '2025-03-06 10:35:00': {
      '1. open': '250.7800',
      '2. high': '251.3550',
      '3. low': '250.4100',
      '4. close': '251.3550',
      '5. volume': '33070',
    },
    '2025-03-06 10:30:00': {
      '1. open': '250.8300',
      '2. high': '250.8661',
      '3. low': '250.4800',
      '4. close': '250.7017',
      '5. volume': '19659',
    },
  },
}
