import axios from "axios";
import { User } from "../types/user";

const apiClient = axios.create({
  baseURL: "https://frontend-take-home-service.fetch.com",
  withCredentials: true,
  headers: { "Content-Type": "application/json" },
});

export const handleLogin = (userData: User) =>
  apiClient.post("/auth/login", userData);

export const handleLogout = () => apiClient.post("/auth/logout");
