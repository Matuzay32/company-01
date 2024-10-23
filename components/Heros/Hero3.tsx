import React from 'react';
import CubeCanvas from '../3d/CubeCanvas'; // Asegúrate de que la ruta sea correcta

export default function Hero3() {
  return (
    <div className="relative w-full flex items-center justify-center min-h-screen">
      <CubeCanvas />
    </div>
  );
}
