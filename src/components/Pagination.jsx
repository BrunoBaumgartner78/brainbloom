// src/components/Pagination.jsx
import Link from "next/link";
import styles from "../styles/Pagination.module.css";

export default function Pagination({ currentPage, totalPages }) {
  const pageNumbers = [];

  for (let i = 1; i <= totalPages; i++) {
    pageNumbers.push(i);
  }

  return (
    <nav className={styles.pagination}>
      {/* Zurück-Button */}
      {currentPage > 1 && (
        <Link href={currentPage - 1 === 1 ? `/blog` : `/blog/page${currentPage - 1}`}>
          <span className={styles.arrow}>&laquo;</span>
        </Link>
      )}

      {/* Seitenzahlen */}
      {pageNumbers.map((page) => {
        const href = page === 1 ? "/blog" : `/blog/page${page}`;
        return (
          <Link key={page} href={href}>
            <span
              className={`${styles.pageNumber} ${
                page === currentPage ? styles.active : ""
              }`}
            >
              {page}
            </span>
          </Link>
        );
      })}

      {/* Weiter-Button */}
      {currentPage < totalPages && (
        <Link href={`/blog/page${currentPage + 1}`}>
          <span className={styles.arrow}>&raquo;</span>
        </Link>
      )}
    </nav>
  );
}
