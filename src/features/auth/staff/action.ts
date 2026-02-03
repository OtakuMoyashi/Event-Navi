/* eslint-disable @typescript-eslint/no-explicit-any */
"use server";

import prisma from "@/lib/prisma";
import { createClient } from "@/lib/supabase/server";
import z from "zod";
import { passwordSchema } from "@/lib/schema/auth";

const ResigterChema = z.object({
  domain: z.string(),
  loginId: z.string(),
  password: passwordSchema,
});

export async function createStaff(prevState: any, formData: FormData) {
  const supabase = await createClient();

  const validationResult = ResigterChema.safeParse({
    domain: formData.get("domain"),
    loginId: formData.get("loginId"),
    password: formData.get("password"),
  });

  if (!validationResult.success) {
    console.log(validationResult.error);
    return {
      success: false,
      message: "入力形式が正しくありません。",
      error: "入力形式が正しくありません", //仮実装
    };
  }

  const { domain, loginId, password } = validationResult.data;
  const email = domain + "@" + loginId;
  const storeId = formData.get("storeId") as string;

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
      message: "サーバーエラーが発生しました",
      error: error instanceof Error ? error.message : String(error),
    };
  }
}
