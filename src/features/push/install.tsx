/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable react-hooks/set-state-in-effect */
"use client";

import { Button } from "@/components/ui/button";
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
    <div className="p-4 border rounded-lg bg-card text-card-foreground">
      <h3 className="font-bold">アプリのインストール</h3>
      <Button>ホーム画面に追加する</Button>
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
    </div>
  );
}
