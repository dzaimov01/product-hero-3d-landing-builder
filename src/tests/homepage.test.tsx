import { render, screen } from '@testing-library/react';
import { it, expect } from 'vitest';
import Page from '@/app/page';
import { siteConfig } from '@/lib/siteConfig';

it('renders the homepage hero', () => {
  render(<Page />);
  expect(screen.getByRole('heading', { name: siteConfig.headline })).toBeInTheDocument();
  expect(screen.getAllByRole('link', { name: siteConfig.primaryCta.label }).length).toBeGreaterThan(0);
});
