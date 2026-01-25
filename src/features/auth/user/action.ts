"use server";

import "server-only";
import { cookies } from "next/headers";
import { User } from "@/generated/prisma/client";
import prisma from "@/lib/prisma";

export async function createUser() {
  const cookieStore = await cookies();
  const userCuid = cookieStore.get("user_cuid")?.value;

  if (!userCuid) {
    return {
      success: false,
      message: "cokkieにuser_cuidが保存されていません。",
    };
  }

  try {
    await prisma.user.upsert({
      where: { id: userCuid },
      update: {},
      create: { id: userCuid },
    });

    return {
      success: true,
      message: "操作が完了しました。",
    };
  } catch (error) {
    console.log(error);
    return {
      success: false,
      message: "サーバーエラーが発生しました。",
    };
  }
}

export async function getCurrentUser(): Promise<User> {
  const cookieStore = await cookies();
  const userCuid = cookieStore.get("user_cuid")?.value;

  if (!userCuid) {
    throw new Error("cokkieにuser_cuidが存在しません。");
  }

  try {
    const fetchedUser: User | null = await prisma.user.findUnique({
      where: {
        id: userCuid,
      },
    });

    if (!fetchedUser) {
      throw new Error("対応するユーザーが存在しません。");
    }

    return fetchedUser;
  } catch (error) {
    throw error;
  }
}
