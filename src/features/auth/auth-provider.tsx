"use client";

import { useEffect } from "react";
import { authClient } from "@/lib/auth-client";
import { useRouter } from "next/navigation";

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const router = useRouter();

  useEffect(() => {
    const syncAuth = async () => {
      const session = await authClient.getSession();
      if (!session?.data) {
        try {
          await authClient.signIn.anonymous();
        } catch (error) {
          console.error("Anonymous signup error:", error);
        }
      }
    };

    syncAuth();
  }, [router]);

  return <>{children}</>;
}
