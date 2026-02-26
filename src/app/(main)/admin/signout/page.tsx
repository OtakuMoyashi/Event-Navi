import { Card } from "@/components/ui/card";
import Link from "next/link";
import SignOut from "@/features/auth/signout";
import { Button } from "@/components/ui/button";

export default function SignOutPage() {
  return (
    <Card>
      <Button>
        <Link href="/api/admin/signout">サインアウト</Link>
      </Button>
    </Card>
  );
}
