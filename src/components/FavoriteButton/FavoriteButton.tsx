import { useMemo, useState, useCallback } from "react";
import { IconButton, Tooltip, Snackbar, Alert } from "@mui/material";
import { Favorite, FavoriteBorder } from "@mui/icons-material";
import { useDogContext } from "../../hooks/useDogContext";
import { DogData } from "../../types/dogData";
interface FavoriteButtonProps {
  dogDetails: DogData;
}

export default function FavoriteButton({ dogDetails }: FavoriteButtonProps) {
  const { id } = dogDetails;
  const { favoriteDogIdList, setFavoriteDogIdList, setFavoriteDogDetailList } =
    useDogContext();
  const [snackbarMessage, setSnackbarMessage] = useState<string | null>(null);

  const isFavorite = useMemo(
    () => favoriteDogIdList.includes(id),
    [favoriteDogIdList, id]
  );

  const toggleFavorite = useCallback(() => {
    setFavoriteDogIdList((prevFavorites) => {
      const updatedFavorites = new Set(prevFavorites);
      let message = "";
      if (updatedFavorites.has(id)) {
        updatedFavorites.delete(id);
        setFavoriteDogDetailList((prevDogDetailList) => {
          const updatedDogDetailList = prevDogDetailList.filter(
            (dog) => dog.id !== id
          );
          return updatedDogDetailList;
        });
        message = "Removed from Favorites";
      } else {
        updatedFavorites.add(id);
        setFavoriteDogDetailList((prevDogDetailList) => {
          return [dogDetails, ...prevDogDetailList];
        });
        message = "Added to Favorites";
      }
      setSnackbarMessage(message);
      return Array.from(updatedFavorites);
    });
  }, [id, setFavoriteDogIdList]);

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
