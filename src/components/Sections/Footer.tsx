import { siteConfig } from '@/lib/siteConfig';

export function Footer() {
  return (
    <footer className="border-t border-ink-800 py-10 text-sm text-ink-500">
      <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
        <span>{siteConfig.brandName} — Premium analytics template.</span>
        <div className="flex gap-6">
          <a href="#features" className="hover:text-white">
            Features
          </a>
          <a href="#pricing" className="hover:text-white">
            Pricing
          </a>
          <a href="#demo" className="hover:text-white">
            Demo
          </a>
        </div>
      </div>
    </footer>
  );
}
