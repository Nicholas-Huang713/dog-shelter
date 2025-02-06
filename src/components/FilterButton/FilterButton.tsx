import { Tooltip, IconButton } from "@mui/material";
import FilterListIcon from "@mui/icons-material/FilterList";

export default function FilterButton() {
  const handleFilterClick = () => {};
  return (
    <>
      <Tooltip title="Filter Options" arrow>
        <IconButton onClick={handleFilterClick} color="primary">
          <FilterListIcon />
        </IconButton>
      </Tooltip>
    </>
  );
}
