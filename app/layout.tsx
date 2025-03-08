import { TestWarningAlert } from '@/components/ui/TestWarning'
import { Providers } from '@/lib/providers'
import type { Metadata } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'
import './globals.css'

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
})

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
})

export const metadata: Metadata = {
  title: 'Stocky',
  description: 'Your friendly guide to stocks',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang='en'>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Providers>
          <div className='flex min-h-screen flex-col'>
            <main className='flex flex-grow flex-col'>
              <header className='bg-gray-800 p-4 text-white'>
                <h1 className='text-2xl font-bold'>Stocky</h1>
                <p className='text-sm'>{metadata.description}</p>
              </header>
              <TestWarningAlert />
              {children}
            </main>
          </div>
        </Providers>
      </body>
    </html>
  )
}
