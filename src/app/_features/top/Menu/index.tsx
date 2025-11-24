import Link from "next/link";
import { ReactNode } from "react";

import styles from "./styles.module.css";

type MenuItem = {
  href: string;
  label: string;
};

const menuItems: MenuItem[] = [
  { href: "/profile", label: "プロフィール" },
  { href: "/career", label: "経歴" },
  { href: "/skills", label: "資格・スキル" },
  { href: "/portfolio", label: "ポートフォリオ" },
  { href: "/blog", label: "ブログ" },
];

export const Menu = (): ReactNode => {
  return (
    <nav className={styles.menuSection} aria-label="メインメニュー" id="menu">
      <div className={styles.menuContent}>
        <h2 className={styles.menuTitle}>Menu</h2>
        <ul className={styles.menuGrid}>
          {menuItems.map((item) => (
            <li key={item.href}>
              <Link href={item.href} className={styles.menuItem}>
                <span className={styles.menuLabel}>{item.label}</span>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};
