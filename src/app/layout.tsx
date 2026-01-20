import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Aurum — Premium Analytics Platform',
  description:
    'A high-end 3D product hero landing template for premium SaaS teams. Built with Next.js, Three.js, and performance discipline.',
  openGraph: {
    title: 'Aurum — Premium Analytics Platform',
    description:
      'A high-end 3D product hero landing template for premium SaaS teams. Built with Next.js, Three.js, and performance discipline.',
    images: ['/og-placeholder.png']
  },
  metadataBase: new URL('https://example.com')
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" data-theme="dark" suppressHydrationWarning>
      <body>
        <script
          dangerouslySetInnerHTML={{
            __html: `(() => {
  try {
    const stored = localStorage.getItem('theme');
    const preferred = window.matchMedia('(prefers-color-scheme: light)').matches ? 'light' : 'dark';
    const theme = stored || preferred;
    document.documentElement.dataset.theme = theme;
  } catch {}
})();`
          }}
        />
        {children}
      </body>
    </html>
  );
}
