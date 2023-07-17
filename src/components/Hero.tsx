import React from 'react';
import { Pets } from '@mui/icons-material';
import { useNavigate } from 'react-router-dom';

const Hero: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="bg-white pt-5 pb-24 pl-0 ">
      <div className="mx-auto p-5 ">
        <h1 className="text-4xl text-center font-bold mb-4 text-custom-blue font-lexend ">
          Lets find a match!
        </h1>
        <h2 className="text-xl text-center font-light font-lexend lg:px-80 md:px-40 sm:px-10 text-black">
          Here at
          <span className="text-vibrant-orange font-extrabold font-roboto pl-2">
            <Pets />
            FetchPups
          </span>
          , we love our furry best friends. Our mission is to help a dog-lover
          like yourself find a sheltered dog to join your family. Pick a few of
          your favorite dogs and we will find you a perfect match!
        </h2>

        <div className="flex justify-center mt-6">
          <button
            className="bg-vibrant-orange hover:bg-orange-700 text-off-white font-lexend py-2 px-4 rounded shadow-md"
            onClick={() => navigate('/search')}
          >
            Start Searching
          </button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
