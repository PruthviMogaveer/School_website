// Home.js
import React from 'react';
import CarouselComponent from '../components/CarouselComponent';

const Home = () => {
  return (
    <div className="container mx-auto p-4">
      <CarouselComponent />
      <div className='flex flex-wrap justify-center items-center my-10 space-y-8 container px-[5%]'>
        <h3 className='text-2xl font-bold text-center'>Welcome to Springdale Public School, where we nurture young minds for a brighter future.</h3>
        <p className='indent-10 text-center text-slate-700'>Welcome to Springdale Public School, where we nurture young minds for a brighter future. Our dedicated faculty and staff are committed to creating a supportive and challenging environment that encourages students to reach their full potential. We believe in holistic education that not only emphasizes academic excellence but also fosters creativity, critical thinking, and social responsibility. Our modern facilities and diverse extracurricular programs ensure that every child has the opportunity to explore their interests and develop their unique talents.</p>

        <p className='indent-10 text-center text-slate-700'>At Springdale Public School, we understand the importance of preparing students for the demands of the future. Our curriculum is designed to provide a strong foundation in core subjects while integrating technology and innovative teaching methods. We prioritize individual attention, ensuring that each student receives the guidance and support they need to succeed. Beyond academics, we emphasize the importance of character building and community involvement, preparing our students to become compassionate, well-rounded individuals ready to make a positive impact on the world.</p>
      </div>
      <div className="my-8 bg-gray-100 w-full">
      </div>
    </div>
  );
};

export default Home;
