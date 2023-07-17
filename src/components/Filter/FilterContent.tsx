import React from 'react';
import ComboBox from './ComboBox';
import Slider from '@mui/material/Slider';

interface FilterContentProps {
  selectedBreeds: string[];
  setSelectedBreeds: React.Dispatch<React.SetStateAction<string[]>>;
  ageRange: number | number[];
  ageMin: number;
  ageMax: number;
  handleAgeRangeSlider: (event: any, newValue: number | number[]) => void;
  showFilter: boolean;
}

const FilterContent: React.FC<FilterContentProps> = ({
  selectedBreeds,
  setSelectedBreeds,
  ageRange,
  handleAgeRangeSlider,
  ageMin,
  ageMax,
  showFilter,
}) => {
  return (
    <div className={`md:flex ${showFilter ? 'block' : 'hidden'} flex-col py-2`}>
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
  );
};

export default FilterContent;
