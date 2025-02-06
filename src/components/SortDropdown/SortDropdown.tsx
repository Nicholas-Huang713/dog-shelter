import {
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  SelectChangeEvent,
} from "@mui/material";
import { useDogContext } from "../../hooks/useDogContext";

export default function SortDropdown() {
  const { sortOption, setSortOption } = useDogContext();

  const handleSortChange = (e: SelectChangeEvent<string>) => {
    setSortOption(e.target.value as string);
  };
  return (
    <>
      <FormControl size="small" sx={{ minWidth: 150, marginLeft: "auto" }}>
        <InputLabel>Sort By</InputLabel>
        <Select
          value={sortOption}
          onChange={handleSortChange}
          label="Sort By"
          displayEmpty
        >
          <MenuItem value="" disabled>
            Select Sort Option
          </MenuItem>
          <MenuItem value="nameAsc">Name(A-Z)</MenuItem>
          <MenuItem value="nameDesc">Name(Z-A)</MenuItem>
          <MenuItem value="breedAsc">Breed(A-Z)</MenuItem>
          <MenuItem value="breedDesc">Breed(Z-A)</MenuItem>
          <MenuItem value="ageAsc">Age(low-high)</MenuItem>
          <MenuItem value="ageDesc">Age(high-low)</MenuItem>
        </Select>
      </FormControl>
    </>
  );
}
