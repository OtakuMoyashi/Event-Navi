"use server";

import "server-only";
import { cookies } from "next/headers";
import { User } from "@/generated/prisma/client";
import prisma from "@/lib/prisma";

export async function createUser(): Promise<User | null> {
  const cookieStore = await cookies();
  const userCuid = cookieStore.get("user_cuid")?.value;

  if (!userCuid) return null;

  const createdUser: User = await prisma.user.upsert({
    where: { id: userCuid },
    update: {},
    create: { id: userCuid },
  });

  return createdUser;
}

export async function getCurrentUser(): Promise<User | null> {
  const cookieStore = await cookies();
  const userCuid = cookieStore.get("user_cuid")?.value;

  if (!userCuid) return null;

  const fetchedUser: User | null = await prisma.user.findUnique({
    where: {
      id: userCuid,
    },
  });

  return fetchedUser;
}
