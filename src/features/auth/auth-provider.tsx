"use client";

import { useEffect } from "react";
import { createClient } from "@/lib/supabase/client";
import { useRouter } from "next/navigation";

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const router = useRouter();
  const supabase = createClient();

  useEffect(() => {
    const syncAuth = async () => {
      const {
        data: { user },
      } = await supabase.auth.getUser();

      if (!user) {
        await supabase.auth.signInAnonymously();
        router.refresh();
      }
    };

    syncAuth();
  }, [router, supabase]);

  return <>{children}</>;
}
