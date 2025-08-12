'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useTranslations } from 'next-intl';

// Lista delle esperienze con link esterno
const experiences = [
  {
    titleKey: 'experiences.slowinski_dunes.title',
    descKey: 'experiences.slowinski_dunes.description',
    image: '/experiences/wydmy.webp',
    link: 'https://spn.gov.pl/atrakcje-turystyczne#Wydma%20%C5%81%C4%85cka',
  },
  {
    titleKey: 'experiences.czolpino_lighthouse.title',
    descKey: 'experiences.czolpino_lighthouse.description',
    image: '/experiences/latarniaNight.webp',
    link: 'https://spn.gov.pl/latarnia-morska-czolpino',
  },
  {
    titleKey: 'experiences.ustka_beach.title',
    descKey: 'experiences.ustka_beach.description',
    image: '/experiences/ustka_beach.webp',
    link: 'https://spn.gov.pl/latarnia-morska-czolpino',
  },
  {
    titleKey: 'experiences.velo_baltica.title',
    descKey: 'experiences.velo_baltica.description',
    image: '/experiences/velo_baltica.webp',
    link: 'https://spn.gov.pl/latarnia-morska-czolpino',
  },
  {
    titleKey: 'experiences.kluki_skansen.title',
    descKey: 'experiences.kluki_skansen.description',
    image: '/experiences/kluki_skansen.webp',
    link: 'https://spn.gov.pl/latarnia-morska-czolpino',
  },
  {
    titleKey: 'experiences.swolowo.title',
    descKey: 'experiences.swolowo.description',
    image: '/experiences/swolowo.webp',
    link: 'https://spn.gov.pl/latarnia-morska-czolpino',
  },
  {
    titleKey: 'experiences.sea_park.title',
    descKey: 'experiences.sea_park.description',
    image: '/experiences/sea_park.webp',
    link: 'https://spn.gov.pl/latarnia-morska-czolpino',
  },
  {
    titleKey: 'experiences.dinopark.title',
    descKey: 'experiences.dinopark.description',
    image: '/experiences/dinopark.webp',
    link: 'https://spn.gov.pl/latarnia-morska-czolpino',
  },
  {
    titleKey: 'experiences.gardno_kayak.title',
    descKey: 'experiences.gardno_kayak.description',
    image: '/experiences/gardno_kayak.webp',
    link: 'https://spn.gov.pl/latarnia-morska-czolpino',
  },
];

export default function Experiences() {
  const t = useTranslations();

  return (
    <section className="px-4 sm:px-8 xl:px-0 py-16 max-w-7xl mx-auto">
      {/* Mobile & Tablet */}
      <div className="grid grid-cols-1 sm:grid-cols-2 xl:hidden gap-8">
        {experiences.map((exp, index) => (
          <ExperienceCard key={index} exp={exp} t={t} />
        ))}
      </div>

      {/* Desktop – griglia 3x3 */}
      <div className="hidden xl:grid xl:grid-cols-3 gap-8 xl:gap-10">
        {experiences.map((exp, index) => (
          <ExperienceCard key={index} exp={exp} t={t} />
        ))}
      </div>
    </section>
  );
}

// Card singola esperienza
// eslint-disable-next-line @typescript-eslint/no-explicit-any
function ExperienceCard({ exp, t }: { exp: any; t: any }) {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden flex flex-col h-full">
      <div className="relative w-full h-64">
        <Image
          src={exp.image}
          alt={t(exp.titleKey)}
          fill
          className="object-cover object-center"
        />
      </div>

      <div className="p-6 flex-1 flex flex-col justify-between">
        <div>
          <h2 className="text-2xl font-semibold mb-2">{t(exp.titleKey)}</h2>
          <p className="text-sm text-gray-700">{t(exp.descKey)}</p>
        </div>

        <div className="mt-6">
          <Link
            href={exp.link}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-[#3F7D58] w-full text-center text-white px-5 py-2 rounded-sm text-sm font-semibold hover:bg-[#B2CD9C] hover:text-black transition"
          >
            {t('experiences.ctaView')}
          </Link>
        </div>
      </div>
    </div>
  );
}
