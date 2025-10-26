import { NextPage } from "next";
import { BlogContainer } from "../_features/blog/BlogContainer";
import { BlogArticle } from "../_features/blog/BlogContainer/type";
import { superkerDeckBlogs } from "../_features/blog/BlogContainer/blogs";
import dayjs from "dayjs";

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

  const articles: BlogArticle[] = [...superkerDeckArticles, ...zennArticles];

  // published_atの降順で並び替え（新しい順）
  const sortedArticles = articles.sort(
    (a, b) =>
      new Date(b.published_at).getTime() - new Date(a.published_at).getTime()
  );

  return <BlogContainer key={Date.now()} articles={sortedArticles} />;
};

export default Page;
