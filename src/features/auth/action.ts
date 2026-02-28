"use server";

import { auth } from "@/lib/auth";

export async function signOut() {
  try {
    await auth.api.signOut();
  } catch (error) {
    console.log("サーバーエラー");
  }
}
