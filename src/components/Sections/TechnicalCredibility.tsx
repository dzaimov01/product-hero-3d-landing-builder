import { siteConfig } from '@/lib/siteConfig';

export function TechnicalCredibility() {
  return (
    <section className="space-y-10 py-16">
      <div className="space-y-3">
        <p className="text-xs uppercase tracking-[0.3em] text-ink-500">Engineering discipline</p>
        <h2 className="text-3xl font-semibold text-white">Performance, security, and quality by design.</h2>
      </div>
      <div className="grid gap-4 md:grid-cols-3">
        {siteConfig.badges.map((badge) => (
          <div key={badge} className="rounded-2xl border border-ink-800 bg-ink-900/60 p-5">
            <p className="text-sm text-ink-200">{badge}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
