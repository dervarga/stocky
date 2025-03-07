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

  const handleSubmit = () => {
    const params = new URLSearchParams(searchParams)
    params.set('searchTerm', field)
    replace(`${pathname}?${params.toString()}`)
  }

  return (
    <div className='mt-12 flex w-full max-w-xl space-x-2'>
      <Input
        type='text'
        placeholder='Search for stocks by name or symbol'
        value={field}
        onChange={(e) => setField(e.target.value)}
      />
      <Button type='button' onClick={() => handleSubmit()}>
        Search
      </Button>
    </div>
  )
}
