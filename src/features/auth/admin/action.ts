/* eslint-disable @typescript-eslint/no-explicit-any */
"use server";

import prisma from "@/lib/prisma";
import { createClient } from "@/lib/supabase/server";
import { AdminInputSchema } from "../../../../prisma/generated/schemas";
import { passwordSchema } from "@/lib/schema/auth";
import z from "zod";
import { redirect } from "next/navigation";

const CreateAdminSchema = AdminInputSchema.omit({
  id: true,
  supabaseUserId: true,
  createdAt: true,
  updatedAt: true,
});

const ResigterChema = CreateAdminSchema.extend({
  password: passwordSchema,
  inviteCode: z.string(),
});

export async function signUpAdmin(prevState: any, formData: FormData) {
  const supabase = await createClient();
  const validationResult = ResigterChema.safeParse({
    email: formData.get("email"),
    password: formData.get("password"),
    role: formData.get("role"),
    inviteCode: formData.get("inviteCode"),
  });

  if (!validationResult.success) {
    console.log(validationResult.error);
    return {
      success: false,
      error: validationResult.error,
      message: "入力形式が正しくありません",
    };
  }

  if (validationResult.data.inviteCode != process.env.INVITE_CODE) {
    return {
      success: false,
      message: "招待コードが間違っています",
    };
  }

  const { email, role, password } = validationResult.data;

  const { data: authData, error: authError } = await supabase.auth.signUp({
    email: email,
    password: password,
  });

  if (authError) throw authError;
  if (authData.user) {
    try {
      await prisma.admin.create({
        data: {
          supabaseUserId: authData.user.id,
          email: email,
          role: role,
        },
      });
    } catch (error) {
      console.log(error);
      return {
        success: false,
        message: "サーバーエラーが発生しました。",
      };
    }
  }
  redirect("/login/admin");
}

const SignInAdminSchema = AdminInputSchema.omit({
  id: true,
  supabaseUserId: true,
  role: true,
  createdAt: true,
  updatedAt: true,
});

const SignInSchema = SignInAdminSchema.extend({
  password: passwordSchema,
});

export async function signInAdmin(prevState: any, formData: FormData) {
  const supabase = await createClient();
  const validationResult = SignInSchema.safeParse({
    email: formData.get("email"),
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

  const { email, password } = validationResult.data;

  try {
    const { data: authData, error: authError } =
      await supabase.auth.signInWithPassword({
        email,
        password,
      });

    if (authError) {
      return {
        success: false,
        message: "メールアドレスまたはパスワードが正しくありません",
        error: authError,
      };
    }

    if (authData.user) {
      const adminExists = await prisma.admin.findUnique({
        where: { supabaseUserId: authData.user.id },
      });

      if (!adminExists) {
        await supabase.auth.signOut();
        return {
          success: false,
          message: "管理者権限が見つかりません",
        };
      }
    }
  } catch (error) {
    console.log(error);
    return {
      success: false,
      message: "予期せぬエラーが発生しました",
      error: error,
    };
  }

  redirect("/admin");
}
