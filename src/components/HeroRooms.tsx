'use client';

import Image from 'next/image';
import { useTranslations } from 'next-intl';
import { apartments } from '../app/data/apartaments'; // crea questo file con array se vuoi


type Props = {
  roomId: string;
};

export default function HeroRooms({ roomId }: Props) {
  const t = useTranslations();
  const room = apartments.find((apt) => apt.id === roomId);

  if (!room) return null;

  return (
    <section className="relative w-full  h-[400px] sm:h-[400px] md:h-[500px] xl:h-[100vh]">
      {/* Background image */}
      <Image
        src={room.image}
        alt={t(room.titleKey)}
        fill
        priority
        className="object-cover object-center"
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/15 via-transparent to-transparent" />


      {/* Text content */}
      <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-black px-4">
        <h1 className="text-3xl  sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl font-extrabold drop-shadow-md tracking-[.75rem]">
          {t(room.titleKey)}
        </h1>
        {/* <p className="font-bold font-caveat mt-4 text-sm sm:text-base md:text-2xl max-w-2xl drop-shadow-sm text-gray-500">
          {t(room.descKey)} 
        </p> */}
      </div>
    </section>
  );
}
