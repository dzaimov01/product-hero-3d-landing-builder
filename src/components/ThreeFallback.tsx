import Image from 'next/image';

export function ThreeFallback() {
  return (
    <div className="flex h-full w-full items-center justify-center rounded-2xl border border-ink-800 bg-ink-900/70">
      <Image
        src="/hero-fallback.svg"
        alt="Static product visual placeholder"
        width={880}
        height={520}
        className="h-auto w-full max-w-[520px]"
        priority
      />
    </div>
  );
}
