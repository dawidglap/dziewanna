'use client';

import { useEffect, useState } from 'react';

import Link from 'next/link';
import { cn } from '../lib/utils';
import { useTranslations, useLocale } from 'next-intl';
import LayoutWrapper from './LayoutWrapper';
import LangSwitcher from './LangSwitcher';
import Image from 'next/image';


export default function NavbarDesktop() {
  const [scrollY, setScrollY] = useState(0);
  

  const t = useTranslations('Navbar.desktop');
  const locale = useLocale(); 

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const backgroundOpacity = Math.min(scrollY / 200, 1);
  const compact = scrollY > 100;

  return (
    <div
      className={cn(
        'fixed top-0 w-full z-40 transition-all duration-500 hidden xl:block',
        compact ? 'py-2' : 'py-4'
      )}
      style={{
        backgroundColor: `rgba(17, 26, 32, ${backgroundOpacity})`,
        backdropFilter: 'blur(4px)',
      }}
    >
        <LayoutWrapper>
      <div className="max-w-7xl mx-auto  flex items-center justify-between relative">

        {/* Logo */}
        {/* <div className="text-white text-2xl font-bold tracking-widest select-none">
          DZIEWANNA
        </div> */}
        <Link href="/" className="block relative w-[240px] h-[44px] ">
  <Image
    src="/logo_dziewanna_white.png"
    alt="Dziewanna logo"
    fill
    className="object-contain"
    priority
  />
</Link>

        {/* Links */}
        <div className="flex items-center space-x-8 text-white text-sm font-semibold tracking-wide uppercase">
          <Link href={`/${locale}/noclegi`} className="hover:text-yellow-400 transition-colors">{t('accommodation')}</Link>

          {/* See & Do con mega menu */}
          
              <Link
                href={`/${locale}/atrakcje`}
                className="hover:text-yellow-400 transition-colors"
              >
                {t('seeDo')}
              </Link>
           

            <Link
              href={`/${locale}/o-nas`}
              className="hover:text-yellow-400 transition-colors"
            >
              {t('about')}
            </Link>
            <Link
              href={`/${locale}/opinie`}
              className="hover:text-yellow-400 transition-colors"
            >
              {t('reviews')}
            </Link>
             <Link
              href={`/${locale}/faq`}
              className="hover:text-yellow-400 transition-colors"
            >
              {t('faq')}
            </Link>

            <Link
              href={`/${locale}/dojazd`}
              className="hover:text-yellow-400 transition-colors"
            >
              {t('location')}
            </Link>

            <LangSwitcher />
        </div>
      </div>
      </LayoutWrapper>
    </div>
  );
}
