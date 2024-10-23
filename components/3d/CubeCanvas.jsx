import React, { useRef } from 'react';
import { Canvas, useThree } from '@react-three/fiber';
import {
  Environment,
  MeshTransmissionMaterial,
  useGLTF,
  Text,
} from '@react-three/drei';
import { useFrame } from '@react-three/fiber';
import { useControls } from 'leva';

const Model = () => {
  const { nodes } = useGLTF('/medias/torrus.glb');
  const torus = useRef(null);
  const { viewport } = useThree(); // Obtener el viewport

  useFrame(() => {
    if (torus.current) {
      torus.current.rotation.x += 0.02;
    }
  });

  // const materialProps = useControls({
  //   scale: { value: 3, min: 0.1, max: 10, step: 0.05 },
  //   thickness: { value: 0.2, min: 0, max: 3, step: 0.05 },
  //   roughness: { value: 0, min: 0, max: 1, step: 0.1 },
  //   transmission: { value: 1, min: 0, max: 1, step: 0.1 },
  //   ior: { value: 1.2, min: 0, max: 3, step: 0.1 },
  //   chromaticAberration: { value: 0.02, min: 0, max: 1 },
  //   backside: { value: true },
  // });

  const materialProps = {
    scale: 3.9,
    thickness: 0.2,
    roughness: 0,
    transmission: 1,
    ior: 1.2,
    chromaticAberration: 0.02,
    backside: true,
  };

  // Escalar el tamaño del texto según el viewport
  const textSize = Math.max(0.4, viewport.width / 1000); // Ajustar el divisor según sea necesario

  return (
    <group
      scale={[materialProps.scale, materialProps.scale, materialProps.scale]}
    >
      <Text
        font={'/fonts/PPNeueMontreal-Bold.otf'}
        position={[0, 0, -1]}
        fontSize={textSize} // Usar el tamaño dinámico
        color="white"
        anchorX="center"
        anchorY="middle"
      >
        We are
      </Text>
      <Text
        font={'/fonts/PPNeueMontreal-Bold.otf'}
        position={[0, -1, -1]}
        fontSize={textSize} // Usar el tamaño dinámico
        color="white"
        anchorX="center"
        anchorY="middle"
      >
        Innovation
      </Text>
      <mesh ref={torus} {...nodes.Torus002}>
        <MeshTransmissionMaterial {...materialProps} />
      </mesh>
      {/* <mesh ref={cube}> */}
      {/* <boxGeometry args={[1, 1, 1]} /> Crear un cubo */}
      {/* <MeshTransmissionMaterial {...materialProps} /> */}
      {/* </mesh> */}
    </group>
  );
};

const CubeCanvas = () => {
  return (
    <Canvas style={{ height: '100vh', width: '100vw', background: '#000' }}>
      <ambientLight intensity={1} />
      <directionalLight intensity={1} position={[0, 2, 3]} />
      <Model />
      <Environment preset="city" />
    </Canvas>
  );
};

export default CubeCanvas;
