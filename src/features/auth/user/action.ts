"use server";

import { createClient } from "@/lib/supabase/server";
import { User } from "@/generated/prisma/client";
import prisma from "@/lib/prisma";

export async function getCurrentUser(): Promise<User | null> {
  const supabase = await createClient();
  const {
    data: { user: authUser },
  } = await supabase.auth.getUser();

  if (!authUser) {
    return null;
  }

  return await prisma.user.upsert({
    where: { id: authUser.id },
    update: {},
    create: { id: authUser.id },
  });
}
