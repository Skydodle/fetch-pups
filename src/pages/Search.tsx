import React, { useEffect, useState, useContext, useCallback } from 'react';
import { isAxiosError } from 'axios';
import { Dog } from '../services/APIService';
import { fetchDogs } from '../services/dogService';

import { FavoritesContext } from '../context/FavoritesContext';
import { useZipCodes } from '../context/ZipCodesContext';

import LocationSection from '../components/SearchSection/LocationSection/LocationSection';
import FilterSection from '../components/SearchSection/FilterSection/FilterSection';
import ResultsToolbar from '../components/ResultsSection/ResultsToolBar';
import DogCardsSection from '../components/ResultsSection/DogCardsSection';
import PaginationBar from '../components/PaginationBar';
import Notification from '../components/common/Notification/Notification';

const Search: React.FC = () => {
  const { favorites, showFavorite, setShowFavorite } =
    useContext(FavoritesContext);
  const { zipCodes } = useZipCodes();

  const [dogs, setDogs] = useState<Dog[]>([]);
  const [page, setPage] = useState<number>(1);
  const [error, setError] = useState<string>('');
  const [selectedBreeds, setSelectedBreeds] = useState<string[]>([
    'American Staffordshire Terrier',
    'Yorkshire Terrier',
  ]);
  const [totalResults, setTotalResults] = useState<number>(0);
  const [ageRange, setAgeRange] = useState<number | number[]>([0, 20]);
  const [ageMin, ageMax] = ageRange as [number, number];
  const [noResultsNotification, setNoResultsNotification] =
    useState<string>('');
  const [zipSearchNoResults, setZipSearchNoResults] = useState(false);
  const [sortCriteria, setSortCriteria] = useState('breed:asc');

  // Fetch dogs data from the API based on the current search criteria
  // useCallback hook memorizes the fetchData function. The function is only recreated if one of its dependencies changes
  const fetchData = useCallback(async () => {
    // console.log('Fetching data...');
    try {
      const { dogs, totalResults } = await fetchDogs(
        showFavorite,
        favorites,
        sortCriteria,
        page,
        selectedBreeds,
        ageRange as number[],
        zipCodes,
      );
      // Determine if the search is based on zip codes and if it yields no results
      const isZipSearch = zipCodes.length > 0;
      const noResults = totalResults === 0;

      setZipSearchNoResults(isZipSearch && noResults);

      if (isZipSearch && noResults) {
        setNoResultsNotification(
          'No dogs found for the entered zip code(s). Please try different zip codes.',
        );
      } else {
        setNoResultsNotification(''); // Clear notification if results exist
      }
      setDogs(dogs);
      setTotalResults(totalResults);
      // console.log('Data fetched successfully!');
      // console.log('Fetched dogs with city and state:', dogs);
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
  }, [
    showFavorite,
    favorites,
    sortCriteria,
    page,
    selectedBreeds,
    ageRange,
    zipCodes,
  ]);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  // Handle age range slider change
  const handleAgeRangeSlider = (event: any, newValue: number | number[]) => {
    setAgeRange(newValue as number[]);
  };

  // Handle sort drop-down selection
  const handleSortChange = (value: string) => {
    setSortCriteria(value);
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
      className="sm:w-full md:w-2/3 xl:w-3/4 mx-auto flex flex-col lg:flex-row justify-center"
    >
      {/* Search Section */}
      {showFavorite ? null : (
        <div
          id="search-section"
          className="sm:w-full md:w-full lg:w-1/4 px-4 sm:mt-10 lg:mt-28 py-4"
        >
          <LocationSection />
          <FilterSection
            selectedBreeds={selectedBreeds}
            setSelectedBreeds={setSelectedBreeds}
            ageRange={ageRange}
            handleAgeRangeSlider={handleAgeRangeSlider}
            ageMin={ageMin}
            ageMax={ageMax}
          />
        </div>
      )}
      {/* End Search Section */}
      {/* Results Section */}
      <div
        id="results-section"
        className="sm:w-full md:w-full lg:w-3/4 xl: w-4/5 2xl:w-3/5 px-2 py-4 my-10"
      >
        <ResultsToolbar
          favoritesCount={favoritesCount}
          showFavorite={showFavorite}
          toggleShowFavorites={toggleShowFavorites}
          handleSortChange={handleSortChange}
          totalResults={totalResults}
        />
        {error && <p>{error}</p>}
        {zipSearchNoResults && (
          <Notification message={noResultsNotification} type="error" />
        )}
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
