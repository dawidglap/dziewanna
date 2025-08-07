'use client';

import { ArrowLeft, ArrowRight } from 'lucide-react';
import { useTranslations } from 'next-intl';
import { AnimatePresence, motion } from 'framer-motion';

const TABS = ['house', 'sleeping', 'eating', 'bathing', 'relaxing'];

type Props = {
  currentTab: string;
  setCurrentTab: (tab: string) => void;
};

export default function RoomTabNavigation({ currentTab, setCurrentTab }: Props) {
  const t = useTranslations('Room');
  const currentIndex = TABS.indexOf(currentTab);

  const prevTab = currentIndex > 0 ? TABS[currentIndex - 1] : null;
  const nextTab = currentIndex < TABS.length - 1 ? TABS[currentIndex + 1] : null;

  return (
    <div className="w-full mt-16 border-t pt-10">
      <div className="flex flex-col gap-6 sm:flex-row sm:justify-between sm:items-center text-center">
        <AnimatePresence mode="wait">
          {prevTab && (
            <motion.button
              key={prevTab}
              onClick={() => setCurrentTab(prevTab)}
              initial={{ x: -20, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              exit={{ x: -20, opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="flex items-center uppercase justify-center gap-2 text-sm sm:text-base font-semibold hover:text-[#3F7D58] transition"
            >
              <ArrowLeft className="w-4 h-4" />
              {t(`tabs.${prevTab}`)}
            </motion.button>
          )}
        </AnimatePresence>

        <AnimatePresence mode="wait">
          {nextTab && (
            <motion.button
              key={nextTab}
              onClick={() => setCurrentTab(nextTab)}
              initial={{ x: 20, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              exit={{ x: 20, opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="flex uppercase items-center justify-center gap-2 text-sm sm:text-base font-semibold hover:text-[#3F7D58] transition"
            >
              {t(`tabs.${nextTab}`)}
              <ArrowRight className="w-4 h-4" />
            </motion.button>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}
