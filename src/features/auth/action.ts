"use server";

import { auth } from "@/lib/auth";
import { revalidatePath } from "next/cache";

export async function signOut() {
  try {
    await auth.api.signOut();
    revalidatePath("/");
  } catch (error) {
    console.log("サーバーエラー");
  }
}
