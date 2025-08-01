'use client';

import HeroBackground from '@/components/HeroBackground';
import { useTranslations } from 'next-intl';
import Link from 'next/link';
import { CiInstagram } from "react-icons/ci";


export default function Hero() {
  const t = useTranslations('Hero');

  return (
    <section className="relative min-h-screen w-full overflow-hidden">
      <HeroBackground />

      {/* Instagram verticale a destra */}
    
      {/* Instagram badge verticale a destra */}



<div className="absolute right-0 top-1/2 -translate-y-1/2 z-20">
  <Link
    href="https://www.instagram.com/dziewanna_airbnb"
    target="_blank"
    rel="noopener noreferrer"
    className="bg-white shadow-lg w-[32px] text-black hover:text-emerald-500 h-[128px] flex flex-col items-center justify-center space-y-6"
  >
    {/* Icona IG */}
    <CiInstagram className="w-5 h-5 " />

    {/* Testo verticale, centrato */}
    <span className=" text-[10px] font-medium tracking-wider rotate-180 writing-vertical">
      Instagram
    </span>
  </Link>
</div>


        
      

      {/* Contenuto testuale in basso a sinistra su tutti i dispositivi */}
      <div className="absolute bottom-[8%] left-0 z-10 w-full px-6 xl:px-24 pb-10 text-left flex flex-col items-start">
        <h1
          className="font-caveat font-bold text-white drop-shadow-md leading-tight
                     text-[clamp(2.5rem,8vw,6rem)]"
        >
          {t('title')}
        </h1>

        <div
          className="flex flex-col sm:flex-row gap-4 mt-6 w-full
                     max-w-[80vw] sm:max-w-[80vw] md:max-w-[70vw] lg:max-w-none"
        >
          <Link
            href="#contact"
            className="bg-white text-black text-center font-semibold px-6 py-3 rounded-sm
                       shadow hover:bg-emerald-300 transition
                       text-sm sm:text-base md:text-lg w-full sm:w-auto"
          >
            {t('button1')}
          </Link>

          <Link
            href="#experiences"
            className="border border-white text-white text-center font-semibold px-6 py-3 rounded-sm
                       hover:bg-emerald-300 hover:text-black hover:border-emerald-300 transition
                       text-sm sm:text-base md:text-lg w-full sm:w-auto "
          >
            {t('button2')}
          </Link>
        </div>
      </div>
    </section>
  );
}
