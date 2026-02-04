import { Card, CardContent } from "@/components/ui/card";
import { User } from "@/generated/prisma/client";

interface UserInfoProps {
  user: User;
}

export default async function UserInfo({ user }: UserInfoProps) {
  return (
    <div className="space-y-4">
      <h2>ユーザー情報</h2>
      <Card>
        <CardContent>
          {user ? (
            <div>
              <p>ユーザーID:{user.id}</p>
            </div>
          ) : (
            <div>
              <p>uuidに対応するユーザーが存在しません。</p>
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  );
}
