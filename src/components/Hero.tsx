'use client';

import HeroBackground from '@/components/HeroBackground';
import { useTranslations } from 'next-intl';
import Link from 'next/link';

export default function Hero() {
  const t = useTranslations('Hero');

  return (
    <section className="relative min-h-screen w-full overflow-hidden">
      <HeroBackground />

      {/* Instagram verticale a destra */}
      <div className="absolute right-0 top-1/2 -translate-y-1/2 z-20">
        <div className="bg-white text-black text-xs font-semibold px-2 py-1 rotate-90 origin-bottom-right tracking-widest shadow-lg">
          <Link
            href="https://www.instagram.com/dziewanna_airbnb"
            target="_blank"
            rel="noopener noreferrer"
            className="block"
          >
            Instagram
          </Link>
        </div>
      </div>

      {/* Contenuto testuale in basso a sinistra su tutti i dispositivi */}
      <div className="absolute bottom-[10%] left-0 z-10 w-full px-6 xl:px-24 pb-10 text-left flex flex-col items-start">
        <h1 className="font-caveat font-bold text-4xl md:text-[96px] text-white drop-shadow-md">
          {t('title')}
        </h1>
        {/* <p className="font-montserrat text-lg md:text-2xl text-white drop-shadow mt-4">
          {t('subtitle')}
        </p> */}

      <div className="flex flex-col sm:flex-row gap-4 mt-6 w-full max-w-[80vw] sm:max-w-none">
  <Link
    href="#contact"
    className="bg-white text-black text-center font-semibold px-6 py-3 rounded-md shadow hover:bg-emerald-300 transition w-full sm:w-auto"
  >
    {t('button1')}
  </Link>
  <Link
    href="#experiences"
    className="border border-white text-white text-center font-semibold px-6 py-3 rounded-md hover:bg-emerald-300 hover:text-black hover:border-emerald-300 transition w-full sm:w-auto"
  >
    {t('button2')}
  </Link>
</div>

      </div>
    </section>
  );
}
