import { siteConfig } from '@/lib/siteConfig';

export function HowItWorks() {
  return (
    <section id="how" className="space-y-10 py-16">
      <div className="space-y-3">
        <p className="text-xs uppercase tracking-[0.3em] text-[color:var(--text-muted)]">
          How it works
        </p>
        <h2 className="text-3xl font-semibold text-[color:var(--text-primary)]">
          Designed for velocity, built for trust.
        </h2>
      </div>
      <div className="grid gap-6 md:grid-cols-3">
        {siteConfig.steps.map((step, index) => (
          <div
            key={step.title}
            className="rounded-2xl border border-[color:var(--border-subtle)] bg-[color:var(--surface-glass)] p-6"
          >
            <div className="text-xs uppercase tracking-[0.3em] text-[color:var(--text-muted)]">
              Step {index + 1}
            </div>
            <h3 className="mt-4 text-lg font-semibold text-[color:var(--text-primary)]">
              {step.title}
            </h3>
            <p className="mt-3 text-sm text-[color:var(--text-secondary)]">
              {step.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
