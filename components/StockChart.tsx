'use client'
import { getDailyTimeSeries } from '@/actions/stocks'

export const StockChart = async ({ symbol }: { symbol: string }) => {
  const response = await getDailyTimeSeries(symbol)

  return (
    <div>
      <div></div>
    </div>
  )
}
