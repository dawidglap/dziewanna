'use client';

import { useEffect, useRef } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useTranslations } from 'next-intl';
import { FaStar } from 'react-icons/fa6';

const Reviews = () => {
  const controls = useAnimation();
  const ref = useRef<HTMLDivElement>(null);
  const t = useTranslations();

  const containerVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { staggerChildren: 0.2, duration: 0.4 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          controls.start('visible');
          observer.disconnect();
        }
      },
      { threshold: 0 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      observer.disconnect();
    };
  }, [controls]);

  return (
    <motion.section
      id="reviews"
      ref={ref}
      initial="hidden"
      animate={controls}
      variants={containerVariants}
      className="mx-auto max-w-7xl px-6 sm:px-8 xl:px-0 py-16 "
    >
      {/* Titolo sezione */}
      {/* <div className="mb-12 text-center">
        <h2 className="text-4xl font-bold text-[#1F1F1F]">
          {t('header.title')}
        </h2>
        <p className="mt-4 text-lg text-gray-600">{t('header.subtitle')}</p>
      </div> */}

      {/* Desktop Layout */}
      <div
        className="hidden gap-6 md:grid md:grid-cols-6"
        style={{
          gridTemplateColumns: 'repeat(6, 1fr)',
          gridTemplateAreas: `
            "a a b b b c"
            "d d d e e f"
            "g g h h h i"
            "j j k k l l"
            "m m n n o o"
          `
        }}
      >
        {Array.from({ length: 14 }).map((_, index) => {
          const areaMap = [
            'a',
            'b',
            'c',
            'd',
            'e',
            'f',
            'g',
            'h',
            'i',
            'j',
            'k',
            'l',
            'm',
            'n'
          ];
          const area = areaMap[index];

          return (
            <motion.div
              key={index}
              className="relative flex flex-col rounded-md bg-[#b2cd9c]/20 p-6 text-sm text-[#1F1F1F] shadow-md transition hover:scale-[1.02]"
              style={{ gridArea: area }}
              variants={itemVariants}
            >
                {/* eslint-disable-next-line react/no-unescaped-entities */}
              <p className="mb-4 italic">"{t(`reviews.${index + 1}.review`)}"</p>
              <div className="mt-auto flex items-center justify-between">
                <p className="font-semibold">{t(`reviews.${index + 1}.name`)}</p>
                <div className="flex items-center gap-1">
                  {[...Array(5)].map((_, i) => (
                    <FaStar key={i} className="text-yellow-400 text-xs" />
                  ))}
                </div>
              </div>
            </motion.div>
          );
        })}
      </div>

      {/* Mobile Layout */}
      <div className="flex flex-col gap-6 md:hidden">
        {Array.from({ length: 14 }).map((_, index) => (
          <motion.div
            key={index}
            className="relative flex flex-col rounded-md bg-white p-6 text-sm text-[#1F1F1F] shadow-md transition hover:scale-[1.02]"
            variants={itemVariants}
          >
            {/* eslint-disable-next-line react/no-unescaped-entities */}
            <p className="mb-4 italic">"{t(`reviews.${index + 1}.review`)}"</p>
            <div className="mt-auto flex items-center justify-between">
              <p className="font-semibold">{t(`reviews.${index + 1}.name`)}</p>
              <div className="flex items-center gap-1">
                {[...Array(5)].map((_, i) => (
                  <FaStar key={i} className="text-yellow-400 text-xs" />
                ))}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
};

export default Reviews;


