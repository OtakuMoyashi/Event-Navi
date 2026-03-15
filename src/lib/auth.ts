/* eslint-disable @typescript-eslint/no-explicit-any */
import { betterAuth } from "better-auth";
import { drizzleAdapter } from "better-auth/adapters/drizzle";
import { anonymous } from "better-auth/plugins";
import { nextCookies } from "better-auth/next-js";
import { drizzle } from "drizzle-orm/d1";
import { getCloudflareContext } from "@opennextjs/cloudflare";
import * as schema from "@/lib/db/schema";

// D1 へのアクセスをクエリ実行時まで遅延させる Proxy。
// betterAuth インスタンスはモジュール初期化時に1度だけ生成し、CPU コストを節約する。
const lazyD1 = new Proxy({} as D1Database, {
  get(_, prop) {
    const { env } = getCloudflareContext();
    return (env.DB as any)[prop as string];
  },
});

const lazyDb = drizzle(lazyD1, { schema });

export const auth = betterAuth({
  appName: "Gakusai-Hub",
  database: drizzleAdapter(lazyDb, {
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
  session: {
    expiresIn: 60 * 60 * 24 * 7,
    updateAge: 60 * 60 * 24,
  },
  plugins: [anonymous(), nextCookies()],
});
