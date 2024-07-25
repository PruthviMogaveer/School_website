// About.js
import React from 'react';
import PrincipalMessage from '../components/PrincipalMessage';
import Facilities from '../components/Facilities';
import { about1 } from '../assets';

const About = () => {
  return (
    <div className="container mx-auto p-4 mt-10">
      <h1 className="text-4xl font-normal mb-10 ml-10 max-lg:ml-5">About <span className='bg-blue-800 text-white px-2'>Us</span></h1>
      <div className='flex flex-wrap justify-around items-start'>
        <p className='w-[35rem] px-5 indent-10 mt-8 text-base text-justify'>Founded in 1985, Springdale Public School has been dedicated to providing quality education and holistic development to students. with the aim of providing quality education to students residing in and around belgaum. It started functioning as a small school from Nursery to Std III with a strength of 150 students, 5 classrooms & now it reached a strength of 700 students, 10 classrooms from Nursery to Std X. The school has gone from strength to strength having acquired CBSE affiliation and increased its teaching faculty from 26 to 40.By the process of natural growth we have now reached Std X.</p>
        <img src={about1} alt="school" className='w-[35%] max-xl:hidden h-80 object-contain' />
      </div>
      <div className='flex flex-wrap justify-start gap-10 items-start mt-10'>
        <p className="mt-14 w-[35rem]">
          <span className='block text-3xl font-normal ml-10 max-lg:ml-5'>Our <span className='bg-blue-800 text-white px-2'>Vision</span></span>
          <span className='px-5 text-justify indent-10 block mt-10 lg:ml-10'>To create a learninfont-normalronment that fosters academic excellence, critical thinking, and ethical values and excellence in learning. Students are being nourished within the frame of established value based system. The students here are taught to be realistic.</span>
        </p>
        <p className="mt-14 w-[35rem]">
          <span className='block text-3xl font-normal ml-10 max-lg:ml-5'>Our <span className='bg-blue-800 text-white px-2'>Mission</span></span>
          <span className='px-5 text-justify indent-10 block mt-10 lg:ml-10'> To empower students with the knowledge, skills, and values needed to thrive in a dynamic world.</span>
        </p>
      </div>
      <div className="mt-8">
        <PrincipalMessage />
      </div>
      <div className="mt-8">
        <Facilities />
      </div>
    </div>
  );
};

export default About;
