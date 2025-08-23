'use client';

import { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown } from 'lucide-react';
import { useTranslations } from 'next-intl';
import LayoutWrapper from '@/components/LayoutWrapper';

type FaqItem = { id: string; q: string; a: string };

export default function FaqAccordion() {
  const t = useTranslations('faq');

  const items: FaqItem[] = useMemo(
    () => [
      { id: 'q1', q: t('items.q1.q'), a: t('items.q1.a') },
      { id: 'q2', q: t('items.q2.q'), a: t('items.q2.a') },
      { id: 'q3', q: t('items.q3.q'), a: t('items.q3.a') },
      { id: 'q4', q: t('items.q4.q'), a: t('items.q4.a') },
      { id: 'q5', q: t('items.q5.q'), a: t('items.q5.a') },
      { id: 'q6', q: t('items.q6.q'), a: t('items.q6.a') },
      { id: 'q7', q: t('items.q7.q'), a: t('items.q7.a') },
      { id: 'q8', q: t('items.q8.q'), a: t('items.q8.a') },
      { id: 'q9', q: t('items.q9.q'), a: t('items.q9.a') },
      { id: 'q10', q: t('items.q10.q'), a: t('items.q10.a') },
      // aggiungi pure altre...
    ],
    [t]
  );

  const [openId, setOpenId] = useState<string | null>(items[0]?.id ?? null);

  const containerVariants = {
    hidden: { opacity: 0, y: 24 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: 'easeOut', when: 'beforeChildren', staggerChildren: 0.06 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 14 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.35, ease: 'easeOut' } },
  };

  return (
    <section className="bg-yellow-100 py-12 md:py-16">
      <LayoutWrapper>
        {/* wrapper relativo necessario per sticky + pannello scrollabile */}
        <motion.div
          className="grid grid-cols-1 xl:grid-cols-12 gap-10 xl:gap-16 relative"
          initial="hidden"
          animate="visible"
          variants={containerVariants}
        >
          {/* COLONNA SINISTRA - sticky su desktop */}
          <motion.aside
            className="
              xl:col-span-5
              xl:sticky xl:top-24        /* regola top in base all'altezza della navbar */
              self-start                  /* evita allungamenti strani */
            "
            variants={itemVariants}
          >
            <p className="uppercase tracking-[0.18em] text-sm text-neutral-600 mb-2">
              {t('eyebrow')}
            </p>
            <h2 className="text-[clamp(2rem,6vw,3.25rem)] leading-tight font-semibold text-[#1F1F1F]">
              {t('headline')}
            </h2>
            <p className="mt-5 text-neutral-700 text-base md:text-lg max-w-prose">
              {t('intro')}
            </p>
          </motion.aside>

          {/* COLONNA DESTRA - scroll indipendente su desktop */}
          <motion.div
            className="
              xl:col-span-7
              xl:max-h-[calc(100vh-8rem)]  /* 8rem ≈ top-24 + padding; regola se serve */
              xl:overflow-y-auto
              xl:pr-2                        /* spazio per scrollbar */
            "
            variants={itemVariants}
          >
            <div className="divide-y-2 divide-[#1F1F1F]">
              {items.map((it) => {
                const isOpen = openId === it.id;
                return (
                  <div key={it.id} className="py-5">
                    <button
                      onClick={() => setOpenId(isOpen ? null : it.id)}
                      className="w-full flex items-center justify-between text-left focus:outline-none"
                      aria-expanded={isOpen}
                      aria-controls={`panel-${it.id}`}
                    >
                      <span className="text-lg md:text-xl font-semibold text-[#1F1F1F]">
                        {it.q}
                      </span>
                      <motion.span
                        initial={false}
                        animate={{ rotate: isOpen ? 180 : 0 }}
                        transition={{ duration: 0.25, ease: 'easeOut' }}
                        className="ml-4 shrink-0"
                      >
                        <ChevronDown className="w-6 h-6 text-[#1F1F1F]" />
                      </motion.span>
                    </button>

                    <AnimatePresence initial={false}>
                      {isOpen && (
                        <motion.div
                          id={`panel-${it.id}`}
                          key={`panel-${it.id}`}
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: 'auto', opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.3, ease: 'easeInOut' }}
                          className="overflow-hidden"
                        >
                          <div className="pt-4 text-neutral-800 leading-relaxed">
                            {it.a}
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                );
              })}
            </div>
          </motion.div>
        </motion.div>
      </LayoutWrapper>
    </section>
  );
}
