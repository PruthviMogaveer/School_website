// Faculty.js
import React from 'react';

const facultyData = [
  { name: 'John Doe', position: 'Principal', qualification: 'M.Ed', experience: '20 years' },
  { name: 'Jane Smith', position: 'Vice Principal', qualification: 'M.Sc. in Physics', experience: '15 years' },
  { name: 'Emily Johnson', position: 'English Teacher', qualification: 'M.A. in English', experience: '10 years' },
  { name: 'Michael Brown', position: 'Mathematics Teacher', qualification: 'M.Sc. in Mathematics', experience: '8 years' },
  { name: 'Sophia Davis', position: 'Science Teacher', qualification: 'M.Sc. in Chemistry', experience: '12 years' },
  { name: 'David Wilson', position: 'Computer Science Teacher', qualification: 'B.Tech in Computer Science', experience: '5 years' },
];

const Faculty = () => {
  return (
    <div className="container mx-auto p-10">
      <h1 className="text-3xl font-mono text-white bg-blue-800 w-fit px-2 pb-1 mb-4">Faculty</h1>
      <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {facultyData.map((faculty, index) => (
          <div key={index} className="bg-gray-100 p-4 rounded-sm shadow-md">
            <h3 className="text-2xl font-semibold">{faculty.name}</h3>
            <p>{faculty.position}</p>
            <p>{faculty.qualification}</p>
            <p>{faculty.experience}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Faculty;
