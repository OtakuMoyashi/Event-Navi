import type { Metadata } from "next";
import { Noto_Sans_JP } from "next/font/google";
import "./globals.css";
import Link from "next/link";

const notoSansJp = Noto_Sans_JP({
  variable: "--font-noto-sans-jp",
  subsets: ["latin"],
  weight: ["400", "700"],
});

export const metadata: Metadata = {
  title: "Kinshi-Navi",
  description: "金鵄祭の整理券システムです。",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja" className={notoSansJp.variable}>
      <head>
        <link rel="manifest" href="/manifest.json" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="default" />
        <link rel="apple-touch-icon" href="/icon-192x192.png" />
      </head>
      <body>
        <header>
          <div className="flex justify-center items-center gap-4 bg-main h-10">
            <Link href="/">
              <p>Home</p>
            </Link>
            <Link href="/createTest">
              <p>テストページ</p>
            </Link>
            <Link href="/ticket/issue">
              <p>整理券発行</p>
            </Link>
            <Link href="/ticket/list">
              <p>整理券一覧</p>
            </Link>
          </div>
        </header>
        <div className="p-8">{children}</div>
      </body>
    </html>
  );
}
