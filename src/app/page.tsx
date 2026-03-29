import { NextPage } from "next";
import { TopContainer } from "./_features/top/TopContainer";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "ホーム | メニュー",
  description:
    "みやくんのホームページ。プロフィール、経歴、スキル、ブログなどを紹介しています。",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "みやくん",
    description:
      "みやくんのホームページ。プロフィール、経歴、スキル、ブログなどを紹介しています。",
    url: "/",
  },
};

const Page: NextPage = () => {
  return <TopContainer key={Date.now()} />;
};

export default Page;
