import { ReactNode } from "react";
import styles from "./styles.module.css";

type Props = {
  name: string;
  type: "skill" | "certification";
};

export const Item = ({ name, type }: Props): ReactNode => {
  if (type === "skill") {
    return <li className={styles.skillItem}>{name}</li>;
  }

  return (
    <li className={styles.certificationItem}>
      <span className={styles.certificationIcon} aria-hidden="true">
        ✓
      </span>
      {name}
    </li>
  );
};
