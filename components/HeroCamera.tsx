"use client";

import { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { easing } from 'maath';
import { Group } from 'three';
import type { HeroCameraProps } from '@/types';

const HeroCamera: React.FC<HeroCameraProps> = ({ isMobile, children }) => {
  const groupRef = useRef<Group>(null);

  useFrame((state, delta) => {
    // Smooth camera position animation
    easing.damp3(state.camera.position, [0, 0, 20], 0.25, delta);

    // Apply mouse/pointer interaction only on non-mobile devices
    if (!isMobile && groupRef.current) {
      easing.dampE(
        groupRef.current.rotation,
        [-state.pointer.y / 3, state.pointer.x / 5, 0],
        0.25,
        delta
      );
    }
  });

  return <group ref={groupRef}>{children}</group>;
};

export default HeroCamera;