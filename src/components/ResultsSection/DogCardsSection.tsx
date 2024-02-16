import React from 'react';
import { Dog } from '../../services/api';
import DogCard from './DogCard';
import EmptyFavoritesAlert from './EmptyFavoritesAlert';

interface DogCardsSectionProps {
  dogs: Dog[];
  showFavorite: boolean;
  favorites: string | string[];
}

const DogCardsSection: React.FC<DogCardsSectionProps> = ({
  dogs,
  showFavorite,
  favorites,
}) => {
  return (
    <div className="flex flex-col items-center">
      {favorites.length === 0 && showFavorite ? (
        <EmptyFavoritesAlert />
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-3">
          {dogs.map((dog: Dog) => (
            <DogCard dog={dog} key={dog.id} />
          ))}
        </div>
      )}
    </div>
  );
};

export default DogCardsSection;
