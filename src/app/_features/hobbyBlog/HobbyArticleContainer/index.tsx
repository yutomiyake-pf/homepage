import styles from "./styles.module.css";
import type { HobbyArticle } from "@/app/blog/hobby/_lib/types";
import { Header } from "@/app/_components/Header";

type Props = {
  article: HobbyArticle;
};

export const HobbyArticleContainer = ({ article }: Props) => {
  return (
    <main className={styles.section}>
      <div className={styles.sectionContent}>
        <Header
          title={article.title}
          href="/blog/hobby"
          backLabel="← 趣味ブログ一覧へ戻る"
        />
        <article className={styles.article}>
          <div className={styles.meta}>
            <time dateTime={article.date}>{article.date}</time>
            {article.tags?.map((tag) => (
              <span key={tag}>#{tag}</span>
            ))}
          </div>
          <div
            className={styles.content}
            dangerouslySetInnerHTML={{ __html: article.contentHtml }}
          />
        </article>
      </div>
    </main>
  );
};
