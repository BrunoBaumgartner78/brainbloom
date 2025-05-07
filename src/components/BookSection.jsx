import Image from "next/image";
import Link from "next/link";
import styles from "../styles/BookSection.module.css";

const books = [
  {
    title: "Die Qualia der Anderen Teil 1",
    image: "/bewusstseinBewusstsein.webp",
    link: "https://www.amazon.de/Die-Qualia-Anderen-Das-Bewusstsein/dp/B0DSJV3FLM/ref=sr_1_5?crid=35PLBN36GK1LB&dib=eyJ2IjoiMSJ9.qCfAh__VzJMFegW1THNcc3E2BbGq85WqpWixgyD937mSzO0zvtupoXlUoE5aK8s7Cl1K20QRFvlQZeKBztkBgnjJrETS_M-H5zZaJKRD6Uy3Ru9-GxbG9wQWaz4tz2ku3-J5L04OgrNwtN3ZUFLPHlXCriIgvhGMVcQ9LPd7dSbQ5SyCiVAougZiX74oHzqu1ixlEo2L2qNzcduGQIwaz9JaAc7rkz50Ov86TUCbRWY.rl6jPzIHBJ-jXUBtrHp10sHSaWMZAgx3ATs0aoa9HYM&dib_tag=se&keywords=bruno+baumgartner+schizophrenie&qid=1746369445&sprefix=bruno+baumgartner%2Caps%2C118&sr=8-5",
  },
  {
    title: "Die Qualia der Anderen Teil 2",
    image: "/nochBewusster.webp",
    link: "https://www.amazon.de/Die-Qualia-Anderen-Das-Bewusstsein/dp/B0DSJXV8RF/ref=sr_1_6?crid=35PLBN36GK1LB&dib=eyJ2IjoiMSJ9.qCfAh__VzJMFegW1THNcc3E2BbGq85WqpWixgyD937mSzO0zvtupoXlUoE5aK8s7Cl1K20QRFvlQZeKBztkBgnjJrETS_M-H5zZaJKRD6Uy3Ru9-GxbG9wQWaz4tz2ku3-J5L04OgrNwtN3ZUFLPHlXCriIgvhGMVcQ9LPd7dSbQ5SyCiVAougZiX74oHzqu1ixlEo2L2qNzcduGQIwaz9JaAc7rkz50Ov86TUCbRWY.rl6jPzIHBJ-jXUBtrHp10sHSaWMZAgx3ATs0aoa9HYM&dib_tag=se&keywords=bruno+baumgartner+schizophrenie&qid=1746369445&sprefix=bruno+baumgartner%2Caps%2C118&sr=8-6",
  },
  {
    title: "Die Qualia der Anderen Teil 3",
    image: "/bewusstseinUndSchizophrenie.webp",
    link: "https://www.amazon.de/Die-Qualia-Anderen-Bewusstsein-Schizophrenie/dp/B0DSJVV5DZ/ref=sr_1_4?crid=35PLBN36GK1LB&dib=eyJ2IjoiMSJ9.qCfAh__VzJMFegW1THNcc3E2BbGq85WqpWixgyD937mSzO0zvtupoXlUoE5aK8s7Cl1K20QRFvlQZeKBztkBgnjJrETS_M-H5zZaJKRD6Uy3Ru9-GxbG9wQWaz4tz2ku3-J5L04OgrNwtN3ZUFLPHlXCriIgvhGMVcQ9LPd7dSbQ5SyCiVAougZiX74oHzqu1ixlEo2L2qNzcduGQIwaz9JaAc7rkz50Ov86TUCbRWY.rl6jPzIHBJ-jXUBtrHp10sHSaWMZAgx3ATs0aoa9HYM&dib_tag=se&keywords=bruno+baumgartner+schizophrenie&qid=1746369445&sprefix=bruno+baumgartner%2Caps%2C118&sr=8-4",
  },
  {
    title: "Durch die Dunkelheit ins Licht",
    image: "/dunkelheit.webp",
    link: "https://www.amazon.de/Durch-die-Dunkelheit-Licht-Schizophrenie/dp/B0DSJWNQFV/ref=sr_1_2?crid=35PLBN36GK1LB&dib=eyJ2IjoiMSJ9.qCfAh__VzJMFegW1THNcc3E2BbGq85WqpWixgyD937mSzO0zvtupoXlUoE5aK8s7Cl1K20QRFvlQZeKBztkBgnjJrETS_M-H5zZaJKRD6Uy3Ru9-GxbG9wQWaz4tz2ku3-J5L04OgrNwtN3ZUFLPHlXCriIgvhGMVcQ9LPd7dSbQ5SyCiVAougZiX74oHzqu1ixlEo2L2qNzcduGQIwaz9JaAc7rkz50Ov86TUCbRWY.rl6jPzIHBJ-jXUBtrHp10sHSaWMZAgx3ATs0aoa9HYM&dib_tag=se&keywords=bruno+baumgartner+schizophrenie&qid=1746369445&sprefix=bruno+baumgartner%2Caps%2C118&sr=8-2",
  },
  {
    title: "Mein Weg zur inneren Balance",
    image: "/Arbeitsbuch.webp",
    link: "https://www.amazon.de/Mein-Weg-inneren-Balance-Schizophrenie/dp/B0F5MGGPG2/ref=sr_1_3?crid=35PLBN36GK1LB&dib=eyJ2IjoiMSJ9.qCfAh__VzJMFegW1THNcc3E2BbGq85WqpWixgyD937mSzO0zvtupoXlUoE5aK8s7Cl1K20QRFvlQZeKBztkBgnjJrETS_M-H5zZaJKRD6Uy3Ru9-GxbG9wQWaz4tz2ku3-J5L04OgrNwtN3ZUFLPHlXCriIgvhGMVcQ9LPd7dSbQ5SyCiVAougZiX74oHzqu1ixlEo2L2qNzcduGQIwaz9JaAc7rkz50Ov86TUCbRWY.rl6jPzIHBJ-jXUBtrHp10sHSaWMZAgx3ATs0aoa9HYM&dib_tag=se&keywords=bruno+baumgartner+schizophrenie&qid=1746369445&sprefix=bruno+baumgartner%2Caps%2C118&sr=8-3",
  },
  {
    title: "Schizophrenie, Ernährung und Diät",
    image: "/Ernährung.webp",
    link: "https://www.amazon.de/Schizophrenie-Ern%C3%A4hrung-Di%C3%A4t-Ern%C3%A4hrungs-Psychiatrie/dp/B0F4PJZB1P/ref=sr_1_1?crid=35PLBN36GK1LB&dib=eyJ2IjoiMSJ9.qCfAh__VzJMFegW1THNcc3E2BbGq85WqpWixgyD937mSzO0zvtupoXlUoE5aK8s7Cl1K20QRFvlQZeKBztkBgnjJrETS_M-H5zZaJKRD6Uy3Ru9-GxbG9wQWaz4tz2ku3-J5L04OgrNwtN3ZUFLPHlXCriIgvhGMVcQ9LPd7dSbQ5SyCiVAougZiX74oHzqu1ixlEo2L2qNzcduGQIwaz9JaAc7rkz50Ov86TUCbRWY.rl6jPzIHBJ-jXUBtrHp10sHSaWMZAgx3ATs0aoa9HYM&dib_tag=se&keywords=bruno+baumgartner+schizophrenie&qid=1746369445&sprefix=bruno+baumgartner%2Caps%2C118&sr=8-1",
  },
];

export default function BooksSection() {
  return (
    <section className={styles.booksSection} id="books">
      <h2 className={styles.heading}>Meine Bücher</h2>
      <div className={styles.grid}>
        {books.map((book, index) => (
          <a
            key={index}
            href={book.link}
            target="_blank"
            rel="noopener noreferrer"
            className={styles.card}
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
