// src/components/HeroFull.jsx

import Image from "next/image";
import Link from "next/link";
import styles from "../styles/HeroFull.module.css";

export default function HeroFull() {
  return (
    <section className={styles.heroSection}>
      <Image
        src="/brainbloom.png"
        alt="Hero"
        fill
        sizes="100vw"
        className={styles.heroImage}
        priority
      />
      <div className={styles.overlay} />
      <div className={styles.content}>
        <h1 className={styles.title}>
          Willkommen auf der offiziellen Seite von Bruno Baumgartner
        </h1>
        <p className={styles.subtitle}>
          Eine Reise zu Klarheit, Heilung und Bewusstsein
        </p>
        <Link href="/blog">
          <button className={styles.button}>
            Mehr erfahren
          </button>
        </Link>
      </div>
    </section>
  );
}
