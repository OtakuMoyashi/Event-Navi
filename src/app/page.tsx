import { InstallPrompt } from "@/features/push/install";
import { PushNotificationManager } from "@/features/push/manager";
import UserInfo from "@/features/auth/user/info";
import Link from "next/link";

export default function Home() {
  return (
    <div>
      <UserInfo />
      <PushNotificationManager />
      <InstallPrompt />
    </div>
  );
}
