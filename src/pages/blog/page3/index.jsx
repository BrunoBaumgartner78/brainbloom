// app/page2/page.jsx
import "../../../app/globals.css"; // wenn du `globals.css` aus `src/app` importierst
import styles from "../../../styles/BlogPage.module.css";
import posts from "@/data/posts";
import BlogCard from "@/components/BlogCard";
import Pagination from "@/components/Pagination";

export default function BlogPage3() {
  const pagePosts = posts.slice(40, 60);

  return (
    <main className={styles.main}>
      <h1 className={styles.title}>Blog</h1>
      <div className={styles.grid}>
        {pagePosts.map((post) => (
          <BlogCard key={post.slug} post={post} />
        ))}
      </div>
      <Pagination currentPage={3} totalPages={5} />
    </main>
  );
}
