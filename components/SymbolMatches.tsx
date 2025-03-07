'use client'

import { StockMatch } from '@/types/stocks'
import { useSearchParams } from 'next/navigation'
import { useEffect, useState } from 'react'
import { Separator } from './ui/separator'

export const SymbolMatches = () => {
  const [matches, setMatches] = useState<StockMatch[]>([])
  const [isLoading, setIsLoading] = useState(false)
  const searchParams = useSearchParams()

  useEffect(() => {
    const searchTerm = searchParams.get('searchTerm')

    if (!searchTerm) return

    const fetchSymbolMatches = async () => {
      setIsLoading(true)
      const res = await fetch(`/api/symbols?searchTerm=${searchTerm}`)
      if (!res.ok) {
        console.error('Failed to fetch symbol matches')
        setIsLoading(false)
        return
      }
      const data = (await res.json()) as StockMatch[]
      setMatches(data)
      setIsLoading(false)
    }

    fetchSymbolMatches()
  }, [searchParams])

  return (
    <div className='flex w-full max-w-xl flex-col space-y-2'>
      <div className='flex flex-col rounded-md border border-gray-200 pb-2 shadow-md'>
        <div className='rounded-md bg-gray-200 p-4 text-lg font-bold'>
          Symbol Matches
        </div>
        {isLoading && <div className='text-sm text-gray-500'>Loading...</div>}
        {matches.length === 0 ? (
          <div className='text-sm text-gray-500'>No matches found</div>
        ) : (
          matches.map((match) => (
            <div key={match.symbol} className='flex flex-col'>
              <div className='space-y-1 px-2'>
                <div className='text-md font-semibold'>{match.symbol}</div>
                <div className='flex space-x-2 text-sm'>
                  <div className='after:content-[","]'>{match.name}</div>
                  <div>{match.region}</div>
                  <div>{match.type}</div>
                </div>
              </div>
              {matches.indexOf(match) !== matches.length - 1 && (
                <Separator className='my-1' />
              )}
            </div>
          ))
        )}
      </div>
    </div>
  )
}
