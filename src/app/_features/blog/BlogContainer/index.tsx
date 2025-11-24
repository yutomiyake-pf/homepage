import { ReactNode } from "react";
import styles from "./styles.module.css";
import { Header } from "@/app/_components/Header";
import Link from "next/link";
import { BlogArticle } from "./type";

type Props = {
  articles: BlogArticle[];
};

export const BlogContainer = ({ articles }: Props): ReactNode => {
  return (
    <main className={styles.section}>
      <div className={styles.sectionContent}>
        <Header title="テックブログ一覧" />
        {/* <div className={styles.ctaRow}>
          <Link href="/blog/hobby" className={styles.ctaLink}>
            趣味ブログを見る
          </Link>
        </div> */}
        <section className={styles.blogContainer} aria-label="ブログ記事一覧">
          {articles.map((post, index) => (
            <Link
              key={index}
              href={post.url}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.blogPostLink}
            >
              <article className={styles.blogPost}>
                <h2 className={styles.blogTitle}>{post.title}</h2>
                <time className={styles.blogDate} dateTime={post.published_at}>
                  {post.display_published_at}
                </time>
              </article>
            </Link>
          ))}
        </section>
      </div>
    </main>
  );
};
