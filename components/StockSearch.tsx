'use client'

import { usePathname, useRouter, useSearchParams } from 'next/navigation'
import { useState } from 'react'
import { Button } from './ui/button'
import { Input } from './ui/input'

export const StockSearch = () => {
  const searchParams = useSearchParams()
  const pathname = usePathname()
  const { replace } = useRouter()

  const [field, setField] = useState('')

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    const params = new URLSearchParams(searchParams)
    params.set('searchTerm', field)
    replace(`${pathname}?${params.toString()}`)
  }

  return (
    <form
      className='mt-12 flex w-full max-w-xl flex-col space-y-0 space-y-2 space-x-0 sm:flex-row'
      onSubmit={handleSubmit}
    >
      <Input
        type='text'
        placeholder='Search for stocks by name or symbol'
        value={field}
        onChange={(e) => setField(e.target.value)}
      />
      <Button type='submit'>Search</Button>
    </form>
  )
}
