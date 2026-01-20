'use client';

import dynamic from 'next/dynamic';
import { useEffect, useMemo, useState } from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { siteConfig } from '@/lib/siteConfig';
import { ThreeErrorBoundary } from './ThreeErrorBoundary';
import { ThreeSkeleton } from './ThreeSkeleton';
import { detectPerformanceMode, PerformanceMode } from '@/3d/performance';
import { LightingPresetKey, lightingPresets } from '@/3d/lightingPresets';

const Scene = dynamic(() => import('@/3d/Scene').then((mod) => mod.Scene), {
  ssr: false,
  loading: () => <ThreeSkeleton />
});

export function Hero() {
  const systemReducedMotion = useReducedMotion();
  const [performanceMode, setPerformanceMode] = useState<PerformanceMode>('high');
  const [preset, setPreset] = useState<LightingPresetKey>('studio');
  const [explode, setExplode] = useState(false);
  const [reduceMotion, setReduceMotion] = useState(false);

  useEffect(() => {
    setPerformanceMode(detectPerformanceMode());
  }, []);

  useEffect(() => {
    setReduceMotion(systemReducedMotion);
  }, [systemReducedMotion]);

  const explodeValue = useMemo(() => (explode ? 1 : 0), [explode]);

  return (
    <section className="grid gap-12 pb-16 pt-12 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
      <motion.div
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        className="space-y-8"
      >
        <div className="inline-flex items-center gap-2 rounded-full border border-ink-700 bg-ink-900/70 px-4 py-2 text-xs uppercase tracking-[0.2em] text-aurum-500">
          Premium analytics platform
        </div>
        <div className="space-y-6">
          <h1 className="font-display text-4xl leading-tight text-white md:text-5xl">
            {siteConfig.headline}
          </h1>
          <p className="text-base leading-relaxed text-ink-300 md:text-lg">
            {siteConfig.subhead}
          </p>
        </div>
        <div className="flex flex-wrap items-center gap-4">
          <a
            href={siteConfig.primaryCta.href}
            className="rounded-full bg-aurum-500 px-6 py-3 text-sm font-semibold text-ink-950 transition hover:bg-aurum-600"
          >
            {siteConfig.primaryCta.label}
          </a>
          <a href={siteConfig.secondaryCta.href} className="text-sm text-ink-300 hover:text-white">
            {siteConfig.secondaryCta.label}
          </a>
        </div>
        <div className="flex flex-wrap gap-4 text-xs text-ink-300">
          {siteConfig.trustIndicators.map((item) => (
            <span key={item} className="rounded-full border border-ink-800 px-3 py-1">
              {item}
            </span>
          ))}
        </div>
        <div className="grid gap-3 rounded-2xl border border-ink-800 bg-ink-900/60 p-4 text-xs text-ink-300 md:grid-cols-2">
          <div className="flex items-center justify-between">
            <span>Explode view</span>
            <button
              type="button"
              onClick={() => setExplode((prev) => !prev)}
              className="rounded-full border border-ink-700 px-3 py-1 text-[11px] text-white hover:border-aurum-500"
            >
              {explode ? 'On' : 'Off'}
            </button>
          </div>
          <div className="flex items-center justify-between">
            <span>Performance</span>
            <button
              type="button"
              onClick={() =>
                setPerformanceMode((mode) => (mode === 'high' ? 'low' : 'high'))
              }
              className="rounded-full border border-ink-700 px-3 py-1 text-[11px] text-white hover:border-aurum-500"
            >
              {performanceMode === 'high' ? 'High' : 'Low'}
            </button>
          </div>
          <div className="flex items-center justify-between">
            <span>Reduce motion</span>
            <button
              type="button"
              onClick={() => setReduceMotion((value) => !value)}
              className="rounded-full border border-ink-700 px-3 py-1 text-[11px] text-white hover:border-aurum-500"
            >
              {reduceMotion ? 'On' : 'Off'}
            </button>
          </div>
          <div className="flex items-center justify-between">
            <span>Lighting</span>
            <div className="flex gap-2">
              {(Object.keys(lightingPresets) as LightingPresetKey[]).map((key) => (
                <button
                  key={key}
                  type="button"
                  onClick={() => setPreset(key)}
                  className={`rounded-full border px-3 py-1 text-[11px] transition ${
                    preset === key
                      ? 'border-aurum-500 text-aurum-500'
                      : 'border-ink-700 text-white hover:border-aurum-500'
                  }`}
                >
                  {lightingPresets[key].label}
                </button>
              ))}
            </div>
          </div>
        </div>
      </motion.div>
      <div className="relative">
        <div className="absolute -inset-6 rounded-[2rem] bg-gradient-to-br from-aurum-500/15 via-transparent to-transparent blur-3xl" />
        <div className="relative h-[360px] w-full overflow-hidden rounded-2xl border border-ink-800 bg-ink-900/70 shadow-glow md:h-[440px]">
          <ThreeErrorBoundary>
            <Scene
              performanceMode={performanceMode}
              preset={preset}
              explode={explodeValue}
              reduceMotion={reduceMotion}
            />
          </ThreeErrorBoundary>
        </div>
        <div className="mt-4 text-xs text-ink-500">
          If WebGL is unavailable, a static visual appears automatically.
        </div>
      </div>
    </section>
  );
}
