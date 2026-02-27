import { NextResponse, NextRequest } from "next/server";
import { auth } from "@/lib/auth";

//TODO リダイレクト先を可変にする
export async function GET(request: NextRequest) {
  await auth.api.signOut({ headers: request.headers });
  const baseUrl = request.nextUrl.origin;
  return NextResponse.redirect(baseUrl + "/");
}
