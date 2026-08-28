import React from "react";
import Aurora from "../Aurora";
import styles from "./PageHero.module.css";

interface PageHeroProps {
  eyebrow: string;
  title: React.ReactNode;
  lede: string;
  /** Optional trailing content such as quick stats or filters. */
  children?: React.ReactNode;
  id?: string;
}

/**
 * Translucent masthead shared by every inner page.
 */
export default function PageHero({ eyebrow, title, lede, children, id }: PageHeroProps) {
  return (
    <section className={`${styles.hero} aurora-host grid-overlay`} id={id}>
      <Aurora variant="light" />

      <div className={`container ${styles.inner}`}>
        <span className={`eyebrow-pill ${styles.eyebrow}`}>{eyebrow}</span>
        <h1 className={styles.title}>{title}</h1>
        <p className={styles.lede}>{lede}</p>
        {children}
      </div>
    </section>
  );
}
