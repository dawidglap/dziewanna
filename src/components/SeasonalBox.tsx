'use client';

import { useTranslations } from 'next-intl';
import { useEffect, useState } from 'react';
import { Trees } from 'lucide-react'; // oppure un'altra icona coerente
import Link from 'next/link';

export default function SeasonalSuggestionsCard() {
  const t = useTranslations('SeasonalCard');
  const [today, setToday] = useState('');

  useEffect(() => {
    const now = new Date();
    const day = now.getDate();
    const month = now.toLocaleString('pl-PL', { month: 'long' });
    const year = now.getFullYear();
    setToday(`${day} ${month} ${year}`);
  }, []);

  return (
    <div className="bg-white rounded-sm shadow-md p-4 border border-gray-200 flex flex-col justify-between h-full min-h-[380px] xl:h-full">

      {/* Header */}
      <div className="flex items-center gap-3 mb-4">
        <Trees className="text-[#1F1F1F] w-6 h-6" />
        <h2 className="text-xl md:text-2xl font-semibold text-gray-900">{t('title')}</h2>
      </div>

      {/* Content */}
      <div className="text-gray-700 text-sm leading-relaxed mb-6">
        <p className="text-[13px] mb-2 text-gray-500">{t('date')} {today}</p>

        <ul className="list-disc list-inside space-y-2">
          <li>{t('item1')}</li>
          <li>{t('item2')}</li>
          <li>{t('item3')}</li>
          <li>{t('item4')}</li>
          <li>{t('item5')}</li>
          <li>{t('item6')}</li>
        </ul>
      </div>

      {/* CTA */}
      <Link
        href="/see-and-do"
        className="bg-[#1F1F1F] text-white text-center font-semibold block py-2  shadow hover:bg-[#B2CD9C] hover:text-black transition
               text-sm sm:text-base md:text-lg  rounded-sm"
      >
        {t('cta')}
      </Link>
    </div>
  );
}
