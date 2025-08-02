"use client";

import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { Suspense, useState } from 'react';
import { Canvas } from '@react-three/fiber';
import { Center, OrbitControls } from '@react-three/drei';
import { myProjects } from '@/constant';
import Image from 'next/image';
import CanvasLoader from '../Loading';
import DemoComputer from '../DemoComputer';

const projectCount = myProjects.length;

const Projects = () => {
  const [selectedProjectIndex, setSelectedProjectIndex] = useState(0);

  const handleNavigation = (direction) => {
    setSelectedProjectIndex((prevIndex) => {
      if (direction === 'previous') {
        return prevIndex === 0 ? projectCount - 1 : prevIndex - 1;
      } else {
        return prevIndex === projectCount - 1 ? 0 : prevIndex + 1;
      }
    });
  };

  useGSAP(() => {
    gsap.fromTo(`.animatedText`, { opacity: 0 }, { opacity: 1, duration: 1, stagger: 0.2, ease: 'power2.inOut' });
  }, [selectedProjectIndex]);

  const currentProject = myProjects[selectedProjectIndex];

  return (
    <section className="sm:px-10 px-5 my-20">
      <p className="sm:text-4xl text-3xl font-semibold text-gray_gradient">My Selected Work</p>

      <div className="grid lg:grid-cols-2 grid-cols-1 mt-12 gap-5 w-full">
        <div className="flex flex-col gap-5 relative sm:p-10 py-10 px-5 shadow-2xl shadow-black-200">
          <div className="absolute top-0 right-0 w-full h-96 overflow-hidden rounded-xl">
            <Image 
              src={currentProject.spotlight} 
              alt="spotlight" 
              fill
              className="object-cover rounded-xl" 
            />
          </div>

          <div className="p-3 backdrop-filter backdrop-blur-3xl w-fit rounded-lg" style={currentProject.logoStyle}>
            <div className="relative w-10 h-10">
              <Image 
                className="shadow-sm" 
                src={currentProject.logo} 
                alt="logo" 
                fill
                className="object-contain"
              />
            </div>
          </div>

          <div className="flex flex-col gap-5 text-white-600 my-5">
            <p className="text-white text-2xl font-semibold animatedText">{currentProject.title}</p>

            <p className="animatedText">{currentProject.desc}</p>
            <p className="animatedText">{currentProject.subdesc}</p>
          </div>

          <div className="flex items-center justify-between flex-wrap gap-5">
            <div className="flex items-center gap-3">
              {currentProject.tags.map((tag, index) => (
                <div key={index} className="tech-logo relative w-10 h-10">
                  <Image 
                    src={tag.path} 
                    alt={tag.name} 
                    fill
                    className="object-contain"
                  />
                </div>
              ))}
            </div>

            <a
              className="flex items-center gap-2 cursor-pointer text-white-600"
              href={currentProject.href}
              target="_blank"
              rel="noreferrer">
              <p>Check Live Site</p>
              <div className="relative w-3 h-3">
                <Image 
                  src="/assets/arrow-up.png" 
                  alt="arrow" 
                  fill
                  className="object-contain"
                />
              </div>
            </a>
          </div>

          <div className="flex justify-between items-center mt-7">
            <button className="arrow-gradient w-12 h-12 rounded-full cursor-pointer active:scale-95 transition-all flex items-center justify-center" onClick={() => handleNavigation('previous')}>
              <div className="relative w-4 h-4">
                <Image 
                  src="/assets/left-arrow.png" 
                  alt="left arrow" 
                  fill
                  className="object-contain"
                />
              </div>
            </button>

            <button className="arrow-gradient w-12 h-12 rounded-full cursor-pointer active:scale-95 transition-all flex items-center justify-center" onClick={() => handleNavigation('next')}>
              <div className="relative w-4 h-4">
                <Image 
                  src="/assets/right-arrow.png" 
                  alt="right arrow" 
                  fill
                  className="object-contain"
                />
              </div>
            </button>
          </div>
        </div>

        <div className="border border-black-300 bg-[#0E0E10] rounded-lg h-96 md:h-full">
          <Canvas>
            <ambientLight intensity={Math.PI} />
            <directionalLight position={[10, 10, 5]} />
            <Center>
              <Suspense fallback={<CanvasLoader />}>
                <group scale={2} position={[0, -3, 0]} rotation={[0, -0.1, 0]}>
                  <DemoComputer texture={currentProject.texture} />
                </group>
              </Suspense>
            </Center>
            <OrbitControls maxPolarAngle={Math.PI / 2} enableZoom={false} />
          </Canvas>
        </div>
      </div>
    </section>
  );
};

export default Projects;