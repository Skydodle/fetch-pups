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
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-1">
      {favorites.length === 0 && showFavorite ? (
        <EmptyFavoritesAlert />
      ) : (
        dogs.map((dog: Dog) => <DogCard dog={dog} key={dog.id} />)
      )}
    </div>
  );
};

export default DogCardsSection;
