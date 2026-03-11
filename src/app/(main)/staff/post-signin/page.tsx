import { Suspense } from "react";
import PostSignInClient from "@/features/auth/post-signin";

export default function StaffPostSignInPage() {
  return (
    <Suspense fallback={<p>サインイン処理中...</p>}>
      <PostSignInClient />
    </Suspense>
  );
}
