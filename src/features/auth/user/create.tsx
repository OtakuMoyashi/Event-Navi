"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { authClient } from "@/lib/auth-client";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function CreateAnonymousUser() {
  const router = useRouter();
  const [isPending, setIsPending] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleCreateAnonymousUser = async () => {
    setIsPending(true);
    setError(null);

    try {
      const { error } = await authClient.signIn.anonymous();
      if (error) {
        setError(
          "ゲストユーザーの作成に失敗しました。時間をおいて再度お試しください。",
        );
        return;
      }

      router.refresh();
    } catch (error) {
      setError(
        "ゲストユーザーの作成に失敗しました。時間をおいて再度お試しください。",
      );
    } finally {
      setIsPending(false);
    }
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle>ゲストユーザーの作成</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-3">
          <p className="text-sm text-muted-foreground">
            整理券を発行するには、ゲストユーザーを作成する必要があります。
          </p>
          <Button onClick={handleCreateAnonymousUser} disabled={isPending}>
            {isPending ? "作成中..." : "ゲストユーザーを作成"}
          </Button>
          {error ? <p className="text-sm text-red-600">{error}</p> : null}
        </div>
      </CardContent>
    </Card>
  );
}
