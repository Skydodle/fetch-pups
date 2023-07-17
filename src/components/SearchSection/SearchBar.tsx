import React, { useState, useEffect } from 'react';
import IconButton from '@mui/material/IconButton';
import SearchIcon from '@mui/icons-material/Search';

import { useZipCodes } from '../../context/ZipCodesContext';

const SearchBar: React.FC = () => {
  const [inputValue, setInputValue] = useState('');
  const { zipCodes, setZipCodes, removeZipCode } = useZipCodes();

  useEffect(() => {
    // Only add the value to zip codes when it's exactly 5 numeric characters
    if (/^\d{5}$/.test(inputValue)) {
      setZipCodes((prevZipCodes) => [...prevZipCodes, inputValue]);
      setInputValue('');
    }
  }, [inputValue, setZipCodes]);

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(event.target.value);
  };

  const handleZipCodeClick = (zipCode: string) => {
    removeZipCode(zipCode);
  };

  return (
    <div className="flex flex-col">
      <div className="relative bg-gray-100 hover:bg-custom-blue rounded-md p-0.5">
        <div className="flex justify-between w-full">
          <input
            className="pl-5 pr-10 py-1  bg-gray-100 rounded-md w-full focus:outline-none"
            placeholder="Enter a zip code(s)..."
            aria-label="search"
            value={inputValue}
            onChange={handleInputChange}
          />
          <div className="absolute inset-y-0 right-0 flex items-center pr-2">
            <IconButton style={{ position: 'absolute', right: '0' }}>
              <SearchIcon />
            </IconButton>
          </div>
        </div>
      </div>
      <div className="flex flex-wrap gap-2 mt-2">
        {zipCodes.map((zipCode) => (
          <button
            className="border border-custom-blue text-custom-blue rounded-md px-2 py-1"
            key={zipCode}
            onClick={() => handleZipCodeClick(zipCode)}
          >
            {zipCode}
          </button>
        ))}
      </div>
    </div>
  );
};

export default SearchBar;
