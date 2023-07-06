import React from 'react';
import Image from 'next/image';
import Profile from '../public/assets/profile_pic.jpeg'

const About = () => {
  return (
    <div id='about' className='w-full md:h-screen p-2 flex items-center py-16'>
      <div className='max-w-[1240px] m-auto md:grid grid-cols-3 gap-8'>
        <div className='col-span-2'>
          <p className='uppercase text-xl tracking-widest text-[#5651e5]'>
            About
          </p>
          <h2 className='py-4'>Who I Am</h2>
          <p className='py-2 text-gray-600'>
            I specialize in building business applications using Appian platform
            that connect with API’s and other backend technologies. I’m
            passionate about learning new technologies and understand there is
            more than one way to accomplish a task. Though I am most proficient
            in building business applictions using Appian.I know about different domain on HTML,CSS,Javascript and
            React.I am a quick learner and can pick up new tech stacks as
            needed. I believe that being a great developer is not using one
            specific language, but choosing the best tool for the job.
          </p>
          <p className='py-2 text-gray-600'>
            I started my career with building applications using BPM tool. I have an ability to translate business requirements into
            innovative software solutions. I do have interest in building frontend applications using React Js.
          </p>
        </div>
        <div className='object-scale-down h-[75%] w-[75%] m-auto shadow-xl shadow-gray-200 rounded-xl flex items-center justify-center p-3 hover:scale-105 ease-in duration-300'>
          <Image src={Profile} className='rounded-xl' alt='/' />
        </div>
      </div>
    </div>
  );
};

export default About;