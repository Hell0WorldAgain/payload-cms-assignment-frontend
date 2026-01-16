import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;
  
  // Don't redirect if already has locale or is a special path
  if (
    pathname.startsWith('/es') ||
    pathname.startsWith('/_next') ||
    pathname.startsWith('/api') ||
    pathname.includes('.')
  ) {
    return NextResponse.next();
  }

  // Optional: Auto-detect locale from Accept-Language header
  const locale = request.headers.get('accept-language')?.split(',')[0].split('-')[0];
  
  // For now, we'll just let users manually switch languages
  return NextResponse.next();
}

export const config = {
  matcher: ['/((?!api|_next/static|_next/image|favicon.ico).*)'],
};