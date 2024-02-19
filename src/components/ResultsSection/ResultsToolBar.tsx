import React from 'react';
import FavoritesButton from '../common/Buttons/FavoriteButton';
import ClearFavoritesButton from '../common/Buttons/ClearFavoritesButton';
import MatchButton from '../common/Buttons/MatchButton';
import SearchButton from '../common/Buttons/SearchButton';
import SortingDropDown from './SortingDropDown';

type ResultsToolbarProps = {
  favoritesCount: number;
  showFavorite: boolean;
  toggleShowFavorites: () => void;
  handleSort: () => void;
  asc: boolean;
  totalResults: number;
};

const ResultsToolbar: React.FC<ResultsToolbarProps> = ({
  favoritesCount,
  showFavorite,
  toggleShowFavorites,
  totalResults,
  handleSort,
  asc,
}) => {
  return (
    <div
      id="results-tool-bar"
      className="flex justify-between md:w-3/4 px-2 my-2 mx-auto"
    >
      <div className="flex flex-wrap items-center">
        <FavoritesButton
          favoritesCount={favoritesCount}
          showFavorite={showFavorite}
          toggleShowFavorite={toggleShowFavorites}
        />
        {showFavorite ? <ClearFavoritesButton /> : null}
        <MatchButton />
        {showFavorite ? <SearchButton /> : null}
      </div>
      <div className="flex items-center">
        <p className="text-custom-blue font-semibold pr-2">
          <b>{totalResults}</b> Results
        </p>
      </div>
      {/* <div> */}
      <div className="flex items-center">
        <SortingDropDown handleSortChange={() => {}} />
      </div>
      {/* </div> */}
    </div>
  );
};

export default ResultsToolbar;
