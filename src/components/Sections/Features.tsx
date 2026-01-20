import { siteConfig } from '@/lib/siteConfig';

export function Features() {
  return (
    <section id="features" className="space-y-10 py-16">
      <div className="space-y-3">
        <p className="text-xs uppercase tracking-[0.3em] text-[color:var(--text-muted)]">
          Product highlight
        </p>
        <h2 className="text-3xl font-semibold text-[color:var(--text-primary)]">
          Everything you need to tell the story.
        </h2>
        <p className="max-w-2xl text-sm text-[color:var(--text-secondary)]">
          A premium information architecture with disciplined performance budgets and conversion-first UX.
        </p>
      </div>
      <div className="grid gap-6 md:grid-cols-2">
        {siteConfig.featureList.map((feature) => (
          <div
            key={feature.title}
            className="rounded-2xl border border-[color:var(--border-subtle)] bg-[color:var(--surface-glass)] p-6"
          >
            <h3 className="text-lg font-semibold text-[color:var(--text-primary)]">
              {feature.title}
            </h3>
            <p className="mt-3 text-sm text-[color:var(--text-secondary)]">
              {feature.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
