'use client'

import { getSymbolsByKeyword } from '@/queries/stocks'
import { StockMatch } from '@/types/stocks'
import { useQuery } from '@tanstack/react-query'
import { useSearchParams } from 'next/navigation'
import {
  Matches,
  MatchesError,
  MatchesHeader,
  MatchesLoading,
} from './MatchesParts'

export const SymbolMatches = () => {
  const searchParams = useSearchParams()
  const searchTerm = searchParams.get('searchTerm')

  const {
    data: matches,
    isLoading,
    error,
  } = useQuery<StockMatch[]>({
    queryKey: ['symbolMatches', searchTerm],
    queryFn: () => getSymbolsByKeyword(searchTerm || ''),
    enabled: !!searchTerm,
  })

  if (error) return <MatchesError error={error} />

  return (
    <div className='flex w-full max-w-xl flex-col space-y-2'>
      <div className='flex flex-col rounded-md border border-gray-200 pb-2 shadow-md'>
        <MatchesHeader searchTerm={searchTerm || ''} />
        <div className='relative'>
          {isLoading ? (
            <MatchesLoading />
          ) : (
            <Matches matches={matches || []} searchTerm={searchTerm || ''} />
          )}
        </div>
      </div>
    </div>
  )
}
