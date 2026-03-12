/* eslint-disable @typescript-eslint/no-explicit-any */
"use server";

import { getDB } from "@/lib/db";
import { staffs } from "@/lib/db/schema";
import { eq } from "drizzle-orm";
import { getAuth } from "@/lib/auth";
import z from "zod";
import { passwordSchema } from "@/lib/schema/auth";

const SignUpSchema = z.object({
  loginId: z.string(),
  password: passwordSchema,
});

const hasUserId = (data: unknown): data is { user: { id: string } } => {
  if (!data || typeof data !== "object") return false;

  const user = (data as { user?: unknown }).user;
  if (!user || typeof user !== "object") return false;

  const id = (user as { id?: unknown }).id;
  return typeof id === "string" && id.length > 0;
};

export async function createStaff(prevState: any, formData: FormData) {
  const validationResult = SignUpSchema.safeParse({
    loginId: formData.get("loginId"),
    password: formData.get("password"),
  });

  if (!validationResult.success) {
    return {
      success: false,
    };
  }

  const { loginId, password } = validationResult.data;
  const email = `${loginId}@example.com`;
  const storeId = formData.get("storeId") as string;

  const auth = await getAuth();
  const db = await getDB();

  try {
    const response = await auth.api.signUpEmail({
      body: {
        email,
        password,
        name: loginId,
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

    const userId = data.user.id;

    await db.insert(staffs).values({
      userId,
      email,
      storeId,
    });

    return {
      success: true,
      message: "スタッフアカウントが作成されました",
    };
  } catch (error) {
    console.log(error);
    return {
      success: false,
      message: null,
      error: "サーバーエラーが発生しました。",
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
    };
  }

  const { loginId, password } = validationResult.data;
  const email = `${loginId}@example.com`;

  const auth = await getAuth();
  const db = await getDB();

  try {
    // Better-authでサインイン
    const response = await auth.api.signInEmail({
      body: {
        email,
        password,
      },
      asResponse: true,
    });

    const data: unknown = await response.json();

    // レスポンスのOK判定
    if (!response.ok || !hasUserId(data)) {
      return {
        success: false,
        message: "ユーザー作成に失敗しました",
      };
    }

    const userId: string = data.user.id;
    const staffRows = await db
      .select()
      .from(staffs)
      .where(eq(staffs.userId, userId))
      .limit(1);
    const staff = staffRows[0];

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
    console.error("[signInStaff] error:", error);
    return {
      success: false,
      message: "サーバーエラーが発生しました",
      errorCode: "INTERNAL_ERROR", // 非公開のエラーコードやフラグのみ返す
    };
  }
}
