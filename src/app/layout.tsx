import type { Metadata } from "next";
import Script from "next/script";
import "ress";
import "./globals.css";
import { Footer } from "./_components/Footer";

const baseUrl = "https://www.miyakun.com";

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
    url: baseUrl,
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
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-D98Z2PTBPX"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-D98Z2PTBPX');
          `}
        </Script>
        {children}
        <Footer />
      </body>
    </html>
  );
}
