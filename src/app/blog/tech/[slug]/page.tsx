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
    alternates: {
      canonical: `/blog/tech/${article.slug}`,
    },
    openGraph: {
      title: `${article.title} | みやくん`,
      description: article.summary,
      url: `/blog/tech/${article.slug}`,
      type: "article",
      publishedTime: article.date,
      authors: ["みやくん"],
      tags: article.tags,
    },
    twitter: {
      card: "summary",
      title: `${article.title} | みやくん`,
      description: article.summary,
    },
  };
};

const Page = async ({ params }: PageProps) => {
  const article = await getTechArticleBySlug(params.slug);
  if (!article) {
    return notFound();
  }

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: article.title,
    description: article.summary,
    datePublished: article.date,
    author: {
      "@type": "Person",
      name: "みやくん",
      url: "https://github.com/yutomiyake-pf",
    },
    url: `https://www.miyakun.com/blog/tech/${article.slug}`,
    keywords: (article.tags ?? []).join(", "),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <TechArticleContainer article={article} />
    </>
  );
};

export default Page;
