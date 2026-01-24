"use server";

import prisma from "@/lib/prisma";
import { createClient } from "@/lib/supabase/server";
import { redirect } from "next/navigation";
import { StaffInputSchema } from "../../../../prisma/generated/schemas";
import { passwordSchema } from "@/lib/schema/auth";

const CreateStaffSchema = StaffInputSchema.omit({
  supabaseUserId: true,
});

const ResigterChema = CreateStaffSchema.extend({
  password: passwordSchema,
});

export async function createStaff(formData: FormData) {
  const supabase = await createClient();

  const domain = formData.get("domain") as string;
  const loginId = formData.get("loginId") as string;
  const validationResult = ResigterChema.safeParse({
    email: domain + "@" + loginId,
    storeId: formData.get("storeId"),
    password: formData.get("password"),
  });

  if (!validationResult.success) {
    return {
      error: validationResult.error,
      message: "入力形式が正しくありません",
    };
  }

  const { email, password, storeId } = validationResult.data;

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
