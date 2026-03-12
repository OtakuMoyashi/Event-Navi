import { NextResponse, type NextRequest } from "next/server";

//TODO authzを置き換え
async function hasAccess(request: NextRequest, role: "admin" | "staff") {
  const url = new URL("/api/authz", request.url);
  url.searchParams.set("role", role);

  const response = await fetch(url, {
    method: "GET",
    headers: {
      cookie: request.headers.get("cookie") ?? "",
    },
    cache: "no-store",
  });

  return response.ok;
}

export async function middleware(request: NextRequest) {
  const adminAuthPaths = ["/admin/signin", "/admin/signup"];
  const staffAuthPaths = ["/staff/signin", "/staff/signup"];
  const url = new URL(request.url);

  if (
    url.pathname.startsWith("/admin") &&
    !adminAuthPaths.includes(url.pathname)
  ) {
    const ok = await hasAccess(request, "admin");
    if (!ok) {
      return NextResponse.redirect(new URL("/admin/signin", request.url));
    }
    return NextResponse.next();
  }

  if (
    url.pathname.startsWith("/super-admin") &&
    !adminAuthPaths.includes(url.pathname)
  ) {
    const ok = await hasAccess(request, "admin");
    if (!ok) {
      return NextResponse.redirect(new URL("/admin/signin", request.url));
    }
    return NextResponse.next();
  }

  if (
    url.pathname.startsWith("/staff") &&
    !staffAuthPaths.includes(url.pathname)
  ) {
    const ok = await hasAccess(request, "staff");
    if (!ok) {
      return NextResponse.redirect(new URL("/staff/signin", request.url));
    }
    return NextResponse.next();
  }
  return NextResponse.next();
}

export const config = {
  matcher: ["/super-admin/:path*", "/staff/:path*", "/admin/:path*"],
};
