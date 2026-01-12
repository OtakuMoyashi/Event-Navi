"use server"
import { User } from "@/generated/prisma/client";
import prisma from "@/lib/prisma";

export async function createUser(uuid: string) {
  try {
    const user: User = await prisma.user.create({
      data: {
        uuid: uuid,
      }
    });
    return user;
  } catch(error) {
    throw error;
  }
}