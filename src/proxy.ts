import { NextResponse, type NextRequest } from "next/server";
import { headers } from "next/headers";
import { auth } from "@/lib/auth";

import { db } from "@/index";
import { staffs, admins, type AdminRole } from "@/lib/db/schema";
import { and, desc, eq, inArray, sql } from "drizzle-orm";

export async function proxy(request: NextRequest) {
  const adminAuthPaths = ["/admin/signin", "/admin/signup"];
  const staffAuthPaths = ["/staff/signin", "/staff/signup"];
  const url = new URL(request.url);

  const session = await auth.api.getSession({
    headers: await headers(),
  });

  if (
    url.pathname.startsWith("/admin") &&
    !adminAuthPaths.includes(url.pathname)
  ) {
    if (!session?.user) {
      return NextResponse.redirect(new URL("/admin/signin", request.url));
    }
    const admin = await db
      .select()
      .from(admins)
      .where(eq(admins.userId, session.user.id))
      .limit(1);

    if (admin.length === 0) {
      return NextResponse.redirect(new URL("/admin/signin", request.url));
    }

    return NextResponse.next();
  }

  if (
    url.pathname.startsWith("/staff") &&
    !staffAuthPaths.includes(url.pathname)
  ) {
    if (!session?.user) {
      return NextResponse.redirect(new URL("/", request.url));
    }

    const staff = await db
      .select()
      .from(staffs)
      .where(eq(staffs.userId, session.user.id))
      .limit(1);

    if (staff.length === 0) {
      return NextResponse.redirect(new URL("/staff/signin", request.url));
    }

    return NextResponse.next();
  }
  return NextResponse.next();
}

export const config = {
  matcher: ["/staff/:path*", "/admin/:path*"],
};
