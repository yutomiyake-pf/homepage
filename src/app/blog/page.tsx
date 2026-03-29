import { NextPage } from "next";
import { BlogContainer } from "../_features/blog/BlogContainer";
import { BlogArticle } from "../_features/blog/BlogContainer/type";
import { superkerDeckBlogs } from "../_features/blog/BlogContainer/blogs";
import { getTechArticlesMeta } from "./tech/_lib/md";
import type { Metadata } from "next";
import dayjs from "dayjs";
import { v4 as uuidv4 } from "uuid";

export const metadata: Metadata = {
  title: "テックブログ一覧",
};

const Page: NextPage = async () => {
  const superkerDeckArticles: BlogArticle[] = superkerDeckBlogs;
  const zennArticles: BlogArticle[] = [];
  let currentPage = 1;
  let hasMorePages = true;

  // 全ページを取得するループ
  while (hasMorePages) {
    const res = await fetch(
      `https://zenn.dev/api/articles?username=reds&order=latest&page=${currentPage}`,
      { next: { revalidate: 86400 } } // 1日間キャッシュ
    );
    const data = await res.json();

    if (data.articles?.length > 0) {
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      data.articles.map((article: any) => {
        zennArticles.push({
          id: article.id,
          title: article.title,
          published_at: dayjs(new Date(article.published_at)).format(
            "YYYY-MM-DD HH:mm"
          ),
          display_published_at: dayjs(new Date(article.published_at)).format(
            "YYYY-MM-DD"
          ),
          url: `https://zenn.dev${article.path}`,
        });
      });

      if (!data.next_page) {
        hasMorePages = false;
      } else {
        currentPage++;
      }
    } else {
      hasMorePages = false;
    }
  }

  // 内部テックブログ記事を取得
  const techArticlesMeta = getTechArticlesMeta();
  const internalTechArticles: BlogArticle[] = techArticlesMeta.map((meta) => ({
    id: uuidv4(),
    title: meta.title,
    published_at: dayjs(new Date(meta.date)).format("YYYY-MM-DD HH:mm"),
    display_published_at: dayjs(new Date(meta.date)).format("YYYY-MM-DD"),
    url: `/blog/tech/${meta.slug}`,
    isInternal: true,
  }));

  const articles: BlogArticle[] = [
    ...superkerDeckArticles,
    ...zennArticles,
    ...internalTechArticles,
  ];

  // published_atの降順で並び替え（新しい順）
  const sortedArticles = articles.sort(
    (a, b) =>
      new Date(b.published_at).getTime() - new Date(a.published_at).getTime()
  );

  return <BlogContainer key={Date.now()} articles={sortedArticles} />;
};

export default Page;
