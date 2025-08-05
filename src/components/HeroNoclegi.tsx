'use client';

import Image from 'next/image';
import { useTranslations } from 'next-intl';
import { motion } from 'framer-motion';
import Poster from '../../public/forest.webp';
import LayoutWrapper from '@/components/LayoutWrapper';

export default function HeroNoclegi() {
  const t = useTranslations('heroNoclegi');

  return (
   <section
  className="relative w-full overflow-hidden flex items-end pb-20 h-[100vh] md:h-[80vh]"
>

   {/* Background image */}
<div className="absolute inset-0 z-0 ">
  <Image
    src={Poster}
    alt="Dziewanna hero background"
    fill
    className="object-cover object-center rounded-b-xl"
    priority
  />
</div>
        {/* Overlay graduale */}
<div className="absolute inset-0 z-10 bg-gradient-to-b from-[#0d0d0d]/80 via-[#1a1a1a]/50 to-transparent" />


      

      {/* Content layout */}
      <LayoutWrapper>
        <motion.div
          className="relative z-10 max-w-4xl mx-auto xl:mx-0 pb-10 xl:pb-0 xl:pt-0 text-left"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <motion.h1
            className="font-caveat font-bold text-[#B2CD9C] drop-shadow-md leading-tight
                       text-[clamp(2.5rem,8vw,4rem)]"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
          >
            {t('title')}
          </motion.h1>

          <motion.p
            className="text-white text-base font-medium xl:text-lg mt-6 max-w-2xl"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
          >
            {t('description')}
          </motion.p>
        </motion.div>
      </LayoutWrapper>
    </section>
  );
}
