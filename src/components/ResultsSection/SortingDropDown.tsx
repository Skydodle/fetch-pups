import React, { useState } from 'react';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';

interface SortingDropDownProps {
  handleSortChange: (value: string) => void;
}

const SortingDropDown: React.FC<SortingDropDownProps> = ({
  handleSortChange,
}) => {
  const [sort, setSort] = useState('');

  const handleChange = (event: SelectChangeEvent) => {
    const value = event.target.value;
    setSort(value);
    handleSortChange(value); // Notify parent component about the change
  };

  return (
    <div>
      <FormControl variant="standard" sx={{ p: 1, minWidth: 120 }}>
        <InputLabel id="sort-select-label">Sort By</InputLabel>
        <Select
          labelId="sort-select-label"
          id="sort-select"
          value={sort}
          onChange={handleChange}
          label="Sort By"
          autoWidth
          size="small"
        >
          <MenuItem value="">
            <em>None</em>
          </MenuItem>
          <MenuItem value="breedAsc">Breed Ascending</MenuItem>
          <MenuItem value="breedDsc">Breed Descending</MenuItem>
          <MenuItem value="nameAsc">Name Ascending</MenuItem>
          <MenuItem value="nameDesc">Name Descending</MenuItem>
          <MenuItem value="ageAsc">Age Ascending</MenuItem>
          <MenuItem value="ageDesc">Age Descending</MenuItem>
          {/* Add more sorting options as needed */}
        </Select>
      </FormControl>
    </div>
  );
};

export default SortingDropDown;
