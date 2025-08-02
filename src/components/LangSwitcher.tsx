'use client';

import { useState } from 'react';
import { useRouter, usePathname } from 'next/navigation';
import { useLocale } from 'next-intl';
import { HiOutlineGlobeAlt } from 'react-icons/hi';
import { motion, AnimatePresence } from 'framer-motion';
import clsx from 'clsx';

const locales = ['pl', 'de', 'en'];

export default function LangSwitcher() {
  const [isOpen, setIsOpen] = useState(false);
  const router = useRouter();
  const pathname = usePathname();
  const locale = useLocale();

  const handleLocaleChange = (newLocale: string) => {
    const pathWithoutLocale = pathname.replace(/^\/(pl|de|it)/, '') || '/';
    router.push(`/${newLocale}${pathWithoutLocale}`);
    setIsOpen(false);
  };

  return (
    <div className="relative z-30">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="text-white hover:text-[#B2CD9C] transition"
        aria-label="Language selector"
      >
        <HiOutlineGlobeAlt className="w-6 h-6" />
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.ul
            initial={{ opacity: 0, y: -5 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -5 }}
            transition={{ duration: 0.2 }}
            className="absolute right-0 mt-2 w-28 bg-[#1F1F1F] text-white shadow-md rounded-md overflow-hidden"
          >
            {locales.map((loc) => (
              <li
                key={loc}
                onClick={() => handleLocaleChange(loc)}
                className={clsx(
                  'cursor-pointer px-4 py-2 text-sm hover:bg-[#B2CD9C] hover:text-black transition',
                  {
                    'text-[#B2CD9C] font-semibold': loc === locale,
                  }
                )}
              >
                {getLabel(loc)}
              </li>
            ))}
          </motion.ul>
        )}
      </AnimatePresence>
    </div>
  );
}

function getLabel(locale: string) {
  switch (locale) {
    case 'pl':
      return 'Polski';
    case 'de':
      return 'Deutsch';
    case 'en':
      return 'English';
    default:
      return locale;
  }
}
