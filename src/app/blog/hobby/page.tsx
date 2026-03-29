import type { NextPage } from "next";
import type { Metadata } from "next";
import { getHobbyArticlesMeta } from "./_lib/md";
import { HobbyListContainer } from "@/app/_features/hobbyBlog/HobbyListContainer";
import { notFound } from "next/navigation";

export const metadata: Metadata = {
  title: "趣味ブログ一覧",
  description:
    "みやくんの趣味ブログ一覧。趣味や日常に関する記事を紹介しています。",
  alternates: {
    canonical: "/blog/hobby",
  },
  openGraph: {
    title: "趣味ブログ一覧 | みやくん",
    description:
      "みやくんの趣味ブログ一覧。趣味や日常に関する記事を紹介しています。",
    url: "/blog/hobby",
  },
};

const Page: NextPage = async () => {
  const articles = getHobbyArticlesMeta();
  if (articles.length === 0) {
    return notFound();
  }
  return <HobbyListContainer key={Date.now()} articles={articles} />;
};

export default Page;
