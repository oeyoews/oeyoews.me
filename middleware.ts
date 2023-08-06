import { NextRequest, NextResponse } from 'next/server';
import createIntlMiddleware from 'next-intl/middleware';

export default function middleware(request: NextRequest) {

  const defaultLocale = request.headers.get('x-default-locale') || 'en';
  const handleI18nRouting = createIntlMiddleware({
    locales: ['en', 'zh'],
    defaultLocale: 'zh'
  });

  const response = handleI18nRouting(request);
  response.headers.set('x-default-locale', defaultLocale);

  const requestHeaders = new Headers(request.headers);
  // if (request.nextUrl.pathname.startsWith('/articles/'))
  if (request.url.includes('/articles/')) {
    // 传递slug, layout, 不能传递params, 也不能使用use client (usepathname)
    requestHeaders.set(
      'x-next-article-slug',
      request.nextUrl.pathname.replace('/articles/', ''),
    );

    return NextResponse.next({
      request: {
        headers: requestHeaders,
      },
    }), response;
  } // muse have a local for layout, 否则会404
  return response
}

export const config = {
  // Skip all paths that should not be internationalized. This example skips the
  // folders "api", "_next" and all files with an extension (e.g. favicon.ico)
  matcher: [
    // '/articles/:path*']
    '/((?!api|_next|.*\\..*).*)']
}