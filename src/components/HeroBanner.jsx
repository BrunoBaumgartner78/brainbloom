'use client';

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import styles from "../styles/HeroFull.module.css";

export default function HeroFull() {
  const [comets, setComets] = useState([]);
  const [animateTitle, setAnimateTitle] = useState(false);

  // Titel in 3 Zeilen aufgeteilt
  const titleLines = [
    "Offizielle Seite des",
    "Autoren Bruno",
    "Baumgartner"
  ];

  useEffect(() => {
    const cometCount = 15;
    const generated = Array.from({ length: cometCount }, (_, i) => ({
      id: i,
      top: Math.random() * 100 + '%',
      left: Math.random() * 100 + '%',
      delay: Math.random() * 10,
    }));
    setComets(generated);

    // Preloader-Simulation: Starte Animation nach 2 Sekunden
    const timer = setTimeout(() => {
      setAnimateTitle(true);
    }, 2000);

    return () => clearTimeout(timer);
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
          {titleLines.map((line, lineIndex) => (
            <div key={lineIndex} className={styles.titleLine}>
              {line.split("").map((char, index) => (
                <span
                  key={index}
                  className={`${styles.char} ${animateTitle ? styles.animate : ""}`}
                  style={{ animationDelay: `${(lineIndex * 10 + index) * 0.05}s` }}
                >
                  {char === " " ? "\u00A0" : char}
                </span>
              ))}
            </div>
          ))}
        </h1>
        <p className={styles.subtitle}>
          Eine Reise zu Klarheit, Reflexion und Bewusstsein
        </p>
        <Link href="/blog">
          <button className={styles.button}>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            Mehr erfahren
          </button>
        </Link>
      </div>
    </section>
  );
}
