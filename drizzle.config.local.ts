import type { Config } from "drizzle-kit";

export default {
  out: "./drizzle/migrations",
  schema: "./src/lib/db/schema.ts",
  dialect: "sqlite",
  dbCredentials: {
    // wranglerが作成するローカルD1のパス
    url: ".wrangler/state/v3/d1/miniflare-D1DatabaseObject/de8195be5d640185e89d8077469f458342761795f95e66aac36fd080e726b5de.sqlite",
  },
} satisfies Config;
