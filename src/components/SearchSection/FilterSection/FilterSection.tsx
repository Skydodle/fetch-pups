import React from 'react';
import FilterContent from './FilterContent';

interface FilterProps {
  selectedBreeds: string[];
  setSelectedBreeds: React.Dispatch<React.SetStateAction<string[]>>;
  ageRange: number | number[];
  ageMin: number;
  ageMax: number;
  handleAgeRangeSlider: (event: any, newValue: number | number[]) => void;
}

const FilterSection: React.FC<FilterProps> = ({
  selectedBreeds,
  setSelectedBreeds,
  ageRange,
  handleAgeRangeSlider,
  ageMin,
  ageMax,
}) => {
  return (
    <div className="p-4 mt-4 bg-white flex flex-col">
      <h1 className="text-primary text-base font-bold">Search By Filter</h1>
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
