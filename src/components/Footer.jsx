import styles from "../styles/Footer.module.css";
import Link from "next/link";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.column}>
          <h3 className={styles.title}>Bruno Baumgartner</h3>
          <p className={styles.tagline}>Klarheit. Heilung. Bewusstsein.</p>
        </div>

        <div className={styles.column}>
          <h4 className={styles.subtitle}>Navigation</h4>
          <ul className={styles.links}>
            <li><Link href="/">Home</Link></li>
            <li><Link href="#books">Bücher</Link></li>
             <li><Link href="#newBooks">Neuerscheinung</Link></li>
            <li><Link href="#blog">Blog</Link></li>
            <li><Link href="#about">Autor</Link></li>
            <li><Link href="#about-books">Über die Bücher</Link></li>
          </ul>
        </div>

        <div className={styles.column}>
          <h4 className={styles.subtitle}>Rechtliches</h4>
          <ul className={styles.links}>
            <li><Link href="/impressum">Impressum</Link></li>
            <li><Link href="/datenschutz">Datenschutz</Link></li>
          </ul>
        </div>
      </div>

      <div className={styles.bottom}>
        <p>&copy; {year} Bruno Baumgartner · Alle Rechte vorbehalten</p>
      </div>
    </footer>
  );
}
