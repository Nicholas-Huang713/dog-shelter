import { User } from "../types/user";
import { apiClient } from "./";

export const handleLogin = (userData: User) =>
  apiClient.post("/auth/login", userData);

export const handleLogout = () => apiClient.post("/auth/logout");
