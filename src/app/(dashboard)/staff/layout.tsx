import { getDbAsync } from "@/lib/db";
import { staffs } from "@/lib/db/schema";
import { eq } from "drizzle-orm";
import { auth } from "@/lib/auth";
import { headers } from "next/headers";
import { redirect } from "next/navigation";

export default async function StaffLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const session = await auth.api.getSession({ headers: await headers() });

  if (!session?.user) {
    redirect("/signin/staff");
  }

  const userId = session.user.id;

  const db = await getDbAsync();

  const rows = await db
    .select({ userId: staffs.userId })
    .from(staffs)
    .where(eq(staffs.userId, userId))
    .limit(1);

  if (rows.length === 0) {
    redirect("/signin/staff");
  }

  return <>{children}</>;
}
