/* eslint-disable @typescript-eslint/no-explicit-any */
"use server";

import prisma from "@/lib/prisma";
import { createClient } from "@/lib/supabase/server";
import { StaffInputSchema } from "../../../../prisma/generated/schemas";
import { passwordSchema } from "@/lib/schema/auth";

const CreateStaffSchema = StaffInputSchema.omit({
  id: true,
  supabaseUserId: true,
  createdAt: true,
  updatedAt: true,
});

const ResigterChema = CreateStaffSchema.extend({
  password: passwordSchema,
});

export async function createStaff(prevState: any, formData: FormData) {
  const supabase = await createClient();

  const domain = formData.get("domain") as string;
  const loginId = formData.get("loginId") as string;
  const validationResult = ResigterChema.safeParse({
    email: domain + "@" + loginId,
    storeId: formData.get("storeId"),
    password: formData.get("password"),
  });

  if (!validationResult.success) {
    console.log(validationResult.error);
    return {
      success: false,
      message: "入力形式が正しくありません。",
      error: validationResult.error,
    };
  }

  const { email, password, storeId } = validationResult.data;

  try {
    const { data: authData, error: authError } = await supabase.auth.signUp({
      email: email,
      password: password,
      options: {
        data: {
          role: "STORE_STAFF",
        },
      },
    });
    if (authError) {
      console.log(authError);
      return {
        success: false,
        message: "Supabase Authにユーザーが存在しません。",
      };
    }
    if (authData.user) {
      await prisma.staff.create({
        data: {
          supabaseUserId: authData.user.id,
          email: email,
          storeId: storeId,
        },
      });
    }
  } catch (error) {
    console.log(error);
    return {
      success: false,
      message: "サーバーエラーが発生しました。",
    };
  }
}
