import { NextRequest } from "next/server";
import { auth } from "@/lib/auth";
import prisma from "@/lib/prisma";

export async function POST(request: NextRequest) {
  console.log("user/create API called"); // ← 追加

  const session = await auth.api.getSession({ headers: request.headers });
  console.log("session:", session); // ← 追加

  if (!session?.user) {
    console.log("Unauthorized access"); // ← 追加
    return new Response(JSON.stringify({ error: "Unauthorized" }), {
      status: 401,
      headers: { "Content-Type": "application/json" },
    });
  }
  const user = await prisma.user.upsert({
    where: { id: session.user.id },
    create: {
      id: session.user.id,
    },
    update: {},
  });

  console.log("user upserted:", user); // ← 追加

  return new Response(JSON.stringify({ user }), {
    status: 200,
    headers: { "Content-Type": "application/json" },
  });
}
