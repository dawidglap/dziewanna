'use client';

import { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { FACILITIES } from './facilitiesData';
import { useTranslations } from 'next-intl';

export default function FacilitiesMobile() {
  const t = useTranslations();
  const [expanded, setExpanded] = useState(false);

  const visibleItems = expanded ? FACILITIES : FACILITIES.slice(0, 4);

  return (
    <div className="sm:hidden">
      <div className="grid grid-cols-1 gap-3">
        <AnimatePresence initial={false}>
          {visibleItems.map(({ icon: Icon, labelKey }) => (
            <motion.div
              key={labelKey}
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="overflow-hidden"
            >
              <div className="w-full flex items-center gap-3 px-4 py-3 rounded-md border border-gray-200 bg-white shadow-sm text-xs text-gray-800">
                <Icon className="w-5 h-5 shrink-0 text-black" />
                <span>{t(labelKey)}</span>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </div>

      <div className="mt-4 text-center">
        <button
          onClick={() => setExpanded((prev) => !prev)}
          className="text-sm font-semibold text-black underline"
        >
          {expanded ? t('facilities.showLess') : t('facilities.showMore')}
        </button>
      </div>
    </div>
  );
}
