import Link from "next/link";
import { ReactNode } from "react";

import styles from "./styles.module.css";

type Props = {
  title: string;
  backLabel?: string;
  href?: string;
};

export const Header = ({
  title,
  href = "/#menu",
  backLabel = "← メニューに戻る",
}: Props): ReactNode => {
  return (
    <>
      <Link href={href} className={styles.backButton} aria-label={backLabel}>
        {backLabel}
      </Link>
      <header>
        <h1 className={styles.sectionTitle}>{title}</h1>
      </header>
    </>
  );
};
