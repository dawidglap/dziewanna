'use client';

import { CiInstagram } from 'react-icons/ci';
import Link from 'next/link';

export default function InstagramBadge() {
  return (
    <div className="fixed right-0 top-1/2 -translate-y-1/2 z-40">
      <Link
        href="https://www.instagram.com/dziewanna_airbnb"
        target="_blank"
        rel="noopener noreferrer"
        className="bg-white shadow-lg w-[32px] text-black hover:bg-[#B2CD9C] h-[128px] flex flex-col items-center justify-center space-y-6"
      >
        <CiInstagram className="w-5 h-5" />
        <span className="text-[10px] font-medium tracking-wider rotate-180 writing-vertical">
          Instagram
        </span>
      </Link>
    </div>
  );
}
