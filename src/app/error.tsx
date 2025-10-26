"use client";

import { useEffect } from "react";
import Link from "next/link";
import styles from "./error.module.css";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    // エラーをログに記録
    console.error(error);
  }, [error]);

  return (
    <main className={styles.container}>
      <div className={styles.content}>
        <h2 className={styles.title}>エラーが発生しました</h2>
        <p className={styles.message}>
          申し訳ございません。
          <br />
          予期しないエラーが発生しました。
        </p>
        <div className={styles.actions}>
          <button onClick={reset} className={styles.button}>
            もう一度試す
          </button>
          <Link href="/" className={styles.link}>
            ホームに戻る
          </Link>
        </div>
      </div>
    </main>
  );
}
