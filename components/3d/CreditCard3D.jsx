import React, { useRef, useState, useEffect } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, Environment, useGLTF } from '@react-three/drei';
import { a as aWeb } from '@react-spring/web';

// Componente Model que carga el GLB
export function Model(props) {
  const { nodes, materials } = useGLTF('/metal_credit_card.glb'); // Ruta del modelo GLB
  const modelRef = useRef(); // Referencia para controlar la rotación

  // Rotación constante sobre el eje Y
  useFrame(() => {
    if (modelRef.current) {
      modelRef.current.rotation.y += 0.01; // Ajusta la velocidad de la rotación aquí
    }
  });

  return (
    <group {...props} dispose={null} ref={modelRef}>
      <group
        position={[0, -0.6, 0]}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={0.235}
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

useGLTF.preload('/metal_credit_card.glb'); // Pre-carga el modelo

// Componente principal CreditCard3D que maneja el Canvas y los controles
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
    <aWeb.main>
      <Canvas
        style={{
          height: '80vh',
          width: '100vw',
        }}
        dpr={[1, 2]} // Mejora la calidad en pantallas retina
        frameloop="always" // Forzar actualización continua
        camera={{
          position: [0, 0, 3], // Posición inicial de la cámara
          fov: 50, // Campo de visión
          near: 0.1, // Distancia mínima de visión
          far: 100, // Distancia máxima de visión
        }}
        gl={{ alpha: true }} // Habilita fondo transparente
      >
        {/* Luz ambiental que varía según el tamaño de pantalla */}
        <ambientLight intensity={isMobile ? 0.5 : 1} />

        {/* Luz direccional que también varía según el tamaño de pantalla */}
        <directionalLight
          intensity={isMobile ? 0.5 : 1}
          position={[0, 2, 2.5]}
        />

        {/* Cargar y mostrar el modelo 3D */}
        <Model />

        {/* Entorno que varía según el tamaño de pantalla */}
        <Environment preset={isMobile ? 'sunset' : 'city'} />

        {/* OrbitControls con restricciones modificadas para permitir rotación completa */}
        <OrbitControls
          enableZoom={false} // Desactiva el zoom
          enablePan={false} // Desactiva el desplazamiento
          maxPolarAngle={Math.PI} // Permite ver por completo el modelo (parte superior e inferior)
          minPolarAngle={0} // Permite ver por completo el modelo (parte superior e inferior)
          enableRotate={true} // Habilita la rotación
          rotateSpeed={0.5} // Controla la velocidad de la rotación
          // Permite rotar libremente alrededor del eje Y
          minAzimuthAngle={-Math.PI} // Límite izquierdo
          maxAzimuthAngle={Math.PI} // Límite derecho
        />
      </Canvas>
    </aWeb.main>
  );
};

export default CreditCard3D;
