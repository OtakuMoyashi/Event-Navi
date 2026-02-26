/* eslint-disable @typescript-eslint/no-explicit-any */
import { useEffect, useState } from "react";
import { authClient } from "@/lib/auth-client";

export function useCurrentUser() {
  const [user, setUser] = useState<any>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    (async () => {
      console.log("useCurrentUser useEffect called");

      // セッションが確立されるまで待つ（最大5秒）
      let session = null;
      let retries = 50;
      while (retries-- > 0) {
        session = await authClient.getSession();
        console.log("useCurrentUser session:", session);
        if (session?.data) break;
        await new Promise((res) => setTimeout(res, 100));
      }

      if (!session?.data) {
        console.log("useCurrentUser: No session data, returning");
        setLoading(false);
        return;
      }

      // user取得のみ（作成はAuthProviderで実施済みの前提）
      const res = await fetch("/api/user");
      const data = await res.json();
      console.log("fetch /api/user response:", data);
      setUser(data.user ?? null);
      setLoading(false);
    })();
  }, []);

  return { user, loading };
}
