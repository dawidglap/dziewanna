'use client';

import Image, { StaticImageData } from 'next/image';
import { useTranslations } from 'next-intl';
import { motion } from 'framer-motion';
import LayoutWrapper from '@/components/LayoutWrapper';

type HeroReviewsProps = {
  className?: string;
  mobileImage?: StaticImageData | string;  // verticale (portrait) per mobile
  desktopImage?: StaticImageData | string; // orizzontale (landscape) per desktop
};

export default function HeroReviews({
  className = '',
  mobileImage = '/heroReviewsMobile.webp',
  desktopImage = '/heroReviewsDesktop.webp',
}: HeroReviewsProps) {
  const t = useTranslations('heroReviews');

  return (
    <section
      className={`relative w-full overflow-hidden flex items-end pb-20 h-[100vh] md:h-[80vh] ${className}`}
      aria-label={t('aria', { defaultMessage: 'Opinie gości – Dziewanna' })}
    >
      {/* Background image – mobile (portrait) */}
      <div className="absolute inset-0 z-0 md:hidden">
        <Image
          src={mobileImage}
          alt="Dziewanna hero background"
          fill
          priority
          sizes="100vw"
          className="object-cover object-center rounded-b-xl"
        />
      </div>

      {/* Background image – desktop (landscape) */}
      <div className="absolute inset-0 z-0 hidden md:block">
        <Image
          src={desktopImage}
          alt="Dziewanna hero background"
          fill
          priority
          sizes="100vw"
          className="object-cover object-center rounded-b-xl"
        />
      </div>

      {/* Overlay graduale (come nel riferimento) */}
      <div className="absolute inset-0 z-10 bg-gradient-to-b from-[#0d0d0d]/80 via-[#1a1a1a]/50 to-transparent" />

      {/* Content layout (uguale al riferimento) */}
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
            {t('title', { defaultMessage: 'Miejsce, które zostaje w sercu' })}
          </motion.h1>

          <motion.p
            className="text-white text-base font-medium xl:text-lg mt-6 max-w-2xl"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
          >
            {t('description', {
              defaultMessage:
                'Prawdziwe historie naszych gości — o spokoju, naturze i ciepłych chwilach w Dziewannie.',
            })}
          </motion.p>
        </motion.div>
      </LayoutWrapper>
    </section>
  );
}
