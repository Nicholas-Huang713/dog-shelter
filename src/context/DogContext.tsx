import { createContext, useState, ReactNode } from "react";
import { DogData } from "../types/dogData";
import {
  fetchDogDetailsList,
  fetchNextSetOfData,
  fetchPreviousSetOfData,
  fetchDogListOrderByBreed,
} from "../api/dogRoutes";

interface DogContextType {
  currentDogDetailList: DogData[];
  setCurrentDogDetailList: React.Dispatch<React.SetStateAction<DogData[]>>;
  currentDogIdList: string[];
  setCurrentDogIdList: React.Dispatch<React.SetStateAction<string[]>>;
  favoriteDogList: string[];
  setFavoriteDogList: React.Dispatch<React.SetStateAction<string[]>>;
  nextUrl: string;
  setNextUrl: React.Dispatch<React.SetStateAction<string>>;
  prevUrl: string;
  setPrevUrl: React.Dispatch<React.SetStateAction<string>>;
  convertDogIdsToDetails: (resultIdList: string[]) => void;
  handlePrevious: () => void;
  handleNext: () => void;
  isLoading: boolean;
  setIsLoading: React.Dispatch<React.SetStateAction<boolean>>;
  getDefaultDogList: () => void;
}

export const DogContext = createContext<DogContextType | null>(null);

export const DogProvider = ({ children }: { children: ReactNode }) => {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [currentDogDetailList, setCurrentDogDetailList] = useState<DogData[]>(
    []
  );
  const [currentDogIdList, setCurrentDogIdList] = useState<string[]>([]);
  const [favoriteDogList, setFavoriteDogList] = useState<string[]>([]);
  const [nextUrl, setNextUrl] = useState<string>("");
  const [prevUrl, setPrevUrl] = useState<string>("");

  const handleError = (e: any) => {
    console.error(e.message || "An unknown error occurred");
  };

  const getDefaultDogList = async () => {
    setIsLoading(true);
    try {
      const res = await fetchDogListOrderByBreed("asc");
      convertDogIdsToDetails(res?.resultIds ?? []);
      setNextUrl(res?.next ?? "");
    } catch (e: any) {
      handleError(e);
    } finally {
      setIsLoading(false);
    }
  };

  const convertDogIdsToDetails = async (resultIdList: string[]) => {
    setCurrentDogIdList(resultIdList);
    try {
      const res = await fetchDogDetailsList(resultIdList);
      setCurrentDogDetailList(res ?? []);
    } catch (e: any) {
      handleError(e);
    }
  };

  const handlePrevious = async () => {
    setIsLoading(true);
    try {
      const prevResp = await fetchPreviousSetOfData(prevUrl);
      setCurrentDogIdList(prevResp?.resultIds ?? []);
      setNextUrl(prevResp?.next ?? "");
      setPrevUrl(prevResp?.prev ?? "");
      const newDogDetailsList = await fetchDogDetailsList(
        prevResp?.resultIds ?? []
      );
      setCurrentDogDetailList(newDogDetailsList);
    } catch (e: any) {
      handleError(e);
    } finally {
      setIsLoading(false);
    }
  };
  const handleNext = async () => {
    setIsLoading(true);
    try {
      const nextResp = await fetchNextSetOfData(nextUrl);
      setCurrentDogIdList(nextResp?.resultIds ?? []);
      setNextUrl(nextResp?.next ?? "");
      setPrevUrl(nextResp?.prev ?? "");
      const newDogDetailsList = await fetchDogDetailsList(
        nextResp?.resultIds ?? []
      );
      setCurrentDogDetailList(newDogDetailsList);
    } catch (e: any) {
      handleError(e);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <DogContext.Provider
      value={{
        currentDogIdList,
        setCurrentDogIdList,
        currentDogDetailList,
        setCurrentDogDetailList,
        favoriteDogList,
        setFavoriteDogList,
        nextUrl,
        setNextUrl,
        prevUrl,
        setPrevUrl,
        convertDogIdsToDetails,
        handlePrevious,
        handleNext,
        isLoading,
        setIsLoading,
        getDefaultDogList,
      }}
    >
      {children}
    </DogContext.Provider>
  );
};
