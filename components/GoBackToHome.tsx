'use client'

import { MoveLeft } from 'lucide-react'
import { useRouter } from 'next/navigation'

export const GoBackToHome = () => {
  const { replace } = useRouter()
  const handleClick = () => {
    replace('/')
  }
  return (
    <div className='flex cursor-pointer items-center space-x-1 text-sm italic hover:underline'>
      <MoveLeft width={20} height={20} />
      <div onClick={handleClick}>Go back to search</div>
    </div>
  )
}
