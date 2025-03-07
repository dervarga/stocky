'use server'

import { transformGlobalQuote, transformStockMatches } from '@/lib/parsers'
import { mockedGlobalQoute, mockedSymbols, mockedTimeSeriesResponse } from '@/testData'
import { AlphaVantageGlobalQuoteResponse, AlphaVantageIntradayResponse, AlphavantageStockResponse, TimeSeriesData } from '@/types/alphaVantage'
import { StockGlobalQuote, StockIntradayTimeSerieEntry, StockMatch } from '@/types/stocks'

export const getSymbolsByKeyword = async (
  keyword: string
): Promise<StockMatch[]> => {
  try {
    const response = await fetch(
      `${process.env.ALPHA_VANTAGE_BASE_URL}/query?function=SYMBOL_SEARCH&keywords=${keyword}&apikey=${process.env.ALPHA_VANTAGE_API_KEY}`
    )

    const matches = (await response.json()) as AlphavantageStockResponse

    if (!matches.bestMatches) {
      matches.bestMatches = mockedSymbols
    }

    return transformStockMatches(matches)
  } catch (error) {
    console.error(error)
    throw new Error('Failed to fetch stock symbols')
  }
}

export const geStockWithGlobalQuote = async (symbol: string): Promise<{ stock: StockMatch, globalQuote: StockGlobalQuote }> => {
  try {
    const [stockMatches, globalQuote] = await Promise.all([
      getSymbolsByKeyword(symbol),
      getGlobalQuote(symbol),
    ])

    return {
      stock: stockMatches[0],
      globalQuote,
    }
  } catch (error) {
    console.error(error)
    throw new Error('Failed to fetch stock with global quote')
  }
}

export const getGlobalQuote = async (symbol: string) => {
  try {
    const response = await fetch(
      `${process.env.ALPHA_VANTAGE_BASE_URL}/query?function=GLOBAL_QUOTE&symbol=${symbol}&apikey=${process.env.ALPHA_VANTAGE_API_KEY}`
    )

    const rawGlobalQuoteResponse = (await response.json()) as AlphaVantageGlobalQuoteResponse
    let globalQuote = rawGlobalQuoteResponse['Global Quote']


    if (!globalQuote) {
      globalQuote = mockedGlobalQoute
    }

    return transformGlobalQuote(globalQuote)
  } catch (error) {
    console.error(error)
    throw new Error('Failed to fetch global quote')
  }
}

export const getDailyTimeSeries = async (symbol: string) => {
  try {
    const response = await fetch(
      `${process.env.ALPHA_VANTAGE_BASE_URL}/query?function=TIME_SERIES_DAILY&interval=15min&symbol=${symbol}&apikey=${process.env.ALPHA_VANTAGE_API_KEY}`
    )

    const rawTimeSeriesResponse = (await response.json()) as AlphaVantageIntradayResponse

    const timeSeriesKey = Object.keys(rawTimeSeriesResponse).find(key => key.startsWith("Time Series"))

    const rawTimeSeries = timeSeriesKey && timeSeriesKey.startsWith("Time Series")
      ? ((rawTimeSeriesResponse as any)[timeSeriesKey] as Record<string, TimeSeriesData>)
      : mockedTimeSeriesResponse

    const parsedData: StockIntradayTimeSerieEntry[] = Object.entries(rawTimeSeries).map(([timestamp, entry]) => ({
      timestamp,
      open: entry["1. open"],
      high: entry["2. high"],
      low: entry["3. low"],
      close: entry["4. close"],
      volume: entry["5. volume"],
    }))

    return parsedData

  } catch (error) {
    console.error(error)
    throw new Error('Failed to fetch daily time series')
  }
}
