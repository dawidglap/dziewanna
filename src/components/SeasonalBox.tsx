'use client';

import { useTranslations } from 'next-intl';
import { useEffect, useState } from 'react';
import { Trees } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';
import Poster from '../../public/poster.webp'
import type { StaticImageData } from 'next/image';




// Funzione per scegliere immagini in base al mese
function getSeasonalImage(month: number) {
  if ([11, 0, 1].includes(month)) {
    // Inverno
    return {
      src1: Poster,
      alt1: 'Ośnieżony ogród Dziewanny',
      src2: Poster,
      alt2: 'Nalewka i koc przy kominku',
    };
  } else if ([2, 3, 4].includes(month)) {
    // Primavera
    return {
      src1: Poster,
      alt1: 'Pierwsze pąki w ogrodzie',
      src2: Poster,
      alt2: 'Zioła z młodych pokrzyw i mięty',
    };
  } else if ([5, 6, 7].includes(month)) {
    // Estate
    return {
      src1: Poster,
      alt1: 'Spacer po lesie i zbieranie ziół',
      src2: Poster,
      alt2: 'Wieczorny grill i ognisko w ogrodzie',
    };
  } else {
    // Autunno
    return {
      src1: Poster,
      alt1: 'Złote liście na leśnej ścieżce',
      src2: Poster,
      alt2: 'Herbata z dzikiej róży na tarasie',
    };
  }
}

export default function SeasonalSuggestionsCard() {
  const t = useTranslations('SeasonalCard');
  const [today, setToday] = useState('');
 const [images, setImages] = useState<{
  src1: string | StaticImageData;
  alt1: string;
  src2: string | StaticImageData;
  alt2: string;
}>({
  src1: '',
  alt1: '',
  src2: '',
  alt2: '',
});

  useEffect(() => {
    const now = new Date();
    const day = now.getDate();
    const month = now.toLocaleString('pl-PL', { month: 'long' });
    const year = now.getFullYear();
    setToday(`${day} ${month} ${year}`);

    // Imposta immagini stagionali
    const seasonalImages = getSeasonalImage(now.getMonth());
    setImages(seasonalImages);
  }, []);

  return (
    <div className="bg-white rounded-sm shadow-md p-6 border border-gray-200 flex flex-col justify-between h-full">
      {/* Header */}
      <div className="flex items-center gap-3 mb-4">
        <Trees className="text-[#1F1F1F] w-6 h-6" />
        <h2 className="text-xl md:text-2xl font-semibold text-gray-900">{t('title')}</h2>
      </div>

      {/* Content */}
      <div className="text-gray-700 text-sm leading-relaxed mb-6">
        <p className="text-[13px] mb-2 text-gray-500">
          {t('date')} {today}
        </p>

        <ul className="list-disc list-inside space-y-2 mb-4">
          <li>{t('item1')}</li>
          <li>{t('item2')}</li>
          <li>{t('item3')}</li>
          <li>{t('item4')}</li>
          <li>{t('item5')}</li>
          <li>{t('item6')}</li>
        </ul>

        {/* Immagini stagionali */}
        <div className="grid grid-cols-1 gap-3">
          <Image
            src={images.src1}
            alt={images.alt1}
            className="w-full h-24 object-cover rounded-md shadow-sm"
          />
          <Image
            src={images.src2}
            alt={images.alt2}
            className="w-full h-24 object-cover rounded-md shadow-sm"
          />
        </div>
      </div>

      {/* CTA */}
      <Link
        href="/see-and-do"
        className="bg-[#1F1F1F] text-white text-center font-semibold block py-2 shadow hover:bg-[#B2CD9C] hover:text-black transition text-sm sm:text-base md:text-lg rounded-sm"
      >
        {t('cta')}
      </Link>
    </div>
  );
}
