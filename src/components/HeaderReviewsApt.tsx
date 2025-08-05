'use client';

import { useTranslations } from 'next-intl';
import {
  Star,
  ThumbsUp,
  Sparkles,
  ShieldCheck,
  Bed,
  MapPin,
  Award,
} from 'lucide-react';

export default function HeaderReviewsApt() {
  const t = useTranslations();

  return (
    <section className="bg-[#FAFAFA] py-12 px-4 sm:px-8 xl:px-0 max-w-7xl mx-auto rounded-lg shadow-sm">
      {/* Badge Airbnb-style box */}
      <div className="w-full xl:w-1/2 border border-gray-200 rounded-xl p-5 sm:p-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left shadow-sm mb-12">
        {/* Badge */}
        <div className="flex items-center gap-3 text-green-700 font-semibold text-lg">
          <Award className="w-6 h-6 text-green-700" />
          <span>{t('reviews.badgeTitle')}</span>
        </div>

        {/* Score */}
        <div className="flex items-center gap-6">
          <div className="text-3xl font-bold text-black">9.2</div>
          <div className="h-6 border-l border-gray-300" />
          <div className="text-sm text-gray-500">{t('reviews.count', { count: 48 })}</div>
        </div>
      </div>

      {/* Header titolo + voto */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-8 gap-4">
        <div>
          <h2 className="text-3xl font-bold">
            {t('reviews.sectionTitle', { score: '9.2/10' })}
          </h2>
          <p className="text-gray-700 text-sm">
            {t('reviews.sectionSubtitle', { count: 48 })}
          </p>
        </div>

        <div className="flex items-center gap-2">
          <Star className="text-blue-600 w-6 h-6" />
          <span className="text-xl font-semibold">9.2</span>
          <span className="text-gray-500 text-sm">/ 10</span>
        </div>
      </div>

      {/* Highlighted review points */}
      <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6 text-sm">
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
