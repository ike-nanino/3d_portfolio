"use client";

import { useState } from 'react';
import dynamic from 'next/dynamic';

import Image from 'next/image';
import Button from '../Button';

// Dynamically import Globe with no SSR
const Globe = dynamic(() => import('react-globe.gl'), {
  ssr: false,
  loading: () => <div className="flex justify-center items-center h-[326px] w-[326px] text-white">Loading Globe...</div>
});

const About = () => {
  const [hasCopied, setHasCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(' adrian@jsmastery.pro');
    setHasCopied(true);

    setTimeout(() => {
      setHasCopied(false);
    }, 2000);
  };

  return (
    <section className="sm:px-10 px-5 my-20" id="about">
      <div className="grid xl:grid-cols-3 xl:grid-rows-6 md:grid-cols-2 grid-cols-1 gap-5 h-full">
        <div className="col-span-1 xl:row-span-3">
          <div className="w-full h-full border border-black-300 bg-black-200 rounded-lg sm:p-7 p-4 flex flex-col gap-5">
            <div className="relative w-full sm:h-[276px] h-48">
              <Image 
                src="/assets/grid1.png" 
                alt="grid-1"
                fill
                className="object-contain rounded-lg" 
              />
            </div>

            <div>
              <p className="text-xl font-semibold mb-2 text-white font-generalsans">Hi, I&apos;m Isaac Semanu</p>
              <p className="text-[#afb0b6] text-base font-generalsans">
                With 12 years of experience, I have honed my skills in both frontend and backend dev, creating dynamic
                and responsive websites.
              </p>
            </div>
          </div>
        </div>

        <div className="col-span-1 xl:row-span-3">
          <div className="w-full h-full border border-black-300 bg-black-200 rounded-lg sm:p-7 p-4 flex flex-col gap-5">
            <div className="relative w-full sm:h-[276px] h-48">
              <Image 
                src="/assets/grid2.png" 
                alt="grid-2" 
                fill 
                className="object-contain rounded-lg" 
              />
            </div>

            <div>
              <p className="text-xl font-semibold mb-2 text-white font-generalsans">Tech Stack</p>
              <p className="text-[#afb0b6] text-base font-generalsans">
                I specialize in a variety of languages, frameworks, and tools that allow me to build robust and scalable
                applications
              </p>
            </div>
          </div>
        </div>

        <div className="col-span-1 xl:row-span-4">
          <div className="w-full h-full border border-black-300 bg-black-200 rounded-lg sm:p-7 p-4 flex flex-col gap-5">
            <div className="rounded-3xl w-full sm:h-[326px] h-64 flex justify-center items-center">
              <Globe
                height={326}
                width={326}
                backgroundColor="rgba(0, 0, 0, 0)"
                showAtmosphere
                showGraticules
                globeImageUrl="https://unpkg.com/three-globe/example/img/earth-night.jpg"
                bumpImageUrl="https://unpkg.com/three-globe/example/img/earth-topology.png"
                labelsData={[{ lat: 40, lng: -100, text: 'Rjieka, Croatia', color: 'white', size: 15 }]}
              />
            </div>
            <div>
              <p className="text-xl font-semibold mb-2 text-white font-generalsans">I&apos;m very flexible with time zone communications & locations</p>
              <p className="text-[#afb0b6] text-base font-generalsans">I&apos;m based in Rjieka, Croatia and open to remote work worldwide.</p>
              <Button name="Contact Me" isBeam containerClass="w-full mt-10" />
            </div>
          </div>
        </div>

        <div className="xl:col-span-2 xl:row-span-3">
          <div className="w-full h-full border border-black-300 bg-black-200 rounded-lg sm:p-7 p-4 flex flex-col gap-5">
            <div className="relative w-full sm:h-[266px] h-48">
              <Image 
                src="/assets/grid3.png" 
                alt="grid-3" 
                fill 
                className="object-contain rounded-lg" 
              />
            </div>

            <div>
              <p className="text-xl font-semibold mb-2 text-white font-generalsans">My Passion for Coding</p>
              <p className="text-[#afb0b6] text-base font-generalsans">
                I love solving problems and building things through code. Programming isn&apos;t just my
                profession—it&apos;s my passion. I enjoy exploring new technologies, and enhancing my skills.
              </p>
            </div>
          </div>
        </div>

        <div className="xl:col-span-1 xl:row-span-2">
          <div className="w-full h-full border border-black-300 bg-black-200 rounded-lg sm:p-7 p-4 flex flex-col gap-5">
            <div className="relative w-full md:h-[126px] sm:h-[276px] h-32">
              <Image
                src="/assets/grid4.png"
                alt="grid-4"
                fill
                className="object-cover sm:object-top rounded-lg"
              />
            </div>

            <div className="space-y-2">
              <p className="text-[#afb0b6] text-base font-generalsans text-center">Contact me</p>
              <div className="cursor-pointer flex justify-center items-center gap-2" onClick={handleCopy}>
                <div className="relative w-6 h-6">
                  <Image 
                    src={hasCopied ? '/assets/tick.svg' : '/assets/copy.svg'} 
                    alt="copy" 
                    fill 
                    className="object-contain"
                  />
                </div>
                <p className="lg:text-2xl md:text-xl font-medium text-gray text-white">adrian@jsmastery.pro</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;