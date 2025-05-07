import Link from "next/link";
import styles from "@/styles/BlogPage.module.css"; // CSS-Modul importieren

export default function BlogCard({ post }) {
  return (
    <div className={styles.card}> {/* Hier: styles.card verwenden */}
      <img src={post.image} alt={post.title} />
      <h2>{post.title}</h2>
      <p>{post.description}</p>
      <Link href={`/blog/posts/${post.slug}`}>Weiterlesen</Link>
    </div>
  );
}
