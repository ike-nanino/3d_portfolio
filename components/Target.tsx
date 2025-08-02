"use client";

import { useGLTF } from '@react-three/drei';
import { useRef } from 'react';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { Mesh, Object3D } from 'three';
import type { TargetProps } from '@/types';

const Target: React.FC<TargetProps> = (props) => {
  const targetRef = useRef<Mesh>(null);
  
  const gltf = useGLTF(
    'https://vazxmixjsiawhamofees.supabase.co/storage/v1/object/public/models/target-stand/model.gltf',
  );
  
  // Use the scene directly without strict typing
  const scene = gltf.scene as Object3D;

  useGSAP(() => {
    if (!targetRef.current) return;

    gsap.to(targetRef.current.position, {
      y: targetRef.current.position.y + 0.5,
      duration: 1.5,
      repeat: -1,
      yoyo: true,
      ease: "power2.inOut", // Add smooth easing
    });
  });

  return (
    <mesh 
      {...props} 
      ref={targetRef} 
      rotation={[0, Math.PI / 5, 0]} 
      scale={1.5}
    >
      <primitive object={scene} />
    </mesh>
  );
};

export default Target;