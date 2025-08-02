type ViewportFlags = {
  isSmall: boolean;
  isMobile: boolean;
  isTablet: boolean;
};


export interface SizeConfig {
  deskScale: number;
  deskPosition: [number, number, number];
  targetPosition: [number, number, number];
  reactLogoPosition: [number, number, number];
  ringPosition: [number, number, number];
  cubePosition: [number, number, number];
}

export interface HeroCameraProps {
  isMobile: boolean;
  children: React.ReactNode;
}

export interface RingsProps {
  position: [number, number, number];
}

export interface HackerRoomProps {
  scale: number;
  position: [number, number, number];
  rotation: [number, number, number];
}

export interface CubeProps {
  position?: [number, number, number];
}

export interface ReactLogoProps {
  position?: [number, number, number];
}

export interface TargetProps {
  position?: [number, number, number];
}