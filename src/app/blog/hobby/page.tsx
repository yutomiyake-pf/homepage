import type { NextPage } from "next";
import type { Metadata } from "next";
import { getHobbyArticlesMeta } from "./_lib/md";
import { HobbyListContainer } from "@/app/_features/hobbyBlog/HobbyListContainer";
import { notFound } from "next/navigation";

export const metadata: Metadata = {
  title: "趣味ブログ一覧",
};

const Page: NextPage = async () => {
  const articles = getHobbyArticlesMeta();
  if (articles.length === 0) {
    return notFound();
  }
  return <HobbyListContainer key={Date.now()} articles={articles} />;
};

export default Page;
