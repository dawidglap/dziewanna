'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';
import {
  
  FaBicycle,
  FaLeaf,
  FaFire,
  FaSpa,
  FaTree,
  FaWater,
  FaWineGlassAlt,
  FaBinoculars,
  FaInstagram,
  FaFacebookF,
} from 'react-icons/fa';


import { useTranslations } from 'next-intl';
import LangSwitcher from './LangSwitcher';

export default function NavbarMobile() {
  const t = useTranslations('Navbar.mobile');

  const [open, setOpen] = useState(false);
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const backgroundOpacity = Math.min(scrollY / 300, 1);
  const compact = scrollY > 200;

  const navLinks = [
    { label: t('accommodation'), href: '#zakwaterowanie' },
    { label: t('seeAndDo'), href: '#see-do' },
    { label: t('about'), href: '#about' },
    { label: t('reviews'), href: '#reviews' },
    { label: t('faq'), href: '#faq' },
    { label: t('location'), href: '#location' },
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
      {/* Top bar sempre sopra */}
      <div
        className={`flex justify-between items-center px-6 lg:px-12 xl:px-16 transition-all duration-500 ${
          compact ? 'py-2' : 'py-4'
        }`}
        style={{
          backgroundColor: `rgba(17, 26, 32, ${backgroundOpacity})`,
          backdropFilter: 'blur(8px)',
          zIndex: 50,
          position: 'relative',
        }}
      >
        <span className="text-xl font-bold tracking-wider text-white">DZIEWANNA</span>
        <div className="flex items-center gap-4">
  <LangSwitcher />
        
<button
  onClick={() => setOpen(!open)}
  aria-label="Toggle menu"
  className="relative z-50 w-8 h-8 flex flex-col justify-center items-center gap-2"
>
  {/* Linea 1 */}
  <motion.span
    animate={open ? { rotate: 45, y: 5 } : { rotate: 0, y: 0 }}
    transition={{ duration: 0.3 }}
    className="block w-6 h-0.5 bg-white"
  />
  {/* Linea 2 */}
  <motion.span
    animate={open ? { rotate: -45, y: -5 } : { rotate: 0, y: 0 }}
    transition={{ duration: 0.3 }}
    className="block w-6 h-0.5 bg-white"
  />
</button>
</div>


      </div>

      {/* Sidebar sotto il top bar */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'spring', stiffness: 300, damping: 30 }}
            className="fixed inset-0 bg-[#111A20] text-white z-40 px-6 py-8 pt-[88px] flex flex-col" // pt-[88px] ≈ spazio barra top
          >
            {/* X in alto a destra sopra la tenda */}
            {/* <div className="fixed top-4 right-4 z-50">
              <button onClick={() => setOpen(false)} aria-label="Close menu">
                <FaTimes className="w-6 h-6 text-white" />
              </button>
            </div> */}

            <div className="flex flex-col justify-between flex-grow">
              {/* Link navigazione */}
              <nav className="flex flex-col text-right space-y-5 text-lg font-medium">
                {navLinks.map(({ label, href }) => (
                  <Link key={href} href={href} onClick={() => setOpen(false)}>
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
