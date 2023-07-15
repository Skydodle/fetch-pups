import React from 'react';
import Hero from '../components/Hero';
import bg2 from '../assets/bg2.jpeg';

const About: React.FC = () => {
  return (
    <div id="about-container" className="h">
      <div
        id="about-header"
        style={{ backgroundImage: `url(${bg2})` }}
        className="w-full h-auto px-10 pt-40 pb-80 bg-no-repeat bg-cover bg-center bg-opacity-5 md:px-0"
      >
        {/* <img
          className="w-full h-full object-cover"
          src={bg2}
          alt="girl hugging dog"
        /> */}
        <div className="px-20 text-off-white">
          <h1 className="mb-1 font-syne font-medium text-5xl md:text-[3rem]">
            Find Your
            <span className="mb-1 block font-syne font-extrabold text-5xl">
              Perfect
            </span>{' '}
            Ferry Companion{' '}
          </h1>
        </div>
      </div>
      <div className="w-full">
        <Hero />
      </div>
    </div>
  );
};

export default About;
