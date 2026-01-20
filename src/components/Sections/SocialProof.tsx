export function SocialProof() {
  return (
    <section className="border-y border-[color:var(--border-subtle)] py-10">
      <div className="grid gap-6 text-center md:grid-cols-5 md:text-left">
        {['Northwind', 'Vela', 'Helios', 'Orbit', 'Sierra'].map((brand) => (
          <div
            key={brand}
            className="text-xs uppercase tracking-[0.3em] text-[color:var(--text-muted)] md:text-sm"
          >
            {brand}
          </div>
        ))}
      </div>
    </section>
  );
}
