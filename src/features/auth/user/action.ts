"use server";

import { auth } from "@/lib/auth";
import { User } from "@/generated/prisma/client";
import prisma from "@/lib/prisma";
import { headers } from "next/headers";

export async function getCurrentUser(): Promise<User | null> {
  try {
    const session = await auth.api.getSession({
      headers: await headers(),
    });

    if (!session || !session.user) {
      return null;
    }

    return await prisma.user.findUnique({
      where: { id: session.user.id },
    });
  } catch (error) {
    console.error("Error getting current user:", error);
    return null;
  }
}
