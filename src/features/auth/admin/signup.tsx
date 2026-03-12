import { getDbAsync } from "@/lib/db";
import { organizations } from "@/lib/db/schema";
import SignUpAdminForm from "./signup-form";

export default async function SignUpAdmin() {
  const db = await getDbAsync();
  const orgs = await db.select().from(organizations);
  if (orgs.length === 0) {
    return <p>組織が存在しません。</p>;
  }
  return <SignUpAdminForm orgs={orgs} />;
}
