import { useEffect } from "react";
import DogList from "../DogList/DogList";
import { useDogContext } from "../../hooks/useDogContext";
import { Button } from "@mui/material";

export default function DogSearchList() {
  const {
    currentDogDetailList,
    nextUrl,
    prevUrl,
    handleNext,
    handlePrevious,
    getDefaultDogList,
  } = useDogContext();

  useEffect(() => {
    getDefaultDogList();
  }, []);

  return (
    <>
      <DogList dogList={currentDogDetailList} isMatches={false} />
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
