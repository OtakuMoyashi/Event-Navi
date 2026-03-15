import { Suspense } from "react";
import PostSignInClient from "@/features/auth/post-signin";
import { LoadingPrompt } from "@/components/prompt/loading-prompt";

export default async function AdminPostSignInPage() {
  return (
    <Suspense fallback={<LoadingPrompt contentName="サインイン" />}>
      <PostSignInClient />
    </Suspense>
  );
}
