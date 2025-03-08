import { geStockWithGlobalQuote } from '@/actions/stocks'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { parseBigNumber } from '@/lib/parsers'
import { cn } from '@/lib/utils'

type PageProps = {
  params: Promise<{ symbol: string }>
}

const Page = async ({ params }: PageProps) => {
  const { symbol } = await params

  const { stock, globalQuote } = await geStockWithGlobalQuote(symbol)

  const { name, type, region, marketOpen, marketClose, timezone, currency } =
    stock

  const {
    open,
    high,
    low,
    price,
    volume,
    latestTradingDay,
    previousClose,
    change,
    changePercent,
  } = globalQuote

  return (
    <div className='p-4'>
      <div className='flex items-center space-x-2'>
        <h1 className='text-3xl font-bold'>{stock.symbol}</h1>
        <div>
          <span
            className={cn(
              Number(change) > 0 ? 'text-green-500' : 'text-red-500',
              'text-2xl'
            )}
          >
            {change} ({changePercent})
          </span>
        </div>
      </div>
      <div className='mt-2 grid grid-cols-1 gap-4 sm:grid-cols-2'>
        <Card>
          <CardHeader>
            <CardTitle className='text-xl font-bold'>Stock details</CardTitle>
          </CardHeader>
          <CardContent>
            <div className='space-y-2'>
              <div className='grid grid-cols-2 gap-2'>
                <div className='font-semibold'>Name</div>
                <div>{name}</div>
                <div className='font-semibold'>Type</div>
                <div>{type}</div>
                <div className='font-semibold'>Region</div>
                <div>{region}</div>
                <div className='font-semibold'>Market open</div>
                <div>{marketOpen}</div>
                <div className='font-semibold'>Market close</div>
                <div>{marketClose}</div>
                <div className='font-semibold'>Timezone</div>
                <div>{timezone}</div>
                <div className='font-semibold'>Currency</div>
                <div>{currency}</div>
              </div>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle className='text-xl font-bold'>
              Price and volume information
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className='space-y-2'>
              <div className='grid grid-cols-2 gap-2'>
                <div className='font-semibold'>Open</div>
                <div>{open}</div>
                <div className='font-semibold'>High</div>
                <div>{high}</div>
                <div className='font-semibold'>Low</div>
                <div>{low}</div>
                <div className='font-semibold'>Price</div>
                <div>{price}</div>
                <div className='font-semibold'>Volume</div>
                <div>{parseBigNumber(volume)}</div>
                <div className='font-semibold'>Latest trading day</div>
                <div>{latestTradingDay}</div>
                <div className='font-semibold'>Previous close</div>
                <div>{previousClose}</div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}

export default Page
