"use client";

import { Card, CardContent } from "@/components/ui/card";
import { LoadingPrompt } from "@/components/prompt/loading-prompt";
import { useCurrentUser } from "@/hooks/useCurrentUser";

export default function UserInfo() {
  const { user, loading } = useCurrentUser();
  if (loading) return <LoadingPrompt contentName="ユーザー情報" />;
  if (!user) return <div>ユーザー情報が取得できませんでした。</div>;
  return (
    <Card>
      <CardContent>
        <p>ユーザーID: {user.id}</p>
      </CardContent>
    </Card>
  );
}
