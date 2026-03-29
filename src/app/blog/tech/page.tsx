import type { NextPage } from "next";
import type { Metadata } from "next";
import { getTechArticlesMeta } from "./_lib/md";
import { TechListContainer } from "@/app/_features/techBlog/TechListContainer";
import { notFound } from "next/navigation";

export const metadata: Metadata = {
  title: "テックブログ一覧",
};

const Page: NextPage = async () => {
  const articles = getTechArticlesMeta();
  if (articles.length === 0) {
    return notFound();
  }
  return <TechListContainer key={Date.now()} articles={articles} />;
};

export default Page;
