"use server";

import { auth } from "@/lib/auth";
import { revalidatePath } from "next/cache";
import { db } from "@/index";
import { admins, staffs } from "@/lib/db/schema";

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
  //TODO storeIdを引数で受け取る
  if (intent === "staff") {
    await db
      .insert(staffs)
      .values({
        userId,
        email,
        storeId: "YOUR_DEFAULT_STORE_ID",
      })
      .onConflictDoUpdate({
        target: staffs.userId,
        set: { email },
      });
    return { ok: true, redirectTo: "/staff" };
  }

  if (intent === "admin") {
    await db
      .insert(admins)
      .values({
        userId,
        email,
        role: "STORE_ADMIN",
      })
      .onConflictDoUpdate({
        target: admins.userId,
        set: { email },
      });
    return { ok: true, redirectTo: "/admin" };
  }

  return { ok: false, message: "intent が不正です" };
}
