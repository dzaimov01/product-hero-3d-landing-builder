# Architecture

## Overview
This project is a premium landing template built on Next.js App Router with a config-driven content model and a lazy-loaded Three.js hero. The page is designed to be SEO-ready, accessible, and performance budget aware.

## Key modules
- `src/app/layout.tsx`: metadata, theme root, global layout.
- `src/app/page.tsx`: section composition and semantic structure.
- `src/lib/siteConfig.ts`: single source of truth for content and copy.
- `src/3d/Scene.tsx`: Three.js canvas, camera rig, lighting presets, and performance mode.
- `src/3d/models/ProductModel.tsx`: procedural placeholder with explode-ready parts.

## Data flow
Content is read from `siteConfig` and passed into UI components. 3D configuration is stateful within `Hero.tsx` and passed as props into the scene.

## Error handling
`ThreeErrorBoundary` catches 3D runtime errors and displays a static fallback image to protect conversion paths.

## OpenGraph image
The default OpenGraph image is a tiny placeholder in `public/og-placeholder.png`. Replace it with a generated 1200x630 image before production.
