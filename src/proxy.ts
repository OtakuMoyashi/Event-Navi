import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { createId } from "@paralleldrive/cuid2";

export function proxy(request: NextRequest) {
  const user_cuid = request.cookies.get("user_cuid");

  if (!user_cuid) {
    const userCuid = createId();
    const response = NextResponse.next();
    response.cookies.set("user_cuid", userCuid, {
      path: "/",
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      maxAge: 60 * 60 * 24 * 400, // 13ヶ月
    });

    return response;
  }

  return NextResponse.next();
}
export const config = {
  matcher: ["/((?!api|_next/static|_next/image|favicon.ico).*)"],
};
