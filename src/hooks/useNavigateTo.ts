import { useNavigate } from "react-router-dom";

export const useNavigateTo = () => {
  const navigate = useNavigate();

  return {
    goHome: () => navigate("/"),
    goDashboard: () => navigate("/dashboard"),
    goLogin: () => navigate("/login"),
    goFavorites: () => navigate("/favorites"),
  };
};
