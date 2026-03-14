import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Gakusai-Hub",
  description: "学校の文化祭向けの総合Webサービスです。",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja">
      <head>
        <link rel="manifest" href="/manifest.json" />
        <meta name="mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="default" />
        <link rel="apple-touch-icon" href="/icon-192x192.png" />
      </head>
      <body className="font-sans antialiased">
        <main>{children}</main>
      </body>
    </html>
  );
}
