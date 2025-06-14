import Image from "next/image";
import styles from "../styles/AuthorSection.module.css";

export default function AuthorSection() {
  return (
    <section className={styles.authorSection} id="about">
      <div className={styles.container}>
        <div className={styles.imageWrapper}>
          <Image
            src="/Author.webp" // 🔁 Ersetze durch dein tatsächliches Bild
            alt="Bruno Baumgartner"
            width={200}
            height={200}
            className={styles.image}
          />
        </div>
        <div className={styles.text}>
          <h2 className={styles.heading}>Über den Autor</h2>
          <p className={styles.bio}>
            Bruno Baumgartner ist Autor, Forscher und Betroffener, der seit über
            25 Jahren mit Schizophrenie lebt. Seine Werke verbinden persönliche
            Erfahrungen mit wissenschaftlichen Erkenntnissen über Psyche,
            Ernährung und spirituelle Entwicklung. Seine Mission: Aufklärung,
            Entstigmatisierung und Inspiration fördern.
          </p>
          <p className={styles.heading}>Meine Bücher ersetzen keine Medizinische oder Therapeutische Behandlung.</p>
          <div className={styles.links}>
            <a href="mailto:bruno@brainbloom.ch" className={styles.link}>
              ✉ Kontakt
            </a>
            <a
              href="https://www.facebook.com/people/Bruno-Baumgartner/pfbid0QftdpxnhsBpEoGZ1mdgNRdDvEwGQ7jVUXwB8qDtyvc2NbXGWdQoUizk3f8cMjL7Xl/?comment_id=Y29tbWVudDoxMTYwNjMyNzQyMDg4MjM1XzU5MjM2MzY3MDI3NzM2NQ%3D%3D"
              className={styles.link}
              target="_blank"
              rel="noopener noreferrer"
            >
              📷 Facebook
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
