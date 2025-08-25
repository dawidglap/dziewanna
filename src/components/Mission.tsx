'use client';

import { motion, Variants } from 'framer-motion';
import { useTranslations } from 'next-intl';

const containerVariants: Variants = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.25 },
  },
};

const lineVariants: Variants = {
  hidden: { opacity: 0, y: 16 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      // cubic-bezier “easeOut” approx → nessun errore di typing
      ease: [0.17, 0.67, 0.83, 0.67],
    },
  },
};

type MissionProps = { className?: string };

export default function Mission({ className = '' }: MissionProps) {
  const t = useTranslations('mission');

  const lines = [
    t('line1', { defaultMessage: 'Dziewanna powstała jako dom z duszą...' }),
    t('line2', { defaultMessage: 'Otoczeni lasami, łąkami i ciszą...' }),
    t('line3', { defaultMessage: 'Naszą misją jest oferować nie tylko nocleg...' }),
  ];

  return (
<section
  className={`bg-gradient-to-b from-[#F8F6F2] to-yellow-100 text-[#1A1A1A]
              min-h-[90vh] sm:min-h-screen max-h-[1080px]  flex items-center rounded-b-xl ${className}`}
  aria-label={t('title', { defaultMessage: 'Dziewanna – misja' })}
>
  <div className="mx-auto max-w-5xl w-full px-6">
    <h2 className="sr-only">{t('title', { defaultMessage: 'Nasza misja' })}</h2>

    <motion.div
      className="space-y-6 md:space-y-7 leading-tight"
      variants={containerVariants}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.4, margin: '-10% 0% -10% 0%' }}
    >
      {lines.map((text, idx) => (
        <motion.p
          key={idx}
          variants={lineVariants}
          className="text-2xl md:text-4xl font-semibold tracking-tight"
        >
          {text}
        </motion.p>
      ))}
    </motion.div>
  </div>
</section>


  );
}
