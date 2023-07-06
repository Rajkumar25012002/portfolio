import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import ProjectItem from './ProjectItem';
import Mesh from '../public/assets/mesh.jpg'
import Gesture from '../public/assets/handgesture.jpg'
import Solar from '../public/assets/light.jpg'
const Projects = () => {
  return (
    <div id='projects' className='w-full'>
      <div className='max-w-[1240px] mx-auto px-2 py-16'>
        <p className='text-xl tracking-widest uppercase text-[#5651e5]'>
          Projects
        </p>
        <h2 className='py-4'>What I&apos;ve Built</h2>
        <div className='grid md:grid-cols-2 gap-8'>
          <ProjectItem
            title='A dual discrete predictive based MPPT for PV systems'
            backgroundImg={Solar}
            projectUrl='/Mpptsolar'
            tech='Fuzzy logic'
          />
          <ProjectItem
            title='Hand Gesture Controll device'
            backgroundImg={Gesture}
            projectUrl='/HandGesture'
            tech='Aurdino'
          />
          <ProjectItem
            title='Water storage using mesh'
            backgroundImg={Mesh}
            projectUrl='/Mesh'
            tech='Hardware'
          />
        </div>
      </div>
    </div>
  );
};

export default Projects;