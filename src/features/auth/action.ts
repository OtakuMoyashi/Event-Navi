"use server";

import { auth } from "@/lib/auth";
import { revalidatePath } from "next/cache";
import prisma from "@/lib/prisma";

export async function signOut() {
  try {
    await auth.api.signOut();
    revalidatePath("/");
  } catch (error) {
    console.log("サーバーエラー");
  }
}

export async function postSignInByIntent(intent: string | null) {
  const session = await auth.api.getSession();
  if (!session?.user) {
    return { ok: false, message: "セッションがありません" };
  }

  const userId = session.user.id;
  const email = session.user.email ?? "";

  if (intent === "staff") {
    await prisma.staff.upsert({
      where: { userId },
      update: { email },
      create: {
        userId,
        email,
        storeId: "YOUR_DEFAULT_STORE_ID",
      },
    });
    return { success: true, redirectTo: "/staff" };
  }

  if (intent === "admin") {
    await prisma.admin.upsert({
      where: { userId },
      update: { email },
      create: {
        userId,
        email,
        role: "STORE_ADMIN",
      },
    });
    return { success: true, redirectTo: "/admin" };
  }

  return { success: false, message: "intent が不正です" };
}
