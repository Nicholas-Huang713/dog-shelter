import React from "react";
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
import { Favorite, FavoriteBorder } from "@mui/icons-material";
import { DogData } from "../../types/dogData";
import { useDogContext } from "../../hooks/useDogContext";

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
  const handleFavorite = (id: string) => {
    console.log("Favorite item with id:", id);
  };

  const handleImageClick = (dogId: string) => {
    console.log(`Clicked on image for dog with ID: ${dogId}`);
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
                            onClick={() => handleImageClick(dog.id)}
                          />
                        </Tooltip>
                      </ListItemAvatar>
                      <ListItemText
                        primary={dog.name}
                        secondary={`Breed: ${dog.breed} | Zipcode: ${dog.zip_code} | Age: ${dog.age}`}
                      />
                      <ListItemIcon>
                        <Tooltip title="Add to Favorites" arrow>
                          <IconButton
                            onClick={() => handleFavorite(dog.id)}
                            edge="end"
                          >
                            <FavoriteBorder />
                          </IconButton>
                        </Tooltip>
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
    </>
  );
}
