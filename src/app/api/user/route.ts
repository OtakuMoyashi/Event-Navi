import { NextRequest, NextResponse } from "next/server";
import { auth } from "@/lib/auth";
import { db } from "@/index";
import { users } from "@/lib/db/schema";
import { eq } from "drizzle-orm";

export async function GET(request: NextRequest) {
  console.log("GET /api/user called");
  const session = await auth.api.getSession({ headers: request.headers });

  if (!session?.user) {
    console.log("No user in session");
    return NextResponse.json({ user: null }, { status: 401 });
  }

  try {
    const userRows = await db
      .select()
      .from(users)
      .where(eq(users.id, session.user.id))
      .limit(1);
    const user = userRows[0];
    if (!user) {
      return NextResponse.json({ user: null }, { status: 404 });
    }
    return NextResponse.json({ user }, { status: 200 });
  } catch (error) {
    console.error("DB error:", error);
    return NextResponse.json({ user: null }, { status: 500 });
  }
}
