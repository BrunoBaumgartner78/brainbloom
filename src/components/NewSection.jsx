import Image from "next/image";
import Link from "next/link";
import styles from "../styles/BookSection.module.css";

const books = [
  {
    title: "Schizophrenie im Zeitalter der Künstlichen Intelligenz",
    image: "/KI.webp",
    link: "https://www.amazon.de/dp/B0FCC8H6B6/ref=sr_1_2?crid=2BIGPT9AH0RH1&dib=eyJ2IjoiMSJ9.7Pfav19rEHQdqI6wrF_n5WO755GVQb97fvCwHayIQvaTLNOjHZnQJEbAFpwM14CeK32ybFltmqfXQmJzqwV0k57XVA9qHPkgTRgo_q3rUWo5loOysanSDNtAzBr8tNlIl_NuasfiMpLS-QFkd-E4WECFS2rKs4OzALkaqfG4kyr11JCz2SAlmU75EAGw3A0KlKAduPU0kDE_7GrUtS2NnEARPPqCBYoPpVwMj-e4VrE.Ns-_GMWQLbQIe4MA06BX8GCwTo6pX8bydnn-nbcYqa0&dib_tag=se&keywords=schizophrenie+bruno+baumgartner&qid=1749310542&sprefix=schizophrenie%2Caps%2C117&sr=8-2",
  },

];

export default function NewSection() {
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
       <p className={styles.new}>Aktuell wird ein spannendes Kapitel in der Menschheitsgeschichte geschrieben, die Einführung von Künstlicher Intelligenz für die breite Masse.</p>
        <p className={styles.new}>Das erste Mal in der Geschichte ist der Mensch nicht mehr das intelligenteste Wesen auf der Erde, das wirft auch wichtige Fragen für das Leben mit Schizophrenie auf.</p>
       <p className={styles.new}>In diesem Buch gehe ich auf Chancen und Risiken der Künstlichen Intelligenz bezüglich dem Leben mit Schizophrenie ein.</p>
           <p className={styles.new}>Ich betone dabei, dass sich wohl neue Perspektiven bilden, aber warne auch davor, dass von Schizophrenie Betroffene zu Daten verkommen. Ich betone in diesem Buch, dass trotz Innovation die Menschlichkeit und Empathie, die wichtigsten Werkzeuge der Integration bleiben müssen.</p>
    </section>
  );
}
