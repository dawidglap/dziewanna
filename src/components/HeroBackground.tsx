'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';

export default function HeroBackground() {
  const [isVisible, setIsVisible] = useState(false);

  return (
    <div className="absolute inset-0 -z-10 overflow-hidden">
      <motion.video
        key="hero-video"
        autoPlay
        muted
        loop
        playsInline
        preload="auto"
        className="w-full h-full object-cover"
        initial={{ opacity: 0 }}
        animate={isVisible ? { opacity: 1 } : { opacity: 0 }}
        transition={{ duration: 1 }}
        onCanPlay={() => setIsVisible(true)} // avvia fade-in solo quando il browser può effettivamente riprodurre
      >
        <source
          src="/videos/hero-dziewanna-ultimate-hq.webm"
          type="video/webm"
          media="(min-width: 768px)"
        />
        <source
          src="/videos/hero-dziewanna-ultimate-light.webm"
          type="video/webm"
          media="(max-width: 767px)"
        />
        <source
          src="/videos/hero-dziewanna-ultimate.mp4"
          type="video/mp4"
        />
        Your browser does not support the video tag.
      </motion.video>
    </div>
  );
}
