export type PerformanceMode = 'low' | 'high';

export function detectPerformanceMode(): PerformanceMode {
  if (typeof navigator === 'undefined') return 'high';
  const memory = (navigator as Navigator & { deviceMemory?: number }).deviceMemory ?? 8;
  const cores = navigator.hardwareConcurrency ?? 8;
  const connection = (navigator as Navigator & { connection?: { saveData?: boolean } }).connection;
  const prefersLow = memory <= 4 || cores <= 4 || connection?.saveData;
  return prefersLow ? 'low' : 'high';
}

export function getDpr(mode: PerformanceMode) {
  if (typeof window === 'undefined') return 1;
  return mode === 'low' ? 1 : Math.min(2, window.devicePixelRatio || 1);
}
