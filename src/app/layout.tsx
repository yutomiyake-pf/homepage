import type { Metadata } from "next";
import "ress";
import "./globals.css";
import { Footer } from "./_components/Footer";

export const metadata: Metadata = {
  title: {
    default: "みやくん",
    template: "%s | みやくん",
  },
  description:
    "みやくんのホームページ。プロフィール、経歴、スキル、ブログなどを紹介しています。",
  keywords: [
    "フロントエンド",
    "エンジニア",
    "プログラマー",
    "みやくん",
    "yutomiyake",
  ],
  authors: [{ name: "みやくん", url: "https://github.com/yutomiyake-pf" }],
  creator: "みやくん",
  openGraph: {
    type: "website",
    locale: "ja_JP",
    // url: "https://yutomiyake.github.io",
    title: "みやくん",
    description:
      "みやくんのホームページ。プロフィール、経歴、スキル、ブログなどを紹介しています。",
    siteName: "みやくん",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
  viewport: "width=device-width, initial-scale=1",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja">
      <body>
        {children}
        <Footer />
      </body>
    </html>
  );
}
