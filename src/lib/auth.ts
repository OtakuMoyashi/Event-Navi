import { betterAuth } from "better-auth";
import { drizzleAdapter } from "better-auth/adapters/drizzle";
import { anonymous } from "better-auth/plugins";
import { nextCookies } from "better-auth/next-js";
import * as schema from "@/lib/db/schema";

import { getDb } from "./db";

export const getAuth = async () => {
  return betterAuth({
    appName: "Gakusai-Hub",
    database: drizzleAdapter(await getDb(), {
      provider: "sqlite",
      schema,
      usePlural: true,
      camelCase: true,
    }),
    secret: process.env.BETTER_AUTH_SECRET as string,
    basePath: "/api/auth",
    baseURL: process.env.BETTER_AUTH_URL,
    allowedOrigins: process.env.BETTER_AUTH_URL
      ? [process.env.BETTER_AUTH_URL]
      : [],
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
};
