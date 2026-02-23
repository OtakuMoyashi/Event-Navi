import { NextResponse, type NextRequest } from "next/server";
import { headers } from "next/headers";
import { auth } from "@/lib/auth";
import prisma from "@/lib/prisma";

export async function proxy(request: NextRequest) {
  const url = new URL(request.url);

  // 公式ドキュメントサンプル通り: headersを渡す
  const session = await auth.api.getSession({
    headers: await headers(),
  });

  // Admin パスの認可チェック
  if (url.pathname.startsWith("/admin")) {
    if (!session?.user) {
      return NextResponse.redirect(new URL("/", request.url));
    }

    // Admin権限を確認
    const admin = await prisma.admin.findUnique({
      where: { userId: session.user.id },
    });

    if (!admin) {
      return NextResponse.redirect(new URL("/login", request.url));
    }

    return NextResponse.next();
  }

  // Staff Store パスの認可チェック
  if (url.pathname.startsWith("/staff/store/")) {
    if (!session?.user) {
      return NextResponse.redirect(new URL("/", request.url));
    }

    // Staff権限を確認
    const staff = await prisma.staff.findUnique({
      where: { userId: session.user.id },
    });

    if (!staff) {
      return NextResponse.redirect(new URL("/", request.url));
    }

    return NextResponse.next();
  }
  return NextResponse.next();
}

export const config = {
  matcher: [
    "/((?!_next/static|_next/image|favicon.ico|.*\\.(?:svg|png|jpg|jpeg|gif|webp)$).*)",
  ],
};
