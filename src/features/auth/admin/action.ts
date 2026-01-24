/* eslint-disable @typescript-eslint/no-explicit-any */
"use server";

import prisma from "@/lib/prisma";
import { createClient } from "@/lib/supabase/server";
import { AdminInputSchema } from "../../../../prisma/generated/schemas";
import { passwordSchema } from "@/lib/schema/auth";

const CreateAdminSchema = AdminInputSchema.omit({
  id: true,
  supabaseUserId: true,
  createdAt: true,
  updatedAt: true,
});

const ResigterChema = CreateAdminSchema.extend({
  password: passwordSchema,
});

export async function createAdmin(prevState: any, formData: FormData) {
  const supabase = await createClient();
  const validationResult = ResigterChema.safeParse({
    email: formData.get("email"),
    password: formData.get("password"),
    role: formData.get("role"),
  });

  if (!validationResult.success) {
    console.log(validationResult.error);
    return {
      error: validationResult.error,
      message: "入力形式が正しくありません",
    };
  }

  const { email, role, password } = validationResult.data;

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
        role: role,
      },
    });
  }
  return { success: true };
}
