import UserInfo from "@/features/auth/user/info";
import { Suspense } from "react";
import { LoadingPrompt } from "@/components/prompt/loading-prompt";
import { PushNotificationManager } from "@/features/push/manager";

export default function UserPage() {
  return (
    <div className="space-y-4">
      <Suspense fallback={<LoadingPrompt contentName="ユーザー情報" />}>
        <UserInfo />
      </Suspense>
      <Suspense fallback={<LoadingPrompt contentName="通知設定" />}>
        <PushNotificationManager />
      </Suspense>
    </div>
  );
}
