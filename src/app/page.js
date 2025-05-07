import BooksSection from "@/components/BookSection";
import HeroFull from "../components/HeroBanner";
import BlogPreviewSection from "@/components/BlogPreviewSection";
import AuthorSection from "@/components/AuthorSection";
import AboutBooksSection from "@/components/AboutBooksSection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main>
      <HeroFull />
      <BooksSection />
      <AuthorSection />
      <AboutBooksSection />
      <BlogPreviewSection />
      <Footer />
      {/* Weitere Sektionen */}
    </main>
  );
}
