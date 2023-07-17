import React from 'react';
import PetsIcon from '@mui/icons-material/Pets';

const EmptyFavoritesAlert: React.FC = () => {
  return (
    <div className="py-20">
      <div className="flex flex-col items-center mt-3 py-20">
        <h2 className="text-center text-gray-500 text-lg">
          Oops! You haven't added any favorites yet...
        </h2>
        <p className="text-center text-gray-500 mb-5">
          Let's pick some of your favorite dogs so we can generate a match for
          ya!
        </p>
        <PetsIcon color="secondary" fontSize="large" />
      </div>
    </div>
  );
};

export default EmptyFavoritesAlert;
