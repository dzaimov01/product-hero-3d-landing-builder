# Swap Model Guide

## Replace the placeholder
1. Add your GLTF or GLB file to `public/models/`.
2. Update `src/3d/models/ProductModel.tsx` to load it using `useGLTF` from `@react-three/drei`.
3. Keep mesh count low and avoid heavy textures.

## Explode view
- If your model has named parts, map them to offsets and animate positions when `explode` is enabled.
- For simple models, you can keep the procedural placeholder and replace only when needed.
