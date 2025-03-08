import { StockSearch } from '@/components/StockSearch'
import { SymbolMatches } from '@/components/matches/SymbolMatches'
import { Suspense } from 'react'

export default async function Home() {
  return (
    <div className='sm: m-0 m-4 flex flex-grow flex-col items-center space-y-2 py-4'>
      <Suspense fallback='Loading...'>
        <StockSearch />
        <SymbolMatches />
      </Suspense>
    </div>
  )
}
