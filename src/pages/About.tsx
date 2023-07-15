import React from 'react';
import Hero from '../components/Hero';
import bg2 from '../assets/bg2.jpeg';

const About: React.FC = () => {
  return (
    <div id="about-container" className="h-max">
      <div
        id="about-header"
        style={{ backgroundImage: `url(${bg2})` }}
        className="w-full h-auto pb-80 lg:pt-40 md:pt-10 bg-no-repeat bg-cover bg-center bg-opacity-5 relative"
      >
        <div className="md:px-20 text-white h-full flex flex-col justify-end items-start md:items-normal">
          <div className="max-w-md md:max-w-lg lg:max-w-xl">
            <h1 className="mb-1 pt-2 pl-2 font-syne font-medium sm:text-xl md:text-3xl lg:text-5xl">
              Find Your{' '}
              <span className="mb-1 block font-syne font-extrabold text-5xl">
                Perfect
              </span>{' '}
              Ferry Companion{' '}
            </h1>
            <div className="pl-2 mt-2 bg-black bg-opacity-50 p-2 sm:rounded-none md:rounded-md absolute bottom-0 md:relative w-full sm:mx-auto md:max-w-sm lg:max-w-lg md:text-left">
              <p className="text-base text-white break-words text-center">
                Explore our database of sheltered dogs and find the furry
                companion that will bring joy and happiness to your life.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full">
        <Hero />
      </div>
    </div>
  );
};

export default About;
