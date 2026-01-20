'use client';

import { Canvas, useFrame, useThree } from '@react-three/fiber';
import { ContactShadows } from '@react-three/drei';
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

function ProductRig({
  reduceMotion,
  children
}: {
  reduceMotion: boolean;
  children: React.ReactNode;
}) {
  const group = useRef<THREE.Group>(null);

  useFrame((state, delta) => {
    if (reduceMotion || !group.current) return;
    group.current.rotation.y += delta * 0.15;
    group.current.rotation.x = THREE.MathUtils.lerp(
      group.current.rotation.x,
      Math.sin(state.clock.elapsedTime * 0.3) * 0.08,
      0.05
    );
    group.current.position.y = Math.sin(state.clock.elapsedTime * 0.6) * 0.05;
  });

  return <group ref={group}>{children}</group>;
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
      <spotLight
        position={[0, 4.5, 4]}
        intensity={shadowEnabled ? 0.6 : 0.3}
        angle={0.35}
        penumbra={0.6}
      />
      <ProductRig reduceMotion={reduceMotion}>
        <group position={[0, 0.25, 0]}>
          <ProductModel explode={explode} scale={1.15} />
        </group>
      </ProductRig>
      {!reduceMotion && shadowEnabled && (
        <ContactShadows opacity={0.35} scale={8} blur={2.6} far={4} position={[0, -0.7, 0]} />
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
