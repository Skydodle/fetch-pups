import React, { useEffect, useState, useContext, useCallback } from 'react';
import { isAxiosError } from 'axios';
import { Dog } from '../services/api';
import { fetchDogs } from '../services/dogApi';

import { FavoritesContext } from '../context/FavoritesContext';
import { useZipCodes } from '../context/ZipCodesContext';

import SearchBarSection from '../components/SearchSection/SearchBarSection';
import FilterSection from '../components/SearchSection/FilterSection';
import ResultsToolbar from '../components/ResultsSection/ResultsToolBar';
import DogCardsSection from '../components/ResultsSection/DogCardsSection';
import PaginationBar from '../components/PaginationBar';

const Search: React.FC = () => {
  const { favorites, showFavorite, setShowFavorite } =
    useContext(FavoritesContext);
  const { zipCodes } = useZipCodes();

  const [dogs, setDogs] = useState<Dog[]>([]);
  const [page, setPage] = useState<number>(1);
  const [error, setError] = useState<string>('');
  const [asc, setAsc] = useState<boolean>(true);
  const [selectedBreeds, setSelectedBreeds] = useState<string[]>([
    'American Staffordshire Terrier',
    'Yorkshire Terrier',
  ]);
  const [showFilter, setShowFilter] = useState<boolean>(false);
  const [totalResults, setTotalResults] = useState<number>(0);
  const [ageRange, setAgeRange] = useState<number | number[]>([0, 20]);
  const [ageMin, ageMax] = ageRange as [number, number];

  // Fetch dogs data from the API based on the current search criteria
  // useCallback hook memorizes the fetchData function. The function is only recreated if one of its dependencies changes
  const fetchData = useCallback(async () => {
    console.log('Fetching data...');
    try {
      const { dogs, totalResults } = await fetchDogs(
        showFavorite,
        favorites,
        asc,
        page,
        selectedBreeds,
        ageRange as number[],
        zipCodes,
      );
      setDogs(dogs);
      setTotalResults(totalResults);
      console.log('Data fetched succesfully!');
    } catch (err) {
      // Handle errors
      if (isAxiosError(err) && err.response?.status === 400) {
        setError('An error occurred while fetching dogs, please try again');
      } else if (isAxiosError(err) && err.request) {
        setError(
          'A network error occurred, please check your internet connection',
        );
      } else {
        setError('An unexpected error occurred');
      }
      console.error('Error fetching data:', err);
    }
  }, [showFavorite, favorites, asc, page, selectedBreeds, ageRange, zipCodes]);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  // Handle age range slider change
  const handleAgeRangeSlider = (event: any, newValue: number | number[]) => {
    setAgeRange(newValue as number[]);
  };

  // Toggle show/hide filter section
  const toggleShowFilter = () => {
    setShowFilter((prevShowFilter) => !prevShowFilter);
  };

  // Handle sort order toggle
  const toggleSortOrder = () => {
    setAsc((prevAsc) => !prevAsc);
  };

  // Toggle show/hide favorite dogs
  const toggleShowFavorites = () => {
    setShowFavorite((prev) => !prev);
  };

  // Calculate the count of favorite dogs
  const favoritesCount = favorites.length;

  return (
    <div
      id="search-page-container"
      className="sm:w-full md:w-2/3 xl:w-3/4 mx-auto flex flex-col md:flex-row justify-center"
    >
      {/* Search Section */}
      <div
        id="search-section"
        className="sm:w-full md:w-1/3 lg:w-1/4 px-4 mt-28 py-4"
      >
        <SearchBarSection />
        <FilterSection
          asc={asc}
          showFilter={showFilter}
          handleSort={toggleSortOrder}
          toggleShowFilter={toggleShowFilter}
          selectedBreeds={selectedBreeds}
          setSelectedBreeds={setSelectedBreeds}
          ageRange={ageRange}
          handleAgeRangeSlider={handleAgeRangeSlider}
          ageMin={ageMin}
          ageMax={ageMax}
        />
      </div>
      {/* End Search Section */}
      {/* Results Section */}
      <div
        id="results-section"
        className="sm:w-full md:w-2/3 lg:w-3/4 2xl:w-3/5 px-2 py-4 my-10"
      >
        <ResultsToolbar
          favoritesCount={favoritesCount}
          showFavorite={showFavorite}
          toggleShowFavorites={toggleShowFavorites}
          totalResults={totalResults}
        />
        {error && <p>{error}</p>}
        {/* Dog Cards Section */}
        <DogCardsSection
          dogs={dogs}
          showFavorite={showFavorite}
          favorites={favorites}
        />
        {/*End Dog Cards Section*/}
        <PaginationBar
          totalResults={totalResults}
          page={page}
          setPage={setPage}
        />
      </div>
      {/* End Results Section */}
    </div>
  );
};

export default Search;
