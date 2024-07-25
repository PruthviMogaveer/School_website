// Facilities.js
import React from 'react';

const Facilities = () => {
  return (
    <div className="bg-gray-100 p-10 mt-16 rounded-lg mb-20">
      <h3 className="text-2xl font-medium mb-10"><span className='bg-blue-800 px-2 text-white'>Infrastructure</span> and <span className='bg-blue-800 px-2 text-white'>Facilities</span></h3>
      <ul className="flex-col space-y-2 list-disc list-outside lg:ml-10 text-justify">
        <li>State-of-the-art science and computer labs</li>
        <li>Spacious and well-equipped classrooms</li>
        <li>Library with a vast collection of books and digital resources</li>
        <li>Sports facilities including a playground, gymnasium, and swimming pool</li>
      </ul>
    </div>
  );
};

export default Facilities;
