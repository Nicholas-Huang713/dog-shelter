import { DogContext } from "./../context/DogContext";
import { useContext } from "react";

export const useDogContext = () => {
  const context = useContext(DogContext);
  if (!context) {
    throw new Error("useDogContext must be used within an AuthProvider");
  }
  return context;
};
