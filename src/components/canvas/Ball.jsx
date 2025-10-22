/* eslint-disable react/prop-types */
/* eslint-disable react/no-unknown-property */
/* eslint-disable no-unused-vars */
import React, { Suspense, useEffect, useState } from "react";
import { Canvas } from "@react-three/fiber";
import {
  Decal,
  Float,
  OrbitControls,
  Preload,
  useTexture,
} from "@react-three/drei";

import CanvasLoader from "../Loader";

const Ball = ({ imgUrl, ballColor }) => {
  const [decal] = useTexture([imgUrl]);
  
  return (
    <Float speed={1.75} rotationIntensity={1} floatIntensity={2}>
      <ambientLight intensity={3} />
      <directionalLight position={[0, 0, 0.05]} />
      <mesh castShadow receiveShadow scale={2.75}>
        <icosahedronGeometry args={[1, 1]} />
        <meshStandardMaterial
          color={ballColor}
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
  const [ballColor, setBallColor] = useState("#374151");
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const observer = () => {
      const isDark = document.documentElement.classList.contains("dark");
      setBallColor(isDark ? "#fff8eb" : "#374151");
    };

    observer();
    const observerInterval = setInterval(observer, 100);
    return () => clearInterval(observerInterval);
  }, []);

  // Preload image before rendering
  useEffect(() => {
    const img = new Image();
    img.onload = () => {
      setIsLoaded(true);
    };
    img.onerror = () => {
      setIsLoaded(true); // Still render even if error
    };
    img.src = icon;
  }, [icon]);

  const isSvg = typeof icon === "string" && icon.endsWith(".svg");

  if (isSvg) {
    return (
      <div className="w-full h-full flex items-center justify-center">
        <div className="w-24 h-24 rounded-full bg-gray-900/90 dark:bg-gray-800/90 shadow flex items-center justify-center overflow-hidden">
          <div
            aria-label="tech"
            className="w-16 h-16"
            style={{
              WebkitMaskImage: `url(${icon})`,
              maskImage: `url(${icon})`,
              WebkitMaskRepeat: 'no-repeat',
              maskRepeat: 'no-repeat',
              WebkitMaskPosition: 'center',
              maskPosition: 'center',
              WebkitMaskSize: 'contain',
              maskSize: 'contain',
              background: '#ffffff',
            }}
          />
        </div>
      </div>
    );
  }

  // Show simple loader until image is preloaded (not CanvasLoader!)
  if (!isLoaded) {
    return (
      <div className="w-full h-full flex items-center justify-center">
        <div className="w-6 h-6 border-2 border-gray-300 border-t-transparent rounded-full animate-spin" />
      </div>
    );
  }

  return (
    <Canvas 
      frameloop='demand'
      dpr={[1, 2]} 
      gl={{ 
        preserveDrawingBuffer: true,
        antialias: true,
      }}
    >
      <Suspense fallback={<CanvasLoader />}>
        <OrbitControls 
          enableZoom={false} 
          enablePan={false}
        />
        <Ball imgUrl={icon} ballColor={ballColor} />
      </Suspense>
      <Preload all />
    </Canvas>
  );
};

export default BallCanvas;