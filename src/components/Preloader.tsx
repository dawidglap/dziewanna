'use client';

import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function Preloader({ onFinish }: { onFinish: () => void }) {
  const [step, setStep] = useState(0);
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const timers = [
      setTimeout(() => setStep(1), 200),  // DZIEWANNA entra
      setTimeout(() => setStep(2), 800),  // POKOJE Z DUSZĄ entra
      setTimeout(() => setStep(3), 1400), // POKOJE Z DUSZĄ esce
      setTimeout(() => setStep(4), 1800), // preloader slide via
      setTimeout(() => {
        setVisible(false);
        onFinish();
      }, 2300),
    ];
    return () => timers.forEach(clearTimeout);
  }, [onFinish]);

  return (
    <AnimatePresence mode="wait">
      {visible && (
        <motion.div
          key="preloader"
          initial={{ y: 0 }}
          animate={step === 4 ? { y: '-100%' } : { y: 0 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5, ease: 'easeInOut' }}
          className="fixed inset-0 z-50 flex items-center justify-center bg-[#111A20] overflow-hidden"
        >
          {/* Muro (copertura iniziale per effetto salita) */}
          <div className="absolute top-[55%] h-[100px] w-full bg-[#111A20] z-30" />

          {/* Frase 1: DZIEWANNA */}
          <AnimatePresence>
            {step === 1 && (
              <motion.span
                key="dziewanna"
                initial={{ y: '100%', opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.4, ease: 'easeOut' }}
                className="font-caveat absolute text-6xl md:text-7xl font-bold tracking-widest text-white z-20"
              >
                Dziewanna
              </motion.span>
            )}
          </AnimatePresence>

          {/* Frase 2: POKOJE Z DUSZĄ */}
          <AnimatePresence>
            {step === 2 && (
              <motion.span
                key="pokoje"
                initial={{ y: '100%', opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: '-100%', opacity: 0 }}
                transition={{ duration: 0.4, ease: 'easeOut' }}
                className="font-montserrat text-center absolute text-xl md:text-5xl font-bold tracking-widest text-emerald-300 z-20 bg-[#111A20] px-4"
              >
                POKOJE Z DUSZĄ
              </motion.span>
            )}
          </AnimatePresence>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
