import { siteConfig } from '@/lib/siteConfig';

export function FAQ() {
  return (
    <section className="space-y-10 py-16">
      <div className="space-y-3">
        <p className="text-xs uppercase tracking-[0.3em] text-[color:var(--text-muted)]">FAQ</p>
        <h2 className="text-3xl font-semibold text-[color:var(--text-primary)]">
          Answers for the inevitable questions.
        </h2>
      </div>
      <div className="grid gap-4">
        {siteConfig.faqs.map((item) => (
          <details
            key={item.question}
            className="group rounded-2xl border border-[color:var(--border-subtle)] bg-[color:var(--surface-glass)] p-6"
          >
            <summary className="cursor-pointer list-none text-sm font-semibold text-[color:var(--text-primary)]">
              {item.question}
            </summary>
            <p className="mt-3 text-sm text-[color:var(--text-secondary)]">{item.answer}</p>
          </details>
        ))}
      </div>
    </section>
  );
}
