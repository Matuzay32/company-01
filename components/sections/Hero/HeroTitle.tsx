'use client';

import { motion } from 'framer-motion';

export default function HeroTitle() {
  return (
    <div className="space-y-6 text-center">
      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-7xl md:text-[8rem] font-bold tracking-tight"
      >
        Vortex Pulse
        <br />
        <span className="bg-gradient-to-r from-white to-white/40 bg-clip-text text-transparent">
          Design
        </span>
      </motion.h1>

      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="text-xl md:text-2xl text-white/70 max-w-2xl mx-auto font-light"
      >
        Creating tomorrow's digital experiences with precision, innovation, and
        artistry
      </motion.p>
    </div>
  );
}
