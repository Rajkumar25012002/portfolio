import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import ProjectItem from './ProjectItem';
import Mesh from '@/public/assets/skills/mesh.jpg'
import Gesture from '@/public/assets/skills/handgesture.jpg'
import Solar from '@/public/assets/skills/light.jpg'
import jobFinder from '@/public/assets/skills/jobfinder.jpg'
import chatApp from '@/public/assets/skills/chatapp.jpg'
import weatherApp from '@/public/assets/skills/weather.jpg'
import mobileStore from '@/public/assets/skills/mobilestore.png'
const Projects = () => {
  return (
    <div id='projects' className='w-full'>
      <div className='max-w-[1240px] mx-auto px-2 py-16'>
        <p className='text-xl tracking-widest uppercase text-sky-700'>
          Projects
        </p>
        <h2 className='py-4'>What I&apos;ve Built</h2>
        <div className='grid md:grid-cols-2 gap-8'>
          <ProjectItem
            title='A dual discrete predictive based MPPT for PV systems'
            backgroundImg={Solar}
            projectUrl='/Mpptsolar'
            tech='Fuzzy logic'
            websiteUrl={"https://rockymobiles.netlify.app/"}
          />
          <ProjectItem
            title='Hand Gesture Controll device'
            backgroundImg={Gesture}
            projectUrl='/HandGesture'
            websiteUrl={"https://rockymobiles.netlify.app/"}
            tech='Aurdino'
          />
          <ProjectItem
            title='Water storage using mesh'
            backgroundImg={Mesh}
            projectUrl='/Mesh'
            websiteUrl={"https://rockymobiles.netlify.app/"}
            tech='Hardware'
          />
          <ProjectItem
            title='Job Finder'
            backgroundImg={jobFinder}
            websiteUrl={"https://rockysjobfinder.netlify.app/"}
            projectUrl='https://github.com/Rajkumar25012002/jobFinder'
            tech='React'
          />
          <ProjectItem
            title='Chat App'
            backgroundImg={chatApp}
            websiteUrl={"https://rockys-maja-aagaya.netlify.app/"}
            projectUrl='https://github.com/Rajkumar25012002/chat-app'
            tech='React,Mongodb,Socket.io'
          />
          <ProjectItem
            title='Weather App'
            backgroundImg={weatherApp}
            websiteUrl={"https://rockysweather.netlify.app/"}
            projectUrl='https://github.com/Rajkumar25012002/weather-app'
            tech='React'
          />
          <ProjectItem
            title='Mobile Store'
            backgroundImg={mobileStore}
            websiteUrl={"https://rockymobiles.netlify.app/"}
            projectUrl='https://github.com/Rajkumar25012002/mobileStore'
            tech='React,Mongodb'
          />
        </div>
      </div>
    </div>
  );
};

export default Projects;