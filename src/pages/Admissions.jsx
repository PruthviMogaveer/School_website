// Admissions.js
import React from 'react';

const Admissions = () => {
  return (
    <div className="container mx-auto p-10">
      <h1 className="text-4xl font-medium bg-blue-800 text-white w-fit px-2 pb-1 mb-10">Admissions</h1>
      <h2 className="text-3xl font-normal mt-4">Admission <span className='text-white bg-blue-800 px-2'>Process</span></h2>
      <div className="flex flex-col w-full items-center bg-slate-300 rounded-sm p-4 mt-6">
        <p className=" indent-6 text-lg ">Admission forms are available for download. Submit the completed form along with required documents at the school office.</p>
        <button className="active:scale-90 p-3 mt-5 bg-blue-800 text-white text-lg font-medium rounded-sm mx-auto">
          Download Form
        </button>
      </div>
      <h2 className="text-2xl font-semibold mt-10">Admission <span className='text-white bg-blue-800 px-2'>Criteria</span></h2>
      <p className='indent-6 mt-5'>Admission is based on merit and availability of seats. Entrance tests may be conducted for certain grades.</p>
      <h2 className="text-2xl font-semibold mt-10">Important <span className='text-white bg-blue-800 px-2'>Dates</span></h2>
      <ul className="list-disc list-outside space-y-1 ml-4 mt-5">
        <li>Admission Form Availability: March 1st</li>
        <li>Last Date for Submission: March 31st</li>
        <li>Entrance Test: April 15th</li>
        <li>Announcement of Results: April 30th</li>
      </ul>
    </div>
  );
};

export default Admissions;
