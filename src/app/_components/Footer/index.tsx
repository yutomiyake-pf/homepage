import { ReactNode } from "react";
import styles from "./styles.module.css";

export const Footer = (): ReactNode => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className={styles.footer}>
      <p className={styles.copyright}>
        © {currentYear} yutomiyake. All rights reserved.
      </p>
    </footer>
  );
};
