'use client';

import React from 'react';
import { ThreeFallback } from './ThreeFallback';

type ThreeErrorBoundaryState = { hasError: boolean };

export class ThreeErrorBoundary extends React.Component<
  React.PropsWithChildren,
  ThreeErrorBoundaryState
> {
  state: ThreeErrorBoundaryState = { hasError: false };

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  render() {
    if (this.state.hasError) {
      return <ThreeFallback />;
    }

    return this.props.children;
  }
}
