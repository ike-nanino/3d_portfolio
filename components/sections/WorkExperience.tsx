"use client"

import { Suspense, useState } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import Image from 'next/image';
import CanvasLoader from '../Loading';
import Developer from '../Developer';
import { workExperiences } from '@/constant';

const WorkExperience = () => {
  const [animationName, setAnimationName] = useState('idle');
  
  return (
    <section className="sm:px-10 px-5 my-20" id="work">
      <div className="w-full text-white-600">
        <p className="sm:text-4xl text-3xl font-semibold bg-gradient-to-r from-[#BEC1CF] from-60% via-[#D5D8EA] via-60% to-[#D5D8EA] to-100% bg-clip-text text-transparent">
          My Work Experience
        </p>
        
        <div className="grid lg:grid-cols-3 grid-cols-1 gap-5 mt-12">
          <div className="col-span-1 rounded-lg bg-black-200 border border-black-300">
            <Canvas>
              <ambientLight intensity={7} />
              <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} />
              <directionalLight position={[10, 10, 10]} intensity={1} />
              <OrbitControls enableZoom={false} maxPolarAngle={Math.PI / 2} />
              
              <Suspense fallback={<CanvasLoader />}>
                <Developer position-y={-3} scale={3} animationName={animationName} />
              </Suspense>
            </Canvas>
          </div>
          
          <div className="col-span-2 rounded-lg bg-black-200 border border-black-300">
            <div className="sm:py-10 py-5 sm:px-5 px-2.5">
              {workExperiences.map((item, index) => (
                <div
                  key={index}
                  onClick={() => setAnimationName(item.animation.toLowerCase())}
                  onPointerOver={() => setAnimationName(item.animation.toLowerCase())}
                  onPointerOut={() => setAnimationName('idle')}
                  className="grid grid-cols-[auto_1fr] items-start gap-5 transition-all ease-in-out duration-500 cursor-pointer hover:bg-black-300 rounded-lg sm:px-5 px-2.5 group"
                >
                  <div className="flex flex-col h-full justify-start items-center py-2">
                    <div className="rounded-3xl w-16 h-16 p-2 bg-black-600 relative overflow-hidden">
                      <Image 
                        className="w-full h-full object-contain" 
                        src={item.icon} 
                        alt={`${item.name} company logo`}
                        width={48}
                        height={48}
                        sizes="48px"
                        priority={index < 3} // Prioritize first 3 images
                        onError={(e) => {
                          console.error(`Failed to load image: ${item.icon}`);
                          // Fallback to a placeholder or hide the image
                          e.target.style.display = 'none';
                        }}
                      />
                    </div>
                    
                    <div className="flex-1 w-0.5 mt-4 h-full bg-black-300 group-hover:bg-black-500 group-last:hidden" />
                  </div>
                  
                  <div className="sm:p-5 px-2.5 py-5">
                    <p className="font-bold text-white-800">{item.name}</p>
                    <p className="text-sm mb-5">
                      {item.pos} -- <span>{item.duration}</span>
                    </p>
                    <p className="group-hover:text-white transition-all ease-in-out duration-500">
                      {item.title}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WorkExperience;