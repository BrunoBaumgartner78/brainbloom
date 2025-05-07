import "../../../app/globals.css"; // wenn du `globals.css` aus `src/app` importierst
import styles from "../../../styles/BlogPage.module.css";
import posts from "@/data/posts";
import BlogCard from "@/components/BlogCard";
import Pagination from "@/components/Pagination";

export default function BlogPage2() {
  const pagePosts = posts.slice(20, 40);

  return (
    <main className={styles.main}>
      <h1 className={styles.title}>Blog</h1>
      <div className={styles.grid}>
        {pagePosts.map((post) => (
          <BlogCard key={post.slug} post={post} />
        ))}
      </div>
      <Pagination currentPage={2} totalPages={5} />
    </main>
  );
}

