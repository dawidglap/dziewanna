'use client';

import Image from 'next/image';
import { useTranslations } from 'next-intl';
import { apartments } from '../app/data/apartaments'; // ✅ nome e path corretti

type Props = {
  roomId: string;
};

export default function HeroRooms({ roomId }: Props) {
  const t = useTranslations(); // usa il namespace se preferisci: useTranslations('...')
  const room = apartments.find((apt) => apt.id === roomId);

  if (!room) return null;

  return (
    <section className="relative w-full h-[70vh] sm:h-[100vh] md:h-[100vh] xl:h-[100vh] max-h-[1080px]">
      <Image
        src={room.image}
        alt={t(room.titleKey)}
        fill
        priority
        className="object-cover object-center"
      />

      <div className="absolute inset-0 bg-gradient-to-b from-black/15 via-transparent to-transparent" />

      <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-black px-4">
        <h1 className="text-3xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl font-extrabold drop-shadow-md tracking-[.75rem]">
          {t(room.titleKey)}
        </h1>
      </div>
    </section>
  );
}
