import Link from "next/link";
import styles from "./not-found.module.css";

export default function NotFound() {
  return (
    <main className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.code}>404</h1>
        <h2 className={styles.title}>ページが見つかりません</h2>
        <p className={styles.message}>
          お探しのページは存在しないか、
          <br />
          移動または削除された可能性があります。
        </p>
        <Link href="/" className={styles.link}>
          ホームに戻る
        </Link>
      </div>
    </main>
  );
}
