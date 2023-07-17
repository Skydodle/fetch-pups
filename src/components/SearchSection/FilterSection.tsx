import React from 'react';
import { ArrowDownward, ArrowUpward } from '@mui/icons-material';
import TuneIcon from '@mui/icons-material/Tune';
import FilterContent from './FilterContent';

interface FilterProps {
  asc: boolean;
  showFilter: boolean;
  selectedBreeds: string[];
  setSelectedBreeds: React.Dispatch<React.SetStateAction<string[]>>;
  ageRange: number | number[];
  ageMin: number;
  ageMax: number;
  handleSort: () => void;
  toggleShowFilter: () => void;
  handleAgeRangeSlider: (event: any, newValue: number | number[]) => void;
}

const FilterSection: React.FC<FilterProps> = ({
  asc,
  showFilter,
  selectedBreeds,
  setSelectedBreeds,
  ageRange,
  handleSort,
  toggleShowFilter,
  handleAgeRangeSlider,
  ageMin,
  ageMax,
}) => {
  return (
    <div className="p-4 mt-4 bg-white flex flex-col">
      <h1 className="text-primary text-base mb-4 font-bold">
        Search By Filter
      </h1>
      <div className="grid grid-cols-2 gap-0 pb-2">
        <div className="col-span-1 md:col-span-1 lg:col-span-1">
          <button
            onClick={toggleShowFilter}
            className={`w-full py-1 px-2 rounded-l-md border border-custom-blue text-sm md:bg-custom-blue md:text-white
            ${
              showFilter
                ? 'bg-custom-blue text-white'
                : 'bg-white text-custom-blue'
            }`}
          >
            <TuneIcon fontSize="small" /> FILTER
          </button>
        </div>
        <div className="col-span-1 md:col-span-1 lg:col-span-1">
          <button
            onClick={handleSort}
            className="w-full py-1 px-2 rounded-r-md border border-custom-blue text-custom-blue text-sm "
          >
            {asc ? (
              <ArrowDownward fontSize="small" />
            ) : (
              <ArrowUpward fontSize="small" />
            )}{' '}
            SORT
          </button>
        </div>
      </div>
      <FilterContent
        selectedBreeds={selectedBreeds}
        setSelectedBreeds={setSelectedBreeds}
        ageRange={ageRange}
        handleAgeRangeSlider={handleAgeRangeSlider}
        ageMin={ageMin}
        ageMax={ageMax}
        showFilter={showFilter}
      />
    </div>
  );
};

export default FilterSection;
