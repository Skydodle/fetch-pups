import React, { useEffect, useContext, useState, useCallback } from 'react';
import APIService from '../services/api';
import { Dog } from '../services/api';
import DogCard from '../components/ResultsSection/DogCard';
import Confetti from 'react-confetti';
import { useWindowSize } from 'react-use';
import { useLocation } from 'react-router-dom';
import MatchButton from '../components/common/Buttons/MatchButton';
import SearchButton from '../components/common/Buttons/SearchButton';
import FavoritesButton from '../components/common/Buttons/FavoriteButton';
import { FavoritesContext } from '../context/FavoritesContext';

const Match: React.FC = () => {
  const [dog, setDog] = useState<Dog | null>(null);
  const { width, height } = useWindowSize();
  const location = useLocation();
  const { favorites, showFavorite, setShowFavorite } =
    useContext(FavoritesContext);

  const fetchMatchDog = useCallback(async () => {
    try {
      const response = await APIService.match(favorites);
      const matchedDogId = response.data.match;
      const dogResponse = await APIService.getDogs([matchedDogId]);
      const matchedDog = dogResponse.data[0];
      setDog(matchedDog);
    } catch (err) {
      console.error(err);
    }
  }, [favorites]);

  const toggleShowFavorite = () => {
    setShowFavorite((prev) => !prev);
  };

  // New dog is fetch from favorites whenever location or favorites changes
  // The match button will go to location /match route again which triggers a rerender on a new dog
  useEffect(() => {
    fetchMatchDog();
  }, [location, fetchMatchDog]);

  return (
    <>
      <Confetti width={width} height={height} />
      <div className="flex flex-col justify-center items-center max-h-screen py-8 overflow-hidden">
        <h1 className="text-vibrant-orange font-syne p-10 font-bold text-5xl text-center sm:text-5xl">
          THE PERFECT MATCH!
        </h1>
        {dog && <DogCard dog={dog} />}
        <div className="flex space-x-4 justify-center pt-16">
          <FavoritesButton
            favoritesCount={favorites.length}
            showFavorite={showFavorite}
            toggleShowFavorite={toggleShowFavorite}
          />
          <MatchButton />
          <SearchButton />
        </div>
      </div>
    </>
  );
};

export default Match;
