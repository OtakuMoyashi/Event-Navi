"use client";

import { QRCodeCanvas } from "qrcode.react";

interface QRCodeProps {
  text: string;
  size: number;
}

const QRCode = ({ text, size }: QRCodeProps) => {
  return (
    <QRCodeCanvas
      value={text}
      size={size}
      level={"L"}
      imageSettings={{
        src: "/images/icon-512x512.png",
        x: undefined,
        y: undefined,
        height: size / 4,
        width: size / 4,
        excavate: true,
      }}
    />
  );
};

export default QRCode;
