import { InstallPrompt } from "@/features/push/install";
import { PushNotificationManager } from "@/features/push/manager";
import UserInfo from "@/features/auth/user/info";
import Link from "next/link";

export default function Home() {
  return (
    <div>
      <h1>kinshi-navi</h1>
      <UserInfo />
      <PushNotificationManager />
      <InstallPrompt />
      <Link href="/createTest">テストページ</Link>
    </div>
  );
}
