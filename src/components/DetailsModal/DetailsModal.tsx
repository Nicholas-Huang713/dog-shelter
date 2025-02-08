import { Modal, Box, Typography, IconButton } from "@mui/material";
import { DogData } from "../../types/dogData";
import CloseIcon from "@mui/icons-material/Close";
import FavoriteButton from "../FavoriteButton/FavoriteButton";
import { useCallback } from "react";

interface DetailsModalProps {
  openModal: boolean;
  setOpenModal: React.Dispatch<React.SetStateAction<boolean>>;
  currentDogDetails: DogData | null;
  setCurrentDogDetails: React.Dispatch<React.SetStateAction<DogData | null>>;
}

const DetailsModal = ({
  openModal,
  setOpenModal,
  currentDogDetails,
  setCurrentDogDetails,
}: DetailsModalProps) => {
  const handleClose = useCallback(() => {
    setCurrentDogDetails(null);
    setOpenModal(false);
  }, [setCurrentDogDetails, setOpenModal]);

  return (
    <Modal
      open={openModal}
      onClose={handleClose}
      aria-labelledby="dog-details-title"
      aria-describedby="dog-details-description"
      slotProps={{
        backdrop: {
          sx: { backgroundColor: "rgba(0, 0, 0, 0.75)" },
        },
      }}
    >
      <Box
        sx={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          bgcolor: "background.paper",
          boxShadow: 24,
          p: 3,
          display: "flex",
          flexDirection: { xs: "column", md: "row" },
          alignItems: "center",
          gap: 3,
          width: { xs: "90vw", sm: 400, md: 500 },
          maxWidth: 500,
          maxHeight: "80vh",
          overflowY: "auto",
          borderRadius: 2,
        }}
      >
        <IconButton
          onClick={handleClose}
          sx={{
            position: "absolute",
            top: 10,
            right: 10,
            color: "text.primary",
          }}
          aria-label="Close details modal"
        >
          <CloseIcon />
        </IconButton>
        <Box
          component="img"
          src={currentDogDetails?.img || "/placeholder.jpg"}
          alt={currentDogDetails?.name || "Dog image"}
          sx={{
            width: { xs: 200, md: 250 },
            height: { xs: 200, md: 250 },
            objectFit: "cover",
            borderRadius: 2,
            backgroundColor: "grey.200",
          }}
          onError={(e) => (e.currentTarget.src = "/placeholder.jpg")}
        />

        {/* Dog Details */}
        <Box sx={{ flex: 1 }}>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              gap: 1,
            }}
          >
            <Typography variant="h6" id="dog-details-title">
              {currentDogDetails?.name || "Unknown Dog"}
            </Typography>
            {currentDogDetails && (
              <FavoriteButton dogId={currentDogDetails.id} />
            )}
          </Box>
          <Typography variant="body1">
            <strong>Age:</strong> {currentDogDetails?.age || "N/A"}
          </Typography>
          <Typography variant="body1">
            <strong>Zipcode:</strong> {currentDogDetails?.zip_code || "N/A"}
          </Typography>
          <Typography variant="body1">
            <strong>Breed:</strong> {currentDogDetails?.breed || "N/A"}
          </Typography>
        </Box>
      </Box>
    </Modal>
  );
};

export default DetailsModal;
