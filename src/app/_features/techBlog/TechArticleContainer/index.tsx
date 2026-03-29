import styles from "./styles.module.css";
import type { TechArticle } from "@/app/blog/tech/_lib/types";
import { Header } from "@/app/_components/Header";

type Props = {
  article: TechArticle;
};

export const TechArticleContainer = ({ article }: Props) => {
  return (
    <main className={styles.section}>
      <div className={styles.sectionContent}>
        <Header
          title={article.title}
          href="/blog/tech"
          backLabel="← テックブログ一覧へ戻る"
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
