import { NextResponse } from 'next/server';
import { NextRequest } from 'next/server';

export function middleware(request: NextRequest) {
    const path = request.nextUrl.pathname;

    const isPublicPath = path === '/login' || path === '/signup';

    const token = request.cookies.get("token")?.value || '';

    if (isPublicPath && token) {
        return NextResponse.redirect(new URL("/", request.nextUrl));
    }

    if (!isPublicPath && !token) {
        return NextResponse.redirect(new URL("/login", request.nextUrl)); // Corrected URL syntax
    }

    // If neither of the conditions is met, return undefined to allow the request to proceed
    return undefined;
}

export const config = {
    matcher: [
        "/",
        '/profile',
        '/login',
        '/signup'
    ]
};
