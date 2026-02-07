import { NextRequest } from "next/server";
import { auth } from "@/lib/auth";
import prisma from "@/lib/prisma";

export async function GET(request: NextRequest) {
  console.log("GET /api/user called");
  const session = await auth.api.getSession({ headers: request.headers });
  console.log("session:", session);
  if (!session?.user) {
    console.log("No user in session");
    return new Response(JSON.stringify({ user: null }), {
      status: 401,
      headers: { "Content-Type": "application/json" },
    });
  }
  const user = await prisma.user.findUnique({ where: { id: session.user.id } });
  console.log("user found:", user);
  return new Response(JSON.stringify({ user }), {
    status: 200,
    headers: { "Content-Type": "application/json" },
  });
}
