import APIService, { Dog, Location } from './APIService';

// Function to fetch location data for a given array of zip codes
export const fetchLocations = async (zipCodes: string[]) => {
  const response = await APIService.fetchLocations(zipCodes);
  return response.data; // Assuming APIService.fetchLocations returns the response directly
};

// Function to create a map from zip code to location
export const createZipCodeToLocationMap = (
  locations: Location[],
): Map<string, { city: string; state: string }> => {
  const map = new Map<string, { city: string; state: string }>();
  locations.forEach((location) => {
    map.set(location.zip_code, { city: location.city, state: location.state });
  });
  return map;
};

// Function to enrich dogs with location data
export const enrichDogsWithLocation = (
  dogs: Dog[],
  locationMap: Map<string, { city: string; state: string }>,
): Dog[] => {
  return dogs.map((dog) => {
    const location = locationMap.get(dog.zip_code);
    return {
      ...dog,
      city: location?.city,
      state: location?.state,
    };
  });
};
