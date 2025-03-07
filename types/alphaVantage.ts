export type AlphaVantageRateLimit = {
  ['Information']: string
}

export type AlphaVantageStockMatch = {
  '1. symbol': string
  '2. name': string
  '3. type': string
  '4. region': string
  '5. marketOpen': string
  '6. marketClose': string
  '7. timezone': string
  '8. currency': string
  '9. matchScore': string
}

export type AlphavantageStockResponse = {
  bestMatches: AlphaVantageStockMatch[]
}

export type AlphaVantageGlobalQuote = {
  '01. symbol': string
  '02. open': string
  '03. high': string
  '04. low': string
  '05. price': string
  '06. volume': string
  '07. latest trading day': string
  '08. previous close': string
  '09. change': string
  '10. change percent': string
}

export type AlphaVantageGlobalQuoteResponse = {
  ['Global Quote']: AlphaVantageGlobalQuote
  ['Information']?: string
}

export type AlphaVantageIntradayTimeSerieEntry = {
  '1. open': string
  '2. high': string
  '3. low': string
  '4. close': string
  '5. volume': string
}

export type TimeSeriesData = {
  [timestamp: string]: AlphaVantageIntradayTimeSerieEntry
}

export type AlphaVantageIntradayMeta = {
  '4. Interval': string
  [key: string]: string
}

export type AlphaVantageIntradayResponse = {
  ['Meta Data']: AlphaVantageIntradayMeta
  ['Time Series (5min)']: TimeSeriesData
  ['Information']?: string
}
