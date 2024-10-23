// CubeCanvas.jsx
import React from 'react';
import { Canvas } from '@react-three/fiber';
import { Box } from '@react-three/drei';

const CubeCanvas = () => {
  return (
    <Canvas style={{ height: '500px', width: '500px', background: '#000' }}>
      <ambientLight intensity={0.5} />
      <directionalLight intensity={1} position={[0, 2, 3]} />
      <Box args={[1, 1, 1]} position={[0, 0, 0]}>
        <meshStandardMaterial attach="material" color="orange" />
      </Box>
    </Canvas>
  );
};

export default CubeCanvas;
