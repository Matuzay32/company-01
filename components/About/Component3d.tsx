'use client';

import { motion, useAnimation } from 'framer-motion';
import { useEffect } from 'react';

export default function Component3d() {
  const controls = useAnimation();

  useEffect(() => {
    controls.start({
      scale: [1, 1.05, 1],
      opacity: [1, 0.95, 1],
      transition: {
        duration: 3,
        repeat: Infinity,
        ease: 'easeInOut',
      },
    });
  }, [controls]);

  return (
    <div className="min-h-screen bg-black text-white flex items-center justify-center">
      <div className="relative w-96 h-96">
        <motion.div
          className="absolute inset-0"
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
        >
          {/* Tarjeta de fondo con animación de rotación y escala */}
          <motion.div
            className="absolute inset-0 rounded-2xl bg-white bg-opacity-20 backdrop-blur-sm border border-white border-opacity-30 shadow-2xl transform -rotate-6"
            animate={{
              rotate: [0, 10, 0],
              scale: [1, 1.05, 1], // Agrega la animación de escala
            }}
            transition={{
              duration: 5,
              repeat: Infinity,
              ease: 'linear',
            }}
          />
          <motion.div
            className="absolute inset-0 rounded-2xl bg-white bg-opacity-20 backdrop-blur-sm border border-white border-opacity-30 shadow-2xl transform rotate-6"
            animate={{
              rotate: [0, -10, 0],
              scale: [1, 1.05, 1], // Agrega la animación de escala
            }}
            transition={{
              duration: 5,
              repeat: Infinity,
              ease: 'linear',
            }}
          />
          <div className="absolute inset-0 rounded-2xl bg-white bg-opacity-10 backdrop-blur-sm border border-white border-opacity-20 shadow-2xl" />

          {/* Imagen como fondo */}
          <motion.div
            className="absolute inset-0 rounded-2xl overflow-hidden"
            animate={controls}
            style={{ transformStyle: 'preserve-3d' }}
          >
            <img
              src="/vortexPulseLogo.webp"
              alt="Vortex Pulse Logo"
              className="w-full h-full object-cover rounded-2xl"
            />
            {/* Gradiente oscuro con menos brillo */}
            <div className="absolute inset-0 bg-gradient-to-r from-gray-900 to-black opacity-40 blur-xl animate-pulse" />
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}
