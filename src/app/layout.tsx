import type { Metadata } from "next";
import "./globals.css";
import Image from "next/image";
import { Separator } from "@/components/ui/separator";
import Link from "next/link";

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
      <body className="font-sans antialiased min-h-screen flex flex-col">
        <main className="flex-1">{children}</main>

        <footer className="bg-amber-50/50 w-full ">
          <div className="px-8 lg:px-16 p-4 py-6 lg:py-8">
            <div className="md:flex md:justify-between">
              <div className="mb-6 md:mb-0">
                <Link href="/" className="flex items-center">
                  <span className="text-heading self-center text-2xl font-semibold whitespace-nowrap">
                    Gakusai-Hub
                  </span>
                </Link>
              </div>
              <div className="grid grid-cols-2 gap-20 sm:gap-6 sm:grid-cols-3">
                <div>
                  <h2 className="mb-6 text-sm font-semibold text-heading uppercase">
                    サイトマップ
                  </h2>
                  <ul className="text-body font-medium">
                    <li>
                      <Link href={"/dashboard"}>管理者向けページ</Link>
                    </li>
                  </ul>
                </div>
                <div>
                  <h2 className="mb-6 text-sm font-semibold text-heading uppercase">
                    SNSリンク
                  </h2>
                  <ul className="text-body font-medium">
                    <li className="mb-4">
                      <a href="#" className="hover:underline ">
                        Github
                      </a>
                    </li>
                    <li>
                      <a href="#" className="hover:underline">
                        Discord
                      </a>
                    </li>
                  </ul>
                </div>
                <div>
                  <h2 className="mb-6 text-sm font-semibold text-heading uppercase">
                    法務
                  </h2>
                  <ul className="text-body font-medium">
                    <li>
                      <a href="#" className="hover:underline">
                        利用規約
                      </a>
                    </li>
                    <li className="my-4">
                      <a href="#" className="hover:underline">
                        プライバシーポリシー
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <hr className="my-6 border-default sm:mx-auto lg:my-8" />
            <div className="sm:flex sm:items-center sm:justify-between">
              <span className="text-sm text-body sm:text-center">
                © 2026 Gakusai-Hub
              </span>
              <div className="flex mt-4 sm:justify-center sm:mt-0"></div>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}
