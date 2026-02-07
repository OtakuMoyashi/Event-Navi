/* eslint-disable @typescript-eslint/no-explicit-any */
"use server";

import prisma from "@/lib/prisma";
import { auth } from "@/lib/auth";
import { passwordSchema } from "@/lib/schema/auth";
import z from "zod";
import { redirect } from "next/navigation";
import { AdminRole } from "@/generated/prisma/enums";

const SignUpSchema = z.object({
  email: z.email(),
  password: passwordSchema,
  inviteCode: z.string(),
});

export async function signUpAdmin(prevState: any, formData: FormData) {
  const validationResult = SignUpSchema.safeParse({
    email: formData.get("email"),
    password: formData.get("password"),
    inviteCode: formData.get("inviteCode"),
  });

  if (!validationResult.success) {
    return {
      success: false,
      message: "入力形式が正しくありません",
    };
  }

  if (validationResult.data.inviteCode !== process.env.INVITE_CODE) {
    return {
      success: false,
      message: "招待コードが間違っています",
    };
  }

  const { email, password } = validationResult.data;
  const role = formData.get("role") as AdminRole;

  try {
    // Better-authでユーザーを作成
    const user = await auth.api.signUpEmail({
      body: {
        email,
        password,
        name: email.split("@")[0],
      },
      asResponse: true,
    });

    if (!user || !("userId" in user) || typeof user.userId !== "string") {
      return {
        success: false,
        message: "ユーザー作成に失敗しました",
      };
    }

    const userId: string = user.userId;

    // Adminレコードを作成
    await prisma.admin.create({
      data: {
        userId,
        email,
        role,
      },
    });

    return {
      success: true,
      message: "管理者アカウントが作成されました",
    };
  } catch (error) {
    console.error("[signUpAdmin] error:", error);
    return {
      success: false,
      message: "サーバーエラーが発生しました",
      errorCode: "サーバーエラー", // 非公開のエラーコードやフラグのみ返す
    };
  }
}

const SignInSchema = z.object({
  email: z.email(),
  password: passwordSchema,
});

export async function signInAdmin(prevState: any, formData: FormData) {
  const validationResult = SignInSchema.safeParse({
    email: formData.get("email"),
    password: formData.get("password"),
  });

  if (!validationResult.success) {
    return {
      success: false,
      message: "入力形式が正しくありません",
    };
  }

  const { email, password } = validationResult.data;

  try {
    // Better-authでサインイン
    const response = await auth.api.signInEmail({
      body: {
        email,
        password,
      },
      asResponse: true,
    });

    if (!response || !("userId" in response)) {
      return {
        success: false,
        message: "メールアドレスまたはパスワードが正しくありません",
      };
    }

    const userId = response.userId;
    if (typeof userId !== "string" || !userId) {
      // userIdが不正な場合は早期リターン
      return {
        success: false,
        message: "認証情報の取得に失敗しました",
        errorCode: "INVALID_USER_ID",
      };
    }

    // Admin権限確認
    const admin = await prisma.admin.findUnique({
      where: { userId },
    });

    if (!admin) {
      // サインアウト処理
      return {
        success: false,
        message: "管理者権限が見つかりません",
      };
    }

    // セッション情報をクッキーに設定（better-authが自動処理）
    redirect("/admin/system");
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
