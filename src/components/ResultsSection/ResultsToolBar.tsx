import React from 'react';
import FavoritesButton from '../common/Buttons/FavoriteButton';
import ClearFavoritesButton from '../common/Buttons/ClearFavoritesButton';
import MatchButton from '../common/Buttons/MatchButton';
import SearchButton from '../common/Buttons/SearchButton';

type ResultsToolbarProps = {
  favoritesCount: number;
  showFavorite: boolean;
  toggleShowFavorites: () => void;
  totalResults: number;
};

const ResultsToolbar: React.FC<ResultsToolbarProps> = ({
  favoritesCount,
  showFavorite,
  toggleShowFavorites,
  totalResults,
}) => {
  return (
    <div
      id="results-tool-bar"
      className="flex justify-between md:w-3/4 px-2 my-2 mx-auto"
    >
      <div className=" pl-2">
        <div className="flex flex-wrap">
          <FavoritesButton
            favoritesCount={favoritesCount}
            showFavorite={showFavorite}
            toggleShowFavorite={toggleShowFavorites}
          />
          {showFavorite ? <ClearFavoritesButton /> : null}
          <MatchButton />
          {showFavorite ? <SearchButton /> : null}
        </div>
      </div>
      <div className=" flex items-center justify-end">
        <p className="text-custom-blue font-semibold pr-2">
          <b>{totalResults}</b> Results
        </p>
      </div>
    </div>
  );
};

export default ResultsToolbar;
