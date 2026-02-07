"use client";

import { useEffect } from "react";
import { authClient } from "@/lib/auth-client";
import { useRouter } from "next/navigation";

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const router = useRouter();

  useEffect(() => {
    const syncAuth = async () => {
      const session = await authClient.getSession();
      console.log("raw session:", JSON.stringify(session, null, 2));
      console.log("session?.data:", session?.data);
      if (!session?.data) {
        try {
          const result = await authClient.signIn.anonymous();
          console.log("匿名でサインインしました。", result);
          console.log("fetch前");
          await fetch("/api/user/create", { method: "POST" });
          console.log("fetch後");
        } catch (error) {
          console.error("Anonymous signup error:", error);
        }
      }
    };

    syncAuth();
  }, [router]);

  return <>{children}</>;
}
