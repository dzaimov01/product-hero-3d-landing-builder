import { render, screen } from '@testing-library/react';
import React from 'react';
import { ThreeErrorBoundary } from '@/components/ThreeErrorBoundary';

function Explode() {
  throw new Error('boom');
}

it('shows fallback when 3D scene crashes', () => {
  render(
    <ThreeErrorBoundary>
      <Explode />
    </ThreeErrorBoundary>
  );

  expect(screen.getByAltText('Static product visual placeholder')).toBeInTheDocument();
});
