'use client';

import { useEffect, useState } from 'react';
import { useTranslations } from 'next-intl';
import { Link } from '@/i18n/navigation';
import Hero from '@/components/Hero';
import Preloader from '@/components/Preloader';

export default function HomePage() {
  const t = useTranslations('HomePage');
  const [showPreloader, setShowPreloader] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowPreloader(false);
    }, 3000); // durata animazione

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {showPreloader ? (
        <Preloader onFinish={() => setShowPreloader(false)} />
      ) : (
        <div>
          <Hero />
          <h1 className="text-3xl font-bold underline text-red-500">{t('title')}</h1>
          <Link href="/about">{t('about')}</Link>
        </div>
      )}
    </>
  );
}
