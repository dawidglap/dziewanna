'use client';

import { useTranslations } from 'next-intl';
import { FaStar } from 'react-icons/fa6';

const Reviews = () => {
  const t = useTranslations();

  return (
    <section
      id="reviews"
      className="mx-auto max-w-7xl px-6 sm:px-8 xl:px-0 py-16"
    >
      {/* Desktop Layout */}
      <div
        className="hidden gap-6 md:grid md:grid-cols-6"
        style={{
          gridTemplateColumns: 'repeat(6, 1fr)',
          gridTemplateAreas: `
            "a a b b b c"
            "d d d e e f"
            "g g h h h i"
            "j j k k l l"
            "m m n n o o"
          `
        }}
      >
        {Array.from({ length: 14 }).map((_, index) => {
          const areaMap = [
            'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h',
            'i', 'j', 'k', 'l', 'm', 'n'
          ];
          const area = areaMap[index];

          return (
            <div
              key={index}
              className="relative flex flex-col rounded-md bg-[#b2cd9c]/20 p-6 text-sm text-[#1F1F1F] shadow-md"
              style={{ gridArea: area }}
            >
              <p className="mb-4 italic">"{t(`reviews.${index + 1}.review`)}"</p>
              <div className="mt-auto flex items-center justify-between">
                <p className="font-semibold">{t(`reviews.${index + 1}.name`)}</p>
                <div className="flex items-center gap-1">
                  {[...Array(5)].map((_, i) => (
                    <FaStar key={i} className="text-yellow-400 text-xs" />
                  ))}
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Mobile Layout */}
      <div className="flex flex-col gap-6 md:hidden">
        {Array.from({ length: 14 }).map((_, index) => (
          <div
            key={index}
            className="relative flex flex-col rounded-md bg-white p-6 text-sm text-[#1F1F1F] shadow-md"
          >
            <p className="mb-4 italic">"{t(`reviews.${index + 1}.review`)}"</p>
            <div className="mt-auto flex items-center justify-between">
              <p className="font-semibold">{t(`reviews.${index + 1}.name`)}</p>
              <div className="flex items-center gap-1">
                {[...Array(5)].map((_, i) => (
                  <FaStar key={i} className="text-yellow-400 text-xs" />
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Reviews;
