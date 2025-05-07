// app/not-found.jsx
import Link from "next/link";


  
// app/not-found.jsx

export default function NotFound() {
    return (
      <div className="relative min-h-screen flex items-center justify-center text-white">
        <div
          className="absolute inset-0 bg-cover bg-center brightness-50"
          style={{ backgroundImage: "url('/images/404-background.jpg')" }}
        ></div>
        <div className="relative z-10 text-center p-8">
          <h1 className="text-6xl font-bold">404</h1>
          <p className="text-2xl mt-4">Seite nicht gefunden</p>
          <Link className="link" href="./">ZU BRUNO BAUMGARTNER</Link>
        </div>
      </div>
    );
  }
  