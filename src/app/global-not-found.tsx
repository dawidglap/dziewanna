// src/app/global-not-found.tsx
import './globals.css';
import Link from 'next/link';

export const metadata = {
  title: '404 – Strona nie istnieje | Dziewanna',
  description: 'Nie znaleziono strony. Przejdź do strony głównej.',
};

export default function GlobalNotFound() {
  return (
    <html lang="pl">
      <head>
        <title>404 – Dziewanna</title>
        <meta name="description" content="Ups! Strona nie istnieje." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body className="m-0 p-0 overflow-hidden text-white relative">
        {/* 🎥 Background video (stile HeroBackground) */}
        <video
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
          className="fixed inset-0 object-cover w-full h-full -z-10"
        >
          <source
            src="/videos/hero-dziewanna-ultimate-hq.webm"
            type="video/webm"
            media="(min-width: 768px)"
          />
          <source
            src="/videos/hero-dziewanna-ultimate-light.webm"
            type="video/webm"
            media="(max-width: 767px)"
          />
          <source src="/videos/hero-dziewanna-ultimate.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>

        {/* 🔲 Overlay nero */}
        <div className="absolute inset-0 bg-black/50 z-0" />

        {/* 📦 Contenuto centrale */}
        <div className="relative z-10 min-h-screen flex flex-col justify-center items-center text-center px-4">
          <h1 className="text-4xl md:text-5xl font-bold tracking-widest mb-6 uppercase">
            Dziewanna
          </h1>
          <h2 className="text-6xl md:text-8xl font-extrabold mb-4">404</h2>
          <p className="text-lg md:text-xl mb-8 max-w-xl text-white/90">
            Ups! Taka strona nie istnieje lub została przeniesiona.
          </p>
          <Link
            href="/"
            className="bg-white text-black px-6 py-3 rounded-lg font-semibold shadow hover:bg-gray-100 transition"
          >
            Wróć na stronę główną
          </Link>
        </div>
      </body>
    </html>
  );
}
