import { NextRequest, NextResponse } from 'next/server';
import { getToken } from 'next-auth/jwt';

export async function middleware(request: NextRequest) {
  const pathname = request.nextUrl.pathname;

  // Only protect /admin routes
  if (pathname.startsWith('/admin')) {
    const token = await getToken({ req: request });

    // Redirect /admin to /admin/dashboard or /admin/login
    if (pathname === '/admin') {
      if (token && (token.role === 'admin' || token.role === 'super_admin')) {
        return NextResponse.redirect(new URL('/admin/dashboard', request.url));
      } else {
        return NextResponse.redirect(new URL('/admin/login', request.url));
      }
    }

    // Allow login page without authentication
    if (pathname === '/admin/login') {
      if (token) {
        // Redirect to dashboard if already logged in
        return NextResponse.redirect(new URL('/admin/dashboard', request.url));
      }
      return NextResponse.next();
    }

    // Require authentication for other admin routes
    if (!token) {
      return NextResponse.redirect(new URL('/admin/login', request.url));
    }

    // Check if user is admin
    if (token.role !== 'admin' && token.role !== 'super_admin') {
      return NextResponse.redirect(new URL('/admin/login', request.url));
    }
  }

  return NextResponse.next();
}

export const config = {
  matcher: ['/admin/:path*'],
};
