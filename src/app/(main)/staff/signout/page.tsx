import { Card } from "@/components/ui/card";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function SignOutPage() {
  return (
    <Card>
      <Button>
        <Link href="/api/signout">サインアウト</Link>
      </Button>
    </Card>
  );
}
