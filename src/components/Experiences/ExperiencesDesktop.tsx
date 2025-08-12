'use client';

import { motion } from 'framer-motion';
import { useTranslations } from 'next-intl';
import {
  EXPERIENCES,
  EXPERIENCE_GROUPS,
  type Experience,
} from './ExperiencesData';

function ExperienceCard({ exp }: { exp: Experience }) {
  const t = useTranslations();
  const Icon = exp.icon;
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.35 }}
      className="rounded-md border border-gray-200 bg-white shadow-sm p-4 flex gap-3"
    >
      <Icon className="w-6 h-6 shrink-0 text-black" />
      <div className="space-y-1">
        <h3 className="text-sm font-semibold text-gray-900">
          {t(exp.labelKey)}
        </h3>
        <p className="text-sm text-gray-600">
          {t(exp.descKey)}
        </p>
        <div className="text-[11px] text-gray-500 flex gap-3">
          <span>{t('experiences.meta.drive', { min: exp.distanceMin })}</span>
          <span>•</span>
          <span>{t(`experiences.meta.duration.${exp.duration}`)}</span>
        </div>
      </div>
    </motion.div>
  );
}

export default function ExperiencesDesktop() {
  const t = useTranslations();

  return (
    <div className="hidden sm:block">
      <div className="space-y-10">
        {EXPERIENCE_GROUPS.map(group => {
          const items = group.items
            .map(id => EXPERIENCES.find(e => e.id === id))
            .filter(Boolean) as Experience[];

          if (!items.length) return null;

          return (
            <div key={group.id} className="space-y-4">
              <h2 className="text-lg font-semibold tracking-wide uppercase text-gray-900">
                {t(group.titleKey)}
              </h2>

              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                {items.map(exp => (
                  <ExperienceCard key={exp.id} exp={exp} />
                ))}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
