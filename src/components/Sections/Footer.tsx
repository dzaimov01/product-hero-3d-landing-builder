import { siteConfig } from '@/lib/siteConfig';

export function Footer() {
  return (
    <footer className="border-t border-[color:var(--border-subtle)] py-10 text-sm text-[color:var(--text-muted)]">
      <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
        <span>{siteConfig.brandName} — Premium analytics template.</span>
        <div className="flex gap-6">
          <a href="#features" className="hover:text-[color:var(--text-primary)]">
            Features
          </a>
          <a href="#pricing" className="hover:text-[color:var(--text-primary)]">
            Pricing
          </a>
          <a href="#demo" className="hover:text-[color:var(--text-primary)]">
            Demo
          </a>
        </div>
      </div>
    </footer>
  );
}
