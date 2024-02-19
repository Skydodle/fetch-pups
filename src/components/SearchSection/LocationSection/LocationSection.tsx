import { useState } from 'react';
import { useZipCodes } from '../../../context/ZipCodesContext';
import APIService from '../../../services/APIService';
import { extractUniqueZipCodes } from '../../../utils/utils';
import SearchByCriteria from './SearchByCriteria';

const LocationSection: React.FC = () => {
  const { zipCodes, setZipCodes, removeZipCode } = useZipCodes();
  const [zipCodeSearch, setZipCodeSearch] = useState<string[]>([]);
  const [cities, setCities] = useState<string[]>([]);
  const [cityToZipMapping, setCityToZipMapping] = useState<
    Record<string, string[]>
  >({});

  const handleZipCodeSearch = (zipCode: string) => {
    setZipCodes([...zipCodes, zipCode]);
    setZipCodeSearch((prevZipCodeSearch) => [...prevZipCodeSearch, zipCode]);
  };

  const handleRemoveZipCode = (zipCodeToRemove: string) => {
    // Remove from zipCodeSearch for criteria display
    setZipCodeSearch(
      zipCodeSearch.filter((zipCode) => zipCode !== zipCodeToRemove),
    );
    // Remove from zipCodes context, it should no longer be on dog cards display
    removeZipCode(zipCodeToRemove);
  };

  const handleCitySearch = async (city: string) => {
    try {
      const locationsResponse = await APIService.fetchLocationsByCityOrState({
        city: city,
        size: 100,
      });
      const filteredLocations = locationsResponse.data.results.filter(
        (location) => location.city?.toLowerCase() === city.toLowerCase(),
      );
      const newZipCodes = extractUniqueZipCodes(filteredLocations);

      // Update zipCodes context
      setZipCodes(newZipCodes);

      // Update city to zip code mapping
      setCityToZipMapping((prevMapping) => {
        const cityKey = city.toLowerCase();
        // Assuming newZipCodes are the zip codes derived from the city search
        const updatedZipCodes = [
          ...(prevMapping[cityKey] || []),
          ...newZipCodes,
        ];
        return { ...prevMapping, [cityKey]: updatedZipCodes };
      });

      if (!cities.includes(city)) {
        setCities([...cities, city]);
      }
    } catch (error) {
      console.error('Error fetching locations:', error);
    }
  };

  const handleRemoveCity = (cityToRemove: string) => {
    const cityKey = cityToRemove.toLowerCase();
    const zipCodesToRemove = cityToZipMapping[cityKey] || [];

    // Remove these zip codes from the zipCodes context
    setZipCodes((currentZipCodes) =>
      currentZipCodes.filter((zipCode) => !zipCodesToRemove.includes(zipCode)),
    );

    // Remove the city from the cities state
    setCities((currentCities) =>
      currentCities.filter((city) => city.toLowerCase() !== cityKey),
    );

    // Update the mapping to remove the city entry
    setCityToZipMapping((currentMapping) => {
      const newMapping = { ...currentMapping };
      delete newMapping[cityKey];
      return newMapping;
    });
  };

  return (
    <>
      <div className="p-4  bg-white flex flex-col">
        <h2 id="filter-title" className="text-primary font-semibold mb-4">
          Search By Location
        </h2>
        <div className="grid grid-cols-1 gap-4">
          <div>
            <h4 className="text-sm mb-3 text-custom-blue">Zip Code:</h4>
            {/* SearchByZipCode */}
            <SearchByCriteria
              placeholder="Enter zip code(s)..."
              validateInput={(input) => /^\d{5}$/.test(input)}
              errorMessage="Please enter a valid 5-digit zip code"
              onSearch={handleZipCodeSearch}
              criteriaArray={zipCodeSearch}
              onRemoveCriteria={handleRemoveZipCode}
            />
          </div>
          <div>
            <h4 className="text-sm mb-3 text-custom-blue">City:</h4>
            {/* SearchByCity */}
            <SearchByCriteria
              placeholder="Enter city..."
              onSearch={handleCitySearch}
              validateInput={(input) => /^[a-zA-Z\s]+$/.test(input)}
              errorMessage="Please enter a valid city name"
              criteriaArray={cities}
              onRemoveCriteria={handleRemoveCity}
            />
          </div>
          <div>
            <h4 className="text-sm mb-3 text-custom-blue">State:</h4>
            {/* component here */}
          </div>
        </div>
      </div>
    </>
  );
};

export default LocationSection;
