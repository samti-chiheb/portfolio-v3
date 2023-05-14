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
      <directionalLight position={[1, 2, 0.5]} />
      <mesh castShadow receiveShadow scale={2.5}>
        <sphereGeometry args={[0.9, 32, 32]} />
        <meshStandardMaterial
          color="#fff8eb"
          polygonOffset
          polygonOffsetFactor={5}
          flatShading
          metalness="0.2"
        />
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
        <OrbitControls autoRotate rotateSpeed={2} enableZoom={false} />

        <Ball imgUrl={icon} />
      </Suspense>
      <Preload all />
    </Canvas>
  );
};

export default BallCanvas;
