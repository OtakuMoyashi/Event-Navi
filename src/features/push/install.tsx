/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable react-hooks/set-state-in-effect */
"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useEffect, useState } from "react";

export function InstallPrompt() {
  const [isMounted, setIsMounted] = useState(false);
  const [isIOS, setIsIOS] = useState(false);
  const [isStandalone, setIsStandalone] = useState(false);

  useEffect(() => {
    setIsMounted(true);
    setIsIOS(
      /iPad|iPhone|iPod/.test(navigator.userAgent) && !(window as any).MSStream,
    );
    setIsStandalone(window.matchMedia("(display-mode: standalone)").matches);
  }, []);

  if (!isMounted) {
    return null;
  }

  if (isStandalone) {
    return null;
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle>PWAのインストール</CardTitle>
      </CardHeader>
      <CardContent>
        {isIOS && (
          <p className="mt-2 text-sm">
            お使いのデバイスにアプリをインストールするには、
            <span role="img" aria-label="share icon">
              {" "}
              ⎋{" "}
            </span>
            「ホーム画面に追加」を押してください。
            <span role="img" aria-label="plus icon">
              {" "}
              ➕{" "}
            </span>
          </p>
        )}
      </CardContent>
    </Card>
  );
}
