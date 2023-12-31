import React, { useEffect, useContext, useState } from 'react';
import APIService from '../services/api';
import { Dog } from '../services/api';
import DogCard from '../components/ResultsSection/DogCard';
import Confetti from 'react-confetti';
import { useWindowSize } from 'react-use';
import { useLocation } from 'react-router-dom';
import MatchButton from '../components/Buttons/MatchButton';
import SearchButton from '../components/Buttons/SearchButton';
import FavoritesButton from '../components/Buttons/FavoriteButton';
import { FavoritesContext } from '../context/FavoritesContext';

const Match: React.FC = () => {
  const [dog, setDog] = useState<Dog | null>(null);
  const { width, height } = useWindowSize();
  const location = useLocation();
  const { favorites, showFavorite, setShowFavorite } =
    useContext(FavoritesContext);

  const fetchMatchDog = async () => {
    try {
      const response = await APIService.match(favorites);
      const matchedDogId = response.data.match;
      const dogResponse = await APIService.getDogs([matchedDogId]);
      const matchedDog = dogResponse.data[0];
      setDog(matchedDog);
    } catch (err) {
      console.error(err);
    }
  };

  const toggleShowFavorite = () => {
    setShowFavorite((prev) => !prev);
  };

  useEffect(() => {
    fetchMatchDog();
  }, [location]);

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
