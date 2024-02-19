import React, { useEffect, useState } from 'react';
import IconButton from '@mui/material/IconButton';
import SearchIcon from '@mui/icons-material/Search';

interface SearchByCriteriaProps {
  placeholder: string;
  onSearch: (searchTerm: string) => void;
  validateInput: (input: string) => boolean;
  errorMessage: string;
  criteriaArray: string[];
  onRemoveCriteria: (criterion: string) => void;
}

const SearchByCriteria: React.FC<SearchByCriteriaProps> = ({
  placeholder,
  onSearch,
  validateInput,
  errorMessage,
  criteriaArray,
  onRemoveCriteria,
}) => {
  const [inputValue, setInputValue] = useState('');
  const [inputError, setInputError] = useState<string | null>(null);

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = event.target.value;
    setInputValue(newValue);
    setInputError(null);
  };

  const handleKeyPress = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === 'Enter' && validateInput(inputValue)) {
      onSearch(inputValue);
      setInputValue('');
    } else if (event.key === 'Enter' && !validateInput(inputValue)) {
      setInputError(errorMessage);
    }
  };

  const handleSubmit = () => {
    if (validateInput(inputValue)) {
      onSearch(inputValue);
      setInputValue('');
    } else {
      setInputError(errorMessage);
    }
  };

  useEffect(() => {
    if (inputValue && !validateInput(inputValue)) {
      setInputError(errorMessage);
    } else {
      setInputError(null);
    }
  }, [inputValue, validateInput, errorMessage]);

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
            className="pl-5 pr-10 py-1 bg-gray-100 rounded-md w-full focus:outline-none text-custom-blue"
            placeholder={placeholder}
            value={inputValue}
            onChange={handleInputChange}
            onKeyPress={handleKeyPress}
          />
          <IconButton
            onClick={handleSubmit}
            style={{ position: 'absolute', right: '0' }}
          >
            <SearchIcon />
          </IconButton>
        </div>
        {inputError && (
          <p className="text-red-600 mt-2 text-xs italic">{inputError}</p>
        )}
      </div>
      <div className="flex flex-wrap gap-2 mt-2">
        {criteriaArray.map((criteria) => (
          <button
            key={criteria}
            onClick={() => onRemoveCriteria(criteria)}
            className="border border-custom-blue text-custom-blue rounded-md px-2 py-1 hover:bg-custom-blue hover:text-off-white"
          >
            {criteria}
          </button>
        ))}
      </div>
    </div>
  );
};

export default SearchByCriteria;
