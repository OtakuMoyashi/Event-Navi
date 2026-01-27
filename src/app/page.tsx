import { InstallPrompt } from "@/features/push/install";
import { PushNotificationManager } from "@/features/push/manager";
import UserInfo from "@/features/auth/user/info";
import { Suspense } from "react";

export default function Home() {
  return (
    <div>
      <Suspense>
        <UserInfo />
        <PushNotificationManager />
        <InstallPrompt />
      </Suspense>
    </div>
  );
}
