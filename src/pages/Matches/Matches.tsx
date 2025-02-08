import { Box, Typography } from "@mui/material";
import DogList from "../../components/DogList/DogList";
import { useDogContext } from "../../hooks/useDogContext";
import { useAuthRedirect } from "../../hooks/useAuthRedirect";

export default function Matches() {
  useAuthRedirect();
  const { matches } = useDogContext();
  const hasMatches = matches && matches.length > 0;

  return (
    <Box
      sx={{
        maxWidth: { xs: "90vw", sm: 600 },
        margin: "auto",
        textAlign: "center",
        paddingBottom: 4,
      }}
    >
      <Box
        sx={{
          borderBottom: "2px solid black",
          padding: "10px 0",
          display: "flex",
          justifyContent: "center",
        }}
      >
        <Typography variant="h4" gutterBottom>
          Matched Dogs
        </Typography>
      </Box>
      {!hasMatches ? (
        <Typography sx={{ marginTop: 3, color: "text.secondary" }}>
          No matches found. Try adding more favorites!
        </Typography>
      ) : (
        <DogList dogList={matches} isMatches={true} />
      )}
    </Box>
  );
}
