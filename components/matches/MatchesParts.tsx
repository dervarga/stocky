import { StockMatch } from '@/types/stocks'
import { LoaderCircle } from 'lucide-react'

export const MatchRow = ({ match }: { match: StockMatch }) => (
  <div className='my-1 cursor-pointer space-y-1 px-2 hover:bg-gray-100'>
    <div className='text-md font-semibold'>{match.symbol}</div>
    <div className='flex space-x-1 text-sm'>
      <div className='after:content-[","]'>{match.name}</div>
      <div className='after:content-[","]'>{match.region}</div>
      <div>{match.type}</div>
    </div>
  </div>
)

export const MatchesHeader = ({ searchTerm }: { searchTerm: string }) => (
  <div className='rounded-t-md bg-gray-200 p-4 text-lg font-bold'>
    Stock search results{' '}
    {searchTerm && (
      <span>
        for <span className='italic'>"{searchTerm}"</span>
      </span>
    )}
  </div>
)

export const Matches = ({
  matches,
  searchTerm,
}: {
  matches: StockMatch[]
  searchTerm: string
}) => {
  if (!searchTerm) {
    return (
      <div className='p-4'>
        It looks like you haven't searched for anything yet.
      </div>
    )
  }
  if (matches.length === 0) {
    return <div>No matches found</div>
  }
  return matches.map((match, index) => (
    <MatchRow key={match.symbol} match={match} />
  ))
}

export const MatchesError = ({ error }: { error: Error }) => (
  <div
    className='rounded border border-red-400 bg-red-100 px-4 py-3 text-red-700'
    role='alert'
  >
    <strong className='font-bold'>Something went wrong!</strong>
    <span className='block sm:inline'>{error.message}</span>
  </div>
)

export const MatchesLoading = () => (
  <div className='flex min-h-10 items-center justify-center p-4' role='status'>
    <LoaderCircle className='h-8 w-8 animate-spin text-gray-500' />
  </div>
)
