import React, { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import {
  Decal,
  Float,
  OrbitControls,
  Preload,
  useTexture,
} from "@react-three/drei";
import CanvasLoader from "../Loader";

const Ball = (props) => {
  const [decal] = useTexture([props.imgUrl]);

  return (
    <Float speed={5} rotationIntensity={-1} floatIntensity={5}>
      <ambientLight intensity={0.5} />
      <pointLight position={[10, 10, 10]} intensity={0.5} />
      <mesh scale={2.3}>
        <sphereGeometry attach="geometry" args={[1, 16, 16]} />
        <meshStandardMaterial color="#fff8eb" />
        <Decal
          position={[0, 0, 1]}
          rotation={[2 * Math.PI, 0, 6.25]}
          flatShading
          map={decal}
        />
        <Decal
          position={[0, 0, -1]}
          rotation={[2 * Math.PI, 0, 6.25]}
          flatShading
          map={decal}
        />
        <Decal position={[1, 0, 0]} rotation={1} flatShading map={decal} />
        <Decal position={[-1, 0, 0]} rotation={1} flatShading map={decal} />
        <Decal position={[0, 1, 0]} rotation={3} flatShading map={decal} />
        <Decal position={[0, -1, 0]} rotation={3} flatShading map={decal} />
      </mesh>
    </Float>
  );
};

const BallCanvas = ({ icon }) => {
  return (
    <Canvas frameloop="demand" gl={{ preserveDrawingBuffer: true }}>
      <Suspense fallback={<CanvasLoader />}>
        <OrbitControls autoRotate
          enableZoom={false}
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 2} />

        <Ball imgUrl={icon} />
      </Suspense>
      <Preload all />
    </Canvas>
  );
};

export default BallCanvas;
