'use client';

import { useMemo } from 'react';
import { GroupProps } from '@react-three/fiber';
import { RoundedBox } from '@react-three/drei';

export function ProductModel({ explode = 0, ...props }: GroupProps & { explode?: number }) {
  const offsets = useMemo(
    () => [
      [0, 0, 0],
      [1.2, 0.4, 0.6],
      [-1.1, -0.2, 0.8],
      [0.6, 0.8, -0.9],
      [-0.8, 0.6, -0.7]
    ],
    []
  );

  return (
    <group {...props}>
      <RoundedBox args={[1.8, 0.5, 1.8]} radius={0.2} smoothness={6}>
        <meshStandardMaterial color="#d6b36a" metalness={0.35} roughness={0.25} />
      </RoundedBox>
      {offsets.slice(1).map((offset, index) => (
        <RoundedBox
          key={`segment-${index}`}
          args={[0.6, 0.2, 0.6]}
          radius={0.12}
          smoothness={4}
          position={[offset[0] * explode, offset[1] * explode, offset[2] * explode]}
        >
          <meshStandardMaterial color="#f1eee8" metalness={0.2} roughness={0.35} />
        </RoundedBox>
      ))}
    </group>
  );
}
