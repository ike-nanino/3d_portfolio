"use client";

import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { useRef, useState } from 'react';
import { Float, useGLTF, useTexture } from '@react-three/drei';
import { Mesh, Texture } from 'three';
import type { CubeProps } from '@/types';

const Cube: React.FC<CubeProps> = ({ ...props }) => {
  const gltf = useGLTF('/models/cube.glb');
  const nodes = gltf.nodes as { [key: string]: Mesh };
  
  const texture: Texture = useTexture('/textures/cube.png');
  
  const cubeRef = useRef<Mesh>(null);
  const [hovered, setHovered] = useState(false);

  useGSAP(() => {
    if (!cubeRef.current) return;

    gsap
      .timeline({
        repeat: -1,
        repeatDelay: 0.5,
      })
      .to(cubeRef.current.rotation, {
        y: hovered ? '+=2' : `+=${Math.PI * 2}`,
        x: hovered ? '+=2' : `-=${Math.PI * 2}`,
        duration: 2.5,
        stagger: {
          each: 0.15,
        },
      });
  }, [hovered]); // Add hovered as dependency

  const handlePointerEnter = () => setHovered(true);
  const handlePointerLeave = () => setHovered(false);

  return (
    <Float floatIntensity={2}>
      <group 
        position={[9, -4, 0]} 
        rotation={[2.6, 0.8, -1.8]} 
        scale={0.74} 
        dispose={null} 
        {...props}
      >
        <mesh
          ref={cubeRef}
          castShadow
          receiveShadow
          geometry={(nodes.Cube as Mesh)?.geometry}
          material={(nodes.Cube as Mesh)?.material}
          onPointerEnter={handlePointerEnter}
          onPointerLeave={handlePointerLeave}
        >
          <meshMatcapMaterial matcap={texture} toneMapped={false} />
        </mesh>
      </group>
    </Float>
  );
};

// Preload the model for better performance
useGLTF.preload('/models/cube.glb');
export default Cube;