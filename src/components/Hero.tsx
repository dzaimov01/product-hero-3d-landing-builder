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
  const trustMeta = useMemo(
    () =>
      siteConfig.trustIndicators.map((label, index) => ({
        label,
        value: ['Trust layer', 'Resilience', 'Support'][index] ?? 'Signal'
      })),
    []
  );

  useEffect(() => {
    setPerformanceMode(detectPerformanceMode());
  }, []);

  useEffect(() => {
    setReduceMotion(systemReducedMotion ?? false);
  }, [systemReducedMotion]);

  const explodeValue = useMemo(() => (explode ? 1 : 0), [explode]);

  return (
    <section className="relative overflow-hidden rounded-[2.5rem] border border-[color:var(--border-subtle)] bg-[color:var(--surface-strong)] px-6 py-14 md:px-10 lg:px-14">
      <div className="pointer-events-none absolute inset-0 bg-mesh opacity-70" />
      <div className="pointer-events-none absolute inset-0 bg-grid opacity-50" />
      <div className="relative grid gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="space-y-8"
        >
          <div className="inline-flex items-center gap-3 rounded-full border border-[color:var(--border-strong)] bg-[color:var(--surface-glass)] px-4 py-2 text-xs uppercase tracking-[0.25em] text-aurum-500">
            <span className="h-2 w-2 rounded-full bg-aurum-500" />
            Executive-grade analytics
          </div>
          <div className="flex flex-wrap items-center gap-3 rounded-full border border-[color:var(--border-subtle)] bg-[color:var(--surface-glass)] px-4 py-2 text-xs text-[color:var(--text-secondary)]">
            <div className="flex -space-x-2">
              <span className="h-7 w-7 rounded-full border border-[color:var(--border-strong)] bg-gradient-to-br from-aurum-500/60 to-transparent" />
              <span className="h-7 w-7 rounded-full border border-[color:var(--border-strong)] bg-gradient-to-br from-white/50 to-transparent" />
              <span className="h-7 w-7 rounded-full border border-[color:var(--border-strong)] bg-gradient-to-br from-[color:var(--border-strong)] to-transparent" />
            </div>
            <span className="font-medium text-[color:var(--text-primary)]">60K+</span>
            <span>operators onboarded</span>
            <span className="h-4 w-px rounded-full bg-[color:var(--border-strong)]" />
            <span className="font-medium text-[color:var(--text-primary)]">4.9</span>
            <span>client rating</span>
          </div>
          <div className="space-y-6">
            <h1 className="font-display text-4xl leading-tight text-[color:var(--text-primary)] md:text-5xl">
              {siteConfig.headline}
            </h1>
            <p className="text-base leading-relaxed text-[color:var(--text-secondary)] md:text-lg">
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
            <a
              href={siteConfig.secondaryCta.href}
              className="text-sm text-[color:var(--text-secondary)] hover:text-[color:var(--text-primary)]"
            >
              {siteConfig.secondaryCta.label}
            </a>
          </div>
          <div className="grid gap-4 rounded-2xl border border-[color:var(--border-subtle)] bg-[color:var(--surface-glass)] p-4 text-xs text-[color:var(--text-secondary)] md:grid-cols-3">
            {trustMeta.map((item) => (
              <div key={item.label} className="space-y-2">
                <div className="text-[11px] uppercase tracking-[0.25em] text-[color:var(--text-muted)]">
                  {item.value}
                </div>
                <div className="font-medium text-[color:var(--text-primary)]">{item.label}</div>
              </div>
            ))}
          </div>
          <div className="grid gap-3 rounded-2xl border border-[color:var(--border-subtle)] bg-[color:var(--surface-glass)] p-4 text-xs text-[color:var(--text-secondary)] md:grid-cols-2">
            <div className="flex items-center justify-between">
              <span>Explode view</span>
              <button
                type="button"
                onClick={() => setExplode((prev) => !prev)}
                className="rounded-full border border-[color:var(--border-strong)] px-3 py-1 text-[11px] text-[color:var(--text-primary)] hover:border-[color:var(--accent)]"
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
                className="rounded-full border border-[color:var(--border-strong)] px-3 py-1 text-[11px] text-[color:var(--text-primary)] hover:border-[color:var(--accent)]"
              >
                {performanceMode === 'high' ? 'High' : 'Low'}
              </button>
            </div>
            <div className="flex items-center justify-between">
              <span>Reduce motion</span>
              <button
                type="button"
                onClick={() => setReduceMotion((value) => !value)}
                className="rounded-full border border-[color:var(--border-strong)] px-3 py-1 text-[11px] text-[color:var(--text-primary)] hover:border-[color:var(--accent)]"
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
                        : 'border-[color:var(--border-strong)] text-[color:var(--text-primary)] hover:border-[color:var(--accent)]'
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
          <div className="absolute -inset-10 rounded-[2.5rem] bg-gradient-to-br from-aurum-500/20 via-transparent to-transparent blur-3xl" />
          <div className="absolute inset-0 rounded-[2rem] border border-white/10" />
          <div className="relative h-[380px] w-full overflow-hidden rounded-[2rem] border border-[color:var(--border-subtle)] bg-[color:var(--surface-strong)] shadow-glow md:h-[520px]">
            <ThreeErrorBoundary>
              <Scene
                performanceMode={performanceMode}
                preset={preset}
                explode={explodeValue}
                reduceMotion={reduceMotion}
              />
            </ThreeErrorBoundary>
          </div>
        </div>
      </div>
    </section>
  );
}
