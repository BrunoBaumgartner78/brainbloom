import "../../app/globals.css";
import styles from "../../styles/BlogPage.module.css";
import posts from "@/data/posts";
import BlogCard from "@/components/BlogCard";
import Pagination from "@/components/Pagination";



export default function BlogPage1() {
  const pagePosts = posts.slice(0, 20);

  return (
    
    <main className={styles.main}>
      <h1 className={styles.title}>Blog</h1>
      <div className={styles.grid}>
        {pagePosts.map((post) => (
          <BlogCard key={post.slug} post={post} />
        ))}
      </div>
      <Pagination currentPage={1} totalPages={5} />
    </main>
    
  );
}
