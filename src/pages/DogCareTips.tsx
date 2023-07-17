import React from 'react';
import { useMediaQuery } from '@mui/material';
import bg5 from '../assets/bg5.jpeg';
import tips1 from '../assets/tips1.jpeg';
import tips2 from '../assets/tips2.jpeg';
import tips3 from '../assets/tips3.jpeg';
import tips4 from '../assets/tips4.jpeg';

const DogCareTips: React.FC = () => {
  const tips = [
    {
      image: tips1,
      caption: 'Should You Feed Your Pet Wet or Dry Food?',
      link: 'https://www.zoetispetcare.com/blog/article/feed-pet-wet-dry-food',
    },
    {
      image: tips2,
      caption: 'My Dog Has a Belly Rash, What Now?',
      link: 'https://www.zoetispetcare.com/blog/article/dog-belly-rash',
    },
    {
      image: tips3,
      caption: 'Treats for Dogs: When Are They Too Much',
      link: 'https://www.zoetispetcare.com/blog/article/treats-pets-too-much3',
    },
    {
      image: tips4,
      caption: 'What is Hyperpigmentatioins in Dogs',
      link: 'https://www.zoetispetcare.com/blog/article/hyperpigmentation-dogs',
    },
  ];

  const isXsScreen = useMediaQuery('(max-width:600px)');

  return (
    <div id="tip-page-container" className="flex flex-wrap">
      <div
        id="tip-page-left"
        className={`w-full flex-grow ${
          !isXsScreen && 'md:w-5/12'
        } h-60 md:min-h-screen-minus-nav`}
      >
        <img
          src={bg5}
          alt={'Happy Dogs'}
          className={`w-full h-full object-cover`}
        />
      </div>
      <div id="tip-page-right" className="w-full md:w-7/12">
        <h1 className="text-2xl text-center font-semibold mt-2 pt-5 py-4">
          Dog Care Tips
        </h1>
        <p className="text-lg text-center mt-2 mb-4 py-1 px-10">
          Explore our curated dog care tips to ensure your furry friend leads a
          happy and healthy life. Click on any tip to learn more.
        </p>
        <div className="flex flex-wrap p-5">
          {tips.map((tip, index) => (
            <div key={index} className="w-1/2 p-2">
              <button
                className="w-full"
                onClick={() => window.open(tip.link, '_blank')}
              >
                <div className="w-full flex flex-col bg-white rounded-md">
                  <div
                    className={`h-24 lg:h-40 object-${
                      isXsScreen ? 'cover' : 'scale-down'
                    }`}
                  >
                    <img
                      src={tip.image}
                      alt={`Dog Tip ${index + 1}`}
                      className="w-full h-full object-cover rounded-md"
                    />
                  </div>
                  <p className="text-center pt-1 pb-5 px-1 font-medium">
                    {tip.caption}
                  </p>
                </div>
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default DogCareTips;
