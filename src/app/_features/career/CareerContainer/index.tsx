import { ReactNode } from "react";
import styles from "./styles.module.css";
import { Header } from "@/app/_components/Header";

export const CareerContainer = (): ReactNode => {
  const careers = [
    {
      period: "2020年 - 現在",
      company: "テック株式会社",
      position: "シニアエンジニア",
      description:
        "Next.js、TypeScriptを使用した大規模Webアプリケーションの開発をリード",
      isSideJob: false,
    },
    {
      period: "2022年 - 現在",
      company: "スタートアップ支援",
      position: "テクニカルアドバイザー",
      description: "技術選定とアーキテクチャ設計のコンサルティング",
      isSideJob: true,
    },
    {
      period: "2017年 - 2020年",
      company: "ソフトウェア開発株式会社",
      position: "フロントエンドエンジニア",
      description:
        "React、Vueを使用したSPA開発、UIコンポーネントライブラリの構築",
      isSideJob: false,
    },
    {
      period: "2019年 - 2020年",
      company: "フリーランス案件",
      position: "Webデベロッパー",
      description: "中小企業向けWebサイト制作とシステム開発",
      isSideJob: true,
    },
    {
      period: "2014年 - 2017年",
      company: "Web制作会社",
      position: "Webデベロッパー",
      description: "HTML、CSS、JavaScriptを使用したWebサイト制作",
      isSideJob: false,
    },
  ];

  return (
    <main className={styles.section}>
      <div className={styles.sectionContent}>
        <Header title="経歴" />
        <section className={styles.careerContainer}>
          {careers.map((career, index) => (
            <article key={index} className={styles.careerItem}>
              <time className={styles.careerPeriod} dateTime={career.period}>
                {career.period}
              </time>
              <div className={styles.careerDetails}>
                <div className={styles.careerHeader}>
                  <h2 className={styles.careerCompany}>{career.company}</h2>
                  {career.isSideJob && (
                    <span className={styles.sideJobTag} aria-label="副業">
                      副業
                    </span>
                  )}
                </div>
                <h3 className={styles.careerPosition}>{career.position}</h3>
                <p className={styles.careerDescription}>{career.description}</p>
              </div>
            </article>
          ))}
        </section>
      </div>
    </main>
  );
};
