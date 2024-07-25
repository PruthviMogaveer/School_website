// Academics.js
import React, { useState } from 'react';

const curriculum = [
  {
    grade: "Primary (Grades I - V)",
    sub: [
      "English", "Mathematics", "Science", "Social Studies", "Art", "Physical Education"
    ]
  },
  {
    grade: "Secondary (Grades VI - X)",
    sub: [
      "English", "Mathematics", "Science (Physics, Chemistry, Biology)", "Social Studies", "Art", "Physical Education", "Computer Science"
    ]
  },
  {
    grade: "Senior Secondary (Grades XI - XII)",
    sub: [
      {
        stream: "Science Stream",
        subjects: ["Physics", "Chemistry", "Biology", "Mathematics", "Computer Science", "English"]
      },
      {
        stream: "Commerce Stream",
        subjects: ["Accountancy", "Business Studies", "Economics", "Mathematics", "English"]
      }
    ]
  },
];

const Academics = () => {
  const [selectedGrade, setSelectedGrade] = useState("Primary (Grades I - V)");

  const handleClick = (grade) => {
    setSelectedGrade(grade);
  };

  const selectedCurriculum = curriculum.find(item => item.grade === selectedGrade);


  return (
    <div className="container mx-auto p-10 ">
      <h1 className="text-4xl text-white bg-blue-800 w-fit px-2 pb-1 font-medium mb-4">Academics</h1>
      <h2 className="text-3xl font-medium mt-10">Curriculum</h2>

      <div className="container mx-auto p-4 flex max-lg:flex-col gap-10 mt-5 max-lg:-ml-8">
        <div className="w-1/4 max-lg:w-full">
          <ul className="list-none max-lg:flex list-inside">
            {curriculum.map((item, index) => (
              <li
                key={index}
                className={`bg-slate-300 my-1 max-lg:mx-1 p-4 rounded-sm cursor-pointer hover:text-blue-500  ${selectedGrade === item.grade ? 'text-blue-500' : ''}`}
                onClick={() => handleClick(item.grade)}
              >
                {item.grade}
              </li>
            ))}
          </ul>
        </div>
        <div className="w-3/4 max-lg:w-full p-8 bg-slate-300 rounded-sm my-1 max-lg:mx-auto max-lg:ml-4">
          {selectedGrade && (
            <>
              <h2 className="text-2xl font-semibold mb-4">{selectedGrade}</h2>
              {Array.isArray(selectedCurriculum.sub) && typeof selectedCurriculum.sub[0] === 'string' ? (
                <ul className="list-disc list-inside ml-4">
                  {selectedCurriculum.sub.map((subject, index) => (
                    <li key={index}>{subject}</li>
                  ))}
                </ul>
              ) : (
                <>
                  {selectedCurriculum.sub.map((stream, index) => (
                    <div key={index}>
                      <h3 className="text-xl font-semibold mt-4">{stream.stream}</h3>
                      <ul className="list-disc list-inside ml-4">
                        {stream.subjects.map((subject, idx) => (
                          <li key={idx}>{subject}</li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </>
              )}
            </>
          )}
        </div>
      </div>
      <div className='bg-slate-300 px-6'>
        <h2 className="text-2xl font-medium mt-10 pt-6">Teaching Methodologies</h2>
        <p className='ml-5 mt-3 pb-6  '>We use a blend of traditional and modern teaching techniques to cater to different learning styles.</p>
      </div>
      <div className='bg-slate-300 px-6'>
        <h2 className="text-2xl font-medium mt-10 pt-6">Educational Resources</h2>
        <p className='ml-5 mt-3 pb-6  '>Digital classrooms, interactive learning modules, and access to online educational platforms.</p>
      </div>
    </div>
  );
};

export default Academics;
