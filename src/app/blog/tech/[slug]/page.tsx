import type { Metadata } from "next";
import { notFound } from "next/navigation";
import {
  getAllTechSlugs,
  getTechArticleBySlug,
} from "@/app/blog/tech/_lib/md";
import { TechArticleContainer } from "@/app/_features/techBlog/TechArticleContainer";

type PageProps = {
  params: {
    slug: string;
  };
};

export const generateStaticParams = async () => {
  const slugs = getAllTechSlugs();
  return slugs.map((slug) => ({ slug }));
};

export const generateMetadata = async ({
  params,
}: PageProps): Promise<Metadata> => {
  const article = await getTechArticleBySlug(params.slug);
  if (!article) {
    return {
      title: "テックブログ",
    };
  }
  return {
    title: article.title,
    description: article.summary,
  };
};

const Page = async ({ params }: PageProps) => {
  const article = await getTechArticleBySlug(params.slug);
  if (!article) {
    return notFound();
  }

  return <TechArticleContainer article={article} />;
};

export default Page;
