import APIService, { Dog } from './APIService';
import { extractUniqueZipCodes, itemCount } from '../utils/utils';
import {
  fetchLocations,
  createZipCodeToLocationMap,
  enrichDogsWithLocation,
} from './locationService';

// Fetch dogs data from the API based on the current search criteria
export const fetchDogs = async (
  showFavorite: boolean,
  favorites: string[],
  sortCriteria: string,
  page: number,
  selectedBreeds: string[] | null,
  ageRange: number[],
  zipCodes: string[],
) => {
  let dogIds: string[] = [];
  let totalResults: number = 0;
  let dogs: Dog[] = [];

  try {
    if (showFavorite) {
      // Supply Dog ids from favorites instead
      dogIds = favorites;
      totalResults = favorites.length;
    } else {
      // Retrieve Dog Ids
      const responseIds = await APIService.getDogsIds({
        size: 9,
        sort: sortCriteria,
        from: itemCount(page),
        breeds: selectedBreeds ? selectedBreeds : null,
        ageMin: ageRange[0],
        ageMax: ageRange[1],
        zipCodes: zipCodes ? zipCodes : null,
      });
      totalResults = responseIds.data.total;
      dogIds = responseIds.data.resultIds;
    }
    // Retrieve Dog objects
    const response = await APIService.getDogs(dogIds);
    dogs = response.data;

    // Extract zips from dogs & fetch location data then enrich dogs with location
    const uniqueZipCodes = extractUniqueZipCodes(dogs);
    const locations = await fetchLocations(uniqueZipCodes);
    const locationMap = createZipCodeToLocationMap(locations);
    dogs = enrichDogsWithLocation(dogs, locationMap);
  } catch (err) {
    throw err; // throw the error back to the component to handle
  }

  return { dogs, totalResults };
};
