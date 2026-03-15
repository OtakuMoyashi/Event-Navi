import { CreateOrganizationForm } from "@/features/organization/create-form";
import { getDbAsync } from "@/lib/db";
import { organizations } from "@/lib/db/schema";
import { NotFoundPrompt } from "@/components/prompt/not-found-prompt";
import OrganizationInfo from "@/features/organization/info";

export default async function SuperAdminOrganizationPage() {
  const db = await getDbAsync();
  const organizationRows = await db.select().from(organizations);

  return (
    <div className="space-y-4">
      <CreateOrganizationForm />
      {organizationRows.length !== 0 ? (
        organizationRows.map((org) => (
          <OrganizationInfo key={org.id} orgId={org.id} />
        ))
      ) : (
        <NotFoundPrompt contentName="組織" />
      )}
    </div>
  );
}
