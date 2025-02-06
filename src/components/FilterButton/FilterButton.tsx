import { useState } from "react";
import { Tooltip, IconButton } from "@mui/material";
import FilterPopover from "../FilterPopover/FilterPopover";
import FilterListIcon from "@mui/icons-material/FilterList";

export default function FilterButton() {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);

  const isOpen = Boolean(anchorEl);

  const handleFilterBtnClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div>
      <Tooltip title="Filter Options" arrow>
        <IconButton onClick={handleFilterBtnClick} color="primary">
          <FilterListIcon />
        </IconButton>
      </Tooltip>
      <FilterPopover
        isOpen={isOpen}
        anchorEl={anchorEl}
        handleClose={handleClose}
        setAnchorEl={setAnchorEl}
      />
    </div>
  );
}
