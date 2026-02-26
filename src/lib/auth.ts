import { betterAuth } from "better-auth";
import { prismaAdapter } from "better-auth/adapters/prisma";
import prisma from "@/lib/prisma";
import { anonymous } from "better-auth/plugins";
import { nextCookies } from "better-auth/next-js";

const betterAuthSecret = process.env.BETTER_AUTH_SECRET;
if (!betterAuthSecret) {
  throw new Error(
    "[better-auth] BETTER_AUTH_SECRET environment variable is required but was not set. Please define BETTER_AUTH_SECRET in your environment.",
  );
}

export const auth = betterAuth({
  appName: "kinshi-navi",
  database: prismaAdapter(prisma, {
    provider: "postgresql",
  }),
  secret: betterAuthSecret, // validated value
  basePath: "/api/auth",
  baseURL:
    process.env.BETTER_AUTH_URL ||
    "http://localhost:3000" ||
    process.env.BETTER_AUTH_FEATURE_URL ||
    process.env.BETTER_AUTH_DEVELOP_URL,
  emailAndPassword: {
    enabled: true,
  },
  user: {
    additionalFields: {
      role: {
        type: "string",
        required: false,
        defaultValue: "user",
      },
    },
  },
  plugins: [anonymous(), nextCookies()],
});
