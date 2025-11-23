import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(request: NextRequest) {
    // Only protect /letsee routes
    if (request.nextUrl.pathname.startsWith('/letsee')) {
        // Allow access to login page
        if (request.nextUrl.pathname === '/letsee/login') {
            return NextResponse.next();
        }

        // Check for session cookie
        const session = request.cookies.get('admin_session');

        if (!session) {
            return NextResponse.redirect(new URL('/letsee/login', request.url));
        }
    }

    return NextResponse.next();
}

export const config = {
    matcher: '/letsee/:path*',
};
