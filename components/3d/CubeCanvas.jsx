import React, { useRef, useState, useEffect } from 'react';
import { Canvas, useThree } from '@react-three/fiber';
import {
  Environment,
  MeshTransmissionMaterial,
  useGLTF,
  Text,
} from '@react-three/drei';
import { useFrame } from '@react-three/fiber';

const Model = () => {
  const { nodes } = useGLTF('/medias/torrus.glb');
  const torus = useRef(null);
  const { viewport } = useThree();

  useFrame(() => {
    if (torus.current) {
      torus.current.rotation.x += 0.02;
    }
  });

  const materialProps = {
    scale: 3.9,
    thickness: 0.2,
    roughness: 0,
    transmission: 1,
    ior: 1.2,
    chromaticAberration: 0.02,
    backside: true,
  };

  const textSize = Math.max(0.4, viewport.width / 1000);

  return (
    <group
      scale={[materialProps.scale, materialProps.scale, materialProps.scale]}
    >
      <Text
        font={'/fonts/PPNeueMontreal-Bold.otf'}
        position={[0, 0, -1]}
        fontSize={textSize}
        color="white"
        anchorX="center"
        anchorY="middle"
      >
        We are
      </Text>
      <Text
        font={'/fonts/PPNeueMontreal-Bold.otf'}
        position={[0, -1, -1]}
        fontSize={textSize}
        color="white"
        anchorX="center"
        anchorY="middle"
      >
        Innovation
      </Text>
      <mesh ref={torus} {...nodes.Torus002}>
        <MeshTransmissionMaterial {...materialProps} />
      </mesh>
    </group>
  );
};

const CubeCanvas = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    // Establecer el valor inicial
    handleResize();

    // Agregar listener para cambios de tamaño de ventana
    window.addEventListener('resize', handleResize);

    // Limpiar el listener al desmontar el componente
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <Canvas
      dpr={isMobile ? 0.4 : 0.6} // Ajustar la resolución según el dispositivo
      style={{ height: '100vh', width: '100vw', background: '#000' }}
    >
      <ambientLight intensity={isMobile ? 0.5 : 1} />
      <directionalLight intensity={isMobile ? 0.5 : 1} position={[0, 2, 3]} />
      <Model />
      <Environment preset={isMobile ? 'sunset' : 'city'} />{' '}
      {/* Ajustar el preset del entorno según el dispositivo */}
    </Canvas>
  );
};

export default CubeCanvas;
