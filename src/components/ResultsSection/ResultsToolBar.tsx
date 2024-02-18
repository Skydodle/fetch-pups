import React from 'react';
import FavoritesButton from '../common/Buttons/FavoriteButton';
import ClearFavoritesButton from '../common/Buttons/ClearFavoritesButton';
import MatchButton from '../common/Buttons/MatchButton';
import SearchButton from '../common/Buttons/SearchButton';
import { ArrowDownward, ArrowUpward } from '@mui/icons-material';
import TuneIcon from '@mui/icons-material/Tune';

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
      <div className="flex items-center justify-end">
        <p className="text-custom-blue font-semibold pr-2">
          <b>{totalResults}</b> Results
        </p>
      </div>
      <div className="flex items-center justify-end">
        <button
          onClick={handleSort}
          className="w-full py-1 px-2 rounded border border-custom-blue text-custom-blue text-sm "
        >
          {asc ? (
            <ArrowDownward fontSize="small" />
          ) : (
            <ArrowUpward fontSize="small" />
          )}{' '}
          SORT
        </button>
      </div>
    </div>
  );
};

export default ResultsToolbar;
