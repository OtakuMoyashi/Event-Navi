/* eslint-disable @typescript-eslint/no-explicit-any */
"use server";

import { db } from "@/index";
import { admins, organizations } from "@/lib/db/schema";
import { eq } from "drizzle-orm";
import { auth } from "@/lib/auth";
import { passwordSchema } from "@/lib/schema/auth";
import z from "zod";
import { AdminRole } from "@/lib/db/schema";

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
    };
  }

  const orgId = formData.get("orgId") as string;

  const orgRows = await db
    .select({ inviteCode: organizations.inviteCode })
    .from(organizations)
    .where(eq(organizations.id, orgId))
    .limit(1);
  const org = orgRows[0];
  if (!org) {
    return {
      success: false,
      message: null,
      error: "該当する組織が存在しません。",
    };
  }

  if (validationResult.data.inviteCode !== org.inviteCode) {
    return {
      success: false,
      message: null,
      error: "招待コードが間違っています",
    };
  }

  const { email, password } = validationResult.data;
  const role = formData.get("role") as AdminRole;

  try {
    const response = await auth.api.signUpEmail({
      body: {
        email,
        password,
        name: email.split("@")[0],
      },
      asResponse: true,
    });
    const data = await response.json();

    if (!response.ok || !data || !data.user || !data.user.id) {
      return {
        success: false,
        message: "ユーザー作成に失敗しました",
      };
    }

    const userId: string = data.user.id;
    await db.insert(admins).values({
      userId: userId,
      email: email,
      role: role,
      organizationId: orgId,
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

export async function signInAdmin(prevState: any, formData: FormData) {
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
    // Admin権限確認
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
