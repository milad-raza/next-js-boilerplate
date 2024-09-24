import { NextResponse } from "next/server";

export function middleware(request) {
  const { pathname } = request.nextUrl;
  const token = request.cookies.get("access-token");

  const publicPaths = ["/", "/home"];
  const authPaths = ["/login", "/sign-up"];

  if (
    pathname.startsWith("/_next") ||
    pathname.startsWith("/api") ||
    pathname.startsWith("/favicon") ||
    pathname.startsWith("/assets")
  ) {
    return NextResponse.next();
  }

  if (!token) {
    if (![...publicPaths, ...authPaths].includes(pathname)) {
      return NextResponse.redirect(new URL("/login", request.url));
    }
  }

  if (token && authPaths.includes(pathname)) {
    return NextResponse.redirect(new URL("/dashboard", request.url));
  }

  return NextResponse.next();
}
