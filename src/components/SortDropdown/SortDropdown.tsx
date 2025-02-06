import { FormControl, InputLabel, Select, MenuItem } from "@mui/material";

export default function SortDropdown() {
  return (
    <>
      <FormControl size="small" sx={{ minWidth: 150, marginLeft: "auto" }}>
        <InputLabel>Sort By</InputLabel>
        <Select
          // value={sortOption}
          // onChange={handleSortChange}
          label="Sort By"
          displayEmpty
        >
          <MenuItem value="" disabled>
            Select Sort Option
          </MenuItem>
          <MenuItem value="name">Name</MenuItem>
          <MenuItem value="breed">Breed</MenuItem>
          <MenuItem value="zipcode">Zipcode</MenuItem>
        </Select>
      </FormControl>
    </>
  );
}
