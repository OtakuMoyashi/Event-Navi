import SignUpAdmin from "@/features/auth/admin/signup";

type Props = {
  searchParams?: Promise<{ token?: string }>;
};

export default async function AdminSingUpPage({ searchParams }: Props) {
  const params = (await searchParams) ?? {};
  return (
    <div className="space-4">
      <SignUpAdmin inviteToken={params.token} />
    </div>
  );
}
