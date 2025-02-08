import { useState, useEffect } from "react";
import {
  Popover,
  Box,
  Typography,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  SelectChangeEvent,
} from "@mui/material";
import { fetchBreedList } from "../../api/dogRoutes";
import { useDogContext } from "../../hooks/useDogContext";

interface FilterPopoverProps {
  isOpen: boolean;
  anchorEl: null | HTMLElement;
  handleClose: () => void;
  setAnchorEl: React.Dispatch<React.SetStateAction<HTMLElement | null>>;
}

export default function FilterPopover({
  isOpen,
  anchorEl,
  handleClose,
  setAnchorEl,
}: FilterPopoverProps) {
  const { fetchIdsFilteredAndConvertToDetails } = useDogContext();
  const [selectedBreed, setSelectedBreed] = useState<string>("");
  const [breedOptions, setBreedOptions] = useState<string[]>([]);

  useEffect(() => {
    const retrieveBreeds = async () => {
      try {
        const breedList = await fetchBreedList();
        setBreedOptions(breedList);
      } catch (e: any) {
        console.error(e.message);
      }
    };
    retrieveBreeds();
  }, []);

  const handleBreedSelection = (e: SelectChangeEvent<string>) => {
    setSelectedBreed(e.target.value);
    fetchIdsFilteredAndConvertToDetails(e.target.value);
    setAnchorEl(null);
  };

  return (
    <Popover
      open={isOpen}
      anchorEl={anchorEl}
      onClose={handleClose}
      anchorOrigin={{ vertical: "bottom", horizontal: "left" }}
      transformOrigin={{ vertical: "top", horizontal: "left" }}
    >
      <Box
        sx={{
          p: 2,
          width: 300,
          bgcolor: "background.paper",
          boxShadow: 3,
          borderRadius: 1,
        }}
      >
        <Typography variant="h6" gutterBottom>
          Filter Options
        </Typography>
        <FormControl size="small" fullWidth sx={{ mb: 2 }}>
          <InputLabel>Filter by Breed</InputLabel>
          <Select
            value={selectedBreed}
            onChange={handleBreedSelection}
            label="Filter by Breed"
          >
            {breedOptions.map((breed) => (
              <MenuItem key={breed} value={breed}>
                {breed}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
      </Box>
    </Popover>
  );
}
