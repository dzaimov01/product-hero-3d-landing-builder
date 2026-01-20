import { siteConfig } from '@/lib/siteConfig';

export function PricingTeaser() {
  return (
    <section id="pricing" className="py-16">
      <div className="rounded-2xl border border-[color:var(--border-subtle)] bg-[color:var(--surface-strong)] p-8 md:p-12">
        <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
          <div className="space-y-3">
            <p className="text-xs uppercase tracking-[0.3em] text-[color:var(--text-muted)]">
              Pricing
            </p>
            <h2 className="text-3xl font-semibold text-[color:var(--text-primary)]">
              {siteConfig.pricingTeaser.title}
            </h2>
            <p className="max-w-xl text-sm text-[color:var(--text-secondary)]">
              {siteConfig.pricingTeaser.description}
            </p>
          </div>
          <a
            href={siteConfig.pricingTeaser.ctaHref}
            className="inline-flex items-center justify-center rounded-full bg-aurum-500 px-6 py-3 text-sm font-semibold text-ink-950 transition hover:bg-aurum-600"
          >
            {siteConfig.pricingTeaser.ctaLabel}
          </a>
        </div>
      </div>
    </section>
  );
}
