"use client";

import { ReactNode } from "react";
import { useState, useEffect } from "react";
import Link from "next/link";

import styles from "./styles.module.css";
import { MdKeyboardArrowDown } from "react-icons/md";

export const TopContainer = (): ReactNode => {
  const [textVisible, setTextVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setTextVisible(true);
    }, 100);

    return () => {
      clearTimeout(timer);
    };
  }, []);

  return (
    <div className={styles.container}>
      <section className={styles.hero}>
        <div className={styles.heroOverlay}>
          <h1
            className={`${styles.heroText} ${
              textVisible ? styles.visible : ""
            }`}
          >
            What do you want?
          </h1>
        </div>
        <Link
          href={"/#menu"}
          className={styles.scrollIndicator}
          aria-label="下にスクロール"
        >
          <span className={styles.scrollText}>Scroll</span>
          <MdKeyboardArrowDown size={30} />
        </Link>
      </section>

      <nav className={styles.menuSection} aria-label="メインメニュー" id="menu">
        <div className={styles.menuContent}>
          <h2 className={styles.menuTitle}>Menu</h2>
          <ul className={styles.menuGrid}>
            <li>
              <Link href="/profile" className={styles.menuItem}>
                <span className={styles.menuLabel}>プロフィール</span>
              </Link>
            </li>
            <li>
              <Link href="/career" className={styles.menuItem}>
                <span className={styles.menuLabel}>経歴</span>
              </Link>
            </li>
            <li>
              <Link href="/skills" className={styles.menuItem}>
                <span className={styles.menuLabel}>資格・スキル</span>
              </Link>
            </li>
            <li>
              <Link href="/portfolio" className={styles.menuItem}>
                <span className={styles.menuLabel}>ポートフォリオ</span>
              </Link>
            </li>
            <li>
              <Link href="/blog" className={styles.menuItem}>
                <span className={styles.menuLabel}>ブログ</span>
              </Link>
            </li>
            <li>
              <Link href="/gallery" className={styles.menuItem}>
                <span className={styles.menuLabel}>ギャラリー</span>
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
};
