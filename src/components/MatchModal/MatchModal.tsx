import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Button,
  Typography,
  Avatar,
  CircularProgress,
  Box,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import { useDogContext } from "../../hooks/useDogContext";
import { useNavigateTo } from "../../hooks/useNavigateTo";

interface MatchModalProps {
  open: boolean;
  onClose: () => void;
}

export default function MatchModal({ open, onClose }: MatchModalProps) {
  const { matchLoading, currentMatch } = useDogContext();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const { goMatches } = useNavigateTo();

  const handleSeeMatches = () => {
    goMatches();
    onClose();
  };
  return (
    <Dialog
      open={open}
      onClose={onClose}
      maxWidth="sm"
      fullWidth
      aria-labelledby="match-dialog-title"
      aria-describedby="match-dialog-description"
      role="alertdialog"
    >
      {matchLoading ? (
        <DialogContent>
          <Box
            display="flex"
            flexDirection="column"
            alignItems="center"
            justifyContent="center"
            height={200}
            textAlign="center"
          >
            <CircularProgress size={50} aria-label="Loading..." />
            <Typography variant="h6" mt={2} fontWeight={600}>
              Finding the best match for you...
            </Typography>
          </Box>
        </DialogContent>
      ) : (
        <>
          <DialogTitle id="match-dialog-title" textAlign="center">
            🐶 Match Found!
          </DialogTitle>
          <DialogContent id="match-dialog-description">
            <Box display="flex" flexDirection="column" alignItems="center">
              <Avatar
                src={currentMatch?.img}
                alt={currentMatch?.name}
                sx={{
                  width: isMobile ? 120 : 150,
                  height: isMobile ? 120 : 150,
                  mb: 2,
                }}
              />
              <Typography variant={isMobile ? "h6" : "h5"} fontWeight="bold">
                {currentMatch?.name}
              </Typography>
              <Typography variant="body1" fontSize="1.1rem" mt={1}>
                Breed: <strong>{currentMatch?.breed}</strong>
              </Typography>
              <Typography
                variant="body2"
                fontSize="1rem"
                color="text.secondary"
              >
                Age: {currentMatch?.age} years
              </Typography>
            </Box>
          </DialogContent>
          <DialogActions sx={{ justifyContent: "center", pb: 2 }}>
            <Button
              variant="contained"
              color="primary"
              onClick={onClose}
              aria-label="Close match details"
            >
              Close
            </Button>
            <Button
              variant="contained"
              color="primary"
              onClick={handleSeeMatches}
              aria-label="View matchs"
            >
              See Matches
            </Button>
          </DialogActions>
        </>
      )}
    </Dialog>
  );
}
