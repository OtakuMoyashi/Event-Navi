import prisma from "@/lib/prisma";
import SignUpAdminForm from "./signup-form";

export default async function SignUpAdmin() {
  const orgs = await prisma.organization.findMany();
  if (orgs.length === 0) {
    return <p>組織が存在しません。</p>;
  }
  return <SignUpAdminForm orgs={orgs} />;
}
