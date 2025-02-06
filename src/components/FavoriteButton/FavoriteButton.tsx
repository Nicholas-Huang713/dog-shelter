import { useMemo, useState } from "react";
import { IconButton, Tooltip, Snackbar, Alert } from "@mui/material";
import { Favorite, FavoriteBorder } from "@mui/icons-material";
import { useDogContext } from "../../hooks/useDogContext";
interface FavoriteButtonProps {
  dogId: string;
}

export default function FavoriteButton({ dogId }: FavoriteButtonProps) {
  const { favoriteDogList, setFavoriteDogList } = useDogContext();
  const [snackbarMessage, setSnackbarMessage] = useState<string | null>(null);

  const favoriteDogSet = useMemo(
    () => new Set(favoriteDogList),
    [favoriteDogList]
  );

  const toggleFavorite = (id: string) => {
    setFavoriteDogList((prevFavorites: string[]) => {
      const favoriteDogSet = new Set(prevFavorites);
      if (favoriteDogSet.has(id)) {
        favoriteDogSet.delete(id);
        setSnackbarMessage("Removed from Favorites");
      } else {
        favoriteDogSet.add(id);
        setSnackbarMessage("Added to Favorites");
      }
      return Array.from(favoriteDogSet);
    });
  };

  return (
    <>
      <Tooltip
        title={`${favoriteDogSet.has(dogId) ? "Remove from" : "Add to"} Favorites`}
        arrow
      >
        <IconButton onClick={() => toggleFavorite(dogId)} edge="end">
          {favoriteDogSet.has(dogId) ? <Favorite /> : <FavoriteBorder />}
        </IconButton>
      </Tooltip>
      <Snackbar
        open={!!snackbarMessage}
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
