'use client';

import Image from 'next/image';
import { useTranslations } from 'next-intl';
import dziewannaGraphic from '../../public/poster.webp';
import { motion } from 'framer-motion';

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
          className="space-y-8"
        >
          {[1, 2, 3, 4, 5].map((i) => (
            <div key={i}>
              <h3 className="text-3xl md:text-4xl font-semibold text-[#1F1F1F] mb-2">
                {t(`title${i}`)}
              </h3>
              <p className="text-sm md:text-lg text-[#333] leading-relaxed">
                {t(`description${i}`)}
              </p>
            </div>
          ))}
        </motion.div>

        {/* Colonna immagine/grafica */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <Image
            src={dziewannaGraphic}
            alt="Infografika Dziewanna"
            className="w-full h-full rounded-sm shadow-md object-cover"
          />
        </motion.div>
      </div>
    </section>
  );
}
