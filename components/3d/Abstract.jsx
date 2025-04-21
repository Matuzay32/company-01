import React, { useRef, useEffect, useState } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, Environment, useGLTF } from '@react-three/drei';
import { a as aWeb } from '@react-spring/web';

// Componente del modelo actualizado con rotación
function Model(props) {
  const { nodes, materials } = useGLTF('/abstract.glb');
  const modelRef = useRef();

  // Rotación constante del modelo
  useFrame(() => {
    if (modelRef.current) {
      modelRef.current.rotation.y += 0.01;
    }
  });

  return (
    <group {...props} dispose={null} ref={modelRef}>
      <mesh
        castShadow
        receiveShadow
        geometry={
          nodes['tripo_node_e3234af3-8322-4b35-8ffb-ebb65ad70726'].geometry
        }
        material={
          materials['tripo_material_e3234af3-8322-4b35-8ffb-ebb65ad70726']
        }
      />
    </group>
  );
}

useGLTF.preload('/abstract.glb');

// Componente principal de la escena
const Abstract = () => {
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
        style={{
          height: isMobile ? '60vh' : '60vh',
        }}
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
        <Model scale={isMobile ? 0.4 : 1} />
        <Environment preset={isMobile ? 'city' : 'city'} />
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

export default Abstract;
