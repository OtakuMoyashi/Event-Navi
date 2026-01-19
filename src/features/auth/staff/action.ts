"use server";

import prisma from "@/lib/prisma";
import { createClient } from "@/lib/supabase/server";
import { redirect } from "next/navigation";

export async function createStaff(formData: FormData) {
  const supabase = await createClient();
  const domain = formData.get("domain") as string;
  const loginId = formData.get("loginId") as string;
  const password = formData.get("password") as string;
  const storeId = formData.get("storeId") as string;

  const email: string = loginId + "@" + domain;
  const { data: authData, error: authError } = await supabase.auth.signUp({
    email: email,
    password: password,
  });

  if (authError) throw authError;
  if (authData.user) {
    await prisma.staff.create({
      data: {
        supabaseUserId: authData.user.id,
        email: email,
        storeId: storeId,
      },
    });
  }
  redirect("/");
}
