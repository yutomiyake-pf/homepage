import type { Metadata } from "next";
import { notFound } from "next/navigation";
import {
  getAllHobbySlugs,
  getHobbyArticleBySlug,
} from "@/app/blog/hobby/_lib/md";
import { HobbyArticleContainer } from "@/app/_features/hobbyBlog/HobbyArticleContainer";

type PageProps = {
  params: {
    slug: string;
  };
};

export const generateStaticParams = async () => {
  const slugs = getAllHobbySlugs();
  return slugs.map((slug) => ({ slug }));
};

export const generateMetadata = async ({
  params,
}: PageProps): Promise<Metadata> => {
  const article = await getHobbyArticleBySlug(params.slug);
  if (!article) {
    return {
      title: "趣味ブログ",
    };
  }
  return {
    title: article.title,
    description: article.summary,
  };
};

const Page = async ({ params }: PageProps) => {
  const article = await getHobbyArticleBySlug(params.slug);
  if (!article) {
    return notFound();
  }

  return <HobbyArticleContainer article={article} />;
};

export default Page;
