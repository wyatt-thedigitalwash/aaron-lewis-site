import { NextRequest, NextResponse } from "next/server";

export function middleware(request: NextRequest) {
  const password = process.env.STAGING_PASSWORD;

  // No password set — gate is inactive
  if (!password) return NextResponse.next();

  // Already authenticated
  if (request.cookies.get("staging_auth")?.value === password) {
    return NextResponse.next();
  }

  // Don't block the login page itself
  if (request.nextUrl.pathname === "/staging-login") {
    return NextResponse.next();
  }

  // Redirect to login
  return NextResponse.redirect(new URL("/staging-login", request.url));
}

export const config = {
  matcher: [
    "/((?!_next/static|_next/image|favicon|images|branding|singles|fonts|api).*)",
  ],
};
