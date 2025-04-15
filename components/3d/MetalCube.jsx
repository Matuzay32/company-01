import React, { useRef, useEffect, useState } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, Environment, useGLTF } from '@react-three/drei';
import { a as aWeb } from '@react-spring/web';

// Componente del modelo actualizado con rotación automática
export function Model(props) {
  const groupRef = useRef();
  const { nodes, materials } = useGLTF('/metalCube.glb');

  // Rotación continua sobre el eje Y
  useFrame(() => {
    if (groupRef.current) {
      groupRef.current.rotation.y += 0.01; // Velocidad de rotación
    }
  });

  return (
    <group {...props} ref={groupRef} dispose={null}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.model.geometry}
        material={materials.CustomMaterial}
        rotation={[Math.PI / 2, 0, 0]} // Si quieres que rote en otro eje, ajusta esto también
      />
    </group>
  );
}

useGLTF.preload('/metalCube.glb');

// Componente principal de la escena
const MetalCube = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <aWeb.main style={{ background: '#000', width: '100%', height: 'auto' }}>
      <Canvas
        dpr={[1, 2]}
        style={{ height: isMobile ? '60vh' : '60vh' }}
        frameloop="always"
        camera={{
          position: [0, 0, isMobile ? 4 : 2],
          fov: 50,
          near: 0.1,
          far: 100,
        }}
        gl={{ alpha: true }}
      >
        <ambientLight intensity={isMobile ? 0.5 : 1} />
        <directionalLight
          intensity={isMobile ? 0.5 : 1}
          position={[0, 2, 2.5]}
        />
        <Model scale={isMobile ? 0.4 : 0.4} />
        <Environment preset={isMobile ? 'sunset' : 'city'} />
        <OrbitControls
          enableZoom={false}
          enablePan={false}
          maxPolarAngle={Math.PI}
          minPolarAngle={0}
          enableRotate={true}
          rotateSpeed={0.5}
          minAzimuthAngle={-Math.PI}
          maxAzimuthAngle={Math.PI}
        />
      </Canvas>
    </aWeb.main>
  );
};

export default MetalCube;
