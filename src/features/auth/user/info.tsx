"use client";

import { Card, CardContent } from "@/components/ui/card";
import type { User } from "@/generated/prisma/client";

interface UserInfoProps {
  user: User;
}

export default function UserInfo({ user }: UserInfoProps) {
  return (
    <Card>
      <CardContent>
        <p>ユーザーID: {user.id}</p>
      </CardContent>
    </Card>
  );
}
