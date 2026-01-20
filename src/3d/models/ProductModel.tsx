'use client';

import { useMemo } from 'react';
import { GroupProps } from '@react-three/fiber';
import { RoundedBox } from '@react-three/drei';

export function ProductModel({ explode = 0, ...props }: GroupProps & { explode?: number }) {
  const parts = useMemo(
    () => [
      { id: 'base', size: [2.4, 0.4, 1.4], pos: [0, -0.25, 0], explode: [0, -0.3, 0] },
      { id: 'deck', size: [2.1, 0.25, 1.1], pos: [0, 0.05, 0], explode: [0, 0.2, 0] },
      { id: 'core', size: [1.2, 0.35, 0.7], pos: [0, 0.35, 0], explode: [0, 0.45, 0] },
      { id: 'cap', size: [1.6, 0.18, 0.9], pos: [0, 0.62, 0], explode: [0, 0.7, 0] }
    ],
    []
  );

  return (
    <group {...props}>
      {parts.map((part) => (
        <RoundedBox
          key={part.id}
          args={part.size as [number, number, number]}
          radius={0.18}
          smoothness={6}
          position={[
            part.pos[0] + part.explode[0] * explode,
            part.pos[1] + part.explode[1] * explode,
            part.pos[2] + part.explode[2] * explode
          ]}
        >
          <meshStandardMaterial
            color={part.id === 'base' ? '#2b313a' : part.id === 'core' ? '#d6b36a' : '#e9dfcf'}
            metalness={part.id === 'core' ? 0.8 : 0.3}
            roughness={part.id === 'core' ? 0.2 : 0.35}
          />
        </RoundedBox>
      ))}
      <mesh position={[0, 0.22 + explode * 0.4, 0.65]}>
        <torusGeometry args={[0.55, 0.06, 20, 80]} />
        <meshStandardMaterial color="#b99752" metalness={0.7} roughness={0.25} />
      </mesh>
      <mesh position={[0, 0.22 + explode * 0.4, -0.65]}>
        <torusGeometry args={[0.55, 0.06, 20, 80]} />
        <meshStandardMaterial color="#b99752" metalness={0.7} roughness={0.25} />
      </mesh>
    </group>
  );
}
