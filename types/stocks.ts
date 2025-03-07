export type StockMatch = {
  symbol: string
  name: string
  type: string
  region: string
  marketOpen: string
  marketClose: string
  timezone: string
  currency: string
  matchScore: string
}

export type StockGlobalQuote = {
  symbol: string
  open: string
  high: string
  low: string
  price: string
  volume: string
  latestTradingDay: string
  previousClose: string
  change: string
  changePercent: string
}

export type StockIntradayTimeSerieEntry = {
  open: string
  high: string
  low: string
  close: string
  volume: string
}
