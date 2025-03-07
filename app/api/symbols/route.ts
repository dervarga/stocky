import { getSymbolsByKeyword } from '@/actions/stocks'
import { NextRequest, NextResponse } from 'next/server'

export const GET = async (request: NextRequest) => {
  const { searchParams } = new URL(request.url)
  const searchTerm = searchParams.get('searchTerm')

  if (!searchTerm) {
    return NextResponse.json(
      { message: 'No search term provided' },
      { status: 400 }
    )
  }

  const matches = await getSymbolsByKeyword(searchTerm)

  return NextResponse.json(matches)
}
