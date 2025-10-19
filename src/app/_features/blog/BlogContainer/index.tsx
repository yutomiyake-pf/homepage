import { ReactNode } from "react";
import styles from "./styles.module.css";
import { Header } from "@/app/_components/Header";
import Link from "next/link";

export const BlogContainer = (): ReactNode => {
  const posts = [
    {
      title: "Next.js 14の新機能について",
      date: "2024-01-15",
      displayDate: "2024年1月15日",
      url: "https://example.com/nextjs-14-features",
    },
    {
      title: "TypeScriptの型安全性を活かした開発",
      date: "2024-01-10",
      displayDate: "2024年1月10日",
      url: "https://example.com/typescript-type-safety",
    },
    {
      title: "React Server Componentsの実践的な使い方",
      date: "2024-01-05",
      displayDate: "2024年1月5日",
      url: "https://example.com/react-server-components",
    },
  ];

  return (
    <main className={styles.section}>
      <div className={styles.sectionContent}>
        <Header title="ブログ" />
        <section className={styles.blogContainer} aria-label="ブログ記事一覧">
          {posts.map((post, index) => (
            <Link
              key={index}
              href={post.url}
              target="_blank"
              rel="noopener noreferrer"
            >
              <article className={styles.blogPost}>
                <h2 className={styles.blogTitle}>{post.title}</h2>
                <time className={styles.blogDate} dateTime={post.date}>
                  {post.displayDate}
                </time>
              </article>
            </Link>
          ))}
        </section>
      </div>
    </main>
  );
};
