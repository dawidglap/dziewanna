'use client';

import Image from 'next/image';
import { useTranslations } from 'next-intl';
import Poster from '../../public/poster.webp';

import { Leaf, Sun, Snowflake, Flame, Apple, MountainSnow, Trees, Flower, GlassWater } from "lucide-react";


export default function AboutDziewanna() {
  const t = useTranslations();

  return (
    <section className="bg-[#f4f3ef] text-black px-6 md:px-12 xl:px-20 py-16 xl:py-32 ">
      <div className="max-w-7xl mx-auto grid grid-cols-1 xl:grid-cols-2 gap-12 xl:gap-24 items-center pt-20">
        {/* Colonna sinistra */}
       <div className="h-full flex flex-col justify-between space-y-8">
  <div className="space-y-1 -mt-20">
    <p className="uppercase tracking-widest text-sm text-neutral-500">
      {t('aboutDziewanna.pretitle')}
    </p>
    <h2 className="text-3xl md:text-4xl xl:text-5xl font-bold ">
      {t('aboutDziewanna.title')}
    </h2>
  </div>

  <div className="h-full rounded-xl overflow-hidden shadow-lg -mt-20">
    <Image
      src={Poster}
      alt="Dziewanna Main"
      className="object-cover w-full h-full"
      placeholder="blur"
    />
  </div>
</div>


        {/* Colonna destra */}
       <div className="flex flex-col gap-6">
  {/* Immagini */}
  <div className="flex flex-col md:flex-row gap-6">
    {/* Immagine 1 */}
    <div className="md:w-1/2 mt-0 md:mt-10">
      <div className="aspect-square rounded-xl overflow-hidden shadow-md">
        <Image
          src={Poster}
          alt="Dziewanna small 1"
          className="object-cover w-full h-full"
          placeholder="blur"
        />
      </div>
    </div>
    {/* Immagine 2 */}
    <div className="md:w-1/2 mt-0 md:-mt-10">
      <div className="aspect-square rounded-xl overflow-hidden shadow-md">
        <Image
          src={Poster}
          alt="Dziewanna small 2"
          className="object-cover w-full h-full"
          placeholder="blur"
        />
      </div>
    </div>
  </div>

  {/* Descrizione */}
 

<div className="space-y-6 text-base md:text-lg leading-relaxed">
  <p>{t("aboutDziewanna.paragraph1")}</p>

  <p>{t("aboutDziewanna.paragraph2")}</p>

  {/* Stagioni */}
  <div className="space-y-2">
    <div className="flex items-center gap-2">
      <Flower className="w-5 h-5 text-green-600" />
      <p className="m-0">{t("aboutDziewanna.spring")}</p>
    </div>
    <div className="flex items-center gap-2">
      <Sun className="w-5 h-5 text-yellow-500" />
      <p className="m-0">{t("aboutDziewanna.summer")}</p>
    </div>
    <div className="flex items-center gap-2">
      <Leaf className="w-5 h-5 text-orange-500" />
      <p className="m-0">{t("aboutDziewanna.autumn")}</p>
    </div>
    <div className="flex items-center gap-2">
      <MountainSnow className="w-5 h-5 text-blue-500" />
      <p className="m-0">{t("aboutDziewanna.winter")}</p>
    </div>
  </div>

  {/* Esperienze */}
  <div className="space-y-2 mt-4">
    <p className="font-semibold">{t("aboutDziewanna.experiencesTitle")}</p>
    <ul className="list-disc list-inside space-y-1">
      <li className="flex gap-2 items-start">
        <Trees className="w-4 h-4 mt-1 text-emerald-600" />
        {t("aboutDziewanna.gardenWalk")}
      </li>
      <li className="flex gap-2 items-start">
        <Apple className="w-4 h-4 mt-1 text-red-500" />
        {t("aboutDziewanna.fruitTasting")}
      </li>
      <li className="flex gap-2 items-start">
        <Flame className="w-4 h-4 mt-1 text-orange-600" />
        {t("aboutDziewanna.bonfire")}
      </li>
      <li className="flex gap-2 items-start">
        <GlassWater className="w-4 h-4 mt-1 text-indigo-600" />
        {t("aboutDziewanna.homemadeProducts")}
      </li>
    </ul>
  </div>

  <p>{t("aboutDziewanna.paragraph3")}</p>
  <p className="font-semibold">{t("aboutDziewanna.invite")}</p>
</div>


  {/* Bottoni */}
  <div className="mt-4 flex gap-4 flex-wrap">
    <button className="px-6 py-2 bg-black text-white rounded-full text-sm font-medium">
      {t('aboutDziewanna.seeApartments')}
    </button>
    <button className="px-6 py-2 border border-black rounded-full text-sm font-medium">
      {t('aboutDziewanna.callToBook')}
    </button>
  </div>
</div>

      </div>
    </section>
  );
}
