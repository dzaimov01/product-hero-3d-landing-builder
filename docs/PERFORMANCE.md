# Performance

## Budgets
- Lighthouse goals: LCP < 2.5s, CLS < 0.1, TBT minimized.
- 3D scene renders under a bounded container to prevent layout shifts.

## Implemented tactics
- Dynamic import for the 3D hero with a skeleton placeholder.
- Auto-detect low-end devices and default to low mode (reduced DPR, no shadows).
- Pointer parallax disabled on coarse pointers.
- No heavy textures; procedural geometry only.
- Respect `prefers-reduced-motion` plus manual UI override.

## Monitoring checklist
- Keep GLTF assets below 1-2MB.
- Avoid runtime shader compilation spikes.
- Profile on mid-tier mobile devices before shipping.
