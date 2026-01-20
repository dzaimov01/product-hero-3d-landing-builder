import { siteConfig } from '@/lib/siteConfig';

export function PricingTeaser() {
  return (
    <section id="pricing" className="py-16">
      <div className="rounded-2xl border border-ink-800 bg-gradient-to-br from-ink-900/90 via-ink-900/70 to-transparent p-8 md:p-12">
        <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
          <div className="space-y-3">
            <p className="text-xs uppercase tracking-[0.3em] text-ink-500">Pricing</p>
            <h2 className="text-3xl font-semibold text-white">{siteConfig.pricingTeaser.title}</h2>
            <p className="max-w-xl text-sm text-ink-300">{siteConfig.pricingTeaser.description}</p>
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
