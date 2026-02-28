/* eslint-disable @typescript-eslint/no-explicit-any */
"use server";

import prisma from "@/lib/prisma";
import { auth } from "@/lib/auth";
import z from "zod";
import { passwordSchema } from "@/lib/schema/auth";

const SignUpSchema = z.object({
  loginId: z.string(),
  password: passwordSchema,
});

export async function createStaff(prevState: any, formData: FormData) {
  const validationResult = SignUpSchema.safeParse({
    loginId: formData.get("loginId"),
    password: formData.get("password"),
  });

  if (!validationResult.success) {
    return {
      success: false,
      message: "入力形式が正しくありません",
    };
  }

  const { loginId, password } = validationResult.data;
  const email = `${loginId}@example.com`;
  const storeId = formData.get("storeId") as string;

  try {
    const data = await auth.api.signUpEmail({
      body: {
        email,
        password,
        name: loginId,
      },
    });

    const userId = data.user.id;

    await prisma.staff.create({
      data: {
        userId,
        email,
        storeId,
      },
    });

    return {
      success: true,
      message: "スタッフアカウントが作成されました",
    };
  } catch (error) {
    console.log(error);
    return {
      success: false,
      message: "サーバーエラーが発生しました",
      error: error instanceof Error ? error.message : String(error),
    };
  }
}

const SignInSchema = z.object({
  loginId: z.string(),
  password: passwordSchema,
});

export async function signInStaff(prevState: any, formData: FormData) {
  const validationResult = SignInSchema.safeParse({
    loginId: formData.get("loginId"),
    password: formData.get("password"),
  });

  if (!validationResult.success) {
    return {
      success: false,
      message: "入力形式が正しくありません",
    };
  }

  const { loginId, password } = validationResult.data;
  const email = `${loginId}@example.com`;

  try {
    // Better-authでサインイン
    const response = await auth.api.signInEmail({
      body: {
        email,
        password,
      },
      asResponse: true,
    });

    const data = await response.json();

    // レスポンスのOK判定
    if (!response.ok || !data || !data.user || !data.user.id) {
      return {
        success: false,
        message: "ユーザー作成に失敗しました",
      };
    }

    const userId: string = data.user.id;
    const staff = await prisma.staff.findUnique({
      where: { userId },
    });

    if (!staff) {
      return {
        success: false,
        message: "管理者権限が見つかりません",
      };
    }
    return {
      success: true,
      message: "操作が完了しました。",
    };
  } catch (error) {
    // Log the full error for server-side debugging
    console.error("[signInAdmin] error:", error);
    return {
      success: false,
      message: "サーバーエラーが発生しました",
      errorCode: "INTERNAL_ERROR", // 非公開のエラーコードやフラグのみ返す
    };
  }
}
