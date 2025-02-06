import { Modal, Box, Typography, IconButton } from "@mui/material";
import { DogData } from "../../types/dogData";
import Close from "@mui/icons-material/Close";
import FavoriteButton from "../FavoriteButton/FavoriteButton";
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
  const handleClose = () => {
    setCurrentDogDetails(null);
    setOpenModal(false);
  };

  return (
    <>
      <Modal
        open={openModal}
        onClose={handleClose}
        aria-labelledby="modal-title"
        aria-describedby="modal-description"
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
            flexDirection: { xs: "column", md: "row" }, // Column for small screens, row for larger
            alignItems: "center",
            gap: 2,
            width: { xs: "90vw", sm: 400, md: 500 }, // Adjust width for different screens
            maxWidth: 500,
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
          >
            <Close />
          </IconButton>
          <Box
            component="img"
            src={currentDogDetails?.img || "/placeholder.jpg"}
            alt="Pet"
            sx={{
              width: 250,
              height: 250,
              objectFit: "cover",
              borderRadius: 2,
            }}
          />

          <Box>
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between", // Pushes button to the right
                gap: 1,
              }}
            >
              <Typography variant="h6" id="modal-title">
                Name: {currentDogDetails?.name || "N/A"}
              </Typography>
              <FavoriteButton dogId={currentDogDetails?.id || ""} />
            </Box>
            <Typography variant="body1">
              Age: {currentDogDetails?.age || "N/A"}
            </Typography>
            <Typography variant="body1">
              Zipcode: {currentDogDetails?.zip_code || "N/A"}
            </Typography>
            <Typography variant="body1">
              Breed: {currentDogDetails?.breed || "N/A"}
            </Typography>
          </Box>
        </Box>
      </Modal>
    </>
  );
};

export default DetailsModal;
