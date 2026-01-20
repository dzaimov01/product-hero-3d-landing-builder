# Product Hero 3D Landing Builder

A premium Next.js landing template designed for high-end product teams. This build focuses on conversion-first layout, disciplined performance budgets, and a cinematic 3D hero that gracefully degrades on low-end devices.

## Why it exists
Most landing templates either look generic or sacrifice performance. This project is a reference for building a minimal, premium, and technically credible product hero with interactive 3D without compromising UX.

## Key features
- Config-driven copy and sections via `src/lib/siteConfig.ts`.
- Scroll-driven camera, parallax, explode view, and cinematic light presets.
- Light/dark theme toggle with system preference detection.
- Performance-aware rendering with auto low-mode detection.
- Accessibility-first interactions and reduced motion support.
- Error boundary with static fallback image for 3D failures.

## Quickstart
```bash
npm install
npm run dev
```

## Build
```bash
npm run lint
npm run typecheck
npm run test
npm run build
```

## Performance notes
- LCP target: < 2.5s
- CLS target: < 0.1
- Low mode reduces DPR, shadows, and motion.

## Customize via siteConfig
Edit `src/lib/siteConfig.ts` to update brand name, headline, CTA, features, and FAQs. This keeps the template reusable without touching the layout.

## 3D model swap
See `docs/SWAP_MODEL_GUIDE.md` for replacing the placeholder procedural model.

## Legal
Viewing this repository is allowed, but reuse or modification is not permitted without written permission. See `LICENSE.txt`.
