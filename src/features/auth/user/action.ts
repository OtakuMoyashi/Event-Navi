"use server";

import "server-only";
import { cookies } from "next/headers";
import { User } from "@/generated/prisma/client";
import prisma from "@/lib/prisma";

export async function createUser(userCuid: string): Promise<User> {
  return await prisma.user.upsert({
    where: { id: userCuid },
    update: {},
    create: { id: userCuid },
  });
}

export async function getCurrentUser(): Promise<User> {
  const cookieStore = await cookies();
  const userCuid = cookieStore.get("guest_user_id")?.value;

  if (!userCuid) {
    throw new Error("cookieにguest_user_idが存在しません。");
  }

  let user = await prisma.user.findUnique({
    where: { id: userCuid },
  });

  if (!user) {
    user = await createUser(userCuid);
  }

  return user;
}
