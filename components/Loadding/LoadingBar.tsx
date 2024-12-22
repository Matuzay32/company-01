'use client';

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const LoadingBar: React.FC = () => {
  const [progress, setProgress] = useState(0);
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const updateProgress = () => {
      let interval: NodeJS.Timeout;

      if (document.readyState === 'complete') {
        setProgress(100); // Página completamente cargada
        setTimeout(() => setIsVisible(false), 2000); // Ocultar después de 1s
      } else {
        // Simular progreso mientras carga
        interval = setInterval(() => {
          setProgress((prev) => {
            const nextProgress = prev + Math.random() * 20; // Simula incremento rápido
            return nextProgress >= 90 ? 90 : nextProgress; // Limita hasta 90%
          });
        }, 300);
      }

      // Cuando termina de cargar la página
      window.addEventListener('load', () => {
        setProgress(100);
        clearInterval(interval);
        setTimeout(() => setIsVisible(false), 1000);
      });
    };

    updateProgress();
  }, []);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-black"
          style={{ zIndex: 51 }}
        >
          {/* Porcentaje */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-[#ffff] text-5xl font-extrabold mb-6"
            style={{ textShadow: '0 0 5px #ffff, 0 0 10px #ffff' }}
          >
            {Math.round(progress)}%
          </motion.div>

          {/* Barra principal */}
          <div className="relative w-80 md:w-[500px] h-6 bg-transparent">
            {/* Glow detrás */}
            <div
              className="absolute inset-0 bg-[#ffff] opacity-20 blur-2xl"
              style={{
                width: `${progress}%`,
                // borderRadius: '10px',
                transition: 'width 0.3s ease-in-out',
              }}
            />

            {/* Fondo translúcido */}
            <div className="w-full h-full bg-[#aea8a8] opacity-70 rounded-md" />

            {/* Barra de progreso */}
            <motion.div
              className="absolute top-0 left-0 h-full bg-[#ffff]"
              style={{
                borderRadius: '10px',
                boxShadow: '0 0 5px #ffff, 2px 2px 10px #ffff, 0px 0px 45px ',
              }}
              initial={{ width: 0 }}
              animate={{ width: `${progress}%` }}
              transition={{ duration: 0.3, ease: 'easeInOut' }}
            />
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default LoadingBar;
