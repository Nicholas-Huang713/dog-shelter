import { apiClient } from "./";
import { DogSearchResponse, DogQueryParamTypes } from "../types/dogSearch";

const handleError = (e: any) => console.error(e.message);

export const fetchDogIdList = async (params?: DogQueryParamTypes) => {
  try {
    const res = await apiClient.get<DogSearchResponse>("/dogs/search", {
      params,
    });
    return res.data;
  } catch (e: any) {
    handleError(e);
  }
};

export const fetchDogDetailsList = async (currentList: string[]) => {
  try {
    const res = await apiClient.post("/dogs", currentList);
    return res.data;
  } catch (e: any) {
    handleError(e);
  }
};

export const fetchDogListSorted = (sortType: string) =>
  fetchDogIdList({ sort: sortType, size: 10 });

export const fetchDogListFilteredByBreed = (filterType: string) =>
  fetchDogIdList({ breeds: [filterType], size: 10 });

export const fetchNextSetOfData = async (nextUrl: string) => {
  try {
    const res = await apiClient.get<DogSearchResponse>(nextUrl);
    return res.data;
  } catch (e: any) {
    handleError(e);
  }
};

export const fetchPreviousSetOfData = async (prevUrl: string) => {
  try {
    const res = await apiClient.get<DogSearchResponse>(prevUrl);
    return res.data;
  } catch (e: any) {
    handleError(e);
  }
};

export const fetchBreedList = async () => {
  try {
    const res = await apiClient.get("/dogs/breeds");
    return res.data;
  } catch (e: any) {
    handleError(e);
  }
};

export const fetchFavoriteDogDetails = async (faveIdList: string[]) => {
  try {
    const res = await apiClient.post("/dogs", faveIdList);
    return res.data;
  } catch (e: any) {
    handleError(e);
  }
};

export const fetchMatchFromFaves = async (faveIdList: string[]) => {
  try {
    const res = await apiClient.post("/dogs/match", faveIdList);
    console.log("fetchMatchFromFaves", res.data); //should be this format string[]
    return res.data;
  } catch (e: any) {
    handleError(e);
  }
};
