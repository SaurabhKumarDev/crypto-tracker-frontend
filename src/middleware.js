import { NextResponse } from 'next/server'
import { jwtVerify } from 'jose'

const AUTH_ROUTES = ['/login', '/register']
const PROTECTED_ROUTES = ['/']

const isRouteMatch = (pathname, routeList) =>
  routeList.some(route => pathname === route || pathname.startsWith(route + '/'))

export async function middleware(req) {
  const { pathname } = req.nextUrl
  console.log('🛣️ Pathname:', pathname)

  const token = req.cookies.get('token')?.value
  console.log('🍪 Token from cookies:', token ? '[FOUND]' : '[NOT FOUND]')

  let user = null

  if (token && process.env.JWT_SECRET) {
    try {
      const secret = new TextEncoder().encode(process.env.JWT_SECRET)
      const { payload } = await jwtVerify(token, secret)
      user = payload
      console.log('✅ JWT Verified:', payload)
    } catch (err) {
      console.error('❌ Invalid token:', err.message)
    }
  }

  // 🚫 Redirect unauthenticated users trying to access protected routes
  if (isRouteMatch(pathname, PROTECTED_ROUTES) && !user) {
    console.log('🔒 Unauthenticated access to protected route. Redirecting to /login')
    return NextResponse.redirect(new URL('/login', req.url))
  }

  // ✅ Redirect authenticated users accessing login/register pages
  if (isRouteMatch(pathname, AUTH_ROUTES) && user) {
    console.log('🔄 Authenticated user accessing auth route. Redirecting to /')
    return NextResponse.redirect(new URL('/', req.url))
  }

  console.log('✅ Allowing access to route.')
  return NextResponse.next()
}

export const config = {
  matcher: ['/', '/login', '/register'],
}
