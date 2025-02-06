import { useEffect } from "react";
import DogList from "../DogList/DogList";
import { useDogContext } from "../../hooks/useDogContext";
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
      <DogList
        dogList={currentDogDetailList}
        handleNext={handleNext}
        handlePrevious={handlePrevious}
        nextUrl={nextUrl}
        prevUrl={prevUrl}
      />
    </>
  );
}
