import { createServerClient } from "@supabase/ssr";
import { NextResponse, type NextRequest } from "next/server";

//TODO インストールしていなければcokkieを発行しない（匿名ユーザーを作らせない）ように変更
export async function proxy(request: NextRequest) {
  let response = NextResponse.next({
    request: {
      headers: request.headers,
    },
  });

  const supabase = createServerClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY!,
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

  if (url.pathname.startsWith("/staff/store/")) {
    if (!authUser) {
      return NextResponse.redirect(new URL("/login", request.url));
    }

    const role = authUser.user_metadata?.role;

    if (role === "SYSTEM_ADMIN" || role === "STORE_STAFF") {
      return response;
    }
  }

  return response;
}

export const config = {
  matcher: [
    "/((?!_next/static|_next/image|favicon.ico|.*\\.(?:svg|png|jpg|jpeg|gif|webp)$).*)",
  ],
};
