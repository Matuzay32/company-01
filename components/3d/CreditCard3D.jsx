import React, { useRef, useState, useEffect } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Environment, useGLTF } from '@react-three/drei';
import { a as aWeb } from '@react-spring/web';

export function Model(props) {
  const { nodes, materials } = useGLTF('/metal_credit_card.glb');
  const modelRef = useRef();

  return (
    <group {...props} dispose={null} ref={modelRef}>
      <group
        position={[0, -0.6, 0]}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={props.scale}
      >
        <group rotation={[Math.PI / 2, 0, 0]}>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Card__0.geometry}
            material={materials['Scene_-_Root']}
            rotation={[-Math.PI / 2, 0, 0]}
          />
        </group>
      </group>
    </group>
  );
}

useGLTF.preload('/metal_credit_card.glb');

const CreditCard3D = () => {
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
    <aWeb.main style={{ background: '#000', width: '100%', height: '100vh' }}>
      <Canvas
        dpr={[1, 2]}
        style={{
          height: isMobile ? '60vh' : '80vh',

          background: 'white',
        }}
        frameloop="demand"
        camera={{
          position: [0, 0, isMobile ? 4 : 3],
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
        <Model scale={isMobile ? 0.4 : 0.5} />
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

export default CreditCard3D;
