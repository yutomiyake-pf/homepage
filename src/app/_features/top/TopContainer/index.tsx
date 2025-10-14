"use client";

import { ReactNode } from "react";
import { useState, useEffect } from "react";
import Link from "next/link";

import styles from "./styles.module.css";
import { MdKeyboardArrowDown } from "react-icons/md";
import { Menu } from "../Menu";

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
          <MdKeyboardArrowDown size={30} className={styles.scrollArrow} />
        </Link>
      </section>

      <Menu />
    </div>
  );
};
