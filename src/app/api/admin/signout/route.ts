import { NextResponse, NextRequest } from "next/server";
import { auth } from "@/lib/auth";

export async function GET(request: NextRequest) {
  await auth.api.signOut({ headers: request.headers });
  return NextResponse.redirect("/admin/signin");
}
