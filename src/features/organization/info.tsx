import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { getDbAsync } from "@/lib/db";
import { organizations } from "@/lib/db/schema";
import { eq } from "drizzle-orm";
import IssueInviteLink from "../auth/invite/issue-link";

interface OrganizationInfoProps {
  orgId: string;
}

export default async function OrganizationInfo({
  orgId,
}: OrganizationInfoProps) {
  const db = await getDbAsync();
  const org = await db
    .select()
    .from(organizations)
    .where(eq(organizations.id, orgId))
    .limit(1);
  if (org.length === 0) {
    return <p>組織が存在しません。</p>;
  }
  return (
    <Card>
      <CardHeader>
        <CardTitle>組織：{org[0].name}の情報</CardTitle>
      </CardHeader>
      <CardContent>
        <p>id：{org[0].id}</p>
        <p>識別名：{org[0].slug}</p>
        <p>名前：{org[0].name}</p>
        <IssueInviteLink
          targetScope="ORGANIZATION"
          role="ORGANIZATION_ADMIN"
          organizationId={org[0].id}
          eventId={null}
          storeId={null}
        />
      </CardContent>
    </Card>
  );
}
