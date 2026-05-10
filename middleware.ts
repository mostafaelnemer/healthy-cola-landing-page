// middleware.ts
import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

export function middleware(request: NextRequest) {
    const maintenanceMode =
        process.env.NEXT_PUBLIC_MAINTENANCE_MODE === 'true'

    // Allow static files and maintenance page
    if (
        request.nextUrl.pathname.startsWith('/_next') ||
        request.nextUrl.pathname === '/maintenance'
    ) {
        return NextResponse.next()
    }

    if (maintenanceMode) {
        return NextResponse.rewrite(
            new URL('/maintenance', request.url)
        )
    }

    return NextResponse.next()
}

export const config = {
    matcher: '/:path*',
}
