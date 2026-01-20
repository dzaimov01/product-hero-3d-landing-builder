export const siteConfig = {
  brandName: 'Aurum',
  headline: 'A premium analytics platform for executive-grade clarity.',
  subhead:
    'Aurum consolidates signal across every team into one cinematic dashboard. Built for operators who need speed, precision, and trust.',
  primaryCta: {
    label: 'Book a demo',
    href: '#demo'
  },
  secondaryCta: {
    label: 'View platform',
    href: '#features'
  },
  trustIndicators: ['SOC2-ready (placeholder)', '99.9% uptime (placeholder)', 'Global support'],
  navLinks: [
    { label: 'Features', href: '#features' },
    { label: 'How it works', href: '#how' },
    { label: 'Pricing', href: '#pricing' }
  ],
  featureList: [
    {
      title: 'Unified executive timeline',
      description: 'One scrollable story that compresses every product, revenue, and risk signal into a single glance.'
    },
    {
      title: 'Precision forecasting',
      description: 'Scenario modeling that updates in real time with enterprise-grade governance.'
    },
    {
      title: 'Secure-by-design workflows',
      description: 'Roles, retention, and audit trails designed for compliance-ready teams.'
    },
    {
      title: 'Instant stakeholder reports',
      description: 'Generate board-ready narratives with evidence baked in.'
    }
  ],
  steps: [
    {
      title: 'Connect signal',
      description: 'Sync data from every system with read-only connectors and real-time validation.'
    },
    {
      title: 'Compose the narrative',
      description: 'Build a living executive story with intelligent sections and auto-updating KPI cards.'
    },
    {
      title: 'Deliver with confidence',
      description: 'Publish in seconds with access control and audit logs for every edit.'
    }
  ],
  badges: [
    'Performance budget aligned',
    'Security-first architecture',
    '99.9% uptime (placeholder)'
  ],
  pricingTeaser: {
    title: 'Built for premium teams',
    description: 'Aurum is priced for ambitious operators who want immediate impact. Let us tailor the plan for your scale.',
    ctaLabel: 'Get a demo',
    ctaHref: '#demo'
  },
  faqs: [
    {
      question: 'Can we swap the 3D model?',
      answer:
        'Yes. Replace the model file and update the loader in src/3d/models/ProductModel.tsx. The pipeline is documented.'
    },
    {
      question: 'Does the scene degrade on low-end devices?',
      answer: 'Yes. Low-performance mode reduces DPR, disables shadows, and limits parallax automatically.'
    },
    {
      question: 'Is this template SEO-ready?',
      answer: 'Metadata, semantic structure, and performance budgets are included by default.'
    },
    {
      question: 'Can we use our design system tokens?',
      answer: 'Theme tokens live in src/styles/themeTokens.ts and map cleanly to Tailwind variables.'
    },
    {
      question: 'Is dark mode included?',
      answer: 'Dark mode is the default, with tokens ready for light mode toggling.'
    }
  ]
};
