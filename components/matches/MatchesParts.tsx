import { StockMatch } from '@/types/stocks'
import { LoaderCircle } from 'lucide-react'
import { useRouter } from 'next/navigation'
import { Separator } from '../ui/separator'

export const MatchRow = ({ match }: { match: StockMatch }) => {
  const { replace } = useRouter()
  const handleClick = () => {
    replace(`/stock/${match.symbol}`)
  }
  return (
    <div className='space-y-1 px-2 py-1' onClick={handleClick}>
      <div className='text-md font-semibold'>{match.symbol}</div>
      <div className='flex space-x-1 text-sm'>
        <div className='after:content-[","]'>{match.name}</div>
        <div className='after:content-[","]'>{match.region}</div>
        <div>{match.type}</div>
      </div>
    </div>
  )
}

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
      <div className='p-4 italic'>
        It looks like you haven't searched for anything yet.
      </div>
    )
  }
  if (matches.length === 0) {
    return <div>No matches found</div>
  }
  return matches.map((match, index) => (
    <div className='cursor-pointer hover:bg-gray-100' key={match.symbol}>
      <MatchRow key={match.symbol} match={match} />
      {index < matches.length - 1 && <Separator />}
    </div>
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
