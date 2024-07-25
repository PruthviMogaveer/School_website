// Gallery.js
import React from 'react';
import { sports_day, science_exhibition, cultural_fest, classroom, library } from '../assets';

const photos = [
  { src: sports_day, caption: 'Students participating in various sports events.' },
  { src: science_exhibition, caption: 'Students presenting their science projects.' },
  { src: cultural_fest, caption: 'Students performing in the cultural fest.' },
  { src: classroom, caption: 'A glimpse of our interactive classrooms.' },
  { src: library, caption: 'Students reading and studying in the school library.' },
];

const Gallery = () => {
  return (
    <div className="container mx-auto p-10">
      <h1 className="text-3xl font-medium mb-4 text-white bg-blue-800 w-fit px-2 pb-1">Gallery</h1>
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {photos.map((photo, index) => (
          <div key={index} className="bg-gray-100 p-4 rounded-lg shadow-md">
            <img src={photo.src} alt={photo.caption} className="rounded-lg" />
            <p className="mt-2 font-medium text-slate-600">{photo.caption}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Gallery;
