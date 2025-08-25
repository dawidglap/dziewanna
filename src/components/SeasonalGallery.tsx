"use client";

import Image from "next/image";
import { useEffect, useRef, useState, useMemo} from "react";
import { useTranslations } from "next-intl";
import Poster from "../../public/poster.webp";
import { motion, AnimatePresence } from "framer-motion";






// Array delle stagioni (titolo e descrizione sono chiavi i18n)
const SEASONS = [
  {
    id: "spring",
    image: Poster,
    titleKey: "season.spring.title",
    descKey: "season.spring.description",
  },
  {
    id: "summer",
    image: Poster,
    titleKey: "season.summer.title",
    descKey: "season.summer.description",
  },
  {
    id: "autumn",
    image: Poster,
    titleKey: "season.autumn.title",
    descKey: "season.autumn.description",
  },
  {
    id: "winter",
    image: Poster,
    titleKey: "season.winter.title",
    descKey: "season.winter.description",
  },
];

export default function SeasonalGallery() {
  const t = useTranslations();

  const imageRef = useRef<HTMLDivElement>(null);
  const sectionRef = useRef<HTMLDivElement>(null);
  const [progress, setProgress] = useState(0);
  const [currentSeasonIndex, setCurrentSeasonIndex] = useState(0);
  const [barWidth, setBarWidth] = useState(0);



  // Scroll zoom effect
useEffect(() => {
  let animationFrameId: number;

  const handleScroll = () => {
    animationFrameId = requestAnimationFrame(() => {
      if (!sectionRef.current) return;

      const rect = sectionRef.current.getBoundingClientRect();
      const scrollProgress = Math.min(Math.max(-rect.top / window.innerHeight, 0), 1);
      setProgress(scrollProgress);
    });
  };

  window.addEventListener("scroll", handleScroll);
  return () => {
    window.removeEventListener("scroll", handleScroll);
    cancelAnimationFrame(animationFrameId);
  };
}, []);


  // Cambio automatico stagione ogni 5s
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSeasonIndex((prev) => (prev + 1) % SEASONS.length);
    }, 10000);

    return () => clearInterval(interval);
  }, []);

useEffect(() => {
  let start: number | null = null;
  let frameId: number;

  const animate = (timestamp: number) => {
    if (!start) start = timestamp;

    const elapsed = timestamp - start;
    const progress = Math.min(elapsed / 10000, 1); // 5s
    setBarWidth(progress * 100);

    if (progress < 1) {
      frameId = requestAnimationFrame(animate);
    }
  };

  // Reset subito prima di iniziare
  setBarWidth(0);
  frameId = requestAnimationFrame(animate);

  return () => cancelAnimationFrame(frameId);
}, [currentSeasonIndex]);


const dynamicBottom = useMemo(() => {
  const isMobile = typeof window !== "undefined" && window.innerWidth < 768;
  const min = isMobile ? 12 : 24;
  const max = isMobile ? 80 : 120;
  return `${min + (max - min) * progress}px`;
}, [progress]);



// eslint-disable-next-line @typescript-eslint/no-unused-vars
  const { image, titleKey, descKey } = SEASONS[currentSeasonIndex];
  const width = 50 + progress * 53;
  const height = 50 + progress * 53;
  const shouldShowLabels = width >= 80 && height >= 80;


  return (
    <section ref={sectionRef} className="relative w-full h-[200vh] bg-yellow-200">
        
      <div className="sticky top-0 h-screen w-full overflow-hidden flex items-center justify-center">
        <div
          ref={imageRef}
          style={{
            width: `${width}vw`,
            height: `${height}vh`,
          }}
          className="transition-all duration-300 ease-out relative "
        >
          <Image
            src={image}
            alt="Season"
            fill
            className="object-cover "
            priority
          />

          {/* Overlay contenuti stagionali */}
 <AnimatePresence mode="wait">
  <motion.div
    key={SEASONS[currentSeasonIndex].id}
    className="absolute inset-0"
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    exit={{ opacity: 0 }}
    transition={{ duration: 1 }}
    style={{ willChange: "opacity" }}

  >
    <Image
      src={SEASONS[currentSeasonIndex].image}
      alt="Season"
      fill
      className="object-cover"
      priority
    />

    {/* Overlay contenuti stagionali */}
    <div className="absolute inset-0 flex flex-col items-center justify-center text-white px-6 text-center">
      <motion.h2
        className="text-3xl md:text-5xl font-bold mb-4 font-handwriting text-yellow-300"
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -10 }}
        transition={{ duration: 0.8 }}
      >
        {t(SEASONS[currentSeasonIndex].titleKey)}
      </motion.h2>

      <motion.p
        className="text-sm md:text-lg max-w-2xl mb-6"
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -10 }}
        transition={{ duration: 0.8, delay: 0.1 }}
      >
        {t(SEASONS[currentSeasonIndex].descKey)}
      </motion.p>

      <motion.div
        className="flex flex-col md:flex-row gap-4 w-full md:w-auto justify-center items-center"
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -10 }}
        transition={{ duration: 0.8, delay: 0.2 }}
      >
        <button className="bg-black hover:bg-yellow-400 hover:text-black cursor-pointer text-white px-6 py-3 text-sm md:text-base font-semibold rounded-md w-full md:w-auto">
          {t("button.readMore")}
        </button>
        <button className="border border-white hover:bg-yellow-400 hover:border-yellow-400 hover:text-black cursor-pointer text-white px-6 py-3 text-sm md:text-base font-semibold rounded-md w-full md:w-auto">
          {t("button.guidedHikes")}
        </button>
      </motion.div>
    </div>
  </motion.div>
</AnimatePresence>



          {/* Etichette stagionali in basso */}
<div
  className={`absolute left-1/2 -translate-x-1/2 w-full max-w-4xl px-4 md:px-10 z-10 transition-all duration-700 ease-out ${
    shouldShowLabels
      ? "opacity-100 translate-y-0 pointer-events-auto"
      : "opacity-0 translate-y-4 pointer-events-none"
  }`}
  style={{
    bottom: dynamicBottom,
  }}
>
  <div className="grid grid-cols-2 place-items-center md:flex md:flex-wrap justify-center gap-x-4 gap-y-2 w-[90%] max-w-sm mx-auto md:max-w-none md:w-full">
    {SEASONS.map((season, i) => (
      <div key={season.id} className="w-1/2 md:flex-1 text-center">
        <div
          className={`font-semibold tracking-wider text-sm md:text-lg ${
            i === currentSeasonIndex ? "text-yellow-400" : "text-white"
          }`}
        >
          {season.id.toUpperCase()}
        </div>
        <div className="h-[2px] w-full bg-white/30 mt-1 relative overflow-hidden rounded">
       <div
  className="h-full bg-yellow-400 transition-all duration-100 will-change-[width]"
  style={{ width: i === currentSeasonIndex ? `${barWidth}%` : "0%" }}
/>

        </div>
      </div>
    ))}
  </div>
</div>




        </div>
      </div>
    </section>
  );
}
