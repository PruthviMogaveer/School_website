// Students.js
import React from 'react';

const activities = ["Music", "Dance", "Drama", "Art", "Sports", "Robotics", "Debate Club", "Science Club"]

const clubs = ["Literary Society", "Environmental Club", "Astronomy Club", "Coding Club"]

const Students = () => {
  return (
    <div className="container mx-auto p-10">
      <h1 className="text-3xl font-medium text-white bg-blue-800 px-2 pb-1 w-fit mb-8">Students</h1>
      <h2 className="text-2xl font-semibold mt-4">Life at <span className='text-white bg-blue-800 px-2'>Springdale</span></h2>
      <div className='indent-6 mt-4 bg-slate-300 rounded-sm p-4'>
        <h1 className='font-medium text-lg'>Extracurricular Activities</h1>
        <div className='ml-4 mt-2'>
          {
            activities.map(activity => (
              <p className='mb-1'>{activity}</p>
            ))
          }
        </div>
      </div>
      <h2 className="text-2xl font-semibold mt-10"><span className='text-white bg-blue-800 px-2'>Clubs</span> and <span className='text-white bg-blue-800 px-2'>Societies</span></h2>
      <div className='indent-6 mt-4 bg-slate-300 p-4 rounded-sm'>
        {
          clubs.map(club => (
            <p className='mb-1'>{club}</p>
          )
          )
        }
      </div>
      <h2 className="text-2xl font-semibold mt-10">Achievements</h2>
      <ul className="list-disc list-inside mt-4 bg-slate-300 rounded-sm p-4">
        <li>John Smith - National Level Math Olympiad Winner</li>
        <li>Sarah Lee - Gold Medalist in State Swimming Championship</li>
        <li>Tech Innovators Club - Winners of Inter-School Robotics Competition</li>
      </ul>
      <h2 className="text-2xl font-semibold mt-10">Student Council</h2>
      <ul className="list-disc list-inside p-4 mt-4 bg-slate-300 rounded-sm">
        <li>President: Amy Parker, Grade 12</li>
        <li>Vice President: Rajiv Mehta, Grade 11</li>
        <li>Secretary: Lisa Wong, Grade 10</li>
      </ul>
    </div>
  );
};

export default Students;
