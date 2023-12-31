import React from 'react';
import SearchBar from './SearchBar';

const SearchBarSection: React.FC = () => {
  return (
    <>
      <div className="p-4  bg-white flex flex-col">
        <h2 id="filter-title" className="text-primary font-semibold mb-4">
          Search By Zip Code
        </h2>
        <div className="grid grid-cols-1">
          <div className="col-span-1">
            <SearchBar />
          </div>
        </div>
      </div>
    </>
  );
};

export default SearchBarSection;
