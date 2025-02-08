import { useEffect, useState, useCallback } from "react";
import { useDogContext } from "../../hooks/useDogContext";
import DogList from "../../components/DogList/DogList";
import { Box, Typography, Button, Snackbar, Alert } from "@mui/material";
import MatchModal from "../../components/MatchModal/MatchModal";
import { useAuthRedirect } from "../../hooks/useAuthRedirect";

export default function Favorites() {
  useAuthRedirect();
  const {
    favoriteDogDetailList,
    favoriteDogIdList,
    getFavoriteDogs,
    createMatch,
  } = useDogContext();

  const [matchModalOpen, setMatchModalOpen] = useState(false);
  const [snackBarOpen, setSnackBarOpen] = useState(false);

  useEffect(() => {
    getFavoriteDogs();
  }, [favoriteDogIdList]);

  const handleMatching = useCallback(async () => {
    if (favoriteDogIdList.length < 2) {
      setSnackBarOpen(true);
      return;
    }
    setMatchModalOpen(true);
    await createMatch();
  }, [favoriteDogIdList, createMatch]);

  const onMatchModalClose = () => setMatchModalOpen(false);

  return (
    <>
      <div style={{ maxWidth: 600, margin: "auto", textAlign: "center" }}>
        <Box
          sx={{
            borderBottom: "2px solid black",
            padding: "10px 0",
            display: "flex",
            justifyContent: "space-between",
          }}
        >
          <Typography variant="h4" gutterBottom>
            Favorite Dogs
          </Typography>
          <Box
            sx={{ display: "flex", alignItems: "center", marginLeft: "auto" }}
          >
            <Button
              onClick={handleMatching}
              variant="contained"
              color="primary"
            >
              Create Match
            </Button>
          </Box>
        </Box>
        <DogList dogList={favoriteDogDetailList ?? []} isMatches={false} />
      </div>
      <MatchModal open={matchModalOpen} onClose={onMatchModalClose} />
      <Snackbar
        open={snackBarOpen}
        autoHideDuration={3000}
        onClose={() => setSnackBarOpen(false)}
        anchorOrigin={{ vertical: "top", horizontal: "right" }}
      >
        <Alert
          onClose={() => setSnackBarOpen(false)}
          severity="warning"
          variant="filled"
        >
          At least 2 dogs needed to create match
        </Alert>
      </Snackbar>
    </>
  );
}
