export function ThreeSkeleton() {
  return (
    <div className="relative h-full w-full overflow-hidden rounded-2xl border border-ink-800 bg-ink-900/70">
      <div className="absolute inset-0 animate-pulse bg-gradient-to-br from-ink-800/40 via-ink-900/60 to-ink-800/30" />
      <div className="absolute bottom-6 left-6 h-3 w-24 rounded-full bg-ink-700/60" />
      <div className="absolute bottom-10 left-6 h-2 w-16 rounded-full bg-ink-800/70" />
    </div>
  );
}
