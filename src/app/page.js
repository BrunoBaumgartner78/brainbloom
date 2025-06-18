import BooksSection from "@/components/BookSection";
import HeroFull from "../components/HeroBanner";
import BlogPreviewSection from "@/components/BlogPreviewSection";
import AuthorSection from "@/components/AuthorSection";
import AboutBooksSection from "@/components/AboutBooksSection";
import Footer from "@/components/Footer";
import NewSection from "@/components/NewSection";
import DiscountBanner from "@/components/DiscountBanner";
import Preloader from "@/components/Preloader";
import ParallaxSection from "@/components/ParallaxSection";

export default function Home() {
  return (
    <main>
         <Preloader />
      <HeroFull />
      <BooksSection />
     <ParallaxSection background="./brainbloom.webp" speed={0.3} height="100vw">
  <div style={{ color: '#fff', textAlign: 'center' }}>
  <h1>✨ Willkommen in meinem Kosmos</h1>
  <p className="parallaxText">
   Im Sturm der Verwirrung findest du das Tor zu den Sternen. Durch Chaos erwacht die Seele.

  </p>
</div>

</ParallaxSection>

    <DiscountBanner />
     
      <AuthorSection />
      <ParallaxSection background="./brainbloom.webp" speed={0.3} height="100vw">
  <div style={{ color: '#fff', textAlign: 'center' }}>
  <h1>✨ Brainbloom</h1>
  <p className="parallaxText">
  Durch jede Wunde fließt das Licht der Wahrheit in die Seele, denn nur im Schmerz erwachen wir zum Glanz des Göttlichen.


  </p>
</div>

</ParallaxSection>
        <NewSection />
      <AboutBooksSection />
      <BlogPreviewSection />
      <ParallaxSection background="./brainbloom.webp" speed={0.3} height="100vw">
  <div style={{ color: '#fff', textAlign: 'center' }}>
  <h1>✨ Durch die Dunkelheit ins Licht</h1>
  <p className="parallaxText">
  Wenn der Verstand zerbricht, wird der Geist frei, und in den Trümmern der Logik tanzt die göttliche Wahrheit.

  </p>
</div>

</ParallaxSection>
      <Footer />
      {/* Weitere Sektionen */}
    </main>
  );
}
