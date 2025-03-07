import { AlphavantageStockResponse } from '@/types/alphaVantage'
import { StockMatch } from '@/types/stocks'

export const transformStockMatches = (
  stockMatches: AlphavantageStockResponse
): StockMatch[] => {
  return stockMatches.bestMatches.map((stockMatch) => {
    return {
      symbol: stockMatch['1. symbol'],
      name: stockMatch['2. name'],
      type: stockMatch['3. type'],
      region: stockMatch['4. region'],
      marketOpen: stockMatch['5. marketOpen'],
      marketClose: stockMatch['6. marketClose'],
      timezone: stockMatch['7. timezone'],
      currency: stockMatch['8. currency'],
      matchScore: stockMatch['9. matchScore'],
    }
  })
}
