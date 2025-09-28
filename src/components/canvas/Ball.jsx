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
  const [ballColor, setBallColor] = useState("#374151"); // default darker for light mode (better decal contrast)

  useEffect(() => {
    const observer = () => {
      const isDark = document.documentElement.classList.contains("dark");
      // Dark mode: light ball for dark background; Light mode: darker ball for white logos contrast
      setBallColor(isDark ? "#fff8eb" : "#374151");
    };

    observer(); // initial check
    const observerInterval = setInterval(observer, 100); // watch for theme changes
    return () => clearInterval(observerInterval);
  }, []);

  const isSvg = typeof icon === "string" && icon.endsWith(".svg");

  if (isSvg) {
    // Fallback rendering for SVG icons: simple circular image
    return (
      <div className="w-full h-full flex items-center justify-center">
        <div className="w-24 h-24 rounded-full bg-gray-900/90 dark:bg-gray-800/90 shadow flex items-center justify-center overflow-hidden">
          {/* SVG mask filled with solid white for crisp brand look */}
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

  return (
    <Canvas frameloop='always' dpr={[1, 2]} gl={{ preserveDrawingBuffer: true }}>
      <Suspense fallback={<CanvasLoader />}>
        <OrbitControls enableZoom={false} />
        <Ball imgUrl={icon} ballColor={ballColor} />
      </Suspense>
      <Preload all />
    </Canvas>
      );
    };
    
    export default BallCanvas;
