import axios from "axios";

export const apiClient = axios.create({
  baseURL: "https://frontend-take-home-service.fetch.com",
  withCredentials: true,
  headers: { "Content-Type": "application/json" },
});
