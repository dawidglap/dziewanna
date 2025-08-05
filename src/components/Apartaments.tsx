'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useTranslations } from 'next-intl';

const apartments = [
  {
    id: 'rozmaryn',
    titleKey: 'apartments.rozmaryn.title',
    descKey: 'apartments.rozmaryn.description',
    image: '/poster.webp',
  },
  {
    id: 'lawenda',
    titleKey: 'apartments.lawenda.title',
    descKey: 'apartments.lawenda.description',
    image: '/poster.webp',
  },
  {
    id: 'pokrzywa',
    titleKey: 'apartments.pokrzywa.title',
    descKey: 'apartments.pokrzywa.description',
    image: '/poster.webp',
  },
  {
    id: 'dziewanna',
    titleKey: 'apartments.dziewanna.title',
    descKey: 'apartments.dziewanna.description',
    image: '/poster.webp',
  },
  {
    id: 'rumianek',
    titleKey: 'apartments.rumianek.title',
    descKey: 'apartments.rumianek.description',
    image: '/poster.webp',
  },
  {
    id: 'macierzanka',
    titleKey: 'apartments.macierzanka.title',
    descKey: 'apartments.macierzanka.description',
    image: '/poster.webp',
  },
];

export default function Apartments() {
  const t = useTranslations();

  return (
    <section className="px-4 sm:px-8 xl:px-0 py-16 max-w-7xl mx-auto">
      <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-8">
        {apartments.map((apt) => (
          <div
            key={apt.id}
            className="bg-white rounded-lg shadow-md overflow-hidden flex flex-col"
          >
            <div className="relative w-full h-56">
              <Image
                src={apt.image}
                alt={t(apt.titleKey)}
                fill
                className="object-cover object-center"
              />
            </div>

            <div className="p-6 flex-1 flex flex-col justify-between">
              <div>
                <h2 className="text-xl font-semibold mb-2">{t(apt.titleKey)}</h2>
                <p className="text-sm text-gray-700">{t(apt.descKey)}</p>
              </div>

              <div className="mt-6">
                <Link
                  href={`/noclegi/${apt.id}`}
                  className="inline-block bg-black w-full text-center text-white px-5 py-2 rounded-sm text-sm font-semibold
                             hover:bg-[#B2CD9C] hover:text-black transition"
                >
                  {t('common.ctaViewRoom')}
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
