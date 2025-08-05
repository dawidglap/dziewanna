'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useTranslations } from 'next-intl';

const apartments = [
  {
    id: 'chaber',
    titleKey: 'apartments.chaber.title',
    descKey: 'apartments.chaber.description',
    image: '/chab.webp',
  },
  {
    id: 'dziewanna',
    titleKey: 'apartments.dziewanna.title',
    descKey: 'apartments.dziewanna.description',
    image: '/dziewanna2.webp',
  },
  {
    id: 'lawenda',
    titleKey: 'apartments.lawenda.title',
    descKey: 'apartments.lawenda.description',
    image: '/Lawenda2.webp',
  },
  {
    id: 'mak',
    titleKey: 'apartments.mak.title',
    descKey: 'apartments.mak.description',
    image: '/mak2.webp',
  },
  {
    id: 'malwa',
    titleKey: 'apartments.malwa.title',
    descKey: 'apartments.malwa.description',
    image: '/malwa2.webp',
  },
  {
    id: 'niezapominajka',
    titleKey: 'apartments.niezapominajka.title',
    descKey: 'apartments.niezapominajka.description',
    image: '/niezapominajka2.webp',
  },
  {
    id: 'roza',
    titleKey: 'apartments.roza.title',
    descKey: 'apartments.roza.description',
    image: '/roza2.webp',
  },
];


export default function Apartments() {
  const t = useTranslations();

  return (
    <section className="px-4 sm:px-8 xl:px-0 py-16 max-w-7xl mx-auto">
      {/* Mobile & Tablet */}
      <div className="grid grid-cols-1 sm:grid-cols-2 xl:hidden gap-8">
        {apartments.map((apt) => (
          <ApartmentCard key={apt.id} apt={apt} t={t} />
        ))}
      </div>

      {/* Desktop – 3x3 bento grid */}
      <div className="hidden xl:grid xl:grid-cols-3 gap-8 xl:gap-10">
        {/* Posizione 0 - solo immagine */}
        <ImageOnly src="/room-flowers.webp" />

        {/* Posizione 1 */}
        <ApartmentCard apt={apartments[0]} t={t} />

        {/* Posizione 2 */}
        <ApartmentCard apt={apartments[1]} t={t} />

        {/* Posizione 3 */}
        <ApartmentCard apt={apartments[2]} t={t} />

        {/* Posizione 4 */}
        <ApartmentCard apt={apartments[3]} t={t} />

        {/* Posizione 5 - solo immagine */}
        <ImageOnly src="/room-blue.webp" />

        {/* Posizione 6 */}
        <ApartmentCard apt={apartments[4]} t={t} />

        {/* Posizione 7 */}
        <ApartmentCard apt={apartments[5]} t={t} />

        {/* Posizione 8 */}
        <ApartmentCard apt={apartments[6]} t={t} />
      </div>
    </section>
  );
}

function ApartmentCard({ apt, t }: { apt: any; t: any }) {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden flex flex-col h-full">
      <div className="relative w-full h-28">
        <Image
          src={apt.image}
          alt={t(apt.titleKey)}
          fill
          className="object-cover object-center"
        />
      </div>

      <div className="p-6 flex-1 flex flex-col justify-between">
        <div>
          <h2 className="text-3xl font-semibold mb-2">{t(apt.titleKey)}</h2>
          <p className="text-sm text-gray-700">{t(apt.descKey)}</p>
        </div>

        <div className="mt-6">
          <Link
            href={`/noclegi/${apt.id}`}
            className="inline-block bg-[#3F7D58] w-full text-center text-white px-5 py-2 rounded-sm text-sm font-semibold hover:bg-[#B2CD9C] hover:text-black transition"
          >
            {t('apartments.ctaViewRoom')}
          </Link>
        </div>
      </div>
    </div>
  );
}

function ImageOnly({ src, alt }: { src: string; alt?: string }) {
  return (
    <div className="relative w-full h-[380px] rounded-lg shadow-md overflow-hidden">
      <Image
        src={src}
        alt={alt || 'Apartment image'}
        fill
        className="object-cover object-center"
        priority
      />
    </div>
  );
}
