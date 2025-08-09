'use client';

import { useState } from 'react';
import { useTranslations } from 'next-intl';
import clsx from 'clsx';
import RoomTabNavigation from './RoomTabNavigation';
import { AnimatePresence, motion } from 'framer-motion';

const TABS = ['house', 'sleeping', 'eating', 'bathing', 'relaxing'];

type Props = {
  roomId: string;
};

export default function RoomTabs({ roomId }: Props) {
  const [activeTab, setActiveTab] = useState('house');
  const t = useTranslations('Room');

  return (
    <section className="w-full max-w-7xl mx-auto px-0 sm:px-0 lg:px-0 py-10">
      {/* CTA button on mobile */}
      <div className="block xl:hidden mb-6">
        <a
          href="tel:+48730733399"
          className="block w-full bg-[#1F1F1F] text-white text-center font-semibold px-6 py-3 rounded-sm shadow hover:bg-[#B2CD9C] hover:text-black transition"
        >
          {t('ctaCall')}
        </a>
      </div>

      {/* Tabs + CTA on desktop */}
      <div className="flex flex-wrap xl:flex-nowrap justify-start xl:justify-between items-center xl:gap-8 mb-8">
        <div className="grid grid-cols-2 sm:grid-cols-3 xl:flex gap-2 w-full xl:w-auto">
          {TABS.map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={clsx(
                'uppercase text-sm sm:text-base px-4 py-2 border',
                'transition rounded-sm font-semibold tracking-wider w-full sm:w-auto text-center',
                activeTab === tab
                  ? 'bg-[#B2CD9C] text-white border-[#B2CD9C]'
                  : 'bg-white text-[#1F1F1F] border-gray-300 hover:bg-[#B2CD9C] hover:text-black'
              )}
            >
              {t(`tabs.${tab}`)}
            </button>
          ))}
        </div>

        {/* CTA desktop */}
        <div className="hidden xl:block">
          <a
            href="tel:+48730733399"
            className="bg-[#1F1F1F] text-white text-center font-semibold px-6 py-3 rounded-sm shadow hover:bg-[#B2CD9C] hover:text-black transition max-w-md"
          >
            {t('ctaCall')}
          </a>
        </div>
      </div>

      {/* Tab content with animation */}
      <AnimatePresence mode="wait">
        <motion.div
          key={activeTab}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.4 }}
        >
          <RoomTabContent tab={activeTab} roomId={roomId} setTab={setActiveTab} />
        </motion.div>
      </AnimatePresence>
    </section>
  );
}

function RoomTabContent({
  tab,
  
  setTab,
}: {
  tab: string;
  roomId: string;
  setTab: (tab: string) => void;
}) {
  const t = useTranslations('Room');

  return (
    <div>
      <h2 className="text-5xl font-bold mb-4 text-center py-14 md:py-20">
        {t(`${tab}.title`)}
      </h2>
      <p className="pb-10 md:pb-16 text-base text-gray-700 mb-6 max-w-4xl mx-auto">
        {t(`${tab}.description`)}
      </p>

      {/* Responsive image grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="aspect-[2/3] bg-gray-100" />
        <div className="aspect-[2/3] bg-gray-200" />
        <div className="aspect-[2/3] bg-gray-300" />
      </div>

      {/* Navigation arrows */}
      <RoomTabNavigation currentTab={tab} setCurrentTab={setTab} />
    </div>
  );
}
