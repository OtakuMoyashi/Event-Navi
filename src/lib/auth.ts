import { betterAuth } from "better-auth";
import { drizzleAdapter } from "better-auth/adapters/drizzle";
import { anonymous } from "better-auth/plugins";
import { nextCookies } from "better-auth/next-js";
import { db } from "@/index";
import * as schema from "@/lib/db/schema";

const betterAuthSecret = process.env.BETTER_AUTH_SECRET;
if (!betterAuthSecret) {
  throw new Error(
    "[better-auth] BETTER_AUTH_SECRET environment variable is required but was not set. Please define BETTER_AUTH_SECRET in your environment.",
  );
}

export const auth = betterAuth({
  appName: "Gakusai-Hub",
  database: drizzleAdapter(db, {
    provider: "pg",
    schema,
    usePlural: true,
    camelCase: true,
  }),
  secret: betterAuthSecret, // validated value
  basePath: "/api/auth",
  baseURL: process.env.BETTER_AUTH_URL,
  allowedOrigins: [process.env.BETTER_AUTH_URL],
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
