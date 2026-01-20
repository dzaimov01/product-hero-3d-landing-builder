'use client';

import { Canvas, useFrame, useThree } from '@react-three/fiber';
import { Suspense, useEffect, useMemo, useRef } from 'react';
import * as THREE from 'three';
import { lightingPresets, LightingPresetKey } from './lightingPresets';
import { ProductModel } from './models/ProductModel';
import { getDpr, PerformanceMode } from './performance';

function CameraRig({
  parallaxEnabled,
  reduceMotion
}: {
  parallaxEnabled: boolean;
  reduceMotion: boolean;
}) {
  const { camera, pointer } = useThree();
  const scrollTarget = useRef(0);

  useEffect(() => {
    const handleScroll = () => {
      const progress = window.scrollY / Math.max(1, document.body.scrollHeight - window.innerHeight);
      scrollTarget.current = Math.min(1, Math.max(0, progress));
    };
    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useFrame((state, delta) => {
    if (reduceMotion) return;
    const t = scrollTarget.current;
    const targetZ = THREE.MathUtils.lerp(6, 4.5, t);
    const targetY = THREE.MathUtils.lerp(1.5, 2.2, t);
    const targetX = parallaxEnabled ? pointer.x * 0.6 : 0;
    camera.position.lerp(new THREE.Vector3(targetX, targetY, targetZ), 1 - Math.pow(0.0001, delta));
    camera.fov = THREE.MathUtils.lerp(45, 38, t);
    camera.updateProjectionMatrix();
  });

  return null;
}

function SceneContent({
  preset,
  explode,
  performanceMode,
  reduceMotion
}: {
  preset: LightingPresetKey;
  explode: number;
  performanceMode: PerformanceMode;
  reduceMotion: boolean;
}) {
  const presetConfig = lightingPresets[preset];
  const shadowEnabled = performanceMode === 'high';

  return (
    <>
      <ambientLight intensity={presetConfig.ambient} />
      <directionalLight
        position={presetConfig.key}
        intensity={presetConfig.intensity}
        color={presetConfig.color}
        castShadow={shadowEnabled}
      />
      <directionalLight position={presetConfig.fill} intensity={0.4} />
      <directionalLight position={presetConfig.rim} intensity={0.35} />
      <group position={[0, 0.2, 0]}>
        <ProductModel explode={explode} />
      </group>
      {!reduceMotion && (
        <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, -0.6, 0]} receiveShadow={shadowEnabled}>
          <circleGeometry args={[4, 64]} />
          <meshStandardMaterial color="#0b0e13" roughness={0.8} metalness={0.1} />
        </mesh>
      )}
    </>
  );
}

export function Scene({
  performanceMode,
  preset,
  explode,
  reduceMotion
}: {
  performanceMode: PerformanceMode;
  preset: LightingPresetKey;
  explode: number;
  reduceMotion: boolean;
}) {
  const parallaxEnabled = useMemo(() => {
    if (typeof window === 'undefined') return false;
    return window.matchMedia('(hover: hover) and (pointer: fine)').matches;
  }, []);

  return (
    <Canvas
      shadows={performanceMode === 'high'}
      dpr={getDpr(performanceMode)}
      camera={{ position: [0, 1.6, 6], fov: 45 }}
    >
      <Suspense fallback={null}>
        <CameraRig parallaxEnabled={parallaxEnabled} reduceMotion={reduceMotion} />
        <SceneContent
          preset={preset}
          explode={explode}
          performanceMode={performanceMode}
          reduceMotion={reduceMotion}
        />
      </Suspense>
    </Canvas>
  );
}
