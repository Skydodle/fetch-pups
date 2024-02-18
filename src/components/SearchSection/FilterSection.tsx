import React from 'react';
import { ArrowDownward, ArrowUpward } from '@mui/icons-material';
import TuneIcon from '@mui/icons-material/Tune';
import FilterContent from './FilterContent';

interface FilterProps {
  asc: boolean;
  selectedBreeds: string[];
  setSelectedBreeds: React.Dispatch<React.SetStateAction<string[]>>;
  ageRange: number | number[];
  ageMin: number;
  ageMax: number;
  handleSort: () => void;
  handleAgeRangeSlider: (event: any, newValue: number | number[]) => void;
}

const FilterSection: React.FC<FilterProps> = ({
  asc,
  selectedBreeds,
  setSelectedBreeds,
  ageRange,
  handleSort,
  handleAgeRangeSlider,
  ageMin,
  ageMax,
}) => {
  return (
    <div className="p-4 mt-4 bg-white flex flex-col">
      <h1 className="text-primary text-base font-bold">Search By Filter</h1>
      {/* <div className="col-span-1 md:col-span-1 lg:col-span-1">
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
      </div> */}
      <FilterContent
        selectedBreeds={selectedBreeds}
        setSelectedBreeds={setSelectedBreeds}
        ageRange={ageRange}
        handleAgeRangeSlider={handleAgeRangeSlider}
        ageMin={ageMin}
        ageMax={ageMax}
      />
    </div>
  );
};

export default FilterSection;
