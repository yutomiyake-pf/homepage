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
    alternates: {
      canonical: `/blog/hobby/${article.slug}`,
    },
    openGraph: {
      title: `${article.title} | みやくん`,
      description: article.summary,
      url: `/blog/hobby/${article.slug}`,
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
  const article = await getHobbyArticleBySlug(params.slug);
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
    url: `https://www.miyakun.com/blog/hobby/${article.slug}`,
    keywords: (article.tags ?? []).join(", "),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <HobbyArticleContainer article={article} />
    </>
  );
};

export default Page;
