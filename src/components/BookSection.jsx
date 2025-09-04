'use client'
import Image from "next/image";
import Link from "next/link";
import styles from "../styles/BookSection.module.css";
import { useEffect, useRef } from "react";


const books = [
 
  {
    title: "Die Qualia der Anderen; Bewusstsein und Schizophrenie",
    image: "/bewusstseinUndSchizophrenie.webp",
    link: "https://www.amazon.de/dp/B0FPR9MGPQ/ref=sr_1_1?crid=3TR5WABXACMFA&dib=eyJ2IjoiMSJ9.M4Nw2OFQgmH2W1x2Xq6aMylthwh1A7crPWx8p1PbI1f10w_mHJcnnB2v8GOIGG4okMAmnvqconVT3Z4v7gBHYa5_XoG0mp8DuO-jy_JVInP-uaW3sBqBbpR2DYZ5X5uCGPnAGYbG9_T_ePv8JRzwty0nnz_We9wwqJAY2vIKvnRlf_hfBtnxKuOM8vUnNrl9PSgbdF2_V_7aafT5VuHrGbR4zr9GsMIsyCuNN7xbF-4.yZnJSQyyyuCdQG6fnNo97qWYkuzwJnohYnDLzqiS1tY&dib_tag=se&keywords=schizophrenie+bruno+baumgartner&qid=1757009951&sprefix=schizophrenie%2Caps%2C110&sr=8-1",
  },
  {
    title: "Durch die Dunkelheit ins Licht; Spirituelle Heilung in der Schizophrenie",
    image: "/dunkelheit.webp",
    link: "https://www.amazon.de/Durch-die-Dunkelheit-Licht-Schizophrenie/dp/B0DSJWNQFV/ref=sr_1_6?crid=3TR5WABXACMFA&dib=eyJ2IjoiMSJ9.M4Nw2OFQgmH2W1x2Xq6aMylthwh1A7crPWx8p1PbI1f10w_mHJcnnB2v8GOIGG4okMAmnvqconVT3Z4v7gBHYa5_XoG0mp8DuO-jy_JVInP-uaW3sBqBbpR2DYZ5X5uCGPnAGYbG9_T_ePv8JRzwty0nnz_We9wwqJAY2vIKvnRlf_hfBtnxKuOM8vUnNrl9PSgbdF2_V_7aafT5VuHrGbR4zr9GsMIsyCuNN7xbF-4.yZnJSQyyyuCdQG6fnNo97qWYkuzwJnohYnDLzqiS1tY&dib_tag=se&keywords=schizophrenie+bruno+baumgartner&qid=1757009951&sprefix=schizophrenie%2Caps%2C110&sr=8-6",
  },
  {
    title: "Mein Weg zur inneren Balance; Arbeitsbuch für den Alltag mit Schizophrenie",
    image: "/Arbeitsbuch.webp",
    link: "https://www.amazon.de/Mein-Weg-inneren-Balance-Schizophrenie/dp/B0F5MGGPG2/ref=sr_1_4?crid=3TR5WABXACMFA&dib=eyJ2IjoiMSJ9.M4Nw2OFQgmH2W1x2Xq6aMylthwh1A7crPWx8p1PbI1f10w_mHJcnnB2v8GOIGG4okMAmnvqconVT3Z4v7gBHYa5_XoG0mp8DuO-jy_JVInP-uaW3sBqBbpR2DYZ5X5uCGPnAGYbG9_T_ePv8JRzwty0nnz_We9wwqJAY2vIKvnRlf_hfBtnxKuOM8vUnNrl9PSgbdF2_V_7aafT5VuHrGbR4zr9GsMIsyCuNN7xbF-4.yZnJSQyyyuCdQG6fnNo97qWYkuzwJnohYnDLzqiS1tY&dib_tag=se&keywords=schizophrenie+bruno+baumgartner&qid=1757009951&sprefix=schizophrenie%2Caps%2C110&sr=8-4",
  },
  {
    title: "Schizophrenie, Ernährung und Diät; Schritt für Schirtt in Richtung Ernährungspsychiatrie",
    image: "/Ernährung.webp",
    link: "https://www.amazon.de/Schizophrenie-Ern%C3%A4hrung-Di%C3%A4t-Ern%C3%A4hrungs-Psychiatrie/dp/B0F4PJZB1P/ref=sr_1_5?crid=3TR5WABXACMFA&dib=eyJ2IjoiMSJ9.M4Nw2OFQgmH2W1x2Xq6aMylthwh1A7crPWx8p1PbI1f10w_mHJcnnB2v8GOIGG4okMAmnvqconVT3Z4v7gBHYa5_XoG0mp8DuO-jy_JVInP-uaW3sBqBbpR2DYZ5X5uCGPnAGYbG9_T_ePv8JRzwty0nnz_We9wwqJAY2vIKvnRlf_hfBtnxKuOM8vUnNrl9PSgbdF2_V_7aafT5VuHrGbR4zr9GsMIsyCuNN7xbF-4.yZnJSQyyyuCdQG6fnNo97qWYkuzwJnohYnDLzqiS1tY&dib_tag=se&keywords=schizophrenie+bruno+baumgartner&qid=1757009951&sprefix=schizophrenie%2Caps%2C110&sr=8-5",
  },
];


export default function BooksSection() {
  const containerRef = useRef(null);

  useEffect(() => {
    const cards = containerRef.current.querySelectorAll(`.${styles.card}`);

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add(styles.visible);
            observer.unobserve(entry.target);
          }
        });
      },
      {
        threshold: 0.1,
      }
    );

    cards.forEach((card) => {
      observer.observe(card);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <section className={styles.booksSection} id="books">
      <h2 className={styles.heading}>Meine Bücher</h2>
      <p className={styles.shop}>Mit einem Klick zum Shop</p>
      <div className={styles.grid} ref={containerRef}>
        {books.map((book, index) => (
          <a
            key={index}
            href={book.link}
            target="_blank"
            rel="noopener noreferrer"
            className={styles.card}
            style={{ animationDelay: `${index * 150}ms` }} // Delay pro Karte
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
    </section>
  );
}
