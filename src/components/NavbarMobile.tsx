'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';
import {
  FaBicycle, FaLeaf, FaFire, FaSpa, FaTree, FaWater,
  FaWineGlassAlt, FaBinoculars, FaInstagram, FaFacebookF,
} from 'react-icons/fa';
import { useTranslations, useLocale } from 'next-intl';
import LangSwitcher from './LangSwitcher';
import Image from 'next/image';

export default function NavbarMobile() {
  const t = useTranslations('Navbar.mobile');
  const locale = useLocale();

  const [open, setOpen] = useState(false);
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const backgroundOpacity = Math.min(scrollY / 300, 1);
  const compact = scrollY > 200;

  // stessi link della desktop, con locale dinamico
  const navLinks = [
    { label: t('accommodation'), href: `/${locale}/noclegi` },
    { label: t('seeAndDo'),      href: `/${locale}/atrakcje` },
    { label: t('about'),         href: `/${locale}/o-nas` },
    { label: t('reviews'),       href: `/${locale}/opinie` },
    { label: t('faq'),           href: `/${locale}/faq` },
    { label: t('location'),      href: `/${locale}/dojazd` },
  ];

  const experiences = [
    { label: t('cycling'), icon: <FaBicycle /> },
    { label: t('mushrooming'), icon: <FaLeaf /> },
    { label: t('herbs'), icon: <FaSpa /> },
    { label: t('kayak'), icon: <FaWater /> },
    { label: t('campfire'), icon: <FaFire /> },
    { label: t('bbq'), icon: <FaWineGlassAlt /> },
    { label: t('forest'), icon: <FaTree /> },
    { label: t('birds'), icon: <FaBinoculars /> },
  ];

  return (
    <div className="xl:hidden fixed top-0 w-full z-50">
      {/* Top bar */}
      <div
        className={`flex justify-between items-center px-6 lg:px-12 xl:px-16 transition-all duration-500 ${
          compact ? 'py-3' : 'py-6'
        }`}
        style={{
          backgroundColor: `rgba(17, 26, 32, ${backgroundOpacity})`,
          backdropFilter: 'blur(8px)',
          zIndex: 50,
          position: 'relative',
        }}
      >
                <Link href="/" className="block relative w-[168px] h-[31px] ">
  <Image
    src="/logo_dziewanna_white.png"
    alt="Dziewanna logo"
    fill
    className="object-contain"
    priority
  />
</Link>
        <div className="flex items-center gap-4">
          <LangSwitcher />
          <button
            onClick={() => setOpen(!open)}
            aria-label="Toggle menu"
            className="relative z-50 w-8 h-8 flex flex-col justify-center items-center gap-2"
          >
            <motion.span
              animate={open ? { rotate: 45, y: 5 } : { rotate: 0, y: 0 }}
              transition={{ duration: 0.3 }}
              className="block w-6 h-0.5 bg-white"
            />
            <motion.span
              animate={open ? { rotate: -45, y: -5 } : { rotate: 0, y: 0 }}
              transition={{ duration: 0.3 }}
              className="block w-6 h-0.5 bg-white"
            />
          </button>
        </div>
      </div>

      {/* Sidebar */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'spring', stiffness: 300, damping: 30 }}
            className="fixed inset-0 bg-[#111A20] text-white z-40 px-6 py-8 pt-[88px] flex flex-col"
          >
            <div className="flex flex-col justify-between flex-grow">
              {/* Link navigazione */}
              <nav className="flex flex-col text-right space-y-5 text-lg font-medium">
                {navLinks.map(({ label, href }) => (
                  <Link
                    key={href}
                    href={href}
                    onClick={() => setOpen(false)}
                    className="hover:text-emerald-300 transition-colors"
                  >
                    {label}
                  </Link>
                ))}
              </nav>

              {/* Social */}
              <div className="flex justify-end gap-6 mt-10">
                <a
                  href="https://www.instagram.com/dziewanna_airbnb"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-emerald-300 transition-colors"
                >
                  <FaInstagram className="w-5 h-5" />
                </a>
                <a
                  href="https://www.facebook.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-emerald-300 transition-colors"
                >
                  <FaFacebookF className="w-5 h-5" />
                </a>
              </div>

              {/* Esperienze */}
              <div className="mt-8">
                <div className="border-t border-white/20 mb-6" />
                <div className="grid grid-cols-2 gap-x-4 gap-y-3 text-sm">
                  {experiences.map(({ label, icon }) => (
                    <div
                      key={label}
                      className="flex items-center gap-2 text-white/90 hover:text-emerald-300 transition-colors"
                    >
                      <span className="w-4 h-4">{icon}</span>
                      <span>{label}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
