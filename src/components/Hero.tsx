'use client';

import HeroBackground from '@/components/HeroBackground';
import { useTranslations } from 'next-intl';
import Link from 'next/link';

import LayoutWrapper from '@/components/LayoutWrapper';


export default function Hero() {
  const t = useTranslations('Hero');

  return (
    <section
  className="relative w-full overflow-hidden"
  style={{
    height: 'clamp(600px, 100vh, 1080px)',
  }}
>

      <HeroBackground />




        
      

      {/* Contenuto testuale in basso a sinistra su tutti i dispositivi */}
 <div className="absolute bottom-[8%]  left-0 z-10 w-full  pb-10 text-left">
     <LayoutWrapper>
  <div className="max-w-7xl mx-auto flex flex-col items-start">


        <h1
          className="font-caveat font-bold text-white drop-shadow-md leading-tight
                     text-[clamp(2.5rem,8vw,6rem)] pe-6"
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
                       shadow hover:bg-[#B2CD9C] transition
                       text-sm sm:text-base md:text-lg w-full sm:w-auto"
          >
            {t('button1')}
          </Link>

          <Link
            href="#experiences"
            className="border border-white text-white text-center font-semibold px-6 py-3 rounded-sm
                       hover:bg-[#B2CD9C] hover:text-black hover:border-[#B2CD9C] transition
                       text-sm sm:text-base md:text-lg w-full sm:w-auto "
          >
            {t('button2')}
          </Link>
        </div>
        </div>
        </LayoutWrapper>
      </div>
    </section>
  );
}
