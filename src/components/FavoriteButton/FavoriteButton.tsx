import { useMemo, useState, useCallback } from "react";
import { IconButton, Tooltip, Snackbar, Alert } from "@mui/material";
import { Favorite, FavoriteBorder } from "@mui/icons-material";
import { useDogContext } from "../../hooks/useDogContext";

interface FavoriteButtonProps {
  dogId: string;
}

export default function FavoriteButton({ dogId }: FavoriteButtonProps) {
  const { favoriteDogIdList, setFavoriteDogIdList } = useDogContext();
  const [snackbarMessage, setSnackbarMessage] = useState<string | null>(null);

  const isFavorite = useMemo(
    () => favoriteDogIdList.includes(dogId),
    [favoriteDogIdList, dogId]
  );

  const toggleFavorite = useCallback(() => {
    setFavoriteDogIdList((prevFavorites) => {
      const updatedFavorites = new Set(prevFavorites);
      let message = "";

      if (updatedFavorites.has(dogId)) {
        updatedFavorites.delete(dogId);
        message = "Removed from Favorites";
      } else {
        updatedFavorites.add(dogId);
        message = "Added to Favorites";
      }

      setSnackbarMessage(message);
      return Array.from(updatedFavorites);
    });
  }, [dogId, setFavoriteDogIdList]);

  return (
    <>
      <Tooltip
        title={isFavorite ? "Remove from Favorites" : "Add to Favorites"}
        arrow
      >
        <IconButton onClick={toggleFavorite} edge="end">
          {isFavorite ? <Favorite color="error" /> : <FavoriteBorder />}
        </IconButton>
      </Tooltip>
      <Snackbar
        open={Boolean(snackbarMessage)}
        autoHideDuration={2000}
        onClose={() => setSnackbarMessage(null)}
        anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
      >
        <Alert
          onClose={() => setSnackbarMessage(null)}
          severity="success"
          sx={{ width: "100%" }}
        >
          {snackbarMessage}
        </Alert>
      </Snackbar>
    </>
  );
}
