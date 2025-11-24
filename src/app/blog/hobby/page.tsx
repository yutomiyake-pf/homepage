import type { NextPage } from "next";
import type { Metadata } from "next";
import { getHobbyArticlesMeta } from "./_lib/md";
import { HobbyListContainer } from "@/app/_features/hobbyBlog/HobbyListContainer";

export const metadata: Metadata = {
  title: "趣味ブログ一覧",
};

const Page: NextPage = async () => {
  const articles = getHobbyArticlesMeta();
  if (articles.length === 0) {
    throw new Error("記事がありません");
  }
  return <HobbyListContainer key={Date.now()} articles={articles} />;
};

export default Page;
