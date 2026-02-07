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
  const email = `${loginId}@$example.com`;
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
