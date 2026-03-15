import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import SignInSuperAdmin from "@/features/auth/super-admin/signin";
import Link from "next/link";

export default function SuperAdminSigninPage() {
  return (
    <div className="space-4">
      <SignInSuperAdmin />
      <Card>
        <CardHeader>
          <CardTitle>管理者アカウントをお持ちでない場合</CardTitle>
        </CardHeader>
        <CardContent>
          <Button>
            <Link href="/signup/super-admin">
              システム管理者アカウントを作成
            </Link>
          </Button>
        </CardContent>
      </Card>
    </div>
  );
}
