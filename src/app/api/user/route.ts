import { NextRequest, NextResponse } from "next/server";
import { auth } from "@/lib/auth";
import prisma from "@/lib/prisma";

export async function GET(request: NextRequest) {
  console.log("GET /api/user called");
  const session = await auth.api.getSession({ headers: request.headers });
  console.log("session:", session);

  if (!session?.user) {
    console.log("No user in session");
    return NextResponse.json({ user: null }, { status: 401 });
  }

  try {
    const user = await prisma.user.findUnique({
      where: { id: session.user.id },
    });
    console.log("user found:", user);
    return NextResponse.json({ user }, { status: 200 });
  } catch (error) {
    console.error("Prisma error:", error);
    return NextResponse.json({ user: null }, { status: 500 });
  }
}
