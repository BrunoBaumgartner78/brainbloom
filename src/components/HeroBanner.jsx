'use client';

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import styles from "../styles/HeroFull.module.css";

export default function HeroFull() {
  const [comets, setComets] = useState([]);

  useEffect(() => {
    const cometCount = 15;
    const generated = Array.from({ length: cometCount }, (_, i) => ({
      id: i,
      top: Math.random() * 100 + '%',
      left: Math.random() * 100 + '%',
      delay: Math.random() * 10, // Sekunden
    }));
    setComets(generated);
  }, []);

  return (
    <section className={styles.heroSection}>
      <Image
        src="/brainbloom.webp"
        alt="Hero"
        fill
        sizes="100vw"
        className={styles.heroImage}
        priority
      />
      <div className={styles.overlay} />

      {/* Kometenschauer */}
      <div className={styles.cometRain}>
        {comets.map((comet) => (
          <div
            key={comet.id}
            className={styles.comet}
            style={{
              top: comet.top,
              left: comet.left,
              animationDelay: `${comet.delay}s`,
            }}
          />
        ))}
      </div>

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
