import { Box, Typography } from "@mui/material";
import DogList from "../../components/DogList/DogList";
import { useDogContext } from "../../hooks/useDogContext";
import { useAuthRedirect } from "../../hooks/useAuthRedirect";

export default function Matches() {
  useAuthRedirect();
  const { matches } = useDogContext();

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
          Matched Dogs
        </Typography>
      </Box>
      <DogList dogList={matches ?? []} isMatches={true} />
    </div>
  );
}
