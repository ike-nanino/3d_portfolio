// components/Rings.tsx
"use client";

import { useGSAP } from '@gsap/react';
import { Center, useTexture } from '@react-three/drei';
import gsap from 'gsap';
import { useCallback, useRef } from 'react';
import { Mesh, Texture } from 'three';
import type { RingsProps } from '@/types';

const Rings: React.FC<RingsProps> = ({ position }) => {
  const meshRefs = useRef<Mesh[]>([]);
  
  const addMeshRef = useCallback((mesh: Mesh | null) => {
    if (mesh && !meshRefs.current.includes(mesh)) {
      meshRefs.current.push(mesh);
    }
  }, []);

  const texture: Texture = useTexture('/textures/rings.png');

  useGSAP(
    () => {
      if (meshRefs.current.length === 0) return;

      // Set initial positions
      meshRefs.current.forEach((mesh) => {
        mesh.position.set(position[0], position[1], position[2]);
      });

      // Create rotation animation
      gsap
        .timeline({
          repeat: -1,
          repeatDelay: 0.5,
        })
        .to(
          meshRefs.current.map((mesh) => mesh.rotation),
          {
            y: `+=${Math.PI * 2}`,
            x: `-=${Math.PI * 2}`,
            duration: 2.5,
            stagger: {
              each: 0.15,
            },
          },
        );
    },
    {
      dependencies: [position],
    },
  );

  return (
    <Center>
      <group scale={0.5}>
        {Array.from({ length: 4 }, (_, index) => (
          <mesh key={index} ref={addMeshRef}>
            <torusGeometry args={[(index + 1) * 0.5, 0.1]} />
            <meshMatcapMaterial matcap={texture} toneMapped={false} />
          </mesh>
        ))}
      </group>
    </Center>
  );
};

export default Rings;
