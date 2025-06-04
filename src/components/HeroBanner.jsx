"use client"

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import styles from "../styles/HeroFull.module.css";

const commentsList = [
  "Toller Inhalt!",
  "Inspirierend!",
  "Danke für deine Arbeit!",
  "Sehr bewegend!",
  "Ich liebe diesen Ansatz.",
  "Mehr davon bitte!",
];

function getRandomComment() {
  const index = Math.floor(Math.random() * commentsList.length);
  return commentsList[index];
}

function getRandomX() {
  return Math.random() * 90 + 5; // zwischen 5% und 95%
}

export default function HeroFull() {
  const [comments, setComments] = useState([]);

  useEffect(() => {
    const interval = setInterval(() => {
      const newComment = {
        id: Date.now(),
        text: getRandomComment(),
        x: getRandomX(),
      };
      setComments(prev => [...prev, newComment]);

      // Kommentare nach einer Weile entfernen
      setTimeout(() => {
        setComments(prev => prev.filter(c => c.id !== newComment.id));
      }, 5000);
    }, 1500); // alle 1.5s ein neuer Kommentar

    return () => clearInterval(interval);
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

      {/* Kommentar-Schauer */}
      <div className={styles.commentShower}>
        {comments.map(comment => (
          <div
            key={comment.id}
            className={styles.comment}
            style={{ left: `${comment.x}%` }}
          >
            {comment.text}
          </div>
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
          <button className={styles.button}>Mehr erfahren</button>
        </Link>
      </div>
    </section>
  );
}
