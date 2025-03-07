'use client'

import { QueryProvider } from '@/contexts/QueryProvider'

export const Providers = ({ children }: { children: React.ReactNode }) => {
  return <QueryProvider>{children}</QueryProvider>
}
