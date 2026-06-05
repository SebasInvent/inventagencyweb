import createMiddleware from 'next-intl/middleware'
import { routing } from './src/i18n/routing'

export default createMiddleware(routing)

export const config = {
  // Match all paths except: API routes, Next internals, static files, and
  // `/camilo` (one-pager ejecutivo standalone que define su propio shell y
  // no debe pasar por el redirect de i18n a /[locale]).
  matcher: ['/((?!api|_next|_vercel|camilo|.*\\..*).*)'],
}
