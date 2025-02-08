import React, { useState, useCallback } from "react";
import {
  List,
  ListItem,
  ListItemText,
  ListItemIcon,
  Divider,
  ListItemAvatar,
  Avatar,
  Tooltip,
  Box,
  CircularProgress,
  Typography,
} from "@mui/material";
import FavoriteButton from "../FavoriteButton/FavoriteButton";
import { DogData } from "../../types/dogData";
import { useDogContext } from "../../hooks/useDogContext";
import DetailsModal from "../DetailsModal/DetailsModal";

interface DogListProps {
  dogList: DogData[];
  isMatches: boolean;
}

export default function DogList({ dogList, isMatches }: DogListProps) {
  const { isLoading } = useDogContext();
  const [currentDogDetails, setCurrentDogDetails] = useState<DogData | null>(
    null
  );
  const [openModal, setOpenModal] = useState(false);

  const handleImageClick = useCallback((dogDetails: DogData) => {
    setCurrentDogDetails(dogDetails);
    setOpenModal(true);
  }, []);

  return (
    <>
      {isLoading ? (
        <Box
          display="flex"
          justifyContent="center"
          alignItems="center"
          height="calc(100vh - 250px)"
        >
          <CircularProgress />
        </Box>
      ) : dogList.length === 0 ? (
        <Typography align="center" sx={{ mt: 3, color: "text.secondary" }}>
          No dogs to display
        </Typography>
      ) : (
        <Box
          sx={{
            maxHeight: "calc(100vh - 250px)",
            overflowY: "auto",
            padding: "0 10px",
            scrollbarWidth: "thin",
          }}
        >
          <List>
            {dogList.map((dog: DogData) => (
              <React.Fragment key={dog.id}>
                <ListItem>
                  <ListItemAvatar>
                    <Tooltip
                      title={`Click to see details of ${dog.name}`}
                      arrow
                    >
                      <Avatar
                        alt={dog.name}
                        src={dog.img || "/placeholder.jpg"}
                        sx={{ cursor: "pointer", width: 56, height: 56 }}
                        onClick={() => handleImageClick(dog)}
                        onError={(e) => {
                          const img = e.currentTarget as HTMLImageElement;
                          img.src = "/placeholder.jpg"; // ✅ No TypeScript error
                        }}
                      />
                    </Tooltip>
                  </ListItemAvatar>

                  {/* Dog Info */}
                  <ListItemText
                    primary={dog.name}
                    secondary={`Breed: ${dog.breed} | Zip: ${dog.zip_code} | Age: ${dog.age}`}
                  />
                  {!isMatches && (
                    <ListItemIcon>
                      <FavoriteButton dogDetails={dog} />
                    </ListItemIcon>
                  )}
                </ListItem>
                <Divider />
              </React.Fragment>
            ))}
          </List>
        </Box>
      )}
      <DetailsModal
        openModal={openModal}
        setOpenModal={setOpenModal}
        currentDogDetails={currentDogDetails}
        setCurrentDogDetails={setCurrentDogDetails}
      />
    </>
  );
}
