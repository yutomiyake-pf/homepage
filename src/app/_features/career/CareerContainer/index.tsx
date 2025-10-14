import { ReactNode } from "react";
import styles from "./styles.module.css";
import { Header } from "@/app/_components/Header";

export const CareerContainer = (): ReactNode => {
  const careers = [
    {
      period: "2025年 - 現在",
      company: "TRUNK株式会社",
      position: "エンジニア",
      description:
        "オリジナル研修、資格取得サポートのe-Learningシステムのフロントエンド、バックエンド開発に参画",
      isSideJob: true,
    },
    {
      period: "2024年 - 現在",
      company: "株式会社スーパーハムスター",
      position: "フロントエンドエンジニア",
      description: "主にフロントエンド領域にてスポットで開発業務を担当",
      isSideJob: true,
    },
    {
      period: "2023年 - 現在",
      company: "株式会社ニジボックス（リクルートグループ）",
      position: "フロントエンドエンジニア",
      description:
        "求人メディアの大規模リアーキテクチャプロジェクトにFEメンバーとして参画。オフショア開発にて海外メンバーのソース管理や仕様連携などを行いつつ、NextJSでのフロントエンドのコーディング業務を行う",
      isSideJob: false,
    },
    {
      period: "2023年 - 2024年",
      company: "メンヘラテクノロジー株式会社",
      position: "フロントエンドエンジニア",
      description:
        "生成AIを用いた占いwebアプリの開発などスポットでフロントエンド業務を行う",
      isSideJob: true,
    },
    {
      period: "2022年 - 2023年",
      company: "コアテック株式会社",
      position: "フルスタックエンジニア",
      description:
        "NextJS, TypeScript, GraphQLを用いた新規サービスの立ち上げプロジェクトにフロントエンドエンジニアとして参画。PHP, Laravelを用いたバックエンド API開発にサブメンバーとして参画",
      isSideJob: false,
    },
    {
      period: "2021年 - 2022年",
      company: "エンジャパン株式会社（プライム市場上場）",
      position: "バックエンドエンジニア",
      description: "PHP, CakePHPを使った学生向けの求人サービスの開発に参画",
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
