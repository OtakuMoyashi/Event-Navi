"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useState } from "react";
import { useZxing } from "react-zxing";

export default function TicketQrCodeReader() {
  const [ticketId, setTicketId] = useState<string | null>();
  const [isScanning, setIsScanning] = useState(false);

  const { ref } = useZxing({
    onDecodeResult(result) {
      setTicketId(result.getText());
      setIsScanning(false); // 読み取り成功でスキャン終了
    },
    paused: !isScanning, // isScanningがfalseの間はカメラを止める
  });

  const handleStartScan = () => {
    setTicketId(null); // 前回の結果をクリア
    setIsScanning(true); // スキャン開始
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle>整理券読み取り</CardTitle>
      </CardHeader>
      <CardContent>
        <video ref={ref} />
        {!isScanning && (
          <div>
            <p>カメラ待機中</p>
          </div>
        )}
        <div>
          {!isScanning ? (
            <Button className="w-full" onClick={handleStartScan}>
              整理券を読み取る
            </Button>
          ) : (
            <Button variant="success" onClick={() => setIsScanning(false)}>
              キャンセル
            </Button>
          )}
        </div>
      </CardContent>
    </Card>
  );
}
