import { useGLTF, useTexture } from '@react-three/drei';
import { Mesh, Material } from 'three';
import type { HackerRoomProps } from '@/types';

export const HackerRoom: React.FC<HackerRoomProps> = (props) => {
  const gltf = useGLTF('/models/hacker-room.glb');
  
  // Type assertion with proper fallbacks
  const nodes = gltf.nodes as { [key: string]: Mesh };
  const materials = gltf.materials as { [key: string]: Material };

  const monitorTexture = useTexture('/textures/desk/monitor.png');
  const screenTexture = useTexture('/textures/desk/screen.png');

  return (
    <group {...props} dispose={null}>
      <mesh geometry={(nodes.screen_screens_0 as Mesh)?.geometry} material={materials.screens}>
        <meshMatcapMaterial map={screenTexture} />
      </mesh>
      <mesh geometry={(nodes.screen_glass_glass_0 as Mesh)?.geometry} material={materials.glass} />
      <mesh geometry={(nodes.table_table_mat_0_1 as Mesh)?.geometry} material={materials.table_mat} />
      <mesh geometry={(nodes.table_table_mat_0_2 as Mesh)?.geometry} material={materials.computer_mat}>
        <meshMatcapMaterial map={monitorTexture} />
      </mesh>
      <mesh geometry={(nodes.table_table_mat_0_3 as Mesh)?.geometry} material={materials.server_mat} />
      <mesh geometry={(nodes.table_table_mat_0_4 as Mesh)?.geometry} material={materials.vhsPlayer_mat} />
      <mesh geometry={(nodes.table_table_mat_0_5 as Mesh)?.geometry} material={materials.stand_mat} />
      <mesh geometry={(nodes.table_table_mat_0_6 as Mesh)?.geometry} material={materials.mat_mat} />
      <mesh geometry={(nodes.table_table_mat_0_7 as Mesh)?.geometry} material={materials.arm_mat} />
      <mesh geometry={(nodes.table_table_mat_0_8 as Mesh)?.geometry} material={materials.tv_mat}>
        <meshMatcapMaterial map={monitorTexture} />
      </mesh>
      <mesh geometry={(nodes.table_table_mat_0_9 as Mesh)?.geometry} material={materials.cables_mat} />
      <mesh geometry={(nodes.table_table_mat_0_10 as Mesh)?.geometry} material={materials.props_mat} />
      <mesh geometry={(nodes.table_table_mat_0_11 as Mesh)?.geometry} material={materials.ground_mat} />
      <mesh geometry={(nodes.table_table_mat_0_12 as Mesh)?.geometry} material={materials.key_mat} />
    </group>
  );
};

// Preload the model for better performance
useGLTF.preload('/models/hacker-room.glb');
