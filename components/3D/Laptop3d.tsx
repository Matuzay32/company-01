import * as THREE from 'three';
import React, { Suspense, useEffect, useRef, useState } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import {
  Environment,
  useGLTF,
  ContactShadows,
  OrbitControls,
} from '@react-three/drei';
import { useSpring } from '@react-spring/core';
import { a as three } from '@react-spring/three';

function Model({ open, hinge, ...props }: any) {
  let metalness = 0.46;
  let roughness = 0.13;
  const group = useRef<THREE.Group>(null); // Tipo de referencia como THREE.Group
  const { nodes, materials } = useGLTF('/mac-draco.glb') as any; // Usa 'as any' para evitar errores de tipo

  const [hovered, setHovered] = useState(false);
  useEffect(() => {
    document.body.style.cursor = hovered ? 'pointer' : 'auto';
  }, [hovered]);

  useFrame((state) => {
    const t = state.clock.getElapsedTime();
    if (group.current) {
      // Verifica si group.current no es undefined
      group.current.rotation.x = THREE.MathUtils.lerp(
        group.current.rotation.x,
        open ? Math.cos(t / 10) / 10 + 0.25 : 0,
        0.1
      );
      group.current.rotation.y = THREE.MathUtils.lerp(
        group.current.rotation.y,
        open ? Math.sin(t / 10) / 8 : 0,
        0.1
      );
      group.current.rotation.z = THREE.MathUtils.lerp(
        group.current.rotation.z,
        open ? Math.sin(t / 10) / 10 : 0,
        0.1
      );
      group.current.position.y = THREE.MathUtils.lerp(
        group.current.position.y,
        open ? (-2 + Math.sin(t)) / 3 : -4.3,
        0.1
      );
    }
  });

  return (
    <group
      ref={group}
      {...props}
      onPointerOver={(e) => (e.stopPropagation(), setHovered(true))}
      onPointerOut={(e) => setHovered(false)}
      dispose={null}
    >
      <three.group rotation-x={hinge} position={[0, -0.04, 0.41]}>
        <group position={[0, 2.96, -0.13]} rotation={[Math.PI / 2, 0, 0]}>
          <mesh
            material={materials.aluminium}
            geometry={(nodes['Cube008'] as THREE.Mesh).geometry} // Asegúrate de que esto sea correcto
          >
            <meshStandardMaterial metalness={metalness} roughness={roughness} />
          </mesh>
          <mesh
            material={materials['matte.001']}
            geometry={(nodes['Cube008_1'] as THREE.Mesh).geometry} // Asegúrate de que esto sea correcto
          />
          <mesh
            material={materials['screen.001']}
            geometry={(nodes['Cube008_2'] as THREE.Mesh).geometry} // Asegúrate de que esto sea correcto
          />
        </group>
      </three.group>
      <mesh
        material={materials.keys}
        geometry={(nodes.keyboard as THREE.Mesh).geometry} // Asegúrate de que esto sea correcto
        position={[1.79, 0, 3.45]}
      />
      <group position={[0, -0.1, 3.39]}>
        <mesh
          material={materials.aluminium}
          geometry={(nodes['Cube002'] as THREE.Mesh).geometry} // Asegúrate de que esto sea correcto
        />
        <mesh
          material={materials.trackpad}
          geometry={(nodes['Cube002_1'] as THREE.Mesh).geometry} // Asegúrate de que esto sea correcto
        />
      </group>
      <mesh
        material={materials.touchbar}
        geometry={(nodes.touchbar as THREE.Mesh).geometry} // Asegúrate de que esto sea correcto
        position={[0, -0.03, 1.2]}
      />
    </group>
  );
}

export default function Laptop3d() {
  const [open, setOpen] = useState(false);
  const props = useSpring({ open: Number(open) });

  return (
    <Canvas dpr={[1, 2]} camera={{ position: [0, 0, -25], fov: 50 }}>
      {' '}
      {/* Ajusta la posición de la cámara */}
      <three.pointLight position={[10, 10, 10]} intensity={1.5} />
      <Suspense fallback={null}>
        <group
          rotation={[0, Math.PI, 0]}
          onClick={(e) => (e.stopPropagation(), setOpen(!open))}
        >
          <Model open={open} hinge={props.open.to([0, 1], [1.575, -0.425])} />
        </group>
        <Environment preset="city" />
      </Suspense>
      <ContactShadows
        position={[0, -3.5, 0]}
        opacity={0.4}
        scale={130}
        blur={1.75}
        far={4.5}
      />
      <OrbitControls enableZoom={false} minDistance={2} maxDistance={10} />{' '}
      {/* Agrega los controles de órbita */}
    </Canvas>
  );
}
