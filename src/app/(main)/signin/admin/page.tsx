import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import SignInAdmin from "@/features/auth/admin/signin";
import Link from "next/link";

export default function AdminSigninPage() {
  return (
    <div className="space-4">
      <SignInAdmin />
      <Card>
        <CardHeader>
          <CardTitle>管理者アカウントをお持ちでない場合</CardTitle>
        </CardHeader>
        <CardContent>
          <Button>
            <Link href="/signup/admin" prefetch={false}>
              管理者アカウントを作成
            </Link>
          </Button>
        </CardContent>
      </Card>
    </div>
  );
}
