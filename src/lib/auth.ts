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
  appName: "Gakusai-Hub",
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
  allowedOrigins: [
    process.env.BETTER_AUTH_URL,
    "http://localhost:3000",
    process.env.BETTER_AUTH_FEATURE_URL,
    process.env.BETTER_AUTH_DEVELOP_URL,
    // 必要なURLをすべて追加
  ],
  emailAndPassword: {
    enabled: true,
  },
  socialProviders: {
    google: {
      clientId: process.env.GOOGLE_CLIENT_ID as string,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET as string,
    },
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
