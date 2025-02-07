import { useNavigate } from "react-router-dom";

export const useNavigateTo = () => {
  const navigate = useNavigate();

  return {
    goHome: () => navigate("/"),
    goDogSearch: () => navigate("/dogSearch"),
    goLogin: () => navigate("/login"),
    goFavorites: () => navigate("/favorites"),
  };
};
