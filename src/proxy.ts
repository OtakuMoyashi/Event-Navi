import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'
import { v4 as uuidv4 } from 'uuid'

export function proxy(request: NextRequest) {
  const uuid = request.cookies.get('uuid')

  if (!uuid) {
    const newUuid = uuidv4()
    const response = NextResponse.next()
    response.cookies.set('uuid', newUuid, {
      path: '/',
      httpOnly: true,
      secure: process.env.NODE_ENV === 'production',
      maxAge: 60 * 60 * 24 * 400, // ~13 months
    })

    return response
  }

  return NextResponse.next()
}
export const config = {
  matcher: [
    '/((?!api|_next/static|_next/image|favicon.ico).*)',
  ],
}