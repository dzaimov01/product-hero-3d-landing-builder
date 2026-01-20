import { siteConfig } from '@/lib/siteConfig';

export function TechnicalCredibility() {
  return (
    <section className="space-y-10 py-16">
      <div className="space-y-3">
        <p className="text-xs uppercase tracking-[0.3em] text-[color:var(--text-muted)]">
          Engineering discipline
        </p>
        <h2 className="text-3xl font-semibold text-[color:var(--text-primary)]">
          Performance, security, and quality by design.
        </h2>
      </div>
      <div className="grid gap-4 md:grid-cols-3">
        {siteConfig.badges.map((badge) => (
          <div
            key={badge}
            className="rounded-2xl border border-[color:var(--border-subtle)] bg-[color:var(--surface-glass)] p-5"
          >
            <p className="text-sm text-[color:var(--text-secondary)]">{badge}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
