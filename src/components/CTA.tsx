import { siteConfig } from '@/lib/siteConfig';

export function CTA() {
  return (
    <section
      id="demo"
      className="rounded-2xl border border-[color:var(--border-subtle)] bg-[color:var(--surface-glass)] p-8"
    >
      <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
        <div className="space-y-2">
          <h3 className="text-2xl font-semibold text-[color:var(--text-primary)]">
            Ready to see Aurum in action?
          </h3>
          <p className="text-sm text-[color:var(--text-secondary)]">
            A tailored walkthrough, performance review, and implementation roadmap.
          </p>
        </div>
        <a
          href={siteConfig.primaryCta.href}
          className="inline-flex items-center justify-center rounded-full bg-aurum-500 px-6 py-3 text-sm font-semibold text-ink-950 transition hover:bg-aurum-600"
        >
          {siteConfig.primaryCta.label}
        </a>
      </div>
    </section>
  );
}
