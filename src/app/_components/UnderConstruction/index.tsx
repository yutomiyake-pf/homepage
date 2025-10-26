import { ReactNode } from "react";
import styles from "./styles.module.css";
import { Header } from "@/app/_components/Header";
import { FaHardHat } from "react-icons/fa";

type Props = {
  pageName: string;
};

export const UnderConstruction = ({ pageName }: Props): ReactNode => {
  return (
    <main className={styles.section}>
      <div className={styles.sectionContent}>
        <Header title={pageName} />
        <section className={styles.constructionContainer}>
          <div className={styles.constructionIcon}>
            <FaHardHat size={80} />
          </div>
          <h2 className={styles.constructionTitle}>工事中です</h2>
          <p className={styles.constructionMessage}>
            このページは現在準備中です。
            <br />
            しばらくお待ちください。
          </p>
        </section>
      </div>
    </main>
  );
};
