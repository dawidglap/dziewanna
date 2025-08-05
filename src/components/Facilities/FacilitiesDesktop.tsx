'use client';

import { FACILITIES } from './facilitiesData';
import { useTranslations } from 'next-intl';

export default function FacilitiesDesktop() {
  const t = useTranslations();

  return (
    <div className="hidden sm:flex flex-wrap gap-4">
      {FACILITIES.map(({ icon: Icon, labelKey }) => (
        <div
          key={labelKey}
          className="flex items-center gap-2 px-4 py-3 rounded-md border border-gray-200 bg-white shadow-sm text-sm text-gray-800"
        >
          <Icon className="w-5 h-5 shrink-0 text-black" />
          <span>{t(labelKey)}</span>
        </div>
      ))}
    </div>
  );
}
