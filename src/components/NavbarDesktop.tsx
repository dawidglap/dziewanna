'use client';

import { useEffect, useState } from 'react';
import { FaGlobe } from 'react-icons/fa';
import Link from 'next/link';
import { cn } from '../lib/utils';

export default function NavbarDesktop() {
  const [scrollY, setScrollY] = useState(0);

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
        'fixed top-0 w-full z-40 transition-all duration-500',
        compact ? 'py-2' : 'py-4'
      )}
      style={{
        backgroundColor: `rgba(17, 26, 32, ${backgroundOpacity})`,
        backdropFilter: 'blur(4px)', // facoltativo
      }}
    >
      <div className="container mx-auto px-6 flex items-center justify-between">
        {/* Logo */}
        <div className="text-white text-2xl font-bold tracking-widest select-none">
          DZIEWANNA
        </div>

        {/* Link + lingua */}
        <div className="flex items-center space-x-8 text-white text-sm font-semibold tracking-wide uppercase">
          <Link href="#zakwaterowanie" className="hover:text-[#B2CD9C] transition-colors">Zakwaterowanie</Link>
          <Link href="#see-do" className="hover:text-[#B2CD9C] transition-colors">See & Do</Link>
          <Link href="#about" className="hover:text-[#B2CD9C] transition-colors">About</Link>
          <Link href="#reviews" className="hover:text-[#B2CD9C] transition-colors">Reviews</Link>
          <FaGlobe className="w-4 h-4 cursor-pointer hover:text-[#B2CD9C]" />
        </div>
      </div>
    </div>
  );
}
