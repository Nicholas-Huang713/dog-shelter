import React, { useState } from "react";
import {
  List,
  ListItem,
  ListItemText,
  ListItemIcon,
  Divider,
  IconButton,
  Button,
  ListItemAvatar,
  Avatar,
  Tooltip,
  Box,
  CircularProgress,
} from "@mui/material";
import FavoriteButton from "../FavoriteButton/FavoriteButton";
import { DogData } from "../../types/dogData";
import { useDogContext } from "../../hooks/useDogContext";
import DetailsModal from "../DetailsModal/DetailsModal";
interface DogListProps {
  dogList: DogData[];
  handlePrevious: () => void;
  handleNext: () => void;
  nextUrl: string | null;
  prevUrl: string | null;
}

export default function DogList({
  dogList,
  handlePrevious,
  handleNext,
  nextUrl,
  prevUrl,
}: DogListProps) {
  const { isLoading } = useDogContext();
  const [currentDogDetails, setCurrentDogDetails] = useState<DogData | null>(
    null
  );
  const [openModal, setOpenModal] = useState(false);
  const handleOpen = () => setOpenModal(true);

  const handleImageClick = (dogDetails: DogData) => {
    setCurrentDogDetails(dogDetails);
    handleOpen();
  };

  return (
    <>
      {isLoading ? (
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            height: "calc(100vh - 250px)",
            maxHeight: "calc(100vh - 250px)",
            overflowY: "auto",
            padding: "20px 10px",
          }}
        >
          <CircularProgress />
        </Box>
      ) : (
        <>
          <Box
            sx={{
              maxHeight: "calc(100vh - 250px)",
              overflowY: "auto",
              padding: "0 10px",
            }}
          >
            <List>
              {dogList.length === 0 ? (
                <>No dogs to display</>
              ) : (
                dogList.map((dog: DogData) => (
                  <React.Fragment key={dog.id}>
                    <ListItem>
                      <ListItemAvatar>
                        <Tooltip
                          title={`Click to see details of ${dog.name}`}
                          arrow
                        >
                          <Avatar
                            alt={dog.name}
                            src={dog.img}
                            sx={{ cursor: "pointer" }}
                            onClick={() => handleImageClick(dog)}
                          />
                        </Tooltip>
                      </ListItemAvatar>
                      <ListItemText
                        primary={dog.name}
                        secondary={`Breed: ${dog.breed} | Zipcode: ${dog.zip_code} | Age: ${dog.age}`}
                      />
                      <ListItemIcon>
                        <FavoriteButton dogId={dog.id} />
                      </ListItemIcon>
                    </ListItem>
                    <Divider />
                  </React.Fragment>
                ))
              )}
            </List>
          </Box>
        </>
      )}
      <div style={{ marginTop: 20 }}>
        <Button
          variant="contained"
          onClick={() => handlePrevious()}
          disabled={prevUrl === ""}
        >
          Previous
        </Button>
        <Button
          variant="contained"
          onClick={() => handleNext()}
          disabled={nextUrl === ""}
          style={{ marginLeft: 10 }}
        >
          Next
        </Button>
      </div>
      <DetailsModal
        openModal={openModal}
        setOpenModal={setOpenModal}
        currentDogDetails={currentDogDetails}
        setCurrentDogDetails={setCurrentDogDetails}
      />
    </>
  );
}
