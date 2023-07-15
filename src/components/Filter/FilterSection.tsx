import React from 'react';
import { ArrowDownward, ArrowUpward } from '@mui/icons-material';
import TuneIcon from '@mui/icons-material/Tune';
import ComboBox from './ComboBox';
import Slider from '@mui/material/Slider';

interface FilterProps {
  asc: boolean;
  showComboBox: boolean;
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
  showComboBox,
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
      <div className="grid grid-cols-1 md:grid-cols-2 gap-0">
        <div className="col-span-1 md:col-span-1 lg:col-span-1">
          <button
            onClick={toggleShowFilter}
            className="w-full py-1 px-2 rounded-l-md border border-custom-blue  bg-custom-blue text-white text-sm "
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
      <div className="flex flex-col py-2">
        <div className="flex flex-col py-1">
          <p className="text-sm mb-2 ">Select Dog Breed(s)</p>
          <div className="pl-1 pr-0">
            <ComboBox
              selectedBreeds={selectedBreeds}
              setSelectedBreeds={setSelectedBreeds}
            />
          </div>
        </div>
        <div className="flex flex-col py-2">
          <p className="text-sm mb-2 ">Select Age Range:</p>
          <div className="pl-3 pr-0">
            <p className="text-sm mb-2">
              {ageMin} - {ageMax} years old
            </p>
            <Slider
              getAriaLabel={() => 'Dog Age Range'}
              value={ageRange}
              onChange={handleAgeRangeSlider}
              max={20}
              className="max-w-[14rem]"
              size="medium"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default FilterSection;
