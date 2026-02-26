"use client";
import { useState, useTransition } from "react";
import { useZxing } from "react-zxing";
import { callTicket } from "./action";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function TicketQrCodeReader() {
  const [ticketId, setTicketId] = useState<string | null>(null);
  const [isScanning, setIsScanning] = useState(false);
  const [result, setResult] = useState<string | null>(null);
  const [isPending, startTransition] = useTransition();

  const { ref } = useZxing({
    onDecodeResult(result) {
      const id = result.getText();
      setTicketId(id);
      setIsScanning(false);
      // 読み取り後に自動で呼び出し
      startTransition(async () => {
        const res = await callTicket(id);
        setResult(res.message);
      });
    },
    paused: !isScanning,
  });

  const handleStartScan = () => {
    setTicketId(null);
    setResult(null);
    setIsScanning(true);
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle>整理券読み取り</CardTitle>
      </CardHeader>
      <CardContent>
        <video ref={ref} />
        {!isScanning && <p>カメラ待機中</p>}
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
        {ticketId && (
          <div>
            <p>読み取ったID: {ticketId}</p>
            {isPending ? <p>呼び出し中...</p> : null}
            {result && <p>{result}</p>}
          </div>
        )}
      </CardContent>
    </Card>
  );
}
