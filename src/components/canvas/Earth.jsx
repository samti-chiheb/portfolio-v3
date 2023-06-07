import { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Preload, useGLTF } from "@react-three/drei";

import CanvasLoader from "../Loader";

const Earth = () => {
  const earth = useGLTF("./earth/scene.gltf");

  return (
    <>
      <mesh>
        <primitive
          object={earth.scene}
          scale={2}
          position={[0, 0, 0]}
          rotation={[0, 0, 0]}
        />
      </mesh>
      <ambientLight intensity={2.5} />
      <pointLight color="#3391FF" intensity={16.5} position={[15, 15, 15]} />
      <spotLight
        color="#F6BBFD"
        intensity={16.5}
        position={[-180, -180, -180]}
        angle={Math.PI / 4}
        penumbra={0.2}
        castShadow
      />
    </>
  );
};

const EarthCanvas = () => {
  return (
    <Canvas
      shadows
      gl={{ preserveDrawingBuffer: true }}
      camera={{
        fov: 45,
        near: 0.1,
        far: 200,
        position: [-4, 3, 6],
      }}
    >
      <Suspense fallback={<CanvasLoader />}>
        <OrbitControls
          autoRotate
          enableZoom={false}
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 2}
        />
        <Earth />
      </Suspense>
      <Preload all />
    </Canvas>
  );
};

export default EarthCanvas;