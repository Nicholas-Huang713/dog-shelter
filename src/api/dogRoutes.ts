import { apiClient } from "./";
import { DogSearchResponse, DogQueryParamTypes } from "../types/dogSearch";
// import { DogData } from "../types/dogData";

export const fetchDogIdList = async (params?: DogQueryParamTypes) => {
  try {
    const res = await apiClient.get<DogSearchResponse>("/dogs/search", {
      params,
    });
    return res.data;
  } catch (e: any) {
    console.error(e.message);
  }
};

export const fetchDogDetailsList = async (currentList: string[]) => {
  try {
    const res = await apiClient.post("/dogs", currentList);
    return res.data;
  } catch (e: any) {
    console.error(e.message);
  }
};

export const fetchDogListOrderByBreed = (sortOrder: string) =>
  fetchDogIdList({ sort: `breed:${sortOrder}`, size: 10 });

export const fetchNextSetOfData = async (nextUrl: string) => {
  try {
    const res = await apiClient.get<DogSearchResponse>(nextUrl);
    console.log("next api resp", res.data);
    return res.data;
  } catch (e: any) {
    console.error(e.message);
  }
};

export const fetchPreviousSetOfData = async (prevUrl: string) => {
  try {
    const res = await apiClient.get<DogSearchResponse>(prevUrl);
    console.log("prev api resp", res.data);
    return res.data;
  } catch (e: any) {
    console.error(e.message);
  }
};
