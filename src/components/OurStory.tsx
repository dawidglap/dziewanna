'use client';

import Image from 'next/image';
import { useTranslations } from 'next-intl';
import { motion } from 'framer-motion';
import LayoutWrapper from '@/components/LayoutWrapper';

// Sostituisci quando vuoi
import OurStoryImg from '../../public/aboutPic.webp';

export default function OurStory() {
  const t = useTranslations('ourStory');

  return (
    <section className="pt-16 md:py-20 bg-[#F8F6F2]  ">
      <LayoutWrapper >
        {/* Desktop: 2 colonne | Mobile/Tablet: 1 colonna (testo sopra, immagine sotto) */}
        <div className="grid grid-cols-1 xl:grid-cols-12 gap-8 xl:gap-12 items-stretch">
          {/* Testo */}
          <motion.div
            className="xl:col-span-6 "
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.5 }}
          >
            <p className="uppercase tracking-widest text-xs font-semibold text-[#6A6A6A] mb-3">
              {t('eyebrow')}
            </p>
            <h2 className="text-3xl md:text-4xl font-extrabold text-[#1F1F1F] leading-tight mb-4">
              {t('title')}
            </h2>
            <p className="text-base md:text-lg text-[#1F1F1F] font-semibold mb-6">
              {t('lead')}
            </p>
            <div className="space-y-4 text-[#3A3A3A] text-base leading-relaxed">
              <p>{t('p1')}</p>
              <p>{t('p2')}</p>
              <p>{t('p3')}</p>
              <p>{t('p4')}</p>
              <p>{t('p5')}</p>
            </div>
          </motion.div>

          {/* Immagine */}
          <motion.div
            className="xl:col-span-6"
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            {/* Mobile/Tablet: rapporto fisso */}
            <div className="xl:hidden">
              <div className="relative w-full aspect-[4/3] md:aspect-[16/10] rounded-xl overflow-hidden shadow-sm">
                <Image
                  src={OurStoryImg}
                  alt={t('imageAlt')}
                  fill
                  className="object-cover"
                  priority={false}
                  sizes="(max-width: 1279px) 100vw"
                />
                <span className="absolute bottom-2 right-2 text-[10px] md:text-xs bg-black/60 text-white px-2 py-1 rounded">
                  © Dziewanna
                </span>
              </div>
            </div>

            {/* Desktop (xl+): altezza piena uguale al testo */}
            <div className="hidden xl:block h-full">
              <div className="relative w-full h-full min-h-[420px] rounded-xl overflow-hidden shadow-sm">
                <Image
                  src={OurStoryImg}
                  alt={t('imageAlt')}
                  fill
                  className="object-cover"
                  priority={false}
                  sizes="(min-width: 1280px) 50vw"
                />
                <span className="absolute bottom-2 right-2 text-[10px] md:text-xs bg-black/60 text-white px-2 py-1 rounded">
                  © Dziewanna
                </span>
              </div>
            </div>
          </motion.div>
        </div>
      </LayoutWrapper>
    </section>
  );
}
