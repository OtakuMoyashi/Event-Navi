"use client";

import { useEffect, useRef, useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { postSignInByIntent } from "@/features/auth/action";

export default function PostSignInClient() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const intent = searchParams.get("intent");
  const executedRef = useRef(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (executedRef.current) return;
    executedRef.current = true;

    (async () => {
      const res = await postSignInByIntent(intent);
      if (!res.ok) {
        setError(res.message ?? "認証後処理に失敗しました");
        return;
      }
      router.replace(res.redirectTo ?? "/");
    })();
  }, [intent, router]);

  if (error) return <p>{error}</p>;
  return <p>サインイン処理中...</p>;
}
