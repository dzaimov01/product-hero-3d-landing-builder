import Link from 'next/link';
import { siteConfig } from '@/lib/siteConfig';

export function Navbar() {
  return (
    <nav className="flex items-center justify-between py-6">
      <Link href="/" className="text-lg font-semibold tracking-wide">
        {siteConfig.brandName}
      </Link>
      <div className="hidden items-center gap-8 md:flex">
        {siteConfig.navLinks.map((link) => (
          <a key={link.href} href={link.href} className="text-sm text-ink-300 hover:text-white">
            {link.label}
          </a>
        ))}
      </div>
      <a
        href={siteConfig.primaryCta.href}
        className="rounded-full border border-ink-700 px-4 py-2 text-sm text-white transition hover:border-aurum-500 hover:text-aurum-500"
      >
        {siteConfig.primaryCta.label}
      </a>
    </nav>
  );
}
