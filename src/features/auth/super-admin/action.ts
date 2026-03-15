/* eslint-disable @typescript-eslint/no-explicit-any */
"use server";

import { getDb } from "@/lib/db";
import { admins } from "@/lib/db/schema";
import { eq } from "drizzle-orm";
import { auth } from "@/lib/auth";
import { passwordSchema } from "@/lib/schema/auth";
import z from "zod";

const SignUpSchema = z.object({
  email: z.email(),
  password: passwordSchema,
});

const hasUserId = (data: unknown): data is { user: { id: string } } => {
  if (!data || typeof data !== "object") return false;

  const user = (data as { user?: unknown }).user;
  if (!user || typeof user !== "object") return false;

  const id = (user as { id?: unknown }).id;
  return typeof id === "string" && id.length > 0;
};

export async function signUpSuperAdmin(prevState: any, formData: FormData) {
  const validationResult = SignUpSchema.safeParse({
    email: formData.get("email"),
    password: formData.get("password"),
  });

  if (!validationResult.success) {
    return {
      success: false,
      message: null,
      error: "招待リンクが必要です。",
    };
  }

  const db = await getDb();

  const { email, password } = validationResult.data;

  try {
    const response = await auth.api.signUpEmail({
      body: {
        email,
        password,
        name: email.split("@")[0],
      },
      asResponse: true,
    });
    const data: unknown = await response.json();

    if (!response.ok || !hasUserId(data)) {
      return {
        success: false,
        message: "ユーザー作成に失敗しました",
      };
    }

    const userId: string = data.user.id;
    await db.insert(admins).values({
      userId: userId,
      email: email,
      role: "SUPER_ADMIN",
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
      errorCode: "サーバーエラー",
    };
  }
}

const SignInSchema = z.object({
  email: z.email(),
  password: passwordSchema,
});

export async function signInSuperAdmin(prevState: any, formData: FormData) {
  const validationResult = SignInSchema.safeParse({
    email: formData.get("email"),
    password: formData.get("password"),
  });

  if (!validationResult.success) {
    return {
      success: false,
    };
  }

  const { email, password } = validationResult.data;

  const db = await getDb();

  try {
    const response = await auth.api.signInEmail({
      body: {
        email,
        password,
      },
      asResponse: true,
    });

    const data: unknown = await response.json();

    if (!response.ok || !hasUserId(data)) {
      return {
        success: false,
        message: "ユーザー作成に失敗しました",
      };
    }

    const userId: string = data.user.id;
    const adminRows = await db
      .select()
      .from(admins)
      .where(eq(admins.userId, userId))
      .limit(1);
    const admin = adminRows[0];

    if (!admin) {
      return {
        success: false,
        message: "管理者権限が見つかりません",
      };
    }
    return {
      success: true,
      message: "ログイン成功",
    };
  } catch (error) {
    console.error("[signInAdmin] error:", error);
    return {
      success: false,
      message: null,
      error: "サーバーエラーが発生しました",
    };
  }
}
