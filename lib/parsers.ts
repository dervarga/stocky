import { AlphaVantageGlobalQuote, AlphaVantageIntradayTimeSerieEntry, AlphaVantageStockMatch, AlphavantageStockResponse } from '@/types/alphaVantage'
import { StockGlobalQuote, StockIntradayTimeSerieEntry, StockMatch } from '@/types/stocks'

export const transformStock = (stock: AlphaVantageStockMatch) => {
  return {
    symbol: stock['1. symbol'],
    name: stock['2. name'],
    type: stock['3. type'],
    region: stock['4. region'],
    marketOpen: stock['5. marketOpen'],
    marketClose: stock['6. marketClose'],
    timezone: stock['7. timezone'],
    currency: stock['8. currency'],
    matchScore: stock['9. matchScore'],
  }
}

export const transformStockMatches = (
  stockMatches: AlphavantageStockResponse
): StockMatch[] => {
  return stockMatches.bestMatches.map(transformStock)
}

export const transformGlobalQuote = (
  globalQuote: AlphaVantageGlobalQuote
): StockGlobalQuote => {
  return {
    symbol: globalQuote['01. symbol'],
    open: globalQuote['02. open'],
    high: globalQuote['03. high'],
    low: globalQuote['04. low'],
    price: globalQuote['05. price'],
    volume: globalQuote['06. volume'],
    latestTradingDay: globalQuote['07. latest trading day'],
    previousClose: globalQuote['08. previous close'],
    change: globalQuote['09. change'],
    changePercent: globalQuote['10. change percent'],
  }
}

export const transformTimeSerieEntry = (timeSerie: AlphaVantageIntradayTimeSerieEntry): StockIntradayTimeSerieEntry => {
  return {
    open: timeSerie['1. open'],
    high: timeSerie['2. high'],
    low: timeSerie['3. low'],
    close: timeSerie['4. close'],
    volume: timeSerie['5. volume'],
  }
}

export const transformTimeSeries = (timeSeries: Record<string, AlphaVantageIntradayTimeSerieEntry>): StockIntradayTimeSerieEntry[] => {
  return Object.values(timeSeries).map(transformTimeSerieEntry)
}

export const filterMatchingStock = ({ stocks, symbol }: { stocks: StockMatch[], symbol: string }): StockMatch => {
  const match = stocks.find(stock => stock.symbol === symbol)

  if (!match) {
    throw new Error(`Stock with symbol ${symbol} not found`)
  }
  return match
}

export const parseBigNumber = (value: string) => {
  return parseFloat(value).toLocaleString()
}

