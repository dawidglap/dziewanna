'use client';

import Link from 'next/link';
import { TentTree } from 'lucide-react';
import { useTranslations } from 'next-intl';

export default function SeeAndDoBox() {
  const t = useTranslations('SeeAndDoBox');

  return (
    <div className="bg-white rounded-sm shadow-md p-6 flex flex-col justify-between h-full">
      <h3 className="text-xl md:text-2xl font-bold mb-2 flex items-center gap-2">
        <TentTree className="w-6 h-6 text-black" />
        {t('title')}
      </h3>
      <p className="text-sm text-[#333] leading-relaxed">{t('description')}</p>
      <Link
        href="/see-and-do"
        className="bg-[#1F1F1F] text-white text-center font-semibold block py-2 shadow hover:bg-[#B2CD9C] hover:text-black transition text-sm sm:text-base md:text-lg rounded-sm mt-4"
      >
        {t('cta')}
      </Link>
    </div>
  );
}
