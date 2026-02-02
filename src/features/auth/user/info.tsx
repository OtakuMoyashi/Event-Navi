import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { getCurrentUser } from "./action";

//ユーザー情報を表示するコンポーネント
export default async function UserInfo() {
  const user = await getCurrentUser();

  return (
    <Card>
      <CardHeader>
        <CardTitle>ユーザー情報</CardTitle>
      </CardHeader>
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
  );
}
