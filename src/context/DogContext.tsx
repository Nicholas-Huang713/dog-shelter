import { createContext, useState, ReactNode, useEffect } from "react";
import { DogData } from "../types/dogData";
import {
  fetchDogDetailsList,
  fetchNextSetOfData,
  fetchPreviousSetOfData,
  fetchDogListSorted,
  fetchDogListFilteredByBreed,
  // fetchFavoriteDogDetails,
  fetchMatchFromFaves,
} from "../api/dogRoutes";

interface DogContextType {
  currentDogDetailList: DogData[];
  setCurrentDogDetailList: React.Dispatch<React.SetStateAction<DogData[]>>;
  currentDogIdList: string[];
  setCurrentDogIdList: React.Dispatch<React.SetStateAction<string[]>>;
  favoriteDogIdList: string[];
  setFavoriteDogIdList: React.Dispatch<React.SetStateAction<string[]>>;
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
  sortOption: string;
  setSortOption: React.Dispatch<React.SetStateAction<string>>;
  fetchIdsFilteredAndConvertToDetails: (filterType: string) => void;
  favoriteDogDetailList: DogData[];
  setFavoriteDogDetailList: React.Dispatch<React.SetStateAction<DogData[]>>;
  createMatch: () => void;
  matchLoading: boolean;
  currentMatch: DogData | null;
  matches: DogData[];
  matchIds: string[];
}

export const DogContext = createContext<DogContextType | null>(null);

export const DogProvider = ({ children }: { children: ReactNode }) => {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [matchLoading, setMatchLoading] = useState<boolean>(false);
  const [currentMatch, setCurrentMatch] = useState<DogData | null>(null);
  const [currentDogDetailList, setCurrentDogDetailList] = useState<DogData[]>(
    []
  );
  const [currentDogIdList, setCurrentDogIdList] = useState<string[]>([]);
  const [favoriteDogIdList, setFavoriteDogIdList] = useState<string[]>([]);
  const [favoriteDogDetailList, setFavoriteDogDetailList] = useState<DogData[]>(
    []
  );
  const [matches, setMatches] = useState<DogData[]>([]);
  const [matchIds, setMatchIds] = useState<string[]>([]);
  const [nextUrl, setNextUrl] = useState<string>("");
  const [prevUrl, setPrevUrl] = useState<string>("");
  const [sortOption, setSortOption] = useState<string>("breedAsc");

  const handleError = (e: any) => {
    console.error(e.message || "An unknown error occurred");
  };

  const fetchIdsSortedAndConvertToDetails = async (sortType: string) => {
    setIsLoading(true);
    try {
      const res = await fetchDogListSorted(sortType);
      setCurrentDogIdList(res?.resultIds ?? []);
      await convertDogIdsToDetails(res?.resultIds ?? []);
      setNextUrl(res?.next ?? "");
    } catch (e) {
      handleError(e);
    } finally {
      setIsLoading(false);
    }
  };

  const fetchIdsFilteredAndConvertToDetails = async (filterType: string) => {
    setIsLoading(true);
    try {
      const res = await fetchDogListFilteredByBreed(filterType);
      setCurrentDogIdList(res?.resultIds ?? []);
      await convertDogIdsToDetails(res?.resultIds ?? []);
      setNextUrl(res?.next ?? "");
    } catch (e) {
      handleError(e);
    } finally {
      setIsLoading(false);
    }
  };

  const getDefaultDogList = async () => {
    setIsLoading(true);
    try {
      await fetchIdsSortedAndConvertToDetails("breed:asc");
    } catch (e: any) {
      handleError(e);
    } finally {
      setIsLoading(false);
    }
  };

  const convertDogIdsToDetails = async (resultIdList: string[]) => {
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
      await convertDogIdsToDetails(prevResp?.resultIds ?? []);
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
      await convertDogIdsToDetails(nextResp?.resultIds ?? []);
    } catch (e: any) {
      handleError(e);
    } finally {
      setIsLoading(false);
    }
  };

  const handleSortByField = async (field: string) => {
    switch (field) {
      case "breedAsc":
        setIsLoading(true);
        try {
          await fetchIdsSortedAndConvertToDetails("breed:asc");
        } catch (e: any) {
          handleError(e);
        } finally {
          setIsLoading(false);
        }
        break;
      case "breedDesc":
        setIsLoading(true);
        try {
          await fetchIdsSortedAndConvertToDetails("breed:desc");
        } catch (e: any) {
          handleError(e);
        } finally {
          setIsLoading(false);
        }
        break;
      case "nameAsc":
        setIsLoading(true);
        try {
          await fetchIdsSortedAndConvertToDetails("name:asc");
        } catch (e: any) {
          handleError(e);
        } finally {
          setIsLoading(false);
        }
        break;
      case "nameDesc":
        setIsLoading(true);
        try {
          await fetchIdsSortedAndConvertToDetails("name:desc");
        } catch (e: any) {
          handleError(e);
        } finally {
          setIsLoading(false);
        }
        break;
      case "ageAsc":
        setIsLoading(true);
        try {
          await fetchIdsSortedAndConvertToDetails("age:asc");
        } catch (e: any) {
          handleError(e);
        } finally {
          setIsLoading(false);
        }
        break;
      case "ageDesc":
        setIsLoading(true);
        try {
          await fetchIdsSortedAndConvertToDetails("age:desc");
        } catch (e: any) {
          handleError(e);
        } finally {
          setIsLoading(false);
        }
        break;
      default:
        null;
    }
  };

  const createMatch = async () => {
    setMatchLoading(true);
    try {
      const matchResultId = await fetchMatchFromFaves(favoriteDogIdList);
      const matchDetailsResult = await fetchDogDetailsList([
        matchResultId.match,
      ]);
      if (!matchIds.includes(matchResultId.match)) {
        setMatchIds([...matchIds, matchResultId.match]);
        setMatches([...matches, matchDetailsResult[0]]);
      }
      setCurrentMatch(matchDetailsResult[0]);
    } catch (e: any) {
      handleError(e);
    } finally {
      setMatchLoading(false);
    }
  };

  useEffect(() => {
    handleSortByField(sortOption);
  }, [sortOption, setSortOption]);

  return (
    <DogContext.Provider
      value={{
        currentDogIdList,
        setCurrentDogIdList,
        currentDogDetailList,
        setCurrentDogDetailList,
        favoriteDogIdList,
        setFavoriteDogIdList,
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
        sortOption,
        setSortOption,
        fetchIdsFilteredAndConvertToDetails,
        favoriteDogDetailList,
        setFavoriteDogDetailList,
        createMatch,
        matchLoading,
        currentMatch,
        matches,
        matchIds,
      }}
    >
      {children}
    </DogContext.Provider>
  );
};
