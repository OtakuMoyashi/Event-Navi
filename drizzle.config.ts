import { defineConfig } from "drizzle-kit";

const isProduction = process.env.NODE_ENV === "production";

const config = isProduction
  ? defineConfig({
      out: "./drizzle/migrations",
      schema: "./src/lib/db/schema.ts",
      dialect: "sqlite",
      driver: "d1-http",
      dbCredentials: {
        accountId: process.env.CLOUDFLARE_ACCOUNT_ID!,
        databaseId: process.env.CLOUDFLARE_DATABASE_ID!,
        token: process.env.CLOUDFLARE_D1_TOKEN!,
      },
    })
  : defineConfig({
      out: "./drizzle/migrations",
      schema: "./src/lib/db/schema.ts",
      dialect: "sqlite",
      dbCredentials: {
        url: `.wrangler/state/v3/d1/miniflare-D1DatabaseObject/de8195be5d640185e89d8077469f458342761795f95e66aac36fd080e726b5de.sqlite`,
      },
    });

export default config;
