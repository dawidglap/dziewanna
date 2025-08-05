'use client';

import { useTranslations } from 'next-intl';
import {
  ThumbsUp,
  Sparkles,
  ShieldCheck,
  Bed,
  MapPin,
  Award,
} from 'lucide-react';
import Image from 'next/image';

export default function HeaderReviewsApt() {
  const t = useTranslations();

  return (
    <section className="py-12 px-4 sm:px-8 xl:px-0 max-w-7xl mx-auto">
      {/* Titolo globale della sezione */}
      <h2 className="text-3xl sm:text-6xl font-bold mb-10 text-center sm:text-left">
        {t('reviews.globalTitle')}
      </h2>

      {/* Wrapper per layout flessibile */}
      <div className="flex flex-col xl:flex-row gap-8">
        {/* CARD REVIEWS */}
        <div className="w-full xl:w-1/3">
          {/* Badge Airbnb-style box */}
          <div className="w-full border border-gray-200 rounded-md p-5 sm:p-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left shadow-sm mb-8">
            <div className="flex items-center gap-3 text-green-700 font-semibold text-lg">
              <Award className="w-6 h-6 text-yellow-500" />
              <span>{t('reviews.badgeTitle')}</span>
            </div>

            <div className="flex items-center gap-6">
              <div className="text-3xl font-bold text-black">9.2</div>
              <div className="h-6 border-l border-gray-300" />
              <div className="text-xs text-gray-500">
                {t('reviews.count', { count: 50 })}+
              </div>
            </div>
          </div>

          {/* Header titolo + voto */}
          <div className="px-6 flex flex-col sm:flex-row sm:items-center sm:justify-between mb-6 gap-4">
            <div>
              <h3 className="text-2xl font-bold">
                {t('reviews.sectionTitle', { score: '9.2/10' })}
              </h3>
              <p className="text-gray-700 text-xs">
                {t('reviews.sectionSubtitle', { count: 50 })}
              </p>
            </div>
          </div>

          {/* Highlighted review points */}
          <div className="px-6 grid grid-cols-1 sm:grid-cols-2 gap-6 text-sm">
            <ReviewItem
              icon={<Sparkles className="w-5 h-5 text-green-600" />}
              label={t('reviews.cleanliness')}
              score="9.4"
            />
            <ReviewItem
              icon={<ShieldCheck className="w-5 h-5 text-green-600" />}
              label={t('reviews.staff')}
              score="9.3"
            />
            <ReviewItem
              icon={<Bed className="w-5 h-5 text-green-600" />}
              label={t('reviews.comfort')}
              score="9.2"
            />
            <ReviewItem
              icon={<ThumbsUp className="w-5 h-5 text-green-600" />}
              label={t('reviews.value')}
              score="9.2"
            />
            <ReviewItem
              icon={<MapPin className="w-5 h-5 text-green-600" />}
              label={t('reviews.location')}
              score="9.2"
            />
            <ReviewItem
              icon={<Sparkles className="w-5 h-5 text-green-600" />}
              label={t('reviews.facilities')}
              score="8.7"
            />
          </div>
        </div>

        {/* IMMAGINE – responsive */}
        <div className="xl:block xl:w-2/3 rounded-md overflow-hidden">
          <div className="relative w-full h-[200px] sm:h-[280px] xl:h-[450px] rounded-lg overflow-hidden">
            <Image
              src="/reviewsHero.webp"
              alt={t('reviews.placeholderAlt')}
              fill
              className="object-cover"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );
}

function ReviewItem({
  icon,
  label,
  score,
}: {
  icon: React.ReactNode;
  label: string;
  score: string;
}) {
  return (
    <div className="flex items-start gap-4">
      <div className="pt-1">{icon}</div>
      <div>
        <p className="font-medium">{label}</p>
        <p className="text-gray-500">{score} / 10</p>
      </div>
    </div>
  );
}
