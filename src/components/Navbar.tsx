import Link from 'next/link';
import { siteConfig } from '@/lib/siteConfig';
import { ThemeToggle } from './ThemeToggle';

export function Navbar() {
  return (
    <nav className="flex items-center justify-between py-6">
      <Link href="/" className="text-lg font-semibold tracking-wide">
        {siteConfig.brandName}
      </Link>
      <div className="hidden items-center gap-8 md:flex">
        {siteConfig.navLinks.map((link) => (
          <a
            key={link.href}
            href={link.href}
            className="text-sm text-[color:var(--text-secondary)] hover:text-[color:var(--text-primary)]"
          >
            {link.label}
          </a>
        ))}
      </div>
      <div className="flex items-center gap-3">
        <ThemeToggle />
        <a
          href={siteConfig.primaryCta.href}
          className="rounded-full border border-[color:var(--border-strong)] px-4 py-2 text-sm text-[color:var(--text-primary)] transition hover:border-[color:var(--accent)] hover:text-[color:var(--accent)]"
        >
          {siteConfig.primaryCta.label}
        </a>
      </div>
    </nav>
  );
}
