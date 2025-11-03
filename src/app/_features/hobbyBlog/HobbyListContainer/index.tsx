import Link from "next/link";
import Image from "next/image";
import styles from "./styles.module.css";
import { Header } from "@/app/_components/Header";
import type { HobbyArticleMeta } from "@/app/blog/hobby/_lib/types";
import { ReactNode } from "react";

type Props = {
  articles: HobbyArticleMeta[];
};

export const HobbyListContainer = ({ articles }: Props): ReactNode => {
  return (
    <main className={styles.section}>
      <div className={styles.sectionContent}>
        <Header title="ブログ一覧" />
        <section className={styles.list} aria-label="趣味ブログ記事一覧">
          {articles.map((a, index) => (
            <Link
              key={index}
              href={`/blog/hobby/${a.slug}`}
              className={styles.postLink}
            >
              <article className={styles.postCard}>
                {a.thumbnail && (
                  <div className={styles.thumb}>
                    <Image src={a.thumbnail} alt={a.title} fill />
                  </div>
                )}
                <h2 className={styles.title}>{a.title}</h2>
                <time className={styles.date} dateTime={a.date}>
                  {a.date}
                </time>
                {a.summary && <p className={styles.summary}>{a.summary}</p>}
              </article>
            </Link>
          ))}
        </section>
      </div>
    </main>
  );
};
