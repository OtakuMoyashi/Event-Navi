"use server";

import prisma from "@/lib/prisma";
import { createClient } from "@/lib/supabase/server";
import { redirect } from "next/navigation";

export async function createAdmin(formData: FormData) {
  const supabase = await createClient();
  const email = formData.get("email") as string;
  const password = formData.get("password") as string;

  const { data: authData, error: authError } = await supabase.auth.signUp({
    email: email,
    password: password,
  });

  if (authError) throw authError;
  if (authData.user) {
    await prisma.admin.create({
      data: {
        supabaseUserId: authData.user.id,
        email: email,
        role: "EVENT_ADMIN",
      },
    });
  }
  redirect("/");
}
