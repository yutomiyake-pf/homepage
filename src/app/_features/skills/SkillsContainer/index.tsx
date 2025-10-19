import { ReactNode } from "react";
import styles from "./styles.module.css";
import { Header } from "@/app/_components/Header";
import { Item } from "../Item";
import { skillItems } from "../type";

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
            <ul className={styles.skillsList}>
              {skills.map((skill, index) => (
                <Item key={`skill-${index}`} name={skill.name} type="skill" />
              ))}
            </ul>
          </section>

          <section className={styles.certificationsSection}>
            <h2 className={styles.categoryTitle}>資格</h2>
            <ul className={styles.certificationsList}>
              {certifications.map((cert, index) => (
                <Item
                  key={`cert-${index}`}
                  name={cert.name}
                  type="certification"
                />
              ))}
            </ul>
          </section>
        </div>
      </div>
    </main>
  );
};
