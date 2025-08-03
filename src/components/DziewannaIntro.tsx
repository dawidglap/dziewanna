'use client';

import Image from 'next/image';
import { useTranslations } from 'next-intl';
import dziewannaGraphic from '../../public/poster.webp';
import { motion } from 'framer-motion';
import Link from 'next/link';
import WidgetWeather from './WeatherWidget';
import SeasonalBox from './SeasonalBox';
import SeeAndDoBox from './SeeAndDo';
import AccommodationBox from './AccomodationBox';

export default function DziewannaIntro() {
  const t = useTranslations('DziewannaIntro');

  return (
    <section className="w-full bg-[#ECFAE5]  py-16 px-6 lg:px-12 xl:px-16 overflow-hidden">
      <div className="max-w-7xl mx-auto grid grid-cols-1 xl:grid-cols-12 gap-12 items-stretch">
        {/* Colonna testo - 2/3 su XL */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="xl:col-span-8"
        >
          <h2 className="text-4xl md:text-6xl font-bold text-[#1F1F1F] mb-4">
            {t('headline')}
          </h2>

          <div className="space-y-6 text-[#333] leading-relaxed">
            {[1, 2, 3, 4, 5].map((i) => (
              <div key={i}>
                <h3 className="font-semibold md:text-3xl text-2xl italic mb-1">
                  {t(`title${i}`)}
                </h3>
                <p className="text-sm md:text-lg">{t(`description${i}`)}</p>
              </div>
            ))}
          </div>

      <div className="mt-8 flex flex-wrap gap-4">
  <Link
    href="tel:+48730733399"
    className="bg-[#1F1F1F] text-white text-center font-semibold px-6 py-3 rounded-sm
               shadow hover:bg-[#B2CD9C] hover:text-black transition
               text-sm sm:text-base md:text-lg w-full sm:w-auto"
  >
    {t('ctaCall')}
  </Link>

  <Link
    href="/pokoje"
    className="bg-white border border-[#1F1F1F] text-[#1F1F1F] text-center font-semibold px-6 py-3 rounded-sm
               hover:bg-[#B2CD9C] hover:border-[#B2CD9C] hover:text-black transition
               text-sm sm:text-base md:text-lg w-full sm:w-auto"
  >
    {t('ctaRooms')}
  </Link>
</div>

        </motion.div>

        {/* Colonna immagine - 1/3 su XL */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="xl:col-span-4 h-full"
        >
          <Image
            src={dziewannaGraphic}
            alt="Infografika Dziewanna"
            className="w-full h-full object-cover rounded-sm shadow-md"
          />
        </motion.div>

        {/* Widget meteo allineato sotto al testo */}
        <div className="xl:col-span-8 ">
          <WidgetWeather />
        </div>
<div className="xl:col-span-4 xl:row-span-2 flex flex-col h-full">
  <SeasonalBox />
</div>

<div className="xl:col-span-4">
          <SeeAndDoBox />
        </div>
        <div className="xl:col-span-4">
          <AccommodationBox />
        </div>

      </div>
    </section>
  );
}
