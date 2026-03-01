"use client";

import { Card, CardContent } from "@/components/ui/card";

interface UserInfoProps {
  userId: string;
}

export default function UserInfo({ userId }: UserInfoProps) {
  return (
    <Card>
      <CardContent>
        <p>ユーザーID: {userId}</p>
      </CardContent>
    </Card>
  );
}
