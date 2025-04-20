/* eslint-disable react/prop-types */
/* eslint-disable react/no-unknown-property */
/* eslint-disable no-unused-vars */
<<<<<<< HEAD
import React, { Suspense, useEffect, useState } from "react";
=======
import React, { Suspense } from "react";
>>>>>>> 94a0f592ce77fdedab7ed3a443a81312aabd4ecb
import { Canvas } from "@react-three/fiber";
import {
  Decal,
  Float,
  OrbitControls,
  Preload,
  useTexture,
} from "@react-three/drei";

import CanvasLoader from "../Loader";

<<<<<<< HEAD
const Ball = ({ imgUrl, ballColor }) => {
  const [decal] = useTexture([imgUrl]);
=======
const Ball = (props) => {
  const [decal] = useTexture([props.imgUrl]);
>>>>>>> 94a0f592ce77fdedab7ed3a443a81312aabd4ecb

  return (
    <Float speed={1.75} rotationIntensity={1} floatIntensity={2}>
      <ambientLight intensity={3} />
      <directionalLight position={[0, 0, 0.05]} />
      <mesh castShadow receiveShadow scale={2.75}>
        <icosahedronGeometry args={[1, 1]} />
        <meshStandardMaterial
<<<<<<< HEAD
          color={ballColor}
=======
          color='#fff8eb'
>>>>>>> 94a0f592ce77fdedab7ed3a443a81312aabd4ecb
          polygonOffset
          polygonOffsetFactor={-5}
          flatShading
        />
        <Decal
          position={[0, 0, 1]}
          rotation={[2 * Math.PI, 0, 6.25]}
          scale={1}
          map={decal}
          flatShading
        />
      </mesh>
    </Float>
  );
};

const BallCanvas = ({ icon }) => {
<<<<<<< HEAD
  const [ballColor, setBallColor] = useState("#fff8eb"); // default for light mode

  useEffect(() => {
    const observer = () => {
      const isDark = document.documentElement.classList.contains("dark");
      setBallColor(isDark ? "#fff8eb":"#d1d5db"); // match your dark/light backgrounds
    };

    observer(); // initial check
    const observerInterval = setInterval(observer, 100); // watch for theme changes
    return () => clearInterval(observerInterval);
  }, []);

  return (
    <Canvas frameloop='demand' dpr={[1, 2]} gl={{ preserveDrawingBuffer: true }}>
      <Suspense fallback={<CanvasLoader />}>
        <OrbitControls enableZoom={false} />
        <Ball imgUrl={icon} ballColor={ballColor} />
      </Suspense>
=======
  return (
    <Canvas
      frameloop='demand'
      dpr={[1, 2]}
      gl={{ preserveDrawingBuffer: true }}
    >
      <Suspense fallback={<CanvasLoader />}>
        <OrbitControls enableZoom={false} />
        <Ball imgUrl={icon} />
      </Suspense>

>>>>>>> 94a0f592ce77fdedab7ed3a443a81312aabd4ecb
      <Preload all />
    </Canvas>
  );
};

<<<<<<< HEAD
export default BallCanvas;
=======
export default BallCanvas;
>>>>>>> 94a0f592ce77fdedab7ed3a443a81312aabd4ecb
