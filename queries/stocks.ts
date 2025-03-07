import { StockMatch } from '@/types/stocks'

export const getSymbolsByKeyword = async (keyword: string): Promise<StockMatch[]> => {
  try {
    const response = await fetch(`/api/symbols?searchTerm=${keyword}`)

    return (await response.json()) as StockMatch[]
  } catch (error) {
    console.error(error)
    throw new Error('Failed to fetch stock symbols')
  }
}