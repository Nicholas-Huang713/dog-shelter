import { useEffect } from "react";
import { useDogContext } from "../../hooks/useDogContext";
import DogList from "../../components/DogList/DogList";
import { Box, Typography, Button } from "@mui/material";
export default function Favorites() {
  const {
    favoriteDogDetailList,
    favoriteDogIdList,
    getFavoriteDogs,
    createMatch,
  } = useDogContext();

  useEffect(() => {
    getFavoriteDogs();
  }, [favoriteDogIdList]);

  const handleMatching = async () => {
    try {
      const res = await createMatch();
    } catch (e: any) {
      console.error(e.message);
    }
  };

  return (
    <>
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
            Favorited Dogs
          </Typography>
          <Box
            sx={{ display: "flex", alignItems: "center", marginLeft: "auto" }}
          >
            <Button onClick={handleMatching}>Create Match</Button>
          </Box>
        </Box>
        <DogList dogList={favoriteDogDetailList ?? []} />
      </div>
    </>
  );
}
