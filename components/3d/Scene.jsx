import * as THREE from 'three';
import React, { Suspense, useEffect, useState, useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import {
  PerspectiveCamera,
  Environment,
  MeshDistortMaterial,
  ContactShadows,
  OrbitControls,
  Text,
} from '@react-three/drei';
import { useSpring, a as aThree } from '@react-spring/three';
import { a as aWeb } from '@react-spring/web';

// Animación para el material
const AnimatedMaterial = aThree(MeshDistortMaterial);

function Model() {
  const sphere = useRef();
  const light = useRef();
  const [mode, setMode] = useState(false);
  const [down, setDown] = useState(false);
  const [hovered, setHovered] = useState(false);

  // Animar el movimiento del sphere
  useFrame((state) => {
    light.current.position.x = state.mouse.x * 20;
    light.current.position.y = state.mouse.y * 20;
    if (sphere.current) {
      sphere.current.position.x = THREE.MathUtils.lerp(
        sphere.current.position.x,
        hovered ? state.mouse.x / 2 : 0,
        0.2
      );
      sphere.current.position.y = THREE.MathUtils.lerp(
        sphere.current.position.y,
        Math.sin(state.clock.elapsedTime / 1.5) / 6 +
          (hovered ? state.mouse.y / 2 : 0),
        0.2
      );
    }
  });

  // Spring animation del sphere
  const [{ wobble, coat, color, ambient, env }, api] = useSpring(() => ({
    wobble: 1,
    coat: 1,
    ambient: 0.5,
    env: 1,
    color: 'white',
  }));

  useEffect(() => {
    api.start({
      wobble: down ? 1.2 : hovered ? 1.05 : 1,
      coat: mode && !hovered ? 0.04 : 1,
      ambient: mode && !hovered ? 1.5 : 0.5,
      env: mode && !hovered ? 0.4 : 1,
      color: hovered ? '#46ffe0' : mode ? '#202020' : 'white',
      config: { mass: 2, tension: 1000, friction: 10 },
    });
  }, [mode, hovered, down]);

  return (
    <>
      <PerspectiveCamera makeDefault position={[0, 0, 4]} fov={75}>
        <aThree.ambientLight intensity={ambient} />
        <aThree.pointLight
          ref={light}
          position-z={-15}
          intensity={env}
          color="#46ffe0"
        />
      </PerspectiveCamera>
      <Suspense fallback={null}>
        <aThree.mesh
          ref={sphere}
          scale={wobble}
          onPointerOver={() => setHovered(true)}
          onPointerOut={() => setHovered(false)}
          onPointerDown={() => setDown(true)}
          onPointerUp={() => {
            setDown(false);
            // Solo toggle de mode para animación interna
            setMode(!mode);
          }}
        >
          <sphereGeometry args={[1, 64, 64]} />
          <AnimatedMaterial
            color={color}
            envMapIntensity={env}
            clearcoat={coat}
            clearcoatRoughness={0}
            metalness={0.1}
          />
        </aThree.mesh>
        <Environment preset="warehouse" />
      </Suspense>
    </>
  );
}

export default function Scene() {
  return (
    <aWeb.main style={{ background: '#000', width: '100vw', height: '100vh' }}>
      <Canvas className="canvas" dpr={[1, 2]}>
        <Model />
        <OrbitControls
          enablePan={false}
          enableZoom={false}
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 2}
        />
      </Canvas>
    </aWeb.main>
  );
}
