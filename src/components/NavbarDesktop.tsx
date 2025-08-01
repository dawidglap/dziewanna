'use client';

import { useEffect, useState } from 'react';
import { FaGlobe } from 'react-icons/fa';
import Link from 'next/link';
import { cn } from '../lib/utils';
import MegaMenuSeeDo from './MegaMenuSeeDo';
import { useTranslations } from 'next-intl';

export default function NavbarDesktop() {
  const [scrollY, setScrollY] = useState(0);
  const [showMegaMenu, setShowMegaMenu] = useState(false);

  const t = useTranslations('Navbar.desktop');

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
      <div className="container mx-auto px-6 flex items-center justify-between relative">
        {/* Logo */}
        <div className="text-white text-2xl font-bold tracking-widest select-none">
          DZIEWANNA
        </div>

        {/* Links */}
        <div className="flex items-center space-x-8 text-white text-sm font-semibold tracking-wide uppercase">
          <Link href="#zakwaterowanie" className="hover:text-[#B2CD9C] transition-colors">{t('accommodation')}</Link>

          {/* See & Do con mega menu */}
          <div
            onMouseEnter={() => setShowMegaMenu(true)}
            onMouseLeave={() => setShowMegaMenu(false)}
            className="relative"
          >
            <button className="hover:text-[#B2CD9C] transition-colors">
              {t('seeDo')}
            </button>
            {showMegaMenu && <MegaMenuSeeDo />}
          </div>

          <Link href="#about" className="hover:text-[#B2CD9C] transition-colors">{t('about')}</Link>
          <Link href="#reviews" className="hover:text-[#B2CD9C] transition-colors">{t('reviews')}</Link>

          <FaGlobe className="w-4 h-4 cursor-pointer hover:text-[#B2CD9C]" />
        </div>
      </div>
    </div>
  );
}
