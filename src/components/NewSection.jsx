"use client"; // wichtig für Hooks

import { useEffect, useState } from "react";
import Image from "next/image";
import styles from "../styles/BookSection.module.css";

const books = [
  {
    title: "Liebe im Schatten; Über Schizophrenie Verlust und die Kraft des Herzens",
    image: "/Liebe.webp",
    link: "https://www.amazon.de/Liebe-Schatten-Schizophrenie-Verlust-Herzens/dp/B0FPCXGKYQ/ref=sr_1_3?crid=3TR5WABXACMFA&dib=eyJ2IjoiMSJ9.M4Nw2OFQgmH2W1x2Xq6aMylthwh1A7crPWx8p1PbI1f10w_mHJcnnB2v8GOIGG4okMAmnvqconVT3Z4v7gBHYa5_XoG0mp8DuO-jy_JVInP-uaW3sBqBbpR2DYZ5X5uCGPnAGYbG9_T_ePv8JRzwty0nnz_We9wwqJAY2vIKvnRlf_hfBtnxKuOM8vUnNrl9PSgbdF2_V_7aafT5VuHrGbR4zr9GsMIsyCuNN7xbF-4.yZnJSQyyyuCdQG6fnNo97qWYkuzwJnohYnDLzqiS1tY&dib_tag=se&keywords=schizophrenie+bruno+baumgartner&qid=1757009951&sprefix=schizophrenie%2Caps%2C110&sr=8-3",
  },
];

export default function NewSection() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    function onScroll() {
      const top = window.scrollY + window.innerHeight;
      const element = document.getElementById("newBooks");
      if (element) {
        const offsetTop = element.offsetTop;
        if (top > offsetTop + 100) { // 100px Puffer, damit es etwas früher startet
          setVisible(true);
        }
      }
    }

    window.addEventListener("scroll", onScroll);
    onScroll(); // initial check

    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <section className={styles.booksSection} id="newBooks">
      <h2 className={styles.heading}>Neuerscheinung</h2>
      <p className={styles.shop}>Mit einem Klick zum Shop</p>
      <div className={styles.grid}>
        {books.map((book, index) => (
          <a
            key={index}
            href={book.link}
            target="_blank"
            rel="noopener noreferrer"
            className={`${styles.card} ${visible ? styles.visible : ""}`}
          >
            <div>
              <Image
                src={book.image}
                alt={book.title}
                width={200}
                height={300}
                className={styles.image}
              />
              <p className={styles.title}>{book.title}</p>
            </div>
          </a>
        ))}
      </div>
      <p className={styles.new}>
  Dieses Buch erzählt von einer besonderen Reise – von Liebe, die auch im
  Schatten von Schizophrenie weiterlebt, von Verlust, der das Herz bricht, und
  von der Kraft, die sich daraus neu entfalten kann.
</p>
<p className={styles.new}>
  Es ist die Geschichte von Zerbrechlichkeit und Stärke zugleich, von Momenten
  tiefer Dunkelheit und von der Liebe, die immer wieder einen Weg findet, Licht
  in das Leben zu bringen.
</p>
<p className={styles.new}>
  „Liebe im Schatten“ lädt dazu ein, den Blick nicht nur auf Krankheit und
  Schmerz zu richten, sondern auf die Möglichkeiten von Nähe, Zärtlichkeit und
  Mitgefühl – auch dort, wo die Gesellschaft oft Distanz schafft.
</p>
<p className={styles.new}>
  Dieses Buch ist ein Plädoyer für Menschlichkeit, für das Verständnis füreinander
  und für die Hoffnung, dass die Kraft des Herzens selbst im größten Zerfall
  noch tragen und heilen kann.
</p>

    </section>
  );
}
