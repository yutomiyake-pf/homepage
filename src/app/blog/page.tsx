import { NextPage } from "next";
import { BlogContainer } from "../_features/blog/BlogContainer";
import { BlogArticle } from "../_features/blog/BlogContainer/type";
import dayjs from "dayjs";

const Page: NextPage = async () => {
  const zennArticles: BlogArticle[] = [];
  let currentPage = 1;
  let hasMorePages = true;

  // 全ページを取得するループ
  while (hasMorePages) {
    const res = await fetch(
      `https://zenn.dev/api/articles?username=reds&order=latest&page=${currentPage}`
    );
    const data = await res.json();

    if (data.articles?.length > 0) {
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      data.articles.map((article: any) => {
        zennArticles.push({
          id: article.id,
          title: article.title,
          published_at: dayjs(new Date(article.published_at)).format(
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

  return <BlogContainer key={Date.now()} articles={zennArticles} />;
};

export default Page;
