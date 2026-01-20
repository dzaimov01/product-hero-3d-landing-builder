export function ThreeSkeleton() {
  return (
    <div className="relative h-full w-full overflow-hidden rounded-2xl border border-[color:var(--border-subtle)] bg-[color:var(--surface-strong)]">
      <div className="absolute inset-0 animate-pulse bg-gradient-to-br from-[color:var(--surface-muted)] via-[color:var(--surface-glass)] to-[color:var(--surface-muted)]" />
      <div className="absolute bottom-6 left-6 h-3 w-24 rounded-full bg-[color:var(--border-strong)]" />
      <div className="absolute bottom-10 left-6 h-2 w-16 rounded-full bg-[color:var(--border-subtle)]" />
    </div>
  );
}
