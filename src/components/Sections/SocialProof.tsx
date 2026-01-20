export function SocialProof() {
  return (
    <section className="border-y border-ink-800 py-10">
      <div className="grid gap-6 text-center md:grid-cols-5 md:text-left">
        {['Northwind', 'Vela', 'Helios', 'Orbit', 'Sierra'].map((brand) => (
          <div
            key={brand}
            className="text-xs uppercase tracking-[0.3em] text-ink-500 md:text-sm"
          >
            {brand}
          </div>
        ))}
      </div>
    </section>
  );
}
