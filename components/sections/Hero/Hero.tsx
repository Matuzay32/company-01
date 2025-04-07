'use client';

import { useEffect, useRef } from 'react';
import HeroTitle from './HeroTitle';
import HeroScroll from './HeroScroll';
import { motion } from 'framer-motion';

export default function Hero() {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const video = videoRef.current;
    if (video) {
      const playVideo = () => {
        video.muted = true; // Asegura que esté silenciado (obligatorio para autoplay)
        video.play().catch((err) => console.error('Autoplay failed:', err));
      };

      if (document.visibilityState === 'visible') {
        playVideo();
      } else {
        const onVisibilityChange = () => {
          if (document.visibilityState === 'visible') {
            playVideo();
            document.removeEventListener(
              'visibilitychange',
              onVisibilityChange
            );
          }
        };
        document.addEventListener('visibilitychange', onVisibilityChange);
      }
    }
  }, []);

  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 z-0">
        <video
          ref={videoRef}
          autoPlay
          loop
          muted
          playsInline
          preload="auto"
          className="w-full h-full object-cover"
        >
          <source src="/videos/particles_video1.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black/70" />
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="relative z-10 px-4"
      >
        <HeroTitle />
      </motion.div>

      <HeroScroll />
    </section>
  );
}
