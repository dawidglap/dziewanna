'use client';

import { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { useTranslations } from 'next-intl';
import {
  EXPERIENCES,
  EXPERIENCE_GROUPS,
  type Experience,
} from './ExperiencesData';
const DEFAULT_VISIBLE = 4;

function MobileItem({ exp }: { exp: Experience }) {
  const t = useTranslations();
  const Icon = exp.icon;
  return (
    <motion.div
      initial={{ opacity: 0, height: 0 }}
      animate={{ opacity: 1, height: 'auto' }}
      exit={{ opacity: 0, height: 0 }}
      transition={{ duration: 0.25 }}
      className="overflow-hidden"
    >
      <div className="w-full flex items-start gap-3 px-4 py-3 rounded-md border border-gray-200 bg-white shadow-sm">
        <Icon className="w-5 h-5 shrink-0 text-black mt-0.5" />
        <div>
          <div className="text-sm font-semibold text-gray-900">{t(exp.labelKey)}</div>
          <div className="text-xs text-gray-600">{t(exp.descKey)}</div>
          <div className="text-[10px] text-gray-500 mt-1">
            {t('experiences.meta.drive', { min: exp.distanceMin })} • {t(`experiences.meta.duration.${exp.duration}`)}
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export default function ExperiencesMobile() {
  const t = useTranslations();
  const [expandedGroups, setExpandedGroups] = useState<Record<string, boolean>>({});

  return (
    <div className="sm:hidden space-y-8">
      {EXPERIENCE_GROUPS.map(group => {
        const items = group.items
          .map(id => EXPERIENCES.find(e => e.id === id))
          .filter(Boolean) as Experience[];

        if (!items.length) return null;

        const expanded = !!expandedGroups[group.id];
        const visible = expanded ? items : items.slice(0, DEFAULT_VISIBLE);

        return (
          <div key={group.id}>
            <div className="flex items-center justify-between mb-3">
              <h3 className="text-base font-semibold tracking-wide uppercase text-gray-900">
                {t(group.titleKey)}
              </h3>
              <button
                onClick={() =>
                  setExpandedGroups(s => ({ ...s, [group.id]: !expanded }))
                }
                className="text-xs font-semibold text-black underline"
              >
                {expanded ? t('experiences.showLess') : t('experiences.showMore')}
              </button>
            </div>

            <div className="grid grid-cols-1 gap-3">
              <AnimatePresence initial={false}>
                {visible.map(exp => (
                  <MobileItem key={exp.id} exp={exp} />
                ))}
              </AnimatePresence>
            </div>
          </div>
        );
      })}
    </div>
  );
}
