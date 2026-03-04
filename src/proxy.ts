import { NextResponse, type NextRequest } from "next/server";
import { headers } from "next/headers";
import { auth } from "@/lib/auth";
import prisma from "@/lib/prisma";

export async function proxy(request: NextRequest) {
  const adminAuthPaths = ["/admin/signin", "/admin/signup"];
  const staffAuthPaths = ["/staff/signin", "/staff/signup"];
  const url = new URL(request.url);

  //TODO サインアウト後に毎回匿名ユーザーが作成されてしまうのを防ぐようにする
  const session = await auth.api.getSession({
    headers: await headers(),
  });

  if (
    url.pathname.startsWith("/admin") &&
    !adminAuthPaths.includes(url.pathname)
  ) {
    if (!session?.user) {
      return NextResponse.redirect(new URL("/", request.url)); //TODO 匿名ユーザー作成中のリダイレクト先を考える
    }
    const admin = await prisma.admin.findUnique({
      where: { userId: session.user.id },
    });

    if (!admin) {
      return NextResponse.redirect(new URL("/admin/signin", request.url));
    }

    return NextResponse.next();
  }

  if (
    url.pathname.startsWith("/staff") &&
    !staffAuthPaths.includes(url.pathname)
  ) {
    if (!session?.user) {
      return NextResponse.redirect(new URL("/", request.url)); //TODO 匿名ユーザー作成中のリダイレクト先を考える
    }

    const staff = await prisma.staff.findUnique({
      where: { userId: session.user.id },
    });

    if (!staff) {
      return NextResponse.redirect(new URL("/staff/signin", request.url));
    }

    return NextResponse.next();
  }
  return NextResponse.next();
}

export const config = {
  matcher: ["/staff/:path*", "/admin/:path*"],
};
