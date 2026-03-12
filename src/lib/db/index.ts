import { drizzle } from "drizzle-orm/d1";
import * as schema from "@/lib/db/schema";
import { getCloudflareContext } from "@opennextjs/cloudflare";

export const getDB = async () => {
  const { env } = await getCloudflareContext({ async: true });
  return drizzle(env.DB, { schema });
};
