// CarouselComponent.js
import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { sports_day, science_exhibition, cultural_fest } from '../assets';

const carouselData = [
  {
    text: "Annual Sports Day - Celebrating Excellence in Sports",
    src: sports_day,
    alt: "Annual Sports Day"
  },
  {
    text: "Science Exhibition - Showcasing Student Innovations",
    src: science_exhibition,
    alt: "Science Exhibition"
  },
  {
    text: "Cultural Fest - Embracing Diversity and Creativity",
    src: cultural_fest,
    alt: "Cultural Fest"
  },
]

const CarouselComponent = () => {
  return (
    <Carousel showThumbs={false} infiniteLoop useKeyboardArrows autoPlay>
      {carouselData.map(item => (
        <div key={item.src} className='lg:h-[55vh]'>
          <img src={item.src} alt={item.alt} className='object-cover'/>
          <p className="legend">{item.text}</p>
        </div>
      ))}
    </Carousel>
  );
};

export default CarouselComponent;
