import { StockSearch } from '@/components/StockSearch'
import { SymbolMatches } from '@/components/SymbolMatches'

export default async function Home() {
  return (
    <div className='flex flex-grow flex-col items-center space-y-2 py-2'>
      <StockSearch />
      <SymbolMatches />
    </div>
  )
}
