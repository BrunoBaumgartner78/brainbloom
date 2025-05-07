import Link from "next/link";
import Image from "next/image";
import styles from "../styles/BlogPreviewSection.module.css";

const blogPosts = [
  {
    title: "Leaky Gut und Schizophrenie: Eine unterschätzte Verbindung?",
    slug: "posts/leaky-gut-und-schizophrenie-eine-unterschaetzte-verbindung",
    excerpt: "In den letzten Jahren hat die Wissenschaft zunehmend die Bedeutung des Darms als «zweites Gehirn» erkannt. Besonders das Konzept des «Leaky Gut Syndroms» – einer gestörten Darmbarriere – hat Aufmerksamkeit erlangt. Aber welche Rolle spielt ein durchlässiger Darm bei Schizophrenie, und wie könnte die Gesundheit des Darms die psychische Gesundheit beeinflussen?",
    image: "/LeakyGut.webp",
  },
  {
    
    title: "Schizophrenie und Darmgesundheit: Die wichtige Rolle des Mikrobioms bei psychischen Erkrankungen",
    slug: "posts/schizophrenie-darm-psyche",
    excerpt: "Die Forschung der letzten Jahre hat immer wieder überraschende Verbindungen zwischen der Darmgesundheit und psychischen Störungen wie Schizophrenie aufgezeigt. Dieses sogenannte Mikrobiom-Darm-Hirn-Achse-Konzept legt nahe, dass der Zustand unseres Darms direkten Einfluss auf unser Gehirn und unsere mentale Gesundheit haben kann. Doch wie genau hängt der Darm mit Schizophrenie zusammen, und welche Maßnahmen können helfen, das Gleichgewicht im Körper wiederherzustellen?",
    image: "/Mikrobiome.webp",
  },
  {
    title: "Schizophrenie und Dysbiose: Wie ein gestörtes Mikrobiom die Psyche beeinflusst",
    slug: "posts/schizophrenie-und-dysbiose",
    excerpt: "Die moderne Forschung entdeckt immer mehr Zusammenhänge zwischen psychischen Störungen und der Gesundheit des Darms. Besonders die Verbindung zwischen Schizophrenie und Dysbiose, einer Störung des Mikrobioms, rückt zunehmend in den Fokus.",
    image: "/Darm.webp",
  },
];

export default function BlogPreviewSection() {
  return (
    <section className={styles.blogPreviewSection} id="blog">
      <h2 className={styles.heading}>Neu im Blog</h2>
      <div className={styles.grid}>
        {blogPosts.map((post, index) => (
          <Link href={`/blog/${post.slug}`} key={index} className={styles.card}>
            <div>
              <Image
                src={post.image}
                alt={post.title}
                width={400}
                height={250}
                className={styles.image}
              />
              <h3 className={styles.title}>{post.title}</h3>
              <p className={styles.excerpt}>{post.excerpt}</p>
              <span className={styles.readMore}>Weiterlesen →</span>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
