import { useState } from 'react';
import { useZipCodes } from '../../../context/ZipCodesContext';
import APIService from '../../../services/APIService';
import { extractUniqueZipCodes } from '../../../utils/utils';
import SearchByCriteria from './SearchByCriteria';

const LocationSection: React.FC = () => {
  const { zipCodes, setZipCodes, removeZipCode } = useZipCodes();
  const [cities, setCities] = useState<string[]>([]);

  const handleZipCodeSearch = (zipCode: string) => {
    setZipCodes([...zipCodes, zipCode]);
  };

  const handleCitySearch = async (city: string) => {
    try {
      const locationsResponse = await APIService.fetchLocationsByCityOrState({
        city,
      });
      const locations = locationsResponse.data.results;
      console.log(locations);
      const newZipCodes = extractUniqueZipCodes(locations);
      setZipCodes(newZipCodes); // Update the context with new zip codes
    } catch (error) {
      console.error('Error fetching locations:', error);
    }
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
              criteriaArray={zipCodes}
              onRemoveCriteria={removeZipCode}
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
              onRemoveCriteria={(zipCode) => {
                // Handle removal from both zipCodes context and citiesState
                removeZipCode(zipCode);
                setCities(cities.filter((code) => code !== zipCode));
              }}
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
