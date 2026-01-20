import { siteConfig } from '@/lib/siteConfig';

export function Features() {
  return (
    <section id="features" className="space-y-10 py-16">
      <div className="space-y-3">
        <p className="text-xs uppercase tracking-[0.3em] text-ink-500">Product highlight</p>
        <h2 className="text-3xl font-semibold text-white">Everything you need to tell the story.</h2>
        <p className="max-w-2xl text-sm text-ink-300">
          A premium information architecture with disciplined performance budgets and conversion-first UX.
        </p>
      </div>
      <div className="grid gap-6 md:grid-cols-2">
        {siteConfig.featureList.map((feature) => (
          <div
            key={feature.title}
            className="rounded-2xl border border-ink-800 bg-ink-900/60 p-6"
          >
            <h3 className="text-lg font-semibold text-white">{feature.title}</h3>
            <p className="mt-3 text-sm text-ink-300">{feature.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
