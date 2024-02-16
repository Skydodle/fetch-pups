import React, { useContext } from 'react';
import { Dog } from '../../services/api';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import { Favorite } from '@mui/icons-material';
import { FavoritesContext } from '../../context/FavoritesContext';

interface DogCardProps {
  dog: Dog;
}

const DogCard: React.FC<DogCardProps> = ({ dog }) => {
  const { favorites, setFavorites } = useContext(FavoritesContext);
  const isFavorite = favorites.includes(dog.id);

  // Add or remove from favorites based on the current isFavorite status
  const handleFavoriteIconButtonClick = () => {
    if (isFavorite) {
      setFavorites((prevFavorites) =>
        prevFavorites.filter((id) => id !== dog.id),
      );
    } else {
      setFavorites((prevFavorites) => [...prevFavorites, dog.id]);
    }
  };

  return (
    <div
      id="dog-card"
      className="max-w-[277.33px] min-w-[268px] mx-auto bg-white shadow-xl rounded-md overflow-hidden max-h-[390px] min-h-[390px] mt-2"
    >
      <img
        src={dog.img}
        alt="dog card profile"
        className="w-full h-[200px] object-cover"
      />
      <div id="dog-info" className="px-4 pt-4 min-h-[130px] ">
        <h2 className="font-bold text-lg mb-2">{dog.name}</h2>
        <p className=" text-base ">{dog.breed}</p>
        <p className=" text-base ">{dog.age} years old</p>
        <p className=" text-base ">
          <span className="font-light">Zip Code:</span>{' '}
          <span>{dog.zip_code}</span>
        </p>
      </div>
      <div id="dog-card-action" className="flex justify-start px-4 pt-2 pb-4">
        <button
          aria-label={
            !isFavorite ? 'add to favorites' : 'remove from favorites'
          }
          onClick={handleFavoriteIconButtonClick}
          className="focus:outline-none"
        >
          {isFavorite ? (
            <Favorite className="text-red-500" fontSize="medium" />
          ) : (
            <FavoriteBorderIcon className="text-red-500" fontSize="medium" />
          )}
        </button>
      </div>
    </div>
  );
};

export default DogCard;
