import { ReactNode } from "react";
import styles from "./styles.module.css";
import { Header } from "@/app/_components/Header";

type SkillItem = {
  name: string;
  type: "skill" | "certification";
};

const skillItems: SkillItem[] = [
  // 開発スキル
  { name: "React", type: "skill" },
  { name: "Next.js", type: "skill" },
  { name: "TypeScript", type: "skill" },
  { name: "Vue.js", type: "skill" },
  { name: "HTML5", type: "skill" },
  { name: "CSS3", type: "skill" },
  { name: "Node.js", type: "skill" },
  { name: "Python", type: "skill" },
  { name: "PostgreSQL", type: "skill" },
  { name: "MongoDB", type: "skill" },
  { name: "GraphQL", type: "skill" },
  { name: "REST API", type: "skill" },
  { name: "AWS", type: "skill" },
  { name: "Docker", type: "skill" },
  { name: "Kubernetes", type: "skill" },
  { name: "Vercel", type: "skill" },
  { name: "GitHub Actions", type: "skill" },
  { name: "CI/CD", type: "skill" },
  // 資格
  {
    name: "AWS認定ソリューションアーキテクト - アソシエイト",
    type: "certification",
  },
  { name: "基本情報技術者試験", type: "certification" },
  { name: "応用情報技術者試験", type: "certification" },
  { name: "TOEIC 850点", type: "certification" },
];

const SkillItem = ({ item }: { item: SkillItem }): ReactNode => {
  if (item.type === "skill") {
    return <li className={styles.skillItem}>{item.name}</li>;
  }

  return (
    <li className={styles.certificationItem}>
      <span className={styles.certificationIcon} aria-hidden="true">
        ✓
      </span>
      {item.name}
    </li>
  );
};

export const SkillsContainer = (): ReactNode => {
  const skills = skillItems.filter((item) => item.type === "skill");
  const certifications = skillItems.filter(
    (item) => item.type === "certification"
  );

  return (
    <main className={styles.section}>
      <div className={styles.sectionContent}>
        <Header title="資格・スキル" />

        <div className={styles.skillsContainer}>
          <section className={styles.skillsSection}>
            <h2 className={styles.categoryTitle}>開発スキル</h2>
            <ul className={styles.skillsList} aria-label="開発スキル一覧">
              {skills.map((skill, index) => (
                <SkillItem key={`skill-${index}`} item={skill} />
              ))}
            </ul>
          </section>

          <section className={styles.certificationsSection}>
            <h2 className={styles.categoryTitle}>資格</h2>
            <ul className={styles.certificationsList}>
              {certifications.map((cert, index) => (
                <SkillItem key={`cert-${index}`} item={cert} />
              ))}
            </ul>
          </section>
        </div>
      </div>
    </main>
  );
};
