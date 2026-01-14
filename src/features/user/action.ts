"use server";

import "server-only";
import { cookies } from "next/headers";
import { User } from "@/generated/prisma/client";
import prisma from "@/lib/prisma";

export async function createUser(): Promise<User | null> {
  const cookieStore = await cookies();
  const userUuid = cookieStore.get("user_uuid")?.value;

  if (!userUuid) return null; //エラーにすべきか？

  const createdUser: User = await prisma.user.upsert({
    where: { uuid: userUuid },
    update: {},
    create: { uuid: userUuid },
  });

  return createdUser;
}

export async function getCurrentUser(): Promise<User | null> {
  const cookieStore = await cookies();
  const userUuid = cookieStore.get("user_uuid")?.value;

  if (!userUuid) return null; //エラーにすべきか？

  const fetchedUser: User | null = await prisma.user.findUnique({
    where: {
      uuid: userUuid,
    },
  });

  return fetchedUser;
}
