import * as z from "zod";

export const passwordSchema = z
  .string()
  .min(8, "パスワードは8文字以上で入力してください")
  .regex(/[a-zA-Z]/, "英字を含めてください")
  .regex(/[0-9]/, "数字を含めてください");
