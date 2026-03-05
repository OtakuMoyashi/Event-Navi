"use server";

import prisma from "@/lib/prisma";
import z from "zod";

const createOrganizationSchema = z.object({
  slug: z.string().max(20),
  name: z.string().max(20),
  inviteCode: z.string().max(20),
});

export async function createOrganization(prevState: any, formData: FormData) {
  try {
    const validationResult = createOrganizationSchema.safeParse({
      slug: formData.get("slug") as string,
      name: formData.get("name") as string,
      inviteCode: formData.get("inviteCode") as string,
    });
    if (validationResult.error) {
      console.log(validationResult.error);
      return {
        success: false,
        message: null,
        error: "入力形式が正しくありません。",
      };
    }
    const { slug, name, inviteCode } = validationResult.data;
    await prisma.organization.create({
      data: {
        slug: slug,
        name: name,
        inviteCode: inviteCode,
      },
    });
    return {
      success: true,
      message: "操作が完了しました。",
      error: null,
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
