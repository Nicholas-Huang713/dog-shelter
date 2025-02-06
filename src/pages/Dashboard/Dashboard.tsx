import { useEffect } from "react";
import { useAuthRedirect } from "../../hooks/useAuthRedirect";
import DogSearchList from "../../components/DogSearchList/DogSearchList";
import DetailsModal from "../../components/DetailsModal/DetailsModal";
import FilterButton from "../../components/FilterButton/FilterButton";
import SortDropdown from "../../components/SortDropdown/SortDropdown";
import { Typography, Box } from "@mui/material";
import { useDogContext } from "../../hooks/useDogContext";

export default function Dashboard() {
  useAuthRedirect();
  const { setSortOption } = useDogContext();

  useEffect(() => {
    return () => {
      setSortOption("breedAsc");
    };
  }, []);
  return (
    <div style={{ maxWidth: 600, margin: "auto", textAlign: "center" }}>
      <Box
        sx={{
          borderBottom: "2px solid black",
          padding: "10px 0",
          display: "flex",
          justifyContent: "flex-start",
        }}
      >
        <Typography variant="h4" gutterBottom>
          Dog Search
        </Typography>
        <Box sx={{ display: "flex", alignItems: "center", marginLeft: "auto" }}>
          <SortDropdown />
          <FilterButton />
        </Box>
      </Box>
      <DogSearchList />
      <DetailsModal />
    </div>
  );
}
