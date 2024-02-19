import React, { useState, useEffect } from 'react';
import IconButton from '@mui/material/IconButton';
import SearchIcon from '@mui/icons-material/Search';

import { useZipCodes } from '../../../context/ZipCodesContext';

const SearchByZipCode: React.FC = () => {
  const [inputValue, setInputValue] = useState('');
  const [inputError, setInputError] = useState<string | null>(null);
  const { zipCodes, setZipCodes, removeZipCode } = useZipCodes();

  useEffect(() => {
    // Only add the value to zip codes when it's exactly 5 numeric characters
    if (/^\d{5}$/.test(inputValue)) {
      setZipCodes((prevZipCodes) => [...prevZipCodes, inputValue]);
      setInputValue('');
    }
  }, [inputValue, setZipCodes]);

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = event.target.value;
    // Check if the value is numeric or is an empty string (for deletion)
    if (/^\d*$/.test(newValue)) {
      setInputValue(newValue);
      setInputError(null); // Clear any previous error message
    } else {
      setInputError('Please enter only numeric values');
    }
  };

  const handleZipCodeClick = (zipCode: string) => {
    removeZipCode(zipCode);
  };

  return (
    <div className="flex flex-col">
      <div
        className={`relative rounded-md p-0.5 ${
          inputError
            ? 'bg-red-100 border border-red-500'
            : 'bg-gray-100 hover:bg-custom-blue'
        }`}
      >
        <div className="flex justify-between w-full">
          <input
            className="pl-5 pr-10 py-1  bg-gray-100 rounded-md w-full focus:outline-none text-custom-blue"
            placeholder="Enter zip code(s)..."
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
        {inputError && (
          <p className="text-red-600 mt-2 text-xs italic">{inputError}</p>
        )}
      </div>
      <div className="flex flex-wrap gap-2 mt-2">
        {zipCodes.map((zipCode) => (
          <button
            className="border border-custom-blue text-custom-blue rounded-md px-2 py-1 hover:bg-custom-blue hover:text-off-white"
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

export default SearchByZipCode;
