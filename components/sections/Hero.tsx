"use client";

import { Leva } from 'leva';
import { Suspense, useMemo } from 'react';
import { Canvas } from '@react-three/fiber';
import { useMediaQuery } from 'react-responsive';
import { PerspectiveCamera } from '@react-three/drei';

import CanvasLoader from '../Loading';
import HeroCamera from '../HeroCamera';
import Target from '../Target';
import Rings from '../Rings';
import Cube from '../Cube';
import { HackerRoom } from '../HackerRoom';
import ReactLogo from '../ReactLogo';
import { calculateSizes } from '@/constant/index';
import Button from '../Button';
import type { SizeConfig } from '@/types';

const Hero: React.FC = () => {
  // Use media queries to determine screen size
  const isSmall = useMediaQuery({ maxWidth: 440 });
  const isMobile = useMediaQuery({ maxWidth: 768 });
  const isTablet = useMediaQuery({ minWidth: 768, maxWidth: 1024 });

  // Memoize sizes calculation to prevent unnecessary recalculations
  const sizes: SizeConfig = useMemo(
    () => calculateSizes(isSmall, isMobile, isTablet),
    [isSmall, isMobile, isTablet]
  );

  return (
    <section className="min-h-screen w-full flex flex-col relative" id="home">
      <div className="w-full mx-auto flex flex-col sm:mt-36 mt-20 sm:px-10 px-5 gap-3">
        <p className="sm:text-3xl text-xl font-medium text-white text-center font-generalsans">
          Hi, I am Isaac <span className="waving-hand" role="img" aria-label="waving hand">👋</span>
        </p>
        <p className="text-center xl:text-6xl md:text-5xl sm:text-4xl text-3xl font-generalsans font-black leading-normal">
          Building Products & Brands
        </p>
      </div>

      <div className="w-full h-full absolute inset-0">
        <Canvas 
          className="w-full h-full"
          dpr={[1, 2]} // Optimize for different pixel densities
          performance={{ min: 0.5 }} // Performance optimization
        >
          <Suspense fallback={<CanvasLoader />}>
            {/* To hide controller */}
            <Leva hidden />
            <PerspectiveCamera makeDefault position={[0, 0, 30]} />

            <HeroCamera isMobile={isMobile}>
              <HackerRoom 
                scale={sizes.deskScale} 
                position={sizes.deskPosition} 
                rotation={[0.1, -Math.PI, 0]} 
              />
            </HeroCamera>

            <group>
              <Target position={sizes.targetPosition} />
              <ReactLogo position={sizes.reactLogoPosition} />
              {/* <Rings position={sizes.ringPosition} /> */}
              <Cube position={sizes.cubePosition} />
            </group>

            <ambientLight intensity={1} />
            <directionalLight position={[10, 10, 10]} intensity={0.5} />
          </Suspense>
        </Canvas>
      </div>

      <div className="absolute bottom-7 left-0 right-0 w-full z-10 sm:px-10 px-5">
        <a href="#about" className="w-fit" aria-label="Navigate to about section">
          <Button 
            name="Let's work together" 
            isBeam 
            containerClass="sm:w-fit w-full sm:min-w-96" 
          />
        </a>
      </div>
    </section>
  );
};

export default Hero;