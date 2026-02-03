"use client";

import { QRCodeCanvas } from "qrcode.react";

interface QRCodeProps {
  text: string;
}

const QRCode = ({ text }: QRCodeProps) => {
  return (
    <QRCodeCanvas
      value={text}
      size={128}
      level={"L"}
      imageSettings={{
        src: "/favicon.ico",
        x: undefined,
        y: undefined,
        height: 24,
        width: 24,
        excavate: true,
      }}
    />
  );
};

export default QRCode;
