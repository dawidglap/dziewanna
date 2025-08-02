'use client';

import Image from 'next/image';
import { useTranslations } from 'next-intl'; // ✅ aggiunto useLocale
import dziewannaGraphic from '../../public/poster.webp';
import { motion } from 'framer-motion';
import Link from 'next/link';


import WidgetWeather from './WeatherWidget';






export default function DziewannaIntro() {



  const t = useTranslations('DziewannaIntro');

  return (
    <section className="w-full bg-[#F9F9F7] py-16 px-6 xl:px-0">
      <div className="max-w-7xl mx-auto grid grid-cols-1 xl:grid-cols-2 gap-12 items-stretch">
        {/* Colonna testo */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          {/* H2 per SEO */}
          <h2 className="text-4xl md:text-6xl font-bold text-[#1F1F1F] mb-4">
            {t('headline')}
          </h2>

          {/* Sezioni descrittive */}
          <div className="space-y-6 text-[#333]  leading-relaxed">
            <div>
              <h3 className="font-semibold md:text-3xl text-2xl italic mb-1">{t('title1')}</h3>
              <p className="text-sm md:text-lg">{t('description1')}</p>
            </div>
            <div>
              <h3 className="font-semibold md:text-3xl text-2xl italic mb-1">{t('title2')}</h3>
              <p className="text-sm md:text-lg">{t('description2')}</p>
            </div>
            <div>
              <h3 className="font-semibold md:text-3xl text-2xl italic mb-1">{t('title3')}</h3>
              <p className="text-sm md:text-lg">{t('description3')}</p>
            </div>
            <div>
              <h3 className="font-semibold md:text-3xl text-2xl italic mb-1">{t('title4')}</h3>
              <p className="text-sm md:text-lg">{t('description4')}</p>
            </div>
            <div>
              <h3 className="font-semibold md:text-3xl text-2xl italic mb-1">{t('title5')}</h3>
              <p className="text-sm md:text-lg">{t('description5')}</p>
            </div>
          </div>

          {/* Bottoni CTA */}
          <div className="mt-8 flex flex-wrap gap-4">
            <Link
              href="tel:+48730733399"
              className="bg-[#1F1F1F] hover:text-black hover:bg-[#B2CD9C] text-white font-medium py-3 px-6 rounded transition"
            >
              {t('ctaCall')}
            </Link>
            <Link
              href="/pokoje"
              className="bg-white border border-[#1F1F1F] hover:bg-[#B2CD9C] hover:border-[#B2CD9C] text-[#1F1F1F] font-medium py-3 px-6 rounded transition"
            >
              {t('ctaRooms')}
            </Link>
          </div>
        </motion.div>

        {/* Colonna immagine */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="h-full"
        >
          <Image
            src={dziewannaGraphic}
            alt="Infografika Dziewanna"
            className="w-full h-full object-cover rounded-sm shadow-md"
          />
        </motion.div>
        


      </div>
<WidgetWeather />
    </section>
  );
}
