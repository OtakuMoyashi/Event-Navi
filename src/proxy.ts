import { createServerClient } from "@supabase/ssr";
import { NextResponse, type NextRequest } from "next/server";
import { createId } from "@paralleldrive/cuid2";
import prisma from "./lib/prisma";

export async function proxy(request: NextRequest) {
  let response = NextResponse.next({
    request: {
      headers: request.headers,
    },
  });

  const USER_ID_COOKIE = "guest_user_id";
  const guestUserId = request.cookies.get(USER_ID_COOKIE)?.value;

  if (!guestUserId) {
    response.cookies.set(USER_ID_COOKIE, createId(), {
      path: "/",
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      maxAge: 60 * 60 * 24 * 400,
      sameSite: "lax",
    });
  }

  const supabase = createServerClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
    {
      cookies: {
        getAll() {
          return request.cookies.getAll();
        },
        setAll(cookiesToSet) {
          cookiesToSet.forEach(({ name, value }) =>
            request.cookies.set(name, value),
          );
          response = NextResponse.next({
            request,
          });
          cookiesToSet.forEach(({ name, value, options }) =>
            response.cookies.set(name, value, options),
          );
        },
      },
    },
  );

  const {
    data: { user: authUser },
  } = await supabase.auth.getUser();
  const url = new URL(request.url);

  if (url.pathname.startsWith("/admin") && !authUser) {
    return NextResponse.redirect(new URL("/login", request.url));
  }

  if (url.pathname.startsWith("/admin/system/")) {
    if (!authUser) {
      return NextResponse.redirect(new URL("/login", request.url));
    }

    const role = authUser.user_metadata?.role;

    if (role !== "SYSTEM_ADMIN") {
      return NextResponse.redirect(new URL("/login", request.url));
    }
    return response;
  }

  if (url.pathname.startsWith("/admin/store/")) {
    if (!authUser) {
      return NextResponse.redirect(new URL("/login", request.url));
    }

    const role = authUser.user_metadata?.role;

    if (role === "SYSTEM_ADMIN") {
      return response;
    }

    const urlStoreId = url.pathname.split("/")[2];

    if (role === "STORE_STAFF" || role === "STORE_ADMIN") {
      const staffRecord = await prisma.staff.findUnique({
        where: { supabaseUserId: authUser.id },
        select: { storeId: true },
      });

      if (!staffRecord || staffRecord.storeId !== urlStoreId) {
        return NextResponse.redirect(new URL("/", request.url));
      }
    }
  }

  return response;
}

export const config = {
  matcher: [
    "/((?!_next/static|_next/image|favicon.ico|.*\\.(?:svg|png|jpg|jpeg|gif|webp)$).*)",
  ],
};
