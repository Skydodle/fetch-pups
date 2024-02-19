import React from 'react';
import SearchByZipCode from './SearchByZipCode';

const LocationSection: React.FC = () => {
  return (
    <>
      <div className="p-4  bg-white flex flex-col">
        <h2 id="filter-title" className="text-primary font-semibold mb-4">
          Search By Location
        </h2>
        <div className="grid grid-cols-1">
          <div className="col-span-1">
            <p className="text-sm mb-3 text-custom-blue">Zip Code:</p>
            <SearchByZipCode />
          </div>
        </div>
      </div>
    </>
  );
};

export default LocationSection;
