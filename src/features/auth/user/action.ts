"use server";

import { createClient } from "@/lib/supabase/server";
import { User } from "@/generated/prisma/client";
import prisma from "@/lib/prisma";

export async function getOrCreateUser(): Promise<User> {
  const supabase = await createClient();

  const {
    data: { user: authUser },
  } = await supabase.auth.getUser();

  let targetUser = authUser;

  if (!targetUser) {
    const { data: signInData, error: signInError } =
      await supabase.auth.signInAnonymously();
    if (signInError || !signInData.user) {
      throw new Error("匿名ユーザーの作成に失敗しました。");
    }
    targetUser = signInData.user;
  }

  return await prisma.user.upsert({
    where: { id: targetUser.id },
    update: {},
    create: { id: targetUser.id },
  });
}

export async function getCurrentUser(): Promise<User | null> {
  const supabase = await createClient();
  const {
    data: { user: authUser },
  } = await supabase.auth.getUser();

  if (!authUser) return null;

  return await prisma.user.findUnique({
    where: { id: authUser.id },
  });
}
