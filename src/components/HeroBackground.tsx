'use client';

import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

export default function HeroBackground() {
  const [isVideoReady, setIsVideoReady] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(() => setIsVideoReady(true), 200); // fallback in caso di lentezza
    return () => clearTimeout(timeout);
  }, []);

  return (
    <div className="absolute inset-0 -z-10 overflow-hidden">
      {isVideoReady && (
        <motion.video
          key="hero-video"
          autoPlay
          muted
          loop
          playsInline
          className="w-full h-full object-cover"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
          poster="/videos/poster.webp" // opzionale
        >
          <source
            src="/videos/hero-dziewanna-ultimate-hq.webm"
            type="video/webm"
            media="(min-width: 768px)" // Tablet e Desktop
          />
          <source
            src="/videos/hero-dziewanna-ultimate-light.webm"
            type="video/webm"
            media="(max-width: 767px)" // Mobile
          />
          {/* Fallback */}
          Your browser does not support the video tag.
        </motion.video>
      )}
    </div>
  );
}
