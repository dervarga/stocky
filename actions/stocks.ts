'use server'

import { transformStockMatches } from '@/lib/parsers'
import { AlphavantageStockResponse } from '@/types/alphaVantage'
import { StockMatch } from '@/types/stocks'

export const getSymbolsByKeyword = async (
  keyword: string
): Promise<StockMatch[]> => {
  try {
    const response = await fetch(
      `${process.env.ALPHA_VANTAGE_BASE_URL}/query?function=SYMBOL_SEARCH&keywords=${keyword}&apikey=${process.env.ALPHA_VANTAGE_API_KEY}`
    )

    const matches = (await response.json()) as AlphavantageStockResponse

    return transformStockMatches(matches)
  } catch (error) {
    console.error(error)
    throw new Error('Failed to fetch stock symbols')
  }
}
