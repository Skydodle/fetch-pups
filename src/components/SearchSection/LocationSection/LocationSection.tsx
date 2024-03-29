import { useState } from 'react';
import { useZipCodes } from '../../../context/ZipCodesContext';
import APIService from '../../../services/APIService';
import { extractUniqueZipCodes } from '../../../utils/utils';
import SearchByCriteria from './SearchByCriteria';
import { Tab, Tabs } from '@mui/material';

const LocationSection: React.FC = () => {
  const { zipCodes, setZipCodes, removeZipCode } = useZipCodes();
  const [zipCodeSearch, setZipCodeSearch] = useState<string[]>([]);
  const [cities, setCities] = useState<string[]>([]);
  const [value, setValue] = useState(0);

  const handleTabChange = (event: React.SyntheticEvent, newValue: number) => {
    // If moving away from the Zip Code tab
    if (value === 0) {
      // Clear zip code search criteria and associated zip codes
      setZipCodeSearch([]);
      setZipCodes([]);
    }
    // If moving away from the City tab
    else if (value === 1) {
      // Clear city search criteria and associated zip codes
      setCities([]);
      setZipCodes([]);
      // Optionally, clear any city-specific state, if applicable
    }
    // Update the active tab value
    setValue(newValue);
  };

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
      setZipCodes(newZipCodes);

      setCities([city]);
    } catch (error) {
      console.error('Error fetching locations:', error);
    }
  };

  const handleRemoveCity = (cityToRemove: string) => {
    setCities([]);
    setZipCodes([]);
  };

  return (
    <div className="p-4  bg-white flex flex-col">
      <h2 id="filter-title" className="text-primary font-semibold mb-4">
        Search By Location
      </h2>
      {/* Tabs for selecting search criteria */}
      <Tabs value={value} onChange={handleTabChange} aria-label="search tabs">
        <Tab label="Zip Code" />
        <Tab label="City" />
        {/* Add more tabs as needed */}
      </Tabs>
      {/* Conditional rendering based on the selected tab */}
      {value === 0 && (
        <div className="my-6">
          <SearchByCriteria
            placeholder="Enter zip code(s)..."
            validateInput={(input) => /^\d{5}$/.test(input)}
            errorMessage="Please enter a valid 5-digit zip code"
            onSearch={handleZipCodeSearch}
            criteriaArray={zipCodeSearch}
            onRemoveCriteria={handleRemoveZipCode}
          />
        </div>
      )}
      {value === 1 && (
        <div className="my-6">
          <SearchByCriteria
            placeholder="Enter city..."
            onSearch={handleCitySearch}
            validateInput={(input) => /^[a-zA-Z\s]+$/.test(input)}
            errorMessage="Please enter a valid city name"
            criteriaArray={cities}
            onRemoveCriteria={handleRemoveCity}
          />
        </div>
      )}
      {/* <div>
            <h4 className="text-sm mb-3 text-custom-blue">State:</h4>
            search by state component here
          </div> */}
    </div>
  );
};

export default LocationSection;
