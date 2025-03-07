import { StockSearch } from '@/components/StockSearch'
import { SymbolMatches } from '@/components/SymbolMatches'
import { Suspense } from 'react'

export default async function Home() {
  return (
    <div className='flex flex-grow flex-col items-center space-y-2 py-2'>
      <Suspense fallback='Loading...'>
        <StockSearch />
        <SymbolMatches />
      </Suspense>
    </div>
  )
}
