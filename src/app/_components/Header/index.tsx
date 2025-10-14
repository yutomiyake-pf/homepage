import Link from "next/link";
import { ReactNode } from "react";

import styles from "./styles.module.css";

type Props = {
  title: string;
};

export const Header = ({ title }: Props): ReactNode => {
  return (
    <>
      <Link
        href="/#menu"
        className={styles.backButton}
        aria-label="メニューに戻る"
      >
        ← メニューに戻る
      </Link>
      <header>
        <h1 className={styles.sectionTitle}>{title}</h1>
      </header>
    </>
  );
};
