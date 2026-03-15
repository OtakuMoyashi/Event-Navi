import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import SignInStaff from "@/features/auth/staff/signin";
import Link from "next/link";

export default function StaffSigninPage() {
  return (
    <div className="space-4">
      <SignInStaff />
      <Card>
        <CardHeader>
          <CardTitle>スタッフアカウントをお持ちでない場合</CardTitle>
        </CardHeader>
        <CardContent>
          <Button>
            <Link href="/signup/staff">スタッフアカウントを作成</Link>
          </Button>
        </CardContent>
      </Card>
    </div>
  );
}
