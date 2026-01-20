export type LightingPresetKey = 'studio' | 'night' | 'soft';

export const lightingPresets: Record<
  LightingPresetKey,
  {
    label: string;
    ambient: number;
    key: [number, number, number];
    fill: [number, number, number];
    rim: [number, number, number];
    intensity: number;
    color: string;
  }
> = {
  studio: {
    label: 'Studio',
    ambient: 0.5,
    key: [4, 6, 6],
    fill: [-6, 2, 4],
    rim: [0, 6, -6],
    intensity: 1,
    color: '#f1e9da'
  },
  night: {
    label: 'Night',
    ambient: 0.2,
    key: [3, 5, 4],
    fill: [-4, 1, 5],
    rim: [0, 6, -8],
    intensity: 0.7,
    color: '#7aa5ff'
  },
  soft: {
    label: 'Soft',
    ambient: 0.6,
    key: [2, 4, 6],
    fill: [-5, 2, 5],
    rim: [0, 4, -4],
    intensity: 0.6,
    color: '#f7d8a8'
  }
};
