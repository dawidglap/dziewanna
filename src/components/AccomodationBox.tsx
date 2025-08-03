'use client';

import Link from 'next/link';
import { useTranslations } from 'next-intl';
import { BedDouble } from 'lucide-react';

export default function AccommodationBox() {
  const t = useTranslations('AccommodationBox');

  return (
    <div className="bg-white rounded-sm shadow-md p-6 flex flex-col justify-between h-full">
      <div className="flex items-center gap-2 mb-2">
        <BedDouble className="w-6 h-6 text-[#1F1F1F]" />
        <h3 className="text-xl md:text-2xl font-bold">{t('title')}</h3>
      </div>
      <p className="text-sm text-[#333] leading-relaxed">
        {t('description')}
      </p>
      <Link
        href="/pokoje"
        className="bg-[#1F1F1F] text-white text-center font-semibold block py-2 shadow hover:bg-[#B2CD9C] hover:text-black transition text-sm sm:text-base md:text-lg rounded-sm mt-4"
      >
        {t('cta')}
      </Link>
    </div>
  );
}
